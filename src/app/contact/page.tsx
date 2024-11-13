import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
    return (
        <section className="container flex flex-col items-center gap-10">
            <h1 className="title text-5xl">Let&apos;s work together</h1>
            <ContactForm />
        </section>
    );
}