import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";

const DestinationImage = ({
  src,
  className,
  index,
  isInView,
  activeIndex,
  setActiveIndex,
}: {
  src: string;
  className?: string;
  index: number;
  isInView?: boolean;
  activeIndex?: number;
  setActiveIndex?: (index: number) => void;
}) => {
  // useEffect(() => {
  //   if (!isInView) setActiveIndex(4);
  // }, [isInView, setActiveIndex]);

  return (
    <motion.div
      transition={{ duration: 0.5, ease: "easeInOut" }}
      // onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
      className={`relative h-screen cursor-pointer overflow-hidden pt-24 transition-all duration-1000 ${activeIndex === index ? "flex-[5]" : "flex-1"}`}
    >
      <motion.div
        initial={{ scale: 1.5, filter: "blur(10px)", transformOrigin: "right" }}
        animate={{ scale: 1, filter: "blur(0)" }}
        transition={{ duration: 1, ease: "easeIn" }}
        className={`absolute inset-0`}
      >
        <Image
          src={src}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          alt=""
          className={`object-cover ${className}`}
        />
      </motion.div>
    </motion.div>
  );
};

export default DestinationImage;
