import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MainLayout } from "../layouts/MainLayout";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { site } from "../data/site";

const NAV_LINKS = [
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollY = useScrollPosition();
  const scrolled = scrollY > 24;

  /** Closing the drawer reflows the page and can cancel native hash scrolling on mobile. */
  const handleMobileNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    setMobileOpen(false);
    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 280);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80"
          : "bg-transparent"
      }`}
    >
      <MainLayout>
        <nav className="flex h-16 items-center justify-between">
          <a
            href="#hero"
            className="text-sm font-semibold tracking-tight text-zinc-100 hover:text-white transition-colors"
          >
            AP
          </a>

          <ul className="hidden md:flex items-center gap-7">
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
            <li>
              <a
                href={site.resume}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-700 px-3.5 py-1.5 text-sm text-zinc-200 hover:border-zinc-500 hover:bg-zinc-900 transition-colors"
              >
                Resume
              </a>
            </li>
          </ul>

          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden p-2 text-zinc-400 hover:text-zinc-100"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </MainLayout>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800"
          >
            <ul className="flex flex-col gap-1 px-4 pb-4">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="block py-2 text-zinc-400 hover:text-zinc-100"
                    onClick={(e) => handleMobileNavClick(e, href)}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.resume}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 text-zinc-200"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
