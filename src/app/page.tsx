import {HeroSection} from "@/components/Hero";
import {ProjectSection} from "@/components/Projects";

export default function Home() {
    const MAX_PROJECTS = 2;
    return (
        <div className="flex flex-col items-center gap-20">
            <HeroSection />
            <ProjectSection limit={MAX_PROJECTS}/>
        </div>
    );
}
