import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { MainLayout } from "../layouts/MainLayout";
import { SectionHeading } from "../components/SectionHeading";

/** Update this path to your resume PDF in /public, or use an external URL. */
const RESUME_URL = "/resume.pdf";

export function Resume() {
  return (
    <section id="resume" className="py-20 sm:py-24 bg-zinc-900/30">
      <MainLayout>
        <SectionHeading title="Resume" subtitle="Download my CV" />
        <motion.div
          className="mx-auto max-w-xl rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 text-center backdrop-blur-sm"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-zinc-400 mb-6">
            Full Stack Developer with MERN and DevOps experience. Ready for production-level work.
          </p>
          <a
            href={RESUME_URL}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-200 transition-colors"
          >
            <FileDown size={18} />
            Download Resume
          </a>
          <p className="mt-3 text-xs text-zinc-500">
            Place your resume PDF in <code className="text-zinc-600">public/resume.pdf</code> or update <code className="text-zinc-600">RESUME_URL</code> in this section.
          </p>
        </motion.div>
      </MainLayout>
    </section>
  );
}
