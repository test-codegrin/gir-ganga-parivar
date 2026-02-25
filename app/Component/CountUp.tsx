"use client";

import { useEffect, useState } from "react";

export default function CountUp({
  end,
  duration = 1000,
}: {
  end: number | string;
  duration?: number;
}) {
  const target = Number(end); // 👈 force number
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isNaN(target)) return; // 👈 stop if invalid

    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <>{count}</>;
}