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
- `data/menu.ts`, `data/dishes.ts`, `data/reviews.ts`, `data/gallery.ts`,
  `data/experiences.ts` — content lists rendered by the site.
- `components/` — reusable UI (`navigation/`, `hero/`, `sections/`, `ui/`,
  `footer/`). Components read from `config/` and `data/`; they never
  hardcode restaurant-specific copy.
- `public/images/` — restaurant image assets (`hero/`, `dishes/`,
  `gallery/`, `story/`).

## Launching a new restaurant

Duplicate the project and edit only:

```
config/restaurant.ts
config/theme.ts
config/navigation.ts
data/menu.ts
data/dishes.ts
data/reviews.ts
data/gallery.ts
data/experiences.ts
public/images/
```

Components should not need to change.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
