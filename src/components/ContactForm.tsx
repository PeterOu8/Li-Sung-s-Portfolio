"use client";

import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ContactFormSchema } from "@/lib/schemas";
import { sendEmail } from "@/app/api/send/sendEmail";
import { Input } from "./ui/input";
import {
    Form,
    FormControl,
    // FormDescription,
    FormField,
    FormItem,
    // FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "./ui/button";
import { toast } from "sonner";

type emailInput = z.infer<typeof ContactFormSchema>;

export const ContactForm = () => {
    const form = useForm<emailInput>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
          name: "",
          email: "",
          subject: "",
          message: "",
        },
      });

    const processForm: SubmitHandler<emailInput> = async (data) => {
        const result = await sendEmail(data);

        if (result.error) {
            toast.error("Uh oh! Something went wrong. Please try again later.");
            return;
        }
    
        toast.success("Message sent successfully!");
        form.reset();
    };

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(processForm)} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Name" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Subject" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea placeholder="Message" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            <Button type="submit">Submit</Button>
        </form>
      </Form>
    );
}