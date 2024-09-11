import { motion } from "framer-motion";
import React from "react";

type Props = {
  text: string;
  isInView?: boolean;
  delay?: number;
};

const AnimatedParagraph = ({ text, isInView = true, delay = 0.8 }: Props) => {
  const words = text.split(" ");

  return (
    <motion.p
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delay,
            duration: 0.5,
          },
        },
      }}
      className="text-center text-sm text-white/60 sm:text-base"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="mr-[3px] inline-block"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default AnimatedParagraph;
