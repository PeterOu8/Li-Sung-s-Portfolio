import { Experience } from "@/lib/schemas";
import { TimelineItem } from "./TimlineItem";

interface Props {
    experience: Experience[];
}

export const ExperienceCard = ({ experience }: Props) => {

    return (
        <div className="muted-border">
            <ul className="border-l border-opacity-60 border-muted/50 shadow ml-10">
                {experience.map((exp, id) => (
                    <TimelineItem key={id} experience={exp} />
                ))}
            </ul>
        </div>
    );
}