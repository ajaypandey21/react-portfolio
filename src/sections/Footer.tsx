import { Github, Linkedin } from "lucide-react";
import { MainLayout } from "../layouts/MainLayout";

/** Update these to your profiles */
const GITHUB_URL = "https://github.com";
const LINKEDIN_URL = "https://linkedin.com";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8">
      <MainLayout>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Ajay Pandey. Ghaziabad, India.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-300 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </MainLayout>
    </footer>
  );
}
