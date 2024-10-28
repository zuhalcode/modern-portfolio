"use client";

import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const navMenu = ["home", "about us", "shop", "specs", "category", "contact"];

const FLoatingAnimation = () => {
  const text: string = "Float Me";
  const heightClass: string = "h-[300px]";
  const widthClass: string = "w-[300px]";

  const bgClasses: string[] = [
    "bg-red-500 right-1/2",
    "bg-blue-500",
    "bg-cyan-500 left-1/2",
  ];

  return (
    <main className="h-screen bg-white">
      <nav>
        <ul className="fixed z-20 flex w-full items-center justify-between px-20 py-3 text-black">
          <li className="font-bold">Zuhal Dev</li>

          {navMenu.map((menu) => (
            <li className="cursor-pointer text-sm font-medium capitalize hover:underline">
              {menu}
            </li>
          ))}

          <Button
            variant="outline"
            className="rounded-full border border-black px-5 text-black"
          >
            Buy Now
          </Button>
        </ul>
      </nav>

      <div className="relative flex h-full w-full items-center justify-center">
        {bgClasses.map((bg, i) => (
          <div
            className={`absolute ${bg} z-0 h-[300px] w-[400px] rounded-full opacity-50 blur-3xl`}
          />
        ))}

        <div className="absolute z-10 -mt-10 flex flex-col gap-3">
          <div className="text-center">
            {text.split("").map((letter, i) =>
              letter === " " ? (
                <span key={i}>&nbsp; &nbsp; &nbsp;</span>
              ) : (
                <motion.span
                  whileHover={{ y: -20 }}
                  key={i}
                  className="inline-flex cursor-default text-8xl font-bold uppercase tracking-widest text-black"
                >
                  {letter}
                </motion.span>
              ),
            )}
          </div>

          <p className="mx-auto max-w-md text-center font-medium text-slate-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
            exercitationem?
          </p>
        </div>
      </div>
    </main>
  );
};

export default FLoatingAnimation;
