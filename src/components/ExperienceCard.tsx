import { Experience } from '@/lib/schemas';
import { TimelineItem } from './TimlineItem';

interface Props {
  experience: Experience[];
}

export const ExperienceCard = ({ experience }: Props) => {
  return (
    <div className="surface-card">
      <ul className="divide-y divide-border px-5 md:px-7 lg:px-8">
        {experience.map((exp, id) => (
          <TimelineItem key={id} experience={exp} />
        ))}
      </ul>
    </div>
  );
};
