"use client";

import { JetBrains_Mono } from "next/font/google";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import Socials from "../ui/socials";
import { motion } from "framer-motion";
import Image from "next/image";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

const PersonalSection = () => {
  return (
    <section className={`${jetBrainsMono.className} w-full py-16`}>
      <div className="flex flex-col items-center justify-between gap-6 xl:flex-row">
        <div className="order-2 space-y-6 text-center xl:order-1">
          <span className="font-semibold">Website Developer</span>
          <h1 className="text-5xl">
            Hi I'm
            <br />
            <span className="text-green-400">
              Mohammad Dzakiyyul Ashfiya' El Arif
            </span>
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            repellendus qui nemo itaque sint nostrum nulla possimus deserunt
            praesentium a!
          </p>

          {/* Socials */}
          <div className="flex flex-col items-center justify-center gap-6">
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2 bg-gray-900 uppercase"
            >
              <span>Download CV</span>
              <Download />
            </Button>

            <div className="">
              <Socials />
            </div>
          </div>
          {/* Socials */}
        </div>

        {/* Personal Image */}
        <div className="order-1 xl:order-2">
          <div className="relative h-full w-full rounded-full">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
              }}
            >
              <div className="absolute h-[300px] w-[300px] rounded-full [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_55%,transparent)]">
                <Image
                  src="/image/profile.png"
                  alt=""
                  priority
                  quality={100}
                  fill
                  className="rounded-full object-contain p-2"
                />
              </div>
            </motion.div>
            {/* Image */}

            <motion.svg
              className="h-[300px] w-[300px]"
              fill="transparent"
              viewBox="0 0 506 506"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.circle
                cx="253"
                cy="253"
                stroke="#00ff99"
                r="250"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: "24 10 0 0" }}
                animate={{
                  strokeDasharray: [
                    "15 120 25 25",
                    "16 25 92 72",
                    "4 250 22 22",
                  ],
                  rotate: [120, 360],
                  transition: {
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              />
            </motion.svg>
          </div>
        </div>
        {/* Personal Image */}
      </div>
    </section>
  );
};

export default PersonalSection;
