"use client";

import React, { Fragment } from "react";
import StarIcon from "@/assets/star.svg";
import { motion } from "framer-motion";

const words = [
  "efficient",
  "inovative",
  "responsive",
  "interactive",
  "adaptable",
  "dynamic",
  "fast",
  "scalable",
];

const TapeSection = () => {
  return (
    <div className="py-16">
      <div className="-mx-1 -rotate-3 bg-gradient-to-r from-emerald-300 to-sky-400">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 60,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none gap-4 py-3"
          >
            {[...new Array(3)].fill(0).map((_, i) => (
              <Fragment key={i}>
                {words.map((word) => (
                  <div key={word} className="inline-flex items-center gap-4">
                    <span className="text-sm font-extrabold uppercase text-gray-900">
                      {word}
                    </span>
                    <StarIcon className="size-6 -rotate-12 text-gray-900" />
                  </div>
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TapeSection;
