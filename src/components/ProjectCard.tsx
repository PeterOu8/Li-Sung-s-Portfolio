import { Project } from "@/lib/schemas";

interface Props {
    project: Project;
}
  
export function ProjectCard({ project }: Props) {
    const { name, href, description, image, tags, links } = project;

    return (
        <div className="flex gap-3">

        </div>
    );
}