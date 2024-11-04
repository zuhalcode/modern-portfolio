"use client";

import React, { useEffect, useRef } from "react";

const TestComponent = () => {
  const scrollRef = useRef<HTMLElement | null>(null);
  let locomotiveScroll: any = null;

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      locomotiveScroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
      });

      locomotiveScroll.update();
    })();

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <main ref={scrollRef} className="">
      <div className="h-screen bg-green-500"></div>
      <div className="h-screen bg-red-500"></div>
    </main>
  );
};

export default TestComponent;
