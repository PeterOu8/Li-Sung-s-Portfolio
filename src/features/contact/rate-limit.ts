import "server-only";

import { createHash } from "node:crypto";

const WINDOW_MS = 15 * 60 * 1_000;

interface RateLimitBucket {
  count: number;
  expiresAt: number;
}

interface ContactRateLimitInput {
  email: string;
  ipAddress: string | null;
}

const buckets = new Map<string, RateLimitBucket>();

// This bounds each running instance. Resend idempotency handles duplicate delivery across instances.
export function allowContactSubmission({ email, ipAddress }: ContactRateLimitInput): boolean {
  const now = Date.now();

  for (const [key, bucket] of buckets) {
    if (bucket.expiresAt <= now) buckets.delete(key);
  }

  const sender = createHash("sha256").update(email.toLowerCase()).digest("hex");
  const limits = [
    { key: `sender:${sender}`, maximum: 3 },
    { key: "total", maximum: 20 },
  ];

  if (ipAddress) {
    const address = createHash("sha256").update(ipAddress).digest("hex");
    limits.push({ key: `ip:${address}`, maximum: 5 });
  }

  if (limits.some(({ key, maximum }) => (buckets.get(key)?.count ?? 0) >= maximum)) {
    return false;
  }

  for (const { key } of limits) {
    const bucket = buckets.get(key) ?? { count: 0, expiresAt: now + WINDOW_MS };
    bucket.count += 1;
    buckets.set(key, bucket);
  }

  return true;
}
