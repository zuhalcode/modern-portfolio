import React from "react";
import HeroOrbit from "./hero-orbit";
import StarIcon from "@/assets/star.svg";
import { Dot } from "lucide-react";

const OrbitAnimation = () => {
  return (
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
  );
};

export default OrbitAnimation;
