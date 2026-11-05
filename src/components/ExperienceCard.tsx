import { Experience } from '@/lib/schemas';
import { TimelineItem } from './TimlineItem';

interface Props {
  experience: Experience[];
}

export const ExperienceCard = ({ experience }: Props) => {
  return (
    <div className="surface-card">
      <ul className="p-12 pt-3 pb-4 divide-y">
        {experience.map((exp, id) => (
          <TimelineItem key={id} experience={exp} />
        ))}
      </ul>
    </div>
  );
};
