export const Header = () => {
    return (
        <header className="flex flex-row items-center justify-center py-3">
            <nav>
                <ul className="flex gap-1 p-0.5 border-white/15 rounded-full bg-white/10 backdrop-blur">
                    <a href="/" className="nav-item">Home</a>
                    <a href="/projects" className="nav-item">Projects</a>
                    <a href="/about" className="nav-item">About</a>
                    <a href="/contact" className="nav-item">Contact</a>
                </ul>
            </nav>
        </header>
    );
};
