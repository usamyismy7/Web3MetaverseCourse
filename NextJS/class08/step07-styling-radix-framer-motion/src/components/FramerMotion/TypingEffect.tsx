"use client";

import { motion } from "framer-motion";
import * as React from "react";

export default function TypingEffect() {
  const text =
    "I am student of Quarter 2 of PIAIC Web 3 and Metaverse developer course. I am a full stack developer.";
  const [displayedText, setDisplayedText] = React.useState("");
  const [i, setI] = React.useState(0);

  React.useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prevState) => prevState + text.charAt(i));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, 200);

    return () => {
      clearInterval(typingEffect);
    };
  }, [i]);

  return (
    <h1 className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]">
      {displayedText ? displayedText : "Typing Effect"}
    </h1>
  );
}
