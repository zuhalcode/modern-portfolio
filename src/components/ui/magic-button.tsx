import { motion } from "framer-motion";
import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const MagicButton = ({
  children,
  handleOnEvent,
  animate = false,
  className,
}: PropsWithChildren<{
  handleOnEvent?: () => void;
  animate?: boolean;
  className?: string;
}>) => {
  return (
    <motion.div
      whileHover={animate ? { y: -3, x: -3 } : {}}
      whileTap={animate ? { y: 3, x: -6 } : {}}
      onClick={handleOnEvent}
    >
      <motion.button
        initial={animate ? { opacity: 0, y: -50 } : {}}
        animate={animate ? { opacity: 1, y: 0 } : {}}
        transition={animate ? { duration: 0.8, delay: 2 } : {}}
        className={twMerge(
          "relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50",
          className,
        )}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-gray-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          {children}
        </span>
      </motion.button>
    </motion.div>
  );
};

export default MagicButton;
