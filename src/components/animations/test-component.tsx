"use client";

import { useLocomotiveScroll } from "@/hooks/use-locomotive-scroll";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { Search } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import QatarImage from "./qatar-travel/qatar-image";

const Navbar = ({ nav }: { nav: boolean }) => {
  return (
    <nav
      className={`sticky left-0 right-0 top-0 z-20 bg-[#ffe5d5] transition-transform duration-300 ${!nav && "-translate-y-full"}`}
    >
      <ul className="flex w-full items-center justify-between px-5 py-3 text-black">
        <li className="cursor-pointer text-lg font-bold">Zuhal Travel</li>

        <ul className="flex w-3/4 items-center justify-between text-black">
          <li className="cursor-pointer text-sm font-medium capitalize hover:underline">
            Appartment
          </li>
          <li className="cursor-pointer text-sm font-medium capitalize hover:underline">
            Where to go
          </li>
          <li className="cursor-pointer text-sm font-medium capitalize hover:underline">
            Contact Us
          </li>
          <li className="">Become a Host</li>
        </ul>
      </ul>
    </nav>
  );
};

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

  const { scrollInstance, scrollRef } = useLocomotiveScroll();

  const [scale, setScale] = useState<number>(1);
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
      <main ref={scrollRef} className="space-y-24 bg-[#ffe5d5] pb-12">
        <div className="polygon-clip min-h-screen overflow-hidden">
          <motion.div
            style={{ scale }}
            className="absolute h-screen w-full bg-[url('/qatar-img/qatar2.jpg')] bg-cover"
          />

          <div className="absolute m-3 ml-44 mt-10 space-y-5">
            <h2 className="max-w-md text-5xl font-semibold">
              Enjoy the moment while visiting Qatar
            </h2>

            <div className="flex items-center gap-3 rounded-md bg-white px-5 py-3 text-black shadow-lg">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search Location"
                className="w-96 text-sm outline-none placeholder:text-black"
              />
            </div>
          </div>
        </div>

        <div className="h-full min-h-screen">
          <div className="pt-4 text-center uppercase text-black">
            <h1
              className={cn(
                "text-4xl font-medium tracking-widest",
                playfair.className,
              )}
            >
              Featured
            </h1>
            <h1
              className={cn(
                "text-4xl font-medium tracking-widest",
                playfair.className,
              )}
            >
              In Qatar
            </h1>
          </div>

          <div className="py6 flex w-full items-center justify-center gap-7 px-5 py-6">
            <QatarImage src="/qatar-img/qatar3.jpg" width={250} height={350} />
            <QatarImage src="/qatar-img/qatar4.jpg" width={600} height={450} />
            <QatarImage src="/qatar-img/qatar5.jpg" width={350} height={350} />
          </div>
        </div>
      </main>
    </>
  );
};

export default QatarTravel;
