import type { Metadata } from "next";
import Link from "next/link";
import { CtaLink } from "@/components/ui/CtaLink";
import { resolveCtaHref, restaurant } from "@/config/restaurant";

export const metadata: Metadata = {
  title: `Reserve a Table — ${restaurant.name}`,
  description: `Reserve a table at ${restaurant.name}.`,
};

// Minimum functional reservation page: no booking backend yet, just a clear
// path to actually reach the restaurant, driven entirely by restaurant
// configuration. A real booking flow can replace this in a later phase
// without touching any other route.
export default function ReservePage() {
  const whatsappHref = resolveCtaHref("whatsapp");
  const telHref = `tel:${restaurant.contact.phone.replace(/[^\d+]/g, "")}`;

  return (
    <main className="mx-auto flex min-h-[100svh] max-w-2xl flex-col items-center justify-center gap-8 px-6 py-24 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-muted">
        {restaurant.name}
      </p>
      <h1 className="font-heading text-4xl text-foreground sm:text-5xl">
        {restaurant.reservation.label}
      </h1>
      <p className="max-w-md text-base text-muted sm:text-lg">
        Reservations are currently handled directly by our team — call or
        message us and we&apos;ll confirm your table.
      </p>

      <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center">
        <CtaLink
          href={telHref}
          className="inline-flex items-center justify-center border border-foreground bg-foreground px-8 py-3.5 text-sm uppercase tracking-[0.15em] text-background transition-colors duration-300 hover:bg-transparent hover:text-foreground"
        >
          Call {restaurant.contact.phone}
        </CtaLink>
        <CtaLink
          href={whatsappHref}
          className="inline-flex items-center justify-center border border-foreground/40 px-8 py-3.5 text-sm uppercase tracking-[0.15em] text-foreground transition-colors duration-300 hover:border-foreground"
        >
          Message on WhatsApp
        </CtaLink>
      </div>

      <p className="pt-6 text-sm text-muted">
        Dinner service {restaurant.hours.dinner} · {restaurant.location.address}
      </p>

      <Link
        href="/"
        className="pt-4 text-xs uppercase tracking-[0.2em] text-muted underline-offset-4 transition-colors duration-300 hover:text-foreground hover:underline"
      >
        Back to home
      </Link>
    </main>
  );
}
