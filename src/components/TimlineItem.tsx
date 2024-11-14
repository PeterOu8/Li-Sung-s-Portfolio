import Link from "next/link";
import { Experience } from "@/lib/schemas";

import Icon from "./Icon";

interface Props {
    experience: Experience;
}

export const TimelineItem = ({ experience }: Props) => {
    const { name, title, href, logo, start, end, description, links } = experience;

    return (
        <li>

        </li>
    );
}