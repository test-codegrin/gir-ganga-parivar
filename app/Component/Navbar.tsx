"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300
      ${scrolled ? "bg-gray-900/95 shadow-lg" : "bg-transparent"}
    `}
    >
      <div className="container section-padding-header mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Image
          src="/image/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="w-20 h-20 object-contain"
        />

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-white font-semibold text-lg lg:text-xl xl:text-2xl items-center">
          <li>
            <Link href="/">Home</Link>
          </li>

          {/* OUR WORK – DESKTOP (HOVER) */}
          <li className="relative">
            <button
              onClick={() => {
                setWorkOpen(!workOpen);
                setMediaOpen(false); // close other menu
              }}
              className="flex items-center gap-1 cursor-pointer text-white"
            >
              Our Work
              <FiChevronDown
                className={`transition ${workOpen ? "rotate-180" : ""}`}
              />
            </button>

            {workOpen && (
              <ul className="absolute left-0 top-full mt-3 w-64 bg-white text-gray-800 rounded-xl shadow-xl">
                <li className="px-5 py-3 hover:bg-gray-100">
                  <Link href="/our-work/check-dams">Impact</Link>
                </li>
              </ul>
            )}
          </li>

          {/* MEDIA – DESKTOP (HOVER) */}
          <li className="relative">
            <button
              onClick={() => {
                setMediaOpen(!mediaOpen);
                setWorkOpen(false); // close other menu
              }}
              className="flex items-center gap-1 cursor-pointer text-white"
            >
              Media
              <FiChevronDown
                className={`transition ${mediaOpen ? "rotate-180" : ""}`}
              />
            </button>

            {mediaOpen && (
              <ul className="absolute left-0 top-full mt-3 w-56 bg-white text-gray-800 rounded-xl shadow-xl">
                <li className="px-5 py-3 hover:bg-gray-100">
                  <Link href="/media/news">Photos</Link>
                </li>
                <li className="px-5 py-3 hover:bg-gray-100">
                  <Link href="/media/gallery">Press Release</Link>
                </li>
                <li className="px-5 py-3 hover:bg-gray-100">
                  <Link href="/media/videos">Videos</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/awards">Awards</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* MOBILE ICON */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 text-white px-6 pb-6">
          <ul className="flex flex-col gap-4 text-lg">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            {/* OUR WORK – MOBILE (CLICK) */}
            <li>
              <button
                onClick={() => setWorkOpen(!workOpen)}
                className="flex justify-between w-full items-center"
              >
                Our Work
                <FiChevronDown
                  className={`transition ${workOpen ? "rotate-180" : ""}`}
                />
              </button>

              {workOpen && (
                <ul className="ml-4 mt-2 space-y-2 text-gray-300">
                  <li>
                    <Link
                      href="/our-work/check-dams"
                      onClick={() => setMenuOpen(false)}
                    >
                      Check Dams
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/our-work/borewell-recharge"
                      onClick={() => setMenuOpen(false)}
                    >
                      Borewell Recharge
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/our-work/percolation-pits"
                      onClick={() => setMenuOpen(false)}
                    >
                      Percolation Pits
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* MEDIA – MOBILE (CLICK) */}
            <li>
              <button
                onClick={() => setMediaOpen(!mediaOpen)}
                className="flex justify-between w-full items-center"
              >
                Media
                <FiChevronDown
                  className={`transition ${mediaOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mediaOpen && (
                <ul className="ml-4 mt-2 space-y-2 text-gray-300">
                  <li>
                    <Link href="/media/news" onClick={() => setMenuOpen(false)}>
                      News
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/media/gallery"
                      onClick={() => setMenuOpen(false)}
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/media/videos"
                      onClick={() => setMenuOpen(false)}
                    >
                      Videos
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/awards" onClick={() => setMenuOpen(false)}>
                Awards
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
