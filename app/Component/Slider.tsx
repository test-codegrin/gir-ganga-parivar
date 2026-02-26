"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Slider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const sliders = [
    "/logos/BALAJI_WAFERS.png",
    "/logos/UGVCL.png",
    "/logos/BALAJI.png",
    "/logos/DML-GROUP.png",
    "/logos/SHAKTIMAN.png",
    "/logos/GETCO.png",
    "/logos/GOPAL-NAMKEEN.png",
    "/logos/KSP-Auto-Forge-Pvt-Ltd.png",
    "/logos/SHREE-GIRIRAJ-HOSPITAL.png",
    "/logos/LADANI-ASSOCIATES-PVT-LTD.png",
    "/logos/PGVCL.png",
    "/logos/PRASHANT-CASTING-PVT-LTD.gif",
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationId: number;

    const scroll = () => {
      slider.scrollLeft += 1;

      // Reset when end reached
      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft = 0;
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="container section-padding w-full overflow-hidden bg-emerald-50"
    >
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-center text-emerald-600 mb-4">
          Our Partners
        </h1>
        <p className="text-xl font-semibold text-center">
          List of corporate partners who joined our mission
        </p>
        <div
          ref={sliderRef}
          className="flex gap-40 overflow-x-hidden whitespace-nowrap pt-10"
        >
          {/* duplicate images for seamless loop */}
          {[...sliders, ...sliders, ...sliders].map((src, index) => (
            <div key={index} className="min-w-[200px] flex justify-center">
              <Image
                src={src}
                alt="brand logo"
                width={120}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
