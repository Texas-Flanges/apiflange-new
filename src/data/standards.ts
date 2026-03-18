export interface Standard {
  id: string;
  name: string;
  slug: string;
  code: string;
  organization: string;
  sizeRange: string;
  pressureClasses: string[];
  description: string;
  applicableFlangeTypes: string[];
}

export const standards: Standard[] = [
  {
    id: "asme-b16-5",
    name: "ASME B16.5",
    slug: "asme-b16-5",
    code: "B16.5",
    organization: "ASME (American Society of Mechanical Engineers)",
    sizeRange: "1/2\" to 24\"",
    pressureClasses: ["150", "300", "600", "900", "1500", "2500"],
    description:
      "Most widely used industrial flange standard in North America. Covers steel pipe flanges for industrial and commercial applications. Specifies dimensions, pressure-temperature ratings, materials, and bolting requirements for weld neck, slip-on, socket weld, threaded, and blind flanges.",
    applicableFlangeTypes: [
      "weld-neck",
      "slip-on",
      "socket-weld",
      "threaded",
      "blind",
      "lap-joint",
      "reducing",
      "orifice",
      "male-female",
      "tongue-groove",
      "ring-joint",
    ],
  },
  {
    id: "asme-b16-47",
    name: "ASME B16.47",
    slug: "asme-b16-47",
    code: "B16.47",
    organization: "ASME (American Society of Mechanical Engineers)",
    sizeRange: "4\" to 60\"",
    pressureClasses: ["150", "300", "600", "900", "1500", "2500"],
    description:
      "Standard for large-diameter pipe flanges used primarily in petroleum refining and power generation industries. Two series: Series A (API 605 compatible) and Series B. Covers 4\" through 60\" nominal pipe sizes.",
    applicableFlangeTypes: [
      "weld-neck",
      "slip-on",
      "blind",
      "lap-joint",
      "ring-joint",
    ],
  },
  {
    id: "awwa-c207",
    name: "AWWA C207",
    slug: "awwa-c207",
    code: "C207",
    organization: "AWWA (American Water Works Association)",
    sizeRange: "4\" to 48\"",
    pressureClasses: ["Class D", "Class E"],
    description:
      "Standard for weld neck steel pipe flanges used extensively in water utility applications. Developed specifically for municipal water systems, treatment plants, and distribution networks. Optimized for water service with economical design.",
    applicableFlangeTypes: ["weld-neck", "blind"],
  },
  {
    id: "awwa-c228",
    name: "AWWA C228",
    slug: "awwa-c228",
    code: "C228",
    organization: "AWWA (American Water Works Association)",
    sizeRange: "3\" to 54\"",
    pressureClasses: ["Pressure Classes"],
    description:
      "Standard for flanged ductile iron pipe for water systems. Covers joint flanges and companion flanges used with ductile iron pipe. Widely used in water distribution and transmission mains.",
    applicableFlangeTypes: ["weld-neck", "companion", "blind"],
  },
  {
    id: "din-en-1092-1",
    name: "DIN EN 1092-1",
    slug: "din-en-1092-1",
    code: "DIN EN 1092-1",
    organization: "DIN/EN (Deutsches Institut für Normung / European Standardization)",
    sizeRange: "DN10 to DN600 (1/2\" to 24\")",
    pressureClasses: ["PN6", "PN10", "PN16", "PN25", "PN40"],
    description:
      "European standard for steel flanges in industrial applications. Metric sizing with multiple face forms (flat, raised, ring joint). Widely used internationally outside North America. Compatible with ISO standards.",
    applicableFlangeTypes: [
      "weld-neck",
      "slip-on",
      "socket-weld",
      "threaded",
      "blind",
      "lap-joint",
      "ring-joint",
    ],
  },
  {
    id: "api-605",
    name: "API 605",
    slug: "api-605",
    code: "API 605",
    organization: "API (American Petroleum Institute)",
    sizeRange: "4\" to 60\"",
    pressureClasses: ["150", "300", "600", "900"],
    description:
      "Large-diameter pipe flange standard for oil and gas applications. Often referenced alongside ASME B16.47 Series A. Specifies dimensions and pressure-temperature ratings for large industrial flanges in petroleum service.",
    applicableFlangeTypes: ["weld-neck", "slip-on", "blind", "lapped"],
  },
  {
    id: "mss-sp-44",
    name: "MSS SP-44",
    slug: "mss-sp-44",
    code: "SP-44",
    organization: "MSS (Manufacturers Standardization Society)",
    sizeRange: "1/2\" to 24\"",
    pressureClasses: ["150", "300", "600", "900", "1500", "2500"],
    description:
      "Pipe hangers and supports standard that includes flanged fitting compatibility requirements. Referenced for dimensional consistency across equipment and support systems. Ensures proper flange integration in support design.",
    applicableFlangeTypes: [
      "weld-neck",
      "slip-on",
      "socket-weld",
      "blind",
    ],
  },
  {
    id: "iso-6162",
    name: "ISO 6162",
    slug: "iso-6162",
    code: "ISO 6162",
    organization: "ISO (International Organization for Standardization)",
    sizeRange: "Metric - DN50 to DN320",
    pressureClasses: ["PN6 to PN42"],
    description:
      "International standard for hydraulic fluid power pipe and hose fittings. Covers metric-sized flanges for hydraulic applications. Global reference for high-pressure hydraulic flange systems.",
    applicableFlangeTypes: ["socket-weld", "weld-neck", "threaded"],
  },
];
