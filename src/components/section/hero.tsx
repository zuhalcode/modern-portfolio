"use client";

import React from "react";
import { ArrowDown } from "lucide-react";
import MagicButton from "../ui/magic-button";
import AnimatedHeading from "../ui/animated-heading";
import AnimatedParagraph from "../ui/animated-paragraph";
import { Spotlight } from "../ui/spotlight";
import OrbitAnimation from "../ui/orbit-animation";
import LocomotiveScroll from "locomotive-scroll";

const HeroSection = ({ scroll }: { scroll: LocomotiveScroll | null }) => {
  const handleOnClick = () => scroll?.scrollTo("#about");

  return (
    <div
      id="hero"
      className="relative z-0 overflow-clip py-36 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
    >
      <Spotlight className="left-10 top-0 xl:-top-10" fill="darkblue" />
      <Spotlight className="-left-12 -top-0 xl:-top-10" fill="gray" />

      {/* Orbit Animation */}
      <OrbitAnimation />
      {/* Orbit Animation */}

      <div className="container px-10">
        <div className="flex flex-col gap-3">
          <div className="mx-auto flex max-w-sm flex-col items-center gap-3 lg:max-w-2xl">
            <AnimatedHeading text="Crafting Digital Experiences " />
            <AnimatedParagraph text="I develop functional web applications that not only look great but also deliver real results. Let's build something amazing together." />
          </div>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <div onClick={handleOnClick}>
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
