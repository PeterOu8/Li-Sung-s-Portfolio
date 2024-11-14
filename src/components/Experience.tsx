import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const Experience = () => {

    return (
        <Tabs defaultValue="education">
            <TabsList className="mb-2 grid w-full grid-cols-2">
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="work">Work</TabsTrigger>
                <TabsContent value="work">

                </TabsContent>
                <TabsContent value="education">
                    <p>UQ</p>
                </TabsContent>
            </TabsList>
        </Tabs>
    );
}