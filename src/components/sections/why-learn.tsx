import { MessagesSquare, Sparkles, Mic2 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { valueProps } from "@/content/copy";

const icons = [MessagesSquare, Sparkles, Mic2];

export function WhyLearn() {
  const [featured, ...rest] = valueProps;
  const FeaturedIcon = icons[0];

  return (
    <section id="metodo" className="scroll-mt-24 py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Reveal>
            <h2 className="text-balance font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Por que aprender com a Mate
            </h2>
            <p className="mt-4 max-w-[36ch] text-ink-soft">
              Três ideias simples guiam cada aula — e nenhuma delas é &ldquo;decore e
              repita&rdquo;.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal>
            <div className="rounded-4xl bg-turquoise p-8 transition-[transform,box-shadow] duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-16px_rgba(24,175,186,0.45)] sm:p-10">
              <FeaturedIcon className="size-8 text-cream" strokeWidth={1.75} aria-hidden="true" />
              <h3 className="mt-5 font-display text-2xl font-bold text-cream sm:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-3 max-w-[56ch] text-ink">{featured.body}</p>
            </div>
          </Reveal>

          <ul className="mt-2 divide-y divide-ink/10 border-t border-ink/10">
            {rest.map((prop, i) => {
              const Icon = icons[i + 1];
              return (
                <li key={prop.title} className="py-8 sm:py-10">
                  <Reveal delay={0.08 + i * 0.08}>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
                      <Icon
                        className="size-6 shrink-0 text-turquoise-deep"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                      <div>
                        <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                          {prop.title}
                        </h3>
                        <p className="mt-2 max-w-[56ch] text-ink-soft">{prop.body}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
