import { isCtaEnabled, resolveCtaHref, restaurant } from "@/config/restaurant";
import { ImageOrPlaceholder } from "@/components/ui/ImageOrPlaceholder";
import { CtaLink } from "@/components/ui/CtaLink";

/**
 * The homepage's one deliberate visual interruption — a dark, campaign-style
 * spread breaking the cream editorial rhythm. All copy/price/CTA come from
 * `restaurant.seasonal`, following the same config convention as
 * `restaurant.hero`/`restaurant.story`, and the CTA resolves through the
 * existing `resolveCtaHref`/`isCtaEnabled` architecture — same as every
 * other CTA on the site.
 */
export function SeasonalOffer() {
  const { eyebrow, heading, description, price, image, imageAlt, cta } =
    restaurant.seasonal;
  const ctaHref = resolveCtaHref(cta.mode, cta.href);

  return (
    <section className="bg-dark-section px-6 py-24 text-dark-section-foreground sm:px-10 md:px-16 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:gap-x-10">
        {/* Image first in source order so mobile leads with the visual;
            explicit column placement moves it to the right on desktop. */}
        <div className="relative aspect-[4/5] overflow-hidden border border-dark-section-foreground/15 md:col-span-7 md:col-start-6">
          <ImageOrPlaceholder
            src={image}
            alt={imageAlt}
            sizes="(min-width: 768px) 58vw, 100vw"
          />
        </div>

        <div className="flex flex-col gap-6 md:col-span-5 md:col-start-1 md:mt-16">
          <p className="motion-fade-up text-xs uppercase tracking-[0.3em] text-dark-section-foreground/70">
            {eyebrow}
          </p>
          <h2 className="motion-fade-up motion-delay-1 text-balance font-heading text-[clamp(2.25rem,4vw+1rem,3.75rem)] leading-[1.05]">
            {heading}
          </h2>
          <p className="motion-fade-up motion-delay-2 max-w-sm text-base text-dark-section-foreground/80 sm:text-lg">
            {description}
          </p>
          <p className="motion-fade-up motion-delay-2 font-heading text-2xl text-accent">
            {restaurant.currency}
            {price.amount}{" "}
            <span className="text-base uppercase tracking-[0.15em] text-dark-section-foreground/60">
              / {price.unit}
            </span>
          </p>
          {isCtaEnabled(cta.mode) && (
            <CtaLink
              href={ctaHref}
              className="motion-fade-up motion-delay-3 inline-flex w-fit items-center justify-center border border-dark-section-foreground/70 px-8 py-3.5 text-sm uppercase tracking-[0.15em] text-dark-section-foreground transition-colors duration-300 hover:border-dark-section-foreground hover:bg-dark-section-foreground hover:text-dark-section"
            >
              {cta.label}
            </CtaLink>
          )}
        </div>
      </div>
    </section>
  );
}
