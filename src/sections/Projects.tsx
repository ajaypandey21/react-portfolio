import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { MainLayout } from "../layouts/MainLayout";
import { SectionHeading } from "../components/SectionHeading";
import { projectsData } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 bg-zinc-900/30">
      <MainLayout>
        <SectionHeading title="Projects" subtitle="Things I've built" />
        {projectsData.length === 0 ? (
          <motion.p
            className="text-center text-zinc-500 py-12 rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Add projects in <code className="text-zinc-400">src/data/projects.ts</code> to see them here.
          </motion.p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project, index) => (
              <motion.article
                key={project.id}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 backdrop-blur-sm transition-all hover:border-zinc-600 hover:shadow-lg hover:shadow-black/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                      aria-label="Live site"
                    >
                      <ExternalLink size={18} />
                      Live
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </MainLayout>
    </section>
  );
}
