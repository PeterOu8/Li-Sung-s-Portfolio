import { Project } from "@/lib/schemas";
import Icon  from "@/components/Icon";
import Image from "next/image";
import Link from "next/link";

interface Props {
    project: Project;
}
  
export function ProjectCard({ project }: Props) {
    const { name, description, href, image, tags, links } = project;

    return (
        <div className="flex flex-col muted-border p-6">
            {image && (
                <Link href={href || image}>
                    <Image
                        src={image}
                        alt={name}
                        width={500}
                        height={300}
                        className="h-40 w-full object-contain hover:object-scale-down object-center"
                    />
                </Link>
            )}
            <article className="flex flex-col gap-1 h-full py-4">
                <h1 className="text-xl font-bold">{name}</h1>
                <p className="text-muted text-sm">{description}</p>
            </article>
            <div className="flex h-full flex-col items-start justify-between gap-4">
                <div className="flex flex-row flex-wrap gap-2">
                    {tags.map(tag => (
                        <div key={tag} className="text-xs bg-foreground text-background muted-border rounded-md p-1 py-0">
                            {tag}
                        </div>
                    ))}
                </div>
                <div className="flex flex-row justify-start gap-2">
                    {links.map(link => (
                        <Link key= {link.name} href={link.href} target="_blank" className="flex gap-1 items-center bg-foreground text-background muted-border rounded-md p-2 py-0.5">
                            <Icon name={link.icon} size={12}/>
                            <span className="text-xs font-semibold">{link.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}