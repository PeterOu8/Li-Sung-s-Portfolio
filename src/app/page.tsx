import { HeroSection } from "@/sections/Hero";
import Projects from "@/components/Projects";

export default function Home() {
    const MAX_PROJECTS = 2;
    return (
        <div className="flex flex-col items-center gap-20">
            <HeroSection />
            <Projects limit={MAX_PROJECTS}/>
        </div>
    );
}
