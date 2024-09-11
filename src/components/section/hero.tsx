"use client";

import React from "react";
import { Button } from "../ui/button";
import { ArrowDown, Dot } from "lucide-react";
import StarIcon from "@/assets/star.svg";
import HeroOrbit from "../ui/hero-orbit";

import MagicButton from "../ui/magic-button";

import AnimatedHeading from "../ui/animated-heading";
import AnimatedParagraph from "../ui/animated-paragraph";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative z-0 overflow-clip py-40 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
      {/* Orbit Animation */}
      <div className="absolute inset-0 -z-20">
        <div className="hero-ring size-[420px]" />
        <div className="hero-ring size-[620px]" />
        <div className="hero-ring size-[820px]" />
        <div className="hero-ring size-[1020px]" />
        <div className="hero-ring size-[1220px]" />

        <HeroOrbit>
          <StarIcon className="size-20 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={300} rotation={70}>
          <StarIcon className="size-16 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={380} rotation={10}>
          <StarIcon className="size-16 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={380} rotation={-50}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={380} rotation={150}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={750} rotation={70}>
          <StarIcon className="size-20 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={750} rotation={-120}>
          <StarIcon className="size-20 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={-160}>
          <StarIcon className="size-14 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={10}>
          <StarIcon className="size-14 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={780} rotation={-20}>
          <StarIcon className="size-16 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={780} rotation={120}>
          <StarIcon className="size-16 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={380} rotation={-14}>
          <StarIcon className="size-4 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={380} rotation={79}>
          <StarIcon className="size-5 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <StarIcon className="size-10 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}>
          <StarIcon className="size-3 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={420} rotation={240}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit size={400} rotation={110}>
          <Dot className="size-28 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={750} rotation={40}>
          <Dot className="size-28 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={260}>
          <Dot className="size-32 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={600} rotation={210}>
          <Dot className="size-24 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={-5}>
          <Dot className="size-12 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={700} rotation={-40}>
          <Dot className="size-12 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={700} rotation={130}>
          <Dot className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={150}>
          <Dot className="size-12 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={850} rotation={100}>
          <Dot className="size-16 text-emerald-300/20" />
        </HeroOrbit>
      </div>
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
