import Link from 'next/link';
import Icon from './Icon';
import { Experience } from '@/lib/schemas';

interface Props {
  experience: Experience;
}

export const TimelineItem = ({ experience }: Props) => {
  const { name, title, start, end, description, links } = experience;

  return (
    <li className="py-6">
      <div>
        <div className="grid min-w-0 gap-1 md:grid-cols-[minmax(0,1fr)_auto] md:gap-x-4">
          <h2 className="min-w-0 text-xl font-semibold leading-7">{title}</h2>
          {title && <p className="text-sm leading-5 text-muted">{name}</p>}
          {start && (
          <p className="text-sm leading-5 text-muted md:col-start-2 md:row-start-1 md:text-right">
            <span>{start}</span>
            <span>{' - '}</span>
            <span>{end ? end : 'Present'}</span>
          </p>
          )}
        </div>
        {description && (
          <ul className="mt-3 list-outside list-disc space-y-2 pl-5 text-[15px] leading-6 text-foreground/90">
            {description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        )}
        {links && links.length > 0 && (
          <div className="mt-3 flex flex-wrap justify-start gap-2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
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
