"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden font-sans">

      {/* ── Background image — fills entire footer ── */}
      <img
        src="/image/Footer_Img.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />

      {/* ── Dark overlay so text is readable over image ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/55 to-black/90" />

      {/* ── All content sits above both layers ── */}
      <div className="relative z-10 text-white">
        {/* Thin emerald divider */}
        <div className="h-px mx-8 lg:mx-16 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent mb-14" />

        {/* ── 4-column grid ── */}
        <div className="max-w-[1500px] mx-auto px-8 lg:px-16 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Brand */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="rounded-xl p-1.5 flex-shrink-0 backdrop-blur-sm">
                  <Image
                    src="/image/logo.png"
                    alt="Girganga Parivar Trust"
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-white font-black text-base leading-tight">Girganga</p>
                  <p className="text-emerald-400 font-bold text-sm">Parivar Trust</p>
                </div>
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Transforming Saurashtra through water conservation — building a
                sustainable future for generations to come.
              </p>

              {/* Socials */}
              <div className="flex gap-2.5">
                {[
                  { icon: <FaFacebookF size={13} />, href: "https://www.facebook.com/profile.php?id=100083921712230", label: "Facebook"  },
                  { icon: <FaTwitter   size={13} />, href: "https://x.com/GirgangaT71455",                           label: "Twitter"   },
                  { icon: <FaInstagram size={13} />, href: "https://www.instagram.com/girgangaparivartrust/",         label: "Instagram" },
                  { icon: <FaYoutube   size={13} />, href: "https://www.youtube.com/@girgangaparivartrust",           label: "YouTube"   },
                ].map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 backdrop-blur-sm
                               flex items-center justify-center text-white/80
                               hover:bg-emerald-600 hover:border-emerald-600 hover:text-white
                               transition-all duration-200"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-emerald-400 rounded-full inline-block" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "Home",       href: "/" },
                  { label: "Awards",     href: "/awards" },
                  { label: "About Us",   href: "/about" },
                  { label: "Gallery",    href: "/gallery" },
                  { label: "Contact Us", href: "/contact" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-white/65 text-sm hover:text-emerald-400 hover:pl-1.5
                                 transition-all duration-200 inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-emerald-400
                                       transition-all duration-200 inline-block" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Work */}
            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-emerald-400 rounded-full inline-block" />
                Our Work
              </h3>
              <ul className="space-y-3">
                {[
                  "Checkdam Construction",
                  "Community Impact",
                  "Media Coverage",
                  "Community Engagement",
                ].map((item) => (
                  <li key={item} className="text-white/65 text-sm flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Involved + Contact */}
            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-emerald-400 rounded-full inline-block" />
                Get Involved
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  { label: "Make a Donation",  href: "/donation"           },
                  { label: "Volunteer",        href: "/team"               },
                  { label: "Corporate / CSR",  href: "/partner-with-us-csr"},
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-white/65 text-sm hover:text-emerald-400 hover:pl-1.5
                                 transition-all duration-200 inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-emerald-400
                                       transition-all duration-200 inline-block" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Contact details */}
              <div className="space-y-3">
                <a href="tel:+919409692693"
                   className="flex items-center gap-2.5 text-white/65 text-sm hover:text-emerald-400 transition-colors">
                  <FiPhone size={13} className="text-emerald-400 flex-shrink-0" />
                  +91 94096 92693
                </a>
                <a href="mailto:info@girgangaparivartrust.com"
                   className="flex items-center gap-2.5 text-white/65 text-sm hover:text-emerald-400 transition-colors">
                  <FiMail size={13} className="text-emerald-400 flex-shrink-0" />
                  info@girgangaparivartrust.com
                </a>
                <div className="flex items-start gap-2.5 text-white/65 text-sm">
                  <FiMapPin size={13} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Sunstar Chamber, Rajkot – 360005, Gujarat</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-5 border-t border-white/15
                          flex flex-col sm:flex-row items-center justify-between
                          gap-3 text-white/40 text-xs">
            <p>Registered Non-Profit Trust · All Rights Reserved</p>
            <p className="flex items-center gap-1.5">
              Made with <span className="text-emerald-400">♥</span> for Water Conservation
              · <span className="text-emerald-400/80">Girganga Parivar Trust © 2026</span>
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}