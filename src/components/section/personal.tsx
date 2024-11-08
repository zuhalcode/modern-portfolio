"use client";

import { JetBrains_Mono } from "next/font/google";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import Socials from "../ui/socials";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { useRef } from "react";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

const PersonalSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      ref={ref}
      className={`${jetBrainsMono.className} w-full pb-24 pt-16`}
      id="about"
    >
      <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:justify-between lg:px-14 xl:px-32">
        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="order-2 space-y-6 text-center lg:order-1 lg:text-start"
        >
          <h1 className="text-3xl">
            <span className="ml-3">Hello I'm</span>
            <br />
            <div className="px-3 pt-3">
              <span className="text-primary-fourth">
                <TypeAnimation
                  sequence={[
                    "Zuhal",
                    2000,
                    "Mohammad Dzakiyyul Ashfiya' El Arif",
                    2000,
                    "Website Developer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={10}
                  repeat={Infinity}
                  className="text-2xl font-bold"
                />
              </span>
            </div>
          </h1>
          <p className="max-w-lg px-3 text-justify text-sm leading-relaxed">
            Individual with a strong passion for Website Development. Developing
            various projects using JavaScript frameworks such as ReactJS,
            NextJS, and NestJS, integrated with TailwindCSS to build modern,
            efficient, and scalable web applications.
          </p>

          {/* Socials */}
          <div className="flex flex-col items-center justify-center gap-6 lg:ml-3 lg:items-start lg:justify-start">
            <Link href="cv.pdf" target="_blank">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 uppercase"
              >
                <span>Download CV</span>
                <Download />
              </Button>
            </Link>

            <div className="">
              <Socials />
            </div>
          </div>
          {/* Socials */}
        </motion.div>
        {/* About Me */}

        {/* Personal Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          className="order-1 lg:order-2"
        >
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
                stroke="#00FDB6"
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
        </motion.div>
        {/* Personal Image */}
      </div>
    </section>
  );
};

export default PersonalSection;
