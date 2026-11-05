import type { ContactFormInput } from "./schema";

export interface ContactField {
  name: Exclude<keyof ContactFormInput, "website">;
  label: string;
  description: string;
  maxLength: number;
  type?: "text" | "email";
  autoComplete?: string;
  multiline?: boolean;
  fullWidth?: boolean;
}

export const contactFields: readonly ContactField[] = [
  {
    name: "name",
    label: "Name",
    description: "The name you would like me to use.",
    maxLength: 50,
    autoComplete: "name",
  },
  {
    name: "email",
    label: "Email",
    description: "The address I can reply to.",
    maxLength: 50,
    type: "email",
    autoComplete: "email",
  },
  {
    name: "subject",
    label: "Subject",
    description: "A short summary, up to 30 characters.",
    maxLength: 30,
    fullWidth: true,
  },
  {
    name: "message",
    label: "Message",
    description: "Tell me a little more, up to 500 characters.",
    maxLength: 500,
    multiline: true,
    fullWidth: true,
  },
];
