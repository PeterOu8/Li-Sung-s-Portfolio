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
        <li className="p-4 flex flex-row gap-6">
        <Avatar className="size-12 border">
            <AvatarImage
                src={logo}
                alt={name}
                className="object-fill"
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
                <ul className="list-inside list-disc">
                    {description.map((desc, i) => (
                        <li key={i} className="text-sm">
                            {desc}
                        </li>
                    ))}
                </ul>
            )}
        </div>

        </li>
    );
}