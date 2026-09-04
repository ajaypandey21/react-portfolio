import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MainLayout } from "../layouts/MainLayout";
import { SectionHeading } from "../components/SectionHeading";
import { site } from "../data/site";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <MainLayout>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s work together"
          subtitle="A role, a product, or a short conversation — email is fastest."
        />
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-2 text-xl font-medium text-zinc-100 sm:text-2xl"
            >
              {site.email}
              <ArrowUpRight
                size={18}
                className="text-zinc-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <p className="text-sm text-zinc-500">{site.location}</p>
            <div className="flex flex-wrap gap-4 pt-2 text-sm">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                GitHub
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={site.resume}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                Resume
              </a>
            </div>
          </motion.div>

          <motion.form
            className="space-y-4"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-zinc-400 mb-1"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-2.5 text-zinc-100 placeholder-zinc-600 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-zinc-400 mb-1"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-2.5 text-zinc-100 placeholder-zinc-600 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-zinc-400 mb-1"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={4}
                required
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-2.5 text-zinc-100 placeholder-zinc-600 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 resize-none"
                placeholder="What are you building?"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-white transition-colors disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
            <p className="text-xs text-zinc-500">
              {status === "success" && "Sent. I’ll get back to you."}
              {status === "error" && (
                <>
                  Form didn’t send. Email me at{" "}
                  <a href={`mailto:${site.email}`} className="underline">
                    {site.email}
                  </a>
                  .
                </>
              )}
            </p>
          </motion.form>
        </div>
      </MainLayout>
    </section>
  );
}
