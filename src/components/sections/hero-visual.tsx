"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

/** Organic gourd-silhouette field — original shape, reused as a bold color block. */
function Blob({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 520 560" className={className} aria-hidden="true">
      <path
        d="M180 60C100 60 60 140 70 220C50 260 40 320 60 380C80 460 160 520 260 520C370 520 450 450 460 350C468 280 440 220 400 180C420 140 400 90 340 70C300 55 240 55 180 60Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[460px]">
      {/* secondary field, turquoise, layered behind for depth and a two-color pairing */}
      <motion.div
        className="absolute -left-[8%] bottom-[0%] size-[60%] text-turquoise"
        style={{ transform: "rotate(16deg)" }}
        animate={reduceMotion ? undefined : { rotate: [16, 22, 16] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      >
        <Blob className="h-full w-full" />
      </motion.div>

      {/* primary field, bold orange, bleeding toward the edge */}
      <motion.div
        className="absolute -right-[6%] top-0 size-[90%] text-orange"
        animate={reduceMotion ? undefined : { rotate: [0, -3, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      >
        <Blob className="h-full w-full" />
      </motion.div>

      {/* official mate icon, set with confidence against the orange field — gentle idle float */}
      <div className="absolute left-[58%] top-[42%] w-[48%] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="drop-shadow-[0_18px_26px_rgba(38,59,60,0.22)]"
          animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/brand/mate-icon.png"
            alt="Cuia de mate, símbolo do método Español con Mate"
            width={353}
            height={498}
            priority
            className="h-auto w-full"
          />
        </motion.div>
      </div>

      <span className="absolute left-[10%] top-[8%] size-3 rounded-full bg-ink/15" />
    </div>
  );
}
