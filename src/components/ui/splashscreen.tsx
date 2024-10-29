// components/SplashScreen.tsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <div className="mb-4 text-3xl font-semibold">Loading...</div>
      <div className="h-2 w-3/4 overflow-hidden rounded-full bg-gray-700">
        <motion.div
          className="h-full bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
      <div className="mt-2 text-sm">{progress}%</div>
    </div>
  );
}
