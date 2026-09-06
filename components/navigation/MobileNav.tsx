"use client";

import { useEffect, useId, useState } from "react";
import type { MouseEvent } from "react";
import { navigation } from "@/config/navigation";
import { isCtaEnabled, resolveCtaHref } from "@/config/restaurant";
import { CtaLink } from "@/components/ui/CtaLink";

/**
 * Mobile-only nav trigger + full-screen panel. This is the one navigation
 * piece that needs client interactivity (open/close state); the rest of the
 * navigation stays server-rendered.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const primaryHref = resolveCtaHref(navigation.primaryCta.mode);
  const secondaryHref = resolveCtaHref(navigation.secondaryCta.mode);

  // Closing on a tap that lands on the panel background itself (not on a
  // link) gives a "click outside" affordance even though the panel is a
  // full-screen overlay with no true "outside".
  const closeIfBackdrop = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) setOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
      >
        <span
          className={`h-px w-6 bg-dark-section-foreground transition-transform duration-300 ${
            open ? "translate-y-[3.5px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-px w-6 bg-dark-section-foreground transition-opacity duration-300 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`h-px w-6 bg-dark-section-foreground transition-transform duration-300 ${
            open ? "-translate-y-[3.5px] -rotate-45" : ""
          }`}
        />
      </button>

      <div
        id={panelId}
        inert={!open}
        aria-hidden={!open}
        onClick={closeIfBackdrop}
        className={`fixed inset-0 z-40 flex flex-col justify-center gap-10 bg-dark-section px-8 text-dark-section-foreground transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-6">
          {navigation.links.map((link) => (
            <CtaLink
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-heading text-4xl"
            >
              {link.label}
            </CtaLink>
          ))}
        </nav>
        <div className="flex flex-col gap-4 border-t border-dark-section-foreground/20 pt-8">
          <CtaLink
            href={secondaryHref}
            onClick={() => setOpen(false)}
            className="text-sm uppercase tracking-[0.2em] text-dark-section-foreground/80"
          >
            {navigation.secondaryCta.label}
          </CtaLink>
          {isCtaEnabled(navigation.primaryCta.mode) && (
            <CtaLink
              href={primaryHref}
              onClick={() => setOpen(false)}
              className="border border-dark-section-foreground px-6 py-3 text-center text-sm uppercase tracking-[0.2em]"
            >
              {navigation.primaryCta.label}
            </CtaLink>
          )}
        </div>
      </div>
    </div>
  );
}
