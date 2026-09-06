import Link from "next/link";
import { navigation } from "@/config/navigation";
import { isCtaEnabled, resolveCtaHref, restaurant } from "@/config/restaurant";
import { CtaLink } from "@/components/ui/CtaLink";
import { MobileNav } from "./MobileNav";

/**
 * Overlay navbar for the hero. Fully driven by `config/navigation.ts` (link
 * list, CTA labels) and `config/restaurant.ts` (CTA destinations, wordmark
 * text) — no restaurant-specific copy is hardcoded here.
 *
 * Currently styled to sit on the dark hero image; a future phase can add
 * scroll-based color swapping once lighter sections exist below the fold.
 */
export function Navbar() {
  const { primaryCta, secondaryCta } = navigation;
  const primaryHref = resolveCtaHref(primaryCta.mode);
  const secondaryHref = resolveCtaHref(secondaryCta.mode);

  return (
    <header className="motion-fade fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-6 py-6 sm:px-10 md:px-12">
        <Link
          href="/"
          className="font-heading text-xl uppercase tracking-[0.25em] text-dark-section-foreground sm:text-2xl"
        >
          {restaurant.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          {navigation.links.map((link) => (
            <CtaLink
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-dark-section-foreground/85 transition-colors duration-300 hover:text-dark-section-foreground"
            >
              {link.label}
            </CtaLink>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <CtaLink
            href={secondaryHref}
            className="text-xs uppercase tracking-[0.2em] text-dark-section-foreground/70 transition-colors duration-300 hover:text-dark-section-foreground"
          >
            {secondaryCta.label}
          </CtaLink>
          {isCtaEnabled(primaryCta.mode) && (
            <CtaLink
              href={primaryHref}
              className="border border-dark-section-foreground/70 px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-dark-section-foreground transition-colors duration-300 hover:border-dark-section-foreground hover:bg-dark-section-foreground hover:text-dark-section"
            >
              {primaryCta.label}
            </CtaLink>
          )}
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
