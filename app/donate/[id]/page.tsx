"use client";
import { use, useEffect, useState } from "react";
import Link from "next/link";
import { getDonationById } from "../donateData";
import { motion } from "framer-motion";
import SmoothScroll from "../../../Component/SmothScrolling";

// ─── Shared Detail Layout ────────────────────────────────────────────────────
function DetailLayout({
  id,
  title,
  amount,
  img,
  desc,
  badgeLabel = "Water Conservation",
  bullets = [
    "Conserves rainwater & raises groundwater levels",
    "Supports farmers and rural communities",
    "Long-lasting infrastructure built to last decades",
    "Each donation is GPS-tagged and impact-reported",
  ],
  related = [],
  onDonate,
}: {
  id: string;
  title: string;
  amount: string;
  img?: string;
  desc: string;
  badgeLabel?: string;
  bullets?: string[];
  related?: {
    id: string;
    title: string;
    amount: string;
    img?: string;
    desc: string;
  }[];
  onDonate: () => void;
}) {
  const [activeImg, setActiveImg] = useState(img);
  const allThumbs = img
    ? [
        img,
        ...related
          .filter((r) => r.img)
          .map((r) => r.img!)
          .slice(0, 0),
      ]
    : [];

  return (
    <>
      <SmoothScroll>
        {/* ── Main Detail Section ── */}
        <section className="container ">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-10">
              <Link
                href="/donate"
                className="hover:text-[var(--color-primary)] transition-colors font-medium"
              >
                Donate
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-[var(--color-primary)] font-bold truncate max-w-[220px]">
                {title}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              {/* ── LEFT: Image ── */}
              <div className="flex flex-col gap-4">
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden aspect-square bg-[var(--color-tertiary)] shadow-xl border-2 border-[var(--color-dark)]">
                  {activeImg ? (
                    <img loading="lazy" src={activeImg}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-8xl">💧</span>
                    </div>
                  )}

                  {/* Top-left badge */}
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[var(--color-primary)] text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow border border-[var(--color-dark)]">
                    {badgeLabel}
                  </span>

                  {/* Bottom gradient overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Thumbnails */}
                {allThumbs.length > 1 && (
                  <div className="flex gap-2.5">
                    {allThumbs.map((src, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImg(src)}
                        className={`w-16 h-16 rounded-2xl overflow-hidden border-2 transition-all duration-200 flex-shrink-0 ${
                          activeImg === src
                            ? "border-[var(--color-primary)] shadow-lg scale-105"
                            : "border-[var(--color-dark)] hover:border-[var(--color-primary)] opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img loading="lazy" src={src}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* ── RIGHT: Details ── */}
              <div className="flex flex-col gap-7">
                {/* Title */}
                <div>
                  <p className="text-[var(--color-primary)] text-[10px] font-black uppercase tracking-[0.3em] mb-2 flex items-center gap-2">
                    <span className="w-5 h-px bg-[var(--color-primary)]" />
                    Water Conservation
                  </p>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                    {title}
                  </h1>
                </div>

                {/* Gradient divider */}
                <div className="h-0.5 rounded-full bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-transparent" />

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>

                {/* Contribution display */}
                <div className=" p-1 space-y-3">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-primary)]">
                    Your Contribution
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center rounded-xl overflow-hidden border-2 border-[var(--color-primary)] bg-white shadow-sm w-fit">
                      <span className="bg-[var(--color-tertiary)] px-4 py-3 text-[var(--color-primary)] font-black border-r border-[var(--color-primary)] text-base">
                        ₹
                      </span>
                      <span className="px-6 py-3 font-black text-gray-900 text-2xl tabular-nums">
                        {amount.replace("₹", "")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Donate Button */}
                {/* <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-full"
                >
                  <button
                    type="submit"
                    onClick={onDonate}
                    className="btn-primary w-full group relative inline-flex items-center justify-center gap-2
      font-semibold text-base px-10 py-4 cursor-pointer
      bg-[var(--color-primary)] text-[var(--color-secondary)]
      hover:text-[var(--color-primary)] overflow-hidden"
                  >
                    <span className="relative z-10 flex gap-2 items-center">
                      Donate →
                    </span>

                    <span className="btn-primary-overlay"></span>
                  </button>
                </motion.div> */}

                <div className="w-full flex justify-center items-center">
                  <button
                    type="submit"
                    onClick={onDonate}
                    className="group relative overflow-hidden inline-flex items-center justify-center gap-2 
    text-white font-semibold text-sm w-full lg:text-base px-5 py-3 rounded-lg
    bg-[url('/image/button/button-bg.jpeg')] bg-cover bg-center"
                  >
                    <span className="relative z-10">Donate</span>

                    <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                      →
                    </span>

                    <span className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></span>
                  </button>
                </div>

                {/* Trust badges */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: "✓", label: "80G Tax Exemption" },
                    { icon: "🏛️", label: "Verified NGO" },
                    { icon: "💯", label: "100% Transparent" },
                  ].map((badge) => (
                    <div
                      key={badge.label}
                      className="flex flex-col items-center gap-1.5 bg-[var(--color-tertiary)] border border-[var(--color-dark)] rounded-xl py-3 px-2 text-center"
                    >
                      <span className="text-lg">{badge.icon}</span>
                      <span className="text-[10px] font-bold text-gray-500 leading-tight">
                        {badge.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Description Panel ── */}
            <div className="mt-14 rounded-3xl border border-[var(--color-dark)] overflow-hidden shadow-sm">
              {/* Panel header */}
              <div className="bg-[var(--color-tertiary)] border-b border-[var(--color-dark)] px-8 py-5 flex items-center gap-3">
                <div className="w-1 h-6 bg-[var(--color-primary)] rounded-full" />
                <span className="text-sm font-black uppercase tracking-[0.2em] text-gray-800">
                  Project Description
                </span>
              </div>

              <div className="bg-white p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {/* Description + bullets */}
                  <div className="md:col-span-2 space-y-6">
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {desc}
                    </p>
                    <ul className="space-y-3">
                      {bullets.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className="mt-0.5 w-5 h-5 rounded-full bg-[var(--color-tertiary)] text-[var(--color-primary)] flex items-center justify-center text-[10px] font-black flex-shrink-0 border border-[var(--color-dark)]">
                            ✓
                          </span>
                          <span className="text-sm text-gray-600 leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metadata card */}
                  <div className="bg-[var(--color-tertiary)] rounded-2xl overflow-hidden border border-[var(--color-dark)] h-fit">
                    <div className="bg-[var(--color-primary)] px-5 py-3">
                      <p className="text-white text-[10px] font-black uppercase tracking-[0.25em]">
                        Project Info
                      </p>
                    </div>
                    <div className="p-5 space-y-4">
                      {[
                        { label: "Project ID", value: id },
                        { label: "Region", value: "Gujarat, India" },
                        {
                          label: "Unit Cost",
                          value: amount.startsWith("₹") ? amount : `₹${amount}`,
                        },
                      ].map(({ label, value }) => (
                        <div
                          key={label}
                          className="border-b border-[var(--color-dark)] pb-4 last:border-0 last:pb-0"
                        >
                          <p className="text-[9px] uppercase tracking-[0.25em] text-gray-400 font-black mb-1">
                            {label}
                          </p>
                          <p className="text-gray-800 font-bold text-sm break-all">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related Projects ── */}
        {related.length > 0 && (
          <section className="container pb-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-7 bg-[var(--color-primary)] rounded-full" />
                <h2 className="text-2xl font-black text-gray-800">
                  Related Projects
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {related.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-white border border-[var(--color-primary)] rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg hover:border-[#009dc4] transition-all duration-300"
                  >
                    {/* Image or placeholder */}
                    <div className="relative  overflow-hidden bg-[#E6F7FB]">
                      {item.img ? (
                        <img loading="lazy" src={item.img}
                          alt={item.title}
                          className="w-full  object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-5xl">
                          💧
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <span className="absolute bottom-3 right-3 bg-white/90 text-[var(--color-primary)] font-black text-xs px-3 py-1 rounded-xl">
                        {item.amount}
                      </span>
                    </div>

                    <div className="p-4 flex flex-col gap-3 flex-1">
                      <h3 className="text-sm font-black text-gray-900 group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed flex-1 line-clamp-3">
                        {item.desc}
                      </p>
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full"
                      >
                        <Link
                          href={`/donate/${item.id}`}
                          className="w-full block"
                        >
                          <button
                            type="submit"
                            className="btn-primary w-full group relative inline-flex items-center justify-center gap-2
      font-semibold text-base px-10 py-4 cursor-pointer
      bg-[var(--color-primary)] text-[var(--color-secondary)]
      hover:text-[var(--color-primary)] overflow-hidden"
                          >
                            <span className="relative z-10 flex gap-2 items-center">
                              Donate →
                            </span>

                            <span className="btn-primary-overlay"></span>
                          </button>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </SmoothScroll>
    </>
  );
}

// ─── Main Page Component ─────────────────────────────────────────────────────
export default function DonateDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  // Lazy initializer runs once on mount — no useEffect needed
  const [session] = useState<{ amount: string; mounted: boolean }>(() => {
    if (typeof window === "undefined") return { amount: "", mounted: false };
    const saved = sessionStorage.getItem("donationAmount") || "";
    return { amount: saved, mounted: true };
  });

  const saveToCart = (item: {
    id: string;
    title: string;
    amount: string;
    img?: string;
  }) => {
    sessionStorage.setItem(
      "cartItem",
      JSON.stringify({ ...item, quantity: 1 }),
    );
    window.location.href = "/checkout";
  };

  // ── General Donation ──
  if (id === "general-donation") {
    if (!session.mounted) return null;
    return (
      <DetailLayout
        id={id}
        title="General Donation to Girganga Parivar Trust"
        amount={session.amount}
        img="/image/suport/Donent-hero.png"
        desc="Support water conservation across Gujarat with a donation of your choice. Every rupee directly helps build and maintain checkdams, fund equipment, and bring water to drought-affected communities."
        badgeLabel="General Donation"
        bullets={[
          "Flexible amount — you choose how much to give",
          "Funds allocated to highest-priority projects",
          "Supports checkdam construction & maintenance",
          "100% transparent fund utilization reports",
        ]}
        related={[]}
        onDonate={() =>
          saveToCart({
            id: "general-donation",
            title: "General Donation to Girganga Parivar Trust",
            amount: session.amount,
            img: "/image/suport/Donent-hero.png",
          })
        }
      />
    );
  }

  // ── All Other Donation IDs ──
  const item = getDonationById(id);
  if (!item) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <span className="text-6xl">🔍</span>
        <h2 className="text-2xl font-black text-gray-800">Project Not Found</h2>
        <p className="text-gray-400 text-sm">
          The donation page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/donate"
          className="mt-2 bg-[#009dc4] text-white font-black px-6 py-3 rounded-2xl hover:bg-[#007fa3] transition-all"
        >
          ← Back to Donate
        </Link>
      </div>
    );
  }

  return (
    <DetailLayout
      id={item.id}
      title={item.title}
      amount={item.amount}
      img={item.img}
      desc={item.desc}
      related={item.related}
      onDonate={() =>
        saveToCart({
          id: item.id,
          title: item.title,
          amount: item.amount,
          img: item.img,
        })
      }
    />
  );
}
