import { Experience } from "@/lib/schemas";
import { TimelineItem } from "./TimlineItem";

interface Props {
    experience: Experience[];
}

export const ExperienceCard = ({ experience }: Props) => {

    return (
        <div className="muted-border">
            <ul>
                {experience.map((exp, id) => (
                    <TimelineItem key={id} experience={exp} />
                ))}
            </ul>
        </div>
    );
}