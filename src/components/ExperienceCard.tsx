import { Experience } from "@/lib/schemas";
import { TimelineItem } from "./TimlineItem";

interface Props {
    experience: Experience[];
}

export const ExperienceCard = ({ experience }: Props) => {

    return (
        <div className="surface-card">
            <ul className="ml-10 border-l border-border">
                {experience.map((exp, id) => (
                    <TimelineItem key={id} experience={exp} />
                ))}
            </ul>
        </div>
    );
}
