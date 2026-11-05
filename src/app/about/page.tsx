import { SkillIcons } from '@/components/SkillIcons';
import { Hobbies } from '@/components/Hobbies';

export default function AboutPage() {
  return (
    <section className="container flex flex-col gap-12 md:gap-16">
      <div className="flex flex-col">
        <h1 className="page-title">About Me</h1>
        <p className="py-8 text-base leading-[25px] text-muted">
          I&apos;m Li-Sung Ou, a business-minded software engineer who&apos;s
          probably a little too curious for his own good. I like digging into
          problems, asking too many &quot;whys,&quot; and figuring out what
          actually matters before jumping into solutions (though Google and
          Stack Overflow occasionally save the day). Software engineering taught
          me how things work, marketing taught me why people care, and sales
          taught me that nobody cares how brilliant your solution is until you
          explain why it matters to them. I enjoy connecting the dots between
          technology, business, and people—and making complicated things a
          little less complicated.
        </p>
        <div>
          <h2 className="section-title">What drives me</h2>
          <p className="pt-6 text-base leading-[25px] text-muted">
            I&apos;m interested in the space where technology, business, and
            human behaviour meet. I enjoy the process of turning uncertainty
            into understanding, whether that means breaking down a technical
            problem, discovering what a customer really needs, or finding a
            simpler way to explain a complex idea. For me, good work starts with
            curiosity, becomes useful through understanding, and creates value
            when it solves a problem that actually matters.
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
