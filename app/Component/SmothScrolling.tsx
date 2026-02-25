"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "@studio-freight/lenis";
// import AOS from "aos";
// import "aos/dist/aos.css"; 

interface Props {
  children: ReactNode;
}

export default function SmoothScroll({ children }: Props) {
  useEffect(() => {
    // Initialize AOS once
    // AOS.init({
    //   duration: 1000, 
    //   easing: "ease-in-out",
    //   once: true,    
    // });

    // 🚫 Disable Lenis on touch devices (fixes crash)
    if ("ontouchstart" in window) return;

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 2,
      smoothWheel: true,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
    });

    // Animation frame loop
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Optional: refresh AOS on resize or after content changes
    // const handleResize = () => AOS.refresh();
    // window.addEventListener("resize", handleResize);

    return () => {
      lenis.destroy();
    //   window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}