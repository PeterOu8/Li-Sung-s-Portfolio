import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Enter at least 2 characters.").max(50, "Use 50 characters or fewer."),
  email: z.string().trim().min(1, "Enter your email address.").max(50, "Use 50 characters or fewer.").email("Enter a valid email address."),
  subject: z.string().trim().min(1, "Enter a subject.").max(30, "Use 30 characters or fewer."),
  message: z.string().trim().min(1, "Enter a message.").max(500, "Use 500 characters or fewer."),
  website: z.string().max(200).default(""),
});

export type ContactFormInput = z.input<typeof contactFormSchema>;
export type ContactFormValues = z.output<typeof contactFormSchema>;

export type ContactSubmissionResult =
  | { success: true }
  | { success: false; message: string };
