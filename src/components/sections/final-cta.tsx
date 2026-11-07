import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { CtaLink } from "@/components/ui/cta-link";
import { LogoMark } from "@/components/ui/logo-mark";
import { finalCta } from "@/content/copy";
import { getWhatsAppHref } from "@/content/site-config";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-orange py-24 sm:py-32">
      <LogoMark
        className="pointer-events-none absolute -right-8 -bottom-16 h-72 w-auto opacity-[0.07] sm:h-96"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-balance font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl">
              {finalCta.headline}
            </h2>
            <p className="mt-5 max-w-[42ch] text-lg text-ink/90">{finalCta.body}</p>
            <div className="mt-9">
              <CtaLink href={getWhatsAppHref()} variant="inverse" size="lg">
                {finalCta.cta}
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
