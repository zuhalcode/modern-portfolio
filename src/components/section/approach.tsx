"use client";
import React from "react";

import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";
import { AnimatePresence, motion } from "framer-motion";

const ApproachSection = () => {
  return (
    <section className="py-16" id="skill">
      <section className="mx-auto flex w-full flex-col items-center justify-center gap-4 px-8 lg:flex-row">
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
          desc="I begin by understanding your unique goals and challenges. Through research and collaboration, we develop a strategic roadmap that aligns with your vision and sets the foundation for success"
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>

        <Card
          title="Design & Development"
          icon={<AceternityIcon order="Phase 2" />}
          desc="Turning ideas into visually engaging and functional designs. With a focus on user experience, I build solutions that not only look great but perform seamlessly across platforms."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-yellow-600"
            colors={[[255, 255, 2]]}
          />
        </Card>

        <Card
          title="Launch & Iterate"
          icon={<AceternityIcon order="Phase 3" />}
          desc="Once project is live, the work doesn’t stop. I analyze performance, gather feedback, and continuously optimize to ensure long-term success and adaptability in an evolving digital landscape"
        >
          <CanvasRevealEffect
            animationSpeed={4}
            containerClassName="bg-emerald-900"
          />
        </Card>
      </section>
    </section>
  );
};

export default ApproachSection;

const Card = ({
  title,
  icon,
  children,
  desc,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  desc: string;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative mx-auto flex w-full max-w-sm items-center justify-center rounded-xl border border-white/[0.2] p-4 dark:border-white/[0.2] xl:h-[30rem]"
    >
      <Icon className="textwhite absolute -left-3 -top-3 h-6 w-6 dark:text-white" />
      <Icon className="textwhite absolute -bottom-3 -left-3 h-6 w-6 dark:text-white" />
      <Icon className="textwhite absolute -right-3 -top-3 h-6 w-6 dark:text-white" />
      <Icon className="textwhite absolute -bottom-3 -right-3 h-6 w-6 dark:text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="absolute left-[50%] top-[50%] mx-auto flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          {icon}
        </div>
        <h2 className="relative z-10 mt-4 text-center text-2xl font-bold text-white opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white">
          {title}
        </h2>
        <p className="relative z-10 mt-4 text-center text-sm font-semibold text-[#e4ecff] opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white">
          {desc}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div className="">
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
