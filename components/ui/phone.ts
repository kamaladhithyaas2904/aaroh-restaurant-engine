/**
 * Builds a `tel:` link href from a display-formatted phone number (e.g.
 * "+91 98000 11223"), stripping everything except digits and a leading
 * `+`. Centralized so every phone CTA formats the number identically.
 */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
