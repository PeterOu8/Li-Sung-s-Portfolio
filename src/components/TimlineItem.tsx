import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { Experience } from "@/lib/schemas";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


interface Props {
    experience: Experience;
}

export const TimelineItem = ({ experience }: Props) => {
    const { name, title, href, logo, start, end, description, links } = experience;

    return (
        <li className="relative ml-10 py-4">
        <Avatar className="absolute top-4 -left-16 size-12">
            <AvatarImage
                src={logo}
                alt={name}
                className="object-cover"
            />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
        <div>
            {start && (
                <time className="text-xs text-muted">
                    <span>{start}</span>
                    <span>{" - "}</span>
                    <span>{end ? end : "Present"}</span>
                </time>
            )}
            <h2 className="font-semibold leading-none">{name}</h2>
            {title && <p className="text-sm text-muted">{title}</p>}
            {description && (
                <ul className=" pt-1 list-inside list-disc">
                    {description.map((desc, i) => (
                        <li key={i} className="text-sm text-foreground/90">
                            {desc}
                        </li>
                    ))}
                </ul>
            )}
            {links && links.length > 0 && (
                <div className="flex flex-row justify-start flex-wrap gap-2 pt-2">
                    {links.map(link => (
                        <Link key= {link.name} href={link.href} target="_blank" className="flex gap-1 items-center bg-foreground text-background muted-border rounded-md p-2 py-0.5">
                            <Icon name={link.icon} size={12}/>
                            <span className="text-xs font-semibold">{link.name}</span>
                        </Link>
                    ))}
                </div>
            )}
        </div>

        </li>
    );
}