"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SmoothScroll from "../../Component/SmothScrolling";
import Image from "next/image";
import {
  FaSearchPlus,
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { FaShareAlt, FaDownload } from "react-icons/fa";

/* ─── Award Images ─── */
const awardImages = [
  {
    src: "/image/Award/NGO Award.jpg",
    caption: "Best NGO Award — Jal Shakti, New Delhi",
    year: "2026",
  },
  {
    src: "/image/Media/Constructions Work Img-4.jpg",
    caption: "Indian CSR Award — Brand Honchos",
    year: "2025",
  },
  {
    src: "/image/Media/Constructions Work Img-7.png",
    caption: "Global CSR & ESG Awards",
    year: "2025",
  },
  {
    src: "/image/Award/jan bhagidari award.png",
    caption: "Jal shancay & Jan Bhagidari Award",
    year: "2025",
  },
  {
    src: "/image/Award/Mayor's Award.jpg",
    caption: "Mayor Award — Rajkot Municipal Corporation",
    year: "2024",
  },
  {
    src: "/image/Award/Jal Pahari Award.jpg",
    caption: "Jal Prahari — Ministry of Jal Shakti & UNOPS",
    year: "2023",
  },
];


/* ─── Event Photos ─── */
const eventPhotos = [
  { src: "/image/Event/IMG_7531.JPG" },
  { src: "/image/Event/IMG_7533.JPG" },
  { src: "/image/Event/IMG_7535.JPG" },
  { src: "/image/Event/IMG_7538.JPG" },
  { src: "/image/Event/IMG_7544.JPG" },
  { src: "/image/Event/IMG_7614.JPG" },
  { src: "/image/Event/IMG_7616.JPG" },
  { src: "/image/Event/IMG_8778.JPG" },
  { src: "/image/Event/IMG_8781.JPG" },
  { src: "/image/Event/IMG_8790.JPG" },
  { src: "/image/Event/IMG_8794.JPG" },
  { src: "/image/Event/IMG_8797.JPG" },
  { src: "/image/Event/Sequence 01.Still001.jpg" },
  { src: "/image/Event/Sequence 01.Still002.jpg" },
  { src: "/image/Event/Sequence 01.Still003.jpg" },
  { src: "/image/Event/Sequence 01.Still009.jpg" },
  { src: "/image/Event/Sequence 01.Still010.jpg" },
  { src: "/image/Event/Sequence 01.Still011.jpg" },
  { src: "/image/Event/Sequence 01.Still012.jpg" },
];

/* ─── Press / News Gallery ─── */
const galleryItems = [
  { img: "/image/press/news1.jpg" },
  { img: "/image/press/news2.jpg" },
  { img: "/image/press/news3.jpg" },
  { img: "/image/press/news4.jpg" },
  { img: "/image/press/news5.jpg" },
  { img: "/image/press/news6.jpg" },
  { img: "/image/press/news7.jpg" },
  { img: "/image/press/news8.jpg" },
  { img: "/image/press/news9.jpg" },
  { img: "/image/press/news10.jpg" },
  { img: "/image/press/news11.jpg" },
  { img: "/image/press/news12.jpg" },
  { img: "/image/press/news13.jpg" },
  { img: "/image/press/news14.jpg" },
  { img: "/image/press/news15.jpg" },
  { img: "/image/press/news16.jpg" },
  { img: "/image/press/news17.png" },
  { img: "/image/press/news18.png" },
  { img: "/image/press/news19.jpeg" },
];

/* ─── Shared Lightbox ─── */
function Lightbox({
  images,
  activeIndex,
  onClose,
}: {
  images: string[];
  activeIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(activeIndex);

  /* Download (no fetch → faster for local images) */
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = images[index];
    link.download = `image-${index + 1}.jpg`;
    link.click();
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((i) => (i + 1) % images.length);
  };

  /* Keyboard navigation */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")
        setIndex((i) => (i - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [images.length, onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-lg flex items-center justify-center p-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Top Actions */}
      <div className="absolute top-6 right-6 flex gap-3 z-20">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDownload();
          }}
          className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-[var(--color-primary)] transition"
        >
          <FaDownload />
        </button>

        <button
          onClick={onClose}
          className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:rotate-90 transition"
        >
          <FaTimes />
        </button>
      </div>

      {/* Prev */}
      <button
        onClick={prev}
        className="absolute left-4 sm:left-8 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-[var(--color-primary)] transition"
      >
        <FaArrowLeft />
      </button>

      {/* Next */}
      <button
        onClick={next}
        className="absolute right-4 sm:right-8 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-[var(--color-primary)] transition"
      >
        <FaArrowRight />
      </button>

      {/* Image */}
      <div
        className="relative w-full max-w-5xl h-[82vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={images[index]}
          alt="preview"
          fill
          className="object-contain rounded-2xl" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} />
      </div>

      {/* Counter */}
      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest">
        {index + 1} / {images.length}
      </p>
    </motion.div>
  );
}

/* ─── Section Label ─── */
function SectionLabel({ label }: { label: string }) {
  return (
    <p className="text-[var(--color-secondary)] text-[10px] font-bold tracking-[0.3em] uppercase mb-2 flex items-center justify-center lg:justify-start gap-3">
      <span className="w-8 h-[2px] bg-[var(--color-secondary)]" />
      {label}
      <span className="w-8 h-[2px] bg-[var(--color-secondary)]" />
    </p>
  );
}

export default function Media() {
  /* ── Award Slider State ── */
  const [visibleAwards, setVisibleAwards] = useState(false);
  const awardsRef = useRef<HTMLDivElement>(null);
  const [activeAward, setActiveAward] = useState(0);
  const [awardImgDir, setAwardImgDir] = useState(1);
  const [isAwardHovered, setIsAwardHovered] = useState(false);
  const awardTimerRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const [featuredIndex, setFeaturedIndex] = useState(0);

  /* ── Lightbox state (shared) ── */
  const [lightbox, setLightbox] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  /* ── Event strip hover ── */
  const [isEventHovered, setIsEventHovered] = useState(false);

  /* Intersection Observer */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisibleAwards(true);
      },
      { threshold: 0.15 },
    );
    if (awardsRef.current) obs.observe(awardsRef.current);
    return () => obs.disconnect();
  }, []);

  /* Award auto-advance */
  useEffect(() => {
    if (isAwardHovered) {
      clearInterval(awardTimerRef.current);
      return;
    }
    awardTimerRef.current = setInterval(() => {
      setAwardImgDir(1);
      setActiveAward((prev) => (prev + 1) % awardImages.length);
    }, 3500);
    return () => clearInterval(awardTimerRef.current);
  }, [isAwardHovered]);

  const infinitePhotos = [...eventPhotos, ...eventPhotos, ...eventPhotos];

  const pressImages = galleryItems.map((g) => g.img);

  return (
    <SmoothScroll>
      {/* ── HERO ── */}
      <section className="container">
        <div className="text-center mb-2">
          <p className="text-[var(--color-secondary)] text-[10px] font-black tracking-[0.35em] uppercase mb-3 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-[var(--color-secondary)]" />
            Media & News
            <span className="w-8 h-px bg-[var(--color-secondary)]" />
          </p>
          <h1 className="text-gray-900 text-4xl md:text-5xl font-black leading-tight">
            Recognition,{" "}
            <span className="text-[var(--color-primary)]">
              Stories & Impact
            </span>
          </h1>
          <div className="w-16 h-1 bg-[var(--color-primary)] mx-auto mt-5" />
        </div>
      </section>

      {/* ── NEWS ARTICLES GALLERY ── */}
      <section className="container bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
          {/* LEFT: Heading + small grid */}
          <div>
            <div className="mb-8">
              <SectionLabel label="Event In The Spotlight" />
              <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-center lg:text-start">
                NEWS{" "}
                <span className="text-[var(--color-primary)]">
                  ARTICLES <br /> GALLERY
                </span>
              </h2>
            </div>

            {/* Small thumbnails — 5 columns */}
            <div className="grid grid-cols-4 gap-3 ">
              {galleryItems.map((item, index) => {
                const isActive = featuredIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`relative group cursor-pointer rounded-xl overflow-hidden bg-gray-100 transition-all duration-300 ${isActive
                        ? "ring-2 ring-[var(--color-primary)] ring-offset-2 scale-[0.96]"
                        : "hover:scale-[0.96] hover:ring-1 hover:ring-gray-300 hover:ring-offset-1"
                      }`}
                    onClick={() => setFeaturedIndex(index)}
                  >
                    <div className="relative w-full h-[60px] sm:h-[110px]">
                      <Image src={item.img}
                        alt={`Press ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} />
                      {/* Active tint */}
                      {isActive && (
                        <div className="absolute inset-0 bg-[var(--color-primary)]/25" />
                      )}
                      {/* Hover tint */}
                      {!isActive && (
                        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Large featured image — updates on thumbnail click */}
          <AnimatePresence mode="wait">
            <motion.div
              key={featuredIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="relative group cursor-pointer rounded-2xl overflow-hidden bg-gray-100 h-[400px] sm:h-[480px] lg:h-[760px] border p-5"
              onClick={() =>
                setLightbox({ images: pressImages, index: featuredIndex })
              }
            >
              <Image src={galleryItems[featuredIndex].img}
                alt="Press coverage featured"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} />

              {/* Zoom on hover */}
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                  <FaSearchPlus className="text-white text-lg" />
                </div>
              </div>

              {/* Counter badge */}
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                {featuredIndex + 1} / {galleryItems.length}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── EVENT PHOTOS (infinite marquee strip — unchanged) ── */}
      <section className="container overflow-hidden">
        <div className="mb-8">
          <SectionLabel label="Event" />
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl font-black whitespace-nowrap">
              Event <span className="text-[var(--color-primary)]">Photos</span>
            </h2>
          </div>
        </div>

        <div
          className="relative flex"
          onMouseEnter={() => setIsEventHovered(true)}
          onMouseLeave={() => setIsEventHovered(false)}
        >
          <motion.div
            className="flex gap-5"
            animate={{ x: isEventHovered ? undefined : ["0%", "-33.33%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 100,
                ease: "linear",
              },
            }}
            style={{ width: "max-content" }}
          >
            {infinitePhotos.map((photo, i) => (
              <div
                key={i}
                className="group relative w-[300px] md:w-[400px] h-[350px] md:h-[450px] rounded-2xl overflow-hidden cursor-pointer flex-shrink-0 border border-gray-100"
                onClick={() => {
                  const realIndex = i % eventPhotos.length;
                  setLightbox({
                    images: eventPhotos.map((p) => p.src),
                    index: realIndex,
                  });
                }}
              >
                <Image src={photo.src}
                  alt={`Event photo ${i}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                    <FaSearchPlus className="text-white text-base" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ── SHARED LIGHTBOX ── */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            images={lightbox.images}
            activeIndex={lightbox.index}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </SmoothScroll>
  );
}
