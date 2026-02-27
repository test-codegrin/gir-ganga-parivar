"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FiChevronDown,
  FiMenu,
  FiX,
  FiPhone,
  FiMail,
  FiSearch,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [workOpen,   setWorkOpen]   = useState(false);
  const [mediaOpen,  setMediaOpen]  = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);

  const workRef  = useRef<HTMLLIElement>(null);
  const mediaRef = useRef<HTMLLIElement>(null);

  const isActive      = (path: string) => pathname === path;
  const isWorkActive  = pathname.startsWith("/our-work");
  const isMediaActive = pathname.startsWith("/media");

  /* close dropdowns on outside click */
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (workRef.current  && !workRef.current.contains(e.target as Node))  setWorkOpen(false);
      if (mediaRef.current && !mediaRef.current.contains(e.target as Node)) setMediaOpen(false);
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  /* add shadow after first scroll px */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ─── helpers ─────────────────────────────────────── */

  /* Animated underline that grows from left */
  const underline = (active: boolean, hoverGroup = true) =>
    [
      "absolute bottom-0 left-3 right-3 h-[2px] bg-emerald-500 transition-all duration-300 origin-left",
      active                      ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0",
      !active && hoverGroup       ? "group-hover:scale-x-100 group-hover:opacity-100" : "",
    ].join(" ");

  /* Top-level link wrapper */
  const linkCls = (path: string) =>
    [
      "relative inline-flex items-center px-3 xl:px-4 py-5",
      "text-[12.5px] xl:text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors group",
      isActive(path) ? "text-emerald-600" : "text-slate-700 hover:text-emerald-600",
    ].join(" ");

  /* Dropdown item */
  const dropCls = (path: string) =>
    [
      "block px-5 py-2.5 text-[12px] font-semibold uppercase tracking-wider transition-colors",
      isActive(path)
        ? "text-emerald-600 bg-emerald-50"
        : "text-slate-600 hover:text-emerald-600 hover:bg-slate-50",
    ].join(" ");

  /* Centred dropdown panel */
  const dropPanel = (open: boolean) =>
    [
      "absolute top-full left-1/2 -translate-x-1/2 z-50",
      "bg-white border border-slate-100 shadow-xl rounded-lg py-1.5 w-48",
      "transition-all duration-200 origin-top",
      open
        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
        : "opacity-0 scale-95 -translate-y-1 pointer-events-none",
    ].join(" ");

  return (
    <>
      {/* ══════════════════════════════════════════════
          TOP BAR
      ══════════════════════════════════════════════ */}
      <div className="w-full bg-[#f0ede6] border-b border-[#e2ddd4]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-10 flex items-center justify-between">

          {/* Left: welcome + socials */}
          <div className="flex items-center gap-5">
            <span className="hidden sm:block text-[12px] text-slate-500 font-medium tracking-wide">
              Welcome to Gir Ganga Parivar Trust
            </span>
            <div className="flex items-center gap-3 text-slate-500">
              {[
                { icon: <FaFacebookF size={11} />, href: "https://www.facebook.com/profile.php?id=100083921712230", label: "Facebook"  },
                { icon: <FaYoutube   size={12} />, href: "https://www.youtube.com/@girgangaparivartrust",           label: "YouTube"   },
                { icon: <FaInstagram size={12} />, href: "https://www.instagram.com/girgangaparivartrust/",         label: "Instagram" },
                { icon: <FaTwitter   size={11} />, href: "https://x.com/GirgangaT71455",                           label: "Twitter"   },
              ].map(({ icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                   aria-label={label} className="hover:text-emerald-600 transition-colors">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: email · phone · search */}
          <div className="flex items-center gap-4 text-[12px] text-slate-500 font-medium">
            <a href="mailto:info@girgangaparivartrust.com"
               className="hidden md:flex items-center gap-1.5 hover:text-emerald-600 transition-colors">
              <FiMail size={12} className="text-emerald-600" />
              info@girgangaparivartrust.com
            </a>
            <span className="hidden md:block text-slate-300">|</span>
            <a href="tel:+919409692693"
               className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors">
              <FiPhone size={12} className="text-emerald-600" />
              +91 94096 92693
            </a>
            <span className="hidden md:block text-slate-300">|</span>
            <button type="button" onClick={() => setSearchOpen(!searchOpen)}
                    aria-label="Search" title="Search"
                    className="hover:text-emerald-600 transition-colors">
              <FiSearch size={14} />
            </button>
          </div>
        </div>

        {/* Slide-down search bar */}
        <div className={`overflow-hidden transition-all duration-300 bg-white border-t border-slate-100 ${searchOpen ? "max-h-14" : "max-h-0"}`}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-2 flex items-center gap-3">
            <FiSearch size={15} className="text-slate-400 flex-shrink-0" />
            <input autoFocus={searchOpen} type="text" placeholder="Search…"
                   className="flex-1 text-sm text-slate-700 placeholder-slate-400 outline-none bg-transparent" />
            <button type="button" onClick={() => setSearchOpen(false)} aria-label="Close search"
                    className="text-slate-400 hover:text-slate-700">
              <FiX size={15} />
            </button>
          </div>
        </div>
      </div>


      {/* ══════════════════════════════════════════════
          MAIN NAV  ——  Selvatika style
          [ Logo + name ]              [ links … Donate ]
      ══════════════════════════════════════════════ */}
      <nav className={`sticky top-0 w-full z-50 bg-white transition-all duration-300 ${scrolled ? "shadow-md" : "border-none"}`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">

          {/* ── LEFT: Logo  +  "Parivar Trust" rule ── */}
          <Link href="/" className="flex flex-col items-center py-3 flex-shrink-0">
            <Image
              src="/image/logo.png"
              alt="Gir Ganga Parivar Trust"
              width={scrolled ? 50 : 66}
              height={scrolled ? 50 : 66}
              className="transition-all duration-300 object-contain"
              priority
            />
            {/* brand-name strip — hidden when scrolled (mimics Selvatika) */}
            <div className={`flex items-center gap-1.5 mt-1 transition-all duration-300 ${scrolled ? "opacity-0 max-h-0 overflow-hidden" : "opacity-100 max-h-6"}`}>
              <span className="block h-px w-4 bg-slate-300" />
              <span className="text-[8px] font-black tracking-[0.28em] uppercase text-slate-400 whitespace-nowrap">
                Parivar Trust
              </span>
              <span className="block h-px w-4 bg-slate-300" />
            </div>
          </Link>

          {/* ── RIGHT: Nav links ── */}
          <ul className="hidden lg:flex items-stretch">

            {/* HOME */}
            <li className="relative group">
              <Link href="/" className={linkCls("/")}>
                Home
                <span className={underline(isActive("/"))} />
              </Link>
            </li>

            {/* OUR WORK ▾ */}
            <li className="relative" ref={workRef}>
              <button type="button" title="Our Work"
                onClick={() => { setWorkOpen(!workOpen); setMediaOpen(false); }}
                className={`${linkCls(isWorkActive ? "/our-work" : "")} gap-1`}>
                Our Work
                <FiChevronDown size={11} className={`mt-px transition-transform duration-200 ${workOpen ? "rotate-180" : ""}`} />
                <span className={underline(isWorkActive || workOpen, false)} />
              </button>
              <div className={dropPanel(workOpen)}>
                {/* notch arrow */}
                <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-slate-100 rotate-45" />
                {[
                  { label: "Overview", href: "/our-work" },
                  { label: "Impact",   href: "/our-work/impact" },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} onClick={() => setWorkOpen(false)} className={dropCls(href)}>
                    {label}
                  </Link>
                ))}
              </div>
            </li>

            {/* MEDIA ▾ */}
            <li className="relative" ref={mediaRef}>
              <button type="button" title="Media"
                onClick={() => { setMediaOpen(!mediaOpen); setWorkOpen(false); }}
                className={`${linkCls(isMediaActive ? "/media" : "")} gap-1`}>
                Media
                <FiChevronDown size={11} className={`mt-px transition-transform duration-200 ${mediaOpen ? "rotate-180" : ""}`} />
                <span className={underline(isMediaActive || mediaOpen, false)} />
              </button>
              <div className={dropPanel(mediaOpen)}>
                <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-slate-100 rotate-45" />
                {[
                  { label: "Photos",        href: "/media/photos" },
                  { label: "Press Release", href: "/media/press"  },
                  { label: "Videos",        href: "/media/videos" },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} onClick={() => setMediaOpen(false)} className={dropCls(href)}>
                    {label}
                  </Link>
                ))}
              </div>
            </li>

            {/* AWARDS */}
            <li className="relative group">
              <Link href="/awards" className={linkCls("/awards")}>
                Awards
                <span className={underline(isActive("/awards"))} />
              </Link>
            </li>

            {/* ABOUT US */}
            <li className="relative group">
              <Link href="/about" className={linkCls("/about")}>
                About Us
                <span className={underline(isActive("/about"))} />
              </Link>
            </li>

            {/* CONTACT */}
            <li className="relative group">
              <Link href="/contact" className={linkCls("/contact")}>
                Contact
                <span className={underline(isActive("/contact"))} />
              </Link>
            </li>

            {/* DONATE — vertical rule + outlined square button */}
            <li className="flex items-center ml-5 pl-5 border-l border-slate-200 my-3">
              <Link href="/donation"
                className="text-[11px] font-extrabold uppercase tracking-[0.15em] px-5 py-2
                           border border-emerald-600 text-emerald-700
                           hover:bg-emerald-600 hover:text-white
                           rounded-sm transition-all duration-200">
                Donate
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button type="button" className="lg:hidden text-slate-800"
                  onClick={() => setMenuOpen(true)} aria-label="Open menu" title="Open menu">
            <FiMenu size={26} />
          </button>
        </div>
         {/* Wave Design at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-4 overflow-hidden">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 1200 12" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,6 C150,0 300,12 450,6 C600,0 750,12 900,6 C1050,0 1200,12 1200,6 L1200,12 L0,12 Z" 
            fill="#10b981"
            className="fill-emerald-500"
          />
        </svg>
      </div>
      </nav>


      {/* ══════════════════════════════════════════════
          MOBILE FULLSCREEN MENU
      ══════════════════════════════════════════════ */}
      <div className={`fixed inset-0 bg-white z-[9999] flex flex-col lg:hidden
                       transition-all duration-500
                       ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}`}>

        {/* Top row */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <Link href="/" onClick={() => setMenuOpen(false)} className="flex flex-col items-center">
            <Image src="/image/logo.png" alt="Gir Ganga Parivar Trust" width={62} height={62} className="object-contain" />
            <div className="flex items-center gap-1.5 mt-1">
              <span className="h-px w-4 bg-slate-300 block" />
              <span className="text-[8px] font-black tracking-[0.28em] uppercase text-slate-400">Parivar Trust</span>
              <span className="h-px w-4 bg-slate-300 block" />
            </div>
          </Link>
          <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu"
                  className="text-slate-600 hover:text-emerald-600">
            <FiX size={28} />
          </button>
        </div>

        {/* Link list */}
        <ul className="flex-1 overflow-y-auto px-6 py-6">
          {[
            { label: "Home",       href: "/" },
            { label: "Awards",     href: "/awards" },
            { label: "About Us",   href: "/about" },
            { label: "Contact",    href: "/contact" },
          ].map(({ label, href }) => (
            <li key={href}>
              <Link href={href} onClick={() => setMenuOpen(false)}
                className={`block py-3.5 text-lg font-bold border-b border-slate-50 tracking-wide ${isActive(href) ? "text-emerald-600" : "text-slate-800"}`}>
                {label}
              </Link>
            </li>
          ))}

          {/* Our Work accordion */}
          <li>
            <button type="button" onClick={() => setWorkOpen(!workOpen)}
              className={`w-full flex items-center justify-between py-3.5 text-lg font-bold border-b border-slate-50 tracking-wide ${isWorkActive ? "text-emerald-600" : "text-slate-800"}`}>
              Our Work
              <FiChevronDown className={`transition-transform ${workOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all ${workOpen ? "max-h-36 py-2" : "max-h-0"}`}>
              <ul className="pl-5 space-y-3 border-l-2 border-emerald-100 mt-1">
                {[{ label: "Overview", href: "/our-work" }, { label: "Impact", href: "/our-work/impact" }].map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} onClick={() => setMenuOpen(false)}
                      className={`text-[15px] font-semibold ${isActive(href) ? "text-emerald-600" : "text-slate-500"}`}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {/* Media accordion */}
          <li>
            <button type="button" onClick={() => setMediaOpen(!mediaOpen)}
              className={`w-full flex items-center justify-between py-3.5 text-lg font-bold border-b border-slate-50 tracking-wide ${isMediaActive ? "text-emerald-600" : "text-slate-800"}`}>
              Media
              <FiChevronDown className={`transition-transform ${mediaOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all ${mediaOpen ? "max-h-52 py-2" : "max-h-0"}`}>
              <ul className="pl-5 space-y-3 border-l-2 border-emerald-100 mt-1">
                {[{ label: "Photos", href: "/media/photos" }, { label: "Press Release", href: "/media/press" }, { label: "Videos", href: "/media/videos" }].map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} onClick={() => setMenuOpen(false)}
                      className={`text-[15px] font-semibold ${isActive(href) ? "text-emerald-600" : "text-slate-500"}`}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>

        {/* Bottom: contact info + donate CTA */}
        <div className="px-6 pb-8 pt-4 border-t border-slate-100 space-y-3">
          <a href="tel:+919409692693" className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
            <span className="bg-emerald-100 text-emerald-700 p-2 rounded-lg"><FiPhone size={15} /></span>
            +91 94096 92693
          </a>
          <a href="mailto:info@girgangaparivartrust.com" className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
            <span className="bg-emerald-100 text-emerald-700 p-2 rounded-lg"><FiMail size={15} /></span>
            info@girgangaparivartrust.com
          </a>
          <Link href="/donation" onClick={() => setMenuOpen(false)}
            className="mt-2 w-full block text-center border border-emerald-600 text-emerald-700
                       hover:bg-emerald-600 hover:text-white font-extrabold py-3
                       uppercase tracking-[0.15em] text-sm transition-colors rounded-sm">
            Donate Now
          </Link>
        </div>
      </div>
    </>
  );
}