import { ChevronRight, Github, Globe, Linkedin, Mail, type LucideProps } from 'lucide-react';

const icons = {
  'chevron-right': ChevronRight,
  github: Github,
  globe: Globe,
  linkedin: Linkedin,
  mail: Mail,
};

export type IconName = keyof typeof icons;

interface IconProps extends LucideProps {
  name: IconName;
}

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = icons[name];

  return <LucideIcon {...props} />;
};

export default Icon;
