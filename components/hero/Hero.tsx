import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { restaurant } from "@/config/restaurant";
import { HeroCTA } from "./HeroCTA";

/**
 * `restaurant.hero.image` is expected to live under `public/`. Until a real
 * photograph is dropped in at that path, we render a tasteful gradient in
 * its place instead of a broken image — no component change is needed once
 * the file exists.
 */
function heroImageIsAvailable(src: string): boolean {
  if (/^https?:\/\//.test(src)) return true;
  try {
    return fs.existsSync(path.join(process.cwd(), "public", src));
  } catch {
    return false;
  }
}

export function Hero() {
  const { eyebrow, title, description, image, imageAlt } = restaurant.hero;
  const hasImage = heroImageIsAvailable(image);

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-dark-section text-dark-section-foreground">
      <div className="absolute inset-0">
        {hasImage ? (
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="motion-scale-in object-cover object-[center_38%]"
          />
        ) : (
          <div
            aria-hidden="true"
            className="motion-scale-in absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_20%,#3a2c1c_0%,var(--dark-section)_55%,#0c0b09_100%)]"
          />
        )}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent"
        />
      </div>

      <div className="relative z-10 mt-auto flex flex-col gap-6 px-6 pb-28 pt-32 sm:px-10 md:px-16 md:pb-16 lg:max-w-3xl lg:px-20 lg:pb-20">
        <p className="motion-fade-up motion-delay-1 text-xs uppercase tracking-[0.3em] text-dark-section-foreground/80 sm:text-sm">
          {eyebrow}
        </p>
        <h1 className="motion-fade-up motion-delay-2 text-balance font-heading text-[clamp(2.75rem,5vw+1.5rem,6.5rem)] leading-[0.96] tracking-tight">
          {title}
        </h1>
        <p className="motion-fade-up motion-delay-3 max-w-md text-base text-dark-section-foreground/85 sm:text-lg">
          {description}
        </p>
        <div className="motion-fade-up motion-delay-4">
          <HeroCTA />
        </div>
      </div>

      <div className="motion-fade motion-delay-5 relative z-10 flex justify-center pb-6 md:pb-8">
        <span
          aria-hidden="true"
          className="motion-scroll-pulse h-10 w-px bg-dark-section-foreground/50"
        />
      </div>
    </section>
  );
}
