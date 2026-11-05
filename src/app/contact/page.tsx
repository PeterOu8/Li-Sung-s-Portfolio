import { ContactForm } from '@/features/contact/components/contact-form';
import { contactFields } from '@/features/contact/fields';
import socialData from '@/data/socials.json';

export default function ContactPage() {
  return (
    <section className="container flex flex-col gap-6">
      <h1 className="page-title">Let&apos;s talk!</h1>
      <p className="max-w-3xl text-base leading-[25px] text-muted">
        Got an idea, an opportunity, or a problem worth solving? I&apos;m always up
        for a good conversation, whether it&apos;s about software, business, an
        interesting project, or something completely unexpected. No need for a
        perfect pitch. Just say hi, tell me what&apos;s on your mind, and we&apos;ll take
        it from there. I promise I&apos;m better at replying to emails than answering
        unknown phone numbers.
      </p>
      <ContactForm
        fields={contactFields}
        contactHref={socialData.socials.find((social) => social.icon === 'mail')?.href}
      />
    </section>
  );
}
