import { HeroSection } from "@/sections/Hero";
import Projects from "@/components/Projects";

export default function Home() {
    const MAX_PROJECTS = 2;
    return (
        <main className="flex flex-col items-center">
            <HeroSection />
            <Projects limit={MAX_PROJECTS}/>
        </main>
    );
}
