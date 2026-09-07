import { experiences } from "@/data/experiences";
import { motionDelayClass } from "@/components/ui/motion";

/**
 * Dark editorial three-part layout, mirroring the divider/column pattern
 * established in `OpeningHours` (switching to `md:` here instead of `sm:`
 * since these columns carry full sentences, not single short values, and
 * need more room before going three-wide). Content comes entirely from
 * `data/experiences.ts`.
 */
export function Experience() {
  return (
    <section className="bg-dark-section px-6 py-24 text-dark-section-foreground sm:px-10 md:px-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="motion-fade-up text-xs uppercase tracking-[0.3em] text-dark-section-foreground/70 sm:text-sm">
          Experience
        </p>
        <h2 className="motion-fade-up motion-delay-1 mt-4 max-w-2xl text-balance font-heading text-[clamp(2.25rem,4vw+1rem,3.75rem)] leading-[1.05]">
          How we think about the table.
        </h2>

        <div className="mt-16 grid divide-y divide-dark-section-foreground/15 md:grid-cols-3 md:divide-x md:divide-y-0">
          {experiences.map((experience, index) => (
            <div
              key={experience.title}
              className={`motion-fade-up flex flex-col gap-4 py-10 first:pt-0 md:py-0 md:px-10 md:first:pl-0 md:last:pr-0 ${motionDelayClass(index)}`}
            >
              <span
                aria-hidden="true"
                className="font-heading text-4xl text-dark-section-foreground/30"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-xl uppercase tracking-[0.05em]">
                {experience.title}
              </h3>
              <p className="max-w-xs text-sm text-dark-section-foreground/75 sm:text-base">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
