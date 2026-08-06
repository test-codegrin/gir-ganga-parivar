import React from "react";
import {
  FileText,
  Building2,
  Droplets,
  MapPin,
  Layers,
  Calendar,
  DollarSign,
  TrendingUp,
  Users,
} from "lucide-react";
import { FaHandHoldingHeart, FaBuilding, FaUserTie } from "react-icons/fa";

export const outcomeSlices = [
  {
    id: "outcome-3",
    label: "Outcome 3 – Water Conservation",
    percentage: 92.7,
    amount: "₹1,00,79,271",
    color: "var(--color-primary)",
    lightColor: "var(--color-dark)",
    bgClass: "bg-(--color-tertiary) border-(--color-primary)/40 text-slate-900",
    desc: "Direct water harvesting: Rejuvenation of 15 check dams, desilting & 20 deep groundwater recharge bores.",
  },
  {
    id: "project-mgmt",
    label: "Project Management",
    percentage: 6.0,
    amount: "₹6,52,380",
    color: "#8b5cf6",
    lightColor: "#c084fc",
    bgClass: "bg-purple-50 border-purple-200 text-purple-900",
    desc: "Project governance, technical engineering oversight, and administrative field execution.",
  },
  {
    id: "outcome-4",
    label: "Outcome 4 – Monitoring",
    percentage: 2.8,
    amount: "₹3,04,444",
    color: "var(--color-greenish)",
    lightColor: "var(--color-accent)",
    bgClass: "bg-[#e6f7fb] border-(--color-primary)/30 text-slate-900",
    desc: "Geo-tagged field verification, quarterly SEBI disclosures, and third-party independent social impact audit.",
  },
  {
    id: "outcome-2",
    label: "Outcome 2 – Community Mobilization",
    percentage: 2.7,
    amount: "₹2,93,571",
    color: "var(--color-secondary)",
    lightColor: "#fde047",
    bgClass: "bg-amber-50 border-amber-200 text-amber-900",
    desc: "Gram sabha community meetings, local farmer water committees, and volunteer capacity building.",
  },
  {
    id: "outcome-1",
    label: "Outcome 1 – Planning",
    percentage: 1.8,
    amount: "₹1,95,714",
    color: "var(--color-accent)",
    lightColor: "#6ee7b7",
    bgClass: "bg-teal-50 border-teal-200 text-teal-900",
    desc: "Hydrological surveys, village baseline studies, and technical check-dam engineering blueprints.",
  },
];

export const publicIssueDetails = [
  { label: "Instrument", value: "Zero Coupon Zero Principal (ZCZP)", icon: <FileText className="w-5 h-5 text-(--color-primary)" /> },
  { label: "Exchange Platform", value: "NSE Social Stock Exchange (SSE)", icon: <Building2 className="w-5 h-5 text-(--color-primary)" /> },
  { label: "Project Title", value: "Community-Led Water Conservation & Groundwater Recharge", icon: <Droplets className="w-5 h-5 text-(--color-primary)" /> },
  { label: "Project Area", value: "Paddhari Block, Rajkot District, Gujarat", icon: <MapPin className="w-5 h-5 text-(--color-primary)" /> },
  { label: "Villages Covered", value: "10 Water-Stressed Villages", icon: <Layers className="w-5 h-5 text-(--color-primary)" /> },
  { label: "Project Duration", value: "12 Months Execution", icon: <Calendar className="w-5 h-5 text-(--color-primary)" /> },
  { label: "Minimum Investment", value: "₹1,000 (Or as Approved)", icon: <DollarSign className="w-5 h-5 text-(--color-primary)" /> },
  { label: "Proposed Issue Size", value: "₹1 Crore (Post Approval)", icon: <TrendingUp className="w-5 h-5 text-(--color-primary)" /> },
];

export const snapshotMetrics = [
  { val: "10", label: "Target Villages", sub: "Paddhari Block, Rajkot" },
  { val: "15", label: "Check Dams", sub: "Structure Rejuvenation" },
  { val: "20", label: "Recharge Units", sub: "Groundwater Shafts & Bores" },
  { val: "10,000", label: "Direct Beneficiaries", sub: "Rural Farming Families" },
  { val: "4,000", label: "Indirect Beneficiaries", sub: "Surrounding Communities" },
  { val: "₹1.08 Cr", label: "Total Project Cost", sub: "Transparent Allocation" },
];

export const waterChallenges = [
  {
    title: "Declining Groundwater Levels",
    desc: "Continuous groundwater extraction, limited natural recharge, and changing rainfall patterns have resulted in falling water tables across villages.",
    badge: "Aquifer Depletion",
  },
  {
    title: "Irregular & Erratic Rainfall",
    desc: "Unpredictable monsoon cycles with short intense precipitation followed by prolonged dry spells lead to heavy surface runoff instead of aquifer recharge.",
    badge: "Climate Uncertainty",
  },
  {
    title: "Silted & Deteriorated Dams",
    desc: "Existing check dams and water bodies have lost storage capacity due to severe siltation and structural wear, drastically diminishing rainwater capture.",
    badge: "Infrastructure Loss",
  },
  {
    title: "Reduced Irrigation Reliability",
    desc: "Depleting groundwater forces farmers to rely heavily on uncertain seasonal rains, cutting crop yields and heightening agricultural instability.",
    badge: "Livelihood Risk",
  },
  {
    title: "Increasing Climate Risks",
    desc: "Frequent dry spells, extreme temperature rises, and micro-climate variability intensify rural vulnerability to severe economic shocks.",
    badge: "Vulnerability",
  },
  {
    title: "Growing Water Insecurity",
    desc: "Acute water shortage affects livestock, household sanitation, drinking water access, and overall community well-being in rural Gujarat.",
    badge: "Community Threat",
  },
];

export const budgetAllocations = [
  {
    category: "Check Dam & Water Body Rejuvenation",
    percentage: 45,
    amount: "₹48.92 Lakhs",
    color: "#009dc4",
    details: "Desilting, structural repairs, spillway enhancements & storage expansion across 15 check dams.",
  },
  {
    category: "Groundwater Recharge Interventions",
    percentage: 30,
    amount: "₹32.61 Lakhs",
    color: "#059669",
    details: "Construction of 20 recharge shafts, deep recharge bores, and multi-layer filter media units.",
  },
  {
    category: "Skilled Labour & Construction Materials",
    percentage: 15,
    amount: "₹16.31 Lakhs",
    color: "#d97706",
    details: "High-grade cement, stone masonry, excavation machinery deployment & local rural employment.",
  },
  {
    category: "Geo-Tagged Monitoring & Social Audit",
    percentage: 10,
    amount: "₹10.87 Lakhs",
    color: "#7c3aed",
    details: "GPS tagging, third-party social impact audit, SEBI quarterly disclosures & field verification.",
  },
];

export const contributionImpactTiers = [
  {
    amount: 1000,
    label: "₹1,000",
    impact: "Supports restoration of community water resources and groundwater recharge activities.",
    highlight: "Entry Impact",
  },
  {
    amount: 5000,
    label: "₹5,000",
    impact: "Supports desilting, excavation and restoration works of existing water conservation structures.",
    highlight: "Desilting Support",
  },
  {
    amount: 10000,
    label: "₹10,000",
    impact: "Contributes towards construction materials, skilled labour and groundwater recharge interventions.",
    highlight: "Material & Labor",
  },
  {
    amount: 25000,
    label: "₹25,000",
    impact: "Helps restore village-level water infrastructure benefiting farming households directly.",
    highlight: "Village Support",
  },
  {
    amount: 50000,
    label: "₹50,000",
    impact: "Supports implementation of one complete groundwater recharge intervention (Recharge Shaft / Bore / Filter Media).",
    highlight: "Full Recharge Unit",
  },
  {
    amount: 100000,
    label: "₹1,00,000",
    impact: "Supports multiple water conservation activities including excavation, repair works and recharge measures.",
    highlight: "Multi-Structure",
  },
  {
    amount: 500000,
    label: "₹5,00,000",
    impact: "Helps implement integrated water conservation interventions across one or more complete project locations.",
    highlight: "Location Sponsor",
  },
  {
    amount: 1000000,
    label: "₹10,00,000",
    impact: "Makes a significant contribution towards restoring multiple water conservation assets and strengthening village water security.",
    highlight: "Anchor Benefactor",
  },
];

export const investorCategories = [
  {
    title: "Corporate CSR Foundations",
    desc: "Deploy CSR funds effectively under Schedule VII of the Companies Act, 2013 with 100% SEBI-compliant reporting and auditable outcomes.",
    icon: <Building2 className="w-6 h-6 text-(--color-primary)" />,
  },
  {
    title: "High Net-Worth Individuals (HNIs)",
    desc: "Create legacy environmental impact by restoring groundwater reserves and enabling long-term rural climate resilience.",
    icon: <Users className="w-6 h-6 text-(--color-primary)" />,
  },
  {
    title: "Trusts & Philanthropic Foundations",
    desc: "Partner with a verified, transparent, SEBI-regulated Social Stock Exchange platform to maximize philanthropic capital efficiency.",
    icon: <FaHandHoldingHeart className="w-6 h-6 text-(--color-primary)" />,
  },
  {
    title: "Institutional Donors",
    desc: "Fund scalable, evidence-based water resource management programs with rigorous geo-tagged verification and quarterly disclosures.",
    icon: <FaBuilding className="w-6 h-6 text-(--color-primary)" />,
  },
  {
    title: "Individual Social Investors",
    desc: "Participate in transparent social investments starting from ₹1,000 to transform village water security in Gujarat.",
    icon: <FaUserTie className="w-6 h-6 text-(--color-primary)" />,
  },
];

export const sseBenefits = [
  { title: "SEBI Regulated Platform", desc: "Monitored under SEBI's strict framework for maximum investor trust and security." },
  { title: "NSE Listing Transparency", desc: "Listed on National Stock Exchange (NSE), ensuring complete disclosure standards." },
  { title: "Transparent Fund Utilization", desc: "100% of capital is dedicated to approved water conservation deliverables." },
  { title: "Quarterly Disclosures", desc: "Regular public updates on financial spending and physical project milestones." },
  { title: "Independent Social Audit", desc: "Verified by accredited independent social auditors per SSE guidelines." },
  { title: "Geo-Tagged Monitoring", desc: "GPS mapping and field verification for every check dam and recharge shaft." },
  { title: "80G Tax Exemption", desc: "Eligible for tax benefits under Section 80G of Income Tax Act (subject to rules)." },
  { title: "Verified Impact Metrics", desc: "Tangible metrics: Litres stored, hectares recharged, and families empowered." },
];

export const ggptTrackRecord = [
  { val: "₹45+ Cr", label: "Capital Mobilized", sub: "Public & Partner Contributions" },
  { val: "19,593", label: "Water Structures", sub: "Built & Rejuvenated" },
  { val: "191+ Billion", label: "Litres Storage", sub: "Rainwater Harvesting Capacity" },
  { val: "69+ Billion", label: "Litres Recharge", sub: "Direct Aquifer Replenishment" },
  { val: "11.40 Lakh", label: "Lives Impacted", sub: "Rural Citizens Empowered" },
  { val: "7,38,795", label: "Acres Recharged", sub: "Agricultural Land Benefited" },
];

export const ggptAwards = [
  { title: "JSJB Best NGO Award", detail: "All India Rank 2 in Water Conservation" },
  { title: "Indian CSR Award", detail: "Excellence in Sustainable Environmental Action" },
  { title: "Global CSR & ESG Award", detail: "Outstanding Climate & Water Resilience" },
  { title: "Dr. BML Munjal Social Impact Award", detail: "Recognition for Grassroots Execution" },
];

export const sseFaqs = [
  {
    q: "1. What is a Zero Coupon Zero Principal (ZCZP) Instrument?",
    a: "A Zero Coupon Zero Principal (ZCZP) Instrument is a specialized fundraising instrument listed on the Social Stock Exchange (SSE) that enables eligible non-profit organisations to raise funds for approved social impact projects. It carries no interest rate (Zero Coupon) and does not involve repayment of principal (Zero Principal), as it is designed purely to fund high-impact social and environmental projects.",
  },
  {
    q: "2. Will I receive my money back?",
    a: "No. A ZCZP contribution is not a financial market return instrument. It does not provide principal repayment or dividend/interest returns. Your capital is utilized entirely to execute the approved water conservation and groundwater recharge project, yielding measurable ecological and community social returns.",
  },
  {
    q: "3. Is this considered a donation?",
    a: "Yes. Contributions made through a ZCZP Instrument are voluntary social donations towards a SEBI-registered, verified social impact project listed on the Social Stock Exchange. All funds are strictly deployed for approved project activities.",
  },
  {
    q: "4. Is my contribution eligible for tax benefits?",
    a: "Yes. Girganga Parivar Trust (GGPT) holds a valid 80G Registration under the Income Tax Act. Donors and social investors contributing to GGPT's ZCZP issue may claim applicable tax deductions as per Income Tax regulations.",
  },
  {
    q: "5. Why should I contribute through the Social Stock Exchange (SSE)?",
    a: "The SSE provides a standardized, highly regulated, transparent environment overseen by SEBI and NSE. Key advantages include: (1) Independent due diligence before listing, (2) Mandatory social audits by registered auditors, (3) Standardized financial and impact disclosures, (4) Geo-tagged documentation, and (5) Maximum public accountability.",
  },
  {
    q: "6. What happens after the project is completed?",
    a: "Upon completion of the 12-month project cycle, GGPT will publish and submit complete Project Completion Reports, Fund Utilization Certificates, and Impact Assessment Reports to the NSE SSE platform and to all contributing stakeholders.",
  },
  {
    q: "7. How is project impact measured?",
    a: "Impact is measured using key performance indicators: (1) Number of check dams desilted and repaired, (2) Number of recharge shafts/bores operationalized, (3) Direct and indirect beneficiary count, (4) Groundwater level rise in target block aquifers, and (5) Geo-tagged field verification logs.",
  },
  {
    q: "8. How are the funds monitored?",
    a: "Funds are held in project-specific accounts with strict internal financial controls. Monitoring includes budget tracking, quarterly utilization certificates, independent chartered accountant audits, third-party social audits, and regulatory disclosures to NSE and SEBI.",
  },
  {
    q: "9. Can companies contribute through the SSE?",
    a: "Yes! Companies, Corporate CSR Foundations, Trusts, Family Offices, and Institutions can participate under Schedule VII CSR provisions or voluntary philanthropic allocations through the NSE SSE platform.",
  },
  {
    q: "10. Can NRIs contribute?",
    a: "Non-Resident Indians (NRIs) may participate, subject to applicable FEMA regulations, SEBI guidelines, and NSE Social Stock Exchange procedures. Interested international donors are welcome to register interest for guidance.",
  },
  {
    q: "11. How will my contribution create impact?",
    a: "Every rupee directly funds water rejuvenation across 10 water-stressed villages in Paddhari Block, Rajkot District. It restores 15 check dams, constructs 20 groundwater recharge shafts, and secures long-term water availability for 14,000+ villagers.",
  },
  {
    q: "12. Can I track the progress of the project?",
    a: "Yes! GGPT will publish regular quarterly progress reports, geo-tagged photo/video updates, and fund utilization reports on both its official website and the NSE Social Stock Exchange portal.",
  },
];

export const INDIAN_STATES_OPTIONS = [
  "Gujarat",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi / NCR",
  "Goa",
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
  "Other / Outside India",
].map((st) => ({ label: st, value: st }));

export const INVESTOR_CATEGORY_OPTIONS = [
  { label: "Individual Social Investor", value: "Individual", desc: "Private individual contribution" },
  { label: "Corporate (CSR Fund)", value: "Corporate", desc: "Companies fulfilling mandatory CSR" },
  { label: "CSR Foundation / Trust", value: "CSR Foundation", desc: "Registered CSR Entities & Foundations" },
  { label: "Trust / Foundation", value: "Trust / Foundation", desc: "Charitable & Non-Profit Trusts" },
  { label: "Family Office", value: "Family Office", desc: "High Net Worth Family Philanthropy" },
  { label: "HNI (High Net-Worth Individual)", value: "HNI", desc: "Individual Impact Allocations" },
  { label: "Institutional Investor", value: "Institution", desc: "Impact Investment Funds & Institutions" },
  { label: "Other", value: "Other", desc: "Other Organization Types" },
];
