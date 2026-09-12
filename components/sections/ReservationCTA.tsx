import { getPrimaryConversionCta, resolveCtaHref } from "@/config/restaurant";
import { CtaLink } from "@/components/ui/CtaLink";

/**
 * The homepage's final, focused conversion moment. Primary CTA comes from
 * `getPrimaryConversionCta()` — the same reservation/ordering/whatsapp
 * resolver already used by the Hero and the mobile sticky CTA — so this can
 * never disagree with them about what "the" primary action is. Button
 * styling is copied verbatim from `HeroCTA` for visual consistency.
 */
export function ReservationCTA() {
  const primary = getPrimaryConversionCta();
  const whatsappHref = resolveCtaHref("whatsapp");

  return (
    <section className="bg-dark-section px-6 py-18 text-dark-section-foreground sm:px-10 md:px-16 md:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <p className="motion-fade-up text-xs uppercase tracking-[0.3em] text-dark-section-foreground/70">
          Reservations
        </p>
        <h2 className="motion-fade-up motion-delay-1 text-balance font-heading text-[clamp(2.5rem,5vw+1rem,4.5rem)] leading-[1.05]">
          Your table is waiting.
        </h2>
        <p className="motion-fade-up motion-delay-2 max-w-md text-base text-dark-section-foreground/80 sm:text-lg">
          Join us for an evening of modern Indian cooking, warm hospitality
          and good company.
        </p>

        <div className="motion-fade-up motion-delay-3 mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
          <CtaLink
            href={primary.href}
            className="inline-flex items-center justify-center border border-dark-section-foreground bg-dark-section-foreground px-8 py-3.5 text-sm uppercase tracking-[0.15em] text-dark-section transition-colors duration-300 hover:bg-transparent hover:text-dark-section-foreground"
          >
            {primary.label}
          </CtaLink>
          <CtaLink
            href={whatsappHref}
            className="inline-flex items-center justify-center border border-dark-section-foreground/40 px-8 py-3.5 text-sm uppercase tracking-[0.15em] text-dark-section-foreground transition-colors duration-300 hover:border-dark-section-foreground"
          >
            WhatsApp Us
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
