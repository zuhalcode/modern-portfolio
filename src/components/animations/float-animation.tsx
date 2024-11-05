"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navMenu = ["home", "about us", "shop", "specs", "category", "contact"];

const FloatingAnimationPage = () => {
  const text: string = "Hello";

  const bgClasses: string[] = [
    "bg-red-500 right-1/2",
    "bg-blue-500",
    "bg-cyan-500 left-1/2",
  ];

  return (
    <main className="h-screen bg-white">
      <Navbar />

      <div className="relative flex h-full w-full items-center justify-center">
        {bgClasses.map((bg, i) => (
          <div
            key={i}
            className={`absolute ${bg} z-0 h-48 w-40 rounded-full opacity-50 blur-3xl xl:h-[300px] xl:w-[400px]`}
          />
        ))}

        <div className="absolute z-10 -mt-10 flex flex-col gap-3">
          <div className="text-center">
            {text.split("").map((letter, i) =>
              letter === " " ? (
                <span className="hidden xl:inline" key={i}>
                  &nbsp; &nbsp; &nbsp;
                </span>
              ) : (
                <motion.span
                  whileHover={{ y: -20 }}
                  whileTap={{ y: -20 }}
                  key={i}
                  className="inline-flex cursor-default select-none text-5xl font-bold uppercase tracking-widest text-slate-800 xl:text-8xl"
                >
                  {letter}
                </motion.span>
              ),
            )}
          </div>

          <p className="mx-auto max-w-sm text-center text-sm font-medium text-slate-800 xl:max-w-md xl:text-base">
            I’m Zuhal, a web developer dedicated to creating modern innovative
            and responsive websites.
          </p>
        </div>
      </div>
    </main>
  );
};

const Navbar = () => {
  return (
    <nav>
      <ul className="fixed z-20 flex w-full items-center justify-between px-10 py-5 text-black xl:px-20 xl:py-3">
        <li className="font-bold">Zuhal Dev</li>

        {navMenu.map((menu) => (
          <li className="hidden cursor-pointer text-sm font-medium capitalize hover:underline lg:inline">
            {menu}
          </li>
        ))}

        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 pt-5">
              {navMenu.map((menu) => (
                <Button
                  variant="ghost"
                  className="w-full justify-start uppercase text-black"
                >
                  {menu}
                </Button>
              ))}

              <Button
                variant="outline"
                className="rounded-lg border border-black px-5 text-black"
              >
                Buy Now
              </Button>
            </nav>
          </SheetContent>
        </Sheet>

        <Button
          variant="outline"
          className="hidden rounded-full border border-black px-5 text-black lg:block"
        >
          Buy Now
        </Button>
      </ul>
    </nav>
  );
};

export default FloatingAnimationPage;
