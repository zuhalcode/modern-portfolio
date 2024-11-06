"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowBigRight, ArrowRight, Search } from "lucide-react";

import { Playfair_Display } from "next/font/google";
import {
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import QatarImage from "./qatar-image";
import DestinationImage from "./destination-image";

import "locomotive-scroll/dist/locomotive-scroll.css";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

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
  const [scale, setScale] = useState<number>(1);
  const [nav, setNav] = useState<boolean>(true);
  const [activeIndex, setActiveIndex] = useState<number>(4);

  const scrollRef = useRef<HTMLElement | null>(null);

  const entertainmentRef = useRef(null);
  const entertainmentIsInView = useInView(entertainmentRef, { once: false });

  const culturalRef = useRef(null);
  const culturalIsInView = useInView(culturalRef, { once: false });

  let lastScrollY = 0;

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
      getDirection: true,
    });

    scroll.on("scroll", (obj) => {
      const currentScrollY = obj.scroll.y;

      const newScale = 1 + currentScrollY / 500;
      setScale(Math.min(newScale, 2));

      if (currentScrollY > lastScrollY && currentScrollY > 50) setNav(false);
      else setNav(true);
      lastScrollY = currentScrollY;
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <>
      <Navbar nav={nav} />

      <main ref={scrollRef} className="space-y-24 bg-[#ffe5d5] pb-12">
        <div className="polygon-clip h-screen overflow-hidden">
          <motion.div
            style={{ scale }}
            className="absolute h-screen w-full bg-[url('/qatar-img/qatar2.jpg')] bg-cover"
          />

          <div className="absolute ml-44 mt-20 space-y-5">
            <h2 className="max-w-md text-5xl font-semibold text-white">
              Enjoy the moment while visiting Qatar
            </h2>

            <div className="flex items-center gap-3 rounded-md bg-white px-5 py-3 text-black shadow-lg">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search Location"
                className="w-96 outline-none placeholder:text-black"
              />
            </div>
          </div>
        </div>

        <div className="h-screen">
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

          <div className="flex w-full items-center justify-center gap-7 px-5 py-6">
            <QatarImage src="/qatar-img/qatar3.jpg" width={250} height={350} />
            <QatarImage src="/qatar-img/qatar4.jpg" width={600} height={450} />
            <QatarImage src="/qatar-img/qatar5.jpg" width={350} height={350} />
          </div>
        </div>

        <div className="relative z-0 h-screen w-full overflow-hidden">
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

          <div className="absolute bottom-16 right-0 z-10 text-black">
            <motion.h1
              ref={entertainmentRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className={cn("text-8xl", playfair.className)}
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
              <p className="cursor-pointer pl-2 text-lg underline underline-offset-2">
                Check all experiences
              </p>
              <ArrowRight />
            </motion.div>
          </div>
        </div>

        <div
          ref={culturalRef}
          className="relative flex h-screen flex-col items-center"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={culturalIsInView && { opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.5, delay: 1 }}
            className={`${playfair.className} absolute top-5 z-10 text-center text-8xl uppercase text-black`}
          >
            Cultural and historical tours
          </motion.h1>

          <div className="absolute flex h-screen w-full items-center justify-center gap-16">
            <div className="-mt-24">
              <QatarImage
                src="/qatar-img/historical3.jpg"
                width={300}
                height={350}
              />
            </div>
            <div className="pt-24">
              <QatarImage
                src="/qatar-img/historical2.jpg"
                width={250}
                height={350}
              />
            </div>
            <QatarImage
              src="/qatar-img/historical.jpg"
              width={350}
              height={350}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.5, delay: 1.5 }}
            className="absolute bottom-0 flex w-full justify-center"
          >
            <Button
              className="border-black text-black hover:bg-black hover:text-white"
              variant="outline"
            >
              Check Historical Tours
            </Button>
          </motion.div>
        </div>

        <footer className="flex w-full border border-black bg-transparent py-3 text-black">
          <p className="mx-auto text-center leading-loose">
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
      className={`sticky left-0 right-0 top-0 z-10 bg-[#ffe5d5] transition-transform duration-300 ${!nav && "-translate-y-full"}`}
    >
      <ul className="z-20 flex w-full items-center justify-between px-20 py-3 text-black">
        <li className="font-bold">Zuhal Travel</li>

        <ul className="flex w-1/3 justify-between">
          <li className="cursor-pointer text-sm font-medium capitalize hover:underline">
            Appartment
          </li>
          <li className="cursor-pointer text-sm font-medium capitalize hover:underline">
            Where to go
          </li>
          <li className="cursor-pointer text-sm font-medium capitalize hover:underline">
            Contact Us
          </li>
        </ul>

        <ul>
          <li className="">Become a host</li>
        </ul>
      </ul>
    </nav>
  );
};

export default QatarTravel;
