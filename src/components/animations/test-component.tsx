"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

const navMenu: string[] = [
  "home",
  "about us",
  "shop",
  "specs",
  "category",
  "contact",
];

const Navbar = () => {
  return (
    <nav>
      <ul className="fixed z-20 flex w-full items-center justify-between text-black xl:px-20 xl:py-5">
        <li className="text-2xl font-bold">Zuhal Dev</li>
        {navMenu.map((menu, i) => (
          <li className="cursor-pointer text-lg font-medium capitalize underline-offset-2 hover:underline lg:inline">
            {menu}
          </li>
        ))}

        <Button
          variant="outline"
          className="hidden items-center rounded-full border border-black px-5 text-lg text-black lg:flex"
        >
          Buy Now
        </Button>
      </ul>
    </nav>
  );
};

const FloatingPage = () => {
  const text: string = "Hello";
  const bgClasses: string[] = [
    "bg-red-500 right-1/2",
    "bg-blue-500",
    "bg-cyan-500 left-1/2",
  ];
  return (
    <main className="h-screen bg-white">
      <Navbar />

      <div className="relative flex h-full w-full items-center justify-center">
        {bgClasses.map((bg, i) => (
          <div
            key={i}
            className={`absolute ${bg} z-0 h-48 w-40 rounded-full opacity-50 blur-3xl xl:h-[300px] xl:w-[400px]`}
          />
        ))}

        <div className="absolute z-10 -mt-10 flex flex-col gap-3">
          <div className="text-center">
            {text.split("").map((letter, i) =>
              letter === " " ? (
                <span className="xl:inline" key={i}>
                  &nbsp; &nbsp; &nbsp;
                </span>
              ) : (
                <motion.span
                  whileHover={{ y: -20 }}
                  whileTap={{ y: -20 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  key={i}
                  className="inline-flex cursor-default select-none text-8xl font-bold uppercase tracking-widest text-slate-800"
                >
                  {letter}
                </motion.span>
              ),
            )}
          </div>
          <p className="maxwsm mx-auto text-center font-medium text-slate-800 xl:max-w-xl xl:text-2xl">
            I'm Zuhal, a web developer dedicated to creating modern innovative
            and responsive websites.
          </p>
        </div>
      </div>
    </main>
  );
};

export default FloatingPage;
