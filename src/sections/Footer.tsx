import { MainLayout } from "../layouts/MainLayout";
import { SocialLinks } from "../components/SocialLinks";
import { site } from "../data/site";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8">
      <MainLayout>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} {site.name}
          </p>
          <SocialLinks />
        </div>
      </MainLayout>
    </footer>
  );
}
