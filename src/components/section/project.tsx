import { portfolios } from "@/data/portfolio";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import TechIcon from "../ui/tech-icon";
import { ArrowRight, MousePointer2 } from "lucide-react";

const ProjectSection = () => {
  return (
    <div className="py-16">
      <div className="flex flex-wrap items-center justify-center gap-16 p-4">
        {portfolios.map((item, i) => (
          <div
            key={i}
            className="flex h-[25rem] w-[80vw] items-center justify-center"
          >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative flex h-[20vh] w-[80vw] items-center justify-center overflow-hidden">
                <div
                  className="relative h-full w-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/image/bg.png" alt="bgimg" />
                </div>
                <img
                  src="/p1.svg"
                  alt="bg-img"
                  className="absolute bottom-0 z-10"
                />
              </div>

              <h1 className="line-clamp-1 font-bold">{item.title}</h1>
              <p className="line-clamp-2 text-sm font-light">{item.des}</p>

              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center">
                  {item.iconLists.map((icon, i) => (
                    <div
                      key={i}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[.2] bg-black p-2"
                      style={{ transform: `translateX(-${5 * i * 2}px)` }}
                    >
                      <TechIcon component={icon} />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <span>Check live site</span>
                  <MousePointer2 className="rotate-90" size={20} />
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
