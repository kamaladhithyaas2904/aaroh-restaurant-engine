import { restaurant } from "@/config/restaurant";
import { menu, type MenuItem } from "@/data/menu";
import { ImageOrPlaceholder } from "@/components/ui/ImageOrPlaceholder";
import { motionDelayClass } from "@/components/ui/motion";

type SignatureDish = MenuItem & { signature: NonNullable<MenuItem["signature"]> };

/**
 * The menu items marked `signature` in `data/menu.ts`, in menu order —
 * `data/menu.ts` is the only source of truth for dish name/price/
 * description/tags; this file only supplies the photo those items don't
 * otherwise need.
 */
function getSignatureDishes(): SignatureDish[] {
  return menu
    .flatMap((category) => category.items)
    .filter((item): item is SignatureDish => item.signature != null);
}

/**
 * Image-led editorial grid, sourced from `data/menu.ts`'s `signature`-marked
 * items — nothing here is duplicated or hardcoded per-dish.
 */
export function SignatureDishes() {
  const dishes = getSignatureDishes();

  return (
    <section className="bg-background px-6 py-24 text-foreground sm:px-10 md:px-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="motion-fade-up font-heading text-[clamp(2.25rem,4vw+1rem,3.75rem)]">
            Signatures
          </h2>
          <p className="motion-fade-up motion-delay-1 max-w-xs text-muted md:text-right">
            A few dishes that define the table.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {dishes.map((dish, index) => (
            <article
              key={dish.id}
              className={`motion-fade-up group flex flex-col gap-4 ${motionDelayClass(index)}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <ImageOrPlaceholder
                  src={dish.signature.image}
                  alt={dish.signature.imageAlt}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex items-baseline justify-between gap-4 border-t border-border pt-4">
                <h3 className="font-heading text-xl">{dish.name}</h3>
                <span className="font-heading text-xl font-semibold text-accent">
                  {restaurant.currency}
                  {dish.price}
                </span>
              </div>
              <p className="text-sm text-muted">{dish.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
