import { restaurant } from "@/config/restaurant";
import { CtaLink } from "@/components/ui/CtaLink";

/**
 * Editorial location section. Reuses `restaurant.location` (address/map),
 * `restaurant.hours` and `restaurant.contact` directly rather than
 * duplicating that data — only the section's own eyebrow/heading live on
 * `restaurant.location`, following the same pattern as `hero`/`story`.
 */
export function Location() {
  const { eyebrow, heading, address, mapUrl } = restaurant.location;
  const telHref = `tel:${restaurant.contact.phone.replace(/[^\d+]/g, "")}`;

  return (
    <section
      id="visit"
      className="bg-background px-6 py-18 text-foreground sm:px-10 md:px-16 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:gap-x-10">
        <div className="md:col-span-7">
          <p className="motion-fade-up text-xs uppercase tracking-[0.3em] text-muted">
            {eyebrow}
          </p>
          <h2 className="motion-fade-up motion-delay-1 mt-4 text-balance font-heading text-[clamp(2.25rem,4vw+1rem,3.75rem)] leading-[1.05]">
            {heading}
          </h2>
        </div>

        <div className="flex flex-col gap-8 md:col-span-4 md:col-start-9">
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-[0.25em] text-muted">
              Address
            </span>
            <p className="max-w-xs font-heading text-lg">{address}</p>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-[0.25em] text-muted">
              Dinner
            </span>
            <p className="font-heading text-lg">{restaurant.hours.dinner}</p>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <CtaLink
              href={mapUrl}
              className="inline-flex w-fit items-center gap-2 text-sm uppercase tracking-[0.15em] text-foreground transition-colors duration-300 hover:text-accent"
            >
              Directions <span aria-hidden="true">→</span>
            </CtaLink>
            <CtaLink
              href={telHref}
              className="inline-flex w-fit items-center gap-2 text-sm uppercase tracking-[0.15em] text-foreground transition-colors duration-300 hover:text-accent"
            >
              {restaurant.contact.phone} <span aria-hidden="true">→</span>
            </CtaLink>
            <CtaLink
              href={`mailto:${restaurant.contact.email}`}
              className="inline-flex w-fit items-center gap-2 text-sm uppercase tracking-[0.15em] text-foreground transition-colors duration-300 hover:text-accent"
            >
              {restaurant.contact.email} <span aria-hidden="true">→</span>
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
