import { restaurant } from "@/config/restaurant";
import { motionDelayClass } from "@/components/ui/motion";

/**
 * Dark editorial contrast section. Only the three column values come from
 * `restaurant.hours`; "Dinner Service" / "Kitchen" / "Walk-ins" are generic
 * column labels (any restaurant uses similar terms), and "Tonight at" is
 * generic copy combined with the configured restaurant name — so this reads
 * correctly for any client without editing the component.
 */
export function OpeningHours() {
  const columns = [
    { label: "Dinner Service", value: restaurant.hours.dinner },
    { label: "Kitchen", value: restaurant.hours.kitchen },
    { label: "Walk-ins", value: restaurant.hours.walkIns },
  ];

  return (
    <section className="bg-dark-section px-6 py-18 text-dark-section-foreground sm:px-10 md:px-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="motion-fade-up text-xs uppercase tracking-[0.3em] text-dark-section-foreground/70 sm:text-sm">
          Hours
        </p>
        <h2 className="motion-fade-up motion-delay-1 mt-3 text-balance font-heading text-[clamp(2.25rem,4vw+1rem,3.75rem)] leading-[1.05]">
          Tonight at {restaurant.name}
        </h2>

        <div className="mt-12 grid divide-y divide-dark-section-foreground/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {columns.map((column, index) => (
            <div
              key={column.label}
              className={`motion-fade-up flex flex-col gap-3 py-10 first:pt-0 sm:py-0 sm:px-8 sm:first:pl-0 sm:last:pr-0 xl:px-10 ${motionDelayClass(index)}`}
            >
              <span className="text-xs uppercase tracking-[0.25em] text-dark-section-foreground/60">
                {column.label}
              </span>
              <span className="font-heading text-2xl sm:text-3xl xl:text-4xl">
                {column.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
