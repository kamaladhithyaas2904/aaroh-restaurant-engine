"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation } from "@/config/navigation";
import { isCtaEnabled, resolveCtaHref } from "@/config/restaurant";
import { CtaLink } from "@/components/ui/CtaLink";
import { BrandMark } from "@/components/ui/BrandMark";
import { MobileNav } from "./MobileNav";

/**
 * "auto": the navbar tracks whatever is actually rendered behind it as the
 * page scrolls — light nav content over the dark hero/sections, dark nav
 * content once a light/cream section reaches the top. Detection reads the
 * `.bg-dark-section` class every dark section in the design system already
 * carries (see `config/theme.ts`), so no section list is hardcoded here and
 * no section file needs to know the navbar exists.
 *
 * "light": the page is a flat light/cream page top to bottom (e.g. /menu,
 * /reserve) — skip detection and render dark nav content unconditionally.
 */
export type NavbarVariant = "auto" | "light";

interface NavbarProps {
  variant?: NavbarVariant;
}

/**
 * Reports whether whatever is currently rendered directly beneath the fixed
 * navbar band belongs to a `.bg-dark-section` element — the same marker
 * class that already flags every dark section (Hero, Experience,
 * SeasonalOffer, ReservationCTA, Footer, ...). No-op while `enabled` is
 * false, so `variant="light"` pages never pay for the scroll listener.
 */
function useIsOverDarkSection(enabled: boolean): boolean {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (!enabled) return;

    let frame = 0;

    const measure = () => {
      frame = 0;
      if (typeof document.elementsFromPoint !== "function") return;
      const x = Math.round(window.innerWidth / 2);
      const y = 12;
      const stack = document.elementsFromPoint(x, y);
      const behindHeader = stack.find((el) => !el.closest("header"));
      setIsDark(!!behindHeader?.closest(".bg-dark-section"));
    };

    const requestMeasure = () => {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", requestMeasure, { passive: true });
    window.addEventListener("resize", requestMeasure);
    return () => {
      window.removeEventListener("scroll", requestMeasure);
      window.removeEventListener("resize", requestMeasure);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [enabled]);

  return isDark;
}

export function Navbar({ variant = "auto" }: NavbarProps) {
  const { primaryCta, secondaryCta } = navigation;
  const primaryHref = resolveCtaHref(primaryCta.mode);
  const secondaryHref = resolveCtaHref(secondaryCta.mode);
  const isOverDarkSection = useIsOverDarkSection(variant === "auto");
  const isLight = variant === "light" || !isOverDarkSection;

  return (
    <header
      className={`motion-fade fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        isLight ? "border-border bg-background" : "border-transparent bg-transparent"
      }`}
    >
      {/* Dark-context scrim: keeps light nav text readable over busy,
          midtone hero photography without depending on blend inversion.
          Left permanently mounted and cross-faded (rather than
          conditionally rendered) so the dark/light swap reads as one
          continuous transition instead of a hard cut. */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 bg-gradient-to-b from-black/15 to-transparent transition-opacity duration-300 ${
          isLight ? "opacity-0" : "opacity-100"
        }`}
      />
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-6 py-6 sm:px-10 md:px-12">
        <Link
          href="/"
          className={`font-heading text-xl uppercase tracking-[0.25em] transition-colors duration-300 sm:text-2xl ${
            isLight ? "text-foreground" : "text-dark-section-foreground"
          }`}
        >
          <BrandMark />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          {navigation.links.map((link) => (
            <CtaLink
              key={link.href}
              href={link.href}
              className={`text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
                isLight
                  ? "text-foreground/75 hover:text-foreground"
                  : "text-dark-section-foreground/85 hover:text-dark-section-foreground"
              }`}
            >
              {link.label}
            </CtaLink>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <CtaLink
            href={secondaryHref}
            className={`text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
              isLight
                ? "text-foreground/60 hover:text-foreground"
                : "text-dark-section-foreground/70 hover:text-dark-section-foreground"
            }`}
          >
            {secondaryCta.label}
          </CtaLink>
          {isCtaEnabled(primaryCta.mode) && (
            <CtaLink
              href={primaryHref}
              className={`border px-6 py-2.5 text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
                isLight
                  ? "border-foreground/60 text-foreground hover:border-foreground hover:bg-foreground hover:text-background"
                  : "border-dark-section-foreground/70 text-dark-section-foreground hover:border-dark-section-foreground hover:bg-dark-section-foreground hover:text-dark-section"
              }`}
            >
              {primaryCta.label}
            </CtaLink>
          )}
        </div>

        <MobileNav isLight={isLight} />
      </div>
    </header>
  );
}
