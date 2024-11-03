import Link from "next/link";

export const Header = () => {
    return (
        <header className="flex flex-row items-center justify-center xl:justify-between fixed w-full text-white p-3 px-5">
            {/* Name logo */}
            <Link href={"/"} className="hidden xl:block">
                <h1 className="name-logo">
                    LISUNG
                    <span className="text-emerald-300 text-xl">OU</span>
                </h1>
            </Link>
            <nav>
                <ul className="flex gap-1 p-0.5 border-white/15 rounded-full bg-white/10 backdrop-blur">
                    <a href="#" className="nav-item">Home</a>
                    <a href="#" className="nav-item">Projects</a>
                    <a href="#" className="nav-item">About</a>
                    <a href="#" className="nav-item">Contact</a>
                </ul>
            </nav>
            {/* Github and linkedin icons*/}
            <div className="hidden xl:block">
                <a href="#" className="nav-item">
                    GitHub
                </a>
                <a href="#" className="nav-item">
                    Linkedin
                </a>
            </div>
        </header>
    );
};
