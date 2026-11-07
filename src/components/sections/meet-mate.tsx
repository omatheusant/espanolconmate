import { User } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { instructor } from "@/content/copy";

export function MeetMate() {
  return (
    <section id="sobre" className="scroll-mt-24 py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-4xl border-2 border-dashed border-turquoise-deep/40 bg-muted">
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-8 text-center">
                <User
                  className="size-12 text-ink-soft/50"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
                <p className="text-sm text-ink-soft/70">Foto a confirmar</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col justify-center lg:col-span-7">
          <Reveal delay={0.08}>
            <h2 className="text-balance font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {instructor.title}
            </h2>
            <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-ink-soft">
              {instructor.bio}
            </p>
            <p className="mt-4 max-w-[56ch] text-ink-soft">{instructor.approach}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
