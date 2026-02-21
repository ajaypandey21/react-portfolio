import { motion } from "framer-motion";
import { MainLayout } from "../layouts/MainLayout";
import { SectionHeading } from "../components/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <MainLayout>
        <SectionHeading title="About" subtitle="A bit about me" />
        <motion.div
          className="mx-auto max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-zinc-300 leading-relaxed mb-4">
            I'm from <strong className="text-zinc-200">Ghaziabad, Uttar Pradesh, India</strong>.
            I focus on backend architecture and scalable systems, and I enjoy turning complex
            requirements into clean, maintainable code.
          </p>
          <p className="text-zinc-300 leading-relaxed mb-4">
            I have experience working with <strong className="text-zinc-200">international clients</strong> and
            delivering production-grade applications. I'm strongest in{" "}
            <strong className="text-zinc-200">React</strong>,{" "}
            <strong className="text-zinc-200">Node.js</strong>, and{" "}
            <strong className="text-zinc-200">TypeScript</strong>, and I keep pushing into DevOps
            and cloud so the full pipeline stays in shape.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            When I'm not shipping features, I'm reading about system design or improving my
            deployment workflows.
          </p>
        </motion.div>
      </MainLayout>
    </section>
  );
}
