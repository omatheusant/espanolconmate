"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

export function Reveal({
  children,
  delay = 0,
  className,
  y = 18,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  /** Use "span" when nesting inside inline-only parents like <h1>. */
  as?: "div" | "span";
}) {
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const MotionTag = as === "span" ? motion.span : motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      suppressHydrationWarning
    >
      {children}
    </MotionTag>
  );
}
