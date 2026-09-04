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
    location: "Noida, India",
    period: "Feb 2025 – Aug 2026",
    description:
      "Owned full-stack delivery for production products — from checkout and HR workflows to AWS deploys.",
    highlights: [
      "Shipped SupplyBase, a UK construction e-commerce platform: auth, coupons, checkout, admin, and payments",
      "Built MyBildr HRMS with a configurable 11-step onboarding flow, NestJS APIs, PostgreSQL, and AWS file storage",
      "Improved technical SEO and Core Web Vitals (LCP, FID, CLS) to raise organic visibility and load performance",
      "Deployed and run apps on AWS EC2 + S3 with Nginx, PM2, Linux, and CI/CD",
    ],
  },
  {
    id: "2",
    role: "Software Developer (Contract)",
    company: "Confidential client",
    location: "Ahmadi, Kuwait · Remote",
    period: "Sep 2024 – Jan 2025",
    description:
      "Built internal tools for an oil-sector client: multi-step workflows, secure APIs, and media handling.",
    highlights: [
      "Form-chaining mailing app with multi-step workflows, REST APIs, and role-based auth (React, Node, Express)",
      "Digital asset management system with reusable UI, Redux Toolkit, and secure file handling",
    ],
  },
  {
    id: "3",
    role: "Software Developer Intern",
    company: "LCNC Technologies Pvt. Ltd.",
    location: "Noida, India",
    period: "Jan 2024 – Jul 2024",
    description:
      "Contributed backend and platform features to DrapCode, a low-code product.",
    highlights: [
      "Collection Snapshot: one-click NoSQL backup/restore with Redis caching",
      "Delete Permission toggle for role-based, secure resource control",
    ],
  },
];
