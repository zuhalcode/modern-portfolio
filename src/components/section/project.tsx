import React from "react";
import { PinContainer } from "../ui/3d-pin";
import TechIcon from "../ui/tech-icon";
import { MousePointer2 } from "lucide-react";
import { portfolios } from "@/data";
import Image from "next/image";

const ProjectSection = () => {
  return (
    <div className="pb-44 pt-16">
      <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-10 md:gap-24 xl:gap-16">
        {portfolios.map((item, i) => (
          <div
            key={i}
            className="flex w-[80vw] items-center justify-center sm:w-96 lg:min-h-[20.5rem] xl:w-80"
          >
            <PinContainer title={item.title} href={item.link}>
              <div className="relative flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:w-96 xl:w-80">
                <div
                  className="relative h-full w-full overflow-hidden bg-red-500 lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image
                    src="/image/bg.png"
                    alt="bg-img"
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                  />
                </div>

                <Image
                  src={item.img.src}
                  alt="bg-img"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                  className="absolute bottom-0 z-10"
                />
              </div>

              {/* <h1 className="mt-3 line-clamp-1 text-xs font-bold sm:text-sm">
                {item.title}
              </h1> */}
              <p className="mt-3 text-xs font-light sm:text-sm">{item.desc}</p>

              <div className="mt-5 flex items-center justify-between">
                <div className="flex max-w-44 items-center">
                  {item.iconLists.map((icon, i) => (
                    <div
                      key={i}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[.2] bg-black/60 p-2 sm:h-9 sm:w-9"
                      style={{ transform: `translateX(-${5 * i * 2}px)` }}
                    >
                      <TechIcon component={icon} />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-base">{item.nameBtn}</span>
                  <MousePointer2 className="size-4 rotate-90 sm:size-6" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
