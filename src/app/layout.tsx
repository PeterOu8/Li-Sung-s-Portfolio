import type { Metadata } from "next";
import { Hanken_Grotesk, Calistoga} from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import { Header } from "@/sections/Header";
import { twMerge } from "tailwind-merge";

const hankenGrotesk = Hanken_Grotesk({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-hankenGrotesk",
});

const calistoga = Calistoga({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-serif",
});

export const metadata: Metadata = {
    title: "Li-Sung's Portfolio",
    description: "Li-Sung's portfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={twMerge(
                hankenGrotesk.variable,
                calistoga.variable
                )}>
                <Header/>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
