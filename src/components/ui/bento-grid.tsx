"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./gradient-bg";

import { GridGlobe } from "./grid-globe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./magic-button";
import { Copy } from "lucide-react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "md:grid-row-7 mx-auto grid grid-cols-1 gap-4 px-3 py-16 md:grid-cols-6 lg:grid-cols-5 lg:gap-8 lg:p-20",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  titleClassName,
  img,
  imgClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(true);

  const handleOnCopy = () => {
    navigator.clipboard.writeText("zuhalcode@gmail.com");
    setCopied(true);
  };

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className={cn(
        "group/bento relative row-span-1 flex flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.1] shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg,rgba(2,0,36,1) 0%, rgba(59,59,68,1) 26%, rgba(93,108,111,1) 100%)",
      }}
    >
      {/* Image */}
      <div className={`${id === 4 && "flex justify-center"} h-full`}>
        <div className="absolute h-full w-full">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute -bottom-5 right-0 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="h-full w-full object-cover object-center"
            />
          )}
        </div>
      </div>
      {/* Image */}

      {id === 4 && (
        // add background animation , remove the p tag
        <BackgroundGradientAnimation>
          <div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center px-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-7xl"></div>
        </BackgroundGradientAnimation>
      )}

      {/* Title and Description */}
      <div
        className={cn(
          titleClassName,
          "relative z-20 flex h-auto flex-col px-5 transition duration-200 group-hover/bento:translate-x-2 lg:p-10",
        )}
      >
        <div className="font-sans text-xs font-extralight text-white">
          {description}
        </div>
        <div className="mb-2 mt-2 font-sans text-lg font-bold text-white">
          {title}
        </div>
      </div>
      {/* Title and Description */}

      {id === 4 && (
        <div className="relative mt-5">
          <div
            className={`absolute -bottom-16 right-0 sm:left-0 ${
              copied ? "block" : "block"
            }`}
          >
            {/* <img src="/confetti.gif" alt="confetti" /> */}
            <Lottie options={defaultOptions} height={300} width={300} />
          </div>

          <div className="mx-auto -mt-3 mb-3 flex flex-col items-center justify-center">
            <MagicButton
              handleOnEvent={handleOnCopy}
              className="mx-auto h-10 text-xs"
            >
              <Copy />
              {copied ? "Email is copied" : "Copy My Email"}
            </MagicButton>
          </div>
        </div>
      )}
      {id === 2 && <GridGlobe />}
    </div>
  );
};
