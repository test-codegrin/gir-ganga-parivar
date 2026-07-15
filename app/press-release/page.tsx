"use client";

import SmoothScroll from "../../Component/SmothScrolling";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const galleryItems = [
  {img: "/image/press/news1.jpg",},
  {img: "/image/press/news2.jpg",},
  {img: "/image/press/news3.jpg",},
  {img: "/image/press/news4.jpg",},
  {img: "/image/press/news5.jpg",},
  {img: "/image/press/news6.jpg",},
  {img: "/image/press/news7.jpg",},
  {img: "/image/press/news8.jpg",},
  {img: "/image/press/news9.jpg",},
  {img: "/image/press/news10.jpg",},
  {img: "/image/press/news11.jpg",},
  {img: "/image/press/news12.jpg",},
  {img: "/image/press/news13.jpg",},
  {img: "/image/press/news14.jpg",},
  {img: "/image/press/news15.jpg",},
  {img: "/image/press/news16.jpg",},
  {img: "/image/press/news17.jpg",},
  {img: "/image/press/news18.jpg",},
  {img: "/image/press/news19.jpg",},
  {img: "/image/press/news20.jpg",},
  {img: "/image/press/news21.jpg",},
  {img: "/image/press/news22.jpg",},
  {img: "/image/press/news23.jpg",},
  {img: "/image/press/news24.jpg",},
  {img: "/image/press/news25.jpg",},
  {img: "/image/press/news26.jpg",},
  {img: "/image/press/news27.jpg",},
  {img: "/image/press/news28.jpg",},
  {img: "/image/press/news29.jpg",},
  {img: "/image/press/news30.jpg",},
  {img: "/image/press/news31.jpg",},
  {img: "/image/press/news32.jpg",},
  {img: "/image/press/news33.jpg",},
  {img: "/image/press/news34.jpg",},
  {img: "/image/press/news35.jpg",},
  {img: "/image/press/news36.jpg",},
  {img: "/image/press/news37.jpg",},
  {img: "/image/press/news38.jpg",},
  {img: "/image/press/news39.jpg",},
  {img: "/image/press/news40.jpg",},
  {img: "/image/press/news41.jpg",},
  {img: "/image/press/news42.jpg",},
  {img: "/image/press/news43.jpg",},  
];

const ITEMS_PER_PAGE = 9;

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(galleryItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleItems = galleryItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const desktopPages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const compactPages: Array<number | "..."> =
    currentPage <= 2
      ? [1, 2, "...", totalPages]
      : currentPage >= totalPages - 1
        ? [1, "...", totalPages - 1, totalPages]
        : [1, "...", currentPage, "...", totalPages];

  const goToPage = (page: number) => {
    const nextPage = Math.min(Math.max(page, 1), totalPages);

    if (nextPage === currentPage) return;

    setCurrentPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pageButtonClass = (page: number) =>
    `w-10 h-10 rounded-md text-sm font-black transition-colors ${
      currentPage === page
        ? "bg-(--color-primary) text-white"
        : "border border-slate-200 text-slate-700 hover:border-(--color-primary) hover:text-(--color-primary)"
    }`;

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
            {visibleItems.map((item) => (
              <div
                key={item.img}
                data-aos="fade-up"
                className="relative w-full group"
              >
                {/* Image */}
                <Image src={item.img}
                  alt={item.img || "Project image"}
                  width={500}
                  height={500}
                  className="w-full h-full object-fit border shadow-lg rounded-xl" quality={75} />
                </div>
            ))}
          </section>

          <div className="max-w-7xl mx-auto mt-10 flex flex-nowrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
              title="Previous page"
              className="w-10 h-10 inline-flex items-center justify-center border border-slate-200 rounded-md text-slate-700 transition-colors hover:border-(--color-primary) hover:text-(--color-primary) disabled:opacity-40 disabled:pointer-events-none"
            >
              <FiChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2 sm:hidden">
              {compactPages.map((page, index) =>
                page === "..." ? (
                  <span
                    key={`ellipsis-${index}`}
                    className="w-8 h-10 inline-flex items-center justify-center text-sm font-black text-slate-400"
                  >
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page)}
                    aria-current={currentPage === page ? "page" : undefined}
                    className={pageButtonClass(page)}
                  >
                    {page}
                  </button>
                ),
              )}
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              {desktopPages.map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => goToPage(page)}
                  aria-current={currentPage === page ? "page" : undefined}
                  className={pageButtonClass(page)}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              title="Next page"
              className="w-10 h-10 inline-flex items-center justify-center border border-slate-200 rounded-md text-slate-700 transition-colors hover:border-(--color-primary) hover:text-(--color-primary) disabled:opacity-40 disabled:pointer-events-none"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </section>
      </SmoothScroll>
    </>
  );
}
