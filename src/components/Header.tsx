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
    // WIP redeploy after page finished
    // {
    //   name: "Contact",
    //   href: "/contact",
    // },
    {
        name: "Contact",
        href: "mailto:lisungou8@gmail.com",
    },
];

export const Header = () => {
    return (
        <header className="flex flex-row items-center justify-center py-3">
            <nav>
                <ul className="flex gap-1 p-0.5 border-white/15 rounded-full bg-white/10 backdrop-blur">
                    {navLinks.map((nav, id) => (
                        <Link key={id} href={nav.href} className="nav-item">{nav.name}</Link>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
