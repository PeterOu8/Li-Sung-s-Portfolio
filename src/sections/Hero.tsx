import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import Socials from "@/components/Socials";
import emoji from "@/assets/images/memoji.png"
import { FileDown, MapPin } from 'lucide-react';


export const HeroSection = () => {
  return (
    <section className="py-32 container">
        <div className="flex flex-col items-center gap-10 lg:flex-row-reverse md:justify-end">
            <Image 
                    src={emoji}
                    width={240}
                    height={240}
                    alt="Me coding from behind laptop"
            />
            <div className="flex flex-row items-center">
                <div>
                    <h1 className="text-5xl">
                        Hello, I am Li-Sung 👋
                    </h1>
                    <p className="text-2xl text-muted mt-4">Software Developer</p>
                    <div className="flex items-center mt-2">
                        {/* <Location className="size-8 fill-gray-400"/> */}
                        <MapPin size={"20"}/>
                        <p className="text-muted text-2xl ml-1">Melbourne, Australia</p>
                    </div>
                    <div className="flex flex-end mt-2">
                    </div>
                    <p className="mt-2">I’m a full-stack developer fueled by caffeine and late-night coding sessions.</p>
                    <div className="flex flex-row items-center mt-4">
                        <Link href="/Resume.pdf" target="_blank">
                            <Button className="border-2 border-opacity-60 bg-background border-muted/90 hover:bg-foreground/10 transition duration-300">
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
