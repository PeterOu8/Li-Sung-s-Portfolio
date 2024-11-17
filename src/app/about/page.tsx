import { SkillIcons } from "@/components/SkillIcons";
import { Hobbies } from "@/components/Hobbies";

export default function AboutPage() {
    return (
        <section className="container flex flex-col gap-10">
            <div className="flex flex-col gap-6">
                <h1 className="title text-5xl">
                    About Me
                </h1>
                <h2 className="py-10 text-foreground/80 text-lg">
                    I am a software engineer with hands-on experience in web development. I enjoy building scalable projects across all phases of a project, blending creativity with technical expertise to bring concepts to life.
                </h2>
            </div>
            <h2 className="title">Tech Stack</h2>
            <SkillIcons />
            <h2 className="title">Beyond the code</h2>
            <Hobbies />
        </section>
    );
}   