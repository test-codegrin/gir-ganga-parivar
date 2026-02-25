"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden bg-gradient-to-br from-[#0b1e38] via-[#102844] to-[#0e2235] font-sans">
      {/* Decorative water-wave top border */}
      <div className="w-full overflow-hidden -mb-0.5 leading-none">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full rotate-180 block"
        >
          <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
            fill="#0b1e38"
            opacity="0.5"
          />
          <path
            d="M0,40 C360,10 720,60 1080,20 C1260,5 1380,40 1440,30 L1440,60 L0,60 Z"
            fill="#0e2235"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Subtle background accent circles */}
      <div className="absolute top-[-80px] right-[-80px] w-80 h-80 rounded-full bg-gradient-radial from-[#38bdf8]/6 to-transparent pointer-events-none" />
      <div className="absolute bottom-14 left-[-60px] w-60 h-60 rounded-full bg-gradient-radial from-[#facc15]/5 to-transparent pointer-events-none" />

      <div className="relative container mx-auto px-6 pt-16 pb-10">
        {/* Top thin gold accent line */}
        <div className="h-0.5 mb-12 rounded-full bg-gradient-to-r from-transparent via-orange-500/80 to-transparent" />

        {/* Footer columns - centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-center items-start text-center">
          
          {/* Brand */}
          <div className="flex flex-col items-center text-center">
            <div className="flex flex-col items-center gap-3 mb-5">
              <div className="bg-white/7 rounded-lg p-2 border border-white/10">
                <Image
                  src="/image/logo.png"
                  alt="Girganga Parivar Trust"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <h2 className="text-white font-bold text-base leading-tight">
                Girganga <br />
                <span className="text-orange-500">Parivar Trust</span>
              </h2>
            </div>
            <p className="text-white text-sm leading-relaxed">
              Transforming Saurashtra through water conservation — building a
              sustainable future for generations to come.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6 justify-center">
              {[
                { icon: <FaFacebookF />, bg: "bg-[#1877f2]", label: "Facebook" },
                { icon: <FaTwitter />, bg: "bg-[#0ea5e9]", label: "Twitter" },
                { icon: <FaInstagram />, bg: "bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-600", label: "Instagram" },
                { icon: <FaYoutube />, bg: "bg-[#ef4444]", label: "YouTube" },
              ].map(({ icon, bg, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className={`${bg} w-9 h-9 rounded-lg flex items-center justify-center text-sm transition-transform transform hover:-translate-y-1`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <FooterColumn title="Quick Links" center>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/awards">Awards</FooterLink>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/gallery">Gallery</FooterLink>
          </FooterColumn>

          {/* Our Work */}
          <FooterColumn title="Our Work" center>
            <FooterItem>Checkdam Construction</FooterItem>
            <FooterItem>Community Impact</FooterItem>
            <FooterItem>Media Coverage</FooterItem>
            <FooterItem>Community Engagement</FooterItem>
          </FooterColumn>

          {/* Get Involved */}
          <FooterColumn title="Get Involved" center>
            <FooterItem>💛 Make a Donation</FooterItem>
            <FooterItem>🤝 Volunteer</FooterItem>
            <FooterItem>🏢 Corporate Partnership</FooterItem>
            <FooterItem>📬 Contact Us</FooterItem>
          </FooterColumn>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-5 border-t border-white/10 flex flex-wrap justify-center gap-2 text-white text-xs">
          <span>Registered Non-Profit Trust · All Rights Reserved</span>
          <span>
            <span className="text-red-400">♥</span>{" "}
            <span className="text-orange-500">Girganga Parivar Trust © 2026</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
  center = false,
}: {
  title: string;
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`flex flex-col ${center ? "items-center text-center" : ""}`}>
      <h3 className="text-orange-500 text-xl font-bold uppercase mb-5 flex items-center gap-2 justify-center">
        <span className="inline-block w-4 h-[2px] bg-orange-500 rounded-full" />
        {title}
      </h3>
      <ul className={`flex flex-col gap-3 ${center ? "items-center" : ""}`}>{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-white text-md transition-all hover:text-white hover:pl-1.5 inline-block"
      >
        {children}
      </Link>
    </li>
  );
}

function FooterItem({ children }: { children: React.ReactNode }) {
  return <li className="text-white text-sm">{children}</li>;
}