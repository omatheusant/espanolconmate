import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { LogoMark } from "@/components/ui/logo-mark";
import { howItWorks } from "@/content/copy";

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-24 relative overflow-hidden bg-ink py-24 text-cream sm:py-32"
    >
      <LogoMark
        className="pointer-events-none absolute -right-10 top-0 h-80 w-auto opacity-[0.06] sm:h-[28rem]"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {howItWorks.title}
            </h2>
            <p className="mt-4 text-cream/70">{howItWorks.intro}</p>
          </Reveal>
        </div>

        <ol className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2">
          {howItWorks.steps.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 0.08}>
                <div className="flex items-center gap-3">
                  <LogoMark className="h-4 w-auto opacity-30" aria-hidden="true" />
                  <span className="font-display text-2xl font-semibold text-turquoise">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-cream/15" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-cream sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[48ch] text-cream/70">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
