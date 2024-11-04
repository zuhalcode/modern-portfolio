import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

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

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
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
}
