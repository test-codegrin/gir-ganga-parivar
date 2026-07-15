"use client";

import SmoothScroll from "../../Component/SmothScrolling";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  {
    img: "/image/press/news1.jpg",
  },
  {
    img: "/image/press/news2.jpg",
  },
  {
    img: "/image/press/news3.jpg",
  },
  {
    img: "/image/press/news4.jpg",
  },
  {
    img: "/image/press/news5.jpg",
  },
  {
    img: "/image/press/news6.jpg",
  },
  {
    img: "/image/press/news7.jpg",
  },
  {
    img: "/image/press/news8.jpg",
  },
  {
    img: "/image/press/news9.jpg",
  },
  {
    img: "/image/press/news10.jpg",
  },
  {
    img: "/image/press/news11.jpg",
  },
  {
    img: "/image/press/news12.jpg",
  },
  {
    img: "/image/press/news13.jpg",
  },
  {
    img: "/image/press/news14.jpg",
  },
  {
    img: "/image/press/news15.jpg",
  },
  {
    img: "/image/press/news16.jpg",
  },
  {
    img: "/image/press/news17.png",
  },
  {
    img: "/image/press/news18.png",
  },
  {
    img: "/image/press/news19.jpeg",
  },
];

export default function Products() {
  return (
    <>
      <SmoothScroll>
        {/* Section - 1 */}

        <section className="container text-center relative px-6">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-(--color-secondary) text-[10px] font-black tracking-[0.38em] uppercase mb-3 flex items-center justify-center gap-3"
          >
            <span className="w-8 h-px bg-(--color-secondary)" />
            Press Coverage
            <span className="w-8 h-px bg-(--color-secondary)" />
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900"
          >
            Press{" "}
            <span className="text-(--color-primary)">Photo Galleries</span>
          </motion.h1>
        </section>

        {/* Section - 2 */}
        <section className="container">
          <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="relative w-full group"
              >
                {/* Image */}
                <Image src={item.img}
                  alt={item.img || "Project image"}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover border p-3 shadow-lg rounded-xl" quality={75} />
              </div>
            ))}
          </section>
        </section>
      </SmoothScroll>
    </>
  );
}
