"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Slider from "../Component/Slider";
import Image from "next/image";
import SmoothScroll from "../Component/SmothScrolling";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { impactMetrics, impactTrustStripData } from "@/data/impact-stats";

/* ─────────────────────────────────────────────
   COUNT UP
───────────────────────────────────────────── */
type CountUpProps = {
  value: number;
  suffix?: string;
};

const CountUp = ({ value, suffix = "" }: CountUpProps) => {
  const count = useMotionValue(0);

  const rounded = useTransform(
    count,
    (latest) => Math.round(latest).toLocaleString() + suffix,
  );

  useEffect(() => {
    const animation = animate(count, value, {
      duration: 2.2,
      ease: "easeOut",
    });

    return () => animation.stop();
  }, [count, value]);

  return <motion.span>{rounded}</motion.span>;
};

const impactStats = [
  {
    num: impactMetrics.waterStructuresCreated.value,
    label: "Water Structures",
    suffix: "+",
    icon: "💧",
  },
  {
    num: impactMetrics.locationsReached.value,
    label: "Locations Reached",
    suffix: "",
    icon: "📍",
  },
  {
    num: impactMetrics.ruralVillages.value,
    label: "Rural Villages",
    suffix: "",
    icon: "🏘️",
  },
  { num: impactMetrics.districts.value, label: "Districts", suffix: "", icon: "🗺️" },
  {
    num: 74,
    label: "Billion Litres Recharge Capacity",
    suffix: "B+",
    icon: "💦",
  },
];

const approaches = [
  {
    title: "Water Conservation",
    desc: "Building check dams, recharge bore wells, and water harvesting structures to prevent every raindrop from flowing to the sea.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-7 h-7"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6v6l4 2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Community Participation",
    desc: `Partnering with ${impactMetrics.ruralVillages.display} rural villages and ${impactMetrics.urbanWaterStressedLocations.display} urban water-stressed locations to drive grassroots-led conservation at scale.`,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-7 h-7"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
          strokeLinecap="round"
        />
        <circle cx="9" cy="7" r="4" />
        <path
          d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Climate Resilience",
    desc: "Restoring biodiversity, recharging aquifers, and building long-term resilience against drought and climate change.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-7 h-7"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <>
      <SmoothScroll>
        {/* ══════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════ */}

        <section className="relative w-full min-h-screen flex items-center pb-45 overflow-hidden">
          {/* Background Image */}
          <Image src="/image/home/Donation For Biggest Checkdam.png"
            alt="Water Conservation"
            fill
            className="object-cover absolute" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Wave */}
          <div className="absolute bottom-0 left-0 right-0 z-[2]">
            <svg viewBox="0 0 1440 80" className="w-full" fill="white">
              <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
            </svg>
          </div>

          {/* Content */}
          <div className="container relative z-[1] flex flex-col items-center justify-self-center text-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="h-px w-8 sm:w-10 bg-(--color-secondary)" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-(--color-secondary) uppercase">
                Girganga Parivar Trust
              </span>
              <div className="h-px w-8 sm:w-10 bg-(--color-secondary)" />
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6 max-w-5xl">
              Building a{" "}
              <span className="text-(--color-secondary)">
                Water-Secure
              </span>{" "}
              Future for Rural India.
            </h1>

            {/* Subtitle */}
            <p className="text-white/80 text-sm md:text-lg lg:text-xl font-medium mb-8 sm:mb-10 max-w-2xl">
              Registered with National Stock Exchange of India Social Stock Exchange (SSE)

            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 items-center justify-center">
              <motion.div className="flex  gap-4 justify-center ">
                <Link
                  href="/partner-with-us-csr"
                  className="btn-secondary-outline w-70 justify-center group inline-flex items-center gap-2 font-semibold text-base px-9 py-4 bg-transparent hover:text-(--color-primary) text-(--color-secondary)"
                >
                  <span className="relative z-10">
                    {" "}
                    Partner With Us &#8594;
                  </span>

                  <span className="btn-secondary-outline-overlay" />
                </Link>
              </motion.div>

              <motion.div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href="/support-a-structure"
                  className="btn-secondary-outline w-70 justify-center group inline-flex items-center gap-2 font-semibold text-base px-9 py-4 bg-transparent hover:text-(--color-primary) text-(--color-secondary)"
                >
                  <span className="relative z-10">
                    {" "}
                    Support A Structure &#8594;
                  </span>

                  <span className="btn-secondary-outline-overlay" />
                </Link>
              </motion.div>

              <motion.div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="btn-secondary-outline w-70 justify-center group inline-flex items-center gap-2 font-semibold text-base px-9 py-4 bg-transparent hover:text-(--color-primary) text-(--color-secondary)"
                >
                  <span className="relative z-10"> Contact Us &#8594;</span>

                  <span className="btn-secondary-outline-overlay" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
          SECTION 2 — IMPACT STATS
      ══════════════════════════════════════════════ */}
        <section ref={statsRef} className=" bg-white py-0">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-8 bg-(--color-secondary)" />
                <span className="text-(--color-secondary) text-xs font-bold tracking-[0.22em] uppercase">
                  Numbers That Matter
                </span>
                <div className="h-px w-8 bg-(--color-secondary)" />
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Our Impact,{" "}
                <span className="text-(--color-primary)">
                  by the Numbers
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
              {impactStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.07 }}
                  className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Hover BG */}
                  <div className="absolute inset-0 bg-(--color-tertiary) opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <p
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold text-(--color-primary) leading-none mb-1"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {isVisible ? (
                        <CountUp value={stat.num} suffix={stat.suffix} />
                      ) : (
                        "0"
                      )}
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm font-medium leading-snug mt-1">
                      {stat.label}
                    </p>
                    <div className="mt-3 h-0.5 w-8 bg-(--color-secondary) rounded-full group-hover:w-16 transition-all duration-400" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
          SECTION 3 — OUR APPROACH
      ══════════════════════════════════════════════ */}
        <section className="bg-(--color-tertiary)/50">
          <div className="container">
            <motion.div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-8 bg-(--color-secondary)" />
                <span className="text-(--color-secondary) text-xs font-bold tracking-[0.22em] uppercase">
                  How We Work
                </span>
                <div className="h-px w-8 bg-(--color-secondary)" />
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Our{" "}
                <span className="text-(--color-primary)">Approach</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {approaches.map((ap, i) => (
                <motion.div
                  key={ap.title}
                  className="group bg-white rounded-2xl p-7 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400 relative overflow-hidden"
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-(--color-primary) to-[var(--color-secondary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl" />

                  <div className="w-14 h-14 rounded-xl bg-(--color-tertiary) flex items-center justify-center text-(--color-primary) mb-5 group-hover:bg-(--color-primary) group-hover:text-white transition-colors duration-300">
                    {ap.icon}
                  </div>
                  <h3
                    className="font-bold text-gray-900 text-lg mb-3"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {ap.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {ap.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
          SECTION 4 — IMPACT HIGHLIGHTS + GUJARAT MAP
      ══════════════════════════════════════════════ */}
        <section className="bg-white">
          <div className="container">
            <motion.div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-8 bg-(--color-secondary)" />
                <span className="text-(--color-secondary) text-xs font-bold tracking-[0.22em] uppercase">
                  Geographic Reach
                </span>
                <div className="h-px w-8 bg-(--color-secondary)" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Impact{" "}
                <span className="text-(--color-primary)">Highlights</span>
              </h2>

              <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-xl mx-auto">
                Transforming drought-prone Saurashtra and Gujarat through
                community-led water structures across{" "}
                {impactMetrics.districts.display} districts and{" "}
                {impactMetrics.talukas.display} talukas.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image Instead of Map */}
              <motion.div>
                <Image src="/image/home/GUJRAT MAP MAIN.jpg"
                  alt="Gujarat Impact Map"
                  width={800}
                  height={500}
                  className="w-full h-auto object-contain mx-auto" quality={75} />
              </motion.div>

              {/* Highlights */}
              <motion.div className="space-y-4">
                {/* Item 1 */}
                <div className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-(--color-primary)/30 hover:shadow-md transition-all duration-300 group">
                  <div className="bg-(--color-primary) w-1.5 rounded-full shrink-0 self-stretch min-h-[3rem] group-hover:w-2 transition-all duration-300" />
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-0.5">
                      Water Recharge Capacity
                    </p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                      74 Billion Litres
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Created through strategically placed check dams and bore
                      recharge systems.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-(--color-primary)/30 hover:shadow-md transition-all duration-300 group">
                  <div className="bg-(--color-secondary) w-1.5 rounded-full shrink-0 self-stretch min-h-[3rem] group-hover:w-2 transition-all duration-300" />
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-0.5">
                      Rural Villages Reached
                    </p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                      {impactMetrics.ruralVillages.display} Villages
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Plus {impactMetrics.urbanWaterStressedLocations.display}{" "}
                      urban water-stressed locations now benefit from stronger
                      groundwater access.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-(--color-primary)/30 hover:shadow-md transition-all duration-300 group">
                  <div className="bg-[var(--color-accent)] w-1.5 rounded-full shrink-0 self-stretch min-h-[3rem] group-hover:w-2 transition-all duration-300" />
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-0.5">
                      Water Structures Built
                    </p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                      {impactMetrics.waterStructuresCreated.display} Structures
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Check dams, bore recharge structures, and percolation pits
                      across {impactMetrics.talukas.display} talukas.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-(--color-primary)/30 hover:shadow-md transition-all duration-300 group">
                  <div className="bg-[var(--color-greenish)] w-1.5 rounded-full shrink-0 self-stretch min-h-[3rem] group-hover:w-2 transition-all duration-300" />
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-0.5">
                      Mission Target
                    </p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                      1,11,111 Structures
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Our ambitious goal to ensure not a single raindrop reaches
                      the sea unused.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════
          SECTION — TRUST STRIP
      ══════════════════════════════════════════════ */}
        <section className="bg-(--color-tertiary)/50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-8 bg-(--color-secondary)" />
                <span className="text-(--color-secondary) text-xs font-bold tracking-[0.22em] uppercase">
                  Trusted at Scale
                </span>
                <div className="h-px w-8 bg-(--color-secondary)" />
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
              >
                Our Growing{" "}
                <span className="text-(--color-primary)">Footprint</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {impactTrustStripData.map((group, i) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="h-1.5 w-8 rounded-full"
                      style={{ backgroundColor: group.accent }}
                    />
                    <h3
                      className="font-bold text-gray-900 text-base sm:text-lg"
                    >
                      {group.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {group.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex items-center justify-between gap-4 border-b border-gray-100 last:border-none pb-3 last:pb-0"
                      >
                        <span className="text-gray-500 text-xs sm:text-sm leading-snug">
                          {stat.label}
                        </span>
                        <span
                          className="font-bold text-sm sm:text-base whitespace-nowrap"
                          style={{ color: group.accent }}
                        >
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
          SECTION 5 — OUR PARTNERS
      ══════════════════════════════════════════════ */}
        <Slider />

        
        {/* ══════════════════════════════════════════════
          SECTION 6 — CALL TO ACTION
      ══════════════════════════════════════════════ */}
        <section className="relative overflow-hidden">
          {/* BG */}
          <div className="absolute inset-0 bg-cover bg-center bg-(--color-primary) " />{" "}
          <div className="absolute top-0 right-0 w-96 h-96 bg-(--color-secondary)/10 rounded-full blur-3xl pointer-events-none" />
          <div className="container relative z-[2]">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-px w-8 bg-(--color-secondary)" />
                  <span className="text-(--color-secondary) text-xs font-bold tracking-[0.22em] uppercase">
                    Join the Movement
                  </span>
                  <div className="h-px w-8 bg-(--color-secondary)" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                  Be Part of India&apos;s Largest{" "}
                  <span className="text-(--color-secondary)">
                    Water Revival
                  </span>
                </h2>

                <p className="text-white/75 text-sm sm:text-base lg:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                  Whether you&apos;re a corporation looking to invest in CSR, or
                  an individual who cares about water security — there&apos;s a
                  role for you in our mission.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap gap-6 justify-center"
                  >
                    {/* Outline Button */}
                    <a
                      href="/partner-with-us-csr"
                      className="group relative overflow-hidden flex items-center justify-center gap-2 
  text-white font-semibold text-xs w-[250px] md:w-[290px] lg:text-base px-5 py-3 rounded-lg
  bg-[url('/image/button/button-bg.jpeg')] bg-cover bg-center"
                    >
                      <span className="relative z-10">
                        Partner With Us (CSR)
                      </span>

                      <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                        →
                      </span>

                      {/* overlay */}
                      <span className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></span>
                    </a>

                    <a
                      href="/support-a-structure"
                      className="group relative overflow-hidden flex items-center justify-center gap-2 
  text-white font-semibold text-sm w-[250px] md:w-[290px] lg:text-base px-5 py-3 rounded-lg
  bg-[url('/image/button/button-bg.jpeg')] bg-cover bg-center"
                    >
                      <span className="relative z-10">Support A Structure</span>

                      <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                        →
                      </span>

                      <span className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></span>
                    </a>
                    {/* Outline Button */}
                    <a
                      href="/contact"
                      className="group relative overflow-hidden flex items-center justify-center gap-2 
  text-white font-semibold text-sm w-[250px] md:w-[290px] lg:text-base px-5 py-3 rounded-lg
  bg-[url('/image/button/button-bg.jpeg')] bg-cover bg-center"
                    >
                      <span className="relative z-10">Contact Us</span>

                      <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                        →
                      </span>

                      <span className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></span>
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </SmoothScroll>
    </>
  );
}
