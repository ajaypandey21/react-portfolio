/**
 * Skills data by category.
 * Icons are real brand logos from Simple Icons (cdn.simpleicons.org).
 * Use the exact slug from https://simpleicons.org (e.g. "react", "amazonaws").
 */

export type SkillCategory = "Frontend" | "Backend" | "DevOps" | "Tools";

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  /** Simple Icons slug (lowercase) – see https://simpleicons.org */
  icon: string;
}

export const skillsData: SkillItem[] = [
  // Frontend
  { id: "fe-1", name: "React", category: "Frontend", icon: "react" },
  { id: "fe-2", name: "Next.js", category: "Frontend", icon: "nextdotjs" },
  { id: "fe-3", name: "TypeScript", category: "Frontend", icon: "typescript" },
  { id: "fe-4", name: "JavaScript", category: "Frontend", icon: "javascript" },
  { id: "fe-5", name: "Redux Toolkit", category: "Frontend", icon: "redux" },
  {
    id: "fe-6",
    name: "TailwindCSS",
    category: "Frontend",
    icon: "tailwindcss",
  },
  // Backend
  { id: "be-1", name: "Node.js", category: "Backend", icon: "nodedotjs" },
  { id: "be-2", name: "NestJS", category: "Backend", icon: "nestjs" },
  { id: "be-3", name: "Express.js", category: "Backend", icon: "express" },
  { id: "be-4", name: "MongoDB", category: "Backend", icon: "mongodb" },
  { id: "be-5", name: "PostgreSQL", category: "Backend", icon: "postgresql" },
  { id: "be-6", name: "MySQL", category: "Backend", icon: "mysql" },
  { id: "be-7", name: "Redis", category: "Backend", icon: "redis" },

  // DevOps & Cloud – AWS uses slug "amazonaws"
  { id: "do-1", name: "AWS", category: "DevOps", icon: "amazonaws" },
  {
    id: "do-2",
    name: "GitHub Actions",
    category: "DevOps",
    icon: "githubactions",
  },
  { id: "do-3", name: "Nginx", category: "DevOps", icon: "nginx" },
  { id: "do-4", name: "PM2", category: "DevOps", icon: "pm2" },
  { id: "do-5", name: "Docker", category: "DevOps", icon: "docker" },
  // Tools
  { id: "tools-1", name: "Git", category: "Tools", icon: "git" },
  { id: "tools-2", name: "GitHub", category: "Tools", icon: "github" },
  { id: "tools-3", name: "Linux", category: "Tools", icon: "linux" },
  { id: "tools-4", name: "VS Code", category: "Tools", icon: "vscode" },
  { id: "tools-5", name: "Postman", category: "Tools", icon: "postman" },
];

/** Ordered list of categories for display (defines section order). */
export const skillCategories: SkillCategory[] = [
  "Frontend",
  "Backend",
  "DevOps",
  "Tools",
];
