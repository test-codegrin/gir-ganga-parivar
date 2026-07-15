"use client";

import { useState } from "react";
import SmoothScroll from "../../Component/SmothScrolling";
import Image from "next/image";
import { FaDownload, FaTimes } from "react-icons/fa";

/* ─── DATA ─── */
const galleryItems = [
  {
    img: "/image/photos/photos - 1.jpg",
    title: "Water Conservation Activity at Village Dam",
  },
  {
    img: "/image/photos/photos - 2.jpg",
    title: "Bulk Material Transportation at Project Site",
  },
  {
    img: "/image/photos/photos - 3.jpg",
    title: "Construction Fleet in Action",
  },
  { img: "/image/photos/photos - 4.jpg", title: "Heavy Machinery at Work" },
  {
    img: "/image/photos/photos - 5.jpg",
    title: "Large Construction Excavation Site",
  },
  {
    img: "/image/photos/photos - 6.jpg",
    title: "Loader Filling Soil into Tractor",
  },
  {
    img: "/image/photos/photos - 7.jpg",
    title: "Foundation Construction Work",
  },
  {
    img: "/image/photos/photos - 8.jpg",
    title: "Concrete Foundation Work in Progress",
  },
  {
    img: "/image/photos/photos - 9.jpg",
    title: "Village Infrastructure Development Work in Progress",
  },
  {
    img: "/image/photos/photos - 10.jpg",
    title: "Irrigation Canal Structure Under Construction",
  },
  {
    img: "/image/photos/photos - 11.jpg",
    title: "Earthmoving Work Near Water Reservoir",
  },
  { img: "/image/photos/photos - 12.jpg", title: "Canal Excavation Work" },
  { img: "/image/photos/photos - 13.jpg", title: "Fetching Water by the Dam" },
  { img: "/image/photos/photos - 14.jpg", title: "Heavy Machinery at Work" },
  { img: "/image/photos/photos - 15.jpg", title: "Local Dam Repair Activity" },
  { img: "/image/photos/photos - 16.jpg", title: "Heavy Machinery at Work" },
  { img: "/image/photos/photos - 17.jpg", title: "River Excavation Work" },
  {
    img: "/image/photos/photos - 18.png",
    title: "JCB Excavation for Water Recharge Structure",
  },
  {
    img: "/image/photos/photos - 19.jpeg",
    title: "On-Site Concrete Pouring for Check Dam Construction",
  },
  {
    img: "/image/photos/photos - 21.jpg",
    title: "Stone Pitching Work for Check Dam Strengthening",
  },
  {
    img: "/image/photos/photos - 22.jpg",
    title: "River Desilting Work Using Excavator",
  },
  {
    img: "/image/photos/photos - 23.jpg",
    title: "Concrete Channel Construction Work",
  },
  { img: "/image/photos/photos - 24.jpeg", title: "Heavy Machinery at Work" },
  { img: "/image/photos/photos - 25.jpeg", title: "River Cleanup Drive" },
  { img: "/image/photos/photos - 26.jpeg", title: "Earthmoving Operation" },
];

/* ─── MOSAIC ─── */
const mosaicPattern = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",

  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
];

/* ─── LIGHTBOX ─── */
function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: string[];
  startIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);

  const next = (e: any) => {
    e.stopPropagation();
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = (e: any) => {
    e.stopPropagation();
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const download = () => {
    const link = document.createElement("a");
    link.href = images[current];
    link.download = `image-${current + 1}.jpg`;
    link.click();
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-2xl"
      >
        <FaTimes />
      </button>

      {/* Download */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          download();
        }}
        className="absolute top-6 right-16 text-white text-2xl"
      >
        <FaDownload />
      </button>

      {/* Prev */}
      <button onClick={prev} className="absolute left-6 text-white text-3xl">
        ‹
      </button>

      {/* Next */}
      <button onClick={next} className="absolute right-6 text-white text-3xl">
        ›
      </button>

      {/* Image */}
      <div
        className="relative w-[90vw] h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={images[current]}
          alt="preview"
          fill
          className="object-contain" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} />
      </div>
    </div>
  );
}

/* ─── PAGE ─── */
export default function Photos() {
  const [lightbox, setLightbox] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  const imageList = galleryItems.map((item) => item.img);

  return (
    <SmoothScroll>
      <div className="container">
        {/* Header */}
        <section className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-(--color-secondary)" />
            <span className="text-(--color-secondary) text-xs font-bold tracking-[0.22em] uppercase">
             Gallery
            </span>
            <div className="h-px w-8 bg-(--color-secondary)" />
          </div>
          <h1 className="text-black text-4xl sm:text-5xl font-bold">
            Some Of Our{" "}
            <span className="text-(--color-primary)">Photo Galleries</span>
          </h1>
        </section>

        {/* GRID FIXED */}
        <div
          className="
          grid
          gap-2 sm:gap-3
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          auto-rows-[180px]
          sm:auto-rows-[200px]
          md:auto-rows-[220px]
          lg:auto-rows-[270px]
        "
        >
          {galleryItems.map((item, index) => {
            const pattern = mosaicPattern[index % mosaicPattern.length];

            return (
              <div
                key={index}
                onClick={() => setLightbox({ images: imageList, index })}
                className={`relative overflow-hidden rounded-lg group cursor-pointer ${pattern}`}
              >
                <Image src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-end">
                  <div className="p-3 translate-y-full group-hover:translate-y-0 transition">
                    <p className="text-white text-sm font-semibold">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* LIGHTBOX */}
        {lightbox && (
          <Lightbox
            images={lightbox.images}
            startIndex={lightbox.index}
            onClose={() => setLightbox(null)}
          />
        )}
      </div>
    </SmoothScroll>
  );
}
