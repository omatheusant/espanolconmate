import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { CtaLink, TextLink } from "@/components/ui/cta-link";
import { HeroVisual } from "./hero-visual";
import { hero } from "@/content/copy";
import { getWhatsAppHref } from "@/content/site-config";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      <Container className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-turquoise-deep">
              tu guía de español
            </p>
          </Reveal>

          <h1 className="mt-5 text-balance font-display text-[clamp(2.75rem,6.4vw,5.75rem)] leading-[0.96] font-bold tracking-tight text-ink">
            {hero.headline.map((line, i) => {
              const isLast = i === hero.headline.length - 1;
              return (
                <Reveal key={line} as="span" className="block" delay={0.08 + i * 0.08}>
                  {line}
                  {isLast && (
                    <span
                      aria-hidden="true"
                      className="ml-1.5 inline-block size-2.5 rounded-full bg-orange align-baseline sm:size-3"
                    />
                  )}
                </Reveal>
              );
            })}
          </h1>

          <Reveal delay={0.28}>
            <p className="mt-7 max-w-[42ch] text-lg leading-relaxed text-ink-soft sm:text-xl">
              {hero.body}
            </p>
          </Reveal>

          <Reveal delay={0.36}>
            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <CtaLink href={getWhatsAppHref()} size="lg">
                {hero.primaryCta}
              </CtaLink>
              <TextLink
                href="#metodo"
                className="h-14 px-1"
                icon={<ArrowRight className="size-4" aria-hidden="true" />}
              >
                {hero.secondaryCta}
              </TextLink>
            </div>
          </Reveal>
        </div>

        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <Reveal delay={0.2} y={24} className="w-full max-w-[440px]">
            <HeroVisual />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
