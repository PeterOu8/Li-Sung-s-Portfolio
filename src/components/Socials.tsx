import data from "@/data/socials.json";
import Icon from "./Icon";
import { socialSchema } from "@/lib/schemas";

export const Socials = () => {

    const socials = socialSchema.parse(data).socials;

    return (
        <div className="flex flex-wrap gap-2">
            {socials.map((item) => (
                <a
                href={item.href}
                key={item.name}
                target="_blank"
                title={item.name}
                rel="noreferrer"
                className="focus-ring inline-flex min-h-9 min-w-9 items-center justify-center rounded-md text-foreground transition-colors duration-200 hover:bg-accent hover:text-primary"
                >
                <Icon name={item.icon}/>
                </a>
            ))}
        </div>
    );
}
