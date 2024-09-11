import { motion } from "framer-motion";
import React, { PropsWithChildren } from "react";

const MagicButton = ({ children }: PropsWithChildren) => {
  return (
    <motion.div whileHover={{ y: -3, x: -3 }} whileTap={{ y: 3, x: -6 }}>
      <motion.button
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          {children}
        </span>
      </motion.button>
    </motion.div>
  );
};

export default MagicButton;
