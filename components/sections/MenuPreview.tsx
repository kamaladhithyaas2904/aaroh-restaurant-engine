import { restaurant } from "@/config/restaurant";
import { navigation } from "@/config/navigation";
import { menu, type MenuCategory, type MenuItem } from "@/data/menu";
import { CtaLink } from "@/components/ui/CtaLink";
import { motionDelayClass } from "@/components/ui/motion";

/**
 * One representative item per category present in `data/menu.ts` (the
 * category's featured item if it has one, otherwise its first item) — a
 * curated preview rather than the full menu dump. Purely derived from the
 * data layer, so it adapts automatically to whatever categories/items a
 * client's menu actually has.
 */
function getCuratedSelection(): MenuItem[] {
  const orderedCategories: MenuCategory[] = [];
  for (const item of menu) {
    if (!orderedCategories.includes(item.category)) {
      orderedCategories.push(item.category);
    }
  }

  return orderedCategories.map((category) => {
    const itemsInCategory = menu.filter((item) => item.category === category);
    return itemsInCategory.find((item) => item.featured) ?? itemsInCategory[0];
  });
}

function dietaryNote(item: MenuItem): string {
  return [item.vegetarian ? "Veg" : null, item.spicy ? "Spicy" : null]
    .filter(Boolean)
    .join(" · ");
}

export function MenuPreview() {
  const selection = getCuratedSelection();

  return (
    <section
      id="menu"
      className="bg-background px-6 py-24 text-foreground sm:px-10 md:px-16 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <p className="motion-fade-up text-xs uppercase tracking-[0.3em] text-muted">
          Menu
        </p>
        <h2 className="motion-fade-up motion-delay-1 mt-4 text-balance font-heading text-[clamp(2.25rem,4vw+1rem,3.75rem)] leading-[1.05]">
          Cooked over fire, served to share.
        </h2>

        <ul className="mt-16 divide-y divide-border">
          {selection.map((item, index) => (
            <li
              key={item.name}
              className={`motion-fade-up flex flex-col gap-2 py-6 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 ${motionDelayClass(index)}`}
            >
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="font-heading text-xl sm:text-2xl">
                    {item.name}
                  </h3>
                  {dietaryNote(item) && (
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                      {dietaryNote(item)}
                    </span>
                  )}
                </div>
                <p className="max-w-md text-sm text-muted">
                  {item.description}
                </p>
                {item.allergens && item.allergens.length > 0 && (
                  <p className="text-xs text-muted/70">
                    Contains {item.allergens.join(", ")}
                  </p>
                )}
              </div>
              <span className="font-heading text-lg text-accent sm:text-xl">
                {restaurant.currency}
                {item.price}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex justify-center">
          <CtaLink
            href={navigation.fullMenuHref}
            className="inline-flex items-center justify-center border border-foreground/40 px-8 py-3.5 text-sm uppercase tracking-[0.15em] text-foreground transition-colors duration-300 hover:border-foreground"
          >
            View Full Menu
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
