import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

/**
 * Editorial section title — left-aligned, small overline, tight type.
 */
export function SectionHeading({ title, subtitle, eyebrow }: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-10 max-w-2xl"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
    >
      {eyebrow && (
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-sm text-zinc-400 sm:text-base">{subtitle}</p>}
    </motion.div>
  );
}
