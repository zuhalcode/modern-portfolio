import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const DestinationImage = ({
  src,
  className,
  index,
  activeIndex,
  setActiveIndex,
}: {
  src: string;
  className?: string;
  index: number;
  activeIndex?: number;
  setActiveIndex: (index: number) => void;
}) => {
  useEffect(() => {
    setActiveIndex(4);
  }, [setActiveIndex]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 2 }}
      onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
      className={`relative h-screen cursor-pointer overflow-hidden transition-all duration-1000 ${activeIndex === index ? "flex-[5]" : "flex-1"}`}
    >
      <motion.div
        initial={{
          scale: 1.5,
          filter: "blur(10px)",
          transformOrigin: "right",
        }}
        animate={
          isInView
            ? { scale: 1, filter: "blur(0)" }
            : { scale: 1.5, filter: "blur(10px)" }
        }
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
