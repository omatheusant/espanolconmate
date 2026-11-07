"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { faq } from "@/content/copy";

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();

  return (
    <div className="group/row border-b border-ink/10 transition-colors hover:bg-ink/[0.02]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="group flex w-full touch-manipulation items-center justify-between gap-6 px-1 py-6 text-left"
      >
        <span className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-turquoise-deep sm:text-xl">
          {question}
        </span>
        <Plus
          className={`size-5 shrink-0 text-turquoise-deep transition-transform duration-[var(--duration-base)] ease-[var(--ease-brand)] ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        id={panelId}
        className="grid px-1 transition-[grid-template-rows] duration-[var(--duration-base)] ease-[var(--ease-brand)]"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p
            className="max-w-[60ch] pb-6 text-ink-soft transition-opacity duration-300"
            style={{ transitionDelay: isOpen ? "120ms" : "0ms", opacity: isOpen ? 1 : 0 }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="duvidas" className="scroll-mt-24 bg-muted py-24 sm:py-32">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <h2 className="text-balance font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {faq.title}
            </h2>
            <p className="mt-4 max-w-[36ch] text-ink-soft">{faq.intro}</p>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <div className="border-t border-ink/10">
            {faq.items.map((item, i) => (
              <Reveal key={item.question} delay={0.08 + i * 0.06}>
                <FaqItem
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
