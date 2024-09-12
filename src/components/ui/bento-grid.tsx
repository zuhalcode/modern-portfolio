"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./gradient-bg";

import { GridGlobe } from "./grid-globe";

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
        "md:grid-row-7 mx-auto grid grid-cols-1 gap-4 p-20 md:grid-cols-6 lg:grid-cols-5 lg:gap-8",
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
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  titleClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-white/[0.1] bg-gray-800 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg,rgba(2,0,36,1) 0%, rgba(59,59,68,1) 26%, rgba(93,108,111,1) 100%)",
      }}
    >
      {/* Image */}
      {/* <div className={`${id === 6 && "flex h-full justify-center"}`}></div> */}
      {/* Image */}

      {id === 4 && (
        <BackgroundGradientAnimation>
          <div className="absolute z-50 flex items-center justify-center text-white" />
        </BackgroundGradientAnimation>
      )}

      <div
        className={cn(
          titleClassName,
          "relative z-20 flex h-auto flex-col px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10",
        )}
      >
        <div className="font-sans text-xs font-extralight text-white">
          {description}
        </div>
        <div className="mb-2 mt-2 font-sans text-lg font-bold text-white">
          {title}
        </div>
      </div>

      {id === 2 && <GridGlobe />}
    </div>
  );
};
