import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Socials } from "@/components/Socials";
import { FileDown, MapPin } from 'lucide-react';


export const HeroSection = () => {
  return (
    <section className="container">
        <div className="flex flex-col items-center gap-10 md:flex-row-reverse md:justify-end">
            <Image 
                    src= {"/images/memoji.png"}
                    width={210}
                    height={210}
                    alt="Me coding from behind laptop"
            />
            <div className="flex flex-row items-center">
                <div>
                    <h1 className="title text-5xl">
                        Hello, I am Li-Sung 👋
                    </h1>
                    <h2 className="text-2xl text-muted mt-4">Software Engineer<br/></h2>
                    <div className="flex flex-row items-center my-2">
                        <MapPin size={"20"}/>
                        <h3 className="text-muted text-lg ml-1">Melbourne, Australia</h3>
                    </div>
                    <div className="flex flex-end mt-2">
                    </div>
                    <p>I’m a software engineer fueled by caffeine and late-night coding sessions.</p>
                    <div className="flex flex-row items-center mt-4">
                        <Link href="/Resume.pdf" target="_blank">
                            <Button>
                                <span className="font-semibold">Resume</span>
                                <FileDown />
                            </Button>
                        </Link>
                        <div className="flex flex-row ml-8">
                            <Socials/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
