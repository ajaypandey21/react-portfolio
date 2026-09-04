import { useState } from "react";

/** Iconify serves the full Simple Icons set, including marks the official CDN has dropped. */
const ICON_API = "https://api.iconify.design/simple-icons";
const ICON_COLOR = "%23d4d4d8";

interface SkillIconProps {
  /** Simple Icons slug (e.g. "react", "nextdotjs") */
  slug: string;
  name: string;
  size?: number;
  className?: string;
}

/**
 * Renders a tech logo as a single-tone mark so the set reads consistently on dark.
 * If the icon fails to load (e.g. invalid slug), shows first letter as fallback.
 */
export function SkillIcon({
  slug,
  name,
  size = 20,
  className = "",
}: SkillIconProps) {
  const [failed, setFailed] = useState(false);
  const src = `${ICON_API}/${slug}.svg?color=${ICON_COLOR}`;

  if (failed) {
    return (
      <span
        className={`inline-flex shrink-0 items-center justify-center rounded bg-zinc-700 text-xs font-medium text-zinc-200 ${className}`}
        style={{ width: size, height: size }}
        aria-hidden
      >
        {name.charAt(0)}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      loading="lazy"
      onError={() => setFailed(true)}
      aria-hidden
    />
  );
}
