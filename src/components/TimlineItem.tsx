import Link from 'next/link';
import Icon from './Icon';
import { Experience } from '@/lib/schemas';

interface Props {
  experience: Experience;
}

export const TimelineItem = ({ experience }: Props) => {
  const { name, title, start, end, description, links } = experience;

  return (
    <li className="relative pl-2 py-4">
      <div>
        {start && (
          <time className="text-xs text-muted">
            <span>{start}</span>
            <span>{' - '}</span>
            <span>{end ? end : 'Present'}</span>
          </time>
        )}
        <h2 className="font-semibold leading-none">{title}</h2>
        {title && <p className="text-sm text-muted">{name}</p>}
        {description && (
          <ul className=" pt-1 list-inside list-disc">
            {description.map((desc, i) => (
              <li key={i} className="text-sm text-foreground/90">
                {desc}
              </li>
            ))}
          </ul>
        )}
        {links && links.length > 0 && (
          <div className="flex flex-row justify-start flex-wrap gap-2 pt-2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                className="action-chip focus-ring"
              >
                <Icon name={link.icon} size={12} />
                <span className="text-xs font-semibold">{link.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </li>
  );
};
