import { SkillIcons } from "@/components/SkillIcons";

export default function AboutPage() {
    return (
        <section className="container flex flex-col gap-10">
            <div className="flex flex-col gap-6">
                <h1 className="title text-5xl">
                            Hello, I am Li-Sung 👋
                </h1>
                <h2 className="text-foreground/80">
                    I enjoy building scalable projects across all phases of a project, blending creativity with technical expertise to bring concepts to life.
                </h2>
            </div>
            <h2 className="title">Tech Stack</h2>
            <SkillIcons />
        </section>
    );
}   