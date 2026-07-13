"use client";

import { useState, useEffect, useRef } from "react";
// import "leaflet/dist/leaflet.css";
import { MapPin, Waves, Search, Eye, EyeOff, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Droplets, Sprout, Users, Building2, ArrowUpRight } from "lucide-react";
import type { Map as LeafletMap, Marker as LeafletMarker } from "leaflet";
import SmoothScroll from "../../Component/SmothScrolling";
import { motion } from "framer-motion";
import data from "@/data/water-data.json";

// ── Data ─────────────────────────────────────────────────────────────────────
// ── Stats data ────────────────────────────────────────────────────────────────
const STATS = [
  {
    icon: Droplets,
    number: 19592,
    suffix: "+",
    label: "Water structures developed",
    accent: "#009dc4",
    bg: "bg-[var(--color-primary)]/10",
    border: "border-[var(--color-primary)]/60",
    iconBg: "bg-[var(--color-primary)]",
    iconColor: "text-white",
  },
  {
    icon: Sprout,
    number: 429000,
    suffix: "+",
    label: "Acres farm land rejuvenated",
    accent: "#009dc4",
    bg: "bg-[var(--color-primary)]/10",
    border: "border-[var(--color-primary)]/60",
    iconBg: "bg-[var(--color-primary)]",
    iconColor: "text-white",
  },
  {
    icon: Users,
    number: 151000,
    suffix: "+",
    label: "Farmers benefited",
    accent: "#009dc4",
    bg: "bg-[var(--color-primary)]/10",
    border: "border-[var(--color-primary)]/60",
    iconBg: "bg-[var(--color-primary)]",
    iconColor: "text-white",
  },
  {
    icon: Building2,
    number: 588,
    suffix: "+",
    label: "Gram Panchayats engaged",
    accent: "#009dc4",
    bg: "bg-[var(--color-primary)]/10",
    border: "border-[var(--color-primary)]/60",
    iconBg: "bg-[var(--color-primary)]",
    iconColor: "text-white",
  },
];



// ── Count-up hook ─────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// ── StatCard ──────────────────────────────────────────────────────────────────
function StatCard({
  stat,
  index,
  inView,
}: {
  stat: (typeof STATS)[0];
  index: number;
  inView: boolean;
}) {
  const count = useCountUp(stat.number, 2000, inView);
  const formatted =
    stat.number >= 1000 ? count.toLocaleString("en-IN") : count.toString();

  return (
    <>
      <SmoothScroll>
        <div
          className={`relative group bg-gradient-to-br ${stat.bg} border-2 ${stat.border} rounded-tr-4xl rounded-bl-4xl p-8 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1`}
          style={{
            transitionDelay: `${index * 80}ms`,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(32px)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-5"
            style={{ backgroundColor: stat.accent }}
          />
          <div className="flex items-start mb-6">
            <div
              className={`w-12 h-12 ${stat.iconBg} rounded-xl flex items-center justify-center`}
            >
              <stat.icon
                size={22}
                className={stat.iconColor}
                strokeWidth={1.8}
              />
            </div>
          </div>
          <div className="mb-2">
            <span
              className="text-4xl font-black tracking-tight"
              style={{ color: stat.accent }}
            >
              {formatted}
              <span className="text-3xl">{stat.suffix}</span>
            </span>
          </div>
          <p className="text-gray-500 text-sm font-medium leading-snug">
            {stat.label}
          </p>
          <div className="mt-6 h-0.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-[2s] ease-out"
              style={{
                width: inView ? "100%" : "0%",
                backgroundColor: stat.accent,
                transitionDelay: `${index * 80 + 300}ms`,
              }}
            />
          </div>
        </div>
      </SmoothScroll>
    </>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function OurWorkPage() {
  const [showLakes, setShowLakes] = useState(true);
  const [showDams, setShowDams] = useState(true);
  const [showPanel, setShowPanel] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<LeafletMap | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  type MapMarkerData = {
    marker: LeafletMarker;
    type: "lake" | "dam";
    name: string;
  };
  const markersRef = useRef<MapMarkerData[]>([]);

  type RawItem = {
    NO?: number;
    "Type of dam"?: string;
    VILLAGE?: string;
    TALUKO?: string;
    DISTRICT?: string;
    "Gratitude Latitude"?: string;
  };

  type SheetData = {
    Sheet1?: RawItem[];
    Sheet2?: RawItem[];
  };

  type MapPoint = {
    id: number;
    lat: number;
    lng: number;
    name: string;
  };

  const parseLatLng = (str: string) => {
    if (!str) return null;

    const [lat, lng] = str.split(",").map(Number);
    if (!lat || !lng) return null;

    return { lat, lng };
  };

  const raw: RawItem[] = [
    ...((data.Sheet1 as unknown as RawItem[]) || []),
    ...((data.Sheet2 as unknown as RawItem[]) || []),
  ];

  // ✅ LAKES
  const LAKES: MapPoint[] = raw
    .filter(
      (item: RawItem) =>
        (item["Type of dam"] || "").toLowerCase().includes("lake") ||
        (item["Type of dam"] || "").toLowerCase().includes("sarovar"),
    )
    .map((item: RawItem, i: number) => {
      const coords = parseLatLng(item["Gratitude Latitude"] || "");
      if (!coords) return null;

      return {
        id: i + 1,
        lat: coords.lat,
        lng: coords.lng,
        name: item.VILLAGE || "Lake",
      };
    })
    .filter((item): item is MapPoint => item !== null);

  // ✅ CHECK DAMS
  const CHECK_DAMS: MapPoint[] = raw
    .filter((item: RawItem) =>
      (item["Type of dam"] || "").toLowerCase().includes("check"),
    )
    .map((item: RawItem, i: number) => {
      const coords = parseLatLng(item["Gratitude Latitude"] || "");
      if (!coords) return null;

      return {
        id: i + 1,
        lat: coords.lat,
        lng: coords.lng,
        name: item.VILLAGE || "Check Dam",
      };
    })
    .filter((item): item is MapPoint => item !== null);

  // Step 1: mark client ready
  useEffect(() => {
    setMounted(true);
  }, []);

  // Step 2: init Leaflet after mount
  useEffect(() => {
    if (!mounted || !mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    (async () => {
      const L = (await import("leaflet")).default;

      delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)
        ._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const makeWaterDropIcon = (color: string) =>
        L.divIcon({
          html: `
      <svg width="30" height="40" viewBox="0 0 24 36" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M12 0C12 0 3 12 3 19a9 9 0 0 0 18 0C21 12 12 0 12 0z" 
          fill="${color}" 
          stroke="white"
          stroke-width="2"
        />
      </svg>
    `,
          iconSize: [30, 40],
          iconAnchor: [15, 40],
          className: "",
        });

      const LAKE_ICON = makeWaterDropIcon("#009dc4"); // Blue for lakes
      const DAM_ICON = makeWaterDropIcon("#059669"); // Green for dams

      const map = L.map(mapContainerRef.current!).setView([22.35, 70.65], 10);
      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      LAKES.forEach((lake: MapPoint) => {
        const marker = L.marker([lake.lat, lake.lng], { icon: LAKE_ICON })
          .bindPopup(
            `
          <div style="font-family:sans-serif;min-width:140px">
            <p style="font-weight:700;color:#009dc4;font-size:13px;margin:0 0 4px">${lake.name}</p>
            <p style="color:#9ca3af;font-size:11px;margin:0">Lake · GGPT Structure</p>
          </div>
        `,
          )
          .addTo(map);
        markersRef.current.push({
          marker,
          type: "lake",
          name: lake.name.toLowerCase(),
        });
      });

      CHECK_DAMS.forEach((dam: MapPoint) => {
        const marker = L.marker([dam.lat, dam.lng], { icon: DAM_ICON })
          .bindPopup(
            `
          <div style="font-family:sans-serif;min-width:140px">
            <p style="font-weight:700;color:#059669;font-size:13px;margin:0 0 4px">${dam.name}</p>
            <p style="color:#9ca3af;font-size:11px;margin:0">Check Dam · GGPT Structure</p>
          </div>
        `,
          )
          .addTo(map);
        markersRef.current.push({
          marker,
          type: "dam",
          name: dam.name.toLowerCase(),
        });
      });
    })();

    return () => {
      mapInstanceRef.current?.remove();
      mapInstanceRef.current = null;
      markersRef.current = [];
    };
  }, [mounted]);

  // Step 3: toggle markers on filter change
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    markersRef.current.forEach(({ marker, type, name }) => {
      const matchesSearch =
        !searchQuery || name.includes(searchQuery.toLowerCase());
      const shouldShow =
        matchesSearch &&
        ((type === "lake" && showLakes) || (type === "dam" && showDams));

      if (shouldShow) {
        if (!map.hasLayer(marker)) marker.addTo(map);
      } else {
        if (map.hasLayer(marker)) marker.remove();
      }
    });
  }, [showLakes, showDams, searchQuery]);

  // IntersectionObserver for stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredCount = mounted
    ? markersRef.current.filter(
        (m) =>
          m.name.includes(searchQuery.toLowerCase()) &&
          ((m.type === "lake" && showLakes) || (m.type === "dam" && showDams)),
      ).length
    : 0;

  // Section - 3 logic........
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  const STORIES = [
    {
      quote:
        "Before Girganga Parivar Trust came to our village, we struggled every year with water shortage. Now, with the check dam and recharge borewells, our wells have water throughout the year. My crop yield has doubled.",
      name: "Ramesh Patel",
      role: "Farmer",
      location: "Morbi District",
      initials: "RP",
      num: "01",
    },
    {
      quote:
        "The PPP model is revolutionary. Instead of waiting for government projects that might take years, we partnered with Girganga Parivar Trust and completed our water conservation project in just six months.",
      name: "Meera Ben",
      role: "Village Sarpanch",
      location: "Rajkot",
      initials: "MB",
      num: "02",
    },
    {
      quote:
        "I have worked in this region for over 20 years, and I have never seen such systematic and effective water conservation work. The impact on agricultural productivity has been remarkable.",
      name: "Dr. Suresh Kumar",
      role: "Agricultural Extension Officer",
      location: "Gujarat",
      initials: "SK",
      num: "03",
    },
  ];

  return (
    <>
      <SmoothScroll>
        {/* Section - 1 */}
        <section className="container mx-auto">
          <div className="text-center mb-10">
            <p
              className="text-[var(--color-secondary)]
 text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3"
            >
              <span
                className="w-8 h-px bg-[var(--color-secondary)]
"
              />
              Map
              <span
                className="w-8 h-px bg-[var(--color-secondary)]
"
              />
            </p>
            <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Structures Created by{" "}
              <span className="text-[var(--color-primary)]">
                Girganga Parivar Trust
              </span>
            </h1>
          </div>

          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <div className="flex items-center gap-2 border-2 border-[var(--color-primary)] rounded-xl px-4 py-2.5 bg-[var(--color-primary)]/5 focus-within:border-[var(--color-primary)] focus-within:bg-white transition-colors flex-1 max-w-xs">
              <Search
                size={15}
                className="text-[var(--color-primary)] shrink-0"
              />
              <input
                type="text"
                placeholder="Search structures..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
              />
            </div>

            <button
              onClick={() => setShowLakes((v) => !v)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all ${
                showLakes
                  ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white shadow-lg "
                  : "bg-white border-[var(--color-primary)]/20 text-[var(--color-primary)] hover:border-[var(--color-primary)]"
              }`}
            >
              <Waves size={15} strokeWidth={1.5} />
              Lakes ({LAKES.length})
            </button>

            <button
              onClick={() => setShowDams((v) => !v)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all ${
                showDams
                  ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white shadow-lg"
                  : "bg-white border-[var(--color-primary)]/20 text-[var(--color-primary)] hover:border-[var(--color-primary)]"
              }`}
            >
              <MapPin size={15} strokeWidth={1.5} />
              Check Dams ({CHECK_DAMS.length})
            </button>

            <button
              onClick={() => setShowPanel((v) => !v)}
              className="ml-auto flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-[var(--color-primary)]/20 text-[var(--color-primary)] text-sm font-semibold hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 transition-all"
            >
              {showPanel ? <EyeOff size={15} /> : <Eye size={15} />}
              {showPanel ? "Hide Panel" : "Show Panel"}
            </button>
          </div>

          {/* Map wrapper */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-600/15 shadow-2xl shadow-emerald-600/10">
            {!mounted && (
              <div className="h-[580px] flex flex-col items-center justify-center bg-emerald-50">
                <div className="w-8 h-8 border-2 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin mb-3" />
                <p className="text-[var(--color-primary)] text-sm font-medium">
                  Loading map…
                </p>
              </div>
            )}
            <div
              ref={mapContainerRef}
              className="h-[580px] w-full"
              style={{ display: mounted ? "block" : "none" }}
            />

            {/* Floating side panel */}
            {mounted && showPanel && (
              <div className="absolute top-4 right-4 z-[1000] w-56 bg-white rounded-2xl shadow-xl border border-emerald-600/15 overflow-hidden">
                <div className="bg-[var(--color-primary)] px-4 py-3 flex items-center gap-2">
                  <MapPin size={14} className="text-white" strokeWidth={1.5} />
                  <p className="text-white text-xs font-bold uppercase tracking-widest">
                    Categories
                  </p>
                </div>
                <div
                  onClick={() => setShowLakes((v) => !v)}
                  className={`flex items-center justify-between px-4 py-3.5 border-b border-[var(--color-primary)]/10 cursor-pointer transition-colors ${showLakes ? "bg-emerald-600/5" : "bg-white hover:bg-emerald-600/5"}`}
                >
                  <div className="flex items-center gap-2.5">
                    <Waves
                      size={14}
                      className="text-[var(--color-primary)]"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm font-semibold text-[var(--color-primary)]">
                      Lake ({LAKES.length})
                    </span>
                  </div>
                  <span
                    className={`w-3 h-3 rounded-full border-2 transition-colors ${showLakes ? "bg-[var(--color-primary)] border-[var(--color-primary)]" : "bg-white border-gray-300"}`}
                  />
                </div>
                <div
                  onClick={() => setShowDams((v) => !v)}
                  className={`flex items-center justify-between px-4 py-3.5 cursor-pointer transition-colors ${showDams ? "bg-emerald-600/5" : "bg-white hover:bg-emerald-600/5"}`}
                >
                  <div className="flex items-center gap-2.5">
                    <MapPin
                      size={14}
                      className="text-[var(--color-primary)]"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm font-semibold text-[var(--color-primary)]">
                      Check Dam ({CHECK_DAMS.length})
                    </span>
                  </div>
                  <span
                    className={`w-3 h-3 rounded-full border-2 transition-colors ${showDams ? "bg-[var(--color-primary)] border-[var(--color-primary)]" : "bg-white border-gray-300"}`}
                  />
                </div>
                <div className="px-4 py-2.5 bg-emerald-600/5 border-t border-emerald-600/10">
                  <p className="text-[10px] text-[var(--color-primary)]/60 font-bold uppercase tracking-widest text-center">
                    GGPT · Gujarat, India
                  </p>
                </div>
              </div>
            )}

            {/* Search badge */}
            {mounted && searchQuery && (
              <div className="absolute bottom-4 left-4 z-[1000] bg-white border border-emerald-600/20 rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-2">
                <Search size={13} className="text-[var(--color-primary)]" />
                <span className="text-xs text-gray-600 font-medium">
                  {filteredCount} result(s) for{" "}
                  <span className="text-[var(--color-primary)] font-bold">
                    {searchQuery}
                  </span>
                </span>
              </div>
            )}
          </div>
        </section>

        {/*Section - 2 */}
        <section
          ref={sectionRef}
          className="container relative bg-white overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#059669 1px, transparent 1px), linear-gradient(90deg, #059669 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative max-w-6xl mx-auto">
            <div
              className="text-center mb-16 transition-all duration-700"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <p
                className="text-[var(--color-secondary)]
 text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3"
              >
                <span
                  className="w-8 h-px bg-[var(--color-secondary)]
"
                />
                Proven Impact
                <span
                  className="w-8 h-px bg-[var(--color-secondary)]
"
                />
              </p>
              <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Measurable transformation <br />
                <span className="text-[var(--color-primary)]">
                  across Gujarat, India
                </span>
              </h1>

              <div className="mt-8">


                <div className="w-full flex justify-center ">
                  <Link
                    href="/donate"
                    className="group relative overflow-hidden inline-flex items-center justify-center gap-2 
    text-white font-semibold text-sm w-[250px] lg:text-base px-5 py-3 rounded-lg
    bg-[url('/image/button/button-bg.jpeg')] bg-cover bg-center"
                  >
                    <span className="relative z-10 text-center">
                      Explore Our Impact
                    </span>

                    <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                      →
                    </span>

                    <span className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {STATS.map((stat, i) => (
                <StatCard
                  key={stat.label}
                  stat={stat}
                  index={i}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Section - 3 */}
        <section
          ref={ref}
          className="container bg-white py-24 px-4 overflow-hidden"
        >
          <div className="max-w-6xl mx-auto">
            {/* ── Header ── */}
            <div
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 transition-all duration-700"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
              }}
            >
              <div>
                <p
                  className="text-[var(--color-secondary)]
 text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3"
                >
                  <span
                    className="w-8 h-px bg-[var(--color-secondary)]
"
                  />
                  What People Say
                  <span
                    className="w-8 h-px bg-[var(--color-secondary)]
"
                  />
                </p>
                <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-center lg:text-start">
                  Success{" "}
                  <span className="text-[var(--color-primary)]"> Stories</span>
                </h1>
              </div>
              <p className="text-gray-400 text-sm lg:max-w-md leading-relaxed md:text-right text-center lg:text-start">
                Real voices from communities transformed by Girganga Parivar
                Trust water conservation work.
              </p>
            </div>

            {/* ── Main layout: left selector + right big card ── */}
            <div className="grid md:grid-cols-[280px_1fr] gap-6 items-stretch">
              {/* Left — number list selector */}
              <div className="flex flex-col gap-3">
                {STORIES.map((s, i) => (
                  <button
                    key={s.name}
                    onClick={() => setActive(i)}
                    className={`group text-left rounded-2xl px-6 py-5 border-2 transition-all duration-300 ${
                      active === i
                        ? "bg-[var(--color-primary)] border-[var(--color-primary)] shadow-lg shadow-emerald-600/25"
                        : "bg-white border-gray-100 hover:border-emerald-600/30 hover:bg-[var(--color-primary)]/50"
                    }`}
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateX(0)" : "translateX(-24px)",
                      transitionDelay: `${i * 100 + 100}ms`,
                      transition:
                        "opacity 600ms, transform 600ms, background 300ms, border 300ms, box-shadow 300ms",
                    }}
                  >
                    <div
                      className={`text-3xl font-black mb-1 transition-colors ${active === i ? "text-[var(--color-secondary)]/30" : "text-[var(--color-primary)]/20"}`}
                    >
                      {s.num}
                    </div>
                    <p
                      className={`font-black text-sm transition-colors ${active === i ? "text-[var(--color-secondary)]" : "text-gray-800"}`}
                    >
                      {s.name}
                    </p>
                    <p
                      className={`text-xs mt-0.5 transition-colors ${active === i ? "text-[var(--color-secondary)]/60" : "text-gray-400"}`}
                    >
                      {s.role}
                    </p>
                  </button>
                ))}
              </div>

              {/* Right — big active card */}
              <div
                className="relative bg-[var(--color-primary)] rounded-3xl overflow-hidden p-5 md:p-10 flex flex-col justify-between min-h-[340px]"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateX(0)" : "translateX(24px)",
                  transitionDelay: "300ms",
                  transitionDuration: "700ms",
                  transition: "opacity 700ms, transform 700ms",
                }}
              >
                {/* Big number watermark */}
                <span className="absolute right-8 top-6 text-[8rem] font-black text-[var(--color-secondary)]/[0.04] leading-none select-none pointer-events-none">
                  {STORIES[active].num}
                </span>

                {/* Large open-quote */}
                <div className="relative z-10">
                  <div
                    className="text-[var(--color-secondary)]
 text-7xl font-black leading-none mb-4 font-serif"
                  >
                    &ldquo;
                  </div>
                  <p className="text-white text-xl font-medium leading-relaxed max-w-xl transition-all duration-300">
                    {STORIES[active].quote}
                  </p>
                </div>

                {/* Author row */}
                <div className="relative z-10 flex flex-wrap items-center gap-4 mt-10 pt-8 border-t border-white/10">
                  <div
                    className="w-12 h-12 bg-[var(--color-secondary)]
 rounded-2xl flex items-center justify-center text-black font-black text-sm shrink-0"
                  >
                    {STORIES[active].initials}
                  </div>
                  <div>
                    <p
                      className="text-[var(--color-secondary)]
 font-black"
                    >
                      {STORIES[active].name}
                    </p>
                    <p
                      className="text-[var(--color-secondary)]
 text-xs mt-0.5"
                    >
                      {STORIES[active].role} · {STORIES[active].location}
                    </p>
                  </div>
                  {/* Dot indicators */}
                  <div className="ml-auto flex gap-2">
                    {STORIES.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`rounded-full transition-all duration-300 ${active === i ? "w-6 h-2 bg-[var(--color-secondary)]" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Bottom featured strip ── */}
            <div
              className="mt-6  border border-[var(--color-primary)] rounded-2xl px-8 py-6 flex flex-col lg:flex-row items-center gap-6 justify-between transition-all duration-700"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "600ms",
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[var(--color-primary)] rounded-xl flex items-center justify-center text-white shrink-0 text-lg font-black">
                  &ldquo;
                </div>
                <p className="text-gray-700 text-sm italic leading-relaxed max-w-xl">
                  After deepening the check dam, water stayed till summer. Our
                  borewells revived, and migration stopped.
                  <span className="block text-[var(--color-primary)] font-black not-italic mt-1">
                    — Chhaganbhai Patel, Rajkot
                  </span>
                </p>
              </div>

              {/* <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className=""
              >
                <Link href="/donate">
                  <button
                    type="submit"
                    className="btn-primary  group relative  gap-2
      font-semibold text-xs md:text-base px-10 py-4 cursor-pointer
      bg-[var(--color-primary)] text-[var(--color-secondary)]
      hover:text-[var(--color-primary)] overflow-hidden"
                  >
                    <span className="relative z-10 flex gap-2 items-center">
                      Contribute Now →
                    </span>

                    <span className="btn-primary-overlay"></span>
                  </button>
                </Link>
              </motion.div> */}
              <Link
                href="/donate"
                className="group relative overflow-hidden flex items-center justify-center  gap-2 
  text-white font-semibold text-sm w-[200px] md:w-[220px] lg:text-base px-5 py-3 rounded-lg
  bg-[url('/image/button/button-bg.jpeg')] bg-cover bg-center"
              >
                <span className="relative z-10"> Contribute Now </span>

                <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                  →
                </span>

                <span className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></span>
              </Link>
            </div>
          </div>
        </section>

        {/* Section - 4 */}
        <section className="container">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <p className="text-[var(--color-primary)] text-[10px] font-bold tracking-[0.25em] uppercase mb-3 flex items-center gap-3 justify-center lg:justify-start">
                  <span className="w-8 h-px bg-[var(--color-primary)]" />
                  Explore More
                </p>
                <h2 className="text-black text-4xl sm:text-5xl font-bold leading-tight text-center lg:text-start">
                  Know More{" "}
                  <span className="text-[var(--color-primary)]">About Us</span>
                </h2>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed text-center lg:text-start lg:max-w-xs">
                Repairing, deepening, and raising check dams. A rainwater
                harvesting initiative.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  img: "/image/support-structure-1.jpg",
                  label: "Awards",
                  Icon: Award,
                  href: "/awards",
                  desc: "Honoring the recognitions and milestones achieved through impactful rural water conservation work.",
                },
                {
                  img: "/image/our-work-2.jpg",
                  label: "Mission",
                  Icon: MapPin,
                  href: "/about-us",
                  desc: "Our commitment to sustainable water conservation, rural development, and community empowerment.",
                },
                {
                  img: "/image/our-work-3.jpg",
                  label: "Check Dams",
                  Icon: Waves,
                  href: "/check-dam-creat",
                  desc: "Building and mapping check dams to recharge groundwater across drought-prone regions of Gujarat.",
                },
              ].map(({ img, label, Icon, href, desc }) => (
                <Link key={label} href={href}>
                  <div
                    className="group relative bg-[#111815] rounded-2xl overflow-hidden
                     transition-all duration-300 cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={img}
                        alt={label}
                        fill
                        className="object-cover h-auto group-hover:scale-105 transition-transform duration-500 brightness-75" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111815] via-transparent to-transparent" />

                      {/* Icon badge */}
                      <div className="absolute top-4 right-4 w-9 h-9 bg-[var(--color-primary)] rounded-lg flex items-center justify-center shadow-md">
                        <Icon
                          className="text-white"
                          size={16}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="p-5">
                      <h3
                        className="text-white font-bold text-lg mb-2"
                        style={{
                          fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                      >
                        {label}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {desc}
                      </p>

                      <span
                        className="mt-4 inline-flex items-center gap-2 text-[var(--color-secondary)]
 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        Explore
                        <span
                          className="w-5 h-px bg-[var(--color-secondary)]
 group-hover:w-8 transition-all duration-300"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
                  SECTION 4 — IMPACT HIGHLIGHTS + GUJARAT MAP
              ══════════════════════════════════════════════ */}
        <section className="bg-white container">
          <div className="max-w-7xl justify-self-center">
            <motion.div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-8 bg-[var(--color-secondary)]" />
                <span className="text-[var(--color-secondary)] text-xs font-bold tracking-[0.22em] uppercase">
                  Geographic Reach
                </span>
                <div className="h-px w-8 bg-[var(--color-secondary)]" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Impact{" "}
                <span className="text-[var(--color-primary)]">Highlights</span>
              </h2>

              <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-xl mx-auto">
                Transforming drought-prone Saurashtra and Gujarat through
                community-led water structures across 10 districts.
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
                <div className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-[var(--color-primary)]/30 hover:shadow-md transition-all duration-300 group">
                  <div className="bg-[var(--color-primary)] w-1.5 rounded-full flex-shrink-0 self-stretch min-h-[3rem] group-hover:w-2 transition-all duration-300" />
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
                <div className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-[var(--color-primary)]/30 hover:shadow-md transition-all duration-300 group">
                  <div className="bg-[var(--color-secondary)] w-1.5 rounded-full flex-shrink-0 self-stretch min-h-[3rem] group-hover:w-2 transition-all duration-300" />
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-0.5">
                      Villages Transformed
                    </p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                      619 Villages
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Rural communities across Saurashtra now have reliable
                      groundwater access.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-[var(--color-primary)]/30 hover:shadow-md transition-all duration-300 group">
                  <div className="bg-[var(--color-accent)] w-1.5 rounded-full flex-shrink-0 self-stretch min-h-[3rem] group-hover:w-2 transition-all duration-300" />
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-0.5">
                      Water Structures Built
                    </p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                     	19,592+ Structures
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Check dams, bore wells, and allied structures across 35
                      blocks.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-[var(--color-primary)]/30 hover:shadow-md transition-all duration-300 group">
                  <div className="bg-[var(--color-greenish)] w-1.5 rounded-full flex-shrink-0 self-stretch min-h-[3rem] group-hover:w-2 transition-all duration-300" />
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
      </SmoothScroll>
    </>
  );
}
