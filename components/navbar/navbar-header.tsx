import Link from "next/link";

const navLinks = [
  { name: "Hjem", href: "#hero" },
  { name: "Om meg", href: "#about" },
  { name: "Ferdigheter", href: "#skills" },
  { name: "Prosjekter", href: "#projects" },
  { name: "Kontakt", href: "#contact" },
];

export const NavBarHeader = () => {
  return (
    <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur sticky top-0 z-50 border-b border-border shadow-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
        <span className="font-bold text-lg tracking-tight">Lasse Mostuen</span>
        <ul className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link href={link.href} className="hover:underline text-base font-medium transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          {/* Hamburger menu for mobile (not functional for now) */}
          <button aria-label="Open menu" className="p-2 rounded hover:bg-accent">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};