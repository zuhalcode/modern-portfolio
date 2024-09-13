import { workExperience } from "@/data/experience";
import React from "react";
import { Button } from "../ui/moving-border";

const ExperienceSection = () => {
  return (
    <section className="px-3 py-16">
      <div className="grid w-full grid-cols-1 gap-10">
        {workExperience.map((exp) => (
          <Button
            key={exp.id}
            className="flex-1 border-neutral-200 text-white"
            duration={Math.floor(Math.random() * 1000) + 5000}
          >
            <div className="flex flex-col gap-2 p-3 py-6">
              <img src="/p1.svg" alt="exp1" className="w-16" />
              <div className="">
                <h1 className="text-start text-xl font-bold">{exp.title}</h1>
                <p className="mt-3 text-start font-semibold">{exp.desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
