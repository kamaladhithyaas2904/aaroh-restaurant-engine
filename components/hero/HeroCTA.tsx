import { getPrimaryConversionCta, resolveCtaHref, restaurant } from "@/config/restaurant";
import { CtaLink } from "@/components/ui/CtaLink";

/**
 * Renders the hero's primary/secondary actions. The primary action comes
 * from `getPrimaryConversionCta()` — the same resolver the mobile sticky CTA
 * uses — so the two can never disagree about which action is "primary".
 */
export function HeroCTA() {
  const primary = getPrimaryConversionCta();
  const secondary = restaurant.cta.secondary;
  const secondaryHref = resolveCtaHref(secondary.mode, secondary.href);

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <CtaLink
        href={primary.href}
        className="inline-flex items-center justify-center border border-dark-section-foreground bg-dark-section-foreground px-8 py-3.5 text-sm uppercase tracking-[0.15em] text-dark-section transition-colors duration-300 hover:bg-transparent hover:text-dark-section-foreground"
      >
        {primary.label}
      </CtaLink>
      <CtaLink
        href={secondaryHref}
        className="inline-flex items-center justify-center border border-dark-section-foreground/40 px-8 py-3.5 text-sm uppercase tracking-[0.15em] text-dark-section-foreground transition-colors duration-300 hover:border-dark-section-foreground"
      >
        {secondary.label}
      </CtaLink>
    </div>
  );
}
