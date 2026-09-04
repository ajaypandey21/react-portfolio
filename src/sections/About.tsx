import { motion } from "framer-motion";
import { MainLayout } from "../layouts/MainLayout";
import { SectionHeading } from "../components/SectionHeading";

const stats = [
  { value: "2+", label: "Years shipping" },
  { value: "4", label: "Live products" },
  { value: "UK · KW", label: "Clients abroad" },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <MainLayout>
        <SectionHeading
          eyebrow="About"
          title="Built for production, not demos"
          subtitle="A short snapshot of how I work."
        />
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
          <motion.div
            className="max-w-2xl space-y-4 text-zinc-300 leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            <p>
              I focus on the parts that have to work in production — APIs, auth,
              payments, file pipelines — then deploy the result myself on AWS.
            </p>
            <p>
              Recently I shipped{" "}
              <strong className="font-medium text-zinc-100">SupplyBase</strong>,
              a UK construction e-commerce platform, and{" "}
              <strong className="font-medium text-zinc-100">MyBildr</strong>, an
              HRMS with a configurable 11-step onboarding flow. Before that I
              built internal tools for a confidential client in Kuwait and
              contributed to{" "}
              <strong className="font-medium text-zinc-100">DrapCode</strong>, a
              low-code product.
            </p>
            <p className="text-zinc-400">
              MCA, 2024. Strongest in React, Node.js, and TypeScript. I like
              system design, and deploys that don’t need a babysitter.
            </p>
          </motion.div>

          <motion.ul
            className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800 lg:grid-cols-1"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.08 }}
          >
            {stats.map((stat) => (
              <li
                key={stat.label}
                className="bg-zinc-950 px-4 py-5 sm:px-5"
              >
                <p className="text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-zinc-500 sm:text-sm">{stat.label}</p>
              </li>
            ))}
          </motion.ul>
        </div>
      </MainLayout>
    </section>
  );
}
