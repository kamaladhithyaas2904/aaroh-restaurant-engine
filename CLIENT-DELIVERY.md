# Restaurant Engine — Client Delivery Workflow

This is the practical operating manual for taking a fresh restaurant client
from onboarding to production using this codebase. It's written for a solo
freelance developer working one client at a time, not an agency process.

The one rule that makes everything below simple: **if the change is copy, a
price, a color, or a photo, it belongs in `config/` or `data/` — never in a
component.**

## 1. New Client Intake

**Required client information** (no reasonable default exists):
- Restaurant name, descriptor, tagline, one-line description
- Full address (street, city, state)
- Phone number
- WhatsApp number
- Email
- Hours: dinner service window, kitchen close time, walk-in policy
- Full menu: every category, dish, description, price
- Reservation method: internal page, external booking link, or WhatsApp-only

**Optional client information** (a placeholder or graceful fallback exists):
- Logo image — falls back to a text wordmark
- Hero / story / seasonal photography — falls back to a themed placeholder
- Dish photography for the homepage signature grid
- Gallery photography
- Reviews/testimonials
- Instagram handle
- Ordering platform + URL
- Brand reference images (colors, mood, competitor sites)

**Information the developer handles** (never ask the client):
- Hex color codes — translate their verbal/visual brand references yourself
- Image file paths and naming
- The `<client-slug>` used for folders and the Vercel project
- Git/Vercel project setup

## 2. Client Content Checklist

| Item | File / field | Optional? |
|---|---|---|
| Restaurant name | `config/restaurant.ts` → `restaurant.name` | Required |
| Descriptor | `restaurant.descriptor` | Required |
| Tagline | `restaurant.tagline` | Required |
| Description (SEO + reservation section copy) | `restaurant.description`, `restaurant.reservation.description` | Required |
| Story/about copy | `restaurant.story.{eyebrow,heading,paragraphs}` | Required |
| Philosophy/highlights | `restaurant.intro.{eyebrow,statement,description}`, `data/experiences.ts` | Required |
| Phone | `restaurant.contact.phone` | Required |
| WhatsApp | `restaurant.contact.whatsapp` | Required |
| Email | `restaurant.contact.email` | Required |
| Address | `restaurant.location.{address,city,state,mapUrl}` | Required |
| Opening hours | `restaurant.hours.{dinner,kitchen,walkIns}` | Required |
| Social links | `restaurant.social.instagram` | Optional |
| Reservation method | `restaurant.reservation.{enabled,label,href}` | Required to decide |
| Ordering method | `restaurant.ordering.{enabled,label,href}` | Optional |
| Menu | `data/menu.ts` | Required |
| Signature dishes | `signature` field on the relevant items in `data/menu.ts` | Optional — recommended, at least 2–3 |
| Seasonal offer | `restaurant.seasonal.*` | Required (always rendered — no on/off toggle) |
| Testimonials/reviews | `data/reviews.ts` | Optional — section hides itself if empty |

Note: `restaurant.social` only supports `instagram` — Facebook is not part
of the current model.

## 3. Client Image Checklist

Every client's images live under one folder, named for that client:

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

- `hero.png`, `story.png`, `seasonal.png` — referenced directly from
  `restaurant.hero.image`, `restaurant.story.image`, `restaurant.seasonal.image`.
- `dishes/<dish-slug>.png` — referenced from the `signature.image` field on
  the matching item in `data/menu.ts`. Match the slug to the menu item's own
  `id` for clarity, but it isn't required to match exactly.
- `gallery/<name>.png` — referenced from `image` in `data/gallery.ts`.
  **Only 4 gallery images are ever displayed** (1 large + 3 supporting) —
  sending more than 4 doesn't error, the extras are just never shown.

**Placeholders:** if an image isn't available yet, leave the config path
pointing at the eventual file and skip adding the file. Everywhere images are
used (`components/ui/ImageOrPlaceholder.tsx`, and `components/hero/Hero.tsx`
for the hero specifically), a missing file renders a themed placeholder
instead of a broken image — no code changes needed once the real photo is
dropped in at the exact configured path later.

`public/images/aaroh/` is the original demo restaurant's fully populated
folder — use it as a live reference for the convention.

## 4. Developer Customization Workflow

Edit only these files/folders for a new client — nothing else should need to
change:

- `config/restaurant.ts` — business identity, contact, hours, CTAs, hero/
  story/intro/seasonal/menu-page copy. Start here; almost everything else
  references it.
- `config/theme.ts` — the 8 color tokens. Translate the client's brand
  colors here and check contrast manually (no automated check exists yet).
- `config/navigation.ts` — nav links and nav CTA labels. Only touch this if
  section anchors or link labels change.
- `data/menu.ts` — the full menu, and the `signature` marker for whichever
  2–3 items should also appear on the homepage.
- `data/experiences.ts` — the three "why visit" highlights.
- `data/gallery.ts` — gallery images and captions.
- `data/reviews.ts` — testimonials.
- Client image folders — `public/images/<client-slug>/...` as above.

## 5. Client Revision Workflow

| Client says | Exact file / location |
|---|---|
| "Change phone number" | `config/restaurant.ts` → `restaurant.contact.phone` — check whether `restaurant.contact.whatsapp` also needs updating (it's a separate, digits-only field) |
| "Change menu price" | `data/menu.ts` → find the item → `price` |
| "Change hero image" | Replace the file at `public/images/<client-slug>/hero.png` (same filename = zero code change). Different filename → update `restaurant.hero.image` in `config/restaurant.ts` |
| "Change colors" | `config/theme.ts` → the relevant token(s) — re-check contrast afterward |
| "Add menu item" | `data/menu.ts` → add to the category's `items[]`; add a `signature: { image, imageAlt }` block too if it should also show on the homepage, plus the photo in `public/images/<client-slug>/dishes/` |
| "Remove menu item" | Delete the item from `data/menu.ts` — if it had `signature`, it disappears from the homepage automatically, nothing else to clean up |
| "Change navigation" | `config/navigation.ts` — if a link's target is a section anchor (`/#story`, `/#gallery`, `/#visit`), confirm the matching `id` in the corresponding component under `components/sections/` still matches |

## 6. Local QA

Run before every commit:

```bash
npm run typecheck   # tsc --noEmit — fast type-correctness check, no build
npm run lint        # eslint — code-quality and Next.js rules
npm run validate    # lint + build — the full pre-commit gate (build already
                     # re-checks types, so this doesn't re-run typecheck)
npm run build       # the actual production build — also run standalone
                     # before any deploy, to see the real build output
npm run dev         # local dev server at http://localhost:3000, for
                     # visual QA (Section 7)
```

## 7. Visual QA

With `npm run dev` running, check:

- Desktop and mobile viewport widths
- Navbar on a light section and on a dark section (the color should swap
  automatically while scrolling)
- Mobile hamburger menu opens, closes, and its links work
- Mobile sticky bottom CTA bar — both buttons
- Hero renders correctly (real photo or placeholder, not broken)
- Every section anchor: `#story`, `#gallery`, `#visit`
- `/menu` — full menu content, prices, dietary tags
- `/reserve` — call and WhatsApp buttons
- Footer — address, hours, phone, email, Instagram (if set)
- Click the phone link and the WhatsApp link specifically — confirm they
  open the right number, don't just eyeball the config value
- Every configured image actually loads as a photo, not a placeholder,
  unless the placeholder is intentional
- Client branding is correct throughout (name, colors, copy)
- **Search the rendered pages for the previous client's name** — the single
  cheapest check against shipping the wrong branding

## 8. Vercel Preview Workflow

```
local QA (Section 6-7)
  → git commit
  → git push
  → Vercel preview deployment (automatic on push, or `vercel deploy`)
  → inspect the preview yourself first
  → share with the client (generate a deployment-protection bypass link,
    or the client will just see Vercel's login wall)
  → client review
  → revisions (Section 5) → repeat local QA → push again
  → final client approval
```

## 9. Production Deployment Safety

**Do not assume `vercel promote` simply changes the production alias.**
Depending on the deployment it's given, it can create and build a *new*
deployment rather than just re-pointing production at the existing one —
this has actually happened on this project and left an orphaned duplicate
deployment that had to be found and cleaned up.

For an already-existing, already-verified deployment, when the goal is
specifically to point the production domain at that exact deployment
**without rebuilding**, use:

```bash
vercel alias set <existing-deployment-url> <production-domain>
```

This only works correctly when you already know the exact deployment URL you
verified — never guess it. Before running any production-affecting command,
confirm with `vercel inspect <production-domain>` what deployment ID is
currently live, so you have a known-good state to compare against and roll
back to if needed.

Do not run production-affecting Vercel commands casually — always know which
deployment ID you're pointing at and why.

## 10. Production Checklist

Before promoting anything to production:

- Client approval received (not just "looks fine" — explicit sign-off)
- Correct client branding throughout (no previous-client name/content)
- Correct images (real photos where expected, no unintended placeholders)
- Correct menu and prices
- Correct phone number
- Correct WhatsApp number (test the button, not just the config value)
- Correct reservation link/flow
- Correct ordering link (if applicable)
- Correct address
- Correct social links
- Desktop QA complete (Section 7)
- Mobile QA complete (Section 7)
- `npm run typecheck` passes
- `npm run lint` passes
- `npm run validate` passes
- `npm run build` passes
- Production smoke test after deployment: load `/`, `/menu`, `/reserve` on
  the live production URL and confirm 200s and correct content

## 11. Client Handoff

Deliver to the client:

- Production URL
- Reservation URL/flow (or "WhatsApp is how guests reserve")
- Ordering URL (if applicable)
- Their social links, for them to confirm
- Plain-language update instructions: there is no admin dashboard or CMS —
  content changes go through the developer via email/WhatsApp. State a
  realistic turnaround (e.g. same-day for text/price changes, next business
  day for new photos)
- Who to contact for future changes or hosting/domain questions

## 12. Fast Repeatable Workflow

```
CLIENT INTAKE
  → CONTENT
  → IMAGES
  → CONFIG
  → LOCAL QA
  → PREVIEW
  → CLIENT REVIEW
  → APPROVAL
  → PRODUCTION
  → HANDOFF
```
