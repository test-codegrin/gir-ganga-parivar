"use client";
import { useState } from "react";
import SmoothScroll from "../../Component/SmothScrolling";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const PRESET_AMOUNTS = [100, 200, 500];

const donateData = [
  {
    id: "donation-for-biggest-checkdam",
    title: "Biggest Checkdam",
    amount: "₹1,00,00,000",
    tag: "FLAGSHIP",
    desc: "Largest-scale dam storing significant rainwater, recharging groundwater, and providing long-term water security for entire villages.",
    accent: "#0a3d2e",
    drop: "💧💧💧💧",
  },
  {
    id: "donation-for-large-checkdam",
    title: "Large Checkdam",
    amount: "₹50,00,000",
    tag: "HIGH IMPACT",
    desc: "Collect rainwater, improve irrigation for farmers, and increase groundwater levels in drought-prone areas.",
    accent: "#1a5c42",
    drop: "💧💧💧",
  },
  {
    id: "donation-for-medium-checkdam",
    title: "Medium Checkdam",
    amount: "₹20,00,000",
    tag: "COMMUNITY",
    desc: "Store seasonal water and improve groundwater recharge to support local farming communities nearby.",
    accent: "#2d7a5a",
    drop: "💧💧",
  },
  {
    id: "donation-for-small-checkdam",
    title: "Small Checkdam",
    amount: "₹5,00,000",
    tag: "START HERE",
    desc: "Capture rainwater, prevent soil erosion, and support nearby farmers and wildlife with essential water.",
    accent: "#3d9970",
    drop: "💧",
  },
];
const maintaindonateData = [
  {
    id: "donation-for-maintain-biggest-checkdam",
    title: "Maintain Biggest Checkdam",
    amount: "₹1,00,00,000",
    tag: "FLAGSHIP",
    desc: "Help maintain, renovate, and deepen the biggest checkdam to store more water and support nearby villages.",
  },
  {
    id: "donation-for-maintain-large-checkdam",
    title: "Maintain Large Checkdam",
    amount: "₹50,00,000",
    tag: "HIGH IMPACT",
    desc: "Support maintenance, renovation, and deepening of a large checkdam to improve water conservation.",
  },
  {
    id: "donation-for-maintain-medium-checkdam",
    title: "Maintain Medium Checkdam",
    amount: "₹20,00,000",
    tag: "COMMUNITY",
    desc: "Help repair and maintain a medium-sized checkdam for better groundwater recharge and farming support.",
  },
  {
    id: "donation-for-maintain-small-checkdam",
    title: "Maintain Small Checkdam",
    amount: "₹5,00,000",
    tag: "START HERE",
    desc: "Restore a small checkdam to ensure water availability for farming and local community use.",
  },
];

const donationequipment = [
  {
    id: "donation-for-excavator",
    img: "/image/suport/Excavator.webp",
    title: "Excavator",
    amount: "₹98,50,000 ",
    tag: "FLAGSHIP",
    desc: "The most powerful machine for large-scale construction, dam building, and deep excavation projects.",
  },
  {
    id: "donation-for-jcb",
    img: "/image/suport/JCB.jpg",
    title: "Backhoe Loader",
    amount: "₹40,00,000",
    tag: "FLAGSHIP",
    desc: "The most powerful machine for large-scale construction, dam building, and deep excavation projects.",
  },
   {
    id: "donation-for-ace-pickup-tempo",
    img: "/image/suport/Ace-Small-Truck.jpg",
    title: "Ace Pickup Tempo",
    amount: "₹7,50,000",
    tag: "LOGISTICS",
    desc: "A utility vehicle to transport tools, materials, and construction supplies across project sites efficiently.",
  },
  {
    id: "donation-for-loader",
    img: "/image/suport/Loader.jpg",
    title: "Loader Machine",
    amount: "₹15,00,000",
    tag: "HEAVY DUTY",
    desc: "Essential for construction, digging, and earth-moving work required in checkdam and infrastructure projects.",
  },
   {
    id: "donation-for-tractor",
    img: "/image/suport/Tractor.jpg",
    title: "Tractor",
    amount: "₹7,50,000",
    tag: "AGRICULTURAL",
    desc: "Support agricultural and rural development by funding a tractor for field work and earthmoving tasks.",
  }, 
  {
    id: "donation-for-Water-Tanker",
    img: "/image/suport/Water-Tanker.jpg",
    title: "Water Tanker",
    amount: "₹2,50,000",
    tag: "ESSENTIAL",
    desc: "Purchase and maintain a water tanker to deliver clean water to drought-affected villages and construction sites.",
  },
  
];

const bankDetails = [
  { label: "Bank Name", value: "BANK OF BARODA" },
  { label: "Account Name", value: "GIRGANGA PARIVAR TRUST" },
  { label: "Account Number", value: "15010200001185" },
  { label: "RTGS/NEFT IFSC CODE", value: "BARB0KALAWA" },
  { label: "SWIFT CODE", value: "BARBINBBRAJ" },
];

export default function Donate() {
  const [amount, setAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);

  const handlePreset = (val: number) => {
    setAmount(val);
    setIsCustom(false);
    setCustomAmount("");
  };

  const handleCustom = () => {
    setIsCustom(true);
    setAmount(0);
  };

  const router = useRouter();

  const handleDonate = () => {
    const finalAmount = isCustom ? customAmount : amount;
    sessionStorage.setItem("donationAmount", String(finalAmount));
    router.push("/donate/general-donation");
  };

  return (
    <SmoothScroll>
      {/* Section - 1 */}
      <section className="container min-h-scree flex items-center justify-center px-4 py-20 relative overflow-hidden">
        <div className="relative z-10 w-full max-w-5xl">
          {/* Section Label */}
          <div className=" items-center gap-3 mb-4">
            <p
              className="text-[var(--color-secondary)]
 text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex text-center items-center justify-center gap-3"
            >
              <span
                className="w-8 h-px bg-[var(--color-secondary)]
"
              />
              Water Conservation Fund
              <span
                className="w-8 h-px bg-[var(--color-secondary)]
"
              />
            </p>
            <h1 className="text-black text-4xl sm:text-5xl md:text-6xl text-center font-bold leading-tight">
              General{" "}
              <span className="text-[var(--color-primary)]"> Donation</span>
            </h1>
            <div className="w-16 h-1 bg-[var(--color-primary)] mx-auto mt-6 mb-8" />
          </div>

          {/* Main Card */}
          <div className="border border-[var(--color-primary)] rounded-3xl p-5 md:p-12 grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT: Amount Display */}
            <div>
              {/* Live amount display */}
              <div className="mb-8">
                <p className="text-[var(--color-primary)] text-xs tracking-widest uppercase mb-2">
                  Your Contribution
                </p>
                <div className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)] text-3xl font-black mt-1">
                    ₹
                  </span>
                  <span className="text-5xl font-black text-black tracking-tight">
                    {isCustom
                      ? customAmount || <span className="text-zinc-700"></span>
                      : amount.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="mt-3 h-px w-full bg-[var(--color-primary)]" />
              </div>

              {/* Preset Buttons */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {PRESET_AMOUNTS.map((v) => (
                  <button
                    key={v}
                    onClick={() => handlePreset(v)}
                    className={`py-3 rounded-xl text-sm font-bold border transition-all duration-200 ${
                      !isCustom && amount === v
                        ? "bg-[var(--color-primary)] border-[var(--color-tertiary)] text-[var(--color-secondary)]  shadow-lg"
                        : "bg-[var(--color-tertiary)] border-[var(--color-primary)] text-[var(--color-primary)]"
                    }`}
                  >
                    ₹{v.toLocaleString("en-IN")}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div
                onClick={handleCustom}
                className={`w-full rounded-xl border-2 border-dashed px-4 py-3 flex items-center gap-2 cursor-text transition-all duration-200 mb-8 ${
                  isCustom
                    ? "border-[var(--color-primary)]"
                    : "border-[var(--color-primary)] bg-[var(--color-tertiary)]"
                }`}
              >
                <span
                  className={`font-bold text-lg ${isCustom ? "text-[var(--color-primary)]" : "text-[var(--color-primary)]"}`}
                >
                  ₹
                </span>
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  onFocus={handleCustom}
                  className="bg-transparent outline-none text-[var(--color-primary)] text-sm font-semibold w-full placeholder-zinc-400"
                />
              </div>

              {/* Donate Button */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-6 justify-center"
              >
                <button
                  type="submit"
                  onClick={handleDonate}
                  className="btn-primary w-full group relative inline-flex items-center justify-center gap-2
                  font-semibold text-xs sm:text-base px-10 py-4 cursor-pointer
                 bg-[url('/image/button/button-bg.jpeg')] text-white bg-center font-semibold
                  overflow-hidden "
                >
                  <span className="relative z-10 flex gap-2 items-center">
                    Donate ₹
                    {isCustom
                      ? customAmount || "0"
                      : amount.toLocaleString("en-IN")}{" "}
                    Now
                  </span>

                  <span className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></span>
                </button>
              </motion.div>
            </div>

            {/* RIGHT: Info Panel */}
            <div className="flex flex-col gap-6">
              {/* Mission Statement */}
              <div className="border border-zinc-800 rounded-2xl bg-[var(--color-tertiary)] p-6 relative overflow-hidden">
                <p className="text-4xl mb-3">💧</p>
                <p className="text-[var(--color-secondary)] font-bold text-lg leading-snug mb-2">
                  Raise Funds For Clean & Healthy Water
                </p>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Support our water conservation mission with a donation of your
                  choice. Every rupee directly funds clean water access across
                  drought-prone regions.
                </p>
              </div>

              {/* Trust badge */}
              <div className="flex items-center gap-3  border border-zinc-800 rounded-xl px-4 py-3">
                <div className="w-8 h-8 rounded-full bg-[var(--color-tertiary)] flex items-center justify-center flex-shrink-0">
                  <span className="text-[var(--color-primary)] text-sm">✓</span>
                </div>
                <p className="text-zinc-500 text-xs leading-snug">
                  Tax deductible under{" "}
                  <span className="text-[var(--color-primary)] font-bold">
                    Section 80G
                  </span>{" "}
                  · 100% funds reach the field
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - 2 */}
      <section className="container min-h-screen relative overflow-hidden">
        <div className="  relative ">
          {/* Header */}
          <div className="mb-16 text-center">
            <p
              className="text-[var(--color-secondary)]
 text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3"
            >
              <span
                className="w-8 h-px bg-[var(--color-secondary)]
"
              />
              Water Conservation Initiative
              <span
                className="w-8 h-px bg-[var(--color-secondary)]
"
              />
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black leading-none tracking-tight mb-6">
              Build A {""}
              <span className="text-[var(--color-primary)]">Checkdam</span>
            </h1>
            <div className="w-16 h-1 bg-[var(--color-primary)] mx-auto mb-6" />
            <p className="text-stone-400 text-lg max-w-xl mx-auto leading-relaxed">
              Every drop saved is a life secured. Choose your level of impact
              and help us restore water to drought-prone communities.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-self-center">
            {donateData.map((item, index) => (
              <div
                key={item.id}
                className="group relative border border-[var(--color-primary)] text-center md:text-start  shadow-md rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between gap-6"
              >
                {/* Title + Amount */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xl sm:text-3xl md:text-4xl font-black text-black">
                    {item.amount}
                  </p>
                </div>

                {/* Description */}
                <p className="text-stone-400 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-wrap gap-6 justify-center md:justify-start"
                >
                  {/* <Link href={`/donate/${item.id}`}>
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
                  </Link> */}

                  <Link
                    href={`/donate/${item.id}`}
                    className="group relative overflow-hidden flex items-center justify-center gap-2 
  text-white font-semibold text-sm w-[250px] md:w-[250px] lg:text-base px-5 py-3 rounded-lg
  bg-[url('/image/button/button-bg.jpeg')] bg-cover bg-center"
                  >
                    <span className="relative z-10"> Donate </span>

                    <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                      →
                    </span>

                    <span className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></span>
                  </Link>
                </motion.div>

                {/* Decorative corner arc */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full border border-[var(--color-secondary)] opacity-50 group-hover:opacity-40 transition-opacity" />
                <div className="absolute -bottom-16 -right-16 w-44 h-44 rounded-full border border-[var(--color-secondary)] group-hover:opacity-20 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section - 3 */}
      <section className="container py-16">
        <div className="bg-white border border-[var(--color-primary)] rounded-3xl p-6 sm:p-10">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] text-[10px] font-bold tracking-[0.35em] uppercase flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-px bg-[var(--color-secondary)]" />
              Water Conservation Initiative
              <span className="w-8 h-px bg-[var(--color-secondary)]" />
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight capitalize">
              Donation to <br />{" "}
              <span className="text-[var(--color-primary)] ">
                Maintain checkdam
              </span>
              <br />
              <span className="text-[var(--color-secondary)]"></span>
            </h1>
            <div className="w-16 h-1 bg-[var(--color-primary)] mx-auto mt-5" />
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {maintaindonateData.map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-white border border-[var(--color-tertiary)] text-center lg:text-start rounded-tr-4xl rounded-bl-4xl overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-xl hover:shadow-[#009dc4]/10 hover:border-[#009dc4] transition-all duration-300"
              >
                {/* Top accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-[var(--color-primary)] via-[#f1cf69] to-[var(--color-primary)]" />

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow gap-4">
                  {/* Title */}
                  <h3 className="text-lg font-black text-gray-900 leading-snug group-hover:text-[var(--color-primary)] transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Divider */}
                  <div className="h-px bg-[var(--color-tertiary)]" />

                  {/* Description */}
                  <p className="text-gray-500 text-xs leading-relaxed flex-grow">
                    {item.desc}
                  </p>

                  {/* Amount */}
                  <div className="bg-[var(--color-tertiary)] rounded-xl px-4 py-3 text-center">
                    <p className="text-[9px] text-[var(--color-primary)] font-bold tracking-widest uppercase mb-1">
                      Donation Amount
                    </p>
                    <p className="text-[var(--color-primary)] font-black text-xl">
                      {item.amount}
                    </p>
                  </div>

                  {/* CTA */}
                  {/* <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full"
                  >
                    <Link href={`/donate/${item.id}`} className="w-full block">
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
                  </motion.div> */}

                  <div className="w-full flex justify-center items-center">
                    <Link
                      href={`/donate/${item.id}`}
                      className="group relative overflow-hidden inline-flex items-center justify-center gap-2 
    text-white font-semibold text-sm w-[250px] lg:text-base px-5 py-3 rounded-lg
    bg-[url('/image/button/button-bg.jpeg')] bg-cover bg-center"
                    >
                      <span className="relative z-10">Donate</span>

                      <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                        →
                      </span>

                      <span className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Trust Bar */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 border-t border-[#E6F7FB] pt-8">
            {[
              { icon: "✓", text: "Section 80G Tax Deductible" },
              { icon: "💧", text: "100% Funds to Field" },
              { icon: "🏛️", text: "Government Registered NGO" },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 text-gray-500 text-xs"
              >
                <span className="w-6 h-6 rounded-full bg-[#E6F7FB] flex items-center justify-center text-[#009dc4] font-bold text-sm">
                  {badge.icon}
                </span>
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section - 4 */}
      <section className="container">
        <div className=" space-y-10">
          {/* Header */}
          <div className="text-center">
            <p className="text-[var(--color-secondary)] text-[10px] font-bold tracking-[0.35em] uppercase flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-px bg-[var(--color-secondary)]" />
              Field Equipment Fund
              <span className="w-8 h-px bg-[var(--color-secondary)]" />
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
              Donation For{" "}
              <span className="text-[var(--color-primary)]">Equipment</span>
            </h1>
            <div className="w-16 h-1 bg-[var(--color-primary)] mx-auto mt-4" />
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {donationequipment.map((item) => (
              <div
                key={item.id}
                className="group bg-white border border-[var(--color-primary)] text-center   rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-xl hover:shadow-[#009dc4]/10 hover:border-[#009dc4] transition-all duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <Image src={item.img}
                    alt={item.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Amount badge on image */}
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 text-center">
                    <p className="text-[#009dc4] font-black text-sm leading-none">
                      {item.amount}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-grow gap-3">
                  <h3 className="text-base font-black text-gray-900 group-hover:text-[var(--color-primary)] transition-colors duration-200 leading-snug">
                    {item.title}
                  </h3>

                  <div className="h-px bg-[#E6F7FB]" />

                  <p className="text-gray-400 text-xs leading-relaxed flex-grow">
                    {item.desc}
                  </p>

                  {/* <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full"
                  >
                    <Link href={`/donate/${item.id}`} className="w-full block">
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
                  </motion.div> */}

                  <div className="w-full flex justify-center items-center">
                    <Link
                      href={`/donate/${item.id}`}
                      className="group relative overflow-hidden inline-flex items-center justify-center gap-2 
    text-white font-semibold text-sm w-[250px] lg:text-base px-5 py-3 rounded-lg
    bg-[url('/image/button/button-bg.jpeg')] bg-cover bg-center"
                    >
                      <span className="relative z-10">Donate</span>

                      <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                        →
                      </span>

                      <span className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section - 5 */}
      <section className="container overflow-hidden bg-white">
        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <p
                className="text-[var(--color-secondary)]
 text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3"
              >
                <span
                  className="w-8 h-px bg-[var(--color-secondary)]
"
                />
                Secure Transfer
                <span
                  className="w-8 h-px bg-[var(--color-secondary)]
"
                />
              </p>
            </div>

            <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-center">
              Bank{" "}
              <span className="text-[var(--color-primary)]">Information</span>
            </h1>
          </div>
          <div></div>

          {/* Bank Details Card */}
          <div className="relative">
            {/* Card shadow layer */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-primary" />

            <div className="relative bg-white rounded-3xl border border-[var(--color-primary)] overflow-hidden shadow-sm">
              {/* Top accent bar */}
              <div className="w-full bg-gradient-to-r from-primary via-primary to-primary" />

              <div className=" md:p-10 space-y-0 divide-y divide-gray-100">
                {bankDetails.map((item, index) => (
                  <div
                    key={index}
                    className="group flex flex-col sm:flex-row sm:items-center justify-between py-5 gap-1 hover:bg-primary-200  md:-mx-10 px-8 md:px-10 transition-colors duration-200"
                  >
                    <span
                      className="text-sm text-gray-600 font-medium font-semibold tracking-wide uppercase"
                      style={{
                        fontFamily: "'Georgia', serif",
                        letterSpacing: "0.07em",
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-slate-800 font-bold text-lg group-hover:text-primary transition-colors duration-200 sm:text-right"
                      style={{ fontFamily: "'Courier New', monospace" }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom section */}
              <div className="px-8 md:px-10 pb-8">
                <div className="flex items-center justify-center gap-3 p-4 rounded-2xl font-semibold text-[var(--color-primary)] bg-[var(--color-tertiary)] border border-[var(--color-primary)]">
                  Contact us to get a receipt after payment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SmoothScroll>
  );
}
