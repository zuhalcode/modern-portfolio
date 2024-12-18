"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { animationData } from "@/data/animation-data";
import Link from "next/link";
import Image from "next/image";

const AnimationGallery = () => {
  return (
    <div
      className="mx-auto flex items-center justify-center px-3 pb-40 pt-16"
      id="gallery"
    >
      <Card className="hidden-scrollbar max-h-screen w-full overflow-y-auto bg-primary/80 sm:max-w-xl md:max-w-5xl">
        <CardContent className="grid grid-cols-1 items-center justify-between gap-5 py-5 sm:grid-cols-2">
          {animationData.map(
            ({ label, title, imgUrl, imgAlt }, i) =>
              i < animationData.length - 2 && (
                <Link
                  key={i}
                  href={`/animations/${label}`}
                  target="_blank"
                  className="group relative col-span-1 h-[200px] w-full cursor-pointer overflow-hidden"
                >
                  <div key={i}>
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-0 transition-colors duration-300 group-hover:bg-opacity-80">
                      <p className="translate-y-[300px] text-center text-3xl font-bold uppercase tracking-widest transition-transform duration-300 group-hover:-translate-y-0">
                        {title}
                      </p>
                    </div>

                    <Image
                      src={`/animation/${imgUrl}`}
                      alt={imgAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:opacity-80"
                    />
                  </div>
                </Link>
              ),
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AnimationGallery;
