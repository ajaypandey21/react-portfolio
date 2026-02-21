import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

/**
 * Reusable section title + optional subtitle with subtle animation.
 */
export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-10 text-center"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-zinc-400">{subtitle}</p>
      )}
    </motion.div>
  );
}
