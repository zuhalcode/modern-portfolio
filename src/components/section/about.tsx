import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

const About = () => {
  const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className:
        "order-1 md:col-span-6 lg:col-span-3 md:row-span-2 lg:row-span-1 lg:min-h-[60vh] min-h-[40vh] ",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className:
        "order-2 md:order-3 lg:col-span-2 md:col-span-3 md:row-span-2 lg:row-span-1 md:max-h-[50vh] lg:max-h-[60vh]",
      imgClassName: "",
      titleClassName: "justify-start text-center sm:text-start  top-5 ",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className:
        "order-3 md:order-4 lg:order-3 md:col-span-3 lg:col-span-2 md:row-span-1 lg:row-span-1 ",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
    {
      id: 4,
      title: "Do you want to start a project together?",
      description: "",
      className:
        "order-4 md:order-2 lg:order-4 md:col-span-3 lg:col-span-3 md:row-span-1 md:max-h-[30vh] ",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full text-center",
      img: "",
      spareImg: "",
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
            description={item.description}
            className={item.className}
            titleClassName={item.titleClassName}
            img={item.img}
            spareImg={item.spareImg}
            imgClassName={item.imgClassName}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default About;
