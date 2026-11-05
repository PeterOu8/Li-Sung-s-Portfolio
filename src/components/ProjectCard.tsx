import Icon  from "@/components/Icon";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/schemas";

interface Props {
    project: Project;
}
  
export const ProjectCard = ({ project }: Props) => {
    const { name, description, href, image, tags, links } = project;

    return (
        <article className="surface-card flex min-w-0 flex-col p-5">
            {image && (
                <Link href={href || image} className="focus-ring block aspect-[16/10] overflow-hidden rounded-md bg-subtle p-2">
                    <Image
                        src={image}
                        alt={name}
                        width={500}
                        height={300}
                        className="h-full w-full object-contain object-center"
                    />
                </Link>
            )}
            <div className="flex flex-1 flex-col">
              <div className="py-4">
                <h2 className="text-xl font-semibold leading-7">{name}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
              </div>
              <div className="mt-auto">
                <div className="flex flex-row flex-wrap gap-2">
                    {tags.map(tag => (
                        <div key={tag} className="tag-chip">
                            {tag}
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex flex-wrap justify-start gap-2">
                    {links.map(link => (
                        <Link key={link.name} href={link.href} target="_blank" rel="noreferrer" className="action-chip focus-ring">
                            <Icon name={link.icon} size={12}/>
                            <span className="text-xs font-semibold">{link.name}</span>
                        </Link>
                    ))}
                </div>
              </div>
            </div>
        </article>
    );
}
