"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Droplets } from "lucide-react";
import Link from "next/link";
import { GiRibbonMedal } from "react-icons/gi";
import { FaRegHandshake } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import SmoothScroll from "../Component/SmothScrolling";

interface CountUpProps {
  value: number;
  suffix?: string; // The '?' means it is optional
}

const CountUp: React.FC<CountUpProps> = ({ value, suffix = "" }) => {
  const count = useMotionValue(0);

  // Explicitly tell useTransform to return a string
  const rounded = useTransform(
    count,
    (latest: number): string => Math.round(latest).toLocaleString() + suffix,
  );

  useEffect(() => {
    const animation = animate(count, value, { duration: 2, ease: "easeOut" });
    return animation.stop;
  }, [count, value]); // Added 'count' to dependency array for best practice

  return <motion.span>{rounded}</motion.span>;
};

const HeroSection = () => {
  return (
    <>
      <SmoothScroll>
        {/* Section - 1 */}
        <section className="relative overflow-hidden font-sans">
          {/* Right */}
          <div className="relative bg-emerald-600 min-h-[90vh] flex items-center overflow-hidden">
            {/* Background watermark text */}
            <span
              className="absolute -left-6 top-1/2 -translate-y-1/2 text-[22rem] font-black text-white/[0.05] leading-none pointer-events-none select-none whitespace-nowrap"
              aria-hidden="true"
            >
              GGPT
            </span>

            {/* Top-right dot pattern */}
            <div
              className="absolute top-0 right-0 w-64 h-64 opacity-20 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle, white 1.5px, transparent 1.5px)`,
                backgroundSize: "18px 18px",
              }}
            />

            {/* Bottom-left dot pattern */}
            <div
              className="absolute bottom-0 left-0 w-48 h-48 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle, white 1.5px, transparent 1.5px)`,
                backgroundSize: "14px 14px",
              }}
            />

            {/* Diagonal bottom slice */}
            <div
              className="absolute bottom-0 left-0 right-0 h-24 bg-white pointer-events-none"
              style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
            />

            <div className="relative z-10 container mx-auto px-6 lg:px-16 py-28 w-full grid lg:grid-cols-2 gap-16 items-center">
              {/* LEFT — headline */}
              <div className="space-y-7 text-center lg:text-left">
                {/* pill */}
                <span className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white text-[11px] tracking-[0.16em] uppercase px-4 py-2 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  NGO-DARPAN & CSR-1 Registered · Gujarat
                </span>

                {/* headline */}
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.0] text-white tracking-tight">
                  Reviving
                  <span className="text-white/70 italic font-black">
                    {" "}
                    Rivers.
                  </span>
                  <br />
                  Recharging
                  <br />
                  <span className="text-white/70 italic font-black">
                    Groundwater.
                  </span>
                </h1>

                {/* desc */}
                <p className="text-white/65 text-base font-light leading-relaxed max-w-md">
                  Girganga Parivar Trust (GGPT) is a Gujarat-based organization
                  working at scale to address water scarcity through
                  community-led conservation structures across drought-prone
                  regions.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3 pt-2 text-center lg:text-left justify-center lg:justify-start">
                  <Link href="/donate">
                    <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold hover:bg-white/90 transition-all shadow-xl shadow-black/10 active:scale-95 flex items-center gap-2">
                      Support Us →
                    </button>
                  </Link>
  
                </div>
              </div>

              {/* RIGHT — video card */}
              <div className="relative">
                {/* offset frame */}
                <div className="absolute -top-3 -right-3 w-full h-full rounded-3xl border-2 border-white/20 pointer-events-none" />

                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/30 aspect-[4/3] bg-gray-900">
                  <iframe
                    className="absolute inset-0 w-full h-full object-cover scale-150 pointer-events-none"
                    src="https://www.youtube.com/embed/ZJSRtSWG5DU?autoplay=1&mute=1&loop=1&playlist=ZJSRtSWG5DU&controls=0&showinfo=0&rel=0&modestbranding=1"
                    title="Girganga Parivar Trust Impact"
                    allow="autoplay; encrypted-media"
                  />

                  {/* gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* floating impact card */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="absolute bottom-5 left-5 right-5 md:right-auto bg-white px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-emerald-600/10"
                  >
                    <div className="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-emerald-600/30">
                      <Droplets className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest mb-0.5">
                        Impact Feature
                      </p>
                      <p className="text-sm font-bold text-gray-800">
                        1,057 Borewell Recharges
                      </p>
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>
          </div>

          {/* left */}
          <div className="relative bg-white py-16 px-6 lg:px-16">
            <div className="max-w-7xl mx-auto text-center lg:text-left">
              {/* eyebrow */}
              <p className="flex items-center justify-center gap-3 text-emerald-600 text-xs font-bold tracking-[0.18em] uppercase mb-10 pl-4">
                Impact at Scale
                <span className="w-12 h-px bg-emerald-600/30" />
              </p>

              {/* stats grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    label: "Water Structures",
                    val: 8354,
                    suf: "+",
                    desc: "Built & restored",
                  },
                  {
                    label: "Gram Panchayats",
                    val: 580,
                    suf: "+",
                    desc: "Villages covered",
                  },
                  {
                    label: "Check Dams",
                    val: 6189,
                    suf: "",
                    desc: "Across Gujarat",
                  },
                  {
                    label: "CSR Excavators",
                    val: 18,
                    suf: "",
                    desc: "Deployed on ground",
                  },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-white border-2 border-emerald-600/15 rounded-3xl px-7 py-7 hover:border-emerald-600 hover:shadow-xl hover:shadow-emerald-600/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    {/* number watermark */}
                    <span className="absolute top-3 right-4 text-6xl font-black text-emerald-600/[0.06] leading-none pointer-events-none select-none group-hover:text-emerald-600/10 transition-colors">
                      0{idx + 1}
                    </span>

                    <span className="text-4xl font-black text-emerald-600 leading-none block mb-2">
                      <CountUp value={stat.val} suffix={stat.suf} />
                    </span>
                    <p className="text-gray-800 font-bold text-sm mb-1">
                      {stat.label}
                    </p>
                    <p className="text-gray-400 text-xs font-light">
                      {stat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section - 2 */}
        <section className="container mx-auto bg-gray-50 flex items-center font-sans px-4">
          <div className="w-full mx-auto">
            {/* Only RIGHT: Mission & Vision */}
            <div className="flex flex-col gap-12">
              {/* Mission */}
              <div className="flex flex-col gap-4">
                <div className="inline-block">
                  <span className="bg-emerald-600 text-white text-lg sm:text-xl font-bold px-5 sm:px-6 py-2 rounded-full shadow-md">
                    Our Mission!
                  </span>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-emerald-600 rounded-full flex-shrink-0 self-stretch" />
                  <p className="text-gray-600 text-sm sm:text-lg leading-relaxed">
                    Our mission is to revolutionize water infrastructure across
                    Gujarat by strategically repairing, deepening, and
                    constructing 1,11,111 water conservation structures –
                    including check dams and bore recharge systems – throughout
                    Gujarat. This comprehensive initiative will maximize
                    rainwater harvesting to ensure sustainable water access for
                    agricultural lands, wildlife ecosystems, and local
                    communities. By combining grassroots participation with
                    environmentally conscious solutions, we’re restoring
                    watersheds, improving biodiversity, and creating lasting
                    water security for future generations.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="flex flex-col gap-4">
                <div className="inline-block">
                  <span className="bg-emerald-600 text-white text-lg sm:text-xl font-bold px-5 sm:px-6 py-2 rounded-full shadow-md">
                    Our Vision!
                  </span>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-emerald-600 rounded-full flex-shrink-0 self-stretch" />
                  <p className="text-gray-600 text-sm sm:text-lg leading-relaxed">
                    Our vision is to prevent even a single drop of rainwater
                    from flowing into the sea by promoting responsible rainwater
                    conservation and groundwater recharge. We aim to transform
                    arid regions into fertile, water-abundant landscapes,
                    ensuring water security and ecological balance for future
                    generations. This vision supports the well-being of people
                    and the development of animals, birds, and natural
                    ecosystems. Our efforts directly contribute to the United
                    Nations Sustainable Development Goals, particularly SDG 6
                    (Clean Water and Sanitation) and SDG 15 (Life on Land).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section - 3 */}
        <section className="container mx-auto px-4 py-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-black text-white text-xl sm:text-2xl font-semibold px-6 py-3 rounded-lg shadow-md shadow-emerald-200">
              Explore Our Impact
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-2">
                <GiRibbonMedal className="text-emerald-600 text-5xl" />
              </div>
              <p className="text-gray-700 font-medium text-center">
                Partnership with Ministry of Water, Govt. of India
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-2">
                <FaRegHandshake className="text-emerald-600 text-5xl" />
              </div>
              <p className="text-gray-700 font-medium text-center">
                Global CSR & ESG Awards 2025 Winner
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-2">
                <HiUsers className="text-emerald-600 text-5xl" />
              </div>
              <p className="text-gray-700 font-medium text-center">
                Community-Driven Approach
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-10 mt-6 justify-center">
            <a
              href="/CSR"
              className="bg-emerald-600 text-white font-semibold px-10 py-4 rounded-lg shadow-md text-xl transition-transform transform hover:-translate-y-1 inline-block text-center"
            >
              Partner With Us (CSR)
            </a>

            <a
              href="/support-a-structure"
              className="bg-emerald-600 text-white font-semibold px-10 py-4 rounded-lg shadow-md text-xl transition-transform transform hover:-translate-y-1 inline-block text-center"
            >
              Support A Structure
            </a>
          </div>
        </section>
      </SmoothScroll>
    </>
  );
};

export default HeroSection;
