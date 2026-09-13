# Restaurant Engine

Restaurant Engine is a reusable Next.js website system: **one codebase, many
restaurant clients**. `AAROH` is only the demo restaurant used to build and
test the engine — the UI is not tied to it. New restaurants are launched by
editing configuration and data, not by rewriting components.

## Architecture

- `config/restaurant.ts` — business identity, contact info, hours, CTAs
  (reservation / WhatsApp / ordering), and social links.
- `config/theme.ts` — design tokens (colors) for visual identity. Injected as
  CSS variables on `<html>` in `app/layout.tsx` and mapped into Tailwind's
  theme in `app/globals.css`.
- `config/navigation.ts` — nav links and nav-specific CTA labels.
- `data/menu.ts`, `data/reviews.ts`, `data/gallery.ts`, `data/experiences.ts`
  — content lists rendered by the site. The homepage's image-led
  "Signatures" grid is not a separate list — it's derived from whichever
  items in `data/menu.ts` carry a `signature` field, so the full menu stays
  the one source of truth for dish name/price/description.
- `components/` — reusable UI (`navigation/`, `hero/`, `sections/`, `ui/`,
  `footer/`). Components read from `config/` and `data/`; they never
  hardcode restaurant-specific copy.
- `public/images/` — restaurant image assets, one folder per client (see
  Image folder convention below).

## Launching a new restaurant

Duplicate the project and edit only:

```
config/restaurant.ts
config/theme.ts
config/navigation.ts
data/menu.ts
data/reviews.ts
data/gallery.ts
data/experiences.ts
public/images/<client-slug>/
```

Components should not need to change.

## Image folder convention

Every client's assets live under one folder, named for that client, so a
whole client's images can be dropped in or swapped out as a single unit:

```
public/images/<client-slug>/
  hero.png
  story.png
  seasonal.png
  dishes/
    <dish-slug>.png
  gallery/
    <name>.png
```

Reference these from `config/restaurant.ts` (`hero.image`, `story.image`,
`seasonal.image`), from the `signature.image` field on the relevant items in
`data/menu.ts`, and from `image` in `data/gallery.ts` — always as an
absolute path starting with `/images/<client-slug>/...`.

If an image doesn't exist yet at its configured path,
`components/ui/ImageOrPlaceholder.tsx` (and `components/hero/Hero.tsx` for
the hero image specifically) automatically renders a themed placeholder
instead of a broken image — so a new client can be fully wired up before any
real photography is available, with zero code changes needed once photos
are dropped in at the exact configured paths.

`public/images/aaroh/` holds the original demo restaurant's photos, kept as
a worked example of a fully populated client folder.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
