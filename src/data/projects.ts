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
  featured?: boolean;
  tag?: string;
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "SupplyBase",
    tag: "E-commerce",
    featured: true,
    description:
      "UK construction-supplies store. Auth, coupon engine, checkout, admin, payments — plus SEO and Core Web Vitals work that improved search visibility.",
    techStack: ["Next.js", "React", "Node.js", "MongoDB", "PostgreSQL", "AWS"],
    liveUrl: "https://supplybase.co.uk",
  },
  {
    id: "2",
    title: "MyBildr",
    tag: "HRMS",
    featured: true,
    description:
      "HRMS portal with admin-configurable 11-step onboarding, conditional logic, secure APIs, file management, and AWS deployment.",
    techStack: ["Next.js", "React", "NestJS", "PostgreSQL", "AWS"],
    liveUrl: "https://mybildr.com",
  },
  {
    id: "3",
    title: "DrapCode",
    tag: "Low-code",
    description:
      "Low-code platform work: Collection Snapshot (NoSQL backup/restore with Redis) and a Delete Permission control for secure module access.",
    techStack: ["React", "Node.js", "Redis", "NoSQL"],
    liveUrl: "https://drapcode.com",
  },
  {
    id: "4",
    title: "LovesGoals",
    tag: "Product",
    description:
      "Wedding e-invitation platform with multi-step guest forms, admin-configurable event settings, and guest-response export.",
    techStack: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
];
