import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

function isLocalImageAvailable(src: string): boolean {
  if (/^https?:\/\//.test(src)) return true;
  try {
    return fs.existsSync(path.join(process.cwd(), "public", src));
  } catch {
    return false;
  }
}

interface ImageOrPlaceholderProps {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

/**
 * Fills its positioned parent with a `next/image` when `src` exists under
 * `public/` (or is a full URL), or a tasteful monogram placeholder derived
 * from `alt` when it doesn't yet — no external stock images, and no broken
 * image icon. Dropping a real photo in at that path switches this over to
 * `next/image` automatically; no component changes required.
 */
export function ImageOrPlaceholder({
  src,
  alt,
  sizes,
  priority,
  className,
}: ImageOrPlaceholderProps) {
  if (isLocalImageAvailable(src)) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${className ?? ""}`}
      />
    );
  }

  const monogram = alt.trim().charAt(0).toUpperCase() || "?";

  return (
    <div
      role="img"
      aria-label={alt}
      className={`absolute inset-0 flex items-center justify-center overflow-hidden bg-[linear-gradient(160deg,var(--surface)_0%,var(--border)_100%)] ${className ?? ""}`}
    >
      <span
        aria-hidden="true"
        className="select-none font-heading text-[clamp(3rem,10vw,6rem)] leading-none text-foreground/10"
      >
        {monogram}
      </span>
    </div>
  );
}
