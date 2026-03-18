export interface Industry {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  commonFlangeTypes: string[];
  commonStandards: string[];
  commonMaterials: string[];
  imagePlaceholder: string;
}

export const industries: Industry[] = [
  {
    id: "oil-gas",
    name: "Oil & Gas",
    slug: "oil-gas",
    description:
      "Upstream, midstream, and downstream petroleum operations including exploration, production, refining, and transportation of crude oil and natural gas.",
    icon: "Droplet",
    commonFlangeTypes: ["weld-neck", "ring-joint", "slip-on", "blind"],
    commonStandards: ["ASME B16.5", "ASME B16.47", "API 605"],
    commonMaterials: ["A105", "A182 F304", "A182 F316"],
    imagePlaceholder: "/images/industries/oil-gas.svg",
  },
  {
    id: "chemical-processing",
    name: "Chemical Processing",
    slug: "chemical-processing",
    description:
      "Industrial chemical manufacturing, petrochemical refining, specialty chemicals, and chemical research facilities with diverse fluid requirements.",
    icon: "Beaker",
    commonFlangeTypes: ["weld-neck", "socket-weld", "blind", "spectacle-blind"],
    commonStandards: ["ASME B16.5", "ASME B16.47"],
    commonMaterials: ["A105", "A182 F304", "A182 F316"],
    imagePlaceholder: "/images/industries/chemical.svg",
  },
  {
    id: "power-generation",
    name: "Power Generation",
    slug: "power-generation",
    description:
      "Thermal, nuclear, and renewable power plants including steam systems, water cooling, and pressurized fluid management in power production.",
    icon: "Zap",
    commonFlangeTypes: ["weld-neck", "ring-joint", "blind", "socket-weld"],
    commonStandards: ["ASME B16.5", "ASME B16.47"],
    commonMaterials: ["A105", "A182 F304", "A182 F316"],
    imagePlaceholder: "/images/industries/power.svg",
  },
  {
    id: "water-treatment",
    name: "Water Treatment & Utilities",
    slug: "water-treatment",
    description:
      "Municipal water supply, wastewater treatment, stormwater management, and industrial water systems serving communities and facilities.",
    icon: "Droplets",
    commonFlangeTypes: ["awwa-c207", "weld-neck", "slip-on", "blind"],
    commonStandards: ["AWWA C207", "AWWA C228", "ASME B16.5"],
    commonMaterials: ["A105"],
    imagePlaceholder: "/images/industries/water.svg",
  },
  {
    id: "hvac-refrigeration",
    name: "HVAC & Refrigeration",
    slug: "hvac-refrigeration",
    description:
      "Heating, ventilation, air conditioning systems and industrial refrigeration equipment including chillers and cooling circuits.",
    icon: "Wind",
    commonFlangeTypes: ["slip-on", "threaded", "socket-weld", "blind"],
    commonStandards: ["ASME B16.5"],
    commonMaterials: ["A105", "A182 F304"],
    imagePlaceholder: "/images/industries/hvac.svg",
  },
  {
    id: "pharmaceutical-biotech",
    name: "Pharmaceutical & Biotech",
    slug: "pharmaceutical-biotech",
    description:
      "Pharmaceutical manufacturing, biopharmaceutical production, and biotech facilities requiring sanitary and sterile piping systems.",
    icon: "Pill",
    commonFlangeTypes: ["weld-neck", "socket-weld", "threaded", "blind"],
    commonStandards: ["ASME B16.5", "DIN EN 1092-1"],
    commonMaterials: ["A182 F304", "A182 F316"],
    imagePlaceholder: "/images/industries/pharma.svg",
  },
  {
    id: "food-beverage",
    name: "Food & Beverage",
    slug: "food-beverage",
    description:
      "Food processing, beverage production, dairy facilities, and food service equipment requiring sanitary and food-safe piping.",
    icon: "Utensils",
    commonFlangeTypes: ["weld-neck", "socket-weld", "blind", "slip-on"],
    commonStandards: ["ASME B16.5", "DIN EN 1092-1"],
    commonMaterials: ["A182 F304", "A182 F316"],
    imagePlaceholder: "/images/industries/food.svg",
  },
  {
    id: "semiconductor",
    name: "Semiconductor Manufacturing",
    slug: "semiconductor",
    description:
      "Semiconductor fabrication plants (fabs) requiring ultra-pure fluid delivery and specialty gas systems with precision control.",
    icon: "Cpu",
    commonFlangeTypes: [
      "socket-weld",
      "weld-neck",
      "threaded",
      "orifice",
    ],
    commonStandards: ["ASME B16.5", "DIN EN 1092-1"],
    commonMaterials: ["A182 F304", "A182 F316"],
    imagePlaceholder: "/images/industries/semiconductor.svg",
  },
  {
    id: "pulp-paper",
    name: "Pulp & Paper",
    slug: "pulp-paper",
    description:
      "Pulp and paper mills with steam systems, high-temperature/high-pressure applications, and chemical processing requirements.",
    icon: "FileText",
    commonFlangeTypes: ["weld-neck", "slip-on", "blind", "ring-joint"],
    commonStandards: ["ASME B16.5", "ASME B16.47"],
    commonMaterials: ["A105", "A182 F304"],
    imagePlaceholder: "/images/industries/pulp-paper.svg",
  },
  {
    id: "mining-metals",
    name: "Mining & Metals",
    slug: "mining-metals",
    description:
      "Mining operations, metal processing, smelting, and metalworking facilities with demanding fluid transport and thermal requirements.",
    icon: "Pickaxe",
    commonFlangeTypes: ["weld-neck", "slip-on", "blind", "socket-weld"],
    commonStandards: ["ASME B16.5", "ASME B16.47"],
    commonMaterials: ["A105"],
    imagePlaceholder: "/images/industries/mining.svg",
  },
  {
    id: "infrastructure",
    name: "Infrastructure & Construction",
    slug: "infrastructure",
    description:
      "Buildings, bridges, and civil infrastructure projects including HVAC, plumbing, and mechanical systems installation.",
    icon: "Building2",
    commonFlangeTypes: ["slip-on", "weld-neck", "threaded", "blind"],
    commonStandards: ["ASME B16.5"],
    commonMaterials: ["A105"],
    imagePlaceholder: "/images/industries/infrastructure.svg",
  },
  {
    id: "maritime-offshore",
    name: "Maritime & Offshore",
    slug: "maritime-offshore",
    description:
      "Offshore drilling, subsea systems, marine vessels, and coastal platforms requiring corrosion-resistant and high-reliability components.",
    icon: "Anchor",
    commonFlangeTypes: ["ring-joint", "weld-neck", "blind", "socket-weld"],
    commonStandards: ["ASME B16.5", "ASME B16.47", "API 605"],
    commonMaterials: ["A182 F304", "A182 F316", "A182 F91"],
    imagePlaceholder: "/images/industries/maritime.svg",
  },
];
