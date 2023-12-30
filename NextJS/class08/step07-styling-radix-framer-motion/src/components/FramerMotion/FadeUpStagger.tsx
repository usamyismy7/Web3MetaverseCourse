"use client";

import { motion } from "framer-motion";

export default function FadeUpStagger() {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.h1
        className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        Usama Qazi
      </motion.h1>
      <motion.p
        className="mt-6 text-center md:text-2xl"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        Passionate Full Stack developer
      </motion.p>
      <motion.div
        className="flex items-center justify-center mx-auto mt-6 space-x-5"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        {/* <HeartFilledIcon /> */}
      </motion.div>
    </motion.div>
  );
}
