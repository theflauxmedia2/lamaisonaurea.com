import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const onHero = !scrolled && location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/gallery", label: "Gallery" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-md py-4 border-b border-border/60 shadow-sm"
            : "bg-transparent py-7"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="z-50 relative">
            <h1
              className={`font-serif text-2xl md:text-[30px] font-semibold tracking-tight transition-colors duration-300 ${
                onHero && !isOpen ? "text-white" : "text-foreground"
              }`}
            >
              La Maison Aurea
            </h1>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-colors link-underline ${
                  location === link.href
                    ? onHero
                      ? "text-white font-medium"
                      : "text-foreground font-medium"
                    : onHero
                      ? "text-white/70 hover:text-white"
                      : "text-muted-foreground hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button
                variant="outline"
                className={`rounded-none px-5 py-2 text-xs tracking-[0.2em] ${
                  onHero
                    ? "border-white/70 text-white hover:bg-white hover:text-foreground"
                    : "border-foreground/50 text-foreground hover:bg-foreground hover:text-background"
                }`}
              >
                Book a Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden z-50 p-2 ${onHero && !isOpen ? "text-white" : "text-foreground"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="text-3xl font-serif text-foreground hover:text-accent transition-colors"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={closeMenu}>
              <Button className="rounded-none px-6 py-3 w-48">Book a Consultation</Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
