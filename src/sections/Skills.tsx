import { motion } from "framer-motion";
import { MainLayout } from "../layouts/MainLayout";
import { SectionHeading } from "../components/SectionHeading";
import { SkillIcon } from "../components/SkillIcon";
import { skillsData, skillCategories } from "../data/skills";

export function Skills() {
  const byCategory = skillCategories.map((cat) => ({
    category: cat,
    items: skillsData.filter((s) => s.category === cat),
  }));

  return (
    <section id="skills" className="py-20 sm:py-24">
      <MainLayout>
        <SectionHeading title="Skills" subtitle="Technologies I work with" />
        {skillsData.length === 0 ? (
          <motion.p
            className="text-center text-zinc-500 py-12 rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Add skills in <code className="text-zinc-400">src/data/skills.ts</code> to see them here.
          </motion.p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {byCategory.map(
              ({ category, items }) =>
                items.length > 0 && (
                  <motion.div
                    key={category}
                    className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-3">
                      {category}
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <li
                          key={skill.id}
                          className="flex items-center gap-2 rounded-lg bg-zinc-800 px-3 py-2 text-sm text-zinc-300"
                        >
                          <SkillIcon slug={skill.icon} name={skill.name} size={20} className="shrink-0" />
                          <span>{skill.name}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
            )}
          </div>
        )}
      </MainLayout>
    </section>
  );
}
