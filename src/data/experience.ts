/**
 * Experience timeline data.
 * Add or edit entries here; the Experience section will render them automatically.
 */

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  highlights?: string[];
}

export const experienceData: ExperienceEntry[] = [
  {
    id: "1",
    role: "Web Developer",
    company: "Codenia Technologies LLP",
    location: "Noida, Uttar Pradesh",
    period: "Feb 2025 – Present",
    description:
      "Delivered MyBildr HRMS portal and SupplyBase eCommerce platform. Built scalable architecture and handled complex async flows.",
    highlights: [
      "Delivered MyBildr HRMS portal using React.js, Redux Toolkit (Saga), NestJS, and PostgreSQL",
      "Built SupplyBase eCommerce platform (Next.js, Redux Toolkit, Tailwind CSS) with dynamic product listing, token-based auth, and API-driven cart",
      "Integrated QR-based worker onboarding with 11 dynamic forms including file/media uploads",
      "Implemented AWS-based storage and PayPal payment integration",
      "Implemented CI/CD pipelines and deployed on AWS Linux server",
    ],
  },
  {
    id: "2",
    role: "Freelance Software Developer",
    company: "Freelance",
    location: "Remote",
    period: "Sep 2024 – Jan 2025",
    description:
      "Built full-stack applications with complex workflows, secure REST APIs, and scalable architecture.",
    highlights: [
      "Built Form Chaining Mailing Application (React, Node.js, Express) with complex workflows and secure REST APIs",
      "Developed Digital Asset Management system with multimedia handling and optimized blob responses",
      "Implemented Redux-based state management with scalable architecture",
    ],
  },
  {
    id: "3",
    role: "Software Developer Intern",
    company: "LCNC Technologies Pvt. Ltd.",
    location: "Noida",
    period: "Jan 2024 – Jul 2024",
    description:
      "Contributed to DrapCode low-code platform with backend and feature development.",
    highlights: [
      "Built Collection Snapshot feature for one-click NoSQL backup/restore using Redis caching",
      "Developed Delete Permission toggle feature for secure module control",
    ],
  },
];
