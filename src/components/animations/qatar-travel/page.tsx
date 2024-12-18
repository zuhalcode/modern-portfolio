"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, Search } from "lucide-react";

import { Playfair_Display } from "next/font/google";
import { motion, useInView } from "framer-motion";

import QatarImage from "./qatar-image";
import DestinationImage from "./destination-image";

import "locomotive-scroll/dist/locomotive-scroll.css";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useLocomotiveScroll } from "@/hooks/use-locomotive-scroll";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const expandableImages: string[] = [
  "/qatar-img/destination2.jpg",
  "/qatar-img/destination.jpg",
  "/qatar-img/destination3.jpg",
  "/qatar-img/destination4.jpg",
  "/qatar-img/destination5.jpg",
];

const QatarTravel = () => {
  const { scrollRef, scrollInstance } = useLocomotiveScroll();

  const [scale, setScale] = useState<number>(1);
  const [nav, setNav] = useState<boolean>(true);
  const [activeIndex, setActiveIndex] = useState<number>(4);

  const entertainmentRef = useRef(null);
  const entertainmentIsInView = useInView(entertainmentRef, { once: false });

  const culturalRef = useRef(null);
  const culturalIsInView = useInView(culturalRef, { once: false });

  let lastScrollY = 0;

  useEffect(() => {
    scrollInstance?.on("scroll", (obj) => {
      const currentScrollY = obj.scroll.y;

      const newScale = 1 + currentScrollY / 500;
      setScale(Math.min(newScale, 2));

      if (currentScrollY > lastScrollY && currentScrollY > 50) setNav(false);
      else setNav(true);
      lastScrollY = currentScrollY;
    });

    return () => {
      scrollInstance?.destroy();
    };
  }, [scrollInstance]);

  return (
    <>
      <Navbar nav={nav} />

      <main
        ref={scrollRef}
        className="space-y-12 bg-[#ffe5d5] xl:space-y-24 xl:pb-12"
      >
        <div className="sm:polygon-clip mobile-clip min-h-screen overflow-hidden">
          <motion.div
            style={{ scale }}
            className="absolute h-screen w-full bg-[url('/qatar-img/qatar2.jpg')] bg-cover"
          />

          <div className="absolute m-3 mt-10 space-y-5 sm:ml-10 lg:ml-32 lg:mt-20 xl:ml-44">
            <h2 className="max-w-56 text-2xl font-semibold text-white sm:max-w-md sm:text-5xl">
              Enjoy the moment while visiting Qatar
            </h2>

            <div className="flex items-center gap-3 rounded-md bg-white px-5 py-3 text-black shadow-lg">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search Location"
                className="w-full text-sm outline-none placeholder:text-black xl:w-96"
              />
            </div>
          </div>
        </div>

        <div className="min-h-screen lg:h-full">
          <div className="pt-4 text-center uppercase text-black">
            <h1
              className={`${playfair.className} text-4xl font-medium tracking-widest`}
            >
              Featured
            </h1>
            <h1 className="text-5xl font-light tracking-wider">Activities</h1>
            <h1
              className={`${playfair.className} text-4xl font-medium tracking-widest`}
            >
              In Qatar
            </h1>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-2 py-6 lg:flex-row lg:gap-7 lg:px-5">
            <QatarImage src="/qatar-img/qatar3.jpg" width={250} height={350} />
            <QatarImage src="/qatar-img/qatar4.jpg" width={600} height={450} />
            <QatarImage src="/qatar-img/qatar5.jpg" width={350} height={350} />
          </div>
        </div>

        <div className="relative z-0 min-h-screen w-full overflow-hidden">
          <div className="flex items-center justify-center gap-[1px]">
            {expandableImages.map((src, i) => (
              <DestinationImage
                key={i}
                src={src}
                index={i}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>

          <div className="absolute bottom-16 right-1 z-10 text-black lg:right-0">
            <motion.h1
              ref={entertainmentRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className={cn(
                "text-4xl sm:text-7xl lg:text-8xl",
                playfair.className,
              )}
            >
              {"ENTERTAINMENT".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    y: Math.random() * 500 - 500,
                    x: Math.random() * 500 - 500,
                  }}
                  animate={
                    entertainmentIsInView
                      ? {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          x: 0,
                        }
                      : {}
                  }
                  transition={{
                    duration: 1,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={entertainmentIsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ ease: "easeIn", duration: 0.5, delay: 2 }}
              className="flex items-center gap-1 pt-2"
            >
              <p className="cursor-pointer pl-2 text-sm underline underline-offset-2 sm:text-lg">
                Check all experiences
              </p>
              <ArrowRight className="size-5 sm:size-6" />
            </motion.div>
          </div>
        </div>

        <div
          ref={culturalRef}
          className="relative min-h-screen flex-col items-center lg:flex"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={culturalIsInView && { opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.5, delay: 1 }}
            className={`${playfair.className} static top-5 z-10 text-center text-5xl uppercase text-black lg:absolute lg:text-8xl`}
          >
            Cultural and historical tours
          </motion.h1>

          <div className="static flex min-h-screen w-full flex-col items-center justify-center lg:absolute lg:flex-row lg:gap-16">
            <div className="mt-5 lg:-mt-24">
              <QatarImage
                src="/qatar-img/historical3.jpg"
                width={300}
                height={350}
              />
            </div>
            <div className="lg:pt-24">
              <QatarImage
                src="/qatar-img/historical2.jpg"
                width={250}
                height={350}
              />
            </div>
            <div className="">
              <QatarImage
                src="/qatar-img/historical.jpg"
                width={350}
                height={350}
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.5, delay: 1.5 }}
            className="static bottom-44 flex w-full justify-center lg:absolute xl:bottom-0"
          >
            <Button
              className="border-black text-black hover:bg-black hover:text-white"
              variant="outline"
            >
              Check Historical Tours
            </Button>
          </motion.div>
        </div>

        <footer className="flex w-full border-b border-t border-black bg-transparent py-3 text-black">
          <p className="mx-auto text-center text-sm leading-loose lg:text-base">
            Copyright &copy; 2024 Design inspired by {``}
            <Link
              href="https://asoview.me/"
              className="text-blue-700 hover:text-black hover:underline"
            >
              Asoview
            </Link>
            {""} | {""} Developed with {""}
            <span aria-label="love" className="text-red-500" role="img">
              &#10084;
            </span>
            {""} by Zuhal. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
};

const Navbar = ({ nav }: { nav: boolean }) => {
  return (
    <nav
      className={`sticky left-0 right-0 top-0 z-20 bg-[#ffe5d5] transition-transform duration-300 ${!nav && "-translate-y-full"}`}
    >
      <ul className="z-20 flex w-full items-center justify-between px-5 py-3 text-black xl:px-20">
        <li className="font-bold">Zuhal Travel</li>

        <ul className="hidden w-3/4 items-center justify-between sm:flex">
          <li className="cursor-pointer text-sm font-medium capitalize hover:underline">
            Appartment
          </li>
          <li className="cursor-pointer text-sm font-medium capitalize hover:underline">
            Where to go
          </li>
          <li className="cursor-pointer text-sm font-medium capitalize hover:underline">
            Contact Us
          </li>
          <li className="">Become a host</li>
        </ul>

        <Sheet>
          <SheetTrigger className="sm:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <ul className="flex flex-col gap-4 pt-5 text-black">
              <li className="cursor-pointer text-sm font-medium capitalize hover:underline">
                Appartment
              </li>
              <li className="cursor-pointer text-sm font-medium capitalize hover:underline">
                Where to go
              </li>
              <li className="cursor-pointer text-sm font-medium capitalize hover:underline">
                Contact Us
              </li>
              <li className="cursor-pointer text-sm font-medium capitalize hover:underline">
                Become a Host
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </ul>
    </nav>
  );
};

export default QatarTravel;
