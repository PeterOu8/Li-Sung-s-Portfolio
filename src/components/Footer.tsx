import Link from "next/link";
import { Socials } from "./Socials";

export const Footer = () => {
    return (
        <footer className="container flex flex-col items-center justify-center mb-20 md:flex-row-reverse md:justify-between">
            <Socials />
            <div className="mt-8 sm:mt-0">
                <p className="text-center text-md text-muted">
                    <span>&copy; {new Date().getFullYear()}</span>{" "}
                    <Link className="link" href="/">
                        lisungou.com
                    </Link>
                </p>
            </div>
        </footer>
    );
}