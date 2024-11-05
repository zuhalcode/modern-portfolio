import { motion, useAnimation, useInView } from "framer-motion";
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
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const handleOnClick = () => {
    setActiveIndex(activeIndex === index ? -1 : index);
    controls.start({ x: 5000 }).then(() => {
      controls.start({ x: 0 });
    });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ x: 0 }}
      animate={controls}
      transition={{ duration: 0.1 }}
      onClick={handleOnClick}
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
          className={`object-cover ${className} [mask-image:linear-gradient(to_bottom,transparent,black_0%,black_50%,transparent)]`}
        />
      </motion.div>
    </motion.div>
  );
};

export default DestinationImage;
