import workData from "@/data/work.json";
import educationData from "@/data/education.json";
import { workSchema, educationSchema } from "@/lib/schemas";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExperienceCard } from "./ExperienceCard";


export const ExperienceSection = () => {
    const work = workSchema.parse(workData).work;
    const education = educationSchema.parse(educationData).education;
    
    return (
        <Tabs defaultValue="education">
            <TabsList className="mb-2 grid w-full grid-cols-2">
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="work">Work</TabsTrigger>
                <TabsContent value="work">
                    <ExperienceCard experience={work}></ExperienceCard>
                </TabsContent>
                <TabsContent value="education">
                    <ExperienceCard experience={education}></ExperienceCard>
                </TabsContent>
            </TabsList>
        </Tabs>
    );
}