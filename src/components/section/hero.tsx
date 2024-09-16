"use client";

import React from "react";

import { ArrowDown } from "lucide-react";

import MagicButton from "../ui/magic-button";

import AnimatedHeading from "../ui/animated-heading";
import AnimatedParagraph from "../ui/animated-paragraph";

import { Spotlight } from "../ui/spotlight";
import OrbitAnimation from "../ui/orbit-animation";

const HeroSection = () => {
  const handleScroll = () => {
    window.scrollBy({
      top: 600,
      behavior: "smooth",
    });
  };

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
            <div onClick={handleScroll}>
              <MagicButton animate>
                <span>Explore My Work</span>
                <ArrowDown size={16} />
              </MagicButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
