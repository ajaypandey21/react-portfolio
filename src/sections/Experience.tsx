import { motion } from "framer-motion";
import { MainLayout } from "../layouts/MainLayout";
import { SectionHeading } from "../components/SectionHeading";
import { experienceData } from "../data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24">
      <MainLayout>
        <SectionHeading
          eyebrow="Experience"
          title="Where I’ve shipped"
          subtitle="Production work across e-commerce, HR, and internal platforms."
        />
        <ol className="divide-y divide-zinc-800 border-t border-zinc-800">
          {experienceData.map((entry, index) => (
            <motion.li
              key={entry.id}
              className="grid gap-3 py-8 sm:grid-cols-[11rem_1fr] sm:gap-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <div>
                <p className="text-sm text-zinc-500">{entry.period}</p>
                <p className="mt-1 text-sm text-zinc-400">{entry.company}</p>
                {entry.location && (
                  <p className="mt-0.5 text-xs text-zinc-600">{entry.location}</p>
                )}
              </div>
              <div>
                <h3 className="text-lg font-medium text-zinc-100">{entry.role}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {entry.description}
                </p>
                {entry.highlights && entry.highlights.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {entry.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 text-sm leading-relaxed text-zinc-400"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.li>
          ))}
        </ol>
      </MainLayout>
    </section>
  );
}
