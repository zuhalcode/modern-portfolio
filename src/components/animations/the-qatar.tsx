import React, { useRef } from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import Image from "next/image";

import { Playfair_Display } from "next/font/google";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const TheQatarAnimation = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 2]);

  return (
    <main className="bg-[#ffe5d5]">
      <nav className="bg-[#ffe5d5]">
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

      <div className="qatar-clip relative h-screen overflow-hidden">
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

      <div className="space-y-2 text-center uppercase text-black">
        <h1
          className={`${playfair.className} text-5xl font-medium tracking-widest`}
        >
          Featured
        </h1>
        <h1 className="text-6xl font-light tracking-widest">Activities</h1>
        <h1
          className={`${playfair.className} text-5xl font-medium tracking-widest`}
        >
          In Qatar
        </h1>
      </div>

      <div className="flex w-full items-center justify-center gap-7 py-10">
        <QatarImage src="/qatar-img/qatar3.jpg" width={250} height={320} />
        <QatarImage src="/qatar-img/qatar4.jpg" width={550} height={400} />
        <QatarImage src="/qatar-img/qatar5.jpg" width={300} height={300} />
      </div>
    </main>
  );
};

export const QatarImage = ({
  width = 300,
  height = 300,
  src,
}: {
  width?: number;
  height?: number;
  src: string;
}) => {
  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, [0, 500], [0, -30]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div
      ref={ref}
      className="relative overflow-hidden"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={isInView ? { opacity: 1, y: -30 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute h-full w-full"
      >
        <Image
          src={src}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt=""
          className="object-cover"
        />
      </motion.div>
    </div>
  );
};

export default TheQatarAnimation;
