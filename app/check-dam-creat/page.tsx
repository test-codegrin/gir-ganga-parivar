"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Droplets,
} from "lucide-react";
import SmoothScroll from "../../Component/SmothScrolling";

const images = [
  {
    src: "/image/check-dam-creat/check-dam-1.jpg",
    title: "Villagers Repairing Check Dam",
    tag: "Community",
  },
  {
    src: "/image/check-dam-creat/check-dam-2.jpg",
    title: "Raw Materials for Water Project",
    tag: "Materials",
  },
  {
    src: "/image/check-dam-creat/check-dam-3.jpg",
    title: "Check Dam Framework Construction",
    tag: "Construction",
  },
  {
    src: "/image/check-dam-creat/check-dam-4.jpg",
    title: "Construction of a Concrete Check Dam",
    tag: "Infrastructure",
  },
  {
    src: "/image/check-dam-creat/check-dam-5.jpg",
    title: "Check Dam Foundation and Curing Process",
    tag: "Foundation",
  },
  {
    src: "/image/check-dam-creat/check-dam-6.jpeg",
    title: "Enhancing Water Retention Infrastructure",
    tag: "Water",
  },
  {
    src: "/image/check-dam-creat/check-dam-7.jpg",
    title: "Riverbed De-silting and Excavation",
    tag: "Excavation",
  },
  {
    src: "/image/check-dam-creat/check-dam-8.jpeg",
    title: "Community Cleanup at Check Dam Site",
    tag: "Community",
  },
  {
    src: "/image/check-dam-creat/check-dam-9.jpg",
    title: "Concrete Reinforcement Work",
    tag: "Reinforcement",
  },
];

// ── Slider (mobile / tablet only – hidden on lg+) ──────────────────────────
function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((p) => (p + dir + images.length) % images.length);
  }, []);

  useEffect(() => {
    const id = setInterval(() => go(1), 5000);
    return () => clearInterval(id);
  }, [go]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };
  return (
    <div className="relative w-full h-[70vh] overflow-hidden rounded-3xl lg:hidden mb-16 shadow-2xl">
      {/* Counter */}
      <div className="absolute top-5 right-5 z-20 bg-black/40 backdrop-blur-md text-white text-xs font-mono px-3 py-1.5 rounded-full border border-white/20">
        {String(current + 1).padStart(2, "0")} /{" "}
        {String(images.length).padStart(2, "0")}
      </div>

      <AnimatePresence custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0"
        >
          <Image src={images[current].src}
            alt={images[current].title}
            fill
            className="w-full h-full object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

          {/* Caption */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-0 left-0 right-0 p-7"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-amber-400 bg-(--color-tertiary) border border-amber-400/30 px-3 py-1 rounded-full">
              {images[current].tag}
            </span>
            <h3 className="text-white text-xl font-bold mt-3 leading-snug">
              {images[current].title}
            </h3>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Nav buttons */}
      <button
        onClick={() => go(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={() => go(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`h-1 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-amber-400" : "w-1.5 bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}

// ── Gallery Card ───────────────────────────────────────────────────────────
function GalleryCard({ img, i }: { img: { src: string; title: string; tag: string }; i: number }) {
  const isTall = i % 5 === 0 || i % 5 === 4;
  

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: (i % 3) * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${isTall ? "sm:row-span-2" : ""}`}
      
    >
      <Image src={img.src}
        alt={img.title}
        fill
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        style={{ position: "absolute", inset: 0 }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} />

      {/* Dark layer */}
      <div className="absolute inset-0 bg-linear-to-t from-stone-900/90 via-stone-900/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Tag */}
      <div className="absolute top-4 left-4 z-10">
        <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-amber-300 bg-amber-300/10 backdrop-blur-sm border border-amber-300/30 px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          {img.tag}
        </span>
      </div>

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
        <h3 className="text-white text-sm font-semibold leading-snug drop-shadow-lg">
          {img.title}
        </h3>
      </div>
    </motion.div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function Media() {
  return (
    <SmoothScroll>
      <main className="container min-h-screen ">
        {/* ── Section 1: Header ── */}
        <section className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 border-b border-stone-300 pb-10 mb-14"
          >
            <div className="text-center lg:text-start">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-(--color-tertiary) border border-(--color-primary) flex items-center justify-center">
                  <Droplets size={15} className="text-(--color-primary)" />
                </div>
                <span className="text-[10px] tracking-[0.35em] uppercase font-bold text-(--color-secondary)">
                  Project Gallery
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-stone-900 tracking-tight">
                Our Check
                <br />
                <span className="text-(--color-primary)">Dam Work</span>
              </h1>
            </div>

            <p
              className="text-stone-500 text-sm leading-relaxed lg:max-w-xs text-center lg:text-start lg:text-right lg:pb-2"
              style={{ fontFamily: "sans-serif" }}
            >
              Explore how communities work together to build and restore check
              dams that conserve water and support sustainable agriculture.
            </p>
          </motion.div>

          {/* Slider – mobile/tablet only */}
          <HeroSlider />

          {/* ── Desktop Masonry Grid (lg+) ── */}
          <div className="hidden lg:grid grid-cols-3 auto-rows-[240px] gap-4">
            {images.map((img, i) => (
              <GalleryCard key={i} img={img} i={i} />
            ))}
          </div>

          {/* ── Mobile/Tablet uniform grid ── */}
          <div className="grid sm:grid-cols-2 gap-4 lg:hidden">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
                className="group relative overflow-hidden rounded-2xl h-56 cursor-pointer"
              >
                <Image src={img.src}
                  alt={img.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 absolute inset-0" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-sm font-semibold leading-tight">
                    {img.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Section 2: Know More ── */}
        <section className="px-4 sm:px-8 py-24 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[10px] tracking-[0.35em] uppercase font-bold text-(--color-secondary) mb-4 flex items-center justify-center lg:justify-start gap-3">
                <span className="w-8 h-px bg-(--color-secondary)" />
                Explore More
                <span className="w-8 h-px bg-(--color-secondary)" />
              </p>

              <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 leading-tight mb-6 text-center lg:text-start">
                Know More
                <br />
                <p className="text-(--color-primary) not-italic">
                  About Us
                </p>
              </h2>

              <p className="text-stone-500 text-sm leading-relaxed mb-8 lg:max-w-lg text-center lg:text-start">
                Repairing, deepening, and raising check dams — a rainwater
                harvesting initiative transforming communities one watershed at
                a time.
              </p>
            </motion.div>

            {/* Right card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="group relative h-[420px] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/image/check-dam-creat/Location.jpg"
                  alt="Check Dam Location"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} />
                <div className="absolute inset-0 bg-linear-to-t from-stone-900/70 via-transparent to-transparent" />

                {/* Floating label */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white text-[10px] uppercase tracking-widest mb-1">
                          Explore
                        </p>
                        <h3 className="text-white text-xl font-bold">
                          Location Map
                        </h3>
                      </div>
                      <Link href="/Our-Work">
                        <div className="w-10 h-10 rounded-full bg-(--color-primary) hover:bg-(--color-secondary)  transition flex items-center justify-center">
                          <ArrowUpRight
                            size={16}
                            className="text-white hover:text-black"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative blob */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-48 h-48 rounded-full bg-amber-200/60 blur-2xl" />
            </motion.div>
          </div>
        </section>
      </main>
    </SmoothScroll>
  );
}
