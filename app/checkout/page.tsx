"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import SmoothScroll from "../../Component/SmothScrolling";
import { MdExpandLess } from "react-icons/md";

type CartItem = {
  id: string;
  title: string;
  amount: string;
  img: string;
  quantity: number;
};

const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

export default function DonationCheckout() {
  const [cartItem, setCartItem] = useState<CartItem | null>(null);
  const [mounted, setMounted] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [hideLeaderboard, setHideLeaderboard] = useState(false);
  const [open, setOpen] = useState(false);
  const [stateOpen, setStateOpen] = useState(false);

  // Form Fields State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("India");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [stateName, setStateName] = useState("Gujarat");
  const [pinCode, setPinCode] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const saved = sessionStorage.getItem("cartItem");
    if (!saved) return;
    Promise.resolve().then(() => {
      setCartItem(JSON.parse(saved));
      setMounted(true);
    });
  }, []);

  if (!mounted) return null;

  if (!cartItem) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-5 bg-(--color-tertiary)">
        <div className="w-20 h-20 rounded-full bg-white border-2 border-[var(--color-dark)] flex items-center justify-center shadow-md">
          <span className="text-4xl">🛒</span>
        </div>
        <h2 className="text-2xl font-black text-gray-900">
          No donation item found
        </h2>
        <Link
          href="/donate"
          className="bg-(--color-primary) text-white px-8 py-3 rounded-2xl font-black text-sm hover:bg-[#007fa3] transition-all shadow-lg"
        >
          Browse Donations →
        </Link>
      </div>
    );
  }

  const rawAmount = Number(String(cartItem.amount).replace(/[,₹\s]/g, ""));
  const formatted = (n: number) => "₹" + n.toLocaleString("en-IN");

  const inputBase =
    "w-full border border-[var(--color-dark)] rounded-xl px-4 py-3 text-sm bg-(--color-tertiary) focus:bg-white focus:ring-2 focus:ring-(--color-primary) focus:border-(--color-primary) outline-none transition-all duration-200 text-gray-800 placeholder-gray-400";
  const labelBase =
    "block text-[10px] font-black text-gray-400 uppercase tracking-[0.25em] mb-1.5";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Validate inputs
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !phone.trim() ||
      !email.trim() ||
      !addressLine1.trim() ||
      !city.trim() ||
      !pinCode.trim()
    ) {
      setErrorMsg("Please fill out all required fields marked with *.");
      return;
    }

    if (phone.length !== 10) {
      setErrorMsg("Please enter a valid 10-digit phone number.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    if (!agreedTerms) {
      setErrorMsg("You must agree to the terms and conditions to proceed.");
      return;
    }

    setLoading(true);

    try {
      const fullAddress = addressLine2.trim()
        ? `${addressLine1.trim()}, ${addressLine2.trim()}`
        : addressLine1.trim();

      const response = await fetch("/api/payment/initiate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: rawAmount,
          title: cartItem.title,
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          address: fullAddress,
          city: city.trim(),
          state: stateName,
          pinCode: pinCode.trim(),
        }),
      });

      const resData = await response.json();

      if (resData.status === 1) {
        // Redirect to Easebuzz Hosted Page
        const payUrl = resData.payUrl;
        if (!payUrl) {
          setErrorMsg("Invalid payment gateway environment configuration.");
          setLoading(false);
          return;
        }
        window.location.href = payUrl;
      } else {
        setErrorMsg(resData.error || "Failed to initiate payment. Please try again.");
        setLoading(false);
      }
    } catch (err: any) {
      console.error("Checkout submit error:", err);
      setErrorMsg("An unexpected error occurred. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <SmoothScroll>
      <div className=" min-h-screen bg-(--color-tertiary)">
        {/* ── Progress Bar ── */}

        <div className="container bg-white border-b border-[var(--color-dark)] container">
          <div className="mx-auto justify-self-center items-center">
            <p className="text-(--color-secondary) text-[10px] font-black uppercase tracking-[0.35em] flex items-center justify-center gap-2 mb-2">
              <span className="w-5 h-px bg-(--color-secondary)" />
              Donation Check Out
              <span className="w-5 h-px bg-(--color-secondary)" />
            </p>
            <div className="flex items-baseline justify-center  gap-3">
              <h1 className="text-3xl md:text-4xl font-black text-gray-900  tracking-tight">
                Check Out
              </h1>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className=" max-w-6xl mx-auto grid lg:grid-cols-5">
          {/* ── LEFT FORM ── */}
          <div className="lg:col-span-3 space-y-6 container">
            {/* Personal Info */}
            <div className="bg-white rounded-3xl border border-[var(--color-dark)] shadow-sm overflow-hidden">
              <div className="bg-(--color-primary) px-7 py-5 flex items-center gap-3">
                <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg">👤</span>
                </div>
                <div>
                  <h2 className="text-white font-black text-base">
                    Personal Information
                  </h2>
                  <p className="text-white/70 text-xs mt-0.5">
                    Fill in your details below
                  </p>
                </div>
              </div>

              <div className="px-3 lg:px-7 py-7 space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelBase}>
                      First Name{" "}
                      <span className="text-red-400 normal-case tracking-normal">
                        *
                      </span>
                    </label>
                    <input
                      className={inputBase}
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className={labelBase}>
                      Last Name{" "}
                      <span className="text-red-400 normal-case tracking-normal">
                        *
                      </span>
                    </label>
                    <input
                      className={inputBase}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className={labelBase}>
                    Company Name{" "}
                    <span className="text-gray-300 normal-case tracking-normal font-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    className={inputBase}
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelBase}>
                      Phone{" "}
                      <span className="text-red-400 normal-case tracking-normal">
                        *
                      </span>
                    </label>

                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-bold">
                        +91
                      </span>

                      <input
                        type="text"
                        className={`${inputBase} pl-12`}
                        maxLength={10}
                        inputMode="numeric"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelBase}>
                      Email Address{" "}
                      <span className="text-red-400 normal-case tracking-normal">
                        *
                      </span>
                    </label>
                    <input
                      className={inputBase}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Billing Address */}
            <div className="bg-white rounded-3xl border border-[var(--color-dark)] shadow-sm overflow-hidden">
              <div className="bg-(--color-primary) px-7 py-5 flex items-center gap-3">
                <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg">📍</span>
                </div>
                <div>
                  <h2 className="text-white font-black text-base">
                    Billing Address
                  </h2>
                  <p className="text-white/70 text-xs mt-0.5">
                    Required for donation receipt
                  </p>
                </div>
              </div>
              <div className="w-full px-3 lg:px-7 py-7 space-y-5">
                <label className={`${labelBase} block mb-1`}>
                  Country / Region{" "}
                  <span className="text-red-400 normal-case tracking-normal">
                    *
                  </span>
                </label>

                <div className="relative">
                  <select
                    className={`
      ${inputBase}
      w-full
      appearance-none
      pr-10
      h-12
      leading-tight
      focus:outline-none focus:ring-2 focus:ring-(--color-primary)
    `}
                    value={country}
                    onMouseDown={() => setOpen((prev) => !prev)}
                    onBlur={() => setOpen(false)}
                    onChange={(e) => {
                      setCountry(e.target.value);
                      setOpen(false);
                    }}
                  >
                    <option value="India">India</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="Indonesia">Indonesia</option>
                  </select>

                  {/* Animated Arrow */}
                  <div
                    className={`
      pointer-events-none absolute inset-y-0 right-3 flex items-center 
      text-gray-500 text-sm transition-transform duration-200
      ${open ? "rotate-180" : "rotate-0"}
    `}
                  >
                    <MdExpandLess className="h-5 w-5" />
                  </div>
                </div>

                <div>
                  <label className={labelBase}>
                    Street Address{" "}
                    <span className="text-red-400 normal-case tracking-normal">
                      *
                    </span>
                  </label>
                  <input
                    className={inputBase}
                    value={addressLine1}
                    onChange={(e) => setAddressLine1(e.target.value)}
                    required
                  />
                  <input
                    className={`${inputBase} mt-3`}
                    value={addressLine2}
                    onChange={(e) => setAddressLine2(e.target.value)}
                    placeholder="Apartment, suite, unit, etc. (optional)"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                  <div>
                    <label className={labelBase}>
                      City{" "}
                      <span className="text-red-400 normal-case tracking-normal">
                        *
                      </span>
                    </label>
                    <input
                      className={inputBase}
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label className={labelBase}>
                      State{" "}
                      <span className="text-red-400 normal-case tracking-normal">
                        *
                      </span>
                    </label>

                    <div className="relative">
                      <select
                        className={`${inputBase} appearance-none pr-10`}
                        value={stateName}
                        onMouseDown={() => setStateOpen((prev) => !prev)}
                        onBlur={() => setStateOpen(false)}
                        onChange={(e) => {
                          setStateName(e.target.value);
                          setStateOpen(false);
                        }}
                      >
                        {INDIAN_STATES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>

                      {/* Animated Arrow */}
                      <div
                        className={`
        pointer-events-none absolute inset-y-0 right-3 flex items-center
        text-gray-500 text-sm transition-transform duration-200
        ${stateOpen ? "rotate-180" : "rotate-0"}
      `}
                      >
                        <MdExpandLess />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className={labelBase}>
                      PIN Code{" "}
                      <span className="text-red-400 normal-case tracking-normal">
                        *
                      </span>
                    </label>

                    <input
                      type="text"
                      className={inputBase}
                      maxLength={6}
                      inputMode="numeric"
                      value={pinCode}
                      onChange={(e) => setPinCode(e.target.value.replace(/[^0-9]/g, ""))}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT SUMMARY ── */}
          <div className="lg:col-span-2 container">
            <div className="sticky top-6 space-y-4">
              {/* Donation Summary */}
              <div className="bg-white rounded-3xl border border-[var(--color-dark)] shadow-sm overflow-hidden">
                <div className="bg-(--color-primary) px-6 py-4 flex items-center gap-2">
                  <div className="w-1 h-5 bg-white/50 rounded-full" />
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
                    Donation Summary
                  </h3>
                </div>

                <div className="px-3 lg:px-7  p-6">
                  {/* Item row */}
                  <div className="flex items-center gap-4 pb-5 border-b border-[var(--color-dark)]">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-[var(--color-dark)] shrink-0 bg-(--color-tertiary)">
                      <Image src={cartItem.img}
                        alt={cartItem.title}
                        width={100}
                        height={100}
                        className="object-cover rounded-2xl h-14" quality={75} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-black text-gray-900 leading-snug line-clamp-2">
                        {cartItem.title}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-1">
                        One-time donation
                      </p>
                    </div>
                    <span className="text-sm font-black text-(--color-primary) shrink-0">
                      {formatted(rawAmount)}
                    </span>
                  </div>

                  {/* Breakdown */}
                  <div className="pt-4 space-y-3">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Subtotal</span>
                      <span className="font-bold text-gray-700">
                        {formatted(rawAmount)}
                      </span>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="mt-4 bg-(--color-tertiary) border border-[var(--color-dark)] rounded-2xl px-5 py-4 flex justify-between items-center">
                    <span className="text-sm font-black text-gray-700 uppercase tracking-wider">
                      Total
                    </span>
                    <span className="text-2xl font-black text-(--color-primary) tabular-nums">
                      {formatted(rawAmount)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-3xl border border-[var(--color-dark)] shadow-sm px-3 lg:px-7 py-5">
                <p className={labelBase}>Payment Method</p>
                <div className="flex items-center gap-3 bg-(--color-tertiary) rounded-2xl px-4 py-3.5 border border-[var(--color-dark)] mt-2">
                  <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-white text-base">💳</span>
                  </div>
                  <div>
                    <p className="text-sm font-black text-gray-800">
                      Easebuzz Gateway
                    </p>
                    <p className="text-[10px] text-gray-400 mt-0.5">
                      Card · UPI · Net Banking · Wallet
                    </p>
                  </div>
                  <div className="ml-auto w-2.5 h-2.5 bg-[var(--color-accent)] rounded-full" />
                </div>
              </div>

              {/* Checkboxes */}
              <div className="bg-white rounded-3xl border border-[var(--color-dark)] shadow-sm px-3 lg:px-7  py-5 space-y-4">
                {[
                  {
                    checked: agreedTerms,
                    toggle: () => setAgreedTerms(!agreedTerms),
                    label: (
                      <>
                        I agree to the{" "}
                        <span className="text-(--color-primary) font-bold underline underline-offset-2 cursor-pointer">
                          terms and conditions
                        </span>
                      </>
                    ),
                  },
                  {
                    checked: hideLeaderboard,
                    toggle: () => setHideLeaderboard(!hideLeaderboard),
                    label: (
                      <>
                        Hide my name from the leaderboard{" "}
                        <span className="text-gray-400 text-[10px]">
                          (optional)
                        </span>
                      </>
                    ),
                  },
                ].map((item, i) => (
                  <label
                    key={i}
                    className="flex items-start gap-3 cursor-pointer group"
                  >
                    <div
                      onClick={item.toggle}
                      className={`w-5 h-5 rounded-lg border-2 shrink-0 mt-0.5 flex items-center justify-center transition-all cursor-pointer ${
                        item.checked
                          ? "bg-(--color-primary) border-(--color-primary)"
                          : "border-[var(--color-dark)] group-hover:border-(--color-primary)"
                      }`}
                    >
                      {item.checked && (
                        <span className="text-white text-[10px] font-black">
                          ✓
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-600 leading-relaxed">
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>

              {/* CTA */}

              {errorMsg && (
                <div className="bg-red-50 text-red-600 border border-red-200 rounded-2xl p-4 text-sm font-semibold">
                  ⚠️ {errorMsg}
                </div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full"
              >
                <button
                  type="submit"
                  disabled={loading}
                  className={`btn-primary w-full group relative inline-flex items-center justify-center gap-2
      font-semibold text-base px-10 py-4 cursor-pointer
      bg-(--color-primary) text-(--color-secondary)
      hover:text-(--color-primary) overflow-hidden ${
        loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
                >
                  <span className="relative z-10 flex gap-2 items-center">
                    {loading ? "Processing..." : `Donate ${formatted(rawAmount)} Now`}
                  </span>

                  <span className="btn-primary-overlay"></span>
                </button>
              </motion.div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { icon: "🔒", label: "SSL Secure" },
                  { icon: "📋", label: "80G Tax Benefit" },
                  { icon: "✅", label: "Trusted NGO" },
                ].map((b) => (
                  <div
                    key={b.label}
                    className="flex flex-col items-center gap-1.5 bg-white border border-[var(--color-dark)] rounded-2xl py-3 px-2 text-center"
                  >
                    <span className="text-lg">{b.icon}</span>
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-wide leading-tight">
                      {b.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </form>
      </div>
    </SmoothScroll>
  );
}
