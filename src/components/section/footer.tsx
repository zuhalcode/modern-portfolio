"use client";
import React from "react";
import MagicButton from "../ui/magic-button";
import { MousePointer2 } from "lucide-react";
import { portfolios } from "@/data/portfolio";
import TechIcon from "../ui/tech-icon";

const Footer = () => {
  return (
    <footer className="relative w-full pt-20">
      <div className="absolute left-0 top-0 -z-10 min-h-96 w-full">
        <img
          src="/footer-grid.svg"
          alt="footer-grid"
          className="h-full w-full"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-center text-3xl font-bold">
          Ready to take <span className="text-purple-300">your</span> digital
          presence to the next level ?
        </h1>
        <p className="my-5 text-center text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
          eligendi?
        </p>
        <a href="mailto:zuhalcode@gmail.com">
          <MagicButton animate>
            <span>Let's Get in Touch</span>
            <MousePointer2 className="rotate-90" size={18} />
          </MagicButton>
        </a>
      </div>

      <div className="mt-16 flex flex-col items-center justify-between gap-3 bg-black/60 py-2 xl:flex-row xl:px-10">
        <p className="text-sm">Copyright &copy; 2024 | Developed by Zuhal</p>
        <div className="flex items-center gap-3">
          {portfolios[1].iconLists.map((icon, i) => (
            <div
              key={i}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black/20 bg-black bg-opacity-75 p-2 saturate-150 backdrop-blur-lg backdrop-filter"
            >
              <TechIcon component={icon} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
