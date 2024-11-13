import data from "@/data/socials.json";
import { socialSchema } from "@/lib/schemas";
import Icon from "./Icon";

export default function Socials() {

    const socials = socialSchema.parse(data).socials;

    return (
        <div className="flex gap-3">
            {socials.map((item) => (
                <a
                href={item.href}
                key={item.name}
                target="_blank"
                title={item.name}
                className="text-foreground/90 hover:text-muted transition duration-300"
                >
                <Icon name={item.icon}/>
                </a>
            ))}
        </div>
    );
}