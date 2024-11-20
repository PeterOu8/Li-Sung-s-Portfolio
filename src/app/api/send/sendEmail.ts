'use server';

import { Resend } from 'resend';
import { z } from "zod";
import { ContactFormSchema } from "@/lib/schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactFormInput = z.infer<typeof ContactFormSchema>;

export async function sendEmail(data: ContactFormInput) {
    const result = ContactFormSchema.safeParse(data);

    if (result.error) {
        return { error: result.error.format() };
    }

    try {
        const { name, email, subject, message } = result.data;
        const { data, error } = await resend.emails.send({
        from: 'Lisungou.com <contact@lisungou.com>',
        to: ['peter1031734590@gmail.com'],
        replyTo: [email],
        subject: `Lisungou.com - ${subject}!`,
        text: `Name:\n${name}
            \nEmail:\n${email}
            \nSubject:\n${subject}
            \nMessage:\n${message}`,
        });

        if (!data || error) {
            console.error(error?.message);
            throw new Error("Failed to send email!");
        }

        return { success: true };
    } catch (error) {
        return {error};
    }
}
