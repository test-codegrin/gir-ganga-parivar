"use client";

import { motion, Variants } from "framer-motion";
import {
  Briefcase,
  Building2,
  FlaskConical,
  GraduationCap,
  Landmark,
  Megaphone,
  Subtitles,
} from "lucide-react";

import SmoothScroll from "../../Component/SmothScrolling";
import { FaFlag, FaSeedling, FaTools, FaWater } from "react-icons/fa";
import Image from "next/image";

// ─── ANIMATION VARIANTS ──────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

// ─── PRIMITIVES ───────────────────────────────────────────────────
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <span className="block w-7 h-px bg-(--color-secondary)" />
      <span className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-(--color-secondary) font-[var(--font)]">
        {children}
      </span>
      <span className="block w-7 h-px bg-(--color-secondary)" />
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-10 space-y-5">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-[var(--font)] text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.15] text-gray-900 mb-4">
        {title} <span className="text-(--color-primary)">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-500 text-[0.92rem] leading-[1.8] mx-auto font-[var(--font)]">
          {subtitle}
        </p>
      )}
      <p className="text-gray-500 text-[0.92rem] leading-[1.8] mx-auto font-[var(--font)]">
        Through these collaborations, GGPT helps connect academic knowledge with
        real-world environmental action in rural communities.
      </p>

      <div className="w-12 h-[3px] bg-(--color-secondary) rounded-full mx-auto mt-5" />
    </div>
  );
}

function Tag({
  children,
  bg = "bg-(--color-tertiary)",
  color = "text-[var(--color-greenish)]",
}: {
  children: React.ReactNode;
  bg?: string;
  color?: string;
}) {
  return (
    <span
      className={`inline-block ${bg} ${color} text-[0.65rem] font-semibold tracking-[0.1em] uppercase px-3 py-1 rounded-full mb-3 font-[var(--font)]`}
    >
      {children}
    </span>
  );
}

function Field({
  label,
  full,
  children,
}: {
  label: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${full ? "col-span-2" : ""}`}>
      <label className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-(--color-primary) font-[var(--font)]">
        {label}
      </label>
      <div className="flex items-center gap-2 bg-(--color-tertiary) rounded-xl px-4 py-2.5 border border-transparent">
        {children}
      </div>
    </div>
  );
}

// ─── PAGE DATA ───────────────────────────────────────────────────
const engagementModels = [
  {
    title: "Water Conservation Projects",
    topText:
      "Corporations can support the construction and rejuvenation of decentralized water harvesting structures such as:",
    items: [
      "Check dams",
      "Recharge bore wells",
      "Percolation pits",
      "Village watershed restoration projects",
    ],
    bottomText:
      "These interventions significantly improve groundwater recharge and agricultural productivity in drought-prone regions.",
  },
  {
    title: "Climate & Environmental Programs",
    topText:
      "Companies can collaborate with GGPT to implement climate resilience initiatives aligned with environmental sustainability goals, including:",
    items: [
      "Groundwater recharge programs",
      "Watershed ecosystem restoration",
      "Climate adaptation for rural communities",
    ],
    bottomText:
      "These initiatives contribute directly to long-term ecological sustainability.",
  },
  {
    title: "Employee & Partnership Engagement",
    topText: "Companies may also engage their employees through:",
    items: [
      "Field visits to project sites, ",
      "Volunteer participation in conservation activities",
      "Awareness programs on sustainable water management",
    ],
    bottomText:
      "This strengthens employee engagement while contributing to meaningful social impact.",
  },
  {
    title: "Impact Transparency",
    topText:
      "GGPT provides corporate partners with clear and credible reporting, including:",
    items: [
      "Project progress updates, ",
      "Geographic impact maps, ",
      "Data on water structures created, ",
      "Groundwater recharge estimates, ",
      "Community impact assessments. ",
    ],
    bottomText: "This ensures transparency and measurable CSR outcomes.",
  },
];

const govFeatures = [
  {
    icon: <FaWater />,
    title: "Water Conservation & Groundwater Recharge",
    desc: "GGPT works alongside government departments to support initiatives that improve groundwater availability through the construction and rejuvenation of water harvesting structures such as check dams and recharge systems.",
    dec: "These efforts help strengthen village-level water security and support drought resilience in semi-arid regions.",
  },
  {
    icon: <FaSeedling />,
    title: "Rural Development Programs",
    desc: "The Trust collaborates with government agencies involved in rural development to support village-level infrastructure that benefits farmers, livestock, and local ecosystems.",
    dec: "This includes participation in watershed restoration activities and community-based resource management initiatives.",
  },
  {
    icon: <FaTools />,
    title: "Technical & Community Implementation Support",
    desc: "GGPT brings strong grassroots experience in mobilizing local communities, facilitating village participation, and ensuring long-term sustainability of water conservation assets.",
    dec: "Through this approach, the Trust supports government initiatives by helping translate policy and program objectives into effective ground-level action.",
  },
  {
    icon: <FaFlag />,
    title: "Alignment with National Water & Climate Priorities",
    desc: "GGPT’s programs contribute to broader national priorities related to water conservation, climate resilience, and sustainable rural development.",
    dec: "By working together with government institutions, the Trust helps scale community-driven models that address groundwater depletion and strengthen environmental sustainability.",
  },
];

const eduCards = [
  {
    Icon: GraduationCap,
    iconBg: "bg-(--color-tertiary)",
    iconColor: "text-(--color-primary)",
    iconColorHex: "var(--color-primary)",
    title: "Student Field Exposure & Learning Visits",
    desc: "Educational institutions can organize field visits to GGPT project locations where students can observe water conservation structures such as check dams and groundwater recharge systems. These visits help students understand practical approaches to watershed development and rural water management.",
    items: [
      "Live site walk-throughs with project engineers",
      "Practical watershed development exposure",
      "Rural water management field learning",
    ],
  },
  {
    Icon: FlaskConical,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-800",
    iconColorHex: "#854d0e",
    title: "Research & Academic Collaboration",
    desc: "GGPT welcomes collaboration with universities and research institutions for studies related to:",
    items: [
      "Groundwater recharge, ",
      "Watershed management, ",
      "Climate resilience, ",
      "Rural water governance, ",
      "⦁	Sustainable agriculture practices. ",
    ],
  },
  {
    Icon: Briefcase,
    iconBg: "bg-[var(--color-dark)]",
    iconColor: "text-(--color-primary)",
    iconColorHex: "var(--color-primary)",
    title: "Internships & Student Engagement",
    desc: "Students from various disciplines such as environmental science, rural development, engineering, and social sciences can participate in internships and field projects with GGPT. These opportunities provide hands-on experience in community engagement, environmental management, and development practices.",
    items: [
      "Environmental science & engineering students",
      "Rural development & social science streams",
      "Live field project participation",
    ],
  },
  {
    Icon: Megaphone,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-800",
    iconColorHex: "#9d174d",
    title: "Awareness & Knowledge Programs",
    desc: "GGPT also partners with educational institutions to conduct awareness programs, seminars, and workshops on topics such as:",
    items: [
      "Water conservation practices, ",
      "Climate change adaptation, ",
      "Sustainable rural development, ",
      "Community-led environmental initiatives. ",
    ],
  },
];

const sdgData = [
  {
    title: "SDG 6 – Clean Water and Sanitation",
    description:
      "Ensure availability and sustainable management of water and sanitation for all.",
    image: "/image/partner-with-us-csr/csr-1.jpg",
  },
  {
    title: "SDG 13 – Climate Action",
    description: "Take urgent action to combat climate change and its impacts.",
    image: "/image/partner-with-us-csr/csr-2.png",
  },
  {
    title: "SDG 15 – Life on Land",
    description:
      "Protect, restore and promote sustainable use of terrestrial ecosystems.",
    image: "/image/partner-with-us-csr/csr-3.jpg",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────
export default function Support() {
  return (
    <>
      <SmoothScroll>
        <div className="font-[var(--font)] bg-[#fafafa] overflow-x-hidden">
          {/* ══════════════════════════════════
          1 · HERO
      ══════════════════════════════════ */}
          <section className="bg-(--color-primary) grid relative overflow-hidden">
            <div className="container">
              <div className="absolute inset-0 pointer-events-none bg-text-(--color-primary)" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-self-center relative z-10 max-w-7xl w-full">
                {/* LEFT */}
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={stagger}
                  className="flex flex-col text-center lg:text-start"
                >
                  <motion.div variants={fadeUp}>
                    <Eyebrow>Girganga Parivar Trust</Eyebrow>
                  </motion.div>

                  <motion.h1
                    variants={fadeUp}
                    className="font-[var(--font)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-white mb-6"
                  >
                    Working Together
                    <br />
                    For{" "}
                    <span className="text-(--color-secondary) italic">
                      Sustainable
                    </span>
                    <br />
                    Water Security
                  </motion.h1>

                  <motion.p
                    variants={fadeUp}
                    className="text-white/70 text-base leading-[1.75] lg:max-w-[580px] mb-8 font-[var(--font)]"
                  >
                    Girganga Parivar Trust welcomes partnerships with
                    corporations that are committed to creating meaningful
                    environmental and social impact. Through collaborative CSR
                    initiatives, companies can support large-scale water
                    conservation, groundwater recharge, and climate resilience
                    programs across rural Gujarat.
                  </motion.p>
                  <motion.p
                    variants={fadeUp}
                    className="text-white/70 text-base leading-[1.75] lg:max-w-[580px] mb-8 font-[var(--font)]"
                  >
                    GGPT offers a transparent and community-driven
                    implementation model that enables corporate partners to
                    directly contribute to improving water security,
                    agricultural sustainability, and rural livelihoods.
                  </motion.p>
                </motion.div>

                {/* RIGHT – partner type cards */}
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={stagger}
                  className="flex flex-col gap-5"
                >
                  {[
                    {
                      Icon: Building2,
                      bg: "bg-[rgba(241,207,105,0.22)]",
                      title: "Corporate Partnerships",
                      desc: "CSR-driven water conservation — check dams, recharge bores, watershed restoration, employee volunteering & impact reporting.",
                    },
                    {
                      Icon: Landmark,
                      bg: "bg-[rgba(172,215,243,0.22)]",
                      title: "Government Collaboration",
                      desc: "Public–community convergence for scalable decentralised water management and national climate priority alignment.",
                    },
                    {
                      Icon: GraduationCap,
                      bg: "bg-[rgba(52,211,153,0.18)]",
                      title: "Educational Institutes",
                      desc: "Field visits, research tie-ups, internships, and awareness programs cultivating the next generation of water stewards.",
                    },
                  ].map(({ Icon, bg, title, desc }, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="bg-white/[0.07] border border-white/[0.12] rounded-2xl px-7 py-6 flex gap-5 items-start cursor-default"
                      whileHover={{ x: 6, background: "rgba(255,255,255,.13)" }}
                      transition={{ type: "tween", duration: 0.25 }}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl ${bg} grid place-items-center shrink-0`}
                      >
                        <Icon size={22} color="#ffffff" />
                      </div>
                      <div>
                        <h3 className="text-[0.95rem] font-semibold text-white mb-1 font-[var(--font)]">
                          {title}
                        </h3>
                        <p className="text-[0.78rem] text-white/55 leading-[1.6] font-[var(--font)]">
                          {desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
          2 · CORPORATE PARTNERSHIPS
      ══════════════════════════════════ */}
          <section className="container bg-white py-24 px-8">
            <div className=" mx-auto">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <SectionHeader
                  eyebrow="Partnership Type 01"
                  title="Corporate"
                  highlight="Partnerships"
                  subtitle="Your CSR investment creates measurable, auditable groundwater impact. We provide full transparency — from GPS-mapped sites to utilisation certificates."
                />
              </motion.div>

              {/* 3 engagement model cards */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={stagger}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {engagementModels.map((card, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="bg-(--color-tertiary) rounded-2xl p-7 border border-[rgba(0,157,196,0.12)] relative"
                    whileHover={{
                      y: -6,
                      boxShadow: "0 20px 40px rgba(0,157,196,.12)",
                    }}
                    transition={{ type: "tween", duration: 0.25 }}
                  >
                    <h4 className="font-bold text-base text-gray-900 mb-3 font-[var(--font)]">
                      {card.title}
                    </h4>

                    <p className="text-sm text-slate-600 mb-3">
                      {card.topText}
                    </p>

                    <ul className="list-none flex flex-col gap-2">
                      {card.items.map((item, j) => (
                        <li
                          key={j}
                          className="text-[0.78rem] text-gray-500 flex gap-2.5 items-start font-[var(--font)]"
                        >
                          <span className="text-[var(--color-accent)] font-bold">
                            ›
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <p className="text-sm text-slate-600 mt-3">
                      {card.bottomText}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ══════════════════════════════════
          3 · GOLS
      ══════════════════════════════════ */}
          <section className="container bg-white">
            <div className="max-w-7xl mx-auto text-center">
              <motion.div variants={fadeUp}>
                <Eyebrow>Goals</Eyebrow>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Alignment{" "}
                <span className="text-(--color-primary)">
                  with Global Sustainability
                </span>{" "}
                Goals
              </h2>
              <p className="text-gray-600 mb-10">
                Partnerships with GGPT contribute to key global development
                priorities.
              </p>

              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {sdgData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-md p-3 mg:p-6 hover:shadow-lg transition"
                  >
                    <Image src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-contain mb-4 rounded-2xl" quality={75} />

                    <h3 className="text-xl font-semibold mb-2 text-(--color-primary)">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
          4 · GOVERNMENT COLLABORATION
      ══════════════════════════════════ */}
          <section className="bg-(--color-tertiary) container">
            <div className="max-w-[1200px] mx-auto">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <SectionHeader
                  eyebrow="Partnership Type 02"
                  title="Government"
                  highlight="Collaboration"
                  subtitle="GGPT actively collaborates with government institutions and public sector agencies to expand community-led watershed development across Gujarat."
                />
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* feature list */}
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={stagger}
                  className="flex flex-col gap-5"
                >
                  {govFeatures.map((f, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="bg-white rounded-[18px] px-7 py-6 border-l-4 border-(--color-primary) space-y-5"
                      whileHover={{ x: 6 }}
                      transition={{ type: "tween", duration: 0.25 }}
                    >
                      <h4 className="font-semibold text-[0.95rem] flex gap-3 items-center  text-gray-900 mb-2.5 font-[var(--font)]">
                        <div className="text-(--color-primary) bg-(--color-tertiary) p-2 border border-(--color-primary)">
                          {f.icon}
                        </div>

                        {f.title}
                      </h4>
                      <p className="text-[0.82rem] text-gray-500 leading-[1.75] font-[var(--font)]">
                        {f.desc}
                      </p>

                      <p className="text-[0.82rem] text-gray-500 leading-[1.75] font-[var(--font)]">
                        {f.dec}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* callout */}
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="rounded-3xl p-10 text-white bg-(--color-primary)"
                >
                  <h3 className="font-[var(--font)] font-bold text-[1.6rem] mb-4">
                    Strengthening Public–Community Partnerships
                  </h3>
                  <p className="text-[0.85rem] text-white/[0.78] leading-[1.8] mb-3 font-[var(--font)]">
                    Collaboration between government institutions and grassroots
                    organisations plays a vital role in achieving long-term
                    water security.
                  </p>
                  <p className="text-[0.85rem] text-white/[0.78] leading-[1.8] font-[var(--font)]">
                    GGPT continues to work with public agencies to expand water
                    conservation initiatives and ensure rural communities
                    benefit from sustainable and resilient water systems.
                  </p>
                  <ul className="list-none flex flex-col gap-3 mt-6">
                    {[
                      "Proven convergence with government schemes",
                      "Strong local community mobilisation network",
                      "Technical execution — 18 excavators fleet",
                      "Transparent implementation & documentation",
                      "Scalable decentralised model for replication",
                      "Contribution to national drought-resilience goals",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="text-[0.82rem] text-white/[0.88] flex gap-2.5 items-start font-[var(--font)]"
                      >
                        <span className="text-(--color-secondary) font-bold">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
          4 · EDUCATIONAL PARTNERSHIPS
      ══════════════════════════════════ */}
          <section className="bg-white container">
            <div className="max-w-[1200px] mx-auto">
              {/* Header */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <SectionHeader
                  eyebrow="Partnership Type 03"
                  title="Educational Institute"
                  highlight="Partnerships"
                  subtitle="Girganga Parivar Trust collaborates with educational institutions to promote awareness, research, and practical learning on water conservation and environmental sustainability. These partnerships aim to engage students, researchers, and faculty members in understanding the challenges of water scarcity and the importance of community-led watershed management."
                />
              </motion.div>

              {/* Cards */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={stagger}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
              >
                {eduCards.map(
                  ({ Icon, iconBg, iconColorHex, title, desc, items }, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="bg-(--color-tertiary) rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-[rgba(0,157,196,0.1)]"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 16px 40px rgba(0,157,196,.10)",
                      }}
                      transition={{ type: "tween", duration: 0.25 }}
                    >
                      {/* Icon + Title */}
                      <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                        <div
                          className={`w-10 h-10 sm:w-[52px] sm:h-[52px] rounded-[12px] sm:rounded-[14px] ${iconBg} grid place-items-center shrink-0`}
                        >
                          <Icon
                            size={20}
                            className="sm:w-6 sm:h-6"
                            color={iconColorHex}
                          />
                        </div>
                        <h4 className="font-bold text-sm sm:text-base text-gray-900 font-[var(--font)]">
                          {title}
                        </h4>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-3 font-[var(--font)]">
                        {desc}
                      </p>

                      {/* List */}
                      <ul className="flex flex-col gap-1.5 sm:gap-2">
                        {items.map((item, j) => (
                          <li
                            key={j}
                            className="text-xs sm:text-sm text-gray-500 flex gap-2 items-start font-[var(--font)]"
                          >
                            <span className="text-(--color-secondary) font-bold shrink-0">
                              –
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ),
                )}

                {/* Bottom Wide Card */}
                <motion.div
                  variants={fadeUp}
                  className="col-span-1 sm:col-span-2 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white bg-(--color-primary)"
                >
                  <h4 className="font-[var(--font)] font-bold text-(--color-secondary) text-xl sm:text-2xl lg:text-[1.8rem] mb-3 sm:mb-4">
                    Building the Next Generation of Water Stewards
                  </h4>

                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed sm:leading-[1.8] max-w-[800px] font-[var(--font)]">
                    By working with educational institutions, GGPT aims to
                    inspire students to become responsible environmental
                    citizens and contribute to sustainable water management
                    solutions for the future.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </div>
      </SmoothScroll>
    </>
  );
}
