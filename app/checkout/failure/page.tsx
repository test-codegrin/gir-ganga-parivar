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

function FailureContent() {
  const searchParams = useSearchParams();
  const txnid = searchParams.get("txnid") || "N/A";
  const reason = searchParams.get("reason") || "The payment was cancelled or declined.";

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
  }, []);

  const rawAmount = cartItem
    ? Number(String(cartItem.amount).replace(/[,₹\s]/g, ""))
    : 0;

  const formatted = (n: number) => "₹" + n.toLocaleString("en-IN");

  const labelBase =
    "block text-[10px] font-black text-gray-400 uppercase tracking-[0.25em] mb-1.5";

  return (
    <div className=" min-h-screen bg-[var(--color-tertiary)] pb-12">
      {/* ── Page Header ── */}
      <div className="container bg-white border-b border-[var(--color-dark)] container">
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

      <div className=" max-w-6xl mx-auto grid lg:grid-cols-5 mt-6">
        {/* ── LEFT: Failure Card ── */}
        <div className="lg:col-span-3 space-y-6 container">
          <div className="bg-white rounded-3xl border border-[var(--color-dark)] shadow-sm overflow-hidden">
            <div className="bg-red-500 px-7 py-5 flex items-center gap-3">
              <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg">❌</span>
              </div>
              <div>
                <h2 className="text-white font-black text-base">
                  Transaction Failed
                </h2>
                <p className="text-white/70 text-xs mt-0.5">
                  Payment could not be processed
                </p>
              </div>
            </div>

            <div className="px-3 lg:px-7 py-7 space-y-5">
              <p className="text-gray-600 text-sm leading-relaxed">
                We were unable to complete your transaction. No funds were debited. If your account was charged, it will be refunded automatically by your bank within 3-5 business days.
              </p>

              <div className="bg-[var(--color-tertiary)] border border-[var(--color-dark)] rounded-2xl p-5 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400 font-bold uppercase tracking-wider">Transaction ID</span>
                  <span className="font-mono text-gray-800 font-bold select-all">{txnid}</span>
                </div>
                <div className="flex flex-col gap-1 text-xs pt-1 border-t border-[var(--color-dark)]">
                  <span className="text-gray-400 font-bold uppercase tracking-wider">Failure Reason</span>
                  <span className="text-red-600 font-semibold mt-0.5 leading-snug">{reason}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-2xl p-4 text-xs text-gray-500">
                <span className="text-lg">💡</span>
                <div>
                  <p className="font-bold text-gray-700">Need Assistance?</p>
                  <p className="mt-0.5 leading-relaxed">Please try a different card, UPI app, or netbanking account. If the issue persists, contact our support team at <span className="font-semibold text-gray-700">info@girgangaparivartrust.org</span>.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <Link
                  href="/checkout"
                  className="border border-[var(--color-dark)] text-gray-700 rounded-xl py-3.5 text-xs font-black uppercase tracking-wider text-center hover:bg-gray-50 transition-colors flex items-center justify-center cursor-pointer"
                >
                  🔄 Retry Payment
                </Link>
                <Link
                  href="/"
                  className="bg-gray-900 text-white rounded-xl py-3.5 text-xs font-black uppercase tracking-wider text-center hover:bg-black transition-colors flex items-center justify-center"
                >
                  Back to Home
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
                    No active donation in session.
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
    </div>
  );
}

export default function DonationFailure() {
  return (
    <SmoothScroll>
      <Suspense fallback={
        <div className="min-h-screen bg-[var(--color-tertiary)] flex items-center justify-center">
          <div className="text-center space-y-3">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-500 mx-auto"></div>
            <p className="text-xs font-black text-gray-400 uppercase tracking-wider">Loading transaction details...</p>
          </div>
        </div>
      }>
        <FailureContent />
      </Suspense>
    </SmoothScroll>
  );
}
