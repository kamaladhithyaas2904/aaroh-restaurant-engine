import { restaurant } from "@/config/restaurant";
import { ImageOrPlaceholder } from "@/components/ui/ImageOrPlaceholder";

/**
 * Editorial magazine-spread composition: a large image against a narrower,
 * vertically-offset text column. All copy comes from `restaurant.story` —
 * genuine brand narrative, not UI chrome, so it lives in config exactly like
 * `restaurant.hero`/`restaurant.intro`.
 */
export function Story() {
  const { eyebrow, heading, paragraphs, image, imageAlt } = restaurant.story;

  return (
    <section className="bg-background px-6 py-24 text-foreground sm:px-10 md:px-16 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:gap-x-10">
        <div className="relative aspect-[4/5] overflow-hidden md:col-span-7">
          <ImageOrPlaceholder
            src={image}
            alt={imageAlt}
            sizes="(min-width: 768px) 58vw, 100vw"
          />
        </div>

        <div className="flex flex-col gap-6 md:col-span-5 md:col-start-8 md:mt-16">
          <p className="motion-fade-up text-xs uppercase tracking-[0.3em] text-muted">
            {eyebrow}
          </p>
          <h2 className="motion-fade-up motion-delay-1 text-balance font-heading text-[clamp(2.25rem,4vw+1rem,3.75rem)] leading-[1.05]">
            {heading}
          </h2>
          <div className="flex flex-col gap-4">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="motion-fade-up motion-delay-2 max-w-md text-base text-muted sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <p className="motion-fade-up motion-delay-2 text-xs uppercase tracking-[0.25em] text-muted/70">
            Est. {restaurant.establishedYear} · {restaurant.location.city}
          </p>
        </div>
      </div>
    </section>
  );
}
