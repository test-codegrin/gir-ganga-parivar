"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Play, Youtube, ArrowRight, X } from "lucide-react";
import Image from "next/image";
import SmoothScroll from "../../Component/SmothScrolling";

/* ─────────────────────────────────────
   Animations
───────────────────────────────────── */

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ─────────────────────────────────────
   Data
───────────────────────────────────── */

const videoData = [
  {
    id: "fXONzYd59hk",
    start: 4,
    title: "જામનગર જિલ્લાના કાલાવડ તાલુકાના ધુતાપર ગામ",
    description:
      "જામનગર જિલ્લાના કાલાવડ તાલુકાના ધુતાપર ગામે આજની તારીખે જે ચેકડેમમાંથી પાણી જતું રહે છે. તે ચેકડેમ લગભગ 400 ફૂટથી વધુ મોટો એટલે લાંબો છે.",
    tag: "ચેકડેમ",
  },
  {
    id: "QsYMEPEJMSg",
    title: "ચંદુભાઈ વિરાણીનું જળ અભિયાન | ગુજરાતની તરસ છીપાવશે!",
    description:
      "ગીરગંગા પરિવાર ટ્રસ્ટ અને પ્રેરણાદાયી ચંદુભાઈ વિરાણી ગુજરાતને જળસમૃદ્ધ બનાવવા માટે એક ભગીરથ કાર્ય કરી રહ્યા છે.",
    tag: "જળ અભિયાન",
  },
  {
    id: "6TeQkl9PKHU",
    title: "કેન્દ્રીય જળ મંત્રી શ્રી સી.આર.પાટીલ સાહેબ દ્વારા સરાહના",
    description:
      "ગીરગંગા પરિવાર ટ્રસ્ટ દ્વારા વરસાદી અમૃત સમાન શુદ્ધ પાણી બચાવવાના કાર્યની ભૂરી ભૂરી પ્રશંસા.",
    tag: "સરકારી સ્વીકૃતિ",
  },
  {
    id: "B5FhjlVkico",
    title: "ગ્રામ વિકાસ — ખેડૂત સહયોગ અભિયાન",
    description:
      "ગ્રામના નેતાઓ, સરકારી અધિકારીઓ અને સમુદાયના સભ્યો સાથે સહયોગ દ્વારા ગ્રામ વિકાસ.",
    tag: "ગ્રામ વિકાસ",
  },
  {
    id: "XjlOX0_PV_c",
    title: "ગ્રામ નેતાઓ સાથે સહયોગ",
    description:
      "ગ્રામ નેતાઓ, સરકારના અધિકારીઓ અને સમુદાયના સભ્યો સાથે સહયોગ દ્વારા અનેક પ્રોજેક્ટ્સ સફળ.",
    tag: "સામુદાયિક",
  },
  {
    id: "B5FhjlVkico",
    title: "નાનો પ્રયાસ, મોટું પરિવર્તન — જળ ક્રાંતિ 2025",
    description:
      "ભરતભાઈ ભોઘરાનો 'જળ ક્રાંતિ 2025' માટેનો દ્રષ્ટિકોણ, પાણી બચાવ, ચેકડેમ, વૃક્ષારોપણ.",
    tag: "જળ ક્રાંતિ 2025",
  },
];

/* ─────────────────────────────────────
   Types
───────────────────────────────────── */

type Video = (typeof videoData)[number];

/* ─────────────────────────────────────
   Lightbox
───────────────────────────────────── */

function Lightbox({ video, onClose }: { video: Video; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-3 sm:p-6"
      >
        <motion.div
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8 }}
          transition={{ type: "spring", stiffness: 120 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* 16:9 video */}
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
              title={video.title}
              allowFullScreen
            />
          </div>

          {/* Footer */}
          <div className="px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-start gap-3">
            <div className="min-w-0">
              <p className="text-xs font-bold text-(--color-secondary) uppercase mb-0.5">
                {video.tag}
              </p>
              <p className="font-semibold text-gray-800 text-sm sm:text-base leading-snug line-clamp-2">
                {video.title}
              </p>
            </div>

            <button
              onClick={onClose}
              className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────
   Video Card
───────────────────────────────────── */

function VideoCard({ video, onPlay }: { video: Video; onPlay: () => void }) {
  const thumb = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -6, scale: 1.01 }}
      onClick={onPlay}
      className="flex flex-col sm:flex-row rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm cursor-pointer hover:shadow-xl transition"
    >
      {/* Thumbnail — top on mobile, right on sm+ */}
      <div className="relative w-full sm:w-48 md:w-56 shrink-0 order-first sm:order-last">
        {/* Fixed-height on mobile so card doesn't collapse */}
        <div className="relative h-44 sm:h-full min-h-[160px]">
          <Image src={thumb} alt={video.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-(--color-primary) w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg">
              <Play size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 flex flex-col justify-center flex-1 min-w-0">
        <span className="text-xs font-bold text-(--color-secondary) uppercase mb-1.5">
          {video.tag}
        </span>

        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug line-clamp-2">
          {video.title}
        </h3>

        <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
          {video.description}
        </p>

        <div className="flex items-center gap-2 text-sm font-semibold text-(--color-primary)">
          <Play size={14} />
          Watch Video
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────
   Page
───────────────────────────────────── */

export default function VideosPage() {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  return (
    <>
      <SmoothScroll>
        <div className="bg-white min-h-screen text-gray-900">
          {/* ── HERO ── */}
          <section className="relative py-12 sm:py-16 bg-(--bg-tersery)">
            <div className="containers px-4 sm:px-6 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4 leading-tight"
              >
                Water{" "}
                <span className="text-(--color-primary)">Revolution</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto px-4"
              >
                Stories of water conservation, community support and check dam
                restoration across Gujarat.
              </motion.p>
            </div>
          </section>

          {/* ── SECTION TITLE ── */}
          <div className="containers px-4 sm:px-6 mb-6 sm:mb-10 flex justify-between items-center border-b border-gray-200 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-1 h-6 bg-(--color-secondary) rounded-full" />
              <h2 className="text-lg sm:text-xl font-bold">Latest Videos</h2>
            </div>

            <a
              href="https://www.youtube.com/@girgangaparivartrust"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600 hover:text-(--color-primary) transition"
            >
              View All <ArrowRight size={14} />
            </a>
          </div>

          {/* ── VIDEO GRID ── */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="containers px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pb-16 sm:pb-20"
          >
            {videoData.map((video, i) => (
              <VideoCard
                key={i}
                video={video}
                onPlay={() => setActiveVideo(video)}
              />
            ))}
          </motion.div>

          {/* ── CTA ── */}
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="containers px-4 sm:px-6 pb-16 sm:pb-24"
          >
            <div className="bg-linear-to-r from-blue-50 to-indigo-100 rounded-2xl sm:rounded-3xl text-center py-12 sm:py-16 px-6 sm:px-8">
              <p className="text-xs uppercase text-gray-500 mb-3 tracking-widest">
                Gir Ganga Parivar Trust
              </p>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Water Means Life
              </h3>

              <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto mb-6 sm:mb-8">
                Watch our complete journey of water conservation and community
                impact.
              </p>

              <motion.a
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.youtube.com/@girgangaparivartrust"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2
              bg-red-600 hover:bg-red-700 text-white
              text-sm sm:text-base
              px-5 sm:px-8 py-3
              rounded-xl sm:font-semibold
              transition cursor-pointer"
              >
                <Youtube size={18} />
                <span>Visit YouTube Channel</span>
              </motion.a>
            </div>
          </motion.section>

          {/* ── LIGHTBOX ── */}
          {activeVideo && (
            <Lightbox
              video={activeVideo}
              onClose={() => setActiveVideo(null)}
            />
          )}
        </div>
      </SmoothScroll>
    </>
  );
}
