import Projects from "@/components/Projects";

export default function ProjectsPage() {
    return (
        <section className="flex flex-col items-center gap-10">
            <h1 className="title text-5xl">Projects</h1>
            <Projects />
        </section>
    );
}
