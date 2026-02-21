import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-4 pt-20"
    >
      <div className="text-center">
        <motion.h1
          className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl md:text-6xl mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Ajay Pandey
        </motion.h1>
        <motion.p
          className="text-lg text-zinc-400 max-w-xl mx-auto mb-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Full Stack Developer | MERN | DevOps | AWS
        </motion.p>
        <motion.p
          className="text-zinc-500 text-sm sm:text-base max-w-md mx-auto mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          Building scalable systems and clean interfaces. Backend-first, production-ready.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-200 transition-colors"
          >
            View Projects
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-600 bg-zinc-900/50 px-5 py-2.5 text-sm font-medium text-zinc-100 hover:border-zinc-500 hover:bg-zinc-800/50 transition-colors"
          >
            Contact Me
            <Mail size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
