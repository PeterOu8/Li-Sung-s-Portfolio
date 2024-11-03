import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/sections/Header";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Header></Header>
                {children}
            </body>
        </html>
    );
}
