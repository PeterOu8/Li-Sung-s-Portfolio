import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import test from "node:test";
import { contactFormSchema } from "../src/features/contact/schema.ts";

async function createLimiter() {
  const limiterModule = await import(`../src/features/contact/rate-limit.ts?test=${randomUUID()}`);
  return limiterModule.allowContactSubmission;
}

const validMessage = {
  name: "  Test Visitor  ",
  email: "visitor@example.test",
  subject: "An opportunity",
  message: "I would like to discuss a project.",
};

test("contact validation trims input and supports the existing payload without a bot-trap field", () => {
  const result = contactFormSchema.parse(validMessage);
  assert.equal(result.name, "Test Visitor");
  assert.equal(result.website, "");
});

test("contact validation rejects invalid, empty and oversized fields", () => {
  const invalidValues = [
    { name: " " },
    { email: "invalid-address" },
    { subject: "x".repeat(31) },
    { message: "x".repeat(501) },
    { website: "x".repeat(201) },
  ];

  for (const values of invalidValues) {
    assert.equal(contactFormSchema.safeParse({ ...validMessage, ...values }).success, false);
  }

  assert.equal(contactFormSchema.safeParse(null).success, false);
});

test("sender limits are case-insensitive and leave other senders available", async () => {
  const allowSubmission = await createLimiter();
  const sender = { email: "visitor@example.test", ipAddress: null };

  for (let attempt = 0; attempt < 3; attempt += 1) {
    assert.equal(allowSubmission(sender), true);
  }

  assert.equal(allowSubmission({ ...sender, email: "VISITOR@example.test" }), false);
  assert.equal(allowSubmission({ ...sender, email: "another@example.test" }), true);
});

test("one client address cannot bypass its limit by changing email address", async () => {
  const allowSubmission = await createLimiter();
  const ipAddress = "192.0.2.1";

  for (let attempt = 0; attempt < 5; attempt += 1) {
    assert.equal(allowSubmission({ email: `visitor${attempt}@example.test`, ipAddress }), true);
  }

  assert.equal(allowSubmission({ email: "another@example.test", ipAddress }), false);
  assert.equal(allowSubmission({ email: "another@example.test", ipAddress: "192.0.2.2" }), true);
});

test("the total limit bounds attempts even when sender and client address change", async () => {
  const allowSubmission = await createLimiter();

  for (let attempt = 0; attempt < 20; attempt += 1) {
    assert.equal(allowSubmission({ email: `visitor${attempt}@example.test`, ipAddress: null }), true);
  }

  assert.equal(allowSubmission({ email: "another@example.test", ipAddress: null }), false);
});

test("expired limits allow recovery after fifteen minutes", async (context) => {
  let now = 1_000;
  context.mock.method(Date, "now", () => now);
  const allowSubmission = await createLimiter();
  const sender = { email: "visitor@example.test", ipAddress: null };

  for (let attempt = 0; attempt < 3; attempt += 1) {
    assert.equal(allowSubmission(sender), true);
  }

  assert.equal(allowSubmission(sender), false);
  now += 15 * 60 * 1_000;
  assert.equal(allowSubmission(sender), true);
});
