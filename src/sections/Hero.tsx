import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import Socials from "@/components/Socials";
import emoji from "@/assets/images/memoji.png"
import  Location from "@/assets/icons/location.svg"
import { FileDown, MapPin } from 'lucide-react';


export const HeroSection = () => {
  return (
    <section className="flex justify-center items-center h-screen">
        <div className="container">
            <div className="flex flex-col lg:flex-row-reverse items-center justify-center">
                <Image 
                        src={emoji}
                        width={260}
                        height={260}
                        alt="Me coding from behind laptop"
                />
                <div className="flex flex-row items-center">
                    <div>
                        <h1 className="text-4xl">
                            Hello, I am Li-Sung 👋
                        </h1>
                        <p className="text-3xl text-gray-400 pt-4">Software Developer</p>
                        <div className="flex flex-end pt-4">
                            <Location className="size-8 fill-gray-400"/>
                            <p className="ml-2 text-gray-400 text-2xl">Melbourne, Australia</p>
                        </div>
                        <div className="flex flex-end pt-4">
                        </div>
                        <p className="pt-2">I’m a full-stack developer fueled by caffeine and late-night coding sessions.</p>
                        <div className="flex flex-row items-center mt-4">
                            <Link href="/Resume.pdf" target="_blank">
                                <Button className="border-2 border-opacity-60 bg-primary border-gray-400 hover:bg-white/5 transition duration-300">
                                    <span className="font-semibold">Resume</span>
                                    <FileDown />
                                </Button>
                            </Link>
                            <div className="flex flex-row ml-8">
                                {/* <div className="ml-3 rounded-md border-2 border-opacity-60 border-gray-400 p-2 py-1">GitHub</div>
                                <div className="ml-3 rounded-md border-2 border-opacity-60 border-gray-400 p-2 py-1">Linkedin</div>
                                <div className="ml-3 rounded-md border-2 border-opacity-60 border-gray-400 p-2 py-1">Email</div> */}
                                <Socials/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
