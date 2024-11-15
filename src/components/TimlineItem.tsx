import Link from "next/link";
import Image from "next/image";
import { Experience } from "@/lib/schemas";

import Icon from "./Icon";

interface Props {
    experience: Experience;
}

export const TimelineItem = ({ experience }: Props) => {
    const { name, title, href, logo, start, end, description, links } = experience;

    return (
        <li className="relative py-4">
            {start && (
                <time className="text-xs text-muted-foreground">
                    <span>{start}</span>
                    <span>{" - "}</span>
                    <span>{end ? end : "Present"}</span>
                </time>
            )}
            <h2 className="font-semibold leading-none">{name}</h2>
            {title && <p className="text-sm text-muted">{title}</p>}
        </li>
    );
}