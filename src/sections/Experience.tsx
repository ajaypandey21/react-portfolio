import { motion } from "framer-motion";
import { MainLayout } from "../layouts/MainLayout";
import { SectionHeading } from "../components/SectionHeading";
import { experienceData } from "../data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 bg-zinc-900/30">
      <MainLayout>
        <SectionHeading title="Experience" subtitle="Where I've worked" />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-700 md:left-1/2 md:-translate-x-px" />
          <ul className="space-y-12">
            {experienceData.map((entry, index) => (
              <motion.li
                key={entry.id}
                className="relative pl-12 md:pl-0 md:flex md:items-start md:gap-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4 }}
              >
                {/* Dot */}
                <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-zinc-500 border-2 border-zinc-900 md:left-1/2 md:-translate-x-[7px]" />
                <div
                  className={`md:w-1/2 ${index % 2 === 1 ? "md:order-2 md:text-right" : "md:ml-0"}`}
                >
                  <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                    {entry.period}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-zinc-100">
                    {entry.role}
                  </h3>
                  <p className="text-zinc-400">
                    {entry.company}
                    {entry.location && ` · ${entry.location}`}
                  </p>
                </div>
                <div
                  className={`mt-2 md:mt-0 md:w-1/2 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 ${
                    index % 2 === 1 ? "md:order-1 md:text-left" : "md:ml-auto"
                  }`}
                >
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {entry.description}
                  </p>
                  {entry.highlights && entry.highlights.length > 0 && (
                    <ul className="mt-3 space-y-1 text-sm text-zinc-400">
                      {entry.highlights.map((h, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-zinc-600">·</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </MainLayout>
    </section>
  );
}
