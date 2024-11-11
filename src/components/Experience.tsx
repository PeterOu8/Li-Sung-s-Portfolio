import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Experience() {

    return (
        <Tabs defaultValue="education">
            <TabsList className="mb-2 grid w-full grid-cols-2">
                <TabsTrigger value="work">Work</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsContent value="work">

                </TabsContent>
                <TabsContent value="education">
                    <p>UQ</p>
                </TabsContent>
            </TabsList>
        </Tabs>
    );
}