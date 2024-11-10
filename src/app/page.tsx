import { HeroSection } from "@/sections/Hero";
import ProjectsPage from "./projects/page";

export default function Home() {
    return (
        <main className="flex flex-col items-center">
            <HeroSection />
            <ProjectsPage />
        </main>
    );
}
