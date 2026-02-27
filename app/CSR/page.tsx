"use client";
import Link from "next/link";
import { FaLeaf, FaQuestionCircle } from "react-icons/fa";
import { MdReceipt } from "react-icons/md";
import {
  ArrowRight,
  Building2,
  Download,
  FileText,
  LayoutList,
  Mail,
  MessageSquare,
  User,
} from "lucide-react";
import { useState } from "react";
import Slider from "../../Component/Slider";
import SmoothScroll from "../../Component/SmothScrolling";

export default function Support() {
  const [message, setMessage] = useState("");
  return (
    <>
      <SmoothScroll>
        <section className="container mx-auto">
          {/* Content */}
          <div className="text-center ">
            <p className="relative bg-emerald-50 text-emerald-800 text-sm font-medium max-w-sm px-4 py-1 rounded-full text-center lg:text-left justify-self-center ">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-600 rounded-full"></span>
              <span className="pl-4">CSR Partnerships</span>
            </p>
            <h1 className="text-4xl lg:text-5xl text-emerald-600 leading-normal font-bold">
              CSR & Girganga Parivar Trust
            </h1>
            <div className="justify-self-center w-200 max-w-full ">
              <p className="text-xl font-semibold  text-center mx-auto">
                “Partner with Girganga Parivar Trust to deliver scalable,
                measurable water security solutions across Gujarat.”
              </p>
            </div>
          </div>

          {/* Card  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            <div className="relative border-2 border-emerald-600 p-5 lg:p-10 pt-14 rounded-xl">
              {/* Center Icon on Border */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white px-3">
                <div className="w-13 h-13 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xl font-bold">
                  <FaQuestionCircle className="text-white text-4xl" />
                </div>
              </div>

              <h1 className="text-2xl text-emerald-600 font-bold leading-normal text-center">
                Why GGPT for CSR
              </h1>

              <div className="font-semibold text-lg leading-loose mt-4">
                <p>⁂ CSR-1 & NGO-DARPAN registered</p>
                <p>⁂ 8,354+ water conservation structures</p>
                <p>⁂ Proven execution capacity (18 excavators)</p>
                <p>⁂ Transparent reporting & audits</p>
                <p>⁂ Community + Government convergence</p>
              </div>
            </div>

            <div className="relative border-2 border-emerald-600  p-5 lg:p-10 pt-14 rounded-xl">
              {/* Center Icon on Border */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white px-3">
                <div className="w-13 h-13 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xl font-bold">
                  <MdReceipt className="text-white text-4xl" />
                </div>
              </div>

              <h1 className="text-2xl text-emerald-600 font-bold leading-normal text-center">
                Why GGPT for CSR
              </h1>

              <div className="font-semibold text-lg leading-loose mt-4">
                <p>⁂ Utilisation Certificate</p>
                <p>⁂ Impact Report (photos, GPS, numbers)</p>
                <p>⁂ Branding at site (if applicable)</p>
                <p>⁂ Annual / quarterly reporting </p>
                <p>⁂ CSR-1 Certificate</p>
              </div>
            </div>

            <div className="relative border-2 border-emerald-600  p-5 lg:p-10 pt-14 rounded-xl">
              {/* Center Icon on Border */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white px-3">
                <div className="w-13 h-13 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xl font-bold">
                  <FaLeaf className="text-white text-4xl" />
                </div>
              </div>

              <h1 className="text-2xl text-emerald-600 font-bold leading-normal text-center">
                Why GGPT for CSR
              </h1>

              <div className="font-semibold text-lg leading-loose mt-4">
                <p>
                  ⁂ Sponsorship of check-dam deepening (₹4–₹10 lakh per
                  structure)
                </p>
                <p>⁂ District / Taluka water security projects</p>
                <p>⁂ Machinery support (Excavators)</p>
                <p>⁂ Multi-year MoU partnerships</p>
                <p>⁂ Community + Government convergence</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section - 2 */}
        <section className="container">
          <div>
            <h1 className="text-4xl lg:text-5xl font-semibold text-emerald-600 text-center">
              “Transparency Builds Trust, Trust Builds Impact”
            </h1>
          </div>
          <div className=" flex flex-col items-center justify-center p-6 gap-6">
            {/* Hero Card */}
            <div className="bg-white rounded-2xl w-full max-w-full flex flex-col items-center text-center px-10 py-12 gap-5">
              {/* Icon */}
              <div className="text-emerald-600">
                <Building2 size={48} strokeWidth={1.5} />
              </div>

              <h1 className="text-3xl font-bold text-slate-800 leading-tight">
                Empowering Sustainable Change
              </h1>

              <p className="text-slate-500 text-base max-w-sm leading-relaxed">
                Join our initiative to build a better future. Your support helps
                us create structural impact in communities that need it most.
              </p>

              <Link href="/Our-Work">
                <button className="mt-2 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 transition-colors text-white font-semibold px-8 py-3.5 rounded-full text-base">
                  Support A Structure
                  <ArrowRight size={18} />
                </button>
              </Link>
            </div>

            {/* Two Cards Row */}
            <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* CSR Proposal Card */}
              <div className="bg-white rounded-2xl shadow-md flex flex-col items-center text-center px-8 py-10 gap-4">
                <div className="text-slate-500">
                  <LayoutList
                    className="text-emerald-600"
                    size={32}
                    strokeWidth={1.5}
                  />
                </div>
                <h2 className="text-xl font-bold text-slate-800">
                  CSR Proposal
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Review our detailed objectives, methodology, and projected
                  outcomes for the current fiscal year.
                </p>
                <Link href="/Our-Work">
                  <button className="mt-2 w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 transition-colors text-white font-semibold px-6 py-3.5 rounded-xl text-sm">
                    <Download size={16} />
                    Download CSR Proposal (PDF)
                  </button>
                </Link>
              </div>

              {/* Company Profile Card */}
              <div className="bg-white rounded-2xl shadow-sm flex flex-col items-center text-center px-8 py-10 gap-4">
                <div className="text-slate-500">
                  <Building2
                    className="text-emerald-600"
                    size={32}
                    strokeWidth={1.5}
                  />
                </div>
                <h2 className="text-xl font-bold text-slate-800">
                  Company Profile
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Learn more about our core values, mission, and the history of
                  our social responsibility commitments.
                </p>
                <Link href="/Our-Work">
                  <button className="mt-2 w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 transition-colors text-white font-semibold px-6 py-3.5 rounded-xl text-sm">
                    <Download size={16} />
                    Download Company Profile (PDF)
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section - 3 */}
        <section className="container mx-auto px-4 py-10">
          <h1 className="text-4xl lg:text-5xl text-emerald-600 leading-normal font-bold text-center">
            CSR Partnership Inquiry Form
          </h1>
          <div className="w-full max-w-2xl mx-auto mt-2">
            <p className="text-xl font-semibold text-center">
              Partner with us to create a sustainable impact. Fill out the
              details below and our team will get back to you shortly.
            </p>
          </div>

          <div className="flex items-center justify-center pt-10">
            <div className="flex w-full max-w-5xl rounded-2xl overflow-hidden shadow-xl">
              <div className="hidden md:block md:w-2/5 relative">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
                  alt="Construction excavator on site"
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Right */}
              <div className="w-full md:w-3/5 bg-white px-6 sm:px-8 py-8 flex flex-col gap-5">
                {/* Header */}
                <div>
                  <h2 className="text-xl font-bold text-slate-800 leading-snug">
                    Partner with Us
                  </h2>
                  <p className="text-slate-500 text-sm mt-0.5">
                    Enquire About CSR Opportunities
                  </p>
                </div>

                {/* Form Fields */}
                <div className="flex flex-col gap-3">
                  {/* Company Name */}
                  <label
                    htmlFor="companyName"
                    className="text-sm font-medium text-slate-700"
                  >
                    Company Name:
                  </label>
                  <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2.5 bg-white focus-within:border-emerald-400 transition-colors">
                    <Building2 size={15} className="text-slate-400 shrink-0" />
                    <input
                      type="text"
                      id="companyName"
                      placeholder="Company Name"
                      className="flex-1 text-sm text-slate-700 placeholder-slate-400 outline-none bg-transparent"
                    />
                  </div>

                  {/* Contact Person */}
                  <label
                    htmlFor="contactPerson"
                    className="text-sm font-medium text-slate-700"
                  >
                    Contact Person:
                  </label>
                  <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2.5 bg-white focus-within:border-emerald-400 transition-colors">
                    <User size={15} className="text-slate-400 shrink-0" />
                    <input
                      type="text"
                      id="contactPerson"
                      placeholder="Contact Person"
                      className="flex-1 text-sm text-slate-700 placeholder-slate-400 outline-none bg-transparent"
                    />
                  </div>

                  {/* Email */}
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-700"
                  >
                    Email:
                  </label>
                  <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2.5 bg-white focus-within:border-emerald-400 transition-colors">
                    <Mail size={15} className="text-slate-400 shrink-0" />
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      className="flex-1 text-sm text-slate-700 placeholder-slate-400 outline-none bg-transparent"
                    />
                  </div>

                  {/* Subject */}
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-slate-700"
                  >
                    Subject:
                  </label>
                  <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2.5 bg-white focus-within:border-emerald-400 transition-colors">
                    <FileText size={15} className="text-slate-400 shrink-0" />
                    <input
                      type="text"
                      id="subject"
                      placeholder="Subject"
                      className="flex-1 text-sm text-slate-700 placeholder-slate-400 outline-none bg-transparent"
                    />
                  </div>

                  {/* CSR Budget & Contact Person Details */}
                  <label
                    htmlFor="csrBudget"
                    className="text-sm font-medium text-slate-700"
                  >
                    CSR Budget & Contact Person Details*
                  </label>
                  <div className="flex items-start gap-2 border border-slate-200 rounded-lg px-3 py-2.5 bg-white focus-within:border-emerald-400 transition-colors">
                    <MessageSquare
                      size={15}
                      className="text-slate-400 shrink-0 mt-0.5"
                    />
                    <textarea
                      id="csrBudget"
                      placeholder="Your Message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="flex-1 text-sm text-slate-700 placeholder-slate-400 outline-none bg-transparent resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button className="w-full bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition-all text-white font-semibold text-sm py-3 rounded-lg">
                  Submit Inquiry
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section - 4 */}
        <Slider />
      </SmoothScroll>
    </>
  );
}
