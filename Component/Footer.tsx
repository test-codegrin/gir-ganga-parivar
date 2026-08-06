"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className=" relative w-full overflow-hidden bg-(--color-tertiary) text-black">
      {/* ── Dark overlay so text is readable over image ── */}
      <div className="absolute inset-0" />

      {/* ── All content sits above both layers ── */}
      <div className="relative z-10 text-black">
        {/* Thin greenish divider */}
        <div
          className="h-px mx-8 lg:mx-16 bg-linear-to-r from-transparent via
        
        to-transparent mb-14"
        />

        {/* ── 4-column grid ── */}
        <div className="container mx-auto px-8 lg:px-16 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="flex flex-col">
              <Link href="/">
                <div className="flex items-center  mb-5 cursor-pointer">
                  <div className="rounded-xl p-1 shrink-0 backdrop-blur-sm">
                    <Image src="/image/logo.png"
                      alt="Girganga Parivar Trust"
                      width={66}
                      height={66}
                      className="object-contain" quality={75} />
                  </div>
                  <div>
                    <p className="text-black font-black text-base leading-tight">
                      Girganga
                    </p>
                    <p className="text-(--color-primary)  font-bold text-sm">
                      Parivar Trust
                    </p>
                  </div>
                </div>
              </Link>

              <p className="text-black text-sm leading-relaxed mb-6">
                Transforming{" "}
                <span className="text-red-700 font-semibold">GUJARAT</span>{" "}
                through water conservation — building a sustainable future for
                generations to come.
              </p>

              {/* Socials */}
              <div className="flex gap-2.5">
                {[
                  {
                    icon: <FaFacebookF size={13} />,
                    href: "https://www.facebook.com/profile.php?id=100083921712230",
                    label: "Facebook",
                  },
                  {
                    icon: <FaLinkedinIn size={13} />,
                    href: "https://in.linkedin.com/in/girganga-parivar-trust-450354287",
                    label: "Twitter",
                  },
                  {
                    icon: <FaInstagram size={13} />,
                    href: "https://www.instagram.com/girgangaparivartrust/",
                    label: "Instagram",
                  },
                  {
                    icon: <FaYoutube size={13} />,
                    href: "https://www.youtube.com/@girgangaparivartrust",
                    label: "YouTube",
                  },
                ].map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="btn-secondary group"
                  >
                    <span
                      className="relative z-10 btn-secondary w-9 h-9 rounded-lg bg-(--color-tertiary) border-2 border-(--color-primary)
                      backdrop-blur-sm flex items-center justify-center text-(--color-primary)
                     hover:bg-(--color-primary) hover:border-(--color-primary) hover:text-white"
                    >
                      {icon}
                    </span>

                    <span className="btn-secondary-overlay z-0"></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-black font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-(--color-primary) rounded-full inline-block" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "Home", href: "/" },
                  { label: "NSE SSE Public Issue", href: "/sse" },
                  { label: "Awards", href: "/awards" },
                  { label: "About Us", href: "/about-us" },
                  { label: "Gallery", href: "/photos" },
                  { label: "Contact Us", href: "/contact" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-black text-sm hover:text-(--color-primary) hover:pl-1.5
                                 transition-all duration-200 inline-flex items-center gap-1.5 group"
                    >
                      <span
                        className="w-0 group-hover:w-2 h-px bg-(--color-primary)
                                       transition-all duration-200 inline-block"
                      />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Work */}

            <div>
              <h3 className="text-black font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-(--color-primary) rounded-full inline-block" />
                Our Work
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "Checkdam Construction", href: "/check-dam-creat" },
                  { label: "Community Impact", href: "/impact" },
                  { label: "Media Coverage", href: "/press-release" },
                  { label: "Borewell Recharge", href: "/borewell-recharge" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-black text-sm hover:text-(--color-primary) hover:pl-1.5
                                 transition-all duration-200 inline-flex items-center gap-1.5 group"
                    >
                      <span
                        className="w-0 group-hover:w-2 h-px bg-(--color-primary)
                                       transition-all duration-200 inline-block"
                      />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Involved + Contact */}
            <div>
              <h3 className="text-black font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-(--color-primary) rounded-full inline-block" />
                Get Involved
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  { label: "Make a Donation", href: "/donate" },
                  { label: "Volunteer", href: "/team" },
                  { label: "Corporate / CSR", href: "/partner-with-us-csr" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-black text-sm hover:text-(--color-primary) hover:pl-1.5
                                 transition-all duration-200 inline-flex items-center gap-1.5 group"
                    >
                      <span
                        className="w-0 group-hover:w-2 h-px bg-(--color-primary)
                                       transition-all duration-200 inline-block"
                      />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Contact details */}
              <div className="space-y-3">
                <a
                  href="tel:+919409692693"
                  className="flex items-center gap-2.5 text-black text-sm hover:text-(--color-primary) transition-colors"
                >
                  <FiPhone
                    size={13}
                    className="text-(--color-primary) shrink-0"
                  />
                  +91 94096 92693
                </a>
                <a
                  href="mailto:info@girgangaparivartrust.com"
                  className="flex items-center gap-2.5 text-black text-sm hover:text-(--color-primary) transition-colors"
                >
                  <FiMail
                    size={13}
                    className="text-(--color-primary) shrink-0"
                  />
                  info@girgangaparivartrust.com
                </a>
                <a href="/Our-Work">
                  <div className="flex items-start gap-2.5 text-black text-sm cursor-pointer select-none">
                    <FiMapPin
                      size={13}
                      className="text-(--color-primary) shrink-0 mt-0.5"
                    />
                    <span>
                      Decora Capital, 5th Floor, Nr. McDonalds, Above HDFC Bank,
                      Kalawad Road, Rajkot - 360005, Gujarat{" "}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-12 pt-5 border-t border-black
                          flex flex-col sm:flex-row items-center justify-between
                          gap-3 text-black text-xs"
          >
            <p>Registered Non-Profit Trust · All Rights Reserved</p>
            <p className="flex flex-wrap items-center justify-center gap-1.5">
              Made with <span className="text-(--color-primary)">♥</span>{" "}
              for Water Conservation ·{" "}
              <Link href="/">
                <span className="text-(--color-primary) ">
                  Girganga Parivar Trust © 2026
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
