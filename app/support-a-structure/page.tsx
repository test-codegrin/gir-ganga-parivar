import SmoothScroll from "../../Component/SmothScrolling";
import Image from "next/image";

export default function SupportAStructure() {
  return (
    <>
      <SmoothScroll>
        {/* Section - 1 */}
        <section className="container mx-auto">
          {/* Content */}
          <div className="text-center ">
            <p className="relative bg-emerald-50 text-emerald-800 text-sm font-medium max-w-sm px-4 py-1 rounded-full text-center lg:text-left justify-self-center ">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-600 rounded-full"></span>
              <span className="pl-4">
                Water for Farms, Families, and the Future
              </span>
            </p>
            <h1 className="text-4xl lg:text-5xl text-emerald-600 leading-normal font-bold">
              “One Structure. Multiple Generations Benefit”
            </h1>
            <div className="justify-self-center w-200 max-w-full ">
              <p className="text-xl font-semibold  text-center mx-auto">
                Water scarcity affects farmers, livestock, women, and children
                every day. By supporting a single water conservation structure,
                you help secure drinking water, agriculture, and livelihoods for
                an entire village.
              </p>
            </div>
          </div>
        </section>

        {/* Section - 2 */}
        <section className="container mx-auto px-4 py-16">
          {/* Heading Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-emerald-600 font-bold">
              What is a “Structure”?
            </h1>

            <p className="mt-4 text-lg md:text-xl font-medium text-slate-700">
              A water conservation structure is a scientifically designed
              intervention that captures rainwater and recharges groundwater.
            </p>
          </div>

          {/* Main Content */}
          <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Types */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-emerald-600 font-bold text-center lg:text-left">
                Types of Structures Supported by GGPT
              </h2>

              <div className="mt-8 space-y-6">
                {/* Item 1 */}
                <div className="flex items-center gap-5 bg-emerald-50 p-5 rounded-xl shadow-sm">
                  <Image
                    src="/icons/crane-machine (1).png"
                    alt="Check Dam Rejuvenation"
                    width={60}
                    height={60}
                    className="w-16 h-16 object-contain"
                  />
                  <p className="text-lg md:text-xl font-semibold text-emerald-700">
                    Check Dam Deepening & Rejuvenation
                  </p>
                </div>

                {/* Item 2 */}
                <div className="flex items-center gap-5 bg-emerald-50 p-5 rounded-xl shadow-sm">
                  <Image
                    src="/icons/tanker (2).png"
                    alt="New Check Dam Construction"
                    width={60}
                    height={60}
                    className="w-16 h-16 object-contain"
                  />
                  <p className="text-lg md:text-xl font-semibold text-emerald-700">
                    New Check Dam Construction
                  </p>
                </div>

                {/* Item 3 */}
                <div className="flex items-center gap-5 bg-emerald-50 p-5 rounded-xl shadow-sm">
                  <Image
                    src="/icons/rotate.png"
                    alt="Borewell Recharge Structures"
                    width={60}
                    height={60}
                    className="w-16 h-16 object-contain"
                  />
                  <p className="text-lg md:text-xl font-semibold text-emerald-700">
                    Borewell Recharge Structures
                  </p>
                </div>

                {/* Item 4 */}
                <div className="flex items-center gap-5 bg-emerald-50 p-5 rounded-xl shadow-sm">
                  <Image
                    src="/icons/spinner-of-dots (1).png"
                    alt="Percolation Pits"
                    width={60}
                    height={60}
                    className="w-16 h-16 object-contain"
                  />
                  <p className="text-lg md:text-xl font-semibold text-emerald-700">
                    Percolation Pits
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Images */}
            <div className="space-y-6">
              <Image
                src="/image/Suport-image.png"
                alt="Types of Structures"
                width={500}
                height={400}
                className="w-full rounded-2xl shadow-lg"
              />
            
            </div>
          </div>
        </section>
        {/* Section - 3 */}
      </SmoothScroll>
    </>
  );
}
