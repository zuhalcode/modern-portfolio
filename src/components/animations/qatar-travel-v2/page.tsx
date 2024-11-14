"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Globe, Menu, Search, User } from "lucide-react";

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
import Image from "next/image";

const data = [
  {
    title: "Discover Qatar",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, dignissimos.",
    img: "/qatar-img/destination.jpg",
  },
  {
    title: "Discover Qatar",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, dignissimos.",
    img: "/qatar-img/destination.jpg",
  },
  {
    title: "Discover Qatar",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, dignissimos.",
    img: "/qatar-img/destination.jpg",
  },
];

const QatarTravelV2 = () => {
  const { scrollRef, scrollInstance } = useLocomotiveScroll();

  const [scale, setScale] = useState<number>(1);
  const [nav, setNav] = useState<boolean>(true);
  const [activeIndex, setActiveIndex] = useState<number>(data.length - 1);

  const entertainmentRef = useRef(null);
  const entertainmentIsInView = useInView(entertainmentRef, { once: false });

  const culturalRef = useRef(null);
  const culturalIsInView = useInView(culturalRef, { once: false });

  let lastScrollY = 0;

  const handleOnClick = (index: number) => {
    setActiveIndex(index);
    console.log(`active ${activeIndex} === index ${index}`);
  };

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
      <main className="space-y-12 bg-[#ffe5d5] bg-[url('/qatar-v2-img/sunset.jpg')] bg-cover bg-center">
        <Navbar />
        <ul className="relative z-20 mx-auto flex w-3/4 flex-col items-end justify-end gap-10 outline-none">
          {data.map((item, i) => (
            <motion.li
              key={i}
              className="relative flex h-12 w-full cursor-pointer items-center justify-end"
            >
              <motion.div
                onClick={() => handleOnClick(i)}
                className="relative order-2 h-12 w-12"
              >
                {activeIndex === i && (
                  <>
                    <motion.div
                      initial={{ scale: 1, opacity: 0 }}
                      animate={{ scale: 6, opacity: 0.4 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 z-0 rounded-full border border-white border-opacity-50"
                    />
                    <motion.div
                      initial={{ scale: 1, opacity: 0 }}
                      animate={{ scale: 4.5, opacity: 0.4 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-[2px] z-0 rounded-full border border-white border-opacity-50"
                    />
                  </>
                )}

                <Image
                  src={item.img}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                  alt=""
                  className={`z-10 rounded-full border-[1.4px] border-white object-cover transition-all duration-300`}
                  style={{ scale: activeIndex === i ? 2 : 1 }}
                />
              </motion.div>

              {activeIndex === i && (
                <motion.div className="order-1 flex cursor-auto items-center gap-5 px-10">
                  <span className="h-32 w-[6px] rounded-full bg-white" />
                  <div className="max-w-sm space-y-3">
                    <h1 className="text-4xl">{item.title}</h1>
                    <p className="max-w-48 text-lg">{item.desc}</p>
                  </div>

                  <span className="h-[4px] w-12 rounded-full bg-white"></span>
                </motion.div>
              )}
            </motion.li>
          ))}
        </ul>
        <div className="min-h-screen"></div>

        <footer className="relative bottom-0 flex w-full border-b border-t border-black bg-transparent bg-white py-3 text-black">
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

const Navbar = () => {
  return (
    <nav
      className={`sticky left-0 right-0 top-0 z-20 bg-transparent transition-transform duration-300`}
    >
      <ul className="z-20 flex w-full items-center justify-between px-5 py-3 text-white xl:px-20">
        <ul>
          <li className="text-2xl font-semibold">Zuhal Travel</li>
        </ul>

        <ul className="hidden w-1/3 items-center justify-between px-5 sm:flex">
          <li className="cursor-pointer text-base font-medium capitalize hover:underline">
            Appartment
          </li>
          <li className="cursor-pointer text-base font-medium capitalize hover:underline">
            Where to go
          </li>
          <li className="cursor-pointer text-base font-medium capitalize hover:underline">
            Contact Us
          </li>
        </ul>

        <ul className="flex items-center gap-5">
          <li className="">Become a host</li>
          <li className="">
            <Globe />
          </li>
          <li className="flex gap-3 rounded-lg border border-white px-3 py-2">
            <Menu />
            <User />
          </li>
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

export default QatarTravelV2;
