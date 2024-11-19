import dynamicIconImports from "lucide-react/dynamicIconImports";
import { z } from "zod";

const iconStruct = z.object({
    name: z.string(),
    href: z.string().url(),
    icon: z.custom<keyof typeof dynamicIconImports>()
});

const project = z.object({
    name: z.string(),
    description: z.string(),
    href: z.string().url().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()),
    links: z.array(iconStruct),
});

const experience = z.object({
    name: z.string(),
    title: z.string(),
    href: z.string(),
    logo: z.string(),
    start: z.string(),
    end: z.string().optional(),
    description: z.array(z.string()).optional(),
    links: z.array(iconStruct).optional(),
});

export const ContactFormSchema = z.object({
    name: z.string()
        .min(1, { message: "Name is required" })
        .min(2, { message: "Must be at least 2 characters" })
        .max(50, { message: "Maximum 50 characters" }),
    email: z.string()
        .min(1, { message: "Email is required" })
        .max(50, { message: "Maximum 50 characters" })
        .email("Invalid email"),
    subject: z.string()
        .min(1, { message: "Subject is required" })
        .max(30 , { message: "Maximum 30 characters" }),
    message: z.string()
        .min(1, { message: "Message is required" })
        .max(500, { message: "Maximum 500 characters" }),
});

export type Project = z.infer<typeof project>;
export type Experience = z.infer<typeof experience>;

export const workSchema = z.object({ work: z.array(experience) });
export const educationSchema = z.object({ education: z.array(experience) });
export const projectSchema = z.object({ projects: z.array(project) });
export const socialSchema = z.object({ socials: z.array(iconStruct) });