"use server";

import { createHash } from "node:crypto";
import { isIP } from "node:net";
import { headers } from "next/headers";
import { Resend } from "resend";
import { allowContactSubmission } from "@/features/contact/rate-limit";
import { contactFormSchema, type ContactSubmissionResult } from "@/features/contact/schema";

const DELIVERY_ERROR = "Your message could not be sent. Your details are still here. Please try again or use the email link below.";

export async function sendContactMessage(input: unknown): Promise<ContactSubmissionResult> {
  const parsed = contactFormSchema.safeParse(input);

  if (!parsed.success) {
    return { success: false, message: "Please check your details and try again." };
  }

  if (parsed.data.website) {
    return { success: false, message: "Your message could not be sent. Please use the email link below." };
  }

  try {
    const requestHeaders = await headers();
    // Only trust the client address supplied by the deployed Vercel proxy.
    const forwardedAddress = process.env.VERCEL === "1"
      ? requestHeaders.get("x-vercel-forwarded-for")?.split(",")[0]?.trim()
      : undefined;
    const ipAddress = forwardedAddress && isIP(forwardedAddress) ? forwardedAddress : null;

    if (!allowContactSubmission({ email: parsed.data.email, ipAddress })) {
      return { success: false, message: "Too many attempts. Please wait 15 minutes before trying again, or use the email link below." };
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return { success: false, message: DELIVERY_ERROR };
    }

    const { name, email, subject, message } = parsed.data;
    const emailPayload = {
      from: "Lisungou.com <contact@lisungou.com>",
      to: ["peter1031734590@gmail.com"],
      replyTo: [email],
      subject: `Lisungou.com - ${subject}!`,
      text: `Name:\n${name}\n\nEmail:\n${email}\n\nSubject:\n${subject}\n\nMessage:\n${message}`,
    };
    // Keep the key stable on retries, including when the first response is lost.
    const fingerprint = createHash("sha256").update(JSON.stringify(emailPayload)).digest("hex");
    const resend = new Resend(apiKey);
    const result = await resend.emails.send(emailPayload, {
      idempotencyKey: `contact/${fingerprint}`,
      signal: AbortSignal.timeout(10_000),
    });

    if (result.error || !result.data) {
      return { success: false, message: DELIVERY_ERROR };
    }

    return { success: true };
  } catch {
    return { success: false, message: DELIVERY_ERROR };
  }
}
