"use client";
import Link from "next/link";
import { FaLeaf, FaQuestionCircle } from "react-icons/fa";
import { MdReceipt } from "react-icons/md";
import {
  ArrowRight,
  Building2,
  Download,
  FileText,
  LayoutList,
  Mail,
  MessageSquare,
  User,
} from "lucide-react";
import { useState } from "react";
import Slider from "../../Component/Slider";
import SmoothScroll from "../../Component/SmothScrolling";

const csrCards = [
  {
    icon: <FaQuestionCircle className="text-white text-2xl" />,
    title: "Why GGPT For CSR",
    number: "01",
    tag: "Credibility",
    items: [
      "CSR-1 & NGO-DARPAN registered",
      "8,354+ water conservation structures",
      "Proven execution capacity (18 excavators)",
      "Transparent reporting & audits",
      "Community + Government convergence",
    ],
  },
  {
    icon: <MdReceipt className="text-white text-2xl" />,
    title: "What CSR Partners Receive",
    number: "02",
    tag: "Benefits",
    items: [
      "Utilisation Certificate",
      "Impact Report (photos, GPS, numbers)",
      "Branding at site (if applicable)",
      "Annual / quarterly reporting",
      "CSR-1 Certificate",
    ],
  },
  {
    icon: <FaLeaf className="text-white text-2xl" />,
    title: "CSR Engagement Models",
    number: "03",
    tag: "Options",
    items: [
      "Sponsorship of check-dam deepening (₹4–₹10 lakh per structure)",
      "District / Taluka water security projects",
      "Machinery support (Excavators)",
      "Multi-year MoU partnerships",
      "Community + Government convergence",
    ],
  },
];

export default function Support() {
  const [message, setMessage] = useState("");

  return (
    <SmoothScroll>
      <div className="font-sans bg-white overflow-x-hidden">
        {/* Section - 1 */}
        <section className="container bg-white overflow-hidden">
          {/* top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-600" />

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* ── HEADER ── */}
            <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
              <div className="space-y-6 text-center lg:text-left">
                <p className="inline-flex items-center gap-2 border border-emerald-600/25 bg-emerald-600/5 text-emerald-600 text-[11px] tracking-[0.16em] uppercase px-4 py-2 rounded-full mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Why Partner With Us
                </p>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-emerald-600 leading-tight">
                  CSR & <span className="italic">Girganga Parivar</span>
                  <br />
                  Trust
                </h2>
              </div>
              <div className="lg:pb-2 ">
                <p className="text-lg leading-relaxed border-l-4 border-emerald-600/30 pl-5">
                  Partner with Girganga Parivar Trust to deliver scalable,
                  measurable water security solutions across Gujarat.
                </p>
              </div>
            </div>

            {/* ── CARDS ── */}
            <div className="grid md:grid-cols-3 gap-6">
              {csrCards.map((card, idx) => (
                <div
                  key={card.number}
                  className={`group relative rounded-3xl p-8 flex flex-col gap-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 border-2
                ${
                  idx === 1
                    ? "bg-emerald-600 border-emerald-600 shadow-2xl shadow-emerald-600/30"
                    : "bg-white border-emerald-600/15 hover:border-emerald-600 hover:shadow-xl hover:shadow-emerald-600/10"
                }`}
                >
                  {/* number watermark */}
                  <span
                    className={`absolute top-4 right-5 text-7xl font-black leading-none pointer-events-none select-none transition-colors
                  ${idx === 1 ? "text-white/[0.08]" : "text-emerald-600/[0.07] group-hover:text-emerald-600/15"}`}
                  >
                    {card.number}
                  </span>

                  {/* top tag */}
                  <span
                    className={`w-fit text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full border
                  ${
                    idx === 1
                      ? "bg-white/15 border-white/25 text-white"
                      : "bg-emerald-600/8 border-emerald-600/20 text-emerald-600"
                  }`}
                  >
                    {card.tag}
                  </span>

                  {/* icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-105
                  ${
                    idx === 1
                      ? "bg-white/20 border border-white/30 shadow-lg shadow-black/10"
                      : "bg-emerald-600 border border-emerald-600/0 shadow-lg shadow-emerald-600/30"
                  }`}
                  >
                    {card.icon}
                  </div>

                  {/* title */}
                  <h3
                    className={`text-xl font-black leading-tight
                  ${idx === 1 ? "text-white" : "text-emerald-600"}`}
                  >
                    {card.title}
                  </h3>

                  {/* divider */}
                  <div
                    className={`h-px w-full ${idx === 1 ? "bg-white/20" : "bg-emerald-600/10"}`}
                  />

                  {/* items */}
                  <ul className="flex flex-col gap-3 flex-1">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0
                        ${idx === 1 ? "bg-white/60" : "bg-emerald-600"}`}
                        />
                        <span
                          className={`text-sm leading-snug font-light
                        ${idx === 1 ? "text-white/75" : "text-gray-600"}`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* ── BOTTOM STAT STRIP ── */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { num: "8,354+", label: "Structures Built" },
                { num: "18", label: "CSR Excavators" },
                { num: "22+", label: "Years Active" },
                { num: "580+", label: "Gram Panchayats" },
              ].map((s) => (
                <div
                  key={s.num}
                  className="group bg-white border-2 border-emerald-600/15 rounded-2xl px-6 py-5 text-center hover:border-emerald-600 hover:shadow-lg hover:shadow-emerald-600/10 transition-all"
                >
                  <p className="text-3xl font-black text-emerald-600 leading-none mb-1">
                    {s.num}
                  </p>
                  <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section - 2 */}
        <section className="container bg-white overflow-hidden ">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <p className="flex items-center justify-center  gap-3 text-emerald-600 text-xs font-semibold tracking-[0.18em] uppercase mb-4">
                Documents & Action
                <span className="w-10 h-px bg-emerald-600/40" />
              </p>
              <h2 className="text-4xl lg:text-5xl font-black text-emerald-600 leading-tight ">
                Transparency Builds Trust,{" "}
                <span className="italic text-emerald-600/70">
                  Trust Builds Impact
                </span>
              </h2>
            </div>

            {/* hero action card */}
            <div className="bg-emerald-600/5 border border-emerald-600/20 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 mb-6">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-emerald-600/10 border border-emerald-600/20 rounded-2xl flex items-center justify-center shrink-0">
                  <Building2
                    className="text-emerald-600"
                    size={28}
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-emerald-600 mb-1">
                    Empowering Sustainable Change
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                    Your support helps us create structural impact in
                    communities that need it most across Gujarat.
                  </p>
                </div>
              </div>
              <Link href="/Our-Work" className="shrink-0">
                <button className="flex items-center gap-2 bg-emerald-600 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-emerald-600/90 transition-colors whitespace-nowrap shadow-lg shadow-emerald-600/25">
                  Support A Structure
                  <ArrowRight size={18} />
                </button>
              </Link>
            </div>

            {/* download cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  Icon: LayoutList,
                  title: "CSR Proposal",
                  desc: "Review our detailed objectives, methodology, and projected outcomes for the current fiscal year.",
                  cta: "Download CSR Proposal (PDF)",
                },
                {
                  Icon: Building2,
                  title: "Company Profile",
                  desc: "Learn more about our core values, mission, and the history of our social responsibility commitments.",
                  cta: "Download Company Profile (PDF)",
                },
              ].map(({ Icon, title, desc, cta }) => (
                <div
                  key={title}
                  className="group bg-white border-2 border-emerald-600/20 rounded-3xl p-8 flex flex-col gap-5 hover:border-emerald-600 hover:shadow-xl hover:shadow-emerald-600/10 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-emerald-600/10 border border-emerald-600/20 rounded-xl flex items-center justify-center group-hover:bg-emerald-600/20 transition-colors">
                    <Icon
                      className="text-emerald-600"
                      size={22}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="text-emerald-600 font-bold text-lg mb-2">
                      {title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                  <Link href="/Our-Work" className="mt-auto">
                    <button className="flex items-center gap-2 border border-emerald-600/30 text-emerald-600 hover:bg-emerald-600 hover:text-white font-medium px-5 py-2.5 rounded-full text-sm transition-colors">
                      <Download size={15} />
                      {cta}
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section - 3 */}
        <section className="container bg-white">
          <div className=" mx-auto">
            <div className="text-center mb-16">
              <p className="inline-flex items-center gap-3 text-black text-xs font-semibold tracking-[0.18em] uppercase mb-4">
                <span className="w-8 h-px bg-emerald-600/40" />
                Get In Touch
                <span className="w-8 h-px bg-emerald-600/40" />
              </p>
              <h2 className="text-4xl lg:text-5xl font-black text-emerald-600 leading-tight">
                CSR Partnership <span className="italic">Inquiry Form</span>
              </h2>
              <p className="text-gray-500 text-lg font-light mt-4 max-w-xl mx-auto leading-relaxed">
                Partner with us to create sustainable impact. Fill in the
                details and our team will get back to you shortly.
              </p>
            </div>

            {/* form card */}
            <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-emerald-600/10 border border-emerald-600/20 flex">
              {/* left image */}
              <div className="hidden md:block md:w-2/5 relative">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
                  alt="Construction excavator on site"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-emerald-600/20" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-2">
                    GGPT Operations
                  </p>
                  <p className="text-white text-xl font-bold leading-snug">
                    Building Water Security, One Structure at a Time
                  </p>
                </div>
              </div>

              {/* right form */}
              <div className="w-full md:w-3/5 bg-white px-8 sm:px-10 py-10 flex flex-col gap-5">
                <div>
                  <h3 className="text-xl font-bold text-emerald-600">
                    Partner with Us
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Enquire about CSR opportunities
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {[
                    {
                      id: "companyName",
                      label: "Company Name",
                      Icon: Building2,
                      type: "text",
                      placeholder: "Your company name",
                    },
                    {
                      id: "contactPerson",
                      label: "Contact Person",
                      Icon: User,
                      type: "text",
                      placeholder: "Full name",
                    },
                    {
                      id: "email",
                      label: "Email",
                      Icon: Mail,
                      type: "email",
                      placeholder: "you@company.com",
                    },
                    {
                      id: "subject",
                      label: "Subject",
                      Icon: FileText,
                      type: "text",
                      placeholder: "How can we help?",
                    },
                  ].map(({ id, label, Icon, type, placeholder }) => (
                    <div key={id}>
                      <label
                        htmlFor={id}
                        className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-1.5 block"
                      >
                        {label}
                      </label>
                      <div className="flex items-center gap-2 border-2 border-emerald-600/20 rounded-xl px-3.5 py-2.5 bg-emerald-600/5 focus-within:border-emerald-600 focus-within:bg-white transition-colors">
                        <Icon size={15} className="text-emerald-600 shrink-0" />
                        <input
                          type={type}
                          id={id}
                          placeholder={placeholder}
                          className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
                        />
                      </div>
                    </div>
                  ))}

                  {/* textarea */}
                  <div>
                    <label
                      htmlFor="csrBudget"
                      className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-1.5 block"
                    >
                      CSR Budget & Details
                    </label>
                    <div className="flex items-start gap-2 border-2 border-emerald-600/20 rounded-xl px-3.5 py-2.5 bg-emerald-600/5 focus-within:border-emerald-600 focus-within:bg-white transition-colors">
                      <MessageSquare
                        size={15}
                        className="text-emerald-600 shrink-0 mt-0.5"
                      />
                      <textarea
                        id="csrBudget"
                        placeholder="Share your budget range and partnership expectations..."
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent resize-none"
                      />
                    </div>
                  </div>
                </div>

                <button className="w-full bg-emerald-600 hover:bg-emerald-600/90 active:scale-[0.98] transition-all text-white font-semibold text-sm py-3.5 rounded-xl mt-1 shadow-lg shadow-emerald-600/25">
                  Submit Inquiry →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section - 4 */}
        <Slider />
      </div>
    </SmoothScroll>
  );
}
