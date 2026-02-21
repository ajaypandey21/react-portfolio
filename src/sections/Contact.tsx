import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { MainLayout } from "../layouts/MainLayout";
import { SectionHeading } from "../components/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <MainLayout>
        <SectionHeading title="Contact" subtitle="Get in touch" />
        <motion.div
          className="mx-auto max-w-lg rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-sm"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="flex items-center gap-2 text-zinc-400 mb-6">
            <MapPin size={18} />
            Ghaziabad, Uttar Pradesh, India
          </p>
          {/* UI-only form – no backend; add your own handler or link to a form service later */}
          <form
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-zinc-400 mb-1">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2.5 text-zinc-100 placeholder-zinc-500 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-zinc-400 mb-1">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2.5 text-zinc-100 placeholder-zinc-500 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-zinc-400 mb-1">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={4}
                className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2.5 text-zinc-100 placeholder-zinc-500 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-zinc-100 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-200 transition-colors"
            >
              Send message
            </button>
          </form>
          <p className="mt-3 text-xs text-zinc-500 text-center">
            Form is UI only. Connect to your backend or a service like Formspree to handle submissions.
          </p>
        </motion.div>
      </MainLayout>
    </section>
  );
}
