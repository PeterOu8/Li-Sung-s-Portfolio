import data from "@/data/socials.json";
import { z } from "zod"
import dynamicIconImports from "lucide-react/dynamicIconImports";
import Icon from "./Icon";

export default function Socials() {

    const socialSchema = z.object({
        socials: z.array(
          z.object({ name: z.string(), href: z.string(), icon: z.custom<keyof typeof dynamicIconImports>() })
        )
    });

    const socials = socialSchema.parse(data).socials;
    console.log(socials)

    return (
        <section className="flex gap-3">
        {socials.map((item) => (
            <a
            href={item.href}
            key={item.name}
            target="_blank"
            title={item.name}
            >
            <Icon name={item.icon}/>
            </a>
        ))}
        </section>
    );
}