import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <section className="container flex flex-col gap-10">
      <h1 className="title text-5xl">Let&apos;s talk!</h1>
      <p>
        Got an idea, an opportunity, or a problem worth solving? I'm always up
        for a good conversation, whether it's about software, business, an
        interesting project, or something completely unexpected. No need for a
        perfect pitch. Just say hi, tell me what's on your mind, and we'll take
        it from there. I promise I'm better at replying to emails than answering
        unknown phone numbers.
      </p>
      <ContactForm />
    </section>
  );
}
