# Ajay Pandey – Portfolio

Modern, production-ready portfolio built with **React**, **Vite**, **TypeScript**, **TailwindCSS**, and **Framer Motion**. Dark mode by default, responsive, and SEO-friendly.

## Quick start

```bash
npm install
npm run dev
```

**Before you push:** Set your Git name and email so commits show your name (not the editor):

```bash
git config user.name "Your Name"
git config user.email "your@email.com"
```

Use short commit messages, e.g. `layout done`, `skills added`, `fix nav`.

Build for production: `npm run build`

## Adding your content

- **Experience** – Edit `src/data/experience.ts`. Add/remove entries; the timeline updates automatically.
- **Skills** – Edit `src/data/skills.ts`. Use categories: `Frontend`, `Backend`, `DevOps`, `Tools`. Uncomment or add items to the `skillsData` array.
- **Projects** – Edit `src/data/projects.ts`. Add objects with `title`, `description`, `techStack`, `githubUrl`, `liveUrl` (all optional except basics).
- **Resume** – Put your PDF in `public/resume.pdf`, or change `RESUME_URL` in `src/sections/Resume.tsx` to an external URL.
- **Footer links** – Update `GITHUB_URL` and `LINKEDIN_URL` in `src/sections/Footer.tsx`.

## Folder structure

```
src/
├── components/   # Reusable UI (e.g. SectionHeading)
├── sections/     # Page sections (Navbar, Hero, About, …)
├── data/         # experience.ts, skills.ts, projects.ts
├── hooks/        # e.g. useScrollPosition
├── layouts/      # MainLayout
├── assets/
└── App.tsx
```

---

*Below: default Vite + React + TypeScript template notes.*

## React + TypeScript + Vite

This project uses [Vite](https://vite.dev/) with the React + TypeScript template. Key scripts:

- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run preview` – preview production build

## Expanding the ESLint configuration

See the [Vite + React + ESLint](https://eslint.org/docs/latest/use/configure/) and [TypeScript ESLint](https://typescript-eslint.io/) docs for extending the ESLint setup.
