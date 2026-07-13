"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SmoothScroll from "../../Component/SmothScrolling";
import Link from "next/link";
import Image from "next/image";
import { Variants } from "framer-motion";
import { FaCow } from "react-icons/fa6";
import {
  FaChartBar,
  FaGlobeAsia,
  FaMountain,
  FaRocket,
  FaTint,
} from "react-icons/fa";
import {
  ArrowRight,
  Target,
  Eye,
  ShieldCheck,
  BadgeCheck,
  FileCheck2,
  ClipboardCheck,
  Landmark,
  Globe2,
  Phone,
} from "lucide-react";
import { impactMetrics } from "@/data/impact-stats";

/* ─────────────────────────────────────
   Shared animation helpers
───────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.06,
    },
  },
};

/* ─────────────────────────────────────
   Counter
───────────────────────────────────── */
function Counter({ value, start }: { value: number; start: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let cur = 0;
    const inc = value / (2000 / 16);
    const t = setInterval(() => {
      cur += inc;
      if (cur >= value) {
        setCount(value);
        clearInterval(t);
      } else setCount(Math.floor(cur));
    }, 16);
    return () => clearInterval(t);
  }, [value, start]);
  return <span>{count.toLocaleString("en-IN")}</span>;
}

/* ─────────────────────────────────────
   DATA
───────────────────────────────────── */
const timelineItems = [
  {
    year: "2017",
    type: "image",
    src: "/image/About page/Deshi-Cow-removebg-preview.png",
    title: "Foundation — Gau Seva",
    desc: "Girganga Parivar Trust formally established with the vision of promoting Gau Seva and Gaushala activities while supporting rural communities through livestock care and grassroots participation.",
  },
  {
    year: "2019-2020",
    icon: FaTint,
    title: "Beginning of Water Conservation Mission",
    desc: (
      <div className="space-y-3">
        <p>
          Recognizing the growing crisis of groundwater depletion and water
          scarcity in rural Gujarat, the Trust expanded its mission to include
          community-led water conservation initiatives.
        </p>
        <p className="font-semibold">Early work focused on:</p>
        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
          <li>Cleaning and rejuvenation of check dams</li>
          <li>Village-level water awareness programs</li>
          <li>Community mobilisation for watershed restoration</li>
        </ul>
        <p>
          This phase laid the foundation for GGPT’s long-term water conservation
          movement.
        </p>
      </div>
    ),
  },
  {
    year: "2021–2023",
    icon: FaMountain,
    title: "Expansion across Saurashtra",
    desc: (
      <div className="space-y-3">
        <p>
          The water conservation initiative rapidly expanded across several
          districts in the Saurashtra region. Through collaboration with
          farmers, gram panchayats, and local volunteers, GGPT facilitated the
          construction and rejuvenation of thousands of decentralized water
          harvesting structures including check dams and groundwater recharge
          systems.
        </p>
        <p>
          During this period, the organization’s work received national
          recognition.
        </p>
        <p>
          In 2023, GGPT received the Jal Prahari Award, organized in
          collaboration with the Ministry of Jal Shakti, UNOPS and the National
          Jal Jeevan Mission, acknowledging its contribution to community-led
          water conservation.
        </p>
      </div>
    ),
  },
  {
    year: "2024",
    icon: FaGlobeAsia,
    title: "Large-Scale Community Water Movement",
    desc: (
      <div className="space-y-3">
        <p>
          The water conservation program evolved into one of the region’s most
          active grassroots environmental movements. Thousands of water
          harvesting structures were constructed and rejuvenated across multiple
          districts through strong community participation.
        </p>
        <p>
          During this year, GGPT signed a Memorandum of Understanding (MoU) with
          the Ministry of Jal Shakti, strengthening collaboration for expanding
          community-driven water conservation initiatives.
        </p>
        <p>
          In the same year, the organization was honored with the Mayor Award
          2024 by the Rajkot Municipal Corporation for its contribution to water
          conservation under the Pani Bachao Abhiyan.
        </p>
      </div>
    ),
  },
  {
    year: "2025",
    icon: FaChartBar,
    title: "Major Impact Milestone",
    desc: (
      <div className="space-y-3">
        <p>
          By 2025, GGPT had facilitated the creation and rejuvenation of
          thousands of water conservation structures across more than 500
          villages across Gujarat.
        </p>
        <p className="font-semibold">Key highlights of this phase include:</p>
        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
          <li>Expansion across multiple districts and talukas,</li>
          <li>
            Thousands of farmers benefiting from improved groundwater
            availability,
          </li>
          <li>
            Strengthening agricultural productivity through improved irrigation
            access,
          </li>
          <li>
            Expansion of operational capacity with additional machinery and
            equipment for water conservation work, supported by CSR partners.
          </li>
        </ul>
        <p>
          In 2025, Model recognized in Parliamentary proceedings as a scalable
          grassroots solution under the Public–Private–People (PPP) model.
        </p>
        <p>
          Featured in a national documentary by the Ministry of Jal Shakti for
          decentralized, eco-friendly, people-powered execution.
        </p>
        <p>
          GGPT also received the Global CSR and ESG Award recognizing its
          impactful community-driven water conservation initiatives in
          Saurashtra Region.
        </p>
      </div>
    ),
  },
  {
    year: "2026",
    icon: FaRocket,
    title: "Scaling Impact & National Recognition",
    desc: (
      <div className="space-y-3">
        <p>
          The organization continued to grow rapidly with increasing support
          from CSR partners and public sector institutions.
        </p>
        <p className="font-semibold">
          Major milestones during this period include:
        </p>
        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
          <li>
            Mobilization of 15 additional heavy machines for water conservation
            activities
          </li>
          <li>₹18+ crore social investment mobilized for water initiatives</li>
          <li>
            Cumulative achievement crossing{" "}
            {impactMetrics.waterStructuresCreated.display} water conservation
            structures across {impactMetrics.districts.display} districts,{" "}
            {impactMetrics.talukas.display} talukas, and{" "}
            {impactMetrics.locationsReached.display} locations in Gujarat.
          </li>
        </ul>
        <p>
          GGPT was also recognized as Best NGO – JSJB 1.0 (Second Rank at All
          India Level) by the Ministry of Jal Shakti.
        </p>
        <p>
          These efforts collectively contribute to an estimated 2.5–2.7 TMC
          groundwater recharge capacity, significantly supporting rural
          agriculture and water security.
        </p>
      </div>
    ),
  },
];

const jalKathaRecords = [
  "Asia Pacific Book of Records",
  "Global Book of Records",
  "IEA Book of World Records",
  "India Book of Records",
  "OMG Book of Records",
];

const complianceBadges = [
  { label: "NSE-SSE Registered", img: "/image/About page/NSE_SSE.webp" },
  { label: "CSR-1 Registered", img: "/image/About page/CSR-1.webp" },
  { label: "12A & 80G Certified", img: "/image/About page/12A_80G.webp" },
  { label: "Darpan Registered", img: "/image/About page/Darpan.webp" },
  { label: "Ministry of Jal Shakti Partner", img: "/image/About page/MinistryofJalShaktiPartner.webp" },
];

/* ═══════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════ */
export default function AboutPage() {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const storyRef = useRef<HTMLDivElement | null>(null);

  const [statsVisible, setStatsVisible] = useState(false);
  const [storyVisible, setStoryVisible] = useState(false);

  const statsInView = useInView(statsRef, { once: true });
  const storyInView = useInView(storyRef, { once: true });

  useEffect(() => {
    if (statsInView) setStatsVisible(true);
  }, [statsInView]);

  useEffect(() => {
    if (storyInView) setStoryVisible(true);
  }, [storyInView]);

  return (
    <SmoothScroll>
      <div className="bg-white text-gray-800">
        {/* ══════════════════════════════════════════
            1. HERO
        ══════════════════════════════════════════ */}
        <section className="container">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_480px] gap-12 items-center">
            {/* LEFT */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                <div className="h-px w-8 bg-[var(--color-secondary)]" />
                <span className="text-[var(--color-secondary)] text-xs font-bold tracking-[0.22em] uppercase text-center">
                  About Girganga Parivar Trust
                </span>
                <div className="h-px w-8 bg-[var(--color-secondary)]" />
              </div>

              <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 text-center lg:text-start">
                Conserving{" "}
                <span className="text-[var(--color-primary)]">Water,</span>
                <br />
                Reviving Gujarat&#39;s Future
              </motion.h1>

              <motion.p className="text-gray-500 text-sm leading-relaxed max-w-3xl mb-3 text-center lg:text-start">
                Girganga Parivar Trust (GGPT) is a non-profit organization
                committed to strengthening rural water security through
                community-led water conservation and groundwater recharge
                initiatives. Working primarily in drought-prone regions of
                Gujarat, the Trust focuses on building decentralized water
                harvesting structures such as check dams, recharge bore wells,
                and other watershed interventions that help capture monsoon
                runoff and restore underground aquifers.
              </motion.p>

              <motion.p className="text-gray-500 text-sm leading-relaxed max-w-3xl mb-8 text-center lg:text-start">
                Since its inception, GGPT has worked closely with local
                communities, farmers, and institutions to address the growing
                challenges of groundwater depletion, erratic rainfall, and
                climate variability. Through participatory planning and
                sustainable watershed development, the organization aims to
                enhance water availability for agriculture, improve rural
                livelihoods, and build long-term resilience in vulnerable
                regions.
              </motion.p>

              <motion.p className="text-gray-500 text-sm leading-relaxed max-w-3xl mb-8 text-center lg:text-start">
                Over the years, GGPT has implemented thousands of water
                conservation structures across multiple districts, contributing
                significantly to groundwater recharge and improved water access
                for rural communities. The Trust's approach combines traditional
                knowledge, community participation, and practical engineering
                solutions to create scalable and sustainable models for water
                security.
              </motion.p>

              <motion.p className="text-gray-500 text-sm leading-relaxed max-w-3xl mb-8 text-center lg:text-start">
                Guided by a vision of a water-secure and climate-resilient rural
                India, GGPT continues to expand its efforts to support villages
                in restoring their natural water systems and strengthening the
                foundation for sustainable development.
              </motion.p>


              <div className="w-full flex justify-center lg:justify-start">
                <Link
                  href="/donate"
                  className="group relative overflow-hidden inline-flex items-center justify-center gap-2 
    text-white font-semibold text-sm w-[250px] lg:text-base px-5 py-3 rounded-lg
    bg-[url('/image/button/button-bg.jpeg')] bg-cover bg-center"
                >
                  <span className="relative z-10">Support Us</span>

                  <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                    →
                  </span>

                  <span className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></span>
                </Link>
              </div>
            </motion.div>

            {/* RIGHT — image collage */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="w-full"
            >
              {/* Mobile */}
              <div className="grid grid-cols-2 gap-3 lg:hidden">
                <motion.div className="relative h-44 rounded-2xl overflow-hidden shadow-lg col-span-2">
                  <Image src="/image/About page/hiraba after.png"
                    alt="Water conservation"
                    fill
                    className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 bg-white rounded-xl shadow px-3 py-2">
                    <p className="text-[10px] font-bold text-[var(--color-primary)]">
                      🌊 Gujarat · Saurashtra
                    </p>
                  </div>
                </motion.div>
                <motion.div className="relative h-50 rounded-2xl overflow-hidden shadow-md">
                  <Image src="/image/About page/jibiyaa after.png"
                    alt="Check dam"
                    fill
                    className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} />
                </motion.div>
                <motion.div className="relative h-50 rounded-2xl overflow-hidden shadow-md">
                  <Image src="/image/About page/pavitram after.png"
                    alt="Farmers"
                    fill
                    className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} />
                </motion.div>
              </div>

              {/* Desktop collage */}
              <div className="relative h-[620px] hidden lg:block">
                <motion.div className="absolute right-0 top-0 w-[75%] h-[55%] rounded-3xl overflow-hidden shadow-xl">
                  <Image src="/image/About page/hiraba after.png"
                    alt="Check dam"
                    fill
                    className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} />
                </motion.div>
                <motion.div className="absolute left-0 bottom-0 w-[72%] h-[62%] rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/image/About page/jibiyaa after.png"
                    alt="Water conservation"
                    fill
                    className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </motion.div>
                <motion.div
                  transition={{ delay: 0.3 }}
                  className="absolute right-2 bottom-[18%] w-[32%] h-[28%] rounded-2xl overflow-hidden shadow-xl border-2 border-white"
                >
                  <Image src="/image/About page/pavitram after.png"
                    alt="Farmers"
                    fill
                    className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="absolute top-[38%] left-[16%] bg-white rounded-2xl shadow-xl px-4 py-3 z-10 border border-gray-100"
                >
                  <p className="text-xs font-bold text-[var(--color-primary)]">
                    🌊 Gujarat · Saurashtra
                  </p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Est. 2017</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
    1.5 ABOUT US & COMPLIANCE
══════════════════════════════════════════ */}
<section className="bg-[var(--color-tertiary)]">
  <div className="container">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
      {/* LEFT — About Us */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
          <div className="h-px w-8 bg-[var(--color-secondary)]" />
          <span className="text-[var(--color-secondary)] text-xs font-bold tracking-[0.22em] uppercase">
            About Us
          </span>
          <div className="h-px w-8 bg-[var(--color-secondary)]" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight text-center lg:text-start">
          A Movement Rooted in{" "}
          <span className="text-[var(--color-primary)]">Gujarat</span>
        </h2>

        <p className="text-gray-500 text-sm leading-relaxed mb-6 text-center lg:text-start">
          Girganga Parivar Trust (GGPT) is a Gujarat-based grassroots
          organization dedicated to water conservation, groundwater
          recharge, and sustainable rural development. Through
          community-driven water harvesting initiatives, GGPT has created
          and rejuvenated thousands of decentralized water conservation
          structures across rural and urban regions of Gujarat.
        </p>

        <p className="text-gray-500 text-sm leading-relaxed mb-8 text-center lg:text-start">
          Over the last four years, GGPT has expanded its footprint across{" "}
          <strong>{impactMetrics.districts.display} districts</strong> and{" "}
          <strong>{impactMetrics.talukas.display} talukas</strong>,
          positively impacting{" "}
          <strong>{impactMetrics.locationsReached.display} locations</strong>{" "}
          and benefiting more than{" "}
          <strong>{impactMetrics.peopleImpacted.display.replace("+", "")}</strong>{" "}
          people through
          improved water availability, agricultural resilience, and climate
          adaptation.
        </p>

        <div className="grid grid-cols-2 gap-4">
          {[
            { value: impactMetrics.districts.display, label: "Districts" },
            { value: impactMetrics.talukas.display, label: "Talukas" },
            {
              value: impactMetrics.locationsReached.display,
              label: "Locations Impacted",
            },
            {
              value: impactMetrics.peopleImpacted.display,
              label: "People Impacted",
            },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-2xl p-4 text-center border border-gray-100 shadow-sm"
            >
              <p className="text-2xl font-bold text-[var(--color-primary)]">
                {s.value}
              </p>
              <p className="text-xs text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

{/* RIGHT — Compliance & Institutional Credentials */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.15 }}
  variants={stagger}
>
  <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
    <div className="h-px w-8 bg-[var(--color-secondary)]" />
    <span className="text-[var(--color-secondary)] text-xs font-bold tracking-[0.22em] uppercase">
      Compliance & Credentials
    </span>
    <div className="h-px w-8 bg-[var(--color-secondary)]" />
  </div>

  <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-center lg:text-start">
    Registered &{" "}
    <span className="text-[var(--color-primary)]">Recognised</span>
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4">
    {complianceBadges.map((badge) => (
      <motion.div
        key={badge.label}
        variants={fadeUp}
        className="flex flex-col items-center text-center gap-3 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-[var(--color-primary)]/25 hover:-translate-y-0.5 transition-all duration-300"
      >
        <div className="w-full aspect-square max-w-[125px] rounded-xl  flex items-center justify-center p-3">
          <img
            loading="lazy"
            src={badge.img}
            alt={badge.label}
            className="w-full h-full object-contain"
          />
        </div>
        <span className="text-xs font-semibold text-gray-800 leading-snug">
          {badge.label}
        </span>
      </motion.div>
    ))}
  </div>
</motion.div>
    </div>
  </div>
</section>

        {/* ══════════════════════════════════════════
            2. OUR ORIGIN
        ══════════════════════════════════════════ */}
        <section className="bg-[var(--color-tertiary)]">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={stagger}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* LEFT CONTENT */}
                <motion.div>
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                    <div className="h-px w-8 bg-[var(--color-secondary)]" />
                    <span className="text-[var(--color-secondary)] text-xs font-bold tracking-[0.22em] uppercase">
                      Our Origin
                    </span>
                    <div className="h-px w-8 bg-[var(--color-secondary)]" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight text-center lg:text-start">
                    A Grassroots Movement <br />
                    <span className="text-[var(--color-primary)]">
                      Born in 2017
                    </span>
                  </h2>

                  <p className="text-gray-500 text-sm leading-relaxed mb-4 text-center lg:text-start">
                    Girganga Parivar Trust was established in 2017 as a
                    grassroots initiative focused on Gau Seva (cattle welfare)
                    and strengthening rural livelihoods in Gujarat. The
                    initiative began with the collective participation of
                    farmers, community leaders, and volunteers dedicated to
                    supporting rural communities through livestock care and
                    community service.
                  </p>

                  <p className="text-gray-500 text-sm leading-relaxed mb-4 text-center lg:text-start">
                    The movement was led by Mr. Dilipbhai Sakhiya, a respected
                    farmer leader, social worker, and former President of the
                    District Kisan Sangh in Rajkot. Through his grassroots
                    leadership, he mobilized villagers, gram panchayat
                    representatives, youth volunteers, civil society
                    organizations, and industry supporters to build a
                    community-driven platform for rural development.
                  </p>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 text-center lg:text-start">
                    As the initiative progressed, the organization witnessed the
                    severe challenges faced by farmers due to water scarcity,
                    declining groundwater levels, and recurring droughts across
                    Gujarat. Recognizing that sustainable water resources are
                    fundamental to rural livelihoods, the Trust gradually
                    expanded its mission to include community-led water
                    conservation and groundwater recharge initiatives.
                  </p>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 text-center lg:text-start">
                    What began with the cleaning and rejuvenation of a few
                    silted check dams soon evolved into a large-scale grassroots
                    movement for decentralized water conservation and watershed
                    restoration.
                  </p>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 text-center lg:text-start">
                    Today, GGPT has grown into one of Gujarat’s impactful
                    community-driven initiatives for water conservation,
                    groundwater recharge, and rural climate resilience, working
                    closely with villages to strengthen long-term water
                    security.
                  </p>
                </motion.div>

                {/* RIGHT CONTENT */}
                <motion.div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-[var(--color-tertiary)] flex items-center justify-center text-sm">
                        🐄
                      </span>
                      Founded with Gau Sevaz
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Began with cattle welfare and rural livelihood support,
                      building community trust across Gujarat's villages.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-[var(--color-tertiary)] flex items-center justify-center text-sm">
                        💧
                      </span>
                      Evolved into Water Conservation
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Recognised that sustainable water resources are
                      fundamental to rural livelihoods — expanded mission
                      accordingly.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-[var(--color-tertiary)] flex items-center justify-center text-sm">
                        🚀
                      </span>
                      Today&apos;s Scale
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      One of Gujarat's most impactful community-driven
                      initiatives for water conservation, groundwater recharge,
                      and rural climate resilience — working across{" "}
                      {impactMetrics.districts.display} districts,{" "}
                      {impactMetrics.talukas.display} talukas, and{" "}
                      {impactMetrics.locationsReached.display} locations.
                    </p>
                  </div>

                  {/* SDG */}
                  <div className="flex gap-4 flex-wrap items-center justify-center lg:justify-start mt-2">
                    {[
                      {
                        label: "SDG 6 · Clean Water",
                        img: "/image/partner-with-us-csr/csr-1.jpg",
                      },
                      {
                        label: "SDG 13 · Climate Action",
                        img: "/image/partner-with-us-csr/csr-2.png",
                      },
                      {
                        label: "SDG 15 · Life on Land",
                        img: "/image/partner-with-us-csr/csr-3.jpg",
                      },
                    ].map((sdg) => (
                      <div
                        key={sdg.label}
                        className="flex  items-center w-70 gap-2 px-2 py-2  rounded-2xl border border-[var(--color-primary)]/30 bg-white shadow-sm hover:shadow-md transition"
                      >
                        <img loading="lazy" src={sdg.img}
                          alt={sdg.label}
                          className="w-15 h-15 rounded-xl object-contain"
                        />
                        <span className="text-sm md:text-base font-semibold text-[var(--color-primary)]">
                          {sdg.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            3. TIMELINE — OUR JOURNEY
        ══════════════════════════════════════════ */}
        <section className="bg-white">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={stagger}
                className="text-center mb-14"
              >
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="h-px w-8 bg-[var(--color-secondary)]" />
                  <span className="text-[var(--color-secondary)] text-xs font-bold tracking-[0.22em] uppercase">
                    Our Journey
                  </span>
                  <div className="h-px w-8 bg-[var(--color-secondary)]" />
                </div>
                <motion.h2
                  className="text-3xl md:text-4xl font-bold"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Timeline of{" "}
                  <span className="text-[var(--color-primary)]">Impact</span>
                </motion.h2>
                <motion.p className="text-gray-500 text-sm mt-3 max-w-full mx-auto">
                  Since its establishment, Girganga Parivar Trust has steadily
                  expanded its efforts to address water scarcity and groundwater
                  depletion in drought-prone regions of Gujarat.
                </motion.p>

                <motion.p className="text-gray-500 text-sm mt-3 max-w-full mx-auto">
                  Through strong community participation, institutional
                  partnerships, and support from CSR organizations and
                  government agencies, GGPT has implemented thousands of
                  decentralized water harvesting structures that capture monsoon
                  runoff, recharge groundwater aquifers, and support
                  agricultural livelihoods.
                </motion.p>
              </motion.div>

              {/* Timeline */}
              <div className="relative">
                {/* Centre line — desktop */}
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

                <div className="space-y-10 lg:space-y-0">
                  {timelineItems.map((item, i) => (
                    <motion.div
                      key={item.year}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: 0.05 * i }}
                      className={`relative lg:grid lg:grid-cols-2 lg:gap-10 lg:mb-12 ${
                        i % 2 === 0 ? "" : "lg:[direction:rtl]"
                      }`}
                    >
                      {/* Content card */}
                      <div
                        className={`bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-[var(--color-primary)]/25 transition-all duration-300 lg:[direction:ltr] ${
                          i % 2 === 0 ? "lg:text-right" : ""
                        }`}
                      >
                        <div
  className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
>
  <span className="w-10 h-10 rounded-full bg-[var(--color-tertiary)] flex items-center justify-center shrink-0">
    {item.type === "image" ? (
      <img
        loading="lazy"
        src={item.src}
        alt="icon"
        className="w-6 h-6 object-contain"
      />
    ) : (
      item.icon && (
        <item.icon className="text-lg text-[var(--color-primary)]" />
      )
    )}
  </span>
  <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-primary)] bg-[var(--color-tertiary)] px-3 py-1 rounded-full">
    {item.year}
  </span>
</div>
                        <h3 className="font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <div className="text-gray-500 text-sm leading-relaxed">
                          {item.desc}
                        </div>
                      </div>

                      {/* Centre dot — desktop */}
                      <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[var(--color-primary)] border-4 border-white shadow-md z-10" />

                      {/* Empty col opposite */}
                      <div className="hidden lg:block" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Jal Katha 2026 — special callout */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="mt-16 rounded-3xl overflow-hidden bg-[var(--color-primary)] p-8 lg:p-12 relative"
              >
                {/* Background circles */}
                <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-[var(--color-secondary)]/10" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[var(--color-secondary)]/10" />

                <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                  {/* LEFT CONTENT */}
                  <div>
                    <span className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-white/80 text-xs font-bold uppercase tracking-widest mb-4">
                      🌍 Global Recognition 2026
                    </span>

                    <h3
                      className="text-white text-2xl lg:text-3xl font-bold mb-3 leading-tight"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Jal Katha 2026 —<br />
                      <span className="text-[var(--color-secondary)]">
                        World Record Initiative
                      </span>
                    </h3>

                    <p className="text-white/75 text-sm leading-relaxed">
                      In 2026, GGPT organized Jal Katha – Apne Apne Shyam Ki, a
                      unique public awareness initiative focused on promoting
                      water conservation and responsible water use.
                    </p>

                    <p className="text-white/75 text-sm leading-relaxed">
                      The event created a historic moment where thousands of
                      people collectively took an oath to conserve water, making
                      it the world’s first mass public water conservation pledge
                      through a Jal Katha event.
                    </p>
                  </div>

                  {/* RIGHT LIST */}
                  <div className="space-y-3">
                    <p className="text-[var(--color-secondary)] text-xs font-bold uppercase tracking-widest mb-3">
                      5 International World Record Recognitions
                    </p>

                    {jalKathaRecords.map((rec, i) => (
                      <div
                        key={rec}
                        className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3"
                      >
                        <span className="text-[var(--color-secondary)] font-black text-lg">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-white text-sm font-medium">
                          {rec}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            4. Vision for the Future
        ══════════════════════════════════════════ */}
        <section className="container py-20">
          <div className="max-w-7xl mx-auto space-y-20">
            {/* Vision */}
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-8 bg-[var(--color-secondary)]" />
                <span className="text-[var(--color-secondary)] text-xs font-bold tracking-[0.22em] uppercase">
                  Vision for the Future
                </span>
                <div className="h-px w-8 bg-[var(--color-secondary)]" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Building a{" "}
                <span className="text-[var(--color-primary)]">
                  Water Secure India
                </span>
              </h2>

              <p className="text-gray-500 text-sm leading-relaxed mb-3">
                Building on its growing impact, Girganga Parivar Trust continues
                to expand its mission with the long-term vision of rejuvenating{" "}
                <strong>1,11,111 water conservation structures</strong> across
                India.
              </p>

              <p className="text-gray-500 text-sm leading-relaxed">
                Through community participation, scientific watershed planning,
                and collaborative partnerships, the Trust aims to strengthen
                rural water security, sustainable agriculture, and climate
                resilience for thousands of villages across the country.
              </p>
            </div>

            {/* Timeline */}
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              {[
                {
                  year: "2017",
                  type: "image",
                  src: "/image/About page/Deshi-Cow-removebg-preview.png",
                  theme: "Foundation - Gau Seva",
                },
                {
                  year: "2019",
                  icon: FaTint,
                  theme: "Start of Water Conservation",
                },
                { year: "2021", icon: FaMountain, theme: "Expansion" },
                { year: "2024", icon: FaGlobeAsia, theme: "Regional Movement" },
                { year: "2025", icon: FaChartBar, theme: "Impact Milestone" },
                {
                  year: "Future",
                  icon: FaRocket,
                  theme: "Vision 1,11,111 Structures",
                },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition text-center"
                  >
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[var(--color-tertiary)] flex items-center justify-center">
                      {item.type === "image" ? (
                        <img loading="lazy" src={item.src}
                          alt="icon"
                          className="w-12 h-12 object-contain"
                        />
                      ) : (
                        Icon && (
                          <Icon className="text-4xl text-[var(--color-primary)]" />
                        )
                      )}
                    </div>

                    <p className="font-bold text-sm text-[var(--color-primary)]">
                      {item.year}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{item.theme}</p>
                  </div>
                );
              })}
            </div>

            {/* Leadership */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* LEFT CONTENT */}
              <div>
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                  <div className="h-px w-8 bg-[var(--color-secondary)]" />
                  <span className="text-[var(--color-secondary)] text-xs font-bold text-center tracking-[0.22em] uppercase">
                    Leadership & Governance
                  </span>
                  <div className="h-px w-8 bg-[var(--color-secondary)]" />
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-4 text-center lg:text-start">
                  The work of Girganga Parivar Trust is guided by a committed
                  Board of Trustees with experience in agriculture, rural
                  development, community mobilization, and financial management.
                  The Board provides strategic direction while ensuring
                  transparency, accountability, and long-term sustainability of
                  the organization’s mission.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--color-primary)] text-center lg:text-start">
                  Founder & President
                </h3>

                <p className="font-semibold text-lg text-gray-900 mb-4 text-center lg:text-start">
                  Mr. DILIPBHAI SAKHIYA
                </p>

                <p className="text-gray-500 text-sm leading-relaxed mb-4 text-center lg:text-start">
                  A veteran grassroots leader and water conservation advocate
                  with more than two decades of community engagement, he
                  initiated the <strong>“1,11,111 Jal Sanchay Sankalp”</strong>,
                  a people-driven movement aimed at restoring water systems
                  through community participation and decentralized watershed
                  development.{" "}
                </p>

                <p className="text-gray-500 text-sm leading-relaxed text-center lg:text-start">
                  Under his leadership, the organization has mobilized farmers,
                  village institutions, youth volunteers, and development
                  partners to collectively work toward strengthening water
                  security across rural regions.
                </p>

                <div className="mt-6 border-l-4 border-[var(--color-primary)] pl-4 italic text-gray-600 text-sm">
                  “Leadership at GGPT is not about hierarchy; it is about
                  working with communities—structure by structure, village by
                  village.”
                </div>
              </div>

              {/* RIGHT IMAGE (REPLACED CARD) */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-60 h-60 md:w-100 md:h-100 rounded-full bg-[var(--color-primary)] p-2 shadow-2xl ">
                  {/* Profile Image */}
                  <img loading="lazy" src="/image/About page/SNI_7828.JPG"
                    alt="Dilipbhai Sakhiya"
                    className="w-full h-full object-cover rounded-full border-4 border-white"
                  />
                </div>
              </div>
            </div>
            {/* Global Outreach — added below Board */}

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={fadeUp}
  className="relative overflow-hidden bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
>
  {/* Decorative accent */}
  <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[var(--color-tertiary)]" />
  <div className="absolute -bottom-14 -left-14 w-36 h-36 rounded-full bg-[var(--color-secondary)]/10" />

  <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
    {/* LEFT — Icon + eyebrow */}
    <div className="flex flex-col items-center lg:items-start shrink-0">
      <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center text-white shadow-lg shadow-emerald-900/20 mb-3">
        <Globe2 size={28} strokeWidth={2} />
      </div>
      <span className="text-[var(--color-secondary)] text-xs font-bold tracking-[0.2em] uppercase text-center lg:text-start">
        Global Outreach
      </span>
    </div>

    {/* Divider */}
    <div className="hidden lg:block w-px self-stretch bg-gray-100" />
    <div className="lg:hidden w-full h-px bg-gray-100" />

    {/* MIDDLE — Person info */}
    <div className="flex-1 text-center lg:text-start">
      <h4 className="font-bold text-xl text-gray-900">
        Mr. Harishbhai Bhalani
      </h4>
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-0.5">
        USA
      </p>
      <p className="text-sm text-[var(--color-primary)] font-semibold mt-2">
        International Outreach & Resource Mobilization Coordinator
      </p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-4">
        {[
          "USA Coordination",
          "NRI Donor Engagement",
          "Awareness Meetings",
          "Community Partnerships",
        ].map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-medium px-3 py-1.5 rounded-full bg-[var(--color-tertiary)] text-[var(--color-primary)] border border-[var(--color-primary)]/10"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* RIGHT — Contact pill */}
    <div className="flex justify-center lg:justify-end shrink-0">
      <a
        href="tel:+14109710291"
        className="group inline-flex items-center gap-2.5 bg-[var(--color-primary)] text-white text-sm font-semibold px-5 py-3 rounded-xl shadow-md hover:shadow-lg hover:brightness-110 transition-all"
      >
        <span className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
          <Phone size={15} />
        </span>
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[10px] font-normal text-white/70">Call</span>
          <span>+1 (410) 971-0291</span>
        </span>
      </a>
    </div>
  </div>
</motion.div>
            {/* Core Values */}
            <div>
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="h-px w-8 bg-[var(--color-secondary)]" />
                  <span className="text-[var(--color-secondary)] text-xs font-bold tracking-[0.22em] uppercase">
                    Core Values
                  </span>
                  <div className="h-px w-8 bg-[var(--color-secondary)]" />
                </div>

                <h3 className="text-3xl font-bold">
                  Principles that{" "}
                  <span className="text-[var(--color-primary)]">
                    Guide Our Work
                  </span>
                </h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Sustainability",
                    img: "/image/About page/Sustainability.webp",
                    desc: "GGPT is committed to promoting environmentally sustainable water management practices that restore natural water systems and ensure long-term availability of water resources for agriculture, ecosystems, and rural communities.",
                  },
                  {
                    title: "Community Ownership",
                    img: "/image/About page/Community.webp",
                    desc: "We believe that lasting change happens when communities actively participate in planning, implementing, and maintaining water conservation initiatives.",
                  },
                  {
                    title: "Transparency & Accountability",
                    img: "/image/About page/Transparency.webp",
                    desc: "GGPT maintains high standards of transparency, ethical governance, and accountability in all its programs.",
                  },
                  {
                    title: "Collaboration",
                    img: "/image/About page/Collaboration.webp",
                    desc: "GGPT collaborates with communities, government institutions, CSR partners, and organizations.",
                  },
                  {
                    title: "Innovation & Learning",
                    img: "/image/About page/Innovation.webp",
                    desc: "GGPT continuously explores innovative approaches and integrates practical knowledge with field experience.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
                  >
                    {/* Image */}
                    <div className="relative h-auto overflow-hidden">
                      <img loading="lazy" src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h4 className="font-bold text-lg mb-2 group-hover:text-[var(--color-primary)] transition">
                        {item.title}
                      </h4>

                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            5. OUR ORIGIN
        ══════════════════════════════════════════ */}
        <section className="overflow-hidden">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-10 lg:pt-0">
                {/* LEFT — circular image */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative flex items-center justify-center mx-auto w-full max-w-[420px] lg:max-w-none"
                  style={{ minHeight: 320 }}
                >
                  {/* outer dashed ring */}
                  <div className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] rounded-full border-2 border-dashed border-[var(--color-primary)] animate-[spin_30s_linear_infinite]" />
                  {/* inner ring */}
                  <div className="absolute w-[240px] h-[240px] sm:w-[290px] sm:h-[290px] md:w-[360px] md:h-[360px] rounded-full border border-[var(--color-primary)]/50" />

                  <div className="relative w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden shadow-2xl shadow-emerald-900/20 border-4 border-white z-10">
                    <Image src="/image/About page/mission (1).jpeg"
                      alt="Water conservation work"
                      fill
                      className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} />
                  </div>

                  {/* Stat badge — top right */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                    className="absolute top-2 right-2 sm:top-6 sm:right-4 md:top-8 md:right-8 z-20 w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] rounded-full bg-[var(--color-primary)] text-white flex flex-col items-center justify-center shadow-xl shadow-emerald-600/30"
                  >
                    <span className="font-playfair text-lg sm:text-xl md:text-2xl font-bold leading-none">
                      90%
                    </span>
                    <span className="text-[8px] sm:text-[9px] font-semibold tracking-wide text-center leading-tight mt-0.5 px-1">
                      Water
                      <br />
                      Restored
                    </span>
                  </motion.div>

                  {/* Stat badge — bottom left */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.55, type: "spring" }}
                    className="absolute bottom-2 left-2 sm:bottom-6 sm:left-4 md:bottom-8 md:left-8 z-20 w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] flex flex-col items-center justify-center shadow-xl shadow-yellow-500/30"
                  >
                    <span className="font-playfair text-lg sm:text-xl md:text-2xl font-bold leading-none">
                      580+
                    </span>
                    <span className="text-[8px] sm:text-[9px] font-semibold tracking-wide text-center leading-tight mt-0.5 px-1">
                      Villages
                      <br />
                      Covered
                    </span>
                  </motion.div>
                </motion.div>

                {/* RIGHT — content */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="space-y-5 sm:space-y-6 text-center lg:text-start"
                >
                  {/* Heading */}
                  <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Mission &amp; Vision <br />
                    <span className="text-[var(--color-primary)]">
                      For Gujarat
                    </span>
                  </h2>

                  <div className="w-full h-px bg-gray-100" />

                  {/* Mission + Vision cards */}
                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-emerald-50 rounded-2xl p-4 sm:p-5 border border-emerald-100">
                      <div className="w-10 h-10 bg-[var(--color-primary)] mx-auto lg:mx-0 rounded-lg flex items-center justify-center  text-white mb-3">
                        <Target size={20} strokeWidth={2.5} />
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2 text-sm">
                        Our Mission
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        To strengthen rural water security through community-led
                        water conservation, groundwater recharge, and watershed
                        development initiatives that enhance agricultural
                        productivity, support rural livelihoods, and build
                        resilience to climate variability.
                      </p>
                    </div>
                    <div className="bg-yellow-50 rounded-2xl p-4 sm:p-5 border border-yellow-100">
                      <div className="w-10 h-10 bg-[var(--color-secondary)] rounded-lg flex items-center mx-auto lg:mx-0 justify-center text-[var(--color-primary)] mb-3">
                        <Eye size={20} strokeWidth={2.5} />
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2 text-sm">
                        Our Vision
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        A water-secure and climate-resilient rural India where
                        communities sustainably manage and protect their natural
                        water resources, ensuring long-term agricultural
                        prosperity, ecological balance, and improved quality of
                        life for future generations.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SmoothScroll>
  );
}
