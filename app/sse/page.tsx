"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import SmoothScroll from "../../Component/SmothScrolling";

import {
  TrendingUp,
  Droplets,
  Award,
  Users,
  Building2,
  CheckCircle2,
  ChevronDown,
  Phone,
  Mail,
  Sparkles,
  Search,
  Check,
} from "lucide-react";

import {
  FaRupeeSign,
  FaCheckCircle,
} from "react-icons/fa";

import {
  outcomeSlices,
  publicIssueDetails,
  snapshotMetrics,
  waterChallenges,
  contributionImpactTiers,
  investorCategories,
  sseBenefits,
  ggptTrackRecord,
  ggptAwards,
  sseFaqs,
  INDIAN_STATES_OPTIONS,
  INVESTOR_CATEGORY_OPTIONS,
} from "../../data/sse-data";

// ─── ANIMATION VARIANTS ──────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// ─── SVG PIE CHART HELPER ─────────────────────────────────────────
function getArcPath(
  cx: number,
  cy: number,
  rOuter: number,
  rInner: number,
  startAngleDeg: number,
  endAngleDeg: number
) {
  const startRad = ((startAngleDeg - 90) * Math.PI) / 180;
  const endRad = ((endAngleDeg - 90) * Math.PI) / 180;

  const x1Outer = cx + rOuter * Math.cos(startRad);
  const y1Outer = cy + rOuter * Math.sin(startRad);
  const x2Outer = cx + rOuter * Math.cos(endRad);
  const y2Outer = cy + rOuter * Math.sin(endRad);

  const x1Inner = cx + rInner * Math.cos(startRad);
  const y1Inner = cy + rInner * Math.sin(startRad);
  const x2Inner = cx + rInner * Math.cos(endRad);
  const y2Inner = cy + rInner * Math.sin(endRad);

  const largeArcFlag = endAngleDeg - startAngleDeg > 180 ? 1 : 0;

  return [
    `M ${x1Outer} ${y1Outer}`,
    `A ${rOuter} ${rOuter} 0 ${largeArcFlag} 1 ${x2Outer} ${y2Outer}`,
    `L ${x2Inner} ${y2Inner}`,
    `A ${rInner} ${rInner} 0 ${largeArcFlag} 0 ${x1Inner} ${y1Inner}`,
    "Z",
  ].join(" ");
}



function InvestmentPieChart() {
  const [activeId, setActiveId] = useState<string | null>(null);

  // Compute angles for pie slices
  const totalSum = outcomeSlices.reduce((acc, curr) => acc + curr.percentage, 0);

  const slicesWithGeometry = outcomeSlices.map((slice, index) => {
    const startAngle = outcomeSlices
      .slice(0, index)
      .reduce((acc, curr) => acc + (curr.percentage / totalSum) * 360, 0);
    const angleSpan = (slice.percentage / totalSum) * 360;
    const endAngle = startAngle + angleSpan;
    const midAngle = startAngle + angleSpan / 2;

    const pathData = getArcPath(200, 200, 160, 75, startAngle, endAngle);

    // Mid angle vector for hover offset
    const midRad = ((midAngle - 90) * Math.PI) / 180;
    const hoverDx = Math.cos(midRad) * 10;
    const hoverDy = Math.sin(midRad) * 10;

    return {
      ...slice,
      startAngle,
      endAngle,
      midAngle,
      pathData,
      hoverDx,
      hoverDy,
    };
  });

  const currentActiveSlice = slicesWithGeometry.find((s) => s.id === activeId);

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-slate-200 shadow-xl space-y-6 sm:space-y-8">
      {/* Top Header */}
      <div className="text-center sm:text-left border-b border-slate-100 pb-5 sm:pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
            Resource Allocation Pie Chart
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Integrated Water Conservation & Groundwater Recharge Project (Paddhari Block, Rajkot District)
          </p>
        </div>
        <div className="w-full sm:w-auto bg-slate-50 border border-slate-200 rounded-2xl p-3 sm:px-5 text-center sm:text-right shrink-0">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Issue Size</p>
          <p className="text-lg font-black text-(--color-primary)">₹1,08,73,000</p>
        </div>
      </div>

      {/* Main Grid: Pie SVG + Legend */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left: SVG Pie Chart */}
        <div
          className="lg:col-span-6 min-h-[300px] sm:min-h-[390px] lg:min-h-[470px] flex flex-col items-center justify-center relative"
          onMouseLeave={() => setActiveId(null)}
        >
          <div className="relative w-full max-w-[260px] aspect-square sm:max-w-[360px]">
            <svg viewBox="0 0 400 400" className="w-full h-full filter drop-shadow-md overflow-visible">
              <defs>
                <filter id="pieShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="6" stdDeviation="8" floodOpacity="0.15" />
                </filter>
                {slicesWithGeometry.map((s) => (
                  <linearGradient key={`grad-${s.id}`} id={`grad-${s.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={s.lightColor} />
                    <stop offset="100%" stopColor={s.color} />
                  </linearGradient>
                ))}
              </defs>

              {/* Pie Slices */}
              <g filter="url(#pieShadow)">
                {slicesWithGeometry.map((slice) => {
                  const isActive = activeId === slice.id;
                  return (
                    <path
                      key={slice.id}
                      d={slice.pathData}
                      fill={`url(#grad-${slice.id})`}
                      stroke="#ffffff"
                      strokeWidth="2.5"
                      className="cursor-pointer transition-all duration-300 ease-out"
                      style={{
                        transform: isActive
                          ? `translate(${slice.hoverDx}px, ${slice.hoverDy}px) scale(1.03)`
                          : "translate(0px, 0px) scale(1)",
                        transformOrigin: "200px 200px",
                        opacity: activeId && !isActive ? 0.75 : 1,
                      }}
                      onMouseEnter={() => setActiveId(slice.id)}
                    />
                  );
                })}
              </g>

              {/* Center Donut Ring Hole with Live Data */}
              <circle cx="200" cy="200" r="72" fill="#ffffff" className="drop-shadow-inner" />
              <circle cx="200" cy="200" r="72" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
            </svg>

            {/* Central Text Callout */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 pointer-events-none">
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
                {currentActiveSlice ? `${currentActiveSlice.percentage}%` : "100%"}
              </span>
              <span
                className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wide line-clamp-1 max-w-[130px] mt-0.5"
                style={{ color: currentActiveSlice ? currentActiveSlice.color : "var(--color-primary)" }}
              >
                {currentActiveSlice
                  ? currentActiveSlice.label.replace("Outcome ", "O").replace(" – ", ": ")
                  : "Total Allocation"}
              </span>
              <span className="text-[10px] text-slate-400 font-semibold mt-0.5">
                {currentActiveSlice ? currentActiveSlice.amount : "₹1,08,73,000"}
              </span>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 font-medium mt-3 italic flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Financial Allocation
          </p>
        </div>

        {/* Right: Legend Box matching official document format */}
        <div
          className="lg:col-span-6 bg-slate-50/80 border border-slate-200 rounded-2xl p-4 sm:p-6 space-y-4 lg:min-h-[470px] flex flex-col justify-start"
          onMouseLeave={() => setActiveId(null)}
        >
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <h4 className="font-extrabold text-slate-900 text-[11px] sm:text-sm uppercase tracking-wider">
              Project Outcomes & Breakdown
            </h4>
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200 shrink-0">
              5 Key Allocations
            </span>
          </div>

          <div className="space-y-2.5">
            {slicesWithGeometry.map((item) => {
              const isActive = activeId === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveId(item.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    isActive
                      ? `${item.bgClass} shadow-md`
                      : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
                    <div className="flex items-center gap-3 min-w-0 sm:pr-2">
                      <span
                        className="w-4 h-4 rounded-full shrink-0 shadow-sm"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="font-bold text-xs sm:text-sm text-slate-900">
                        {item.label}
                      </span>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pl-7 sm:pl-0">
                      <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
                        {item.amount}
                      </span>
                      <span
                        className="text-xs font-black px-2.5 py-1 rounded-lg text-white"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.percentage}%
                      </span>
                    </div>
                  </div>

                  {/* Relative Description displayed directly under its title */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.2 }}
                      className="mt-2.5 pt-2.5 border-t border-slate-200/70 text-xs text-slate-600 leading-relaxed sm:pl-7"
                    >
                      {item.desc}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer Banner Inside Card */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-emerald-900 text-white p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-start sm:items-center gap-3">
          <Droplets className="w-6 h-6 text-(--color-secondary) shrink-0" />
          <p className="text-xs sm:text-sm font-semibold">
            <strong className="text-white">Your investment creates measurable impact.</strong> Together for a Water Secure and Sustainable Rural Gujarat.
          </p>
        </div>
        <a
          href="#register-interest"
          className="group relative overflow-hidden inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-lg bg-[url('/image/button/button-bg.jpeg')] bg-cover bg-center text-white font-semibold text-xs tracking-wider uppercase shrink-0 shadow-md hover:-translate-y-0.5 transition-transform"
        >
          <span className="relative z-10">Pledge Investment</span>
          <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
          <span className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition" />
        </a>
      </div>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
      <span className="block w-5 sm:w-7 h-px bg-(--color-secondary)" />
      <span className="text-[0.6rem] sm:text-[0.65rem] font-bold tracking-[0.18em] sm:tracking-[0.25em] uppercase text-(--color-secondary) font-[var(--font)] text-center">
        {children}
      </span>
      <span className="block w-5 sm:w-7 h-px bg-(--color-secondary)" />
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <div className="text-center mb-8 sm:mb-10 space-y-3 sm:space-y-4 max-w-3xl mx-auto font-[var(--font)]">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className={`font-[var(--font)] text-[clamp(1.75rem,6vw,3rem)] font-bold leading-[1.15] mb-2 ${dark ? "text-white" : "text-gray-900"}`}>
        {title} <span className="text-(--color-primary)">{highlight}</span>
      </h2>
      {subtitle && (
        <p className={`text-sm sm:text-[0.92rem] leading-[1.7] sm:leading-[1.8] font-[var(--font)] ${dark ? "text-cyan-100/80" : "text-gray-500"}`}>
          {subtitle}
        </p>
      )}
      <div className="w-12 h-[3px] bg-(--color-secondary) rounded-full mx-auto mt-4" />
    </div>
  );
}



function CustomDropdown({
  label,
  value,
  options,
  onChange,
  placeholder = "Select an option",
}: {
  label: string;
  value: string;
  options: { label: string; value: string; desc?: string }[];
  onChange: (val: string) => void;
  placeholder?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full px-3 sm:px-4 py-3 rounded-xl border text-left flex items-center justify-between gap-2 text-sm bg-white transition-all duration-200 cursor-pointer ${
          isOpen
            ? "border-(--color-primary) ring-2 ring-(--color-primary)/20 shadow-md"
            : "border-slate-300 hover:border-slate-400 shadow-xs"
        }`}
      >
        <span className="truncate font-medium text-slate-800">
          {selectedOption ? selectedOption.label : <span className="text-slate-400">{placeholder}</span>}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-(--color-primary)" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 4, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            onWheel={(e) => e.stopPropagation()}
            className="absolute z-50 left-0 right-0 top-full mt-1 bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-y-auto max-h-60 py-1.5 overscroll-contain cursor-pointer"
          >
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-left text-xs sm:text-sm font-medium flex items-center justify-between transition-colors ${
                    isSelected
                      ? "bg-[#e6f7fb] text-(--color-primary) font-bold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <div className="flex flex-col truncate pr-2">
                    <span className="truncate">{option.label}</span>
                    {option.desc && (
                      <span className="text-[10px] text-slate-500 font-normal truncate mt-0.5">
                        {option.desc}
                      </span>
                    )}
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-(--color-primary) shrink-0 ml-2" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── MAIN PAGE COMPONENT ──────────────────────────────────────────

export default function SSEPage() {
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    designation: "",
    mobile: "",
    email: "",
    city: "",
    state: "",
    category: "Individual",
    consent: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  // Selected Tier State for Impact Calculator
  const [selectedTier, setSelectedTier] = useState(10000);
  const [customAmount, setCustomAmount] = useState<string>("10000");

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [faqSearch, setFaqSearch] = useState("");

  // Modal State for Image Viewer
  const [showDiagramModal, setShowDiagramModal] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (name === "mobile") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, mobile: digitsOnly }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const [formError, setFormError] = useState<string | null>(null);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Full name verification
    if (!formData.fullName.trim()) {
      setFormError("Please enter your full name.");
      return;
    }

    // Mobile number verification (must be 10 digits)
    const cleanMobile = formData.mobile.replace(/\D/g, "");
    if (cleanMobile.length !== 10) {
      setFormError("Mobile number must be a valid 10-digit number (e.g. 9876543210).");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      setFormError("Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.");
      return;
    }

    // Email syntax verification
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setFormError("Please enter a valid email address (e.g. name@example.com).");
      return;
    }

    // Consent check
    if (!formData.consent) {
      setFormError("Please accept the consent checkbox to submit.");
      return;
    }

    setFormLoading(true);

    try {
      const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: apiKey,
          subject: `New SSE Interest Submission: ${formData.fullName.trim()}`,
          from_name: "Girganga SSE Registration",
          full_name: formData.fullName.trim(),
          email: formData.email.trim(),
          mobile: cleanMobile,
          organization: formData.organization.trim() || "N/A",
          designation: formData.designation.trim() || "N/A",
          city: formData.city.trim() || "N/A",
          state: formData.state || "Gujarat",
          investor_category: formData.category,
        }),
      });

      const resData = await response.json();

      if (resData.success) {
        setFormSubmitted(true);
      } else {
        setFormError(resData.message || "Failed to submit form. Please check your Web3Forms access key.");
      }
    } catch (err: unknown) {
      console.error("Web3Forms API submit error:", err);
      setFormSubmitted(true);
    } finally {
      setFormLoading(false);
    }
  };

  // Find impact description based on selected/custom amount
  const getImpactDescription = (amtVal: number) => {
    if (amtVal < 5000) return "Supports restoration of community water resources and groundwater recharge activities.";
    if (amtVal < 10000) return "Supports desilting, excavation and restoration works of existing water conservation structures.";
    if (amtVal < 25000) return "Contributes towards construction materials, skilled labour and groundwater recharge interventions.";
    if (amtVal < 50000) return "Helps restore village-level water infrastructure benefiting farming households directly.";
    if (amtVal < 100000) return "Supports implementation of 1 complete groundwater recharge intervention (Recharge Shaft / Bore / Filter Media).";
    if (amtVal < 500000) return "Supports multiple water conservation activities including excavation, repair works and recharge measures across villages.";
    if (amtVal < 1000000) return "Helps implement integrated water conservation interventions across one or more complete project locations.";
    return "Makes a significant contribution towards restoring multiple water conservation assets and strengthening village water security across entire blocks.";
  };

  const filteredFaqs = sseFaqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <SmoothScroll>
      <div className="font-[var(--font)] bg-[#f8fafc] text-slate-800 overflow-x-hidden min-h-screen">

        {/* ════════════════════════════════════════════════════════
            1. HERO SECTION
        ════════════════════════════════════════════════════════ */}
        <section className="relative bg-gradient-to-b from-[var(--color-tertiary)] via-[#e6f7fb] to-white text-slate-900 pt-8 sm:pt-12 pb-12 sm:pb-16 lg:pb-20 overflow-hidden border-b border-slate-100">
          {/* Subtle Background Pattern & Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(#009dc4_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(600px,90vw)] h-[min(600px,90vw)] bg-(--color-primary)/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading & Key Value Prop */}
              <motion.div
                initial="hidden"
                animate="show"
                variants={staggerContainer}
                className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left"
              >
                <motion.h1
                  variants={fadeUp}
                  className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.12] tracking-tight text-slate-900 max-w-full"
                >
                  Invest In Water.
                  <span className="block text-[1.55rem] min-[420px]:text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl text-(--color-primary) italic font-serif">
                    Invest in Gujarat’s Future.
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
                >
                  <strong className="text-slate-900 font-semibold">Girganga Parivar Trust (GGPT)</strong> is officially registered on the <strong className="text-(--color-primary)">NSE Social Stock Exchange (SSE)</strong>. Through the <strong className="text-slate-900">Zero Coupon Zero Principal (ZCZP)</strong> instrument, GGPT seeks support for its Integrated Water Conservation & Groundwater Recharge Project in 10 water-stressed villages of Paddhari Block, Rajkot District, Gujarat.
                </motion.p>

                {/* Key Pill Features */}
                <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 pt-2">
                  {[
                    "SEBI Regulated",
                    "NSE Registered",
                    "ZCZP Instrument",
                    "80G Tax Exemption",
                    "Geo-Tagged Verification",
                  ].map((feat, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-white text-slate-800 text-[11px] sm:text-xs font-semibold border border-slate-200 shadow-sm"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-(--color-primary)" />
                      {feat}
                    </span>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3 sm:pt-4">
                  <a
                    href="#register-interest"
                    className="group relative overflow-hidden inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 sm:px-8 py-3.5 sm:py-4 rounded-lg bg-[url('/image/button/button-bg.jpeg')] bg-cover bg-center text-white font-semibold text-sm sm:text-base shadow-lg hover:-translate-y-0.5 transition-transform"
                  >
                    <span className="relative z-10">Register Your Interest</span>
                    <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
                    <span className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition" />
                  </a>
                </motion.div>
              </motion.div>

              {/* Right Column: Visual Card / Banner */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-5"
              >
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white group">
                  <div className="relative h-52 sm:h-72 w-full">
                    <Image
                      src="/image/sse/nse-social-stock-exchange.png"
                      alt="GGPT Water Conservation Project on NSE SSE"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
                  </div>

                  <div className="p-4 sm:p-6 space-y-4 relative z-10 -mt-8 sm:-mt-10 bg-white">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-(--color-primary) bg-[#e6f7fb] px-3 py-1 rounded-full border border-(--color-primary)/30">
                        NSE SSE Public Issue
                      </span>
                    </div>

                    <h3 className="text-xl font-bold leading-snug text-slate-900">
                      Community-Led Water Conservation & Groundwater Recharge Project
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-3.5 text-center shadow-xs">
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Issue Target</p>
                        <p className="text-lg font-black text-slate-900 mt-0.5">₹1 Crore</p>
                      </div>
                      <div className="bg-[#e6f7fb] border border-(--color-primary)/20 rounded-xl p-3.5 text-center shadow-xs">
                        <p className="text-xs text-(--color-primary) font-bold uppercase tracking-wider">Min Contribution</p>
                        <p className="text-lg font-black text-(--color-primary) mt-0.5">₹1,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            2. ABOUT NSE SSE & WHAT IS ZCZP INSTRUMENT
        ════════════════════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <Eyebrow>SEBI Framework</Eyebrow>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                What is <span className="text-(--color-primary)">NSE Social Stock Exchange?</span>
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                The <strong className="text-slate-900">Social Stock Exchange (SSE)</strong>, established under the regulatory umbrella of <strong className="text-slate-900">SEBI</strong>, enables eligible non-profit organisations (NPOs) to raise funding through a transparent, regulated, and impact-oriented ecosystem.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Through <strong className="text-(--color-primary) font-semibold">Zero Coupon Zero Principal (ZCZP)</strong> instruments, social investors and donors contribute directly towards verified social projects while receiving periodic public impact disclosures rather than financial returns.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  { label: "Transparent Fund Deployment", desc: "100% of capital mobilized goes directly towards ground execution." },
                  { label: "Rigorous Due Diligence", desc: "Every project undergoes extensive SEBI and exchange vetting before listing." },
                  { label: "Periodic Impact Disclosures", desc: "Quarterly progress reports and independent social audit reports published." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#e6f7fb] border border-(--color-primary)/20">
                    <CheckCircle2 className="w-5 h-5 text-(--color-primary) shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{item.label}</h4>
                      <p className="text-slate-500 text-xs leading-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Flow Diagram */}
            <div className="lg:col-span-6 bg-white p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-slate-100 space-y-5 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-(--color-primary)" />
                How the ZCZP Mechanism Works
              </h3>

              <div className="relative space-y-4 sm:space-y-6 before:absolute before:left-5 sm:before:left-6 before:top-3 before:bottom-3 before:w-0.5 before:bg-(--color-primary)/30">
                {[
                  { step: "01", title: "SEBI Due Diligence & NSE Listing", desc: "GGPT completes rigorous financial, governance, and project audit to register on NSE SSE." },
                  { step: "02", title: "Social Investment via ZCZP", desc: "Donors & institutions contribute funds via ZCZP instrument on NSE (Min ₹1,000)." },
                  { step: "03", title: "Groundwater Execution in Villages", desc: "Rejuvenation of check dams, desilting, and recharge shaft construction across 10 villages." },
                  { step: "04", title: "Independent Audit & Impact Reporting", desc: "Geo-tagged verification and quarterly impact disclosures submitted to investors and SEBI." },
                ].map((st, idx) => (
                  <div key={idx} className="relative flex items-start gap-3 sm:gap-4 z-10">
                    <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-(--color-primary) text-white font-extrabold text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-md shadow-cyan-900/20">
                      {st.step}
                    </span>
                    <div className="bg-slate-50 p-3.5 sm:p-4 rounded-2xl border border-slate-100 flex-1">
                      <h4 className="font-bold text-slate-900 text-sm">{st.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed mt-1">{st.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            3. UPCOMING PUBLIC ISSUE SPECIFICATION GRID
        ════════════════════════════════════════════════════════ */}
        <section id="issue-details" className="py-12 sm:py-16 bg-(--color-tertiary)/70 border-y border-slate-200 text-slate-900 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <SectionHeader
              eyebrow="Public Issue Details"
              title="About GIRGANGA PARIVAR TRUST’s"
              highlight="Upcoming Public Issue"
              subtitle="Key highlights of the proposed fundraising issue registered on the NSE Social Stock Exchange platform."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10">
              {publicIssueDetails.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-(--color-primary)/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-(--color-tertiary) flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-(--color-primary)">{item.label}</p>
                  <h3 className="text-sm sm:text-lg font-extrabold text-slate-900 mt-1 leading-snug break-words">{item.value}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            4. PROJECT SNAPSHOT KPI DASHBOARD
        ════════════════════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Project At A Glance"
            title="Project"
            highlight="Snapshot & Target Metrics"
            subtitle="10 Villages │ 15 Check Dams │ 20 Recharge Structures │ 10,000 Direct Beneficiaries │ 4,000 Indirect Beneficiaries │ ₹1,08,73,000 Project Cost │ 12 Months"
          />

          <div className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8 sm:mt-10">
            {snapshotMetrics.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 text-center flex flex-col justify-between hover:border-(--color-primary)/40 transition-colors"
              >
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-(--color-primary)">{stat.val}</h3>
                  <p className="text-xs font-bold text-slate-800 uppercase tracking-wide mt-1">{stat.label}</p>
                </div>
                <p className="text-[11px] text-slate-500 mt-2 pt-2 border-t border-slate-100 font-medium">{stat.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            5. WHY THIS PROJECT? WATER CHALLENGES & OUR SOLUTION
        ════════════════════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 lg:py-20 bg-slate-100/70 border-y border-slate-200/60 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              eyebrow="Ground Reality"
              title="The Water Challenge"
              highlight="We Aim to Address"
              subtitle="Water is the foundation of rural livelihoods, yet many villages across Gujarat face increasing water stress due to climate variability, declining groundwater, and silted infrastructure."
            />

            {/* 6 Challenge Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
              {waterChallenges.map((ch, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#e6f7fb] rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
                  <span className="inline-block px-3 py-1 rounded-full bg-red-50 text-blue-600 text-[11px] font-bold uppercase tracking-wider mb-3">
                    {ch.badge}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{ch.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{ch.desc}</p>
                </div>
              ))}
            </div>

            {/* Our Integrated Solution */}
            <div className="mt-10 sm:mt-16 bg-gradient-to-r from-(--color-primary) via-[#008ba9] to-[#005f77] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 text-white shadow-xl border border-cyan-400/20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-(--color-secondary)">Integrated Approach</span>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white leading-tight">
                    Our Community-Led & Scientific Solution
                  </h3>
                  <p className="text-cyan-50 text-sm leading-relaxed">
                    Girganga Parivar Trust will execute a scientifically planned model across Paddhari Block, Rajkot District to achieve sustainable village water security.
                  </p>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    "Rejuvenating 15 existing check dams & village water bodies",
                    "Enhancing recharge through 20 decentralized bore shafts",
                    "Restoring storage via excavation & desilting operations",
                    "Strengthening local community participation & governance",
                    "Establishing geo-tagged monitoring for long-term audit",
                  ].map((sol, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white/10 border border-white/20 p-3.5 sm:p-4 rounded-xl backdrop-blur-sm">
                      <FaCheckCircle className="w-5 h-5 text-(--color-secondary) shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-white leading-snug">{sol}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            6. WHERE YOUR INVESTMENT GOES? (BUDGET ALLOCATION PIE CHART)
        ════════════════════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-8 sm:space-y-10">
          <SectionHeader
            eyebrow="Financial Transparency"
            title="Where Your"
            highlight="Investment Goes?"
            subtitle="Complete interactive breakdown of fund allocation for the ₹1,08,73,000 Integrated Water Conservation & Groundwater Recharge Project based on official NSE Social Stock Exchange disclosures."
          />

          <InvestmentPieChart />
        </section>

        {/* ════════════════════════════════════════════════════════
            7. YOUR IMPACT - CONTRIBUTION VS ESTIMATED SOCIAL IMPACT
        ════════════════════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 lg:py-20 bg-(--color-tertiary)/70 border-y border-slate-200 text-slate-900 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              eyebrow="Social Return On Investment"
              title="Your Contribution"
              highlight="Creates Water Security"
              subtitle="Every investment made through the NSE Social Stock Exchange contributes directly towards sustainable water security for rural communities."
            />

            {/* Interactive Contribution Calculator */}
            <div className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl mt-8 sm:mt-10 space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Interactive Impact Calculator</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Select a contribution tier below or enter a custom amount to see the estimated social impact:
                </p>
              </div>

              {/* Tier Selection Buttons */}
              <div className="grid grid-cols-1 min-[380px]:grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
                {contributionImpactTiers.map((tier) => (
                  <button
                    key={tier.amount}
                    onClick={() => {
                      setSelectedTier(tier.amount);
                      setCustomAmount(tier.amount.toString());
                    }}
                    className={`min-h-12 py-3 px-2 rounded-xl font-extrabold text-xs transition-all border ${selectedTier === tier.amount
                        ? "bg-(--color-secondary) text-slate-900 border-yellow-400 shadow-md scale-105"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>

              {/* Impact Display Box */}
              <div className="bg-[#e6f7fb] border border-(--color-primary)/30 p-4 sm:p-6 rounded-2xl flex flex-col md:flex-row items-center gap-5 sm:gap-6">
                <div className="w-16 h-16 rounded-2xl bg-(--color-secondary) text-slate-900 font-black text-xl flex items-center justify-center shrink-0 shadow-md">
                  <FaRupeeSign className="w-7 h-7 text-slate-900" />
                </div>
                <div className="space-y-1 text-center md:text-left flex-1">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-(--color-primary)">Selected Contribution</span>
                    <span className="text-xs bg-white text-(--color-primary) px-2 py-0.5 rounded-full border border-(--color-primary)/20 font-bold">
                      ₹{parseInt(customAmount || "0").toLocaleString("en-IN")}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-xl font-extrabold text-slate-900">
                    {getImpactDescription(parseInt(customAmount || "0"))}
                  </h4>
                </div>
                <a
                  href="#register-interest"
                  className="group relative overflow-hidden inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-lg bg-[url('/image/button/button-bg.jpeg')] bg-cover bg-center text-white font-semibold text-xs tracking-wider uppercase shadow-md hover:-translate-y-0.5 transition-transform"
                >
                  <span className="relative z-10">Pledge Support</span>
                  <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
                  <span className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition" />
                </a>
              </div>
            </div>

            {/* Impact Table */}
            <div className="mt-8 sm:mt-12 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
              <table className="w-full min-w-[680px] text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-(--color-primary) text-white border-b border-slate-200 uppercase font-bold tracking-wider">
                    <th className="py-4 px-6">Your Contribution</th>
                    <th className="py-4 px-6">Estimated Social Impact</th>
                    <th className="py-4 px-6">Impact Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {contributionImpactTiers.map((row, idx) => (
                    <tr
                      key={idx}
                      className={`hover:bg-slate-50 transition-colors ${selectedTier === row.amount ? "bg-[#e6f7fb]/60 font-semibold text-slate-900" : ""}`}
                    >
                      <td className="py-4 px-6 font-extrabold text-slate-900 text-base">{row.label}</td>
                      <td className="py-4 px-6">{row.impact}</td>
                      <td className="py-4 px-6">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#e6f7fb] text-(--color-primary) text-xs font-bold border border-(--color-primary)/20">
                          {row.highlight}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[11px] text-slate-500 mt-4 leading-relaxed font-light italic">
              * The above illustrations represent indicative contributions towards the overall project. Funds mobilized through the NSE Social Stock Exchange will be pooled and utilized for implementation of the project in accordance with the approved budget and applicable regulatory requirements. Individual contributions are not earmarked for a specific activity.
            </p>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            8. WHO CAN INVEST? (INVESTOR CATEGORIES)
        ════════════════════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Participant Ecosystem"
            title="Who Can"
            highlight="Invest & Contribute?"
            subtitle="Eligible participants include CSR contributors, philanthropic foundations, trusts, institutions, high-net-worth individuals (HNIs), family offices, and individual social investors."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
            {investorCategories.map((inv, idx) => (
              <div
                key={idx}
                className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-(--color-primary)/40 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e6f7fb] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-(--color-primary)/20">
                  {inv.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{inv.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{inv.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            9. WHY INVEST THROUGH SSE & GGPT CREDENTIALS
        ════════════════════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 lg:py-20 bg-(--color-tertiary)/70 border-y border-slate-200 text-slate-900 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              eyebrow="Key Benefits & Credentials"
              title="Why Invest Through"
              highlight="NSE SSE & GGPT?"
              subtitle="Combine regulatory safety with proven grassroots water conservation excellence."
            />

            {/* 8 SSE Benefits Grid */}
            <div className="grid grid-cols-1 min-[420px]:grid-cols-2 sm:grid-cols-4 gap-4 mt-8 sm:mt-10">
              {sseBenefits.map((ben, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-5 rounded-2xl space-y-2 shadow-xs hover:shadow-md transition-all hover:border-(--color-primary)/40">
                  <div className="w-8 h-8 rounded-lg bg-[#e6f7fb] text-(--color-primary) flex items-center justify-center font-bold text-sm border border-(--color-primary)/20">
                    ✓
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">{ben.title}</h4>
                  <p className="text-slate-600 text-xs leading-normal">{ben.desc}</p>
                </div>
              ))}
            </div>

            {/* GGPT Historical Performance Numbers */}
            <div className="mt-10 sm:mt-16 bg-gradient-to-r from-[#004e63] via-[#007b99] to-(--color-primary) p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-cyan-400/30 text-white shadow-xl">
              <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-(--color-secondary)">Proven Track Record</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">About GIRGANGA PARIVAR TRUST</h3>
                <p className="text-cyan-100/90 text-xs sm:text-sm mt-2">Over a decade of transformative water harvesting work across Gujarat.</p>
              </div>

              <div className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 text-center">
                {ggptTrackRecord.map((tr, idx) => (
                  <div key={idx} className="bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm">
                    <p className="text-xl sm:text-2xl font-black text-(--color-secondary)">{tr.val}</p>
                    <p className="text-xs font-bold text-white uppercase tracking-wider mt-1">{tr.label}</p>
                    <p className="text-[10px] text-cyan-100/80 mt-1">{tr.sub}</p>
                  </div>
                ))}
              </div>

              {/* Awards Grid */}
              <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/20">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-200 text-center mb-6">Honours & National Recognition</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {ggptAwards.map((aw, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white/10 p-3.5 sm:p-4 rounded-xl border border-white/20 backdrop-blur-sm">
                      <Award className="w-6 h-6 text-(--color-secondary) shrink-0" />
                      <div>
                        <h4 className="font-bold text-white text-xs">{aw.title}</h4>
                        <p className="text-[11px] text-cyan-100/80">{aw.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            10. INTERACTIVE REGISTRATION FORM ("REGISTER YOUR INTEREST")
        ════════════════════════════════════════════════════════ */}
        <section id="register-interest" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto">
          <div className="bg-white p-4 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-(--color-primary) via-(--color-secondary) to-[#004e63]" />

            <div className="text-center space-y-3 mb-8 sm:mb-10 pt-3 sm:pt-0">
              <Eyebrow>How to Prepare for Investment?</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Register Your Interest Here 
              </h2>
              <p className="text-slate-600 text-sm max-w-xl mx-auto">
                Support Community-Led Water Conservation in Rural Gujarat. Submit your details below and our team will contact you to explain the SSE process and project impact.
              </p>
            </div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#e6f7fb] border border-(--color-primary)/30 p-5 sm:p-8 rounded-2xl text-center space-y-4"
              >
                <div className="w-16 h-16 bg-(--color-primary) text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Interest Registered Successfully!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Our dedicated SSE Helpdesk team will reach out to you shortly via phone/email to guide you through the investment process.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      fullName: "",
                      organization: "",
                      designation: "",
                      mobile: "",
                      email: "",
                      city: "",
                      state: "",
                      category: "Individual",
                      consent: false,
                    });
                  }}
                  className="w-full sm:w-auto px-5 sm:px-6 py-2.5 rounded-xl bg-(--color-primary) text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-800 transition-colors"
                >
                  Register Another Response
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {formError && (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold rounded-xl">
                    {formError}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleFormChange}
                      required
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:border-(--color-primary) text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleFormChange}
                      maxLength={10}
                      required
                      placeholder="10-digit mobile number"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:border-(--color-primary) text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:border-(--color-primary) text-sm"
                    />
                  </div>

                  <CustomDropdown
                    label="Investor Category"
                    value={formData.category}
                    options={INVESTOR_CATEGORY_OPTIONS}
                    onChange={(val) => setFormData((prev) => ({ ...prev, category: val }))}
                  />

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Organization / Company (Optional)
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleFormChange}
                      placeholder="Organization Name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:border-(--color-primary) text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Designation (Optional)
                    </label>
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleFormChange}
                      placeholder="e.g. Director / Head of CSR"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:border-(--color-primary) text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleFormChange}
                      placeholder="e.g. Rajkot / Ahmedabad"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:border-(--color-primary) text-sm"
                    />
                  </div>

                  <CustomDropdown
                    label="State"
                    value={formData.state || "Gujarat"}
                    options={INDIAN_STATES_OPTIONS}
                    onChange={(val) => setFormData((prev) => ({ ...prev, state: val }))}
                    placeholder="Select State"
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-3 p-3.5 sm:p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleFormChange}
                    required
                    className="mt-1 w-4 h-4 text-(--color-primary) rounded focus:ring-(--color-primary)"
                  />
                  <label htmlFor="consent" className="text-xs text-slate-600 leading-relaxed cursor-pointer select-none">
                    I agree to be contacted by Girganga Parivar Trust regarding this project and related fundraising opportunities listed on the NSE Social Stock Exchange. There is no obligation to contribute by submitting this form.
                  </label>
                </div>

                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    disabled={formLoading}
                    className="group relative cursor-pointer overflow-hidden w-full sm:w-auto px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[url('/image/button/button-bg.jpeg')] bg-cover bg-center text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg hover:-translate-y-0.5 transition-transform inline-flex items-center justify-center gap-2"
                  >
                    <span className="relative z-10">{formLoading ? "Submitting Interest..." : "Register My Interest"}</span>
                    <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
                    <span className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition" />
                  </button>
                </div>
              </form>
            )}  
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            11. FREQUENTLY ASKED QUESTIONS (FAQS) ACCORDION
        ════════════════════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 lg:py-20 bg-slate-100/70 border-t border-slate-200 px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              eyebrow="Clarifications & Guidelines"
              title="Frequently Asked"
              highlight="Questions (FAQs)"
              subtitle="Everything you need to know about Zero Coupon Zero Principal (ZCZP) instruments, tax benefits, monitoring, and SSE rules."
            />

            {/* Search Filter Box */}
            <div className="relative mb-8">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search FAQ questions (e.g. tax benefit, ZCZP, donation)..."
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
              />
            </div>

            {/* FAQ Accordion List */}
            <div className="space-y-4">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-6 text-left font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-emerald-600 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {filteredFaqs.length === 0 && (
                <div className="text-center p-8 bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
                  No matching FAQs found for &quot;{faqSearch}&quot;. Please reach out to our dedicated SSE helpdesk.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            12. DEDICATED SSE HELPDESK & CONTACT FOOTER
        ════════════════════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 bg-slate-500 text-white px-4 sm:px-6 lg:px-12 border-t border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-5 space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-(--color-secondary)">Investor Assistance</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Dedicated SSE Helpdesk</h3>
                <p className="text-slate-200 text-sm">
                  Our financial and project support team is available to answer all your queries regarding the NSE SSE listing.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <a
                  href="mailto:csr@girgangaparivartrust.com"
                  className="flex items-center gap-3 sm:gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-(--color-primary) flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-slate-200 font-semibold uppercase tracking-wider">Email</p>
                    <p className="text-xs sm:text-sm font-bold text-white truncate">csr@girgangaparivartrust.com</p>
                  </div>
                </a>

                <a
                  href="tel:+919998078959"
                  className="flex items-center gap-3 sm:gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-(--color-primary) flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-slate-200 font-semibold uppercase tracking-wider">Phone</p>
                    <p className="text-xs sm:text-sm font-bold text-white">+91 99980 78959</p>
                  </div>
                </a>

                <a
                  href="tel:+919408414568"
                  className="flex items-center gap-3 sm:gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-(--color-primary) flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-slate-200 font-semibold uppercase tracking-wider">Office</p>
                    <p className="text-xs sm:text-sm font-bold text-white">+91 94084 14568</p>
                  </div>
                </a>

                <a
                  href="tel:+919998078959"
                  className="flex items-center gap-3 sm:gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-(--color-primary) flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-slate-200 font-semibold uppercase tracking-wider">Investor Support</p>
                    <p className="text-xs sm:text-sm font-bold text-white">+91 99980 78959</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            DIAGRAM MODAL (FOR ENLARGING ALLOCATION DIAGRAM)
        ════════════════════════════════════════════════════════ */}
        <AnimatePresence>
          {showDiagramModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setShowDiagramModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 max-w-4xl w-full relative shadow-2xl space-y-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-lg">Where Your Investment Goes - Official Allocation Diagram</h3>
                  <button
                    onClick={() => setShowDiagramModal(false)}
                    className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <div className="max-h-[75vh] overflow-y-auto p-2">
                  <InvestmentPieChart />
                </div>

                <div className="text-center pt-2">
                  <button
                    onClick={() => setShowDiagramModal(false)}
                    className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider"
                  >
                    Close Preview
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </SmoothScroll>
  );
}
