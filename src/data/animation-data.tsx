import FLoatingAnimation from "@/components/animations/float-me";
import QatarTravel from "@/components/animations/qatar-travel/page";
import TestComponent from "@/components/animations/test-component";

type Animation = {
  label: string;
  component: React.ReactNode;
};

export const animationData: Animation[] = [
  { label: "float-animation", component: <FLoatingAnimation /> },
  { label: "qatar-travel", component: <QatarTravel /> },
  { label: "test", component: <TestComponent /> },
];
