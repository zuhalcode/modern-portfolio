"use client";

import React, { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";

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
  const [nav, setNav] = useState<boolean>(true);
  const [scale, setScale] = useState(1);

  const scrollRef = useRef<HTMLElement | null>(null);

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

      // Scale adjustment
      const newScale = 1 + currentScrollY / 500; // Adjust the divisor to control the scaling speed
      setScale(Math.min(newScale, 2)); // Limit scale to a maximum of 2

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setNav(false);
      } else setNav(true);
      lastScrollY = currentScrollY;
    });

    return () => {
      scroll.destroy(); // Bersihkan saat komponen unmount
    };
  }, []);

  return (
    <>
      <nav
        className={`sticky left-0 right-0 top-0 z-10 bg-[#ffe5d5] transition-transform duration-300 ${nav ? "translate-y-0" : "-translate-y-full"}`}
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

      <main ref={scrollRef} className="bg-[#ffe5d5]">
        <div className="qatar-clip h-screen overflow-hidden">
          <motion.div
            style={{ scale }}
            className="qatar-clip absolute h-screen w-full bg-[url('/qatar-img/qatar2.jpg')] bg-cover"
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

        <div className="flex h-screen w-full items-center justify-center gap-[1px]">
          {expandableImages.map((src, i) => (
            <DestinationImage
              key={i}
              src={src}
              index={i}
              // isInView={isInView}
              // activeIndex={activeIndex}
              // setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default QatarTravel;
