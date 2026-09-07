/**
 * Shared stagger delays for the `motion-fade-up` / `motion-fade` entrance
 * animations defined in `globals.css` (Phase 2). Index into this when
 * animating a list so items reveal in sequence, without every section
 * re-declaring its own delay classes.
 */
const MOTION_DELAYS = [
  "motion-delay-1",
  "motion-delay-2",
  "motion-delay-3",
  "motion-delay-4",
  "motion-delay-5",
] as const;

/** Returns a delay class for list position `index`, clamped to the longest
 * defined delay once a list runs longer than the available steps. */
export function motionDelayClass(index: number): string {
  return MOTION_DELAYS[Math.min(index, MOTION_DELAYS.length - 1)];
}
