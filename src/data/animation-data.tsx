import FloatingAnimationPage from "@/components/animations/float-animation";
import QatarTravel from "@/components/animations/qatar-travel/page";
import TestComponent from "@/components/animations/test-component";

type Animation = {
  label: string;
  component: React.ReactNode;
};

export const animationData: Animation[] = [
  { label: "float-animation", component: <FloatingAnimationPage /> },
  { label: "qatar-travel", component: <QatarTravel /> },
  { label: "test", component: <TestComponent /> },
];
