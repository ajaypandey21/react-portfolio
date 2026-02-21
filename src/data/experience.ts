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
    role: "Full Stack Developer",
    company: "Freelance",
    location: "Remote",
    period: "2022 – Present",
    description:
      "Building and delivering full-stack applications for international clients with focus on scalability and clean architecture.",
    highlights: [
      "Delivered production apps using MERN stack",
      "Collaborated with clients across time zones",
      "Implemented CI/CD and cloud deployments",
    ],
  },
  {
    id: "2",
    role: "Placeholder Role",
    company: "Placeholder Company",
    location: "City, Country",
    period: "YYYY – YYYY",
    description:
      "Short description of responsibilities and impact. Replace with your real experience.",
    highlights: [
      "Key achievement or responsibility",
      "Another highlight",
    ],
  },
];
