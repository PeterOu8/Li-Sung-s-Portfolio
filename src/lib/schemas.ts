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

export type Project = z.infer<typeof project>;
export type Experience = z.infer<typeof experience>;

export const workSchema = z.object({ work: z.array(experience) });
export const educationSchema = z.object({ education: z.array(experience) });
export const projectSchema = z.object({ projects: z.array(project) });
export const socialSchema = z.object({ socials: z.array(iconStruct) });