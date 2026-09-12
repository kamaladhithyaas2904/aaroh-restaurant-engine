import { restaurant } from "@/config/restaurant";

/**
 * Editorial statement section. All copy comes from `restaurant.intro` —
 * this is genuine brand voice, not UI chrome, so it lives in config rather
 * than being written into the component.
 */
export function Intro() {
  const { eyebrow, statement, description } = restaurant.intro;

  return (
    <section className="bg-background px-6 py-18 text-foreground sm:px-10 md:px-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12 md:gap-x-8">
        <p className="motion-fade-up text-xs uppercase tracking-[0.3em] text-muted md:col-span-12">
          {eyebrow}
        </p>
        <h2 className="motion-fade-up motion-delay-1 text-balance font-heading text-[clamp(2.5rem,5vw+1rem,5rem)] leading-[1.05] md:col-span-8">
          {statement}
        </h2>
        <p className="motion-fade-up motion-delay-2 max-w-sm text-base text-muted sm:text-lg md:col-span-4 md:col-start-9 md:self-end md:text-right">
          {description}
        </p>
      </div>
    </section>
  );
}
