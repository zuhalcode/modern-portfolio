"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { PropsWithChildren } from "react";
import Stairs from "./stairs";
import { usePathname } from "next/navigation";

const StairTransition = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="pointer-events-none z-40 flex bg-blue-500">
          <Stairs />
          zuhal
        </div>

        <motion.div
          className="pointer-events-none h-screen w-screen"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;
