"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "@studio-freight/lenis";
import "aos/dist/aos.css";

interface Props {
  children: ReactNode;
}

export default function SmoothScroll({ children }: Props) {
  useEffect(() => {
    // Dynamic import for AOS
    import("aos").then((AOS) => {
      AOS.default.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
      });
    });

    // Disable Lenis on touch devices
    if ("ontouchstart" in window) return;

    const lenis = new Lenis({
      duration: 2,
      smoothWheel: true,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}