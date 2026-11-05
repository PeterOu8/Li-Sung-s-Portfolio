import data from "@/data/projects.json";
import Link from "next/link";
import Icon from "./Icon";
import { projectSchema } from "@/lib/schemas";
import { ProjectCard } from "./ProjectCard";



interface Props {
    limit?: number;
}

export const ProjectSection = ({ limit }: Props) => {
    let projects = projectSchema.parse(data).projects;
    if (limit) {
        projects = projects.slice(0, limit);
    }

    return (
        <section id={limit ? 'projects' : undefined} className="container scroll-mt-6">
            <div className="flex flex-col gap-6">
                {limit? (
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <h2 className="section-title">Featured Projects</h2>
                        <Link href="/projects" className="text-link focus-ring flex items-center rounded-sm text-sm font-medium">
                            <span>View more</span>
                            <Icon 
                                name="chevron-right"
                                className="text-primary"
                                size={17}
                            />
                        </Link>
                    </div>
                ): (
                    <h1 className="page-title">Projects</h1>
                )}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {projects.map((project, id) => (
                        <ProjectCard key={id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
