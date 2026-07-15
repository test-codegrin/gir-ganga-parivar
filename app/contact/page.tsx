"use client";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import SmoothScroll from "../../Component/SmothScrolling";

/* ─── Animation Variants ───────────────────────── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const slideIn: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ─── Icons ───────────────────────────────────────── */

function MapPinIcon({ filled = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.8}
      className="w-6 h-6"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle
        cx="12"
        cy="9"
        r="2.5"
        fill={filled ? "white" : "none"}
        stroke={filled ? "none" : "currentColor"}
      />
    </svg>
  );
}

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className="w-6 h-6"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 13a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className="w-6 h-6"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 8l10 6 10-6" />
  </svg>
);

const SendIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="w-4 h-4"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

/* ─── Contact Cards ───────────────────────────────── */

function ContactCards() {
  const cards = [
    {
      icon: <MapPinIcon filled />,
      label: "Address",
      lines: [
        "Decora Capital, 5th Floor, Nr. McDonalds, Above HDFC Bank, Kalawad Road, Rajkot - 360005, Gujarat",
      ],
      href: "https://maps.app.goo.gl/zbMrjJqd8u8XpQ1n9",
    },
    {
      icon: <PhoneIcon />,
      label: "Contact",
      lines: ["+91 94084 14568", "+91 94096 92693"],
      href: "#",
    },
    {
      icon: <MailIcon />,
      label: "Email",
      lines: ["info@girgangaparivartrust.com"],
      href: "#",
    },
  ];

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-10 "
    >
      {cards.map((card, i) => (
        <motion.div
          variants={fadeUp}
          key={i}
          className="group relative overflow-hidden rounded-2xl border border-(--color-primary) bg-(--color-tertiary)
      hover:bg-(--color-primary) transition-all duration-500
      p-6 flex flex-col gap-3 shadow-sm text-center"
        >
          {/* Icon */}
          <div
            className="w-16 h-16 rounded-full
  flex items-center justify-center mx-auto
  bg-(--color-primary)/10 group-hover:bg-white/20 
  text-(--color-primary) group-hover:text-white 
  transition-all duration-500"
          >
            {card.icon}
          </div>
          {/* Label */}
          <p
            className="text-xs font-bold tracking-[0.2em] uppercase text-(--color-primary)/60
        group-hover:text-white/70 transition-colors duration-500"
          >
            {card.label}
          </p>

          {/* Lines */}
          <div className="space-y-1">
            {card.lines.map((line, j) => (
              <p
                key={j}
                className="text-sm text-gray-700 group-hover:text-white leading-relaxed transition-colors duration-500"
              >
                {line}
              </p>
            ))}
          </div>

          {/* Arrow (ONLY clickable) */}
          <a
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto self-end w-8 h-8 rounded-full border border-[var(--color-primary)
        group-hover:border-white/40 flex items-center justify-center
        text-(--color-primary) group-hover:text-white transition-all duration-500"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-3.5 h-3.5"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ─── Input Style ───────────────────────────────── */

const inputClass =
  "w-full px-4 py-3 rounded-lg border-0 border-b-2 border-(--color-primary) bg-(--color-tertiary) text-gray-800 text-sm placeholder-gray-400  focus:outline-none transition-all duration-300";

/* ─── Label Input Wrapper ───────────────────────── */

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <label className="block text-[10px] font-bold tracking-[0.18em] uppercase text-(--color-primary) mb-1 ml-1">
        {label}
      </label>
      {children}
    </div>
  );
}

/* ─── Contact Form ───────────────────────────────── */

function ContactForm() {
  return (
    <motion.form
      variants={fadeUp}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="space-y-5 "
    >
      <div className="grid grid-cols-2 gap-4">
        <Field label="Name">
          <input required placeholder="Your name" className={inputClass} />
        </Field>
        <input
          required
          type="email"
          placeholder="your@email.com"
          className={inputClass}
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
          onInvalid={(e) =>
            e.currentTarget.setCustomValidity(
              "Please enter a valid email address",
            )
          }
          onInput={(e) => e.currentTarget.setCustomValidity("")}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Phone">
          <input
            type="tel"
            required
            placeholder="Enter 10 digit number"
            className={inputClass}
            maxLength={10}
            pattern="[0-9]{10}"
            onInput={(e) => {
              const input = e.currentTarget;
              input.value = input.value.replace(/\D/g, "").slice(0, 10);
            }}
          />
        </Field>
        <Field label="Subject">
          <input placeholder="Topic" className={inputClass} />
        </Field>
      </div>
      <Field label="Message">
        <textarea
          rows={4}
          placeholder="Write your message..."
          className={inputClass + " resize-none pt-2"}
        />
      </Field>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <button
          type="submit"
          className="btn-secondary w-full group relative inline-flex items-center justify-center gap-2
            font-semibold text-sm px-8 py-4 cursor-pointer rounded-xl
            bg-(--color-secondary) text-(--color-primary)
            hover:text-(--color-secondary) overflow-hidden tracking-wide"
        >
          <span className="relative z-10 flex gap-2 items-center">
            Send Message <SendIcon />
          </span>
          <span className="btn-secondary-overlay" />
        </button>
      </motion.div>
    </motion.form>
  );
}

/* ─── Chevron Icon ───────────────────────────────── */

const ChevronIcon = ({ open }: { open: boolean }) => (
  <motion.svg
    animate={{ rotate: open ? 180 : 0 }}
    transition={{ duration: 0.3 }}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="w-4 h-4 text-gray-400"
  >
    <path d="M6 9l6 6 6-6" />
  </motion.svg>
);

/* ─── Volunteer Form ───────────────────────────────── */

function VolunteerForm() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const options = [
    "Water Conservation",
    "Environment Activities",
    "Event Support",
  ];

  return (
    <motion.form
      variants={fadeUp}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="space-y-5"
    >
      <div className="grid grid-cols-2 gap-4">
        <Field label="Full Name">
          <input required placeholder="Your full name" className={inputClass} />
        </Field>
        <input
          required
          type="email"
          placeholder="your@email.com"
          className={inputClass}
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
          onInvalid={(e) =>
            e.currentTarget.setCustomValidity(
              "Please enter a valid email address",
            )
          }
          onInput={(e) => e.currentTarget.setCustomValidity("")}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Phone">
          <input
            type="tel"
            required
            placeholder="Enter 10 digit number"
            className={inputClass}
            maxLength={10}
            pattern="[0-9]{10}"
            onInput={(e) => {
              const input = e.currentTarget;
              input.value = input.value.replace(/\D/g, "").slice(0, 10);
            }}
          />
        </Field>
        <Field label="City">
          <input placeholder="Your city" className={inputClass} />
        </Field>
      </div>

      <Field label="Area of Interest">
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={`${inputClass} flex items-center justify-between w-full text-left`}
          >
            <span className={selected ? "text-gray-800" : "text-gray-400"}>
              {selected || "Select Interest"}
            </span>
            <ChevronIcon open={open} />
          </button>
          {open && (
            <ul className="absolute z-50 w-full mt-1 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden">
              {options.map((opt) => (
                <li
                  key={opt}
                  onClick={() => {
                    setSelected(opt);
                    setOpen(false);
                  }}
                  className="px-4 py-3 text-sm cursor-pointer hover:bg-(--color-primary)/5 transition-colors"
                >
                  {opt}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Field>

      <Field label="Why Volunteer?">
        <textarea
          rows={4}
          placeholder="Tell us your motivation..."
          className={inputClass + " resize-none pt-2"}
        />
      </Field>

      <button
        type="submit"
        className="btn-secondary w-full group relative inline-flex items-center justify-center gap-2
          font-semibold text-sm px-8 py-4 cursor-pointer rounded-xl
          bg-(--color-secondary) text-(--color-primary)
          hover:text-(--color-secondary) overflow-hidden tracking-wide"
      >
        <span className="relative z-10 flex gap-2 items-center">
          Submit Volunteer Application
        </span>
        <span className="btn-secondary-overlay" />
      </button>
    </motion.form>
  );
}

/* ─── Partnership Form ───────────────────────────────── */

function PartnershipForm() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const options = [
    "CSR Partnership",
    "Event Collaboration",
    "Sponsorship",
    "Donation Partnership",
  ];

  return (
    <motion.form
      variants={fadeUp}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="space-y-5"
    >
      <div className="grid grid-cols-2 gap-4">
        <Field label="Name">
          <input required placeholder="Your name" className={inputClass} />
        </Field>
        <Field label="Organization">
          <input
            required
            placeholder="Company / Trust"
            className={inputClass}
          />
        </Field>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input
          required
          type="email"
          placeholder="your@email.com"
          className={inputClass}
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
          onInvalid={(e) =>
            e.currentTarget.setCustomValidity(
              "Please enter a valid email address",
            )
          }
          onInput={(e) => e.currentTarget.setCustomValidity("")}
        />
        <Field label="Phone">
          <input
            type="tel"
            required
            placeholder="Enter 10 digit number"
            className={inputClass}
            maxLength={10}
            pattern="[0-9]{10}"
            onInput={(e) => {
              const input = e.currentTarget;
              input.value = input.value.replace(/\D/g, "").slice(0, 10);
            }}
          />
        </Field>
      </div>

      <Field label="Partnership Type">
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={`${inputClass} flex items-center justify-between w-full text-left`}
          >
            <span className={selected ? "text-gray-800" : "text-gray-400"}>
              {selected || "Select Partnership Type"}
            </span>
            <ChevronIcon open={open} />
          </button>
          {open && (
            <ul className="absolute z-50 w-full mt-1 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden">
              {options.map((opt) => (
                <li
                  key={opt}
                  onClick={() => {
                    setSelected(opt);
                    setOpen(false);
                  }}
                  className="px-4 py-3 text-sm cursor-pointer hover:bg-(--color-primary)/5 transition-colors"
                >
                  {opt}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Field>

      <Field label="Proposal Details">
        <textarea
          rows={4}
          placeholder="Describe your partnership proposal..."
          className={inputClass + " resize-none pt-2"}
        />
      </Field>

      <button
        type="submit"
        className="btn-secondary w-full group relative inline-flex items-center justify-center gap-2
          font-semibold text-sm px-8 py-4 cursor-pointer rounded-xl
          bg-(--color-secondary) text-(--color-primary)
          hover:text-(--color-secondary) overflow-hidden tracking-wide"
      >
        <span className="relative z-10 flex gap-2 items-center">
          Submit Partnership Request
        </span>
        <span className="btn-secondary-overlay" />
      </button>
    </motion.form>
  );
}

/* ─── Main Page ───────────────────────────────── */

export default function Contact() {
  const [formType, setFormType] = useState("contact");

  const tabs = [
    { key: "contact", label: "Contact Us" },
    { key: "volunteer", label: "Volunteer" },
    { key: "partnership", label: "Partnership" },
  ];

  return (
    <>
      <SmoothScroll>
        {/* ── Hero Header ── */}
        <div className="container relative overflow-hidden">
          {/* Decorative geometric lines */}

          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className=" text-center space-y-6 relative"
          >
            <motion.p
              variants={fadeUp}
              className="text-(--color-secondary) text-[10px] font-black tracking-[0.35em] uppercase flex items-center justify-center gap-3"
            >
              <span className="w-10 h-px bg-(--color-secondary)" />
              Form <span className="w-10 h-px bg-(--color-secondary)" />
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl font-black leading-tight"
            >
              <span className="">
                Contact <span className="text-(--color-primary)">US</span>
              </span>{" "}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed"
            >
              Submit your queries here and we will get back to you soon. We'd
              love to hear from you.
            </motion.p>

            {/* Social Icons */}
            <motion.div variants={fadeUp} className="flex gap-3 justify-center">
              {[
                {
                  icon: <FaFacebookF size={12} />,
                  href: "https://www.facebook.com/profile.php?id=100083921712230",
                  label: "Facebook",
                },
                {
                  icon: <FaLinkedinIn size={12} />,
                  href: "https://in.linkedin.com/in/girganga-parivar-trust-450354287",
                  label: "LinkedIn",
                },
                {
                  icon: <FaInstagram size={12} />,
                  href: "https://www.instagram.com/girgangaparivartrust/",
                  label: "Instagram",
                },
                {
                  icon: <FaYoutube size={12} />,
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
                >
                  <span
                    className="w-9 h-9 rounded-lg bg-(--color-tertiary) border border-(--color-primary)/30
                      flex items-center justify-center text-(--color-primary)
                      hover:bg-(--color-primary) hover:text-white transition-all duration-300"
                  >
                    {icon}
                  </span>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* ── Contact Section ── */}
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-7xl mx-auto"
          >
            {/* Info Cards */}
            <ContactCards />

            {/* Main Card */}
            <div className="rounded-3xl border border-gray-100 shadow-xl overflow-hidden bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left — Map */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="relative min-h-[500px]"
                >
                  <iframe
                    src="https://www.google.com/maps?q=GirGanga+Parivar+Trust+Rajkot&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "500px", display: "block" }}
                    loading="lazy"
                  />

                  {/* Overlay label */}
                  <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm rounded-xl px-4  py-2.5 shadow-md">
                    <p className="text-[10px] font-black tracking-widest uppercase text-(--color-primary)/60 mb-0.5">
                      Location
                    </p>
                    <p className="text-xs font-bold text-gray-800">
                      Girganga Parivar Trust, Rajkot
                    </p>
                  </div>
                </motion.div>

                {/* Right — Forms */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="container flex flex-col bg-(--color-tertiary)"
                >
                  {/* Tab switcher */}
                  <div className="flex flex-wrap  gap-1 mb-8 p-1 bg-white rounded-xl border border-(--color-primary) shadow-sm">
                    {tabs.map((tab) => (
                      <button
                        key={tab.key}
                        onClick={() => setFormType(tab.key)}
                        className={`relative flex-1 px-3 py-2.5 border border-(--color-primary) rounded-lg text-xs md:text-base font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                          formType === tab.key
                            ? "bg-(--color-primary) text-white shadow-sm"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Form title */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={formType + "-header"}
                      variants={slideIn}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="mb-6 gap-5 flex"
                    >
                      <h2 className="text-xl font-black text-gray-800">
                        {formType === "contact" && "Send us a Message"}
                        {formType === "volunteer" && "Join as a Volunteer"}
                        {formType === "partnership" && "Propose a Partnership"}
                      </h2>
                      <p className="text-xs text-gray-400 mt-1">
                        {formType === "contact"}
                        {formType === "volunteer"}
                        {formType === "partnership"}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    {formType === "contact" && <ContactForm key="contact" />}
                    {formType === "volunteer" && (
                      <VolunteerForm key="volunteer" />
                    )}
                    {formType === "partnership" && (
                      <PartnershipForm key="partnership" />
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </SmoothScroll>
    </>
  );
}
