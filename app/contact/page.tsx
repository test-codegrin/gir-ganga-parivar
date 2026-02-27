"use client";
import { useState } from "react";

// ─── Icons ────────────────────────────────────────────────────────────────────
const MapPinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className="w-5 h-5"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);
const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className="w-5 h-5"
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
    className="w-5 h-5"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 8l10 6 10-6" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="w-4 h-4"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth={2.5}
    className="w-9 h-9"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="w-4 h-4"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ContactCard {
  icon: React.ReactNode;
  label: string;
  lines: string[];
  action: { text: string; href: string };
  accent: string;
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroBanner() {
  return (
    <section className="relative pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/image/Contact/Hero_Img.png"
          alt="Water conservation lake - Gujarat"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* Multi-layer overlay for depth + text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-800/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-950/60 via-transparent to-cyan-950/40" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
        <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight mb-5">
          Let&apos;s Build a <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tealBrand">
            Water-Secure
          </span>{" "}
          Future
        </h1>

        <p className="text-slate-300 text-lg max-w-xl mx-auto font-light leading-relaxed">
          Have a question, want to volunteer, or explore CSR partnerships?
          We&apos;d love to hear from you.
        </p>
      </div>
    </section>
  );
}

// ─── Contact Info Cards ───────────────────────────────────────────────────────
function ContactCards() {
  const cards: ContactCard[] = [
    {
      icon: <MapPinIcon />,
      label: "Visit Us",
      lines: [
        "12 - Sunstar Chamber, Ghanshyam Nagar",
        "Main Road, B/H Crystal Mall",
        "Rajkot – 360005, Gujarat",
      ],
      action: { text: "Get Directions", href: "https://maps.app.goo.gl/zbMrjJqd8u8XpQ1n9" },
      accent: "from-teal-500 to-emerald-500",
    },
    {
      icon: <PhoneIcon />,
      label: "Call Us",
      lines: ["+91 94096 92693", "+91 94084 14568"],
      action: { text: "Call Now", href: "tel:+919409692693" },
      accent: "from-cyan-500 to-teal-500",
    },
    {
      icon: <MailIcon />,
      label: "Email Us",
      lines: ["info@girgangaparivartrust.com"],
      action: { text: "Send Email", href: "mailto:info@girgangaparivartrust.com" },
      accent: "from-sky-500 to-cyan-500",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards.map((c, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-2xl shadow-xl border border-slate-100 p-6 group hover:-translate-y-1 transition-transform duration-300 bg-white cursor-pointer"
          >
            {/* ── Left-to-right fill on hover ── */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${c.accent} translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out`}
            />

            {/* ── Icon box ── */}
            <div className="relative z-10">
              <div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${c.accent} group-hover:bg-white/20 group-hover:bg-none flex items-center justify-center text-white mb-4 shadow-md transition-all duration-300`}
              >
                {c.icon}
              </div>

              {/* Label */}
              <p className="text-xs font-bold text-slate-400 group-hover:text-white/70 uppercase tracking-widest mb-2 transition-colors duration-300">
                {c.label}
              </p>

              {/* Lines */}
              {c.lines.map((l, j) => (
                <p key={j} className="text-slate-700 group-hover:text-white text-sm leading-relaxed transition-colors duration-300">
                  {l}
                </p>
              ))}

              {/* Action link */}
              <a
                href={c.action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-teal-600 group-hover:text-white text-sm font-semibold hover:gap-2.5 transition-all duration-300"
              >
                {c.action.text} <ArrowRightIcon />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Contact Form ─────────────────────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Replace with your actual form submission logic / API call
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  const subjects = [
    "General Inquiry",
    "Volunteer Opportunities",
    "Corporate / CSR Partnership",
    "Donation & Fundraising",
    "Media & Press",
    "Other",
  ];

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-shadow bg-slate-50 focus:bg-white";

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        {/* ── Left: Copy + Stats ── */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <span className="text-teal-600 text-xs font-bold uppercase tracking-widest">
              Drop us a line
            </span>
            <h2 className="text-4xl font-black text-slate-900 mt-2 leading-tight">
              We&apos;d love to <br /> hear from you
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full mt-4"></div>
          </div>

          <p className="text-slate-500 leading-relaxed text-sm">
            Whether you want to support our mission, collaborate on a water
            conservation project, or simply learn more — reach out and
            we&apos;ll respond promptly.
          </p>

          {/* Socials */}
          <div>
            <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-3">
              Follow Our Journey
            </p>
            <div className="flex items-center gap-3">
              {[
                {
                  icon: <FacebookIcon />,
                  href: "https://www.facebook.com/profile.php?id=100083921712230",
                  bg: "bg-blue-600",
                },
                {
                  icon: <TwitterIcon />,
                  href: "https://x.com/GirgangaT71455",
                  bg: "bg-sky-500",
                },
                {
                  icon: <InstagramIcon />,
                  href: "https://www.instagram.com/girgangaparivartrust/",
                  bg: "bg-pink-600",
                },
                {
                  icon: <YoutubeIcon />,
                  href: "https://www.youtube.com/@girgangaparivartrust",
                  bg: "bg-red-600",
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${s.bg} w-9 h-9 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            {[
              { val: "200+", label: "Ponds Built" },
              { val: "1,11,111", label: "Vision Target" },
              { val: "Gujarat", label: "Primary Region" },
              { val: "2025", label: "CSR Award" },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-teal-50 border border-teal-100 rounded-xl p-4"
              >
                <p className="text-2xl font-black text-teal-700">{s.val}</p>
                <p className="text-slate-500 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Form ── */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8">
            {sent ? (
              /* Success State */
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckIcon />
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-2">
                  Message Sent!
                </h3>
                <p className="text-slate-500 mb-6">
                  Thank you for reaching out. We&apos;ll get back to you within
                  24–48 hours.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      subject: "",
                      message: "",
                    });
                  }}
                  className="bg-teal-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Dilip Sakhiya"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98000 00000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <select
                      required
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      aria-label="Subject"
                      className={inputClass + " appearance-none cursor-pointer"}
                    >
                      <option value="">Select a topic…</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Your Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your inquiry, project, or how you'd like to get involved..."
                    className={inputClass + " resize-none"}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-teal-200 hover:shadow-teal-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message <ArrowRightIcon />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Map Section ──────────────────────────────────────────────────────────────
function MapSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative">
        {/* Floating info card */}
        <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur rounded-2xl shadow-lg px-4 py-3 border border-teal-100">
          <p className="text-xs font-bold text-teal-700 uppercase tracking-widest">
            📍 Our Office
          </p>
          <p className="text-slate-700 text-sm font-semibold mt-0.5">
            Rajkot, Gujarat 360005
          </p>
          <a
            href="https://maps.app.goo.gl/zbMrjJqd8u8XpQ1n9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 text-xs font-semibold hover:underline"
          >
            Open in Maps →
          </a>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.2!2d70.7526!3d22.2829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca15b1d3f481%3A0xd82fa04b1c40e85e!2sGirganga%20Parivar%20Trust!5e0!3m2!1sen!2sin!4v1680000000000"
          width="100%"
          height="420"
          style={{ border: 0, filter: "saturate(1.1) contrast(1.05)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Gir Ganga Parivar Trust Location"
        />
      </div>
    </section>
  );
}

// ─── Page Export ──────────────────────────────────────────────────────────────
export default function Contact() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroBanner />
        <ContactCards />
        <ContactForm />
        <MapSection />
      </main>
    </div>
  );
}
