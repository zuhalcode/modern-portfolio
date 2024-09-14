"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { PropsWithChildren } from "react";

const PageTransition = ({ children }: PropsWithChildren) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 1, duration: 0.5, ease: "easeInOut" },
        }}
        className="pointer-events-none absolute h-full w-full bg-black"
      />
      {children}
    </AnimatePresence>
  );
};

export default PageTransition;
