import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { restaurant } from "@/config/restaurant";
import { menu } from "@/data/menu";

export const metadata: Metadata = {
  title: `${restaurant.menuPage.heading} — ${restaurant.name}`,
  description: restaurant.menuPage.description,
};

function dietaryNote(tags?: string[]): string {
  return (tags ?? []).join(" · ");
}

// The complete, data-driven restaurant menu. `MenuPreview` on the homepage
// shows a curated subset of the same `data/menu.ts` — this page renders
// every category and item in full. Editorial layout, not a card grid.
export default function MenuPage() {
  return (
    <>
      <Navbar variant="light" />
      <main className="bg-background px-6 pb-24 pt-32 text-foreground sm:px-10 md:px-16 md:pb-32">
        <div className="mx-auto max-w-3xl">
          <header className="flex flex-col items-center gap-4 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              {restaurant.menuPage.eyebrow}
            </p>
            <h1 className="text-balance font-heading text-[clamp(2.5rem,5vw+1rem,4.5rem)] leading-[1.05]">
              {restaurant.menuPage.heading}
            </h1>
            <p className="max-w-md text-base text-muted sm:text-lg">
              {restaurant.menuPage.description}
            </p>
          </header>

          <div className="mt-20 flex flex-col gap-20">
            {menu.map((category) => (
              <section
                key={category.id}
                id={category.id}
                aria-labelledby={`${category.id}-heading`}
              >
                <div className="flex flex-col gap-2 border-b border-border pb-4">
                  <h2
                    id={`${category.id}-heading`}
                    className="font-heading text-2xl uppercase tracking-[0.05em] sm:text-3xl"
                  >
                    {category.name}
                  </h2>
                  {category.description && (
                    <p className="text-xs uppercase tracking-[0.25em] text-muted">
                      {category.description}
                    </p>
                  )}
                </div>

                <ul className="mt-8 divide-y divide-border">
                  {category.items.map((item) => (
                    <li
                      key={item.id}
                      className="flex flex-col gap-2 py-6 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                    >
                      <div className="flex flex-col gap-1">
                        <div className="flex flex-wrap items-baseline gap-x-3">
                          <h3
                            className={`font-heading text-xl sm:text-2xl ${
                              item.featured ? "font-semibold" : ""
                            }`}
                          >
                            {item.name}
                          </h3>
                          {dietaryNote(item.dietaryTags) && (
                            <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                              {dietaryNote(item.dietaryTags)}
                            </span>
                          )}
                        </div>
                        <p className="max-w-md text-sm text-muted">
                          {item.description}
                        </p>
                        {item.allergens && item.allergens.length > 0 && (
                          <p className="text-xs text-muted">
                            Contains {item.allergens.join(", ")}
                          </p>
                        )}
                      </div>
                      <span className="font-heading text-lg font-semibold text-accent sm:text-xl">
                        {restaurant.currency}
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <Link
              href="/"
              className="text-xs uppercase tracking-[0.2em] text-muted underline-offset-4 transition-colors duration-300 hover:text-foreground hover:underline"
            >
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
