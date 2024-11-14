import { Experience } from "@/lib/schemas";
import { TimelineItem } from "./TimlineItem";

interface Props {
    experience: Experience[];
}

export const ExperienceCard = ({ experience }: Props) => {

    return (
        <div className="flex flex-col muted-border p-6">
            <ul>
                {experience.map((exp, id) => (
                    <TimelineItem key={id} experience={exp} />
                ))}
            </ul>
        </div>
    );
}