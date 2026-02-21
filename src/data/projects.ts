/**
 * Projects data for the Projects section.
 * Add or edit projects here; the section will render cards with links.
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  /** Optional image path or URL */
  image?: string;
}

export const projectsData: Project[] = [
  // Example placeholder – remove or replace with real projects
  // {
  //   id: "1",
  //   title: "Project Name",
  //   description: "Short description of what the project does and your role.",
  //   techStack: ["React", "Node.js", "MongoDB"],
  //   githubUrl: "https://github.com/username/repo",
  //   liveUrl: "https://demo.example.com",
  // },
];
