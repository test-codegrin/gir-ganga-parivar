"use client";

import { useState } from "react";
import {
  HandCoins,
  Heart,
  Building2,
  User,
  MessageSquare,
  Mail,
} from "lucide-react";
import SmoothScroll from "../../Component/SmothScrolling";
import Image from "next/image";
import Link from "next/link";
import { impactMetrics } from "@/data/impact-stats";
import {
  CheckCircle2,
  Camera,
  MapPin,
  Bell,
  FileCheck,
  Award,
  FileText,
  Tv2,
} from "lucide-react";
import { motion } from "framer-motion";

const structures = [
  {
    icon: "/icons/craner.png",
    alt: "Check Dam Rejuvenation",
    title: "Check Dam Deepening & Rejuvenation",
    desc: "Restoring aging dams to retain maximum water through monsoon seasons.",
    number: "01",
  },
  {
    icon: "/icons/truck.png",
    alt: "New Check Dam Construction",
    title: "New Check Dam Construction",
    desc: "Building barriers that harvest seasonal rainfall before it runs off.",
    number: "02",
  },
  {
    icon: "/icons/reload.png",
    alt: "Borewell Recharge Structures",
    title: "Borewell Recharge Structures",
    desc: "Channeling surface water deep underground to replenish aquifers.",
    number: "03",
  },
  {
    icon: "/icons/loading.png",
    alt: "Percolation Pits",
    title: "Percolation Pits",
    desc: "Simple yet powerful pits that slowly filter water back into the soil.",
    number: "04",
  },
];

const supportOptions = [
  {
    number: "01",
    tag: "Option 1",
    Icon: Heart,
    title: "Sponsor a Structure",
    desc: "Fund one complete water conservation structure in a village.",
    points: [
      "₹4.5 – ₹10 lakh (depending on location & type)",
      "Covers one complete water conservation structure",
      "Village-level impact with long-term benefits",
    ],
    cta: "Structure Support",
    href: "/donate",
  },
  {
    number: "02",
    tag: "Option 2",
    Icon: HandCoins,
    title: "Part Contribution",
    desc: "Every amount counts — your contribution is pooled for structure development.",
    points: [
      "₹25,000 | ₹50,000 | ₹1,00,000 | Custom amount",
      "Your contribution is pooled for structure development",
    ],
    cta: "Part Contribution",
    href: "#",
    featured: true,
  },
  {
    number: "03",
    tag: "Option 3",
    Icon: Building2,
    title: "Dedicate a Structure",
    desc: "Honour someone special by dedicating a structure in their name.",
    points: [
      "In the name of a family member",
      "In memory of a loved one",
      "As a group / community contribution",
    ],
    cta: "Dedicate A Structure",
    href: "#",
  },
];

const problems = [
  "Groundwater levels in many villages have fallen to 500–1200 feet",
  "Livestock population has reduced drastically due to water scarcity",
  "Farmers depend on monsoon rains for survival",
];

const receives = [
  { Icon: CheckCircle2, text: "100% Transparency in all the works" },
  { Icon: Camera, text: "Photo & video documentation (Before–After)" },
  { Icon: MapPin, text: "Location details of the structure" },
  { Icon: Bell, text: "Completion update and inauguration invitation" },
  { Icon: FileCheck, text: "Utilisation confirmation" },
  { Icon: Award, text: "Acknowledgement from the trust" },
];

export default function SupportAStructure() {
  const [form, setForm] = useState({
    company: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <SmoothScroll>
      <section className="overflow-x-hidden">
        {/* Section - 1 */}
        <section className="bg-(--color-tertiary)  overflow-hidden">
          <div className="container">
            <div className="relative z-10 max-w-7xl mx-auto justify-center items-center flex flex-col text-center">
              <p className="text-(--color-secondary) text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3">
                <span className="w-8 h-px bg-(--color-secondary)" />
                Water for Farms, Families, and the Future
                <span className="w-8 h-px bg-(--color-secondary)" />
              </p>
              <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                One Structure. <br />{" "}
                <span className="text-(--color-primary)">
                  {" "}
                  Multiple Generations Benefit.
                </span>
              </h1>
              <p className="text-gray-500 text-sm mt-5 max-w-xl mx-auto leading-relaxed">
                Water scarcity affects farmers, livestock, women, and children
                every day. By supporting a single conservation structure, you
                help secure drinking water, agriculture, and livelihoods for an
                entire village.
              </p>
              {/* thin emerald divider */}
              <div className="w-16 h-0.5 bg-(--color-primary) mx-auto mt-10 rounded-full" />

              <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-emerald-600/10 pt-8">
                {[
                  {
                    num: impactMetrics.waterStructuresCreated.display,
                    label: "Structures Built",
                  },
                  {
                    num: impactMetrics.peopleImpacted.display,
                    label: "People Impacted",
                  },
                  {
                    num: impactMetrics.districts.display,
                    label: "Districts Covered",
                  },
                ].map((s) => (
                  <div
                    key={s.num}
                    className="flex items-center gap-3 bg-white border border-emerald-600/15 rounded-full px-5 py-2.5"
                  >
                    <span className="text-xl font-black text-(--color-primary)">
                      {s.num}
                    </span>
                    <span className="text-gray-500 text-sm">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section - 2 */}
        <section className="container overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
              <div>
                <p className="flex items-center justify-center lg:justify-start gap-3 text-(--color-secondary) text-xs font-semibold tracking-[0.18em] uppercase mb-4">
                  About Structures
                  <span className="flex-1 max-w-[40px] h-px bg-(--color-secondary)" />
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-center lg:text-left">
                  What is a{" "}
                  <span className="italic text-(--color-primary)">
                    &ldquo;Structure&rdquo;?
                  </span>
                </h2>
              </div>
              <p className="text-gray-500 text-lg font-light leading-relaxed lg:pb-1 text-center lg:text-left ">
                A water conservation structure is a scientifically designed
                intervention that captures rainwater and recharges groundwater —
                turning barren land into fertile, water-secure villages.
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-md aspect-[5/2]">
              <Image src="/image/Suport-image.png"
                alt="Water Conservation Structures"
                fill
                className="object-cover w-full h-auto" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} />
              <div className="absolute bottom-6 left-6 bg-(--color-secondary) backdrop-blur-sm text-black text-sm font-medium px-5 py-2 rounded-full border border-white/20">
                GGPT Field Operations — Gujarat, India
              </div>
            </div>
          </div>
        </section>

        {/* Section - 3 */}
        <section className="container bg-white overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="mb-16">
              <p className="flex items-center justify-center lg:justify-start gap-3 text-(--color-secondary) text-xs font-semibold tracking-[0.18em] uppercase mb-4">
                Structure Types
                <span className="flex-1 max-w-[40px] h-px bg-(--color-secondary)" />
              </p>
              <h2 className="text-4xl lg:text-5xl font-black text-black leading-tight max-w-4xl text-center lg:text-left">
                Structures Supported{" "}
                <span className="text-(--color-primary)">by GGPT</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-px rounded-3xl overflow-hidden bg-(--color-primary)/30">
              {structures.map((s) => (
                <div
                  key={s.number}
                  className="group relative bg-white hover:bg-(--color-primary)/20 transition-colors p-10 flex flex-col gap-6"
                >
                  <span className="absolute top-6 right-8 text-6xl font-black text-(--color-primary) leading-none pointer-events-none select-none transition-colors">
                    {s.number}
                  </span>
                  <div className="w-14 h-14 bg-(--color-primary) border border-(--color-primary)/20 rounded-2xl flex items-center justify-center group-hover:bg-(--color-primary)/20 ">
                    <Image src={s.icon}
                      alt={s.alt}
                      width={45}
                      height={32}
                      className="object-contain w-10 h-8" quality={75} />
                  </div>
                  <div>
                    <h3 className="text-(--color-primary) text-xl font-bold leading-snug mb-2">
                      {s.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section - 4 */}
        <section className="container bg-white overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="mb-14 text-center">
              <p className="text-(--color-secondary) text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3">
                <span className="w-8 h-px bg-(--color-secondary)" />
                The Ground Reality
                <span className="w-8 h-px bg-(--color-secondary)" />
              </p>
              <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Why Your{" "}
                <span className="text-(--color-primary) w-full">
                  Support Matters
                </span>
              </h1>
              {/* thin emerald divider */}
              <div className="w-16 h-0.5 bg-(--color-primary) mx-auto mt-10 rounded-full" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* LEFT PROBLEMS */}
              <div className="flex flex-col gap-4">
                {problems.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-start gap-5 border-l-4 border-[var(--color-secondary)] bg-white px-6 py-5 shadow-sm hover:shadow-md transition"
                  >
                    <span className="text-(--color-primary) font-bold text-lg w-8">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <p className="text-gray-700 text-base leading-relaxed font-medium">
                      {p}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* RIGHT IMPACT CARD */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative bg-(--color-primary) p-10 shadow-xl"
              >
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-(--color-secondary) text-xs font-bold uppercase tracking-[0.25em] mb-3">
                      Impact Insight
                    </p>

                    <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight">
                      One water structure can support
                      <span className="block text-(--color-secondary) mt-2">
                        200 – 500 Families
                      </span>
                      for many years.
                    </h3>
                  </div>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Drinking Water",
                      "Agriculture",
                      "Livestock",
                      "Livelihoods",
                    ].map((tag, i) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="border border-white/30 text-white text-xs font-semibold px-4 py-1.5"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section - 5 */}
        <section className="container bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-(--color-secondary) text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3">
                <span className="w-8 h-px bg-(--color-secondary)" />
                Choose How to Help
                <span className="w-8 h-px bg-(--color-secondary)" />
              </p>
              <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Support{" "}
                <span className="text-(--color-primary)">Options</span>
              </h1>
              {/* thin emerald divider */}
              <div className="w-16 h-0.5 bg-(--color-primary) mx-auto mt-10 rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {supportOptions.map((opt, i) => (
                <motion.div
                  key={opt.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className={`relative flex flex-col gap-6 p-8 border-l-[5px] shadow-md transition
${
  opt.featured
    ? "bg-(--color-primary) border-[var(--color-secondary)]"
    : "bg-white border-(--color-primary)/30 hover:shadow-xl"
}`}
                >
                  {/* NUMBER */}
                  <span
                    className={`absolute top-5 right-6 text-6xl font-black opacity-10
${opt.featured ? "text-white" : "text-(--color-primary)"}
`}
                  >
                    {opt.number}
                  </span>

                  {/* ICON */}
                  <div
                    className={`w-12 h-12 flex items-center justify-center border
${
  opt.featured
    ? "border-white/40 bg-white/10"
    : "border-(--color-primary)/30 bg-(--color-tertiary)"
}`}
                  >
                    <opt.Icon
                      size={24}
                      className={
                        opt.featured
                          ? "text-white"
                          : "text-(--color-primary)"
                      }
                    />
                  </div>

                  {/* TITLE */}
                  <div>
                    <p
                      className={`text-xs font-bold uppercase tracking-widest mb-2
${opt.featured ? "text-white/60" : "text-(--color-primary)"}
`}
                    >
                      {opt.tag}
                    </p>

                    <h3
                      className={`text-xl font-black
${opt.featured ? "text-white" : "text-(--color-primary)"}
`}
                    >
                      {opt.title}
                    </h3>

                    <p
                      className={`text-sm mt-2 leading-relaxed
${opt.featured ? "text-white/70" : "text-gray-600"}
`}
                    >
                      {opt.desc}
                    </p>
                  </div>

                  {/* POINTS */}
                  <ul className="flex flex-col gap-2 flex-1">
                    {opt.points.map((pt, index) => (
                      <li key={index} className="flex gap-2">
                        <span
                          className={`w-2 h-2 mt-2
${opt.featured ? "bg-(--color-secondary)" : "bg-(--color-primary)"}
`}
                        />

                        <span
                          className={`text-sm
${opt.featured ? "text-white/80" : "text-gray-600"}
`}
                        >
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* BUTTON */}
                  <Link href={opt.href}>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 text-sm font-semibold tracking-wide transition cursor-pointer
${
  opt.featured
    ? "bg-(--color-secondary) text-black hover:opacity-90"
    : "bg-(--color-primary) text-white hover:opacity-90"
}`}
                    >
                      {opt.cta} →
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section - 6 */}
        <section className="container bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* HEADER */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16 flex flex-wrap justify-between"
            >
              <div>
                <p className="text-(--color-secondary) text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3">
                  <span className="w-8 h-px bg-(--color-secondary)" />
                  Transparency & Trust
                  <span className="w-8 h-px bg-(--color-secondary)" />
                </p>
                <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  What You{" "}
                  <span className="text-(--color-primary)">Receive</span>
                </h1>
              </div>

              {/* NEW PARAGRAPH */}
              <p className="text-gray-600 text-sm lg:text-base max-w-2xl mt-4 leading-relaxed">
                At GGPT, we believe that every contribution deserves complete
                transparency. When you support a water structure project, you
                receive clear documentation, project updates, and verified
                reports that show the real impact of your support in building
                sustainable water solutions for rural communities.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* LEFT IMAGE */}

              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative flex justify-center"
              >
                {/* IMAGE */}
                <Image src="/image/support-a-structure/water-structure.png"
                  alt="Water Structure"
                  width={700}
                  height={200}
                  className="w-full h-auto lg:h-150  object-cover rounded-2xl shadow-xl" quality={75} />

                {/* IMPACT CARD */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-(--color-secondary) text-white px-6 py-4 rounded-2xl shadow-lg text-center hidden md:block">
                  <p className="text-xs uppercase text-black">GGPT Impact</p>

                  <p className="text-lg font-bold text-black">
                    Building Sustainable Water Structures
                  </p>
                </div>
              </motion.div>

              {/* RIGHT CONTENT */}

              <div className="flex flex-col gap-6">
                {receives.map(({ Icon, text }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.15 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-5 border-l-4 border-(--color-primary) bg-white px-6 py-5 shadow-sm"
                  >
                    <div className="w-10 h-10 flex items-center justify-center border border-(--color-primary)/30 bg-(--color-tertiary)">
                      <Icon size={20} className="text-(--color-primary)" />
                    </div>

                    <p className="text-gray-700 font-medium text-sm leading-relaxed">
                      {text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section - 7 */}
        <section className="font-[var(--font)]">
          <div className="container">
            <div className=" mx-auto">
              <div className="text-center mb-16">
                <p className="text-(--color-secondary) text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center  gap-3">
                  <span className="w-8 h-px bg-(--color-secondary)" />
                  Get In Touch
                  <span className="w-8 h-px bg-(--color-secondary)" />
                </p>

                <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-black mb-6 text-center">
                  CSR Partnership
                  <span className="text-(--color-primary)">
                    {" "}
                    Inquiry Form
                  </span>
                </h2>

                {/* paragraph */}
                <p className="text-gray-500 text-lg mb-10 leading-relaxed text-center ">
                  Partner with us to create sustainable impact. Fill in the
                  details and our team will get back to you shortly.
                </p>
              </div>

              {/* form card */}
              <div>
                <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-(--color-primary)/20 flex flex-col md:flex-row">
                  {/* LEFT IMAGE */}
                  <div className="md:w-2/5 relative">
                    <Image src="/image/partner-with-us-csr/CSRform.png"
                      alt="Water structure construction"
                      width={800}
                      height={315}
                      className="w-full h-auto object-cover" quality={75} />

                    <div className="absolute inset-0 bg-linear-to-t from-(--color-primary)/60 to-transparent" />

                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-(--color-secondary) mb-2">
                        CSR Partnership
                      </p>

                      <h3 className="text-2xl font-bold leading-snug">
                        Build Water Security <br />
                        For Gujarat Villages
                      </h3>

                      <p className="text-sm text-white/80 mt-2">
                        Partner with us to create sustainable water structures.
                      </p>
                    </div>
                  </div>

                  {/* RIGHT FORM */}
                  <div className="w-full md:w-3/5 bg-white px-8 sm:px-12 py-10 flex flex-col gap-6">
                    <div>
                      <h3 className="text-2xl font-bold text-(--color-primary)">
                        Partner With Us
                      </h3>

                      <p className="text-gray-500 text-sm mt-1">
                        Enquire about CSR opportunities
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                      {/* Company */}
                      <div>
                        <label className="text-xs font-semibold text-(--color-primary) uppercase tracking-wide mb-1 block">
                          Company Name
                        </label>

                        <div className="flex items-center gap-2 border border-(--color-primary)/20 rounded-xl px-3 py-2 bg-(--color-tertiary) focus-within:border-(--color-primary)">
                          <Building2
                            size={16}
                            className="text-(--color-primary)"
                          />

                          <input
                            type="text"
                            placeholder="Your company name"
                            className="flex-1 text-sm outline-none bg-transparent"
                          />
                        </div>
                      </div>

                      {/* Contact */}
                      <div>
                        <label className="text-xs font-semibold text-(--color-primary) uppercase tracking-wide mb-1 block">
                          Contact Number
                        </label>

                        <div className="flex items-center gap-2 border border-(--color-primary)/20 rounded-xl px-3 py-2 bg-(--color-tertiary) focus-within:border-(--color-primary)">
                          <User
                            size={16}
                            className="text-(--color-primary)"
                          />

                          <input
                            type="tel"
                            placeholder="Your contact number"
                            maxLength={10}
                            pattern="[0-9]{10}"
                            className="flex-1 text-sm outline-none bg-transparent"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="text-xs font-semibold text-(--color-primary) uppercase tracking-wide mb-1 block">
                          Email
                        </label>

                        <div className="flex items-center gap-2 border border-(--color-primary)/20 rounded-xl px-3 py-2 bg-(--color-tertiary) focus-within:border-(--color-primary)">
                          <Mail
                            size={16}
                            className="text-(--color-primary)"
                          />

                          <input
                            type="email"
                            placeholder="exmple@emil.com"
                            className="flex-1 text-sm outline-none bg-transparent"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="text-xs font-semibold text-(--color-primary) uppercase tracking-wide mb-1 block">
                          Subject
                        </label>

                        <div className="flex items-center gap-2 border border-(--color-primary)/20 rounded-xl px-3 py-2 bg-(--color-tertiary) focus-within:border-(--color-primary)">
                          <FileText
                            size={16}
                            className="text-(--color-primary)"
                          />

                          <input
                            type="text"
                            placeholder="subject details"
                            className="flex-1 text-sm outline-none bg-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    {/* TEXTAREA */}
                    <div>
                      <label className="text-xs font-semibold text-(--color-primary) uppercase tracking-wide mb-1 block">
                        CSR Budget & Details
                      </label>

                      <div className="flex items-start gap-2 border border-(--color-primary)/20 rounded-xl px-3 py-3 bg-(--color-tertiary) focus-within:border-(--color-primary)">
                        <MessageSquare
                          size={16}
                          className="text-(--color-primary) mt-1"
                        />

                        <textarea
                          rows={3}
                          placeholder="Share your CSR budget range and expectations..."
                          className="flex-1 text-sm outline-none bg-transparent resize-none"
                        />
                      </div>
                    </div>

                    {/* BUTTON */}

                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="w-full"
                    >
                      <button
                        type="submit"
                        className="btn-primary w-full group relative inline-flex items-center justify-center gap-2
      font-semibold text-base px-10 py-4 cursor-pointer
      bg-(--color-primary) text-(--color-secondary)
      hover:text-(--color-primary) overflow-hidden"
                      >
                        <span className="relative z-10 flex gap-2 items-center">
                          Submit Inquiry →
                        </span>

                        <span className="btn-primary-overlay"></span>
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section - 8 */}
        <section className="container">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <p className="text-(--color-primary) text-[10px] font-bold tracking-[0.25em] uppercase mb-3 flex items-center justify-center lg:justify-start gap-3">
                  <span className="w-8 h-px bg-(--color-primary)" />
                  Explore More
                </p>
                <h2 className="text-black text-4xl sm:text-5xl font-bold leading-tight text-center lg:text-start">
                  Know More{" "}
                  <span className="text-(--color-primary)">About Us</span>
                </h2>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed text-center lg:text-start  lg:max-w-xs">
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
                },
                {
                  img: "/image/support-structure-2.jpg",
                  label: "Media",
                  Icon: Tv2,
                  href: "/press-release",
                },
                {
                  img: "/image/support-structure-3.png",
                  label: "Structure Locations",
                  Icon: MapPin,
                  href: "/Our-Work",
                },
              ].map(({ img, label, Icon, href }) => (
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
                        className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-75" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} />
                      <div className="absolute inset-0 bg-linear-to-t from-[#111815] via-transparent to-transparent" />

                      {/* Icon badge */}
                      <div className="absolute top-4 right-4 w-9 h-9 bg-(--color-primary) rounded-lg flex items-center justify-center shadow-md">
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
                      <span className="mt-4 inline-flex items-center gap-2 text-(--color-secondary) text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Explore
                        <span className="w-5 h-px bg-(--color-secondary) group-hover:w-8 transition-all duration-300" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </section>
    </SmoothScroll>
  );
}
