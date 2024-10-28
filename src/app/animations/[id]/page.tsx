"use client";

import { animationData } from "@/data/animation-data";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Animation = {
  label: string;
  component: React.ReactNode;
};

const Page = () => {
  const { id } = useParams();

  const animation = animationData.find(({ label }) => label === id);

  const NotFoundComponent = () => (
    <div className="flex h-screen items-center justify-center text-center text-3xl">
      No matching component found.
    </div>
  );

  return animation ? animation.component : <NotFoundComponent />;
};

export default Page;
