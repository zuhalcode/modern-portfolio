"use client";

import React from "react";
import { Button } from "../ui/button";
import { ArrowDown } from "lucide-react";

import MagicButton from "../ui/magic-button";

import AnimatedHeading from "../ui/animated-heading";
import AnimatedParagraph from "../ui/animated-paragraph";
import { motion } from "framer-motion";
import { Spotlight } from "../ui/spotlight";
import OrbitAnimation from "../ui/orbit-animation";

const HeroSection = () => {
  return (
    <div className="relative z-0 overflow-clip py-40 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
      <Spotlight className="left-10 top-0 xl:-top-10" fill="darkblue" />
      <Spotlight className="-left-12 -top-0 xl:-top-10" fill="gray" />

      {/* Orbit Animation */}
      <OrbitAnimation />
      {/* Orbit Animation */}

      <div className="container px-10">
        <div className="flex flex-col gap-3">
          <div className="mx-auto flex max-w-sm flex-col items-center gap-3 lg:max-w-2xl">
            <AnimatedHeading text="Crafting Exceptional Web Solutions" />
            <AnimatedParagraph text="I create functional web applications that deliver results. Let's discuss your next project" />
          </div>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <MagicButton>
              <span>Explore My Work</span>
              <ArrowDown size={16} />
            </MagicButton>

            <motion.div
              whileHover={{ y: -3, x: -3 }}
              whileTap={{ y: 3, x: -6 }}
            >
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.5 }}
              >
                <Button className="inline-flex h-12 gap-2 rounded-xl border border-white bg-white px-6 text-gray-900 hover:text-white">
                  <span className="font-semibold">&#128075; Let's Connect</span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
