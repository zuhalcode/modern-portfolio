import { color, motion, Variants } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import {
  AlignJustify,
  BicepsFlexed,
  BriefcaseBusiness,
  GalleryHorizontalEnd,
  Home,
  Laptop,
  Phone,
  Plus,
  User,
  Wrench,
} from "lucide-react";

import React, { useRef, useState } from "react";

const ModernCircularMenu = ({
  scroll,
}: {
  scroll: LocomotiveScroll | null;
}) => {
  const menu = [
    { name: "hero", icon: Home, color: "#ff2c2c" },
    { name: "about", icon: User, color: "#f67731" },
    { name: "gallery", icon: GalleryHorizontalEnd, color: "#edf12b" },
    { name: "toolbox", icon: Wrench, color: "#92e926" },
    { name: "portfolio", icon: Laptop, color: "#55ff49" },
    { name: "experince", icon: BriefcaseBusiness, color: "#29dbb8" },
    { name: "skill", icon: BicepsFlexed, color: "#473be5" },
    { name: "contact", icon: Phone, color: "#e32fdf" },
  ];

  const [isReadyToShow, setIsReadyToShow] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(false);

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  const handleOnClick = (href: string) => scroll?.scrollTo(`#${href}`);

  const handleToggleMenu = async () => {
    setIsReadyToShow(!isReadyToShow);
    await delay(500);
    setIsShow(!isShow);
  };

  const calculatePosition = (angle: number, radius: number) => ({
    x: radius * Math.cos((angle * Math.PI) / 180),
    y: radius * Math.sin((angle * Math.PI) / 180),
  });

  const closeRadius: number = 60;
  const openRadius: number = -120;

  const menuVariants = (
    index: number,
    color: string,
    angle: number,
    xClose: number,
    yClose: number,
    xOpen: number,
    yOpen: number,
  ): Variants => {
    const value: number = 100;
    let xResult: number = xClose;
    let yResult: number = yClose;

    switch (index) {
      case 0:
        xResult = xClose + value;
        yResult = yClose;
        break;
      case 1:
        xResult = xClose + value;
        yResult = yClose + value;
        break;
      case 2:
        xResult = xClose;
        yResult = yClose + value;
        break;
      case 3:
        xResult = xClose - value;
        yResult = yClose + value;
        break;
      case 4:
        xResult = xClose - value - 30;
        yResult = yClose;
        break;
      case 5:
        xResult = xClose - value;
        yResult = yClose - value;
        break;
      case 6:
        xResult = xClose;
        yResult = yClose - value;
        break;
      case 7:
        xResult = xClose + value;
        yResult = yClose - value;
        break;
    }

    return {
      state: {
        x: xClose,
        y: yClose,
        width: 45,
        height: 12,
        rotate: `${angle + 90}deg`,
        backgroundColor: `${color}`,
      },
      stateOpen: {
        x: [xClose, xResult, xOpen],
        y: [yClose, yResult, yOpen],
        backgroundColor: ``,
        transition: {
          x: {
            delay: index * 0.1,
          },
          y: {
            delay: index * 0.1,
          },
        },
      },
      open: { width: 60, height: 60, rotate: "45deg" },
    };
  };

  return (
    <motion.div
      drag
      dragElastic={0.3}
      dragConstraints={{ top: 10, bottom: 400 }} // Boundary Y Axis
      dragTransition={{
        power: 0.5,
        timeConstant: 200,
        bounceStiffness: 100,
        bounceDamping: 10,
        modifyTarget: (target) => {
          const screenWidth = window.innerWidth;
          const menuWidth = 200;

          const leftBoundary = 0;
          const rightBoundary = screenWidth - menuWidth;

          // Boundary X Axis
          const clampedX = Math.max(
            leftBoundary,
            Math.min(target, rightBoundary),
          );

          return clampedX;
        },
      }}
      className="absolute left-[84%] top-48 z-20 hidden items-center justify-center xl:flex"
    >
      <motion.span
        whileTap={{ rotate: 315 }}
        transition={{ duration: 0.5 }}
        className="absolute z-30 flex h-24 w-24 cursor-pointer items-center justify-center rounded-full"
        onClick={handleToggleMenu}
      >
        {isReadyToShow ? (
          <Plus color="white" size={48} className="rotate-45" />
        ) : (
          <AlignJustify color="white" size={48} />
        )}
      </motion.span>

      <motion.ul className="relative z-20 flex items-center justify-center">
        {menu.map((item, i) => {
          const angle = (360 / menu.length) * i;
          const { x: xClose, y: yClose } = calculatePosition(
            angle,
            closeRadius,
          );
          const { x: xOpen, y: yOpen } = calculatePosition(angle, openRadius);
          const { color } = item;
          const colorClassName = `text-[${color}]`;

          return (
            <motion.li
              key={i}
              variants={menuVariants(
                i,
                color,
                angle,
                xClose,
                yClose,
                xOpen,
                yOpen,
              )}
              initial="state"
              animate={[
                isReadyToShow ? "stateOpen" : "",
                isReadyToShow && isShow ? "open" : "",
              ]}
              transition={{ duration: 0.5 }}
              className={`group absolute z-20 flex cursor-pointer items-center justify-center overflow-hidden rounded-md border backdrop-blur`}
              whileHover={
                isShow
                  ? {
                      backgroundColor: `${item.color}`,
                      color: "black",
                    }
                  : {}
              }
              style={{
                boxShadow: `0 0 10px 1px ${item.color}`,
                border: `${item.color}`,
                color: `${item.color}`,
              }}
              onClick={() => handleOnClick(item.name)}
            >
              <item.icon
                className={`absolute z-10 -rotate-45 ${colorClassName}`}
              />
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};

export default ModernCircularMenu;
