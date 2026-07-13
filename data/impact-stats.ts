export const impactMetrics = {
  waterStructuresCreated: { value: 19592, display: "19,592+" },
  checkDamsRejuvenated: { value: 15602, display: "15,602" },
  borewellRechargeStructures: { value: 1370, display: "1,370" },
  percolationPitsDeveloped: { value: 2620, display: "2,620" },
  districts: { value: 10, display: "10" },
  talukas: { value: 53, display: "53" },
  locationsReached: { value: 759, display: "759" },
  ruralVillages: { value: 588, display: "588" },
  urbanWaterStressedLocations: { value: 171, display: "171" },
  peopleImpacted: { value: 1140000, display: "11.4+ Lakh" },
  directBeneficiaries: { value: 225000, display: "2.25+ Lakh" },
  indirectBeneficiaries: { value: 914000, display: "9.14+ Lakh" },
  acresRecharged: { value: 738000, display: "7.38+ Lakh" },
} as const;

export const impactTrustStripData = [
  {
    title: "Water Conservation Impact",
    accent: "var(--color-primary)",
    stats: [
      {
        label: "Water Structures Created",
        value: impactMetrics.waterStructuresCreated.display,
      },
      {
        label: "Check-dams Rejuvenated & Constructed",
        value: impactMetrics.checkDamsRejuvenated.display,
      },
      {
        label: "Borewell Recharge Structures",
        value: impactMetrics.borewellRechargeStructures.display,
      },
      {
        label: "Percolation Pits Developed",
        value: impactMetrics.percolationPitsDeveloped.display,
      },
    ],
  },
  {
    title: "Geographical Reach",
    accent: "var(--color-secondary)",
    stats: [
      {
        label: "Districts Across Gujarat",
        value: impactMetrics.districts.display,
      },
      {
        label: "Talukas Covered",
        value: impactMetrics.talukas.display,
      },
      {
        label: "Locations Reached",
        value: impactMetrics.locationsReached.display,
      },
      {
        label: "Rural Villages",
        value: impactMetrics.ruralVillages.display,
      },
      {
        label: "Urban Water-Stressed Locations",
        value: impactMetrics.urbanWaterStressedLocations.display,
      },
    ],
  },
  {
    title: "Community Impact",
    accent: "var(--color-accent)",
    stats: [
      {
        label: "People Impacted",
        value: impactMetrics.peopleImpacted.display,
      },
      {
        label: "Direct Beneficiaries",
        value: impactMetrics.directBeneficiaries.display,
      },
      {
        label: "Indirect Beneficiaries",
        value: impactMetrics.indirectBeneficiaries.display,
      },
      {
        label: "Acres Recharged",
        value: impactMetrics.acresRecharged.display,
      },
    ],
  },
] as const;
