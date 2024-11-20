"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Clock,
  Globe,
  Group,
  Locate,
  MapPin,
  Menu,
  Play,
  Search,
  User,
} from "lucide-react";

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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PositionPoint } from "@react-three/drei";

const data = [
  {
    title: "Discover Qatar",
    heading: "Explore qatar",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, dignissimos.",
    img: "/qatar-img/destination.jpg",
    bgImg: "/qatar-v2-img/building.jpg",
  },
  {
    title: "Place to stay",
    heading: "Find place to stay",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, dignissimos.",
    img: "/qatar-img/destination2.jpg",
    bgImg: "/qatar-v2-img/room.jpg",
  },
  {
    title: "Discover Qatar",
    heading: "Welcome to qatar",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, dignissimos.",
    img: "/qatar-img/destination3.jpg",
    bgImg: "/qatar-v2-img/sunset.jpg",
  },
];

const searchBannerData = [
  { title: "Qatar", desc: "Choose the destination", icon: Locate },
  { title: "Check In", desc: "Add Date", icon: Clock },
  { title: "Check Out", desc: "Add Date", icon: Clock },
  { title: "Visitors", desc: "Add Guest", icon: Group },
];

const placeData = [
  {
    name: "Luxurious Pearl Villa",
    location: "The Pearl, Daha",
    rating: 4.8,
    price: 1200,
    img: "/qatar-v2-img/house.jpg",
  },
  {
    name: "Sunset Bay Resort",
    location: "Sunrise Beach, Maribu",
    rating: 4.6,
    price: 850,
    img: "/qatar-v2-img/house2.jpg",
  },
  {
    name: "Mountain Bliss Retreat",
    location: "Highlands, Pura",
    rating: 4.9,
    price: 1500,
    img: "/qatar-v2-img/house3.jpg",
  },
  {
    name: "Ocean Breeze Hotel",
    location: "Coastal Line, Sevilla",
    rating: 4.7,
    price: 950,
    img: "/qatar-v2-img/house4.jpg",
  },
  {
    name: "Urban Comfort Suites",
    location: "City Center, Megapolis",
    rating: 4.3,
    price: 700,
    img: "/qatar-v2-img/house5.jpg",
  },
  {
    name: "Lakeview Serenity Cabin",
    location: "Emerald Lake, Carintha",
    rating: 4.8,
    price: 1100,
    img: "/qatar-v2-img/house6.jpg",
  },
  {
    name: "Tropical Haven Villa",
    location: "Paradise Island, Sumara",
    rating: 4.5,
    price: 1300,
    img: "/qatar-v2-img/room2.jpg",
  },
  {
    name: "Arctic Glow Chalet",
    location: "Frostville, Northland",
    rating: 4.9,
    price: 1800,
    img: "/qatar-v2-img/room3.jpg",
  },
];

const QatarTravelV2 = () => {
  const { scrollRef, scrollInstance } = useLocomotiveScroll();

  const [scale, setScale] = useState<number>(1);
  const [nav, setNav] = useState<boolean>(true);

  const [activeIndex, setActiveIndex] = useState<number>(data.length - 1);
  const [previousIndex, setPreviousIndex] = useState<number>(data.length - 1);

  const [hasChanged, setHasChanged] = useState<boolean>(false);

  let lastScrollY = 0;

  const handleOnClick = (index: number) => {
    setActiveIndex(index);
    setPreviousIndex(activeIndex);
    setHasChanged(true);
  };

  const positions = [
    { top: 88, right: 134 },
    { top: 175, right: 134 },
    { top: 263, right: 134 },
  ];

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
      <main ref={scrollRef} className={`relative z-0 overflow-hidden bg-black`}>
        {/* Overlay Background Default */}
        <motion.div
          key={previousIndex}
          initial={{
            opacity: 1,
            backgroundRepeat: "no-repeat",
            top: 0,
            right: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 0.5 }} // Transisi yang sangat cepat
          className="bg-custom absolute z-10 w-full bg-black"
          style={{
            backgroundImage: `url(${data[previousIndex].bgImg})`,
          }}
        />
        {/* Overlay Default Bg Image */}

        {/* Overlay Bg Image */}
        <motion.div
          key={activeIndex}
          initial={
            hasChanged
              ? {
                  borderRadius: 100,
                  width: 100,
                  height: 100,
                  top: positions[activeIndex].top,
                  right: positions[activeIndex].right,
                }
              : { opacity: 1 }
          }
          animate={
            hasChanged
              ? {
                  borderRadius: [1000, 1000, 1000, 0],
                  opacity: [0, 0.1, 0.2, 0.3, 1],
                  width: "100vw",
                  height: "200vh",
                  top: [
                    positions[activeIndex].top,
                    positions[activeIndex].top - 200,
                    0,
                  ],
                  right: [
                    positions[activeIndex].right,
                    positions[activeIndex].right - 200,
                    0,
                  ],
                }
              : {}
          }
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="bg-custom absolute z-20 h-[200vh] w-full bg-black"
          style={{ background: `url(${data[activeIndex].bgImg})` }}
        />
        {/* Overlay Bg Image */}

        {/* Overlay Heading */}
        <motion.h1
          initial={{ top: "4rem", opacity: 0 }}
          animate={{ top: "5rem", opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute left-10 top-20 z-20 inline-block bg-gradient-to-b from-white to-yellow-700 bg-clip-text text-7xl font-bold uppercase text-transparent"
        >
          {data[activeIndex].heading}
        </motion.h1>
        {/* Overlay Heading */}

        {/* Overlay Cloud */}
        <motion.div
          initial={{ left: -800, opacity: 0.5 }}
          animate={{ left: -200, opacity: 0.9 }}
          transition={{ duration: 10, ease: "easeIn" }}
          style={{
            background: `url("/qatar-v2-img/cloud.png")`,
            backgroundSize: "120vw 100vh",
            backgroundRepeat: "no-repeat",
          }}
          className="absolute inset-0 top-52 z-20"
        />
        {/* Overlay Cloud */}

        <Navbar />

        <ul className="relative z-20 mx-auto mt-12 flex w-3/4 flex-col items-end justify-end gap-10 outline-none">
          {data.map((item, i) => (
            <motion.li
              key={i}
              className="relative flex h-12 w-full items-center justify-end"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7 }}
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
                  className={`z-30 cursor-pointer rounded-full border-[1.4px] border-white object-cover transition-all duration-300`}
                  style={{ scale: activeIndex === i ? 2 : 1 }}
                />
              </motion.div>

              {activeIndex === i && (
                <div className="order-1 flex items-center gap-5 pr-8">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="h-32 w-[6px] rounded-full bg-white"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="max-w-sm space-y-3"
                  >
                    <h1 className="text-3xl">{item.title}</h1>
                    <p className="max-w-48 text-base font-normal">
                      {item.desc}
                    </p>
                  </motion.div>

                  <motion.span
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
                    className="h-[4px] w-16 rounded-full bg-white"
                  />
                </div>
              )}
            </motion.li>
          ))}
        </ul>

        <div className="mt-36">
          {/* Search Bar */}
          <div className="relative z-30 mx-auto w-10/12 rounded-[2rem] bg-white shadow-lg">
            <ul className="flex items-center justify-between px-16 py-5">
              {searchBannerData.map((data, i) => (
                <li key={i} className="space-y-2 text-black">
                  <div className="flex items-center gap-3">
                    <data.icon size={26} className="text-slate-700" />
                    <span className="text-xl font-semibold">{data.title}</span>
                  </div>
                  <p className="pl-10 text-base">{data.desc}</p>
                </li>
              ))}
              <li className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
                <Play />
              </li>
            </ul>
          </div>
          {/* Search Bar */}
        </div>

        <div className="relative z-20 mx-auto min-h-screen w-10/12 py-10">
          <div className="flex items-center justify-between">
            <h1 className="py-16 text-3xl font-bold text-white">
              Recommended Places to Stay
            </h1>

            <Button
              variant="outline"
              className="rounded-full border-white font-medium text-white"
            >
              See All
            </Button>
          </div>

          <ul className="grid h-full w-full grid-cols-4 gap-7">
            {placeData.map(({ name, price, location, rating, img }) => (
              <motion.li whileTap={{ scale: 0.8 }} className="cursor-pointer">
                <Card
                  className="relative flex flex-col justify-between gap-44 overflow-hidden border-none px-0 py-2"
                  style={{
                    background: `url(${img})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="absolute inset-0 z-0 bg-black bg-opacity-50" />

                  <CardContent className="relative z-10 px-2">
                    <div className="flex items-center justify-between">
                      <p className="w-fit rounded-lg bg-white px-2 py-2">
                        ${price} / night
                      </p>
                      <Search size={32} className="rounded-full bg-white p-2" />
                    </div>
                  </CardContent>

                  <CardFooter className="relative z-10 flex-col items-start gap-2 p-0 px-2">
                    <p className="text-lg font-medium text-white">{name}</p>
                    <p className="flex gap-1 text-white">
                      <MapPin />
                      {location}
                    </p>
                    <p className="text-white">{rating}</p>
                  </CardFooter>
                </Card>
              </motion.li>
            ))}
          </ul>
        </div>

        <footer className="relative bottom-0 z-20 mt-10 flex w-full border-b border-t border-black bg-transparent bg-white py-3 text-black">
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
