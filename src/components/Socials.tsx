import data from "@/data/socials.json";
import Icon from "./Icon";
import { socialSchema } from "@/lib/schemas";

export const Socials = () => {

    const socials = socialSchema.parse(data).socials;

    return (
        <div className="flex gap-3">
            {socials.map((item) => (
                <a
                href={item.href}
                key={item.name}
                target="_blank"
                title={item.name}
                className="focus-ring text-foreground transition-colors duration-300 hover:text-primary"
                >
                <Icon name={item.icon}/>
                </a>
            ))}
        </div>
    );
}
