import { motion } from "framer-motion";
import React from "react";

type Props = {
  text: string;
};

const AnimatedHeading = ({ text }: Props) => {
  const words = text.split(" ");

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2, // Delay between words
          },
        },
      }}
      className="text-center font-serif text-2xl tracking-wide sm:text-4xl md:leading-snug lg:text-6xl lg:leading-snug"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="mr-2 inline-block"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedHeading;
