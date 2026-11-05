import { SkillIcons } from '@/components/SkillIcons';
import { Hobbies } from '@/components/Hobbies';

export default function AboutPage() {
  return (
    <section className="container flex flex-col gap-10">
      <div className="flex flex-col">
        <h1 className="title text-5xl">About Me</h1>
        <h2 className="py-10 text-foreground/80 text-lg">
          I&apos;m Peter Ou, a business-minded software engineer who&apos;s probably a
          little too curious for his own good. I like digging into problems,
          asking too many &quot;whys,&quot; and figuring out what actually matters before
          jumping into solutions (though Google and Stack Overflow occasionally
          save the day). Software engineering taught me how things work,
          marketing taught me why people care, and sales taught me that nobody
          cares how brilliant your solution is until you explain why it matters
          to them. I enjoy connecting the dots between technology, business, and
          people—and making complicated things a little less complicated.
        </h2>
        <div>
          <h1 className="title text-3xl">What drives me</h1>
          <h2 className="py-10 text-foreground/80 text-lg">
            I&apos;m interested in the space where technology, business, and human
            behaviour meet. I enjoy the process of turning uncertainty into
            understanding, whether that means breaking down a technical problem,
            discovering what a customer really needs, or finding a simpler way
            to explain a complex idea. For me, good work starts with curiosity,
            becomes useful through understanding, and creates value when it
            solves a problem that actually matters.
          </h2>
        </div>
      </div>
      <h2 className="title">Tech Stack</h2>
      <SkillIcons />
      <h2 className="title">Beyond the code</h2>
      <Hobbies />
    </section>
  );
}
