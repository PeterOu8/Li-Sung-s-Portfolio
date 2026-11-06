import { SkillIcons } from '@/components/SkillIcons';
import { Hobbies } from '@/components/Hobbies';

export default function AboutPage() {
  return (
    <section className="container flex flex-col gap-12 md:gap-16">
      <div className="flex flex-col">
        <h1 className="page-title">About Me</h1>
        <p className="py-8 text-base leading-[25px] text-muted">
          I&apos;m Li-Sung Ou, a full stack developer who&apos;s a little too
          curious for his own good. I like digging into problems, asking one
          more “why” than is strictly necessary, and figuring out what actually
          matters before I jump to a solution. (Google and Stack Overflow still
          get a lot of the credit.) My path into tech came from three
          directions. Software engineering taught me how things work. Marketing
          taught me why people care. Sales taught me that no one cares how
          clever your solution is until you explain why it matters to them.
          I&apos;ve found that those three lenses fit together well, and I enjoy
          connecting technology, business and people, and making complicated
          things a little less complicated.
        </p>
        <div>
          <h2 className="section-title">What drives me</h2>
          <p className="pt-6 text-base leading-[25px] text-muted">
            I&apos;m most interested in the space where technology, business and
            human behaviour meet. I enjoy turning uncertainty into
            understanding, whether that&apos;s breaking down a hard technical
            problem, working out what someone really needs, or finding a simpler
            way to explain an idea. For me, good work starts with curiosity,
            becomes useful through understanding, and creates real value when it
            solves a problem that matters.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="section-title">Tech Stack</h2>
        <SkillIcons />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="section-title">Beyond the code</h2>
        <Hobbies />
      </div>
    </section>
  );
}
