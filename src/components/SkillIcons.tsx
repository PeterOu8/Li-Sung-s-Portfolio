import StackIcon from "tech-stack-icons";
import Image from 'next/image';

const techStack = [
    {name:"C#", iconTitle: "csharp"},
    {name:"PostgresSQL", iconTitle: "postgresql"},
    {name:"Java", iconTitle: "java"},
    {name:"Node.js", iconTitle: "nodejs"},
    {name:"NextJS", iconTitle: "nextjs2"},
    {name:"React", iconTitle: "reactjs"},
    {name:"JavaScript", iconTitle: "js"},
    {name:"Typecript", iconTitle: "typescript"},
    {name:"TailwindCSS", iconTitle: "tailwindcss"},
    {name:"HTML5", iconTitle: "html5"},
    {name:"CSS3", iconTitle: "css3"},
    {name:"shadcn/ui", iconTitle: "shadcnui"},
    {name:"Git", iconTitle: "git"},
    {name:"Jira", iconTitle: "jira"},
]

export const SkillIcons = ()=> {
    return(
        <div className="flex flex-row flex-wrap gap-3">
            <div className="flex flex-row items-center gap-2 p-2 rounded-xl bg-muted/15">
                <Image src="/dotnet.svg" alt="dotnet 8 icon" width={100} height={100} className="size-6"/>
                <span className="text-sm text-foreground/80 font-medium">.NET8</span>
            </div>
            {techStack.map(skill => (
                <div key={skill.name} className="flex flex-row items-center gap-2 p-2 rounded-xl bg-muted/15">
                    <StackIcon name={skill.iconTitle} className="size-6" />
                    <span className="text-sm text-foreground/80 font-medium">{skill.name}</span>
                </div>
            ))}
        </div>
    );
}