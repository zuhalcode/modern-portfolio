import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function QatarImage({
  width = 300,
  height = 300,
  src,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
  src: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const [responsiveWidth, setResponsiveWidth] = useState(width);
  const [responsiveHeight, setResponsiveHeight] = useState(height);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth <= 768) {
        setResponsiveWidth(window.innerWidth * 0.9); // 90% of viewport width on small screens
        setResponsiveHeight(window.innerHeight * 0.4); // 40% of viewport height on small screens
      } else if (window.innerWidth <= 1200) {
        setResponsiveWidth(width * 0.8); // 80% of the original width on medium screens
        setResponsiveHeight(height * 0.8); // 80% of the original height on medium screens
      } else {
        setResponsiveWidth(width); // Original width on large screens
        setResponsiveHeight(height); // Original height on large screens
      }
    };

    window.addEventListener("resize", updateSize);
    updateSize(); // Call it once to set initial size

    return () => window.removeEventListener("resize", updateSize);
  }, [width, height]);

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      style={{ width: `${responsiveWidth}px`, height: `${responsiveHeight}px` }}
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
}
