import { motion } from "framer-motion";
import { ArrowRight, FileDown } from "lucide-react";
import { SocialLinks } from "../components/SocialLinks";
import { site } from "../data/site";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay },
});

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pt-20 pb-16"
    >
      <div className="hero-atmosphere" aria-hidden />

      <div className="relative mx-auto w-full max-w-3xl">
        <motion.h1
          className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl md:text-6xl"
          {...fade(0)}
        >
          Ajay Pandey
        </motion.h1>

        <motion.p
          className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
          {...fade(0.1)}
        >
          I build and ship production software end to end — architecture, APIs,
          interfaces, and the AWS infrastructure it runs on.
        </motion.p>

        <motion.p className="mt-4 text-sm text-zinc-500" {...fade(0.18)}>
          Based in {site.location}. Open to full-time and contract roles.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center gap-3"
          {...fade(0.26)}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-white transition-colors"
          >
            View work
            <ArrowRight size={16} />
          </a>
          <a
            href={site.resume}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:border-zinc-500 hover:bg-zinc-900 transition-colors"
          >
            <FileDown size={16} />
            Resume
          </a>
        </motion.div>

        <motion.div className="mt-10" {...fade(0.34)}>
          <SocialLinks iconSize={20} />
        </motion.div>
      </div>
    </section>
  );
}
