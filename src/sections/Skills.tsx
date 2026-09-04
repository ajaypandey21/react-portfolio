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
        <SectionHeading
          eyebrow="Stack"
          title="What I work with"
          subtitle="The tools I actually use in production — not a wish list."
        />
        {skillsData.length === 0 ? (
          <p className="text-zinc-500">No skills listed yet.</p>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {byCategory.map(
              ({ category, items }, index) =>
                items.length > 0 && (
                  <motion.div
                    key={category}
                    className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-5"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                  >
                    <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                      {category}
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <li
                          key={skill.id}
                          className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1.5 text-sm text-zinc-300"
                        >
                          <SkillIcon
                            slug={skill.icon}
                            name={skill.name}
                            size={16}
                            className="shrink-0"
                          />
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
