import { SkillIcons } from '@/components/SkillIcons';
import { Hobbies } from '@/components/Hobbies';

export default function AboutPage() {
  return (
    <section className="container flex flex-col gap-10">
      <div className="flex flex-col">
        <h1 className="title text-5xl">About Me</h1>
        <h2 className="py-10 text-foreground/80 text-lg">
          I’m Peter Ou, a sales professional with a background in software
          development, business and marketing. I enjoy the part of sales that
          happens before the opportunity exists: researching the customer,
          earning their attention, understanding what matters and creating
          enough relevance for a genuine conversation. My software background
          helps me learn technical products quickly. My sales experience taught
          me how to explain their value without making the conversation
          unnecessarily technical.
        </h2>
        <div className="gap-1">
          <h1 className="title text-3xl">Why sales?</h1>
          <h2 className="py-10 text-foreground/80 text-lg">
            I began on the product side, learning how software is designed,
            built and improved. But I discovered that the part I enjoyed most
            was understanding people: why they hesitate, what they actually need
            and what gives them enough confidence to make a decision.
          </h2>
          <h1 className="title text-3xl">A lesson from the phones</h1>
          <h2 className="py-10 text-foreground/80 text-lg">
            Most days began with a long call list and no guarantee that anyone
            would answer. High activity mattered, but repeating the same script
            was not enough. I learned to notice where conversations stalled,
            change how I opened calls, ask clearer questions and record enough
            context to make the next follow-up relevant. That experience taught
            me that resilience is not simply tolerating rejection. It is using
            rejection as information and returning with a better approach.
          </h2>
          <h1 className="title text-3xl">My technical advantage</h1>
          <h2 className="py-10 text-foreground/80 text-lg">
            I don’t use technical knowledge to make sales conversations more
            complicated. I use it to make them clearer.
            <br />
            <br />
            My experience with C#/.NET, React, SQL, APIs and SaaS architecture
            helps me:
            <br />
            <ul className="py-10 text-foreground/80 text-lg list-disc list-inside">
              <li>Understand technical products and integrations quickly</li>
              <li>Communicate credibly with technical stakeholders</li>
              <li>
                Translate product functionality into practical business outcomes
              </li>
              <li>Ask better questions during discovery</li>
              <li>
                Work effectively with product, engineering and customer-success
                teams
              </li>
            </ul>
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
