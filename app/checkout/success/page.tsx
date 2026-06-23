"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import SmoothScroll from "../../../Component/SmothScrolling";

type CartItem = {
  id: string;
  title: string;
  amount: string;
  img: string;
  quantity: number;
};

function SuccessContent() {
  const searchParams = useSearchParams();
  const txnid = searchParams.get("txnid") || "N/A";
  const amount = searchParams.get("amount") || "0.00";
  const firstname = searchParams.get("firstname") || "Donor";
  const email = searchParams.get("email") || "";
  const phone = searchParams.get("phone") || "";

  const [cartItem, setCartItem] = useState<CartItem | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("cartItem");
    if (saved) {
      try {
        setCartItem(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
    // Clear checkout item from session storage on success
    sessionStorage.removeItem("cartItem");
  }, []);

  const rawAmount = cartItem
    ? Number(String(cartItem.amount).replace(/[,₹\s]/g, ""))
    : Number(amount);

  const formatted = (n: number) => "₹" + n.toLocaleString("en-IN");

  const labelBase =
    "block text-[10px] font-black text-gray-400 uppercase tracking-[0.25em] mb-1.5";

  return (
    <div className=" min-h-screen bg-[var(--color-tertiary)] pb-12">
      <style>{`
        @media print {
          @page {
            margin: 0;
          }
          html, body, #smooth-wrapper, #smooth-content {
            height: auto !important;
            min-height: 0 !important;
            overflow: visible !important;
            position: static !important;
            transform: none !important;
          }
          body {
            padding: 1.5cm !important;
            background: white !important;
          }
          nav, footer, .screen-only {
            display: none !important;
          }
          #print-receipt-section {
            display: block !important;
            position: relative !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
            color: black !important;
            border: none !important;
          }
          /* Preserve graphics and background colors during printing */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            box-shadow: none !important;
            text-shadow: none !important;
          }
          /* Disable AOS animations and transforms on print */
          [data-aos] {
            transform: none !important;
            transition: none !important;
            opacity: 1 !important;
            visibility: visible !important;
          }
        }
      `}</style>
      {/* ── Page Header ── */}
      <div className="container bg-white border-b border-[var(--color-dark)] container screen-only">
        <div className="mx-auto justify-self-center items-center">
          <p className="text-[var(--color-secondary)] text-[10px] font-black uppercase tracking-[0.35em] flex items-center justify-center gap-2 mb-2">
            <span className="w-5 h-px bg-[var(--color-secondary)]" />
            Donation Check Out
            <span className="w-5 h-px bg-[var(--color-secondary)]" />
          </p>
          <div className="flex items-baseline justify-center  gap-3">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900  tracking-tight">
              Check Out
            </h1>
          </div>
        </div>
      </div>

      <div className=" max-w-6xl mx-auto grid lg:grid-cols-5 mt-6 screen-only">
        {/* ── LEFT: Success Card ── */}
        <div className="lg:col-span-3 space-y-6 container">
          <div className="bg-white rounded-3xl border border-[var(--color-dark)] shadow-sm overflow-hidden">
            <div className="bg-[var(--color-primary)] px-7 py-5 flex items-center gap-3">
              <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg">❤️</span>
              </div>
              <div>
                <h2 className="text-white font-black text-base">
                  Donation Successful
                </h2>
                <p className="text-white/70 text-xs mt-0.5">
                  Thank you for your generous support
                </p>
              </div>
            </div>

            <div className="px-3 lg:px-7 py-7 space-y-5">
              <p className="text-gray-600 text-sm leading-relaxed">
                Dear <strong>{firstname}</strong>, your transaction was completed successfully. We have received your donation of <strong>{formatted(rawAmount)}</strong>. Your support helps us scale groundwater recharge and water conservation projects.
              </p>

              <div className="bg-[var(--color-tertiary)] border border-[var(--color-dark)] rounded-2xl p-5 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400 font-bold uppercase tracking-wider">Transaction ID</span>
                  <span className="font-mono text-gray-800 font-bold select-all">{txnid}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400 font-bold uppercase tracking-wider">Status</span>
                  <span className="bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full font-black text-[10px] uppercase">
                    Success
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 print-hide">
                <button
                  onClick={() => window.print()}
                  className="border border-[var(--color-dark)] text-gray-700 rounded-xl py-3.5 text-xs font-black uppercase tracking-wider hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  🖨️ Print Receipt
                </button>
                <Link
                  href="/"
                  className="bg-[var(--color-primary)] text-white rounded-xl py-3.5 text-xs font-black uppercase tracking-wider text-center hover:bg-[#007fa3] transition-colors flex items-center justify-center"
                >
                  Go to Home →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Summary ── */}
        <div className="lg:col-span-2 container">
          <div className="sticky top-6 space-y-4">
            {/* Donation Summary */}
            <div className="bg-white rounded-3xl border border-[var(--color-dark)] shadow-sm overflow-hidden">
              <div className="bg-[var(--color-primary)] px-6 py-4 flex items-center gap-2">
                <div className="w-1 h-5 bg-white/50 rounded-full" />
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
                  Donation Summary
                </h3>
              </div>

              <div className="px-3 lg:px-7 p-6">
                {cartItem ? (
                  <>
                    <div className="flex items-center gap-4 pb-5 border-b border-[var(--color-dark)]">
                      <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-[var(--color-dark)] flex-shrink-0 bg-[var(--color-tertiary)]">
                        <Image
                          src={cartItem.img}
                          alt={cartItem.title}
                          width={100}
                          height={100}
                          className="object-cover rounded-2xl h-14"
                          quality={75}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-black text-gray-900 leading-snug line-clamp-2">
                          {cartItem.title}
                        </p>
                        <p className="text-[10px] text-gray-400 mt-1">
                          One-time donation
                        </p>
                      </div>
                      <span className="text-sm font-black text-[var(--color-primary)] flex-shrink-0">
                        {formatted(rawAmount)}
                      </span>
                    </div>

                    <div className="pt-4 space-y-3">
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Subtotal</span>
                        <span className="font-bold text-gray-700">
                          {formatted(rawAmount)}
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="pb-5 border-b border-[var(--color-dark)] text-xs text-gray-500">
                    Donation details cleared after success.
                  </div>
                )}

                {/* Total */}
                <div className="mt-4 bg-[var(--color-tertiary)] border border-[var(--color-dark)] rounded-2xl px-5 py-4 flex justify-between items-center">
                  <span className="text-sm font-black text-gray-700 uppercase tracking-wider">
                    Total
                  </span>
                  <span className="text-2xl font-black text-[var(--color-primary)] tabular-nums">
                    {formatted(rawAmount)}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-3xl border border-[var(--color-dark)] shadow-sm px-3 lg:px-7 py-5">
              <p className={labelBase}>Payment Method</p>
              <div className="flex items-center gap-3 bg-[var(--color-tertiary)] rounded-2xl px-4 py-3.5 border border-[var(--color-dark)] mt-2">
                <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
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
      </div>

      {/* ── Print-only Receipt ── */}
      <div id="print-receipt-section" className="hidden print:block w-full max-w-[800px] mx-auto p-10 bg-white text-gray-900 border-2 border-gray-400 rounded-2xl">
        {/* Receipt Header */}
        <div className="flex justify-between items-start pb-6 border-b-2 border-gray-900">
          <div className="flex items-center gap-4">
            <img src="/image/logo.png" alt="Girganga Parivar Trust" className="w-20 h-20 object-contain" />
            <div>
              <h1 className="text-2xl font-black uppercase text-gray-900 leading-tight">Girganga Parivar Trust</h1>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">Water Conservation & Groundwater Recharge NGO</p>
              <p className="text-[10px] text-gray-500 mt-1 max-w-[400px]">
                Decora Capital, 5th Floor, Nr. McDonalds, Above HDFC Bank, Kalawad Road, Rajkot - 360005, Gujarat
              </p>
            </div>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest">Donation Receipt</h2>
            <p className="text-xs text-gray-500 font-bold mt-1">Receipt No: GPT-{txnid}</p>
            <p className="text-xs text-gray-500">Date: {new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
          </div>
        </div>

        {/* Receipt Body */}
        <div className="py-8 space-y-6">
          <p className="text-sm leading-relaxed text-gray-700">
            Received with thanks from <strong className="text-gray-900 font-black">{firstname}</strong> {phone ? `(${phone})` : ""}, a donation of <strong className="text-gray-900 font-black">{formatted(rawAmount)}</strong> towards <strong className="text-gray-900 font-black">{cartItem?.title || "Water Conservation Initiatives"}</strong>.
          </p>

          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-300 px-4 py-2 font-black">Description</th>
                <th className="border border-gray-300 px-4 py-2 font-black text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">
                  {cartItem?.title || "Water Conservation Donation"}<br/>
                  <span className="text-[10px] text-gray-400 font-bold">Transaction ID: {txnid}</span>
                </td>
                <td className="border border-gray-300 px-4 py-3 text-right font-bold text-gray-900">{formatted(rawAmount)}</td>
              </tr>
              <tr className="bg-gray-50 font-black">
                <td className="border border-gray-300 px-4 py-2 text-right">Total Received:</td>
                <td className="border border-gray-300 px-4 py-2 text-right text-gray-900">{formatted(rawAmount)}</td>
              </tr>
            </tbody>
          </table>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-900 space-y-1">
            <p className="font-black">80G Tax Exemption Benefit</p>
            <p className="text-blue-700/90 leading-relaxed">
              Donations to Girganga Parivar Trust are exempt under section 80G of the Income Tax Act. A formal tax certificate will be emailed to your registered email address {email ? `(${email})` : ""} within 24 hours.
            </p>
          </div>
        </div>

        {/* Receipt Footer */}
        <div className="pt-8 border-t border-gray-200 flex justify-between items-end">
          <div className="text-xs text-gray-500 space-y-0.5">
            <p><strong>Contact:</strong> +91 94096 92693 | info@girgangaparivartrust.com</p>
            <p><strong>Website:</strong> www.girgangaparivartrust.com</p>
            <p className="text-[9px] text-gray-400 mt-2 font-mono">This is a system-generated document. No signature is required.</p>
          </div>
          <div className="text-center w-40 border-t border-gray-400 pt-2">
            <p className="text-xs font-black text-gray-800 uppercase">For Girganga Parivar Trust</p>
            <p className="text-[10px] text-gray-400 mt-6">Authorized Signatory</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DonationSuccess() {
  return (
    <SmoothScroll>
      <Suspense fallback={
        <div className="min-h-screen bg-[var(--color-tertiary)] flex items-center justify-center">
          <div className="text-center space-y-3">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[var(--color-primary)] mx-auto"></div>
            <p className="text-xs font-black text-gray-400 uppercase tracking-wider">Loading transaction status...</p>
          </div>
        </div>
      }>
        <SuccessContent />
      </Suspense>
    </SmoothScroll>
  );
}
