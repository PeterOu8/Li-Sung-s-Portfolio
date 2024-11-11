import { Project } from "@/lib/schemas";
import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

interface Props {
    project: Project;
}
  
export function ProjectCard({ project }: Props) {
    const { name, description, href, image, tags, links } = project;

    return (
        <div className="flex flex-col border-2 border-muted">
            {image && (
                <Link href={href || image}>
                    <Image
                        src={image}
                        alt={name}
                        width={500}
                        height={300}
                        className="object-cover"
                    />
                </Link>
            )}
            <article>
                <h1 className="text-2xl">{name}</h1>
                <div>{description}</div>

            </article>
        </div>
    );
}