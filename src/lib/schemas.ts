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

export type Project = z.infer<typeof project>;
export const projectSchema = z.object({ projects: z.array(project) });
export const socialSchema = z.object({ socials: z.array(iconStruct) });