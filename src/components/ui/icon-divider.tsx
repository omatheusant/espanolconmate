import { LogoMark } from "./logo-mark";

/** Quiet rhythm punctuation between sections — the brand mark as structure, not decoration. */
export function IconDivider() {
  return (
    <div className="flex justify-center gap-6 bg-cream py-10" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <LogoMark key={i} className="h-3.5 w-auto opacity-20" />
      ))}
    </div>
  );
}
