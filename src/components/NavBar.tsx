"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Menu, X, Code2 } from "lucide-react";

type NavItem = { name: string; href: string };

const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener (client-only)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Resize listener to auto-close mobile menu
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const scrollToSection = (href: string) => {
    if (typeof document === "undefined") return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  // Reusable class constants
  const navBtnClasses =
    "text-muted-foreground hover:text-foreground text-sm font-medium transition-all duration-200";
  const mobileBtnClasses =
    "text-muted-foreground hover:text-foreground hover:bg-muted/50 block w-full rounded-2xl px-4 py-3 text-left font-medium transition-all duration-200";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 border-border border-b shadow-sm backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex cursor-pointer items-center gap-3"
            onClick={() => scrollToSection("#home")}
          >
            <div className="bg-primary rounded-2xl p-2.5 shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <Code2 className="text-primary-foreground h-6 w-6" />
            </div>
            <span className="text-foreground text-xl font-bold tracking-tight">
              Freaky Jones
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={navBtnClasses}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
            <Button
              size="sm"
              className="bg-primary hover:bg-secondary text-primary-foreground rounded-2xl px-6 py-2 font-medium shadow-lg transition-all duration-300 hover:shadow-xl"
              onClick={() => scrollToSection("#contact")}
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen(!isOpen)}
            className="bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 rounded-2xl p-2.5 transition-all duration-200 md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          id="mobile-menu"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, scaleY: 1, display: "block" },
            closed: {
              opacity: 0,
              scaleY: 0,
              transitionEnd: { display: "none" },
            },
          }}
          transition={{ duration: 0.3 }}
          className="bg-background/95 border-border origin-top overflow-hidden border-t backdrop-blur-lg md:hidden"
        >
          <div className="space-y-1 py-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={mobileBtnClasses}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ duration: 0.3, delay: navItems.length * 0.08 }}
              className="px-4 pt-4"
            >
              <Button
                size="sm"
                className="bg-primary hover:bg-secondary text-primary-foreground w-full rounded-2xl py-3 font-medium shadow-lg transition-all duration-300 hover:shadow-xl"
                onClick={() => scrollToSection("#contact")}
              >
                Hire Me
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
