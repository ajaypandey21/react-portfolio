import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { MainLayout } from "../layouts/MainLayout";
import { SectionHeading } from "../components/SectionHeading";
import { projectsData, type Project } from "../data/projects";

function ProjectCard({
  project,
  featured,
  index,
}: {
  project: Project;
  featured?: boolean;
  index: number;
}) {
  return (
    <motion.article
      className={`group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5 transition-colors hover:border-zinc-600 ${
        featured ? "sm:p-7" : ""
      }`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div className="flex items-center justify-between gap-3">
        {project.tag && (
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-500">
            {project.tag}
          </span>
        )}
        {project.liveUrl && (
          <span className="rounded-full border border-zinc-800 px-2 py-0.5 text-[11px] text-zinc-500">
            Live
          </span>
        )}
      </div>
      <h3
        className={`mt-3 font-semibold tracking-tight text-zinc-100 group-hover:text-white ${
          featured ? "text-xl sm:text-2xl" : "text-lg"
        }`}
      >
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            {project.title}
            <ExternalLink
              size={16}
              className="text-zinc-600 transition-colors group-hover:text-zinc-300"
            />
          </a>
        ) : (
          project.title
        )}
      </h3>
      <p
        className={`mt-2 leading-relaxed text-zinc-400 ${
          featured ? "text-sm sm:text-base" : "text-sm"
        }`}
      >
        {project.description}
      </p>
      <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-zinc-900 px-2.5 py-0.5 text-xs text-zinc-500"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export function Projects() {
  const featured = projectsData.filter((p) => p.featured);
  const rest = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 sm:py-24">
      <MainLayout>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          subtitle="Live products first. The rest is platform and product work."
        />
        {projectsData.length === 0 ? (
          <p className="text-zinc-500">No projects yet.</p>
        ) : (
          <div className="space-y-4">
            <div className="grid gap-4 lg:grid-cols-2">
              {featured.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  featured
                  index={index}
                />
              ))}
            </div>
            {rest.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2">
                {rest.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index + featured.length}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </MainLayout>
    </section>
  );
}
