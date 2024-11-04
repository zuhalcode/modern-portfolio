"use client";

import { animationData } from "@/data/animation-data";

interface AnimationPageProps {
  params: { id: string };
}

const AnimationPage = ({ params: { id } }: AnimationPageProps) => {
  const animation = animationData.find(({ label }) => label === id);

  const NotFoundComponent = () => (
    <div className="flex h-screen items-center justify-center text-center text-3xl">
      No matching component found.
    </div>
  );

  return animation ? animation.component : <NotFoundComponent />;
};

export default AnimationPage;
