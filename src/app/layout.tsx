import "./globals.css";
import type { Metadata } from "next";
import { Hanken_Grotesk, Calistoga} from 'next/font/google';
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
                <main className="my-20">{children}</main>
                <Footer />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
