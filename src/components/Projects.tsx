import data from "@/data/projects.json";
import Link from "next/link";
import { projectSchema } from "@/lib/schemas";
import { ProjectCard } from "./ProjectCard";
import Icon from "./Icon";


interface Props {
    limit?: number;
}

export default function Projects({ limit }: Props) {
    let projects = projectSchema.parse(data).projects;
    if (limit) {
        projects = projects.slice(0, limit);
    }

    return (
        <section className="container">
            <div className="flex flex-col">
                {limit && (
                    <div className="flex justify-between mb-5">
                        <h2 className="text-2xl">Featured Projects</h2>
                        <Link href="/projects" className="flex items-center">
                            <span className="text-muted">View more</span>
                            <Icon 
                                name="chevron-right"
                                className="text-muted"
                            />
                        </Link>
                    </div>
                )}
                <div className="flex flex-row">
                    {projects.map((project, id) => (
                        <ProjectCard key={id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}