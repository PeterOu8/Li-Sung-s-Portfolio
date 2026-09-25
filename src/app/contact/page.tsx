import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <section className="container flex flex-col gap-10">
      <h1 className="title text-5xl">Let&apos;s talk!</h1>
      <p>
        I’m looking for an SDR or BDR opportunity where curiosity, disciplined
        prospecting and technical understanding are valuable. If you’re building
        a SaaS, fintech, cybersecurity or technology sales team, I’d be pleased
        to learn about your product and discuss how I could contribute.
      </p>
      <ContactForm />
    </section>
  );
}
