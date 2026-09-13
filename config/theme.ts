/**
 * Central design tokens for Restaurant Engine.
 *
 * These values are the single source of truth for a client's visual identity.
 * They are injected as CSS custom properties on the root `<html>` element in
 * `app/layout.tsx`, and mapped to Tailwind's theme in `app/globals.css`.
 *
 * To re-skin the site for a new restaurant, edit the values below only —
 * never hardcode colors inside components.
 */

export interface ThemeColors {
  background: string;
  foreground: string;
  muted: string;
  accent: string;
  border: string;
  surface: string;
  darkSection: string;
  darkSectionForeground: string;
}

export interface Theme {
  colors: ThemeColors;
}

export const theme: Theme = {
  colors: {
    /** Ivory. */
    background: "#F6F2E9",
    /** Deep ocean blue, used as near-black text on the ivory background. */
    foreground: "#101B26",
    /** Warm sand — ~7.1:1 against `background`, comfortably past WCAG AA
     * for the small uppercase labels/body copy that lean on this token
     * throughout the light sections. */
    muted: "#5C4F3D",
    /** Muted brass. */
    accent: "#A67C3D",
    border: "#E6DFC9",
    surface: "#FCFAF4",
    /** Deep ocean blue. */
    darkSection: "#0B2233",
    /** Ivory. */
    darkSectionForeground: "#F6F2E9",
  },
};

/**
 * CSS custom property map derived from `theme.colors`, ready to spread onto
 * an element's `style` prop (see `RootLayout`).
 */
export const themeCssVars: Record<string, string> = {
  "--background": theme.colors.background,
  "--foreground": theme.colors.foreground,
  "--muted": theme.colors.muted,
  "--accent": theme.colors.accent,
  "--border": theme.colors.border,
  "--surface": theme.colors.surface,
  "--dark-section": theme.colors.darkSection,
  "--dark-section-foreground": theme.colors.darkSectionForeground,
};
