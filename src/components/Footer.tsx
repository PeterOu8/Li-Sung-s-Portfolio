import Link from "next/link";
import { Socials } from "./Socials";

export const Footer = () => {
    return (
        <footer className="container mb-12 flex flex-col items-center justify-center gap-6 md:mb-16 md:flex-row-reverse md:justify-between">
            <Socials />
            <div>
                <p className="text-center text-base text-muted">
                    <span>&copy; {new Date().getFullYear()}</span>{" "}
                    <Link className="text-link focus-ring" href="/">
                        lisungou.com
                    </Link>
                </p>
            </div>
        </footer>
    );
}
