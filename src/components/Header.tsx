import Link from "next/link";

const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    }
];

export const Header = () => {
    return (
        <header className="flex items-center justify-center px-5 py-3 sm:px-8 md:px-12">
            <nav aria-label="Primary navigation">
                <ul className="flex flex-wrap justify-center gap-1 rounded-2xl border border-border bg-surface/80 p-0.5 shadow-sm backdrop-blur-xl sm:rounded-full">
                    {navLinks.map((nav, id) => (
                        <li key={id}>
                            <Link href={nav.href} className="nav-item">{nav.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
