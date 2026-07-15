"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiChevronDown, FiMenu, FiX, FiPhone, FiMail } from "react-icons/fi";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const [desktopMediaOpen, setDesktopMediaOpen] = useState(false);
  const [mobileMediaOpen, setMobileMediaOpen] = useState(false);

  // ✅ NEW: Separate states for Our Work dropdown
  const [desktopWorkOpen, setDesktopWorkOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const mediaRef = useRef<HTMLLIElement>(null);
  const workRef = useRef<HTMLLIElement>(null); // ✅ NEW ref for Our Work

  const isActive = (path: string) => pathname === path;
  const isWorkActive = pathname.startsWith("/Our-Work");
  const isMediaActive =
    pathname.startsWith("/media") || pathname.startsWith("/certificates");

  /* close dropdowns on outside click */
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (mediaRef.current && !mediaRef.current.contains(e.target as Node))
        setDesktopMediaOpen(false);
      if (workRef.current && !workRef.current.contains(e.target as Node))
        setDesktopWorkOpen(false);
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

  /* lock body scroll when mobile menu open */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setMobileMediaOpen(false);
      setMobileWorkOpen(false); // ✅ Reset on close
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  /* Animated underline that grows from left */
  const underline = (active: boolean, hoverGroup = true) =>
    [
      "absolute bottom-0 left-3 right-3 h-[2px] bg-(--color-primary) transition-all duration-300 origin-left",
      active ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0",
      !active && hoverGroup
        ? "group-hover:scale-x-100 group-hover:opacity-100"
        : "",
    ].join(" ");

  /* Top-level link wrapper */
  const linkCls = (path: string) =>
    [
      "relative inline-flex items-center px-3 xl:px-4 py-5",
      "text-[12.5px] xl:text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors group",
      isActive(path)
        ? "text-(--color-primary)"
        : "text-slate-700 hover:text-(--color-primary)",
    ].join(" ");

  /* Dropdown item */
  const dropCls = (path: string) =>
    [
      "block px-5 py-2.5 text-[12px] font-semibold uppercase tracking-wider transition-colors",
      isActive(path)
        ? "text-(--color-primary) bg-white"
        : "text-slate-600 hover:text-(--color-primary) hover:bg-slate-50",
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
      <div className="w-full bg-[#f0ede6] border-b border-[#e2ddd4] relative z-50">
        <div className="max-w-full mx-auto px-6 lg:px-12 h-10 flex items-center justify-between">
          {/* Left: welcome + socials */}
          <div className="flex items-center gap-5">
            <span className="hidden sm:block text-[12px] text-slate-500 font-medium tracking-wide">
              Welcome to Girganga Parivar Trust
            </span>
            <div className="flex items-center gap-3 text-slate-500">
              {[
                {
                  icon: <FaFacebookF size={11} />,
                  href: "https://www.facebook.com/profile.php?id=100083921712230",
                  label: "Facebook",
                },
                {
                  icon: <FaYoutube size={12} />,
                  href: "https://www.youtube.com/@girgangaparivartrust",
                  label: "YouTube",
                },
                {
                  icon: <FaInstagram size={12} />,
                  href: "https://www.instagram.com/girgangaparivartrust/",
                  label: "Instagram",
                },
                {
                  icon: <FaLinkedinIn size={11} />,
                  href: "https://in.linkedin.com/in/girganga-parivar-trust-450354287",
                  label: "LinkedIn",
                },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover:text-(--color-primary) transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: email · phone */}
          <div className="flex items-center gap-4 text-[12px] text-slate-500 font-medium">
            <a
              href="mailto:info@girgangaparivartrust.com"
              className="hidden md:flex items-center gap-1.5 hover:text-(--color-primary) transition-colors"
            >
              <FiMail size={15} className="text-(--color-secondary)" />
              info@girgangaparivartrust.com
            </a>
            <span className="hidden md:block text-slate-300">|</span>
            <a
              href="tel:+919409692693"
              className="flex items-center gap-1.5 hover:text-(--color-primary) transition-colors"
            >
              <FiPhone size={15} className="text-(--color-secondary)" />
              +91 94096 92693
            </a>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          MAIN NAV
      ══════════════════════════════════════════════ */}
      <nav
        className={`sticky top-0 w-full z-50 bg-white transition-all duration-300 ${
          scrolled ? "shadow-md" : "border-none"
        }`}
      >
        <div className="max-w-full mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center py-3">
            <Image
              src="/image/logo.png"
              alt="Gir Ganga Parivar Trust"
              width={66}
              height={66}
              className="object-contain"
              priority
              quality={75}
            />
            <span className="block h-px w-4 bg-slate-300" />
            <span className="text-[8px] font-black tracking-[0.28em] uppercase text-slate-400 whitespace-nowrap">
              Parivar Trust
            </span>
            <span className="block h-px w-4 bg-slate-300" />
          </Link>

          {/* Desktop Nav links */}
          <ul className="hidden lg:flex items-stretch">
            {/* HOME */}
            <li className="relative group">
              <Link href="/" className={linkCls("/")}>
                Home
                <span className={underline(isActive("/"))} />
              </Link>
            </li>

            {/* ABOUT US */}
            <li className="relative group">
              <Link href="/about-us" className={linkCls("/about-us")}>
                About Us
                <span className={underline(isActive("/about-us"))} />
              </Link>
            </li>

            {/* ✅ OUR WORK with dropdown */}
            <li
              className="relative"
              ref={workRef}
              onMouseEnter={() => setDesktopWorkOpen(true)}
              onMouseLeave={() => setDesktopWorkOpen(false)}
            >
              <Link
                href="/Our-Work"
                onClick={() => setDesktopWorkOpen(!desktopWorkOpen)}
                className={`${linkCls(isWorkActive ? "/Our-Work" : "")} gap-1 flex items-center`}
              >
                Our Work
                <FiChevronDown
                  size={11}
                  className={`mt-px transition-transform duration-200 ${
                    desktopWorkOpen ? "rotate-180" : ""
                  }`}
                />
                <span
                  className={underline(
                    isWorkActive || desktopWorkOpen,
                    false,
                  )}
                />
              </Link>

              <div className={dropPanel(desktopWorkOpen)}>
                <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-slate-100 rotate-45" />
                {[
                  { label: "Our Work", href: "/Our-Work" },
                  { label: "Checkdam", href: "/check-dam-creat" },
                  { label: "Borewell Recharge", href: "/borewell-recharge" },
                ].map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setDesktopWorkOpen(false)}
                    className={dropCls(href)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </li>

            {/* IMPACT */}
            <li className="relative group">
              <Link href="/impact" className={linkCls("/impact")}>
                Impact
                <span className={underline(isActive("/impact"))} />
              </Link>
            </li>

            {/* PARTNERS / CSR COLLABORATION */}
            <li className="relative group">
              <Link
                href="/partner-with-us-csr"
                className={linkCls("/partner-with-us-csr")}
              >
                PARTNERS/CSR COLLABORATION
                <span className={underline(isActive("/partner-with-us-csr"))} />
              </Link>
            </li>

            {/* MEDIA ▾ */}
            <li
              className="relative"
              ref={mediaRef}
              onMouseEnter={() => setDesktopMediaOpen(true)}
              onMouseLeave={() => setDesktopMediaOpen(false)}
            >
              <Link
                href="/media"
                onClick={() => setDesktopMediaOpen(!desktopMediaOpen)}
                className={`${linkCls(isMediaActive ? "/media" : "")} gap-1 flex items-center`}
              >
                Media/News
                <FiChevronDown
                  size={11}
                  className={`mt-px transition-transform duration-200 ${
                    desktopMediaOpen ? "rotate-180" : ""
                  }`}
                />
                <span
                  className={underline(
                    isMediaActive || desktopMediaOpen,
                    false,
                  )}
                />
              </Link>

              <div className={dropPanel(desktopMediaOpen)}>
                <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-slate-100 rotate-45" />
                {[
                  { label: "Photos", href: "/photos" },
                  { label: "Press Release", href: "/press-release" },
                  { label: "Videos", href: "/videos" },
                  { label: "Reports", href: "/reports" },
                ].map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setDesktopMediaOpen(false)}
                    className={dropCls(href)}
                  >
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

            {/* CONTACT */}
            <li className="relative group">
              <Link href="/contact" className={linkCls("/contact")}>
                GET INVOLVED
                <span className={underline(isActive("/contact"))} />
              </Link>
            </li>

            {/* DONATE */}
            <li className="flex items-center ml-5 pl-5 border-l border-slate-200 my-3">
              <Link
                href="/donate"
                className="btn-secondary relative inline-flex items-center justify-center
                  text-[11px] font-extrabold uppercase tracking-[0.15em] px-5 py-2
                  border border-(--color-primary) text-(--color-primary)
                  hover:border-transparent hover:text-white
                  rounded-sm overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-1">
                  Donate
                </span>
                <span className="btn-secondary-overlay"></span>
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden text-slate-800"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            title="Open menu"
          >
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
              className="fill-(--color-primary)"
            />
          </svg>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════
          MOBILE FULLSCREEN MENU
      ══════════════════════════════════════════════ */}
      <div
        className={`fixed inset-0 bg-white z-[9999] flex flex-col lg:hidden overflow-hidden
                       transition-all duration-500
                       ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}`}
      >
        {/* Mobile Top Bar */}
        <div className="w-full bg-[#f0ede6] border-b border-[#e2ddd4] relative z-50 shrink-0">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-10 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <span className="hidden sm:block text-[12px] text-slate-500 font-medium tracking-wide">
                Welcome to Gir Ganga Parivar Trust
              </span>
              <div className="flex items-center gap-3 text-slate-500">
                {[
                  {
                    icon: <FaFacebookF size={11} />,
                    href: "https://www.facebook.com/profile.php?id=100083921712230",
                    label: "Facebook",
                  },
                  {
                    icon: <FaYoutube size={12} />,
                    href: "https://www.youtube.com/@girgangaparivartrust",
                    label: "YouTube",
                  },
                  {
                    icon: <FaInstagram size={12} />,
                    href: "https://www.instagram.com/girgangaparivartrust/",
                    label: "Instagram",
                  },
                  {
                    icon: <FaTwitter size={11} />,
                    href: "https://x.com/GirgangaT71455",
                    label: "Twitter",
                  },
                ].map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="hover:text-(--color-primary) transition-colors"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 text-[12px] text-slate-500 font-medium">
              <a
                href="mailto:info@girgangaparivartrust.com"
                className="hidden md:flex items-center gap-1.5 hover:text-(--color-primary) transition-colors"
              >
                <FiMail size={15} className="text-(--color-secondary)" />
                info@girgangaparivartrust.com
              </a>
              <span className="hidden md:block text-slate-300">|</span>
              <a
                href="tel:+919409692693"
                className="flex items-center gap-1.5 hover:text-(--color-primary) transition-colors"
              >
                <FiPhone size={15} className="text-(--color-secondary)" />
                +91 94096 92693
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Header: Logo + Close */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 relative shrink-0">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex flex-col items-center"
          >
            <Image
              src="/image/logo.png"
              alt="Gir Ganga Parivar Trust"
              width={66}
              height={66}
              className="object-contain"
              quality={75}
            />
            <div className="flex items-center gap-1.5 mt-1">
              <span className="h-px w-4 bg-slate-300 block" />
              <span className="text-[8px] font-black tracking-[0.28em] uppercase text-slate-400">
                Parivar Trust
              </span>
              <span className="h-px w-4 bg-slate-300 block" />
            </div>
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="text-slate-600 hover:text-(--color-primary)"
          >
            <FiX size={28} />
          </button>

          <div className="absolute top-27 left-0 right-0 h-4 overflow-hidden pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 12"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,6 C150,0 300,12 450,6 C600,0 750,12 900,6 C1050,0 1200,12 1200,6 L1200,12 L0,12 Z"
                fill="#10b981"
                className="fill-(--color-primary)"
              />
            </svg>
          </div>
        </div>

        {/* Mobile Link list */}
        <ul className="flex-1 overflow-y-auto px-6 py-6 md:text-xl">
          {/* Home */}
          <li>
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`block py-3.5 font-bold border-b border-slate-50 tracking-wide ${
                isActive("/") ? "text-(--color-primary)" : "text-slate-800"
              }`}
            >
              Home
            </Link>
          </li>

          {/* About */}
          <li>
            <Link
              href="/about-us"
              onClick={() => setMenuOpen(false)}
              className={`block py-3.5 font-bold border-b border-slate-50 tracking-wide ${
                isActive("/about-us")
                  ? "text-(--color-primary)"
                  : "text-slate-800"
              }`}
            >
              About Us
            </Link>
          </li>

          {/* ✅ Our Work with mobile dropdown */}
          <li className="relative">
            <div className="flex items-center justify-between w-full py-3.5 border-b border-slate-50">
              <Link
                href="/Our-Work"
                onClick={() => {
                  setMenuOpen(false);
                  setMobileWorkOpen(false);
                }}
                className={`text-lg font-bold tracking-wide flex-1 ${
                  isWorkActive
                    ? "text-(--color-primary)"
                    : "text-slate-800"
                }`}
              >
                Our Work
              </Link>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileWorkOpen((prev) => !prev);
                }}
                className="pl-4 py-1"
              >
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    mobileWorkOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div>

            {/* Our Work Dropdown */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileWorkOpen ? "max-h-40 py-2" : "max-h-0"
              }`}
            >
              <ul className="pl-5 space-y-3 border-l-2 border-(--color-primary) mt-1">
                 <li>
                  <Link
                    href="/Our-Work"
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileWorkOpen(false);
                    }}
                    className="text-[15px] font-semibold text-slate-500"
                  >
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/check-dam-creat"
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileWorkOpen(false);
                    }}
                    className="text-[15px] font-semibold text-slate-500"
                  >
                    Checkdam
                  </Link>
                </li>
                <li>
                  <Link
                    href="/borewell-recharge"
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileWorkOpen(false);
                    }}
                    className="text-[15px] font-semibold text-slate-500"
                  >
                    Borewell Recharge
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Impact */}
          <li>
            <Link
              href="/impact"
              onClick={() => setMenuOpen(false)}
              className={`block py-3.5 font-bold border-b border-slate-50 tracking-wide ${
                isActive("/impact")
                  ? "text-(--color-primary)"
                  : "text-slate-800"
              }`}
            >
              Impact
            </Link>
          </li>

          {/* Partners / CSR */}
          <li>
            <Link
              href="/partner-with-us-csr"
              onClick={() => setMenuOpen(false)}
              className={`block py-3.5 font-bold border-b border-slate-50 tracking-wide ${
                isActive("/partner-with-us-csr")
                  ? "text-(--color-primary)"
                  : "text-slate-800"
              }`}
            >
              Partners / CSR Collaboration
            </Link>
          </li>

          {/* Media/News — uses mobileMediaOpen ONLY */}
          <li className="relative">
            <div className="flex items-center justify-between w-full py-3.5 border-b border-slate-50">
              <Link
                href="/media"
                onClick={() => {
                  setMenuOpen(false);
                  setMobileMediaOpen(false);
                }}
                className={`text-lg font-bold tracking-wide flex-1 ${
                  isMediaActive
                    ? "text-(--color-primary)"
                    : "text-slate-800"
                }`}
              >
                Media/News
              </Link>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileMediaOpen((prev) => !prev);
                }}
                className="pl-4 py-1"
              >
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    mobileMediaOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div>

            {/* Dropdown */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileMediaOpen ? "max-h-60 py-2" : "max-h-0"
              }`}
            >
              <ul className="pl-5 space-y-3 border-l-2 border-(--color-primary) mt-1">
                <li>
                  <Link
                    href="/photos"
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileMediaOpen(false);
                    }}
                    className="text-[15px] font-semibold text-slate-500"
                  >
                    Photos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press-release"
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileMediaOpen(false);
                    }}
                    className="text-[15px] font-semibold text-slate-500"
                  >
                    Press Release
                  </Link>
                </li>
                <li>
                  <Link
                    href="/videos"
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileMediaOpen(false);
                    }}
                    className="text-[15px] font-semibold text-slate-500"
                  >
                    Videos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/certificates"
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileMediaOpen(false);
                    }}
                    className="text-[15px] font-semibold text-slate-500"
                  >
                    Certificates
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Awards */}
          <li>
            <Link
              href="/awards"
              onClick={() => setMenuOpen(false)}
              className={`block py-3.5 font-bold border-b border-slate-50 tracking-wide ${
                isActive("/awards")
                  ? "text-(--color-primary)"
                  : "text-slate-800"
              }`}
            >
              Awards
            </Link>
          </li>

          {/* Contact */}
          <li>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className={`block py-3.5 text-lg font-bold border-b border-slate-50 tracking-wide ${
                isActive("/contact")
                  ? "text-(--color-primary)"
                  : "text-slate-800"
              }`}
            >
              Get Involved
            </Link>
          </li>
        </ul>

        {/* Bottom: contact info + donate CTA */}
        <div className="px-6 pb-8 pt-4 border-t border-slate-100 space-y-3 shrink-0">
          <a
            href="tel:+919409692693"
            className="flex items-center gap-3 text-slate-700 font-semibold text-sm"
          >
            <span className="bg-(--color-primary) text-white p-2 rounded-lg">
              <FiPhone size={15} />
            </span>
            +91 94096 92693
          </a>
          <a
            href="mailto:info@girgangaparivartrust.com"
            className="flex items-center gap-3 text-slate-700 font-semibold text-sm"
          >
            <span className="bg-(--color-primary) text-white p-2 rounded-lg">
              <FiMail size={15} />
            </span>
            info@girgangaparivartrust.com
          </a>
          <Link
            href="/donate"
            onClick={() => setMenuOpen(false)}
            className="mt-2 w-full block text-center border border-(--color-primary) text-(--color-primary)
                       hover:bg-(--color-primary) hover:text-white font-extrabold py-3
                       uppercase tracking-[0.15em] text-sm transition-colors rounded-sm"
          >
            Donate
          </Link>
        </div>
      </div>
    </>
  );
}