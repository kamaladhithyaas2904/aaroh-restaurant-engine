"use client";

import { useState } from "react";
import Image from "next/image";
import { restaurant } from "@/config/restaurant";

interface BrandMarkProps {
  className?: string;
}

/**
 * Renders `restaurant.logoImage` when configured, falling back to the text
 * wordmark (`restaurant.name`) otherwise — the same "component never
 * changes, config drives the swap" pattern as every other piece of brand
 * identity. Shared by `Navbar` and `Footer` so the two can never disagree
 * about which one a client is using.
 *
 * Falls back on the image's own load error (rather than checking the file
 * exists beforehand) so this works for a missing local file *and* a broken
 * external logo URL alike, and so it never needs Node's `fs` — this
 * component is used from `Navbar`, a client component, and `fs` cannot be
 * bundled for the browser.
 */
export function BrandMark({ className }: BrandMarkProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const { logoImage, name } = restaurant;

  if (logoImage && !imageFailed) {
    return (
      <Image
        src={logoImage}
        alt={`${name} logo`}
        width={160}
        height={40}
        className={`h-8 w-auto sm:h-10 ${className ?? ""}`}
        onError={() => setImageFailed(true)}
      />
    );
  }

  return <span className={className}>{name}</span>;
}
