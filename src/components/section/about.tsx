import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

const About = () => {
  const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication",
      desc: "",
    },
    {
      id: 2,
      title: "I am very flexible with time zone communications",
      desc: "I am very flexible with time zone communications",
    },
    {
      id: 3,
      title: "Tech enthusiast with a passion for development",
      desc: "Tech enthusiast with a passion for development",
    },
    {
      id: 4,
      title: "Do you want to start project together ?",
      desc: "Do you want to start project together ?",
    },
  ];

  return (
    <section>
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.desc}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default About;
