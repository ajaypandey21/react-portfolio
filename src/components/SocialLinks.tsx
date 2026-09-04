import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "../data/site";

const links = [
  { href: site.github, label: "GitHub", icon: Github },
  { href: site.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: `mailto:${site.email}`, label: "Email", icon: Mail },
] as const;

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export function SocialLinks({ className = "", iconSize = 18 }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          className="text-zinc-500 hover:text-zinc-100 transition-colors"
          aria-label={label}
        >
          <Icon size={iconSize} />
        </a>
      ))}
    </div>
  );
}
