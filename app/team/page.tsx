"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface FormState {
  name: string;
  dob: string;
  gender: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  qualification: string;
  field: string;
  organization: string;
  interests: string[];
  volunteeringType: string;
  availability: string;
  reason: string;
  skills: string;
  declaration: boolean;
}

function CustomSelect({
  name,
  placeholder,
  options,
  onChange,
}: {
  name: string;
  placeholder: string;
  options: string[];
  onChange: (name: string, value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (val: string) => {
    setSelected(val);
    onChange(name, val);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
      >
        <span className={selected ? "text-slate-800" : "text-slate-400"}>
          {selected || placeholder}
        </span>
        <svg
          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="4 6 8 10 12 6" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-50 top-[calc(100%+6px)] left-0 right-0 bg-white border border-slate-200 rounded-xl shadow-md overflow-hidden">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => handleSelect(opt)}
              className={`px-4 py-2.5 text-sm cursor-pointer hover:bg-slate-50 ${
                selected === opt
                  ? "text-blue-600 font-medium"
                  : "text-slate-700"
              }`}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    qualification: "",
    field: "",
    organization: "",
    interests: [],
    volunteeringType: "",
    availability: "",
    reason: "",
    skills: "",
    declaration: false,
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-(--color-primary)";

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (value: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter((i) => i !== value)
        : [...prev.interests, value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.declaration) {
      alert("Please accept declaration");
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));

    console.log(form);
    setLoading(false);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="text-center py-20 text-green-600 font-bold text-xl">
        ✅ Application Submitted Successfully!
      </div>
    );
  }

  return (
    <section className="container py-10">
      <motion.div className="text-center mb-12 space-y-5">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px w-8 bg-(--color-secondary)" />
          <span className="text-(--color-secondary) text-xs font-bold tracking-[0.22em] uppercase">
            Volunteer With Us
          </span>
          <div className="h-px w-8 bg-(--color-secondary)" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          Join the Movement{" "}
          <span className="text-(--color-primary)">for Water </span>{" "}
          Conservation
        </h2>
        <p className="text-center text-gray-500 max-w-7xl justify-self-center">
          Volunteers play an important role in strengthening community-led water
          conservation efforts. By joining Girganga Parivar Trust, you can
          contribute your time, skills, and energy to support rural communities,
          promote environmental sustainability, and help build a water-secure
          future.
        </p>
        <p className="text-center text-gray-500 max-w-7xl justify-self-center">
          Whether you are a student, professional, researcher, or community
          member, your participation can make a meaningful difference.
        </p>
      </motion.div>
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-3xl shadow">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Volunteer Registration Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* PERSONAL INFO */}
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className={inputClass}
              required
            />
            <input
              type="date"
              name="dob"
              onChange={handleChange}
              className={inputClass}
              required
            />

            {/* ✅ Gender - Custom Select with rotating arrow */}
            <CustomSelect
              name="gender"
              placeholder="Gender"
              options={["Male", "Female", "Prefer not to say"]}
              onChange={handleSelectChange}
            />

            <input
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              className={inputClass}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              className={inputClass}
              required
            />
            <input
              name="city"
              placeholder="City"
              onChange={handleChange}
              className={inputClass}
            />
            <input
              name="state"
              placeholder="State"
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* EDUCATION */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* ✅ Qualification - Custom Select with rotating arrow */}
            <CustomSelect
              name="qualification"
              placeholder="Qualification"
              options={[
                "School",
                "Diploma",
                "Graduate",
                "Postgraduate",
                "Doctorate",
              ]}
              onChange={handleSelectChange}
            />

            <input
              name="field"
              placeholder="Field / Profession"
              onChange={handleChange}
              className={inputClass}
            />
            <input
              name="organization"
              placeholder="Organization"
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* INTERESTS */}
          <div>
            <p className="font-semibold mb-2">Areas of Interest</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                "Water conservation awareness campaigns",
                "Field visits and village activities",
                "Community mobilization",
                "Research and documentation",
                "Social media and communication",
                "Event Support",
                "Environmental education programs",
                "Technical support (engineering / water structures)",
              ].map((item) => (
                <label key={item} className="flex gap-2 text-sm">
                  <input
                    type="checkbox"
                    onChange={() => handleCheckbox(item)}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* AVAILABILITY */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* ✅ Volunteering Type - Custom Select with rotating arrow */}
            <CustomSelect
              name="volunteeringType"
              placeholder="Volunteering Type"
              options={[
                "Short-term volunteering",
                "Long-term volunteering",
                "Internship",
                "Event-based volunteering",
              ]}
              onChange={handleSelectChange}
            />

            {/* ✅ Availability - Custom Select with rotating arrow */}
            <CustomSelect
              name="availability"
              placeholder="Availability"
              options={[
                "Few hours per week",
                "Weekends only",
                "Project-based",
                "Flexible",
              ]}
              onChange={handleSelectChange}
            />
          </div>

          {/* TEXT AREAS */}
          <textarea
            name="reason"
            placeholder="Why do you want to volunteer?"
            onChange={handleChange}
            className={inputClass}
          />
          <textarea
            name="skills"
            placeholder="Your Skills"
            onChange={handleChange}
            className={inputClass}
          />

          {/* DECLARATION */}
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={form.declaration}
              onChange={(e) =>
                setForm({ ...form, declaration: e.target.checked })
              }
            />
            I confirm the information is correct
          </label>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-(--color-primary) text-white py-3 rounded-xl font-bold"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </section>
  );
}
