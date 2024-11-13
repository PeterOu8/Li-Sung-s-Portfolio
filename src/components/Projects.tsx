import data from "@/data/projects.json";
import Link from "next/link";
import { projectSchema } from "@/lib/schemas";
import { ProjectCard } from "./ProjectCard";
import Icon from "./Icon";


interface Props {
    limit?: number;
}

export default function ProjectSection({ limit }: Props) {
    let projects = projectSchema.parse(data).projects;
    if (limit) {
        projects = projects.slice(0, limit);
    }

    return (
        <section className="container">
            <div className="flex flex-col gap-10">
                {limit? (
                    <div className="flex justify-between">
                        <h2 className="title">Featured Projects</h2>
                        <Link href="/projects" className="flex items-center">
                            <span className="text-muted">View more</span>
                            <Icon 
                                name="chevron-right"
                                className="text-muted"
                                size={17}
                            />
                        </Link>
                    </div>
                ): (
                    <h1 className="title text-5xl">Projects</h1>
                )}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {projects.map((project, id) => (
                        <ProjectCard key={id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}