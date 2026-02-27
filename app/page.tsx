"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Droplets } from "lucide-react";
import Link from "next/link";
import { GiRibbonMedal } from "react-icons/gi";
import { FaRegHandshake } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import SmoothScroll from "./Component/SmothScrolling";

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
        <section className="relative bg-white flex items-center overflow-hidden font-sans px-4 lg:py-7">
          {/* Container is now centered with mx-auto and has responsive padding */}
          <div className="container section-padding-header mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 order-1 ">
              <p className="relative bg-emerald-50 text-emerald-800 text-sm font-medium max-w-sm px-4 py-1 rounded-full text-center lg:text-left justify-self-center lg:justify-self-start">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-600 rounded-full"></span>
                <span className="pl-4">
                  NGO-DARPAN & CSR-1 Registered · Gujarat, India
                </span>
              </p>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-[1.1] text-center lg:text-left">
                Reviving Rivers. <br />
                <span className="text-emerald-600">
                  Recharging Groundwater.
                </span>{" "}
                <br />
                Securing Futures.
              </h1>

              <p className="text-lg text-slate-600 max-w-lg leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
                Girganga Parivar Trust (GGPT) is a Gujarat-based organization
                working at scale to address water scarcity through community-led
                conservation structures across drought-prone regions.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link href="/donate">
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl shadow-emerald-100 active:scale-95">
                    Support Us →
                  </button>
                </Link>
              </div>

              {/* Infographics Bar */}
              <div className="pt-8 flex flex-wrap gap-8 border-t border-gray-100 justify-center lg:justify-start">
                {[
                  { label: "Water Structures", val: 8354, suf: "+" },
                  { label: "Gram Panchayats", val: 580, suf: "+" },
                  { label: "Check Dams", val: 6189, suf: "" },
                  { label: "CSR Excavators", val: 18, suf: "" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center lg:items-start"
                  >
                    <span className="text-3xl font-bold text-slate-800">
                      <CountUp value={stat.val} suffix={stat.suf} />
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Video Section */}
            <div className="relative order-2">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] bg-slate-900 group">
                {/* YouTube Background Video */}
                <iframe
                  className="absolute inset-0 w-full h-full object-cover scale-150 pointer-events-none"
                  src="https://www.youtube.com/embed/ZJSRtSWG5DU?autoplay=1&mute=1&loop=1&playlist=ZJSRtSWG5DU&controls=0&showinfo=0&rel=0&modestbranding=1"
                  title="Girganga Parivar Trust Impact"
                  allow="autoplay; encrypted-media"
                ></iframe>

                {/* Dark Overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent " />

                <div className="lg:block hidden">
                  {/* Floating Stats Card */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className=" absolute bottom-6 right-6 left-6 md:left-auto bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/50"
                  >
                    <div className="bg-emerald-600 p-3 rounded-xl shadow-lg shadow-emerald-200">
                      <Droplets className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] text-emerald-700 font-bold uppercase tracking-tight">
                        Impact Feature
                      </p>
                      <p className="text-sm font-bold text-slate-800">
                        1,057 Borewell Recharges
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Decorative background element */}
              <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-70" />
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
              href="/pages/CSR"
              className="bg-emerald-600 text-white font-semibold px-10 py-4 rounded-lg shadow-md text-xl transition-transform transform hover:-translate-y-1 inline-block text-center"
            >
              Partner With Us (CSR)
            </a>

            <a
              href="/pages/support-a-structure"
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
