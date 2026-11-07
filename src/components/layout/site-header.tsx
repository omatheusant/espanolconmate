"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Container } from "./container";
import { Wordmark } from "./wordmark";
import { CtaLink } from "@/components/ui/cta-link";
import { navLinks, getWhatsAppHref } from "@/content/site-config";
import { hero } from "@/content/copy";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.22;

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/85 backdrop-blur-sm">
      <Container className="flex h-18 items-center justify-between">
        <Wordmark />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group/nav relative text-sm font-medium text-ink/80 transition-colors hover:text-ink"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-[width] duration-[var(--duration-base)] ease-[var(--ease-brand)] group-hover/nav:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <CtaLink href={getWhatsAppHref()} size="default" className="h-11 px-5 text-sm">
            {hero.navCta}
          </CtaLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="relative inline-flex size-10 touch-manipulation items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                className="absolute inline-flex"
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration }}
              >
                <X className="size-5" aria-hidden="true" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                className="absolute inline-flex"
                initial={{ opacity: 0, rotate: 45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -45 }}
                transition={{ duration }}
              >
                <Menu className="size-5" aria-hidden="true" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </Container>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-nav"
            className="overflow-hidden border-t border-ink/10 bg-cream md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-base font-medium text-ink transition-colors hover:bg-ink/5"
                >
                  {link.label}
                </a>
              ))}
              <CtaLink
                href={getWhatsAppHref()}
                onClick={() => setOpen(false)}
                className="mt-2 w-full"
              >
                {hero.primaryCta}
              </CtaLink>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
