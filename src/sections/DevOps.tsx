import { motion } from "framer-motion";
import { Workflow, Server, GitBranch } from "lucide-react";
import { MainLayout } from "../layouts/MainLayout";
import { SectionHeading } from "../components/SectionHeading";

const POINTS = [
  {
    icon: Workflow,
    title: "CI/CD",
    text: "Automated pipelines for build, test, and deploy. Focus on reliability and fast feedback.",
  },
  {
    icon: Server,
    title: "AWS EC2 & Deployment",
    text: "Deploying and maintaining applications on EC2, with attention to security and scaling.",
  },
  {
    icon: GitBranch,
    title: "GitHub Actions",
    text: "Workflows for tests, linting, and deployments triggered from the repo.",
  },
];

export function DevOps() {
  return (
    <section id="devops" className="py-20 sm:py-24">
      <MainLayout>
        <SectionHeading title="DevOps" subtitle="How I ship and run software" />
        <div className="grid gap-6 sm:grid-cols-3">
          {POINTS.map((item, index) => (
            <motion.div
              key={item.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <item.icon className="h-8 w-8 text-zinc-500 mb-3" />
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </MainLayout>
    </section>
  );
}
