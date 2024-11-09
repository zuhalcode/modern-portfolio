import { useEffect, useRef, useState } from "react";

interface LocomotiveScrollOptions {
  el?: HTMLElement;
  smooth?: boolean;
  [key: string]: any;
}

export function useLocomotiveScroll(options: LocomotiveScrollOptions = {}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [scrollInstance, setScrollInstance] = useState<LocomotiveScroll | null>(
    null,
  );

  useEffect(() => {
    let locomotiveScroll: LocomotiveScroll | null = null;

    const initScroll = async () => {
      const LocomotiveScrollModule = (await import("locomotive-scroll"))
        .default;

      if (scrollRef.current) {
        locomotiveScroll = new LocomotiveScrollModule({
          el: scrollRef.current,
          smooth: true,
          ...options,
        });

        setScrollInstance(locomotiveScroll);
      }
    };

    initScroll();

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return { scrollRef, scrollInstance };
}
