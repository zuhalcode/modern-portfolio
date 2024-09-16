import React from "react";
import { Button } from "../ui/moving-border";
import { experiences } from "@/data";

const ExperienceSection = () => {
  return (
    <section className="px-3 pb-64 pt-16">
      <div className="mx-auto grid w-full grid-cols-1 gap-10 md:w-3/4">
        {experiences.map((exp) => (
          <Button
            key={exp.id}
            className="maxw flex-1 border-neutral-200 text-white"
            duration={Math.floor(Math.random() * 1000) + 5000}
          >
            <div className="flex flex-col items-center justify-center gap-2 p-3 py-6 md:flex-row md:items-start md:gap-10 md:px-10">
              <div className="flex flex-col items-center gap-5 md:flex-row">
                <img
                  src="/exp1.svg"
                  alt="exp1"
                  className="w-16 md:w-20 lg:w-28"
                />
                <div className="flex flex-col">
                  <h1 className="text-center text-xl font-bold sm:text-start">
                    {exp.title}
                  </h1>
                  <p className="mt-3 text-center font-semibold sm:text-start">
                    {exp.desc}
                  </p>
                </div>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
