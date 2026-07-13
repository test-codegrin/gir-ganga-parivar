"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import SmoothScroll from "../../Component/SmothScrolling";
import Image from "next/image";
import { FaTimes, FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";

/* ─── DATA ─── */
const galleryItems = [
  { img: "/image/borewellrecharege/BorRecharge1.png" },
  { img: "/image/borewellrecharege/BorRecharge2.png" },
  { img: "/image/borewellrecharege/BorRecharge3.png" },
  { img: "/image/borewellrecharege/BorRecharge4.png" },
  { img: "/image/borewellrecharege/BorRecharge5.png" },
  { img: "/image/borewellrecharege/BorRecharge6.png" },
  { img: "/image/borewellrecharege/BorRecharge7.png" },
  { img: "/image/borewellrecharege/BorRecharge8.png" },
  { img: "/image/borewellrecharege/BorRecharge9.png" },
  { img: "/image/borewellrecharege/BorRecharge10.png" },
  { img: "/image/borewellrecharege/BorRecharge11.png" },
  { img: "/image/borewellrecharege/BorRecharge12.png" },
  { img: "/image/borewellrecharege/BorRecharge13.png" },
  { img: "/image/borewellrecharege/BorRecharge14.png" },
  { img: "/image/borewellrecharege/BorRecharge15.png" },
  { img: "/image/borewellrecharege/BorRecharge16.png" },
  { img: "/image/borewellrecharege/BorRecharge17.png" },
  { img: "/image/borewellrecharege/BorRecharge18.png" },
  { img: "/image/borewellrecharege/BorRecharge19.png" },
  { img: "/image/borewellrecharege/BorRecharge20.png" },
  { img: "/image/borewellrecharege/BorRecharge21.png" },
  { img: "/image/borewellrecharege/BorRecharge22.png" },
  { img: "/image/borewellrecharege/BorRecharge23.png" },
  { img: "/image/borewellrecharege/BorRecharge24.png" },
  { img: "/image/borewellrecharege/BorRecharge25.png" },
  { img: "/image/borewellrecharege/BorRecharge26.png" },
  { img: "/image/borewellrecharege/BorRecharge27.png" },
  { img: "/image/borewellrecharege/BorRecharge28.png" },
  { img: "/image/borewellrecharege/BorRecharge29.png" },
  { img: "/image/borewellrecharege/BorRecharge30.png" },
  { img: "/image/borewellrecharege/BorRecharge31.png" },
  { img: "/image/borewellrecharege/BorRecharge32.png" },
  { img: "/image/borewellrecharege/BorRecharge33.png" },
  { img: "/image/borewellrecharege/BorRecharge34.png" },
  { img: "/image/borewellrecharege/BorRecharge35.png" },
];

/* ─── VIDEO DATA ─── */
const videoItems = [
  {
    id: 1,
    title: "Recharge Structure Installation",
    location: "Rajkot, Gujarat",
    thumbnail: "/image/borewellrecharege/BorRecharge1.png",
    video: "/image/borewellrecharege/BorRechargeVideo1.mp4",
  },
  {
    id: 2,
    title: "Urban Groundwater Revival",
    location: "Ahmedabad, Gujarat",
    thumbnail: "/image/borewellrecharege/BorRecharge5.png",
    video: "/image/borewellrecharege/BorRechargeVideo2.mp4",
  },
  {
    id: 3,
    title: "School Campus Initiative",
    location: "Surat, Gujarat",
    thumbnail: "/image/borewellrecharege/BorRecharge10.png",
    video: "/image/borewellrecharege/BorRechargeVideo3.mp4",
  },
  {
    id: 4,
    title: "Government Office Project",
    location: "Vadodara, Gujarat",
    thumbnail: "/image/borewellrecharege/BorRecharge15.png",
    video: "/image/borewellrecharege/BorRechargeVideo4.mp4",
  },
];

/* ─── LIGHTBOX ─── */
function Lightbox({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        <FaTimes size={16} />
      </button>

      {/* Counter */}
      <span className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm tabular-nums">
        {index + 1} / {galleryItems.length}
      </span>

      {/* Prev */}
      <button
        className="absolute left-3 sm:left-6 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous"
      >
        <FaChevronLeft size={16} />
      </button>

      {/* Image */}
      <div
        className="relative max-h-[85vh] max-w-[90vw] sm:max-w-[80vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          key={index}
          src={galleryItems[index].img}
          alt={`Borewell Recharge Photo ${index + 1}`}
          width={1400}
          height={1000}
          className="max-h-[85vh] w-auto rounded-xl object-contain shadow-2xl"
          quality={90}
          priority
        />
      </div>

      {/* Next */}
      <button
        className="absolute right-3 sm:right-6 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next"
      >
        <FaChevronRight size={16} />
      </button>
    </div>
  );
}

/* ─── VIDEO CARD ─── */
function VideoCard({
  item,
  isActive,
  onHover,
}: {
  item: (typeof videoItems)[0];
  isActive: boolean;
  onHover: (id: number | null) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isActive) {
      video.currentTime = 0;
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive]);

  return (
    <div
      className="video-card"
      style={{
        flex: isActive ? "4 1 0%" : "1 1 0%",
        transition: "flex 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "relative",
        overflow: "hidden",
        borderRadius: "20px",
        cursor: "pointer",
        minWidth: 0,
        height: "420px",
      }}
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Thumbnail */}
      <Image
        src={item.thumbnail}
        alt={item.title}
        fill
        className="object-cover"
        style={{
          transition: "opacity 0.4s ease",
          opacity: isActive ? 0 : 1,
        }}
        sizes="(max-width: 768px) 100vw, 20vw"
      />

      {/* Video */}
      <video
        ref={videoRef}
        src={item.video}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: isActive ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Dark gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: isActive
            ? "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)"
            : "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 100%)",
          transition: "background 0.4s ease",
          borderRadius: "20px",
        }}
      />

      {/* Play icon when not active */}
      {!isActive && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(4px)",
            border: "1.5px solid rgba(255,255,255,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "opacity 0.3s ease",
          }}
        >
          <FaPlay size={14} color="white" style={{ marginLeft: "2px" }} />
        </div>
      )}

      {/* Text label at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: isActive ? "20px 22px" : "14px 14px",
          transition: "padding 0.4s ease",
        }}
      >
        {/* Vertical title for collapsed */}
        {!isActive && (
          <p
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)",
              color: "rgba(255,255,255,0.9)",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.04em",
              margin: 0,
              maxHeight: "180px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {item.title}
          </p>
        )}

        {/* Expanded info */}
        {isActive && (
          <div
            style={{
              opacity: isActive ? 1 : 0,
              transform: isActive ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.35s ease 0.2s, transform 0.35s ease 0.2s",
            }}
          >
            <span
              style={{
                display: "inline-block",
                background: "var(--color-primary, #2d7a3a)",
                color: "white",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "3px 10px",
                borderRadius: "20px",
                marginBottom: "8px",
              }}
            >
              {item.location}
            </span>
            <h3
              style={{
                color: "white",
                fontSize: "18px",
                fontWeight: 700,
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              {item.title}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── PAGE ─── */
export default function BorewellRecharge() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + galleryItems.length) % galleryItems.length : null
    );
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % galleryItems.length : null
    );
  }, []);

  return (
    <SmoothScroll>
      <div className="bg-white min-h-screen">

        {/* ── TITLE & DESCRIPTION ── */}
        <div className="container mx-auto px-5 sm:px-8 pt-12 pb-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[var(--color-secondary)]" />
            <span className="text-[var(--color-secondary)] text-xs font-bold tracking-[0.2em] uppercase">
              Urban Water Conservation
            </span>
            <div className="h-px w-10 bg-[var(--color-secondary)]" />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Borewell Recharge -{" "}
            <span className="text-[var(--color-primary)]">
              Urban Water Conservation Initiative
            </span>
          </h1>

          <div className="w-16 h-1 bg-[var(--color-primary)] rounded-full mx-auto mb-7" />

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Girganga Parivar Trust is actively expanding its water conservation
            efforts beyond rural landscapes by implementing large-scale borewell
            recharge structures in urban and semi-urban areas. This initiative
            focuses on enhancing groundwater levels in Government offices,
            public buildings, schools, and community infrastructure, ensuring
            sustainable water availability even in densely populated regions.
            Through scientifically designed recharge systems, rainwater is
            efficiently channelled back into the aquifers, reducing surface
            runoff and improving long-term water security. To date, the Trust
            has successfully completed{" "}
            <span className="font-bold text-[var(--color-primary)]">
              1,370 borewell recharge structures
            </span>
            , significantly contributing to urban water resilience and
            climate-adaptive infrastructure development.
          </p>
        </div>
         {/* ── VIDEO SECTION ── */}
        <div className="bg-[var(--color-tertiary)] py-16 px-4 sm:px-8">
          {/* Section header */}
          <div className="container mx-auto text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[var(--color-secondary)]" />
              <span className="text-[var(--color-secondary)] text-xs font-bold tracking-[0.2em] uppercase">
                Field Documentation
              </span>
              <div className="h-px w-10 bg-[var(--color-secondary)]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              Watch Our Work in{" "}
              <span className="text-[var(--color-primary)]">Action</span>
            </h2>
          </div>

          {/* Video cards — horizontal expandable */}
          <div className="container mx-auto">
            <div className="flex md:flex-row flex-col"
              style={{
                gap: "10px",
                height: "420px",
                alignItems: "stretch",
              }}
            >
              {videoItems.map((item) => (
                <VideoCard
                  key={item.id}
                  item={item}
                  isActive={activeVideo === item.id}
                  onHover={setActiveVideo}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── GALLERY — Masonry ── */}
        <div className="px-2 sm:px-4 pb-12">
          <div
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4"
            style={{ columnGap: "10px" }}
          >
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="break-inside-avoid mb-[10px] group relative overflow-hidden rounded-xl cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={item.img}
                  alt={`Borewell Recharge Photo ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto block transition-transform duration-500 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  quality={75}
                />
              </div>
            ))}
          </div>
        </div>

       

        {/* ── LIGHTBOX ── */}
        {lightboxIndex !== null && (
          <Lightbox
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}
      </div>
    </SmoothScroll>
  );
}