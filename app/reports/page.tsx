"use client";

import { motion } from "framer-motion";
import SmoothScroll from "../../Component/SmothScrolling";
import { FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";

const certificateFiles = [
  "Audit Report_2022-23.pdf",
  "Annual Activity Report 2022-23.pdf",
  "Audit Report_2023-24.pdf",
  "Annual Activity Report 2023-24.pdf",
  "Audit Report_2024-25.pdf",
  "Annual Activity Report 2024-25.pdf",
];

const toTitle = (fileName: string) =>
  fileName.replace(".pdf", "").replace(/_/g, " ");

export default function CertificatesPage() {
  return (
    <SmoothScroll>
      <section className="container text-center relative px-6">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-(--color-secondary) text-[10px] font-black tracking-[0.38em] uppercase mb-3 flex items-center justify-center gap-3"
        >
          <span className="w-8 h-px bg-(--color-secondary)" />
          Certificates
          <span className="w-8 h-px bg-(--color-secondary)" />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900"
        >
          Reports &{" "}
          <span className="text-(--color-primary)">Certificates</span>
        </motion.h1>
      </section>

      <section className="container">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {certificateFiles.map((file, index) => {
            const href = `/certificates/${encodeURIComponent(file)}`;

            return (
              <motion.a
                key={file}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group border border-slate-200 rounded-xl bg-white p-5 flex items-start gap-4 shadow-sm hover:shadow-md hover:border-(--color-primary) transition-all duration-300"
              >
                <span className="w-11 h-11 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <FaFilePdf size={20} />
                </span>

                <div className="text-left min-w-0 flex-1">
                  <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-1">
                    PDF Document
                  </p>
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
                    {toTitle(file)}
                  </h3>
                  <p className="text-[13px] text-slate-500 mt-1">{file}</p>
                </div>

                <span className="text-slate-400 group-hover:text-(--color-primary) transition-colors">
                  <FaExternalLinkAlt size={14} />
                </span>
              </motion.a>
            );
          })}
        </div>
      </section>
    </SmoothScroll>
  );
}
