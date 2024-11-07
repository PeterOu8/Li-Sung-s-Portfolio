import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";

export default function Home() {
    return (
        <main className="flex flex-col items-center">
            <HeroSection />
            <ProjectsSection />
        </main>
    );
}
