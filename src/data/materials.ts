export interface Material {
  id: string;
  name: string;
  slug: string;
  astmSpec: string;
  grades: string[];
  description: string;
  chemicalComposition: {
    [key: string]: string;
  };
  mechanicalProperties: {
    tensileStrength: string;
    yieldStrength: string;
    elongation: string;
    hardness?: string;
  };
  temperatureRange: {
    min: number;
    max: number;
    unit: string;
  };
  applications: string[];
  commonFlangeTypes: string[];
}

export const materials: Material[] = [
  {
    id: "a105",
    name: "ASTM A105 Carbon Steel",
    slug: "a105",
    astmSpec: "ASTM A105",
    grades: ["Normalized"],
    description:
      "Normalized carbon steel for general service flanges. Most common and economical choice for low to medium pressure applications. Good weldability and machinability.",
    chemicalComposition: {
      Carbon: "0.19-0.30%",
      Manganese: "0.37-1.06%",
      Phosphorus: "max 0.035%",
      Sulfur: "max 0.035%",
      Silicon: "0.10-0.35%",
    },
    mechanicalProperties: {
      tensileStrength: "110-145 ksi",
      yieldStrength: "60 ksi minimum",
      elongation: "25% minimum",
      hardness: "217 HV maximum",
    },
    temperatureRange: { min: -20, max: 800, unit: "°F" },
    applications: [
      "General Service",
      "Low-Pressure Systems",
      "Steam Systems",
      "Water Distribution",
      "Chemical Processing",
      "Non-Critical Applications",
    ],
    commonFlangeTypes: [
      "weld-neck",
      "slip-on",
      "socket-weld",
      "blind",
      "threaded",
      "lap-joint",
    ],
  },
  {
    id: "a182-f304",
    name: "ASTM A182 F304 Stainless Steel",
    slug: "a182-f304",
    astmSpec: "ASTM A182",
    grades: ["F304"],
    description:
      "Austenitic stainless steel with excellent corrosion resistance and weldability. Suitable for moderately corrosive environments and high-temperature service.",
    chemicalComposition: {
      Carbon: "max 0.08%",
      Chromium: "17.0-19.0%",
      Nickel: "8.0-11.0%",
      Manganese: "max 2.0%",
      Silicon: "max 1.0%",
      Phosphorus: "max 0.045%",
      Sulfur: "max 0.030%",
    },
    mechanicalProperties: {
      tensileStrength: "90 ksi minimum",
      yieldStrength: "30 ksi minimum",
      elongation: "40% minimum",
      hardness: "217 HV maximum",
    },
    temperatureRange: { min: -425, max: 1500, unit: "°F" },
    applications: [
      "Corrosive Environments",
      "Food & Beverage",
      "Pharmaceutical",
      "High-Temperature Service",
      "Marine Applications",
      "Sanitary Service",
    ],
    commonFlangeTypes: [
      "weld-neck",
      "slip-on",
      "socket-weld",
      "blind",
      "threaded",
      "ring-joint",
    ],
  },
  {
    id: "a182-f316",
    name: "ASTM A182 F316 Stainless Steel",
    slug: "a182-f316",
    astmSpec: "ASTM A182",
    grades: ["F316"],
    description:
      "Molybdenum-bearing austenitic stainless steel with superior corrosion resistance to chlorides. Best choice for marine and highly corrosive service.",
    chemicalComposition: {
      Carbon: "max 0.08%",
      Chromium: "16.0-18.0%",
      Nickel: "10.0-14.0%",
      Molybdenum: "2.0-3.0%",
      Manganese: "max 2.0%",
      Silicon: "max 1.0%",
      Phosphorus: "max 0.045%",
      Sulfur: "max 0.030%",
    },
    mechanicalProperties: {
      tensileStrength: "90 ksi minimum",
      yieldStrength: "30 ksi minimum",
      elongation: "40% minimum",
      hardness: "217 HV maximum",
    },
    temperatureRange: { min: -425, max: 1500, unit: "°F" },
    applications: [
      "Seawater Service",
      "Offshore Applications",
      "Highly Corrosive Environments",
      "Chloride-Bearing Fluids",
      "Critical Process Equipment",
      "Subsea Systems",
    ],
    commonFlangeTypes: [
      "weld-neck",
      "slip-on",
      "socket-weld",
      "blind",
      "ring-joint",
    ],
  },
  {
    id: "a182-f91",
    name: "ASTM A182 F91 Alloy Steel",
    slug: "a182-f91",
    astmSpec: "ASTM A182",
    grades: ["F91"],
    description:
      "Ferritic-martensitic chromium-molybdenum alloy steel for high-temperature and high-pressure applications. Superior creep resistance at elevated temperatures.",
    chemicalComposition: {
      Carbon: "0.09-0.13%",
      Chromium: "8.5-9.5%",
      Molybdenum: "0.85-1.05%",
      Vanadium: "0.18-0.25%",
      Niobium: "0.06-0.10%",
      Nitrogen: "0.03-0.07%",
      Manganese: "max 1.0%",
    },
    mechanicalProperties: {
      tensileStrength: "100 ksi minimum",
      yieldStrength: "80 ksi minimum",
      elongation: "18% minimum",
      hardness: "265 HV maximum",
    },
    temperatureRange: { min: -20, max: 1200, unit: "°F" },
    applications: [
      "Power Generation",
      "High-Temperature Steam",
      "Creep-Resistant Service",
      "Petrochemical",
      "Oil & Gas",
      "Extreme Temperature",
    ],
    commonFlangeTypes: ["weld-neck", "socket-weld", "blind", "ring-joint"],
  },
  {
    id: "a105l",
    name: "ASTM A105L Carbon Steel",
    slug: "a105l",
    astmSpec: "ASTM A105",
    grades: ["Normalized - Low Carbon"],
    description:
      "Low-carbon version of A105 for improved weldability and cryogenic service. Enhanced toughness at sub-zero temperatures.",
    chemicalComposition: {
      Carbon: "max 0.20%",
      Manganese: "0.37-0.80%",
      Phosphorus: "max 0.035%",
      Sulfur: "max 0.035%",
      Silicon: "0.10-0.35%",
    },
    mechanicalProperties: {
      tensileStrength: "105-125 ksi",
      yieldStrength: "55 ksi minimum",
      elongation: "29% minimum",
    },
    temperatureRange: { min: -320, max: 600, unit: "°F" },
    applications: [
      "Cryogenic Service",
      "LNG Systems",
      "Low-Temperature Vessels",
      "Welding-Critical Applications",
      "Improved Toughness Requirements",
    ],
    commonFlangeTypes: ["weld-neck", "slip-on", "socket-weld", "blind"],
  },
  {
    id: "a694-f65",
    name: "ASTM A694 F65 High-Strength Carbon Steel",
    slug: "a694-f65",
    astmSpec: "ASTM A694",
    grades: ["F65"],
    description:
      "Higher-strength carbon steel for demanding applications. Superior yield strength for high-pressure systems with weight reduction.",
    chemicalComposition: {
      Carbon: "max 0.28%",
      Manganese: "0.50-1.25%",
      Silicon: "0.15-0.40%",
      Phosphorus: "max 0.025%",
      Sulfur: "max 0.025%",
      Chromium: "max 0.50%",
      Molybdenum: "max 0.15%",
    },
    mechanicalProperties: {
      tensileStrength: "100-130 ksi",
      yieldStrength: "65 ksi minimum",
      elongation: "24% minimum",
    },
    temperatureRange: { min: -20, max: 800, unit: "°F" },
    applications: [
      "High-Pressure Systems",
      "Weight-Critical Applications",
      "Offshore Pipelines",
      "Oil & Gas",
      "High-Stress Service",
    ],
    commonFlangeTypes: ["weld-neck", "socket-weld", "blind"],
  },
  {
    id: "a182-f316l",
    name: "ASTM A182 F316L Stainless Steel",
    slug: "a182-f316l",
    astmSpec: "ASTM A182",
    grades: ["F316L"],
    description:
      "Extra-low-carbon version of F316 for improved corrosion resistance in welded areas. Superior intergranular corrosion resistance.",
    chemicalComposition: {
      Carbon: "max 0.03%",
      Chromium: "16.0-18.0%",
      Nickel: "10.0-14.0%",
      Molybdenum: "2.0-3.0%",
      Manganese: "max 2.0%",
      Silicon: "max 1.0%",
    },
    mechanicalProperties: {
      tensileStrength: "85 ksi minimum",
      yieldStrength: "25 ksi minimum",
      elongation: "40% minimum",
    },
    temperatureRange: { min: -425, max: 1500, unit: "°F" },
    applications: [
      "Seawater Systems",
      "Welded Critical Service",
      "Intergranular Corrosion Prevention",
      "Chemical Processing",
      "High-Purity Applications",
    ],
    commonFlangeTypes: [
      "weld-neck",
      "slip-on",
      "socket-weld",
      "blind",
      "ring-joint",
    ],
  },
  {
    id: "a182-f304l",
    name: "ASTM A182 F304L Stainless Steel",
    slug: "a182-f304l",
    astmSpec: "ASTM A182",
    grades: ["F304L"],
    description:
      "Extra-low-carbon version of F304 for improved weldability and corrosion resistance in heat-affected zones without post-weld annealing.",
    chemicalComposition: {
      Carbon: "max 0.03%",
      Chromium: "17.0-19.0%",
      Nickel: "8.0-11.0%",
      Manganese: "max 2.0%",
      Silicon: "max 1.0%",
    },
    mechanicalProperties: {
      tensileStrength: "85 ksi minimum",
      yieldStrength: "25 ksi minimum",
      elongation: "40% minimum",
    },
    temperatureRange: { min: -425, max: 1500, unit: "°F" },
    applications: [
      "Welded Assemblies",
      "Food & Beverage",
      "Pharmaceutical",
      "Corrosion Prevention",
      "General Stainless Service",
    ],
    commonFlangeTypes: ["weld-neck", "slip-on", "socket-weld", "blind"],
  },
];
