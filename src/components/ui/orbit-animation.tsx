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
        <StarIcon className="text-primary-fourth size-20" />
      </HeroOrbit>
      <HeroOrbit size={300} rotation={70}>
        <StarIcon className="text-primary-fourth size-16" />
      </HeroOrbit>
      <HeroOrbit size={380} rotation={10}>
        <StarIcon className="text-primary-fourth size-16" />
      </HeroOrbit>
      <HeroOrbit size={380} rotation={-50}>
        <StarIcon className="text-primary-fourth size-12" />
      </HeroOrbit>
      <HeroOrbit size={380} rotation={150}>
        <StarIcon className="text-primary-fourth size-12" />
      </HeroOrbit>
      <HeroOrbit size={750} rotation={70}>
        <StarIcon className="text-primary-fourth size-20" />
      </HeroOrbit>
      <HeroOrbit size={750} rotation={-120}>
        <StarIcon className="text-primary-fourth size-20" />
      </HeroOrbit>
      <HeroOrbit size={710} rotation={-160}>
        <StarIcon className="text-primary-fourth size-14" />
      </HeroOrbit>
      <HeroOrbit size={710} rotation={10}>
        <StarIcon className="text-primary-fourth size-14" />
      </HeroOrbit>
      <HeroOrbit size={780} rotation={-20}>
        <StarIcon className="text-primary-fourth size-16" />
      </HeroOrbit>
      <HeroOrbit size={780} rotation={120}>
        <StarIcon className="text-primary-fourth size-16" />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={20}>
        <StarIcon className="text-primary-fourth size-12" />
      </HeroOrbit>
      <HeroOrbit size={590} rotation={98}>
        <StarIcon className="text-primary-fourth size-12" />
      </HeroOrbit>
      <HeroOrbit size={380} rotation={-14}>
        <StarIcon className="text-primary-fourth size-4" />
      </HeroOrbit>
      <HeroOrbit size={380} rotation={79}>
        <StarIcon className="text-primary-fourth size-5" />
      </HeroOrbit>
      <HeroOrbit size={530} rotation={178}>
        <StarIcon className="text-primary-fourth size-10" />
      </HeroOrbit>
      <HeroOrbit size={710} rotation={144}>
        <StarIcon className="text-primary-fourth size-3" />
      </HeroOrbit>
      <HeroOrbit size={420} rotation={240}>
        <StarIcon className="text-primary-fourth size-12" />
      </HeroOrbit>

      <HeroOrbit size={400} rotation={110}>
        <Dot className="text-primary-fourth/20 size-28" />
      </HeroOrbit>
      <HeroOrbit size={750} rotation={40}>
        <Dot className="text-primary-fourth/20 size-28" />
      </HeroOrbit>
      <HeroOrbit size={650} rotation={260}>
        <Dot className="text-primary-fourth/20 size-32" />
      </HeroOrbit>
      <HeroOrbit size={600} rotation={210}>
        <Dot className="text-primary-fourth/20 size-24" />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={-5}>
        <Dot className="text-primary-fourth/20 size-12" />
      </HeroOrbit>
      <HeroOrbit size={700} rotation={-40}>
        <Dot className="text-primary-fourth/20 size-12" />
      </HeroOrbit>
      <HeroOrbit size={700} rotation={130}>
        <Dot className="text-primary-fourth/20 size-14" />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={150}>
        <Dot className="text-primary-fourth/20 size-12" />
      </HeroOrbit>
      <HeroOrbit size={850} rotation={100}>
        <Dot className="text-primary-fourth/20 size-16" />
      </HeroOrbit>
    </div>
  );
};

export default OrbitAnimation;
