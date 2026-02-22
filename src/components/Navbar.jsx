import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";

const navItems = [
    {name: "Accueil", href: "#hero"},
    {name: "A propos", href: "#about"},
    {name: "Compétences", href: "#skills"},
    {name: "Mon Expérience", href: "#experience"},
    {name: "Projets", href: "#projects"},
    {name: "Contacts", href: "#contact"},
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(["hero", "about", "skills", "experience", "projects", "contact"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed z-50 transition-all duration-500 left-0 right-0",
        isScrolled 
          ? "top-4 mx-4 md:mx-auto max-w-5xl py-3 px-6 bg-background/60 backdrop-blur-2xl border border-border/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] rounded-2xl" 
          : "top-0 py-6"
      )}
    >
      <div className={cn("container flex items-center justify-between", !isScrolled && "px-4")}>
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Lucas Dachez </span>{" "}
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8 relative">
          {navItems.map((item, key) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={key}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg group",
                  isActive ? "text-primary" : "text-foreground/70 hover:text-primary hover:bg-primary/10"
                )}
              >
                {item.name}
                {/* Active indicator dot */}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary" />
                )}
              </a>
            );
          })}
        </div>

        {/* mobile nav */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={key}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-4 transition-colors duration-300 px-4",
                    isActive ? "text-primary font-semibold" : "text-foreground/70 hover:text-primary"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {isActive && <span className="w-2 h-2 rounded-full bg-primary" />}
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};