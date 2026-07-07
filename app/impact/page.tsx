"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";
import SmoothScroll from "../../Component/SmothScrolling";
import Link from "next/link";

/* ─── CountUp ─────────────────────────────────────── */
interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const CountUp = ({ end, duration = 2000, suffix = "" }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

/* ─── Eyebrow Label ───────────────────────────────── */
function Eyebrow({ text }: { text: string }) {
  return (
    <p className="inline-flex items-center justify-center gap-3 text-[10px] font-bold tracking-[0.35em] uppercase text-[var(--color-secondary)] mb-4">
      <span className="w-8 h-px bg-[var(--color-secondary)]" />
      {text}
      <span className="w-8 h-px bg-[var(--color-secondary)]" />
    </p>
  );
}

/* ── Before/After hover image ── */
interface BeforeAfterProps {
  before: string;
  after: string;
  useNextImage?: boolean;
}
const BeforeAfterImage = ({
  before,
  after,
  useNextImage = false,
}: BeforeAfterProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full h-full cursor-pointer select-none"
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") setHovered(false);
      }}
      onClick={() => {
        setHovered(!hovered);
      }}
    >
      {/* BEFORE */}
      <div
        className="absolute inset-0 transition-opacity duration-700 ease-in-out"
        style={{ opacity: hovered ? 0 : 1 }}
      >
        {useNextImage ? (
          <Image
            src={before}
            alt="Before"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={75}
            loading="lazy"
          />
        ) : (
          <img
            src={before}
            alt="Before"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
      </div>

      {/* AFTER */}
      <div
        className="absolute inset-0 transition-opacity duration-700 ease-in-out"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        {useNextImage ? (
          <Image
            src={after}
            alt="After"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={75}
            loading="lazy"
          />
        ) : (
          <img 
            src={after} 
            alt="After" 
            className="w-full h-full object-cover" 
            loading="lazy"
          />
        )}
      </div>

      {/* Label pill */}
      <div className="absolute bottom-4 left-4 z-10 p-4">
        <span
          className="px-6 py-3 rounded-full text-xs font-semibold tracking-wide transition-all duration-500"
          style={{
            background: hovered ? "#009dc4" : "rgba(0,0,0,0.45)",
            color: "#ffff",
          }}
        >
          {hovered ? "After" : "Before"}
        </span>
      </div>
    </div>
  );
};

/* ── Section block (alternating layout) ── */
interface SectionBlockProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  body: ReactNode; 
  before: string;
  after: string;
  reverse?: boolean;
  dark?: boolean;
  useNextImage?: boolean;
}

const SectionBlock = ({
  eyebrow,
  title,
  subtitle,
  body,
  before,
  after,
  reverse = false,
  dark = false,
  useNextImage = false,
}: SectionBlockProps) => (
  <>
    <section className="bg-[var(--color-tertiary)]">
      <div className="mx-auto">
        <div className="container">
          <div
            className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-center`}
          >
            {/* Text side */}
            <div className="w-full lg:w-[42%] space-y-5">
              {/* eyebrow */}
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="w-8 h-px bg-[var(--color-secondary)]" />
                <span className="text-[var(--color-primary)] text-[10px] font-bold tracking-[0.25em] uppercase ">
                  {eyebrow}
                </span>
              </div>

              <h2 className="text-black text-3xl sm:text-4xl font-bold leading-snug text-center lg:text-start">
                {title}
              </h2>

              <p className="text-[var(--color-primary)] text-sm font-medium text-center lg:text-start">
                {subtitle}
              </p>

              <div className="text-gray-400 text-sm leading-relaxed text-center lg:text-start">
                {body}
              </div>
            </div>

            {/* Image side */}
            <div className="w-full lg:w-[58%]">
              <div
                className={`relative overflow-hidden shadow-2xl shadow-black/50 ${reverse ? "rounded-tl-[4rem] rounded-br-[4rem]" : "rounded-tr-[4rem] rounded-bl-[4rem]"}`}
                style={{ aspectRatio: "16/10" }}
              >
                <BeforeAfterImage
                  before={before}
                  after={after}
                  useNextImage={useNextImage}
                />
              </div>

              {/* "Hover to see transformation" hint */}
              <p className="text-gray-600 text-[10px] tracking-widest uppercase text-right mt-2 pr-2">
                Hover image to see transformation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

/* ─── Stat Card ───────────────────────────────────── */
function StatCard({
  value,
  label,
  suffix,
  index,
}: {
  value: number;
  label: string;
  suffix?: string;
  index: number;
}) {
  return (
    <div
      className="group relative flex flex-col items-center justify-center text-center
      bg-white border border-gray-100 rounded-2xl p-6 
       hover:shadow-xl hover:-translate-y-1
      transition-all duration-300"
    >
      {/* top accent bar */}
      <span
        className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[var(--color-primary)] rounded-full
        group-hover:w-full transition-all duration-500"
      />

      <span className="text-[var(--color-secondary)] text-[10px] font-bold tracking-widest uppercase mb-3 opacity-60">
        0{index + 1}
      </span>

      <h3 className="text-3xl xl:text-4xl font-extrabold text-[var(--color-primary)] leading-none mb-2">
        <CountUp end={value} suffix={suffix ?? ""} />
      </h3>

      <p className="text-xs text-gray-400 font-medium tracking-wide leading-snug">
        {label}
      </p>
    </div>
  );
}

/* ─── Growth Stat Card (for values with decimals/units, e.g. "11.4 Lakh") ── */
function GrowthStatCard({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
  index: number;
}) {
  return (
    <div
      className="group relative flex flex-col items-center justify-center text-center
      bg-white border border-gray-100 rounded-2xl p-6
       hover:shadow-xl hover:-translate-y-1
      transition-all duration-300"
    >
      <span
        className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[var(--color-primary)] rounded-full
        group-hover:w-full transition-all duration-500"
      />

      <span className="text-[var(--color-secondary)] text-[10px] font-bold tracking-widest uppercase mb-3 opacity-60">
        0{index + 1}
      </span>

      <h3 className="text-2xl xl:text-3xl font-extrabold text-[var(--color-primary)] leading-none mb-2">
        {value}
      </h3>

      <p className="text-xs text-gray-400 font-medium tracking-wide leading-snug">
        {label}
      </p>
    </div>
  );
}

/* ─── Annual Growth Timeline (table on desktop, stacked cards on mobile) ── */
function GrowthTimelineTable({
  data,
}: {
  data: { year: string; structures: number; villages: number }[];
}) {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
      {/* Desktop / tablet table */}
      <div className="hidden sm:block">
        <div className="grid grid-cols-3 bg-[var(--color-primary)]/5 px-6 md:px-8 py-4">
          <span className="text-[11px] md:text-xs font-bold tracking-widest uppercase text-[var(--color-primary)]">
            Year
          </span>
          <span className="text-[11px] md:text-xs font-bold tracking-widest uppercase text-[var(--color-primary)] text-center">
            Structures
          </span>
          <span className="text-[11px] md:text-xs font-bold tracking-widest uppercase text-[var(--color-primary)] text-right">
            Villages
          </span>
        </div>
        <div className="divide-y divide-gray-100">
          {data.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-3 px-6 md:px-8 py-5 items-center hover:bg-[var(--color-tertiary)] transition-colors duration-300"
            >
              <span className="text-sm font-semibold text-gray-900">
                {row.year}
              </span>
              <span className="text-base md:text-lg font-extrabold text-[var(--color-primary)] text-center">
                <CountUp end={row.structures} />
              </span>
              <span className="text-base md:text-lg font-extrabold text-[var(--color-secondary)] text-right">
                <CountUp end={row.villages} />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile stacked cards */}
      <div className="sm:hidden divide-y divide-gray-100">
        {data.map((row, i) => (
          <div key={i} className="px-6 py-5">
            <p className="text-sm font-bold text-gray-900 mb-3">{row.year}</p>
            <div className="flex items-center justify-around">
              <div className="text-center">
                <p className="text-xl font-extrabold text-[var(--color-primary)]">
                  <CountUp end={row.structures} />
                </p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">
                  Structures
                </p>
              </div>
              <div className="w-px h-8 bg-gray-100" />
              <div className="text-center">
                <p className="text-xl font-extrabold text-[var(--color-secondary)]">
                  <CountUp end={row.villages} />
                </p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">
                  Villages
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Impact Card ─────────────────────────────────── */
function ImpactCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div
      className="relative bg-white rounded-3xl p-4 lg:p-8 overflow-hidden group border border-gray-100
      hover:shadow-2xl transition-all duration-400"
    >
      {/* gradient sweep on hover */}
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
        bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent rounded-3xl pointer-events-none"
      />

      <div className="relative z-10">
        <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
          <span className="w-3 h-3 rounded-full bg-[var(--color-primary)]" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-5">{title}</h3>
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─── Main Page ───────────────────────────────────── */
export default function JalMandirSection() {
  const stats = [
    { value: 8357, label: "Water Structures" },
    { value: 619, label: "Villages Covered" },
    { value: 35, label: "Blocks" },
    { value: 10, label: "Districts" },
    { value: 125000, label: "Farmers Impacted", suffix: "+" },
    { value: 74, label: "Billion Litres Recharged", suffix: "B" },
  ];

  const cumulativeStats = [
    { value: "19,592+", label: "Water Structures Created / Rejuvenated" },
    { value: "11.4 Lakh", label: "Beneficiaries" },
    { value: "7.38 Lakh", label: "Acres Farmland Rejuvenated" },
  ];

  const growthTimeline = [
    { year: "2022-23", structures: 100, villages: 22 },
    { year: "2023-24", structures: 1617, villages: 197 },
    { year: "2024-25", structures: 6637, villages: 437 },
    { year: "2025-26", structures: 11238, villages: 349 },
  ];

  const additionalTransformations = [
    {
      before: "/image/Impact/pavitram  befor.png",
      after: "/image/Impact/pavitram after.png",
    },
    {
      before: "/image/Impact/sau. uni  befor.png",
      after: "/image/Impact/sau.uni after.png",
    },
    {
      before: "/image/Impact/virveeru befor.png",
      after: "/image/Impact/virveeru  after.png",
    },
    {
      before: "/image/Impact/pam  befor.png",
      after: "/image/Impact/pam after.png",
    },
  ];

  return (
    <>
      <SmoothScroll>
        {/* ── 1. IMPACT DASHBOARD ─────────────────────────── */}
        <section className="container bg-[var(--color-tertiary)]">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <Eyebrow text="By the Numbers" />
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                Impact{" "}
                <span className="text-[var(--color-primary)]">Dashboard</span>
              </h2>
              <p className="text-gray-400 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
                Community-driven water conservation restoring groundwater,
                strengthening agriculture, and improving rural livelihoods
                across Gujarat.
              </p>
            </div>

            {/* Dashboard Image — floating card treatment */}
            <div className="flex justify-center mb-20">
              <div className="relative">
                {/* glow behind image */}
                <div className="absolute -inset-4 rounded-3xl bg-[var(--color-primary)]/10 blur-2xl" />
                <Image src="/image/home/GUJRAT MAP MAIN.jpg"
                  alt="Impact Dashboard"
                  width={680}
                  height={680}
                  priority
                  className="relative rounded-3xl shadow-2xl object-contain max-w-full h-auto border border-white" quality={75} />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {stats.map((s, i) => (
                <StatCard key={i} index={i} {...s} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 2. WATER CONSERVATION INSIGHTS ─────────────── */}
        <section className="container bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-14">
              <Eyebrow text="District Overview" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Our Impact &{" "}
                <span className="text-[var(--color-primary)]">
                  Water Conservation Insights
                </span>
              </h2>
              <p className="text-gray-400 mt-3 text-sm">
                A quick overview of our district-level impact and structure
                distribution
              </p>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  src: "/image/partner-with-us-csr/district impact.png",
                  title: "District-Level Impact Overview",
                },
                {
                  src: "/image/partner-with-us-csr/recharge structures.png",
                  title: "Water Structure Distribution (%)",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="group bg-[var(--color-tertiary)] rounded-3xl overflow-hidden border border-gray-100
                hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="px-6 pt-6 pb-3 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                    <h3 className="text-sm font-semibold text-gray-700">
                      {card.title}
                    </h3>
                  </div>
                  <div className="px-4 pb-6">
                    <Image src={card.src}
                      alt={card.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-contain rounded-xl" quality={75} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. IMPACT DETAILS ───────────────────────────── */}
        <section className="container bg-[var(--color-tertiary)]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <Eyebrow text="What We've Achieved" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Measurable{" "}
                <span className="text-[var(--color-primary)]">
                  Change on the Ground
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <ImpactCard
                title="Water Recharge Impact"
                items={[
                  "74 Billion Litres Water Recharge",
                  "2.6 TMC Water Storage Capacity",
                ]}
              />
              <ImpactCard
                title="Agricultural Impact"
                items={[
                  "4,29,000 Acres Farmland Supported",
                  "7,25,000 Rural Population Benefitted",
                  "20-30% of Crop productivity increase. ",
                ]}
              />
            </div>
          </div>
        </section>

        {/* ── 3.5 CUMULATIVE GROWTH SUMMARY ───────────────── */}
        <section className="container bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <Eyebrow text="Cumulative Progress" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Growth{" "}
                <span className="text-[var(--color-primary)]">at a Glance</span>
              </h2>
              <p className="text-gray-400 mt-3 text-sm max-w-lg mx-auto">
                Our cumulative footprint across water conservation, farmer
                welfare, and agricultural revival.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {cumulativeStats.map((s, i) => (
                <GrowthStatCard key={i} index={i} {...s} />
              ))}
            </div>

            <div className="max-w-2xl mx-auto text-center">
              <p className="text-gray-400 text-sm italic leading-relaxed">
                &quot;Improved groundwater availability supporting irrigation,
                crop stability, and farmer resilience.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* ── 3.6 ANNUAL GROWTH TIMELINE ──────────────────── */}
        <section className="container bg-[var(--color-tertiary)]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <Eyebrow text="Year on Year" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Annual{" "}
                <span className="text-[var(--color-primary)]">
                  Growth Timeline
                </span>
              </h2>
              <p className="text-gray-400 mt-3 text-sm">
                Tracking our expansion in water structures and villages
                covered, year by year.
              </p>
            </div>

            <GrowthTimelineTable data={growthTimeline} />
          </div>
        </section>

        {/* ── 4. IMPACT STORY ─────────────────────────────── */}

        {/* ── SECTION 1 — GEBEA Jal Mandir ── */}
        <SectionBlock
          eyebrow="Impact Story"
          title="Todi Check-dam"
          subtitle=" Restoring Hope Through Water: GGPT’s Check-Dam Revival in
                Bhavnagar For over 14 years, villages in Sihor taluka of
                Bhavnagar—Todi, Kharachiya, Ratanpar, and Jilvana—struggled with
                severe water scarcity. Borewells failed even at 700 feet,
                tankers became the only source of drinking water, and
                agriculture and livestock steadily declined."
          body={
            <>
              <p className="text-gray-400 text-sm leading-relaxed text-center lg:text-start">
                In 2024, Girganga Parivar Trust (GGPT), in collaboration with
                Dangardi Vipassana Kendra and Dhamkheda Seva Trust, revived
                silted check dams through timely deepening and desilting just
                before the monsoon.
              </p>

              <p className="text-gray-400 text-sm leading-relaxed text-center lg:text-start">
                The impact was immediate. With the first rains, check dams
                filled to capacity, groundwater levels rose sharply, and
                borewells began yielding water at just 20 feet. Tankers were
                eliminated, abandoned wells revived, and villages regained 24×7
                access to drinking water—many for the first time in over a
                decade.
              </p>

              <p className="text-gray-400 text-sm leading-7 mb-4 text-center lg:text-start">
                A farmer shared,{" "}
                <span className="text-gray-600 italic">
                  &quot;For years, 700 feet gave us nothing. Today, water comes
                  at 20 feet. This work has brought life back to our
                  village.&quot;
                </span>
              </p>

              <p className="text-gray-400 text-sm leading-7 mb-8 text-center lg:text-start">
                More than water, GGPT restored dignity, confidence, and
                hope—creating a replicable, community-led model for
                drought-prone regions of Gujarat.
              </p>

              <div className="justify-self-center lg:justify-self-start text-center lg:text-start">
                <div className="md:inline-flex items-center md:gap-3">
                  <span className="w-8 h-px md:bg-[var(--color-primary)]" />
                  <p className="font-bold text-base text-gray-900">
                    This is not just water conservation.{" "}
                    <span className="text-[var(--color-primary)]">
                      It is rural revival.
                    </span>
                  </p>
                </div>
              </div>
            </>
          }
          before="/image/Impact/todi-checkdam-before.jpeg"
          after="/image/Impact/todi-checkdam-after.jpeg"
          reverse={false}
          dark={false}
          useNextImage={true}
        />

        {/* ── SECTION 2 — Bambhania Sarovar ── */}
        <SectionBlock
          eyebrow="Amreli District · Groundwater Recharge"
          title="Bambhania Sarovar"
          subtitle="For Farmers, Villagers, and Livestock Owners"
          body="The Girganga Parivar Trust has launched a groundwater recharge project in Bambhania, Amreli district. This initiative aims to increase water levels for farmers, villagers, and livestock owners. The 'Nava Neer Na Vadhamna' (Welcoming New Waters) event was attended by MLA Bharatbhai Sutariya and Deputy Chief Whip Kaushikbhai Vekariya, highlighting the importance of this endeavor for local water security."
          before="/image/Impact/bambhabiya-befor-1.png"
          after="/image/Impact/bambhaniya-after-1.png"
          reverse={true}
          dark={true}
        />

        <SectionBlock
          eyebrow="Rajkot · Water Conservation"
          title="GEBEA Jal Mandir Sarovar"
          subtitle="A Gift of Water Security in Rajkot"
          body="In Rajkot, the GEBEA Jal Mandir Sarovar was inaugurated by former Home Minister Shri Gordhanbhai Zadaphia, who also serves as the President of the GEB Engineers' Association. This reservoir, a retirement gift in honor of Shri B.M. Shah Saheb, Secretary General of the GEB Engineers' Association, significantly aids water conservation. It ensures clean rainwater availability for surrounding societies, improving residents' health and boosting local groundwater levels."
          before="/image/Impact/Jibiyaa-Before-1.png"
          after="/image/Impact/Jibiya-After-1.png"
          reverse={false}
          dark={false}
          useNextImage={true}
        />

        <section className="container bg-[var(--color-tertiary)] py-16">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-14">
              <Eyebrow text="Visual Evidence" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Stories of{" "}
                <span className="text-[var(--color-primary)]">Transformation</span>
              </h2>
              <p className="text-gray-400 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
                See the real difference community-driven water conservation makes on the ground.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {additionalTransformations.map((item, i) => (
                <div key={i}>
                  <div
                    className="relative overflow-hidden shadow-2xl shadow-black/40 rounded-[2rem]"
                    style={{ aspectRatio: "16/10" }}
                  >
                    <BeforeAfterImage
                      before={item.before}
                      after={item.after}
                      useNextImage={true}
                    />
                  </div>
                  <p className="text-gray-600 text-[10px] tracking-widest uppercase text-center mt-3">
                    Hover image to see transformation
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SmoothScroll>
    </>
  );
}