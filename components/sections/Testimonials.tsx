import { reviews, type Review } from "@/data/reviews";
import { motionDelayClass } from "@/components/ui/motion";

function formatReviewDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

/**
 * Dividing-rule three-column layout, mirroring the pattern established in
 * `Experience`/`OpeningHours` — quotes carry the section, not cards or
 * avatars. Rating renders as plain typographic stars (filled in `accent`,
 * unfilled at low opacity) rather than an icon badge. Content comes entirely
 * from `data/reviews.ts`.
 */
export function Testimonials() {
  if (reviews.length === 0) return null;

  return (
    <section className="bg-background px-6 py-24 text-foreground sm:px-10 md:px-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="motion-fade-up text-xs uppercase tracking-[0.3em] text-muted">
          Reviews
        </p>
        <h2 className="motion-fade-up motion-delay-1 mt-4 max-w-xl text-balance font-heading text-[clamp(2.25rem,4vw+1rem,3.75rem)] leading-[1.05]">
          What guests are saying.
        </h2>

        <div className="mt-16 grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {reviews.map((review: Review, index) => (
            <figure
              key={review.name}
              className={`motion-fade-up flex flex-col gap-6 py-10 first:pt-0 md:px-10 md:py-0 md:first:pl-0 md:last:pr-0 ${motionDelayClass(index)}`}
            >
              <span aria-hidden="true" className="text-sm tracking-[0.15em]">
                <span className="text-accent">
                  {"★".repeat(review.rating)}
                </span>
                <span className="text-foreground/20">
                  {"★".repeat(Math.max(0, 5 - review.rating))}
                </span>
              </span>
              <blockquote className="font-heading text-xl leading-normal text-foreground/90 italic sm:text-2xl">
                “{review.review}”
              </blockquote>
              <figcaption className="mt-auto flex flex-col gap-1">
                <span className="font-heading text-base text-foreground/90">
                  {review.name}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-muted">
                  {review.source}
                  {review.date ? ` · ${formatReviewDate(review.date)}` : ""}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
