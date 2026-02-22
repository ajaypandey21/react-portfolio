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
  {
    id: "1",
    title: "MyBildr – HRMS Portal",
    description:
      "HRMS portal with QR-based worker onboarding, 11 dynamic forms with file uploads, AWS media storage, and complex async state management.",
    techStack: ["React.js", "Redux Toolkit (Saga)", "NestJS", "PostgreSQL", "AWS", "PayPal"],
    liveUrl: "https://mybildr.com",
  },
  {
    id: "2",
    title: "SupplyBase – eCommerce Platform",
    description:
      "eCommerce platform with dynamic product listing and filtering, token-based authentication, API-driven cart management, and scalable frontend architecture.",
    techStack: ["Next.js", "Redux Toolkit (Thunk)", "Tailwind CSS", "REST APIs"],
    liveUrl: "https://supplybase.co.uk",
  },
  {
    id: "3",
    title: "Digital Asset Management System",
    description:
      "Multimedia file handling with optimized blob response handling and scalable frontend architecture.",
    techStack: ["React", "Tailwind CSS", "Redux", "REST APIs"],
  },
  {
    id: "4",
    title: "DrapCode – Low-code Platform",
    description:
      "Contributed to DrapCode low-code platform; built Collection Snapshot (NoSQL backup/restore with Redis) and Delete Permission toggle.",
    techStack: ["React", "Node.js", "Redis", "NoSQL"],
    liveUrl: "https://drapcode.com",
  },
];
