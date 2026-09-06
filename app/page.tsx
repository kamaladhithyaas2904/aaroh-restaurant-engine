import { restaurant } from "@/config/restaurant";

// Temporary placeholder — the real homepage arrives in Phase 2.
export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-3 px-6 py-24 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-muted">
        Restaurant Engine V1
      </p>
      <h1 className="font-heading text-4xl text-foreground">
        {restaurant.name}
      </h1>
    </main>
  );
}
