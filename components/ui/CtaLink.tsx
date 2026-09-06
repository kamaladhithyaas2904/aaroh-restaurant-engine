import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

interface CtaLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  children: ReactNode;
}

/**
 * Renders an internal `next/link` for same-site destinations (paths like
 * `/reserve` or `/#menu`) and a plain `<a>` for everything else (external
 * URLs, `tel:`, `mailto:`) — opening external http(s) links in a new tab.
 *
 * Centralizing this choice means every nav/CTA consumer automatically uses
 * the right link type, instead of each component guessing.
 */
export function CtaLink({ href, children, ...props }: CtaLinkProps) {
  const isInternal = href.startsWith("/");

  if (isInternal) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }

  const isExternalUrl = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      {...(isExternalUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}
