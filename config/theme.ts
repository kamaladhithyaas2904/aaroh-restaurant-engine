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
    background: "#F4F0E8",
    foreground: "#171612",
    /** Deepened from the original #6E6A61 (~4.7:1 against `background`, only
     * marginally WCAG AA) to ~6.4:1 — still a warm gray, not a step toward
     * black, but with real headroom for the small uppercase labels/body copy
     * that lean on this token throughout the light sections. */
    muted: "#5A564D",
    accent: "#9A6A3A",
    border: "#E4DFD2",
    surface: "#FFFFFF",
    darkSection: "#171612",
    darkSectionForeground: "#F4F0E8",
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
