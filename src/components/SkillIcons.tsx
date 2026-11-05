import StackIcon from 'tech-stack-icons';

const techStack = [
  { name: '.NET 10', iconTitle: 'net' },
  { name: 'C#', iconTitle: 'csharp' },
  { name: 'PostgreSQL', iconTitle: 'postgresql' },
  { name: 'Neon', iconTitle: 'neon' },
  { name: 'Azure', iconTitle: 'azure' },
  { name: 'Docker', iconTitle: 'docker' },
  { name: 'Java', iconTitle: 'java' },
  { name: 'Git', iconTitle: 'git' },
  { name: 'NextJS', iconTitle: 'nextjs' },
  { name: 'React', iconTitle: 'react' },
  { name: 'Typecript', iconTitle: 'typescript' },
  { name: 'JavaScript', iconTitle: 'js' },
  { name: 'Node.js', iconTitle: 'nodejs' },
  { name: 'TailwindCSS', iconTitle: 'tailwindcss' },
  { name: 'HTML5', iconTitle: 'html5' },
  { name: 'CSS3', iconTitle: 'css3' },
  { name: 'shadcn/ui', iconTitle: 'shadcnui' },
  { name: 'Jira', iconTitle: 'jira' },
  { name: 'Resend', iconTitle: 'resend' },
];

export const SkillIcons = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {techStack.map((skill) => (
        <div key={skill.name} className="soft-chip">
          <StackIcon
            variant="light"
            name={skill.iconTitle}
            className="size-6"
          />
          <span className="text-sm font-medium leading-5 text-foreground">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
};
