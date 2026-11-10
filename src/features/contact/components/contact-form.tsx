'use client';

import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderCircle, SendHorizontal } from 'lucide-react';
import { sendContactMessage } from '@/app/contact/actions';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { focusRingStyles } from '@/components/ui/control-styles';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import type { ContactField } from '../fields';
import {
  contactFormSchema,
  type ContactFormInput,
  type ContactFormValues,
  type ContactSubmissionResult,
} from '../schema';

interface ContactFormProps {
  fields: readonly ContactField[];
  contactHref?: string;
}

export function ContactForm({ fields, contactHref }: ContactFormProps) {
  const submissionInProgress = useRef(false);
  const [result, setResult] = useState<ContactSubmissionResult | null>(null);
  const form = useForm<ContactFormInput, unknown, ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      website: '',
    },
  });
  const isSubmitting = form.formState.isSubmitting;
  let statusMessage = result?.success === false ? result.message : '';

  if (result?.success)
    statusMessage =
      'Your message has been sent. Thank you for getting in touch.';
  if (isSubmitting) statusMessage = 'Sending your message. Please wait.';

  async function submitMessage(data: ContactFormValues) {
    if (submissionInProgress.current) return;

    submissionInProgress.current = true;
    setResult(null);

    try {
      const response = await sendContactMessage(data);
      setResult(response);

      if (response.success) form.reset();
    } catch {
      setResult({
        success: false,
        message:
          'The connection was interrupted. Your details are still here. Please try again or use the email link below.',
      });
    } finally {
      submissionInProgress.current = false;
    }
  }

  return (
    <Form {...form}>
      <form
        noValidate
        aria-label="Contact Me"
        aria-busy={isSubmitting}
        onSubmit={(event) => {
          void form.handleSubmit(submitMessage)(event);
        }}
        className="surface-card space-y-6 p-5 md:p-7"
      >
        <fieldset
          disabled={isSubmitting}
          className="grid min-w-0 gap-6 md:grid-cols-2"
        >
          <legend className="sr-only">Your contact details and message</legend>
          {fields.map((definition) => (
            <FormField
              key={definition.name}
              control={form.control}
              name={definition.name}
              render={({ field }) => (
                <FormItem
                  className={cn(definition.fullWidth && 'md:col-span-2')}
                >
                  <FormLabel>{definition.label}</FormLabel>
                  <FormControl>
                    {definition.multiline ? (
                      <Textarea
                        {...field}
                        required
                        maxLength={definition.maxLength}
                        rows={5}
                        className="resize-y"
                      />
                    ) : (
                      <Input
                        {...field}
                        required
                        type={definition.type ?? 'text'}
                        autoComplete={definition.autoComplete}
                        maxLength={definition.maxLength}
                      />
                    )}
                  </FormControl>
                  <FormDescription>{definition.description}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <div aria-hidden="true" className="absolute -left-[9999px] opacity-0">
            <label htmlFor="contact-website">Leave this field empty</label>
            <input
              id="contact-website"
              autoComplete="off"
              tabIndex={-1}
              {...form.register('website')}
            />
          </div>
        </fieldset>
        <Button type="submit" disabled={isSubmitting} className="min-h-11">
          {isSubmitting ? (
            <LoaderCircle
              aria-hidden="true"
              className="motion-safe:animate-spin"
            />
          ) : (
            <SendHorizontal aria-hidden="true" />
          )}
          {isSubmitting ? 'Sending message…' : 'Send message'}
        </Button>
        <p
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className={cn(
            'min-h-5 text-sm',
            result?.success === false && 'text-danger',
          )}
        >
          {statusMessage}
        </p>
      </form>
    </Form>
  );
}
