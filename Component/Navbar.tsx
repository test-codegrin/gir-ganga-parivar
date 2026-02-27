"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Import this to detect current page
import { FiChevronDown, FiMenu, FiX, FiPhone, FiMail } from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname(); // Current URL path
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [workOpen, setWorkOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);

  const workRef = useRef<HTMLLIElement>(null);
  const mediaRef = useRef<HTMLLIElement>(null);

  // Helper function to check if a link or its dropdown children are active
  const isActive = (path: string) => pathname === path;
  const isWorkActive = pathname.startsWith("/Our-Work");
  const isMediaActive = pathname.startsWith("/media");

  return (
    <nav
      className={`top-0 left-0 w-full z-[50] transition-all duration-500 shadow-2xl ${scrolled ? "bg-white backdrop-blur-md shadow-md py-2" : "bg-white py-5"}`}
    >
      <div className="container-header section-padding-header mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* --- DESKTOP NAVIGATION --- */}
        <div className="hidden lg:flex flex-1 items-center gap-8">
          <ul className="flex gap-8 text-slate-800 font-bold text-[13px] xl:text-[15px] uppercase tracking-[0.1em]">
            {/* HOME */}
            <li className="group relative">
              <Link
                href="/"
                className={`transition-colors ${isActive("/") ? "text-emerald-600" : "hover:text-emerald-600"}`}
              >
                Home
              </Link>
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-600 transition-all ${isActive("/") ? "w-full" : "w-0 group-hover:w-full"}`}
              ></span>
            </li>

            {/* OUR WORK DROPDOWN */}
            <li className="relative" ref={workRef}>
              <button
                onClick={() => {
                  setWorkOpen(!workOpen);
                  setMediaOpen(false);
                }}
                className={`flex items-center gap-1 transition-colors ${isWorkActive || workOpen ? "text-emerald-600" : "hover:text-emerald-600"}`}
              >
                Our Work{" "}
                <FiChevronDown
                  className={`transition-transform ${workOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`absolute top-full z-10 -left-4 mt-4 bg-white shadow-2xl rounded-2xl py-4 w-60 border border-slate-100 transition-all ${workOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-4 invisible pointer-events-none"}`}
              >
                <Link
                  href="/our-work/impact"
                  onClick={() => setWorkOpen(false)}
                  className={`block px-6 py-2.5 font-medium transition-colors ${isActive("/our-work/impact") ? "text-emerald-600 bg-emerald-50" : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"}`}
                >
                  Impact
                </Link>
              </div>
            </li>

            {/* MEDIA DROPDOWN */}
            <li className="relative" ref={mediaRef}>
              <button
                onClick={() => {
                  setMediaOpen(!mediaOpen);
                  setWorkOpen(false);
                }}
                className={`flex items-center gap-1 transition-colors ${isMediaActive || mediaOpen ? "text-emerald-600" : "hover:text-emerald-600"}`}
              >
                Media{" "}
                <FiChevronDown
                  className={`transition-transform ${mediaOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`absolute top-full -left-4 mt-4 z-10 bg-white shadow-2xl rounded-2xl py-4 w-60 border border-slate-100 transition-all ${mediaOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-4 invisible pointer-events-none"}`}
              >
                {["photos", "press", "videos"].map((item) => (
                  <Link
                    key={item}
                    href={`/media/${item}`}
                    onClick={() => setMediaOpen(false)}
                    className={`block px-6 py-2.5 font-medium capitalize transition-colors ${isActive(`/media/${item}`) ? "text-emerald-600 bg-emerald-50" : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"}`}
                  >
                    {item.replace("-", " ")}
                  </Link>
                ))}
              </div>
            </li>

            {/* AWARDS & ABOUT */}
            {["awards", "about"].map((item) => (
              <li key={item} className="group relative">
                <Link
                  href={`/${item}`}
                  className={`transition-colors capitalize ${isActive(`/${item}`) ? "text-emerald-600" : "hover:text-emerald-600"}`}
                >
                  {item}
                </Link>
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-600 transition-all ${isActive(`/${item}`) ? "w-full" : "w-0 group-hover:w-full"}`}
                ></span>
              </li>
            ))}
          </ul>
        </div>

        {/* --- CENTER: LOGO --- */}
        <div className="flex-shrink-0 lg:px-12">
          <Link
            href="/"
            className="bg-white rounded-full p-1 block shadow-sm border border-slate-50"
          >
            <Image
              src="/image/logo.png"
              alt="Logo"
              width={scrolled ? 50 : 80}
              height={scrolled ? 50 : 80}
              className="transition-all object-contain"
            />
          </Link>
        </div>

        {/* --- RIGHT: CONTACT --- */}
        <div className="hidden lg:flex flex-1 justify-end items-center gap-6">
          {/* Contact info */}
          <div className="flex flex-col gap-1 text-slate-900 font-black text-lg">
            {/* Phone */}
            <a
              href="tel:+919409692693"
              className="flex items-center gap-2 hover:text-emerald-600"
            >
              <span className="bg-emerald-600 p-1.5 rounded-lg text-white">
                <FiPhone size={14} />
              </span>
              94096 92693
            </a>

            {/* Email */}
            <a
              href="mailto:info@girgangaparivar.org"
              className="flex items-center gap-2 hover:text-emerald-600"
            >
              <span className="bg-emerald-600 p-1.5 rounded-lg text-white">
                <FiMail size={14} />
              </span>
              info@girgangaparivar.org
            </a>
          </div>

          {/* Contact button */}
          <Link
            href="/contact"
            className="bg-slate-900 text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-emerald-600 transition-all uppercase tracking-widest"
          >
            Contact
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden text-slate-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
        </button>
      </div>

      {/* --- MOBILE MENU --- */}
      <div
        className={`fixed inset-0 bg-white transition-all duration-500 lg:hidden ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"} z-[1001]`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-12">
            <Image src="/image/logo.png" alt="Logo" width={80} height={80} />
            <button onClick={() => setMenuOpen(false)}>
              <FiX size={32} />
            </button>
          </div>

          <ul className="space-y-6 text-2xl font-black">
            <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={
                  isActive("/") ? "text-emerald-600" : "text-slate-900"
                }
              >
                Home
              </Link>
            </li>

            {/* MOBILE OUR WORK */}
            <li>
              <button
                onClick={() => setWorkOpen(!workOpen)}
                className={`flex items-center justify-between w-full ${isWorkActive ? "text-emerald-600" : "text-slate-900"}`}
              >
                Our Work{" "}
                <FiChevronDown className={workOpen ? "rotate-180" : ""} />
              </button>
              <div
                className={`overflow-hidden transition-all ${workOpen ? "max-h-40 mt-4" : "max-h-0"}`}
              >
                <ul className="pl-6 space-y-4 text-xl border-l-2 border-emerald-100">
                  <li>
                    <Link
                      href="/our-work/impact"
                      onClick={() => setMenuOpen(false)}
                      className={
                        isActive("/our-work/impact")
                          ? "text-emerald-600"
                          : "text-slate-500"
                      }
                    >
                      Impact
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* MOBILE MEDIA */}
            <li>
              <button
                onClick={() => setMediaOpen(!mediaOpen)}
                className={`flex items-center justify-between w-full ${isMediaActive ? "text-emerald-600" : "text-slate-900"}`}
              >
                Media{" "}
                <FiChevronDown className={mediaOpen ? "rotate-180" : ""} />
              </button>
              <div
                className={`overflow-hidden transition-all ${mediaOpen ? "max-h-60 mt-4" : "max-h-0"}`}
              >
                <ul className="pl-6 space-y-4 text-xl border-l-2 border-emerald-100">
                  {["photos", "press", "videos"].map((sub) => (
                    <li key={sub}>
                      <Link
                        href={`/media/${sub}`}
                        onClick={() => setMenuOpen(false)}
                        className={
                          isActive(`/media/${sub}`)
                            ? "text-emerald-600"
                            : "text-slate-500 capitalize"
                        }
                      >
                        {sub}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li>
              <Link
                href="/awards"
                onClick={() => setMenuOpen(false)}
                className={
                  isActive("/awards") ? "text-emerald-600" : "text-slate-900"
                }
              >
                Awards
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className={
                  isActive("/about") ? "text-emerald-600" : "text-slate-900"
                }
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
