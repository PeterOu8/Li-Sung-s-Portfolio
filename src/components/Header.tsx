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
        <header className="flex flex-row items-center justify-center py-3">
            <nav>
                <ul className="flex gap-1 rounded-full border border-border bg-surface p-0.5 shadow-sm">
                    {navLinks.map((nav, id) => (
                        <Link key={id} href={nav.href} className="nav-item">{nav.name}</Link>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
