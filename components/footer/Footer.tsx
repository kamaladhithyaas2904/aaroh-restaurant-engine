import { restaurant } from "@/config/restaurant";
import { CtaLink } from "@/components/ui/CtaLink";
import { BrandMark } from "@/components/ui/BrandMark";
import { telHref as buildTelHref } from "@/components/ui/phone";

/**
 * Site footer. Every value comes from `config/restaurant.ts` — name,
 * tagline, address, hours, contact, Instagram — nothing restaurant-specific
 * is hardcoded here. Extra bottom padding on mobile keeps the copyright
 * line clear of the fixed `MobileStickyCTA` bar, the same technique `Hero`
 * already uses for its own bottom content.
 */
export function Footer() {
  const telHref = buildTelHref(restaurant.contact.phone);
  const instagramHandle = restaurant.social.instagram?.replace(/^@/, "");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-section px-6 pt-16 pb-28 text-dark-section-foreground sm:px-10 md:px-16 md:pb-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-12 md:gap-x-10">
          <div className="flex flex-col gap-3 md:col-span-4">
            <CtaLink
              href="/"
              className="w-fit font-heading text-2xl uppercase tracking-[0.2em]"
            >
              <BrandMark />
            </CtaLink>
            <p className="max-w-xs text-sm text-dark-section-foreground/70">
              {restaurant.tagline}
            </p>
            {instagramHandle && (
              <CtaLink
                href={`https://instagram.com/${instagramHandle}`}
                className="mt-2 w-fit text-xs uppercase tracking-[0.2em] text-dark-section-foreground/70 transition-colors duration-300 hover:text-dark-section-foreground"
              >
                Instagram
              </CtaLink>
            )}
          </div>

          <div className="flex flex-col gap-3 md:col-span-2">
            <span className="text-xs uppercase tracking-[0.25em] text-dark-section-foreground/60">
              Navigation
            </span>
            <CtaLink
              href="/"
              className="w-fit text-sm text-dark-section-foreground/80 transition-colors duration-300 hover:text-dark-section-foreground"
            >
              Home
            </CtaLink>
            <CtaLink
              href="/menu"
              className="w-fit text-sm text-dark-section-foreground/80 transition-colors duration-300 hover:text-dark-section-foreground"
            >
              Menu
            </CtaLink>
            <CtaLink
              href="/reserve"
              className="w-fit text-sm text-dark-section-foreground/80 transition-colors duration-300 hover:text-dark-section-foreground"
            >
              Reserve
            </CtaLink>
          </div>

          <div className="flex flex-col gap-3 md:col-span-3">
            <span className="text-xs uppercase tracking-[0.25em] text-dark-section-foreground/60">
              Visit
            </span>
            <p className="text-sm text-dark-section-foreground/80">
              {restaurant.location.address}
            </p>
            <span className="mt-3 text-xs uppercase tracking-[0.25em] text-dark-section-foreground/60">
              Hours
            </span>
            <p className="text-sm text-dark-section-foreground/80">
              Dinner {restaurant.hours.dinner}
            </p>
          </div>

          <div className="flex flex-col gap-3 md:col-span-3">
            <span className="text-xs uppercase tracking-[0.25em] text-dark-section-foreground/60">
              Contact
            </span>
            <CtaLink
              href={telHref}
              className="w-fit text-sm text-dark-section-foreground/80 transition-colors duration-300 hover:text-dark-section-foreground"
            >
              {restaurant.contact.phone}
            </CtaLink>
            <CtaLink
              href={`mailto:${restaurant.contact.email}`}
              className="w-fit text-sm text-dark-section-foreground/80 transition-colors duration-300 hover:text-dark-section-foreground"
            >
              {restaurant.contact.email}
            </CtaLink>
          </div>
        </div>

        <div className="mt-16 border-t border-dark-section-foreground/15 pt-8 text-center text-xs uppercase tracking-[0.2em] text-dark-section-foreground/60">
          © {year} {restaurant.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
