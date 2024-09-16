"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import AnimatedParagraph from "./animated-paragraph";

type Props = { title?: string; eyebrow?: string; desc: string };

const SectionHeader = ({ title, eyebrow, desc }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <>
      <motion.div ref={ref} className="flex flex-col justify-center gap-3 px-3">
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-gradient-to-r from-[#00FDB6] to-sky-400 bg-clip-text text-center font-semibold uppercase tracking-widest text-transparent"
        >
          {eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center font-serif text-2xl tracking-wider"
        >
          {title}
        </motion.h2>
        <AnimatedParagraph text={desc} isInView={isInView} delay={0.5} />
      </motion.div>
    </>
  );
};

export default SectionHeader;
