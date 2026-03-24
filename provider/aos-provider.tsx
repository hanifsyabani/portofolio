"use client";

import { useEffect, ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AosProviderProps {
  children: ReactNode;
}

export default function AosProvider({ children }: AosProviderProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
      once: false,
    });
  }, []);

  return <>{children}</>;
}
