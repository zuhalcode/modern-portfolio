// components/ClientLayout.tsx
"use client";

import { useEffect, useState } from "react";
import SplashScreen from "../ui/splashscreen";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return <>{isLoading ? <SplashScreen /> : children}</>;
}
