"use client";

import { useState } from "react";
import { HandCoins, Heart, Building2 } from "lucide-react";
import SmoothScroll from "../../Component/SmothScrolling";
import Image from "next/image";
import Link from "next/link";
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

const structures = [
  {
    icon: "/icons/crane-machine (1).png",
    alt: "Check Dam Rejuvenation",
    title: "Check Dam Deepening & Rejuvenation",
    desc: "Restoring aging dams to retain maximum water through monsoon seasons.",
    number: "01",
  },
  {
    icon: "/icons/tanker.png",
    alt: "New Check Dam Construction",
    title: "New Check Dam Construction",
    desc: "Building barriers that harvest seasonal rainfall before it runs off.",
    number: "02",
  },
  {
    icon: "/icons/rotate.png",
    alt: "Borewell Recharge Structures",
    title: "Borewell Recharge Structures",
    desc: "Channeling surface water deep underground to replenish aquifers.",
    number: "03",
  },
  {
    icon: "/icons/spinner-of-dots (1).png",
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
    href: "/support-a-structure",
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
    href: "/donate",
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
    href: "/donate",
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
      <section className="font-sans bg-white overflow-x-hidden">
        {/* Section - 1 */}
        <section className="container bg-white pt-15 overflow-hidden">

          <div className="relative z-10 max-w-7xl mx-auto justify-center items-center flex flex-col text-center">
            <p className="inline-flex items-center gap-2 border border-emerald-600/25 bg-emerald-600/5 text-emerald-600 text-[11px] tracking-[0.16em] uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              Water for Farms, Families, and the Future
            </p>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-emerald-600 leading-tight mb-6 max-w-6xl">
              One Structure.{" "} <br/>
              <span className="italic text-emerald-600/70">
                Multiple Generations Benefit.
              </span>
            </h1>

            <p className="text-gray-500 text-lg font-light leading-relaxed max-w-2xl">
              Water scarcity affects farmers, livestock, women, and children
              every day. By supporting a single conservation structure, you help
              secure drinking water, agriculture, and livelihoods for an entire
              village.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-emerald-600/10 pt-8">
              {[
                { num: "1,200+", label: "Structures Built" },
                { num: "3.5 Lakh", label: "Farmers Benefited" },
                { num: "22 Years", label: "Of Work" },
              ].map((s) => (
                <div
                  key={s.num}
                  className="flex items-center gap-3 bg-emerald-600/5 border border-emerald-600/15 rounded-full px-5 py-2.5"
                >
                  <span className="text-xl font-black text-emerald-600">
                    {s.num}
                  </span>
                  <span className="text-gray-500 text-sm">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section - 2 */}
        <section className="container bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
              <div>
                <p className="flex items-center justify-center lg:justify-start gap-3 text-emerald-600 text-xs font-semibold tracking-[0.18em] uppercase mb-4">
                  About Structures
                  <span className="flex-1 max-w-[40px] h-px bg-emerald-600/40" />
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-emerald-600 leading-tight text-center lg:text-left">
                  What is a{" "}
                  <span className="italic">&ldquo;Structure&rdquo;?</span>
                </h2>
              </div>
              <p className="text-gray-500 text-lg font-light leading-relaxed lg:pb-1 text-center lg:text-left ">
                A water conservation structure is a scientifically designed
                intervention that captures rainwater and recharges groundwater —
                turning barren land into fertile, water-secure villages.
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-600/20 aspect-[16/7]">
              <Image
                src="/image/Suport-image.png"
                alt="Water Conservation Structures"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-emerald-600/90 backdrop-blur-sm text-white text-sm font-medium px-5 py-2 rounded-full border border-white/20">
                GGPT Field Operations — Gujarat, India
              </div>
            </div>
          </div>
        </section>

        {/* Section - 3 */}
        <section className="container bg-white overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="mb-16">
              <p className="flex items-center justify-center lg:justify-start gap-3 text-emerald-600 text-xs font-semibold tracking-[0.18em] uppercase mb-4">
                Structure Types
                <span className="flex-1 max-w-[40px] h-px bg-emerald-600/40" />
              </p>
              <h2 className="text-4xl lg:text-5xl font-black text-emerald-600 leading-tight max-w-4xl text-center lg:text-left">
                Structures Supported{" "}
                <span className="italic text-emerald-600/70">by GGPT</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-px rounded-3xl overflow-hidden bg-emerald-600/10">
              {structures.map((s) => (
                <div
                  key={s.number}
                  className="group relative bg-white hover:bg-emerald-600/5 transition-colors p-10 flex flex-col gap-6"
                >
                  <span className="absolute top-6 right-8 text-6xl font-black text-emerald-100 leading-none pointer-events-none select-none group-hover:text-emerald-200 transition-colors">
                    {s.number}
                  </span>
                  <div className="w-14 h-14 bg-emerald-600/10 border border-emerald-600/20 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600/20 transition-colors">
                    <Image
                      src={s.icon}
                      alt={s.alt}
                      width={32}
                      height={32}
                      className="object-contain w-8 h-8"
                    />
                  </div>
                  <div>
                    <h3 className="text-emerald-600 text-xl font-bold leading-snug mb-2">
                      {s.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">
                      {s.desc}
                    </p>
                  </div>
                  <span className="text-emerald-600 text-xl opacity-0 group-hover:opacity-100 transition-opacity mt-auto self-end">
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section - 4 */}
        <section className="container bg-white overflow-hidden">
      
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="lg:max-w-2xl mb-14 text-center lg:text-left">
              <p className="inline-flex items-center  gap-2 border border-emerald-600/25 bg-emerald-600/5 text-emerald-600 text-[11px] tracking-[0.16em] uppercase px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                The Ground Reality
              </p>
              <h2 className="text-4xl lg:text-5xl font-black text-emerald-600 leading-tight text-center lg:text-left">
                Why Your <span className="italic">Support Matters</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="flex flex-col gap-4">
                {problems.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center lg:justify-start gap-4 bg-white border-2 border-emerald-600/10 rounded-2xl px-6 py-5 hover:border-emerald-600/30 hover:shadow-md hover:shadow-emerald-600/5 transition-all"
                  >
                    <span className="w-8 h-8 bg-emerald-600/10 border border-emerald-600/20 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-emerald-600 text-xs font-black">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-gray-600 text-base leading-relaxed font-light">
                      {p}
                    </p>
                  </div>
                ))}
              </div>

              <div className="relative bg-emerald-600 rounded-3xl p-10 overflow-hidden flex flex-col gap-6">
                <div
                  className="absolute top-0 right-0 w-48 h-48 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle, white 1.5px, transparent 1.5px)`,
                    backgroundSize: "16px 16px",
                  }}
                />
                <span className="text-5xl">💧</span>
                <div>
                  <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-3">
                    Key Impact Fact
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight">
                    One structure can benefit{" "}
                    <span className="italic text-white/80">
                      200–500 families
                    </span>{" "}
                    for many years.
                  </h3>
                </div>
                <div className="mt-2 flex flex-wrap gap-3">
                  {[
                    "Drinking Water",
                    "Agriculture",
                    "Livestock",
                    "Livelihoods",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/15 border border-white/25 text-white text-xs font-semibold px-4 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section - 5 */}
        <section className="container bg-white overflow-hidden">
          <div className="absolute left-0 top-12 bottom-12 w-1 bg-emerald-600 rounded-full" />

          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="inline-flex items-center gap-3 text-emerald-600 text-xs font-bold tracking-[0.18em] uppercase mb-4">
                <span className="w-8 h-px bg-emerald-600/40" />
                Choose How to Help
                <span className="w-8 h-px bg-emerald-600/40" />
              </p>
              <h2 className="text-4xl lg:text-5xl font-black text-emerald-600 leading-tight">
                Support <span className="italic">Options</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {supportOptions.map((opt) => (
                <div
                  key={opt.number}
                  className={`group relative rounded-3xl p-8 flex flex-col gap-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                    opt.featured
                      ? "bg-emerald-600 shadow-2xl shadow-emerald-600/30"
                      : "bg-white border-2 border-emerald-600/15 hover:border-emerald-600 hover:shadow-xl hover:shadow-emerald-600/10"
                  }`}
                >
                  <span
                    className={`absolute top-4 right-5 text-7xl font-black leading-none pointer-events-none select-none transition-colors ${opt.featured ? "text-white/[0.08]" : "text-emerald-600/[0.07] group-hover:text-emerald-600/15"}`}
                  >
                    {opt.number}
                  </span>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${opt.featured ? "bg-white/20 border border-white/30" : "bg-emerald-600/10 border border-emerald-600/20 group-hover:bg-emerald-600/20"}`}
                  >
                    <opt.Icon
                      className={
                        opt.featured ? "text-white" : "text-emerald-600"
                      }
                      size={26}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p
                      className={`text-xs font-bold uppercase tracking-widest mb-1 ${opt.featured ? "text-white/60" : "text-emerald-600/60"}`}
                    >
                      {opt.tag}
                    </p>
                    <h3
                      className={`text-xl font-black leading-tight ${opt.featured ? "text-white" : "text-emerald-600"}`}
                    >
                      {opt.title}
                    </h3>
                    <p
                      className={`text-sm mt-1.5 font-light leading-relaxed ${opt.featured ? "text-white/65" : "text-gray-500"}`}
                    >
                      {opt.desc}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-2.5 flex-1">
                    {opt.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${opt.featured ? "bg-white/60" : "bg-emerald-600"}`}
                        />
                        <span
                          className={`text-sm leading-snug font-light ${opt.featured ? "text-white/75" : "text-gray-600"}`}
                        >
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link href={opt.href}>
                    <button
                      className={`w-full py-3.5 rounded-full font-semibold text-sm transition-all active:scale-95 ${opt.featured ? "bg-white text-emerald-600 hover:bg-white/90 shadow-lg shadow-black/10" : "bg-emerald-600 text-white hover:bg-emerald-600/90 shadow-lg shadow-emerald-600/25"}`}
                    >
                      {opt.cta} →
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section - 6 */}
        <section className="container bg-white overflow-hidden">         

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="mb-14 text-center lg:text-left">
              <p className="inline-flex items-center gap-2 border border-emerald-600/25 bg-emerald-600/5 text-emerald-600 text-[11px] tracking-[0.16em] uppercase px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                Transparency & Trust
              </p>
              <h2 className="text-4xl lg:text-5xl font-black text-emerald-600 leading-tight max-w-2xl">
                What You <span className="italic">Receive</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="grid gap-4">
                {receives.map(({ Icon, text }, i) => (
                  <div
                    key={i}
                    className="group flex items-center gap-5 bg-white border-2 border-emerald-600/15 rounded-2xl px-6 py-5 hover:border-emerald-600 hover:shadow-lg hover:translate-x-1 transition-all duration-200"
                  >
                    <div className="w-11 h-11 bg-emerald-600/10 border border-emerald-600/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-emerald-600/20 transition-colors">
                      <Icon
                        className="text-emerald-600"
                        size={20}
                        strokeWidth={1.5}
                      />
                    </div>
                    <p className="text-gray-700 text-sm font-medium leading-snug">
                      {text}
                    </p>
                    <span className="ml-auto text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity text-lg">
                      →
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-6">
                <div className="relative bg-emerald-600 rounded-3xl p-10 overflow-hidden">
                  <div
                    className="absolute top-0 right-0 w-48 h-48 opacity-15 pointer-events-none"
                    style={{
                      backgroundImage: `radial-gradient(circle, white 1.5px, transparent 1.5px)`,
                      backgroundSize: "16px 16px",
                    }}
                  />
                  <span className="text-5xl mb-4 block">🛡️</span>
                  <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-3">
                    Our Commitment
                  </p>
                  <p className="text-white text-2xl font-black leading-snug">
                    GGPT follows audited processes and{" "}
                    <span className="italic text-white/80">
                      transparent fund utilization
                    </span>
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { num: "100%", label: "Audited" },
                    { num: "GPS", label: "Tagged" },
                    { num: "8354+", label: "Structures" },
                  ].map((s) => (
                    <div
                      key={s.num}
                      className="bg-white border-2 border-emerald-600/15 rounded-2xl px-4 py-5 text-center hover:border-emerald-600 transition-colors"
                    >
                      <p className="text-2xl font-black text-emerald-600 leading-none mb-1">
                        {s.num}
                      </p>
                      <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section - 7 */}
        <section className="container bg-emerald-600 overflow-hidden">
  
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="mb-12 text-center lg:text-left">
              <p className="flex items-center justify-center gap-3 text-white/70 text-xs font-bold tracking-[0.18em] uppercase mb-4">
                <span className="w-8 h-px bg-white/40" />
                Get In Touch
              </p>
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight max-w-xl">
                CSR Partnership{" "}
                <span className="italic text-white/75">Inquiry Form</span>
              </h2>
            </div>

            <div className="max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl shadow-black/20 flex">
              <div className="hidden md:flex w-2 bg-emerald-600/30 shrink-0" />
              <div className="flex-1 px-8 sm:px-10 py-10 flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-1.5">
                      Company Name *
                    </label>
                    <div className="flex items-center gap-2 border-2 border-emerald-600/20 rounded-xl px-4 py-3 bg-emerald-600/5 focus-within:border-emerald-600 focus-within:bg-white transition-colors">
                      <FileText
                        size={14}
                        className="text-emerald-600 shrink-0"
                      />
                      <input
                        type="text"
                        placeholder="Your company name"
                        value={form.company}
                        onChange={(e) =>
                          setForm({ ...form, company: e.target.value })
                        }
                        className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-1.5">
                      Email *
                    </label>
                    <div className="flex items-center gap-2 border-2 border-emerald-600/20 rounded-xl px-4 py-3 bg-emerald-600/5 focus-within:border-emerald-600 focus-within:bg-white transition-colors">
                      <FileText
                        size={14}
                        className="text-emerald-600 shrink-0"
                      />
                      <input
                        type="email"
                        placeholder="example@email.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-1.5">
                    Subject *
                  </label>
                  <div className="flex items-center gap-2 border-2 border-emerald-600/20 rounded-xl px-4 py-3 bg-emerald-600/5 focus-within:border-emerald-600 focus-within:bg-white transition-colors">
                    <FileText size={14} className="text-emerald-600 shrink-0" />
                    <input
                      type="text"
                      placeholder="Subject Details"
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-1.5">
                    CSR Budget & Contact Person Details *
                  </label>
                  <div className="flex items-start gap-2 border-2 border-emerald-600/20 rounded-xl px-4 py-3 bg-emerald-600/5 focus-within:border-emerald-600 focus-within:bg-white transition-colors">
                    <FileText
                      size={14}
                      className="text-emerald-600 shrink-0 mt-0.5"
                    />
                    <textarea
                      rows={4}
                      placeholder="Your CSR Budget, Contact person Name, Number and Other Details"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent resize-none"
                    />
                  </div>
                </div>

                <p className="text-gray-400 text-xs leading-relaxed">
                  Note: Fill-up all respective fields, then click below button
                  to send your message.
                </p>

                <button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-600/90 text-white font-bold px-10 py-4 rounded-full transition-all shadow-lg shadow-emerald-600/25 active:scale-[0.98] flex items-center gap-2 justify-center">
                  Send Message →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section - 8 */}
        <section className="container bg-white overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-600" />

          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="inline-flex items-center gap-3 text-emerald-600 text-xs font-bold tracking-[0.18em] uppercase mb-4">
                <span className="w-8 h-px bg-emerald-600/40" />
                Explore More
                <span className="w-8 h-px bg-emerald-600/40" />
              </p>
              <h2 className="text-4xl lg:text-5xl font-black text-emerald-600 leading-tight">
                Know More <span className="italic">About Us</span>
              </h2>
              <p className="text-gray-500 text-base font-light mt-4 max-w-lg mx-auto leading-relaxed">
                Repairing, deepening, and raising check dams. A Rainwater
                harvesting initiative.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  img: "/image/support-structure-1.jpg",
                  label: "Awards",
                  Icon: Award,
                  href: "/awards",
                  desc: "Recognition & achievements earned over 22 years of impact.",
                },
                {
                  img: "/image/support-structure-2.jpg",
                  label: "Media",
                  Icon: Tv2,
                  href: "/media",
                  desc: "News coverage, documentaries and stories from the field.",
                },
                {
                  img: "/image/support-structure-3.png",
                  label: "Structure Locations",
                  Icon: MapPin,
                  href: "/Our-Work",
                  desc: "GPS-tagged structures across Gujarat's drought-prone regions.",
                },
              ].map(({ img, label, Icon, href, desc }) => (
                <Link key={label} href={href}>
                  <div className="group relative bg-white border-2 border-emerald-600/15 rounded-3xl overflow-hidden hover:border-emerald-600 hover:shadow-xl hover:shadow-emerald-600/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={img}
                        alt={label}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/50 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md">
                        <Icon
                          className="text-emerald-600"
                          size={18}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-emerald-600 font-black text-lg mb-2">
                        {label}
                      </h3>
                      <p className="text-gray-500 text-sm font-light leading-relaxed">
                        {desc}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-emerald-600 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore →
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
