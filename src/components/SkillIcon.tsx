import { useState } from "react";

const SIMPLE_ICONS_CDN = "https://cdn.simpleicons.org";

interface SkillIconProps {
  /** Simple Icons slug (e.g. "react", "nextdotjs") */
  slug: string;
  name: string;
  size?: number;
  className?: string;
}

/**
 * Renders the real brand/tech logo from Simple Icons CDN.
 * If the icon fails to load (e.g. invalid slug), shows first letter as fallback.
 */
export function SkillIcon({
  slug,
  name,
  size = 20,
  className = "",
}: SkillIconProps) {
  const [failed, setFailed] = useState(false);
  const src = `${SIMPLE_ICONS_CDN}/${slug}?viewbox=auto`;

  if (failed) {
    return (
      <span
        className={`inline-flex shrink-0 items-center justify-center rounded bg-zinc-600 text-xs font-medium text-zinc-200 ${className}`}
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
