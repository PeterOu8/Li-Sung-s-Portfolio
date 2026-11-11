import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Socials } from '@/components/Socials';
import { ArrowDown, FileDown, MapPin } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="container pt-0 md:pt-4">
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-8">
        <div className="min-w-0 flex-1">
          <h1 className="page-title">Hello, I am Li-Sung 👋</h1>
          <h2 className="mt-4 text-xl leading-7 text-muted md:text-2xl md:leading-8">
            Software Engineer
          </h2>
          <div className="my-2 flex items-center text-muted">
            <MapPin aria-hidden="true" size={20} />
            <p className="ml-1 text-lg">Australia</p>
          </div>
          <p className="max-w-xl text-base leading-[25px]">
            I enjoy connecting technology, business and people, and making
            complicated things a little less complicated.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Button asChild>
              <Link href="/Resume.pdf" target="_blank" rel="noreferrer">
                <span className="font-semibold">Resume</span>
                <FileDown aria-hidden="true" />
              </Link>
            </Button>
            <div className="flex items-center">
              <Socials />
            </div>
            <Link
              href="#projects"
              className="focus-ring inline-flex min-h-9 items-center gap-2 rounded-md text-sm font-semibold text-primary transition-colors duration-200 hover:text-foreground"
            >
              View projects
              <ArrowDown aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
        <Image
          src={'/images/avatar.svg'}
          alt="Me coding from behind laptop"
          width={210}
          height={210}
          className="size-40 shrink-0 md:size-[190px] lg:size-[210px]"
          priority
        />
      </div>
    </section>
  );
};
