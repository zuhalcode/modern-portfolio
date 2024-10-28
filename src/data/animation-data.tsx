import FLoatingAnimation from "@/components/animations/float-me";
import TheQatarAnimation from "@/components/animations/the-qatar";

type Animation = {
  label: string;
  component: React.ReactNode;
};

export const animationData: Animation[] = [
  { label: "float-animation", component: <FLoatingAnimation /> },
  { label: "qatar-animation", component: <TheQatarAnimation /> },
];
