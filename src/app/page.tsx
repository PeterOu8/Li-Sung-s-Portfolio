import { HeroSection } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { ProjectSection } from "@/components/Projects";
import { SkillSection } from "@/components/Skills";

export default function Home() {
    const MAX_PROJECTS = 2;
    return (
        <div className="flex flex-col items-center gap-20">
            <HeroSection />
            <Experience />
            <ProjectSection limit={MAX_PROJECTS}/>
            <SkillSection />
        </div>
    );
}
