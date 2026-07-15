"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import SmoothScroll from "../../Component/SmothScrolling";
import { motion, AnimatePresence } from "framer-motion"; // AnimatePresence ઉમેર્યું
import { FiPlus, FiX, FiExternalLink } from "react-icons/fi"; // આઈકોન્સ ઉમેર્યા

type Award = {
  id: number;
  title: string;
  image: string;
  dic: string;
  badge: string;
  year: string;
  link?: string;
};

const awards: Award[] = [
  {
    id: 1,
    title: "Jal Prahari Samman",
    image: "/image/Award/Jal_Pahari_Award.webp",
    dic: "Conferred for outstanding contribution to water conservation and groundwater recharge. Supported by the Ministry of Jal Shakti, Government of India, and implemented by GIZ India, recognizing GGPT's grassroots leadership in decentralized water security.",
    badge: "National",
    year: "2023",
  },
  {
    id: 2,
    title: "Jal Ratna Award",
    image: "/image/Award/JalRatanaAward.webp",
    dic: "Jal Ratna Award - Excellence in Water Conservation",
    badge: "Excellence",
    year: "2024",
  },
  {
    id: 3,
    title: "Mayor's Award",
    image: "/image/Award/Mayors_Award.webp",
    dic: "Mayor's Award 2024 - Rajkot Municipal Corporation",
    badge: "Municipal",
    year: "2024",
  },
  {
    id: 4,
    title: "National Water Mission",
    image: "/image/Award/National_water_mission_Award.webp",
    dic: "MoU with National Water Mission, Ministry of Jal Shakti",
    badge: "Government",
    year: "2024",
  },
  {
    id: 5,
    title: "Best NGO Award (JSJB 1.0)",
    image: "/image/Award/Best_NGO_Award.webp",
    dic: "Honoured by the Ministry of Jal Shakti under Jal Sanchay Jan Bhagidari 1.0, securing 2nd rank at the All-India level in the Best NGOs category for community-led water conservation and decentralized water resource restoration.",
    badge: "Best NGO",
    year: "2025",
  },
  {
    id: 6,
    title: "Jal Sanchay & Jan Bhagidari Award",
    image: "/image/Award/JSJB_Award_2025.webp",
    dic: "Jal Sanchay & Jan Bhagidari Award",
    badge: "Jal Sanchay & Jan Bhagidari Award",
    year: "2025",
  },
  {
    id: 7,
    title: "Indian CSR Award",
    image: "/image/Award/Indian_CSR_Award_2025.webp",
    dic: "Honoured under the category \"Most Impactful NGO of the Year – Water Conservation\" for large-scale grassroots efforts in groundwater recharge and community-driven environmental sustainability.",
    badge: "CSR",
    year: "2025",
  },
  {
    id: 8,
    title: "Global CSR & ESG Award",
    image: "/image/Award/Global_CSR_ESG_Award_2025.webp",
    dic: "Recognized as \"Best Water Conservation Initiative of the Year\" for outstanding contribution to groundwater recharge, decentralized water conservation, and community-led environmental sustainability in Gujarat.",
    badge: "Global",
    year: "2025",
    link: "https://www.devdiscourse.com/article/business/3418570-girganga-parivar-trust-champion-of-global-csr-esg-2025-for-water-conservation",
  },
  {
    id: 9,
    title: "CSR & Sustainability Conclave Award",
    image: "/image/Award/CSR_Sustainability_Award_2025.webp",
    dic: "Conferred \"Most Impactful CSR Program in Water Conservation & Management\" at the CSR & Sustainability Conclave 2025, New Delhi, for an innovative and scalable community-led water conservation model.",
    badge: "Conclave",
    year: "2025",
  },
  {
    id: 10,
    title: "Media Recognition - Studio on Wheels",
    image: "/image/Award/Media_Recognition_studio_on_wheels_Award.webp",
    dic: "Special recognition from Studio on Wheels (Gujarat First News) for outstanding contribution towards community development and grassroots impact through water conservation initiatives.",
    badge: "Media",
    year: "2025",
  },
  {
    id: 11,
    title: "Rotary Club of Rajkot Midtown",
    image: "/image/Award/Appreciation_by_Rotary_Club_of_Rajkot_Midtown_2025.webp",
    dic: "Felicitated by Rotary Club of Rajkot Midtown for impactful grassroots work in water conservation and community service across Saurashtra.",
    badge: "Community",
    year: "2025",
  },
  {
    id: 12,
    title: "Dr. BML Munjal Social Impact Award",
    image: "/image/Award/Dr.BML_Munjal_Social_Impact_Award_2026.webp",
    dic: "Recognized for grassroots contribution to water conservation, groundwater recharge, and community-led climate resilience initiatives in Gujarat, supported by Hero Future Energies and the Raman Kant Munjal Foundation.",
    badge: "Social Impact",
    year: "2026",
  },
];

const newsUrl =
  "https://www.devdiscourse.com/article/business/3418570-girganga-parivar-trust-champion-of-global-csr-esg-2025-for-water-conservation";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

// ── AwardCard Component ──
function AwardCard({
  award,
  index,
  onImageClick,
}: {
  award: Award;
  index: number;
  onImageClick: (img: string) => void;
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className="group relative bg-white rounded-3xl overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:shadow-lg border border-[#e6f4ee]"
      onClick={() => onImageClick(award.image)}
      style={{
        boxShadow:
          "0 2px 24px 0 rgba(16,185,129,0.07), 0 1px 4px 0 rgba(0,0,0,0.05)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease, transform 0.6s ease`,
        transitionDelay: `${index * 90}ms`,
      }}
    >
      {/* Image Container with Hover Overlay & Plus Sign */}
      <div className="relative w-full h-72 overflow-hidden">
        <Image src={award.image}
          alt={award.title}
          fill
          
          className="object-cover transition-transform duration-300" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} />

        {/* Hover Overlay with Plus Sign */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
            <FiPlus className="text-white text-3xl" />
          </div>
        </div>

        {/* Year ribbon */}
        <span className="absolute top-3 right-3 z-10 text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/90 text-(--color-primary) shadow-sm">
          {award.year}
        </span>

        {/* Gradient Overlay for style (static) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.1) 0%, transparent 45%)",
          }}
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-5 py-6 gap-2 bg-white">
        <span className="self-start text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full border border-(--color-primary) select-none bg-(--color-primary)/10 text-(--color-primary)">
          {award.badge}
        </span>

        <h3 className="text-gray-900 font-bold text-lg leading-snug mt-2 group-hover:text-(--color-primary) transition-colors duration-300">
          {award.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 flex-1 mt-1">
          {award.dic}
        </p>

        {award.link && (
          <a
            href={award.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-(--color-primary) mt-2 hover:gap-2.5 transition-all duration-300 w-fit"
          >
            Read Coverage <FiExternalLink size={13} />
          </a>
        )}
      </div>
    </div>
  );
}

// ── Main AwardsSection Component ──
export default function AwardsSection() {
  const { ref: headingRef, inView: headingVisible } = useInView(0.2);
  const [selectedImg, setSelectedImg] = useState<string | null>(null); 

  return (
    <SmoothScroll>
      {/* ── Hero / Page Header ── */}
      <section className="container relative w-full text-center overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-(--color-secondary) text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-(--color-secondary)" />
              Recognition & Honours
              <span className="w-8 h-px bg-(--color-secondary)" />
            </p>
            <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Awards Received by{" "}
              <span className="text-(--color-primary)">
                Girganga Parivar
              </span>
            </h1>
            <p className="text-gray-500 text-sm mt-5 max-w-xl mx-auto leading-relaxed">
              Nationally and globally recognized for outstanding contributions
              to water conservation, river rejuvenation, and sustainable
              environmental initiatives across Gujarat.
            </p>
            <div className="w-16 h-0.5 bg-(--color-primary) mx-auto mt-10 rounded-full" />
          </div>
        </div>
      </section>

      {/* ── Award Cards Grid ── */}
      <section className="container">
        <div className="max-w-7xl mx-auto">
          {/* Stats strip */}
          <div
            ref={headingRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-14 transition-all duration-700"
            style={{
              opacity: headingVisible ? 1 : 0,
              transform: headingVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {[
              { value: "12+", label: "Awards Won" },
              { value: "2026", label: "Latest Recognition" },
              { value: "National", label: "Level Honour" },
              { value: "Global", label: "Level Honour" },
            ].map((stat, i) => (
              <div
                key={`${stat.label}-${i}`}
                className="text-center rounded-2xl py-6 px-3 bg-white shadow-sm border border-[#e6f4ee]"
              >
                <p
                  className="font-extrabold text-(--color-primary)"
                  style={{
                    fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Cards with props pass */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 pb-14">
            {awards.map((award, index) => (
              <AwardCard
                key={award.id}
                award={award}
                index={index}
                onImageClick={setSelectedImg} 
              />
            ))}
          </div>

          {/* Featured news strip */}
          <div className="mb-20">
            <a
              href={newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl px-6 sm:px-8 py-6 bg-(--color-primary)/5 border border-(--color-primary)/20 hover:bg-(--color-primary)/10 transition-colors duration-300"
            >
              <div className="text-center sm:text-left">
                <p className="text-[10px] font-bold tracking-widest uppercase text-(--color-secondary) mb-1">
                  Featured in the Press
                </p>
                <p className="text-gray-900 font-semibold text-sm sm:text-base">
                  Girganga Parivar Trust: Champion of Global CSR &amp; ESG 2025
                  for Water Conservation
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-(--color-primary) shrink-0 group-hover:gap-3 transition-all duration-300">
                Read the Story <FiExternalLink size={16} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Lightbox for Single Image (AnimatePresence) ── */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-white/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setSelectedImg(null)} 
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-black text-white hover:scale-110 transition-transform"
              onClick={() => setSelectedImg(null)}
            >
              <FiX size={24} />
            </button>

            {/* Image Containter with Scale Animation */}
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative max-w-7xl w-full h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} 
            >
              <Image src={selectedImg}
                alt="Award Zoom"
                fill
                className="object-contain rounded-2xl"
                priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SmoothScroll>
  );
}