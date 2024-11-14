import {ContactForm} from "@/components/ContactForm";

export default function ContactPage() {
    return (
        <section className="container flex flex-col gap-10">
            <h1 className="title text-5xl">Let&apos;s connect!</h1>
            <ContactForm />
        </section>
    );
}