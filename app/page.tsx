import Image from "next/image";
import Navbar from "./Component/Navbar";
import CountUp from "./Component/CountUp";

export default function Hero() {
  const stats = [
    { value: 8354, label: "Water Conservation Structures" },
    { value: 580, label: "Gram Panchayats Covered" },
    { value: 18, label: "CSR Supported Excavators" },
  ];

  return (
    <>
      {/* Section - 1 */}
      <section className="relative min-h-screen overflow-hidden font-sans">
        {/* Background */}
        <Image
          src="/image/Home-Hero.jfif"
          alt="Water Conservation"
          fill
          priority
          className="object-cover"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/30" />
        <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Content Wrapper */}
        <div className="relative z-10 min-h-screen flex flex-col px-4 sm:px-8 lg:px-20">
          {/* HERO TEXT */}
          <div className="flex flex-1 items-center justify-center pt-28 sm:pt-32 lg:pt-0">
            <div className="max-w-md sm:max-w-xl lg:max-w-4xl text-center">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white drop-shadow-lg">
                Reviving Rivers...
                <br />
                Recharging Groundwater...
                <br />
                Securing Futures...
              </h1>

              <p className="mt-4 sm:mt-5 text-white/75 text-sm sm:text-lg lg:text-2xl font-semibold leading-relaxed">
                Girganga Parivar Trust (GGPT) is a Gujarat-based, NGO-DARPAN and
                CSR-1 registered organization working at scale to address water
                scarcity through community-led water conservation structures
                across drought-prone regions.
              </p>

              {/* CTA */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="/csr"
                  className="
                  border border-white hover:border-white-400
                  text-white hover:text-white
                  bg-transparent hover:bg-cyan-500/20
                  px-7 py-3 rounded-lg
                  font-semibold text-sm
                  backdrop-blur-sm
                  transition-all duration-300
                "
                >
                  Support a Structure →
                </a>
              </div>
            </div>
          </div>

          {/* STATS (clearly separated on mobile) */}
          {/* STATS */}
          <div className="pb-10 sm:pb-12 ">
            <div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-6 justify-center lg:justify-between text-center max-w-6xl mx-auto ">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="border border-white/20 mt-10 sm:mt-12 p-5 rounded-2xl flex-1 backdrop-blur-sm"
                >
                  <div className="text-2xl sm:text-4xl lg:text-6xl text-center font-extrabold text-white">
                    <CountUp end={stat.value} /> +
                  </div>
                  <div className="mt-1 text-xs sm:text-base text-center text-white/60">
                    {stat.label}
                  </div>
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
                <span className="bg-gray-500 text-white text-lg sm:text-xl font-bold px-5 sm:px-6 py-2 rounded-full shadow-md">
                  Our Mission!
                </span>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-gray-400 rounded-full flex-shrink-0 self-stretch" />
                <p className="text-gray-600 text-sm sm:text-lg leading-relaxed">
                  Our mission is to revolutionize water infrastructure across
                  Gujarat by strategically repairing, deepening, and
                  constructing 1,11,111 water conservation structures –
                  including check dams and bore recharge systems – throughout
                  Gujarat. This comprehensive initiative will maximize rainwater
                  harvesting to ensure sustainable water access for agricultural
                  lands, wildlife ecosystems, and local communities. By
                  combining grassroots participation with environmentally
                  conscious solutions, we’re restoring watersheds, improving
                  biodiversity, and creating lasting water security for future
                  generations.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="flex flex-col gap-4">
              <div className="inline-block">
                <span className="bg-gray-500 text-white text-lg sm:text-xl font-bold px-5 sm:px-6 py-2 rounded-full shadow-md">
                  Our Vision!
                </span>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-gray-400 rounded-full flex-shrink-0 self-stretch" />
                <p className="text-gray-600 text-sm sm:text-lg leading-relaxed">
                  Our vision is to prevent even a single drop of rainwater from
                  flowing into the sea by promoting responsible rainwater
                  conservation and groundwater recharge. We aim to transform
                  arid regions into fertile, water-abundant landscapes, ensuring
                  water security and ecological balance for future generations.
                  This vision supports the well-being of people and the
                  development of animals, birds, and natural ecosystems. Our
                  efforts directly contribute to the United Nations Sustainable
                  Development Goals, particularly SDG 6 (Clean Water and
                  Sanitation) and SDG 15 (Life on Land).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
