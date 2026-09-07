import { gallery, type GalleryImage } from "@/data/gallery";
import { ImageOrPlaceholder } from "@/components/ui/ImageOrPlaceholder";
import { motionDelayClass } from "@/components/ui/motion";

interface GalleryFrameProps {
  item: GalleryImage;
  aspect: string;
  gridClassName?: string;
  motionClassName?: string;
}

function GalleryFrame({
  item,
  aspect,
  gridClassName,
  motionClassName,
}: GalleryFrameProps) {
  return (
    <figure className={`group flex flex-col gap-3 ${gridClassName ?? ""} ${motionClassName ?? ""}`}>
      <div className={`relative overflow-hidden ${aspect}`}>
        <ImageOrPlaceholder
          src={item.image}
          alt={item.alt}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      {item.caption && (
        <figcaption className="text-xs uppercase tracking-[0.2em] text-muted">
          {item.caption}
        </figcaption>
      )}
    </figure>
  );
}

/**
 * Editorial, asymmetric photo composition — one dominant frame plus smaller
 * supporting frames, not a repeated grid of equal cards. Content comes
 * entirely from `data/gallery.ts`; captions render only where the data has
 * one (no caption fallback invented for entries without one).
 *
 * Currently composes exactly one dominant + up to three supporting images.
 * If `data/gallery.ts` grows past four entries, only the first four render —
 * extending beyond that is a deliberate future decision, not handled here.
 */
export function Gallery() {
  const [dominant, ...supporting] = gallery;

  if (!dominant) return null;

  return (
    <section className="bg-background px-6 py-24 text-foreground sm:px-10 md:px-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="motion-fade-up text-xs uppercase tracking-[0.3em] text-muted">
          Gallery
        </p>
        <h2 className="motion-fade-up motion-delay-1 mt-4 max-w-xl text-balance font-heading text-[clamp(2.25rem,4vw+1rem,3.75rem)] leading-[1.05]">
          A closer look inside.
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-12">
          <GalleryFrame
            item={dominant}
            aspect="aspect-[4/5]"
            gridClassName="md:col-span-7 md:row-span-2"
            motionClassName="motion-fade-up"
          />
          {supporting.slice(0, 2).map((item, index) => (
            <GalleryFrame
              key={item.image}
              item={item}
              aspect="aspect-[6/5]"
              gridClassName="md:col-span-5"
              motionClassName={`motion-fade-up ${motionDelayClass(index + 1)}`}
            />
          ))}
          {supporting[2] && (
            <GalleryFrame
              item={supporting[2]}
              aspect="aspect-[21/9]"
              gridClassName="md:col-span-12"
              motionClassName={`motion-fade-up ${motionDelayClass(3)}`}
            />
          )}
        </div>
      </div>
    </section>
  );
}
