import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MainLayout } from "../layouts/MainLayout";
import { useScrollPosition } from "../hooks/useScrollPosition";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "DevOps", href: "#devops" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollY = useScrollPosition();
  const scrolled = scrollY > 24;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800/50 shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <MainLayout>
        <nav className="flex h-16 items-center justify-between">
          <a
            href="#hero"
            className="text-lg font-semibold text-zinc-100 hover:text-white transition-colors"
          >
            Ajay Pandey
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden p-2 text-zinc-400 hover:text-zinc-100"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </MainLayout>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800"
          >
            <ul className="flex flex-col gap-1 px-4 pb-4">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="block py-2 text-zinc-400 hover:text-zinc-100"
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
