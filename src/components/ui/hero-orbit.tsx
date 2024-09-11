import { motion } from "framer-motion";
import React, { PropsWithChildren } from "react";

const HeroOrbit = ({
  children,
  size = 620,
  rotation = -72,
}: PropsWithChildren<{ size?: number; rotation?: number }>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -z-20 -translate-x-1/2 -translate-y-1/2">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div
          className={`flex items-start justify-start`}
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <motion.div
            className="inline-flex"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 10, // 10 seconds duration
              ease: "linear",
            }}
          >
            {children}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroOrbit;
