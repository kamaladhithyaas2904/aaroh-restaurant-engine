import { getPrimaryConversionCta, type CtaMode } from "@/config/restaurant";
import { navigation } from "@/config/navigation";
import { CtaLink } from "./CtaLink";

/**
 * Short, generic microcopy per CTA mode — not restaurant-specific content,
 * just system-level labeling for a compact mobile bar.
 */
const CTA_MODE_LABEL: Record<CtaMode, string> = {
  reservation: "Reserve",
  ordering: "Order",
  whatsapp: "WhatsApp",
  link: "Explore",
};

/**
 * Fixed bottom conversion bar, mobile only. Its second button adapts to
 * whichever conversion path the restaurant has enabled (ordering >
 * reservation > WhatsApp), so it never needs to change per client.
 */
export function MobileStickyCTA() {
  const primary = getPrimaryConversionCta();
  const menuLink = navigation.links.find((link) => link.label === "Menu");

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm md:hidden">
      <CtaLink
        href={menuLink?.href ?? "/#menu"}
        className="flex-1 border-r border-border py-4 text-center text-xs uppercase tracking-[0.2em] text-foreground"
      >
        View Menu
      </CtaLink>
      <CtaLink
        href={primary.href}
        className="flex-1 bg-accent py-4 text-center text-xs uppercase tracking-[0.2em] text-surface"
      >
        {CTA_MODE_LABEL[primary.mode]}
      </CtaLink>
    </div>
  );
}
