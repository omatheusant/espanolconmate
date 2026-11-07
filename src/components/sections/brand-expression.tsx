import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { brandExpression } from "@/content/copy";

const sizes = [
  "text-4xl sm:text-5xl lg:text-6xl",
  "text-2xl sm:text-3xl lg:text-4xl",
  "text-4xl sm:text-5xl lg:text-6xl",
  "text-xl sm:text-2xl lg:text-3xl",
];

export function BrandExpression() {
  return (
    <section className="bg-turquoise py-20 sm:py-24">
      <Container>
        <p className="flex flex-wrap items-baseline gap-x-6 gap-y-3 font-display font-bold tracking-tight text-ink">
          {brandExpression.words.map((word, i) => (
            <Reveal key={word} as="span" delay={i * 0.08} className={sizes[i % sizes.length]}>
              {word}
            </Reveal>
          ))}
        </p>
      </Container>
    </section>
  );
}
