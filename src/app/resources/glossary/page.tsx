import { type Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import GlossaryClient from './GlossaryClient';

export const metadata: Metadata = {
  title: 'Piping & Flange Glossary | Technical Terms',
  description:
    'Comprehensive glossary of piping and flange terminology with 50+ technical terms and definitions. Complete reference for flange engineering terminology.',
  keywords: [
    'flange glossary',
    'piping terms',
    'flange terminology',
    'technical definitions',
    'engineering glossary',
    'ASME terms',
    'pipe flange terms',
  ],
  openGraph: {
    title: 'Piping & Flange Glossary',
    description:
      'Complete reference of piping and flange technical terminology and definitions.',
    type: 'article',
    url: 'https://www.apiflange.com/resources/glossary',
  },
};

interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'ASME B16.5',
    definition:
      'American Society of Mechanical Engineers standard for pipe flanges and flanged fittings. Covers specifications for carbon steel, stainless steel, and alloy steel flanges in pressure classes 150, 300, 400, 600, 900, 1500, and 2500 psi.',
    category: 'Standards',
  },
  {
    term: 'Backing Ring',
    definition:
      'A temporary or permanent metal ring placed behind a flange weld to support molten weld metal and prevent it from falling into the pipe bore. Also called a backup ring.',
    category: 'Components',
  },
  {
    term: 'Blind Flange',
    definition:
      'A solid flange with no bore (opening). Used to cap the end of a pipe, nozzle, or vessel. Also serves as an isolation element when bolted to another flange.',
    category: 'Flange Types',
  },
  {
    term: 'Bolt Circle',
    definition:
      'The diameter of the imaginary circle passing through the center of the bolt holes on a flange. Critical dimension for flange compatibility and bolt hole alignment.',
    category: 'Flange Dimensions',
  },
  {
    term: 'Bore',
    definition:
      'The inside diameter (ID) of a flange, which matches the pipe bore. For weld neck flanges, bore matches pipe ID. For slip-on flanges, bore is slightly larger to allow pipe passage.',
    category: 'Flange Dimensions',
  },
  {
    term: 'Buttering',
    definition:
      'Application of a metal layer (usually stainless or alloy steel) to the surface of a carbon steel flange before welding. Used to improve corrosion resistance at the weld junction.',
    category: 'Welding',
  },
  {
    term: 'Companion Flange',
    definition:
      'A mating flange bolted to another flange with a gasket between them. The term indicates the flanges are designed to work together as a pair.',
    category: 'Flange Assembly',
  },
  {
    term: 'Crevice Corrosion',
    definition:
      'Localized corrosion that occurs in narrow gaps or crevices where moisture and oxygen become depleted. Common under gaskets, in bolt holes, and at overlapping edges.',
    category: 'Corrosion',
  },
  {
    term: 'Design Pressure',
    definition:
      'The maximum allowable pressure for which a flange is designed. Based on material properties, wall thickness, and design code requirements. The actual system operating pressure must not exceed this value.',
    category: 'Design',
  },
  {
    term: 'Design Temperature',
    definition:
      'The maximum allowable temperature for which a flange is designed. Pressure-temperature (P-T) ratings decrease with increasing temperature because material strength decreases at elevated temperatures.',
    category: 'Design',
  },
  {
    term: 'Duplex Stainless Steel',
    definition:
      'A class of stainless steel with a two-phase microstructure (austenitic and ferritic). Offers higher strength than austenitic stainless with good corrosion resistance. Excellent for subsea and seawater applications.',
    category: 'Materials',
  },
  {
    term: 'Elongation',
    definition:
      'A measure of material ductility, expressed as a percentage. Represents how much a material stretches before breaking. Higher elongation indicates better toughness and resistance to brittle fracture.',
    category: 'Material Properties',
  },
  {
    term: 'Face Finish',
    definition:
      'The surface condition of the flange face where the gasket seals. Common types include raised face (RF), flat face (FF), ring joint (RTJ), and tongue & groove (T&G). Affects gasket sealing and leakage risk.',
    category: 'Flange Design',
  },
  {
    term: 'Fatigue',
    definition:
      'Failure that occurs after many cycles of loading and unloading, at stresses below the ultimate strength. Critical in applications with cyclic pressure or temperature variations. Weld neck flanges have better fatigue resistance than slip-on.',
    category: 'Failure Modes',
  },
  {
    term: 'Flat Face (FF)',
    definition:
      'A flange face design where the gasket seating surface is completely flat with no raised projection. Commonly used with full-face gaskets. Preferred for large-diameter flanges to reduce gasket cost.',
    category: 'Face Finishes',
  },
  {
    term: 'Flange Class',
    definition:
      'A pressure rating classification system for flanges. Standard classes per ASME B16.5 are 150, 300, 400, 600, 900, 1500, and 2500 psi. Class indicates the design pressure at room temperature.',
    category: 'Standards',
  },
  {
    term: 'Flow Restriction',
    definition:
      'Partial blockage or narrowing that reduces fluid flow through a pipe. Occurs when flange bore is smaller than pipe ID (mismatched), or when orifice plates are installed for flow measurement.',
    category: 'Hydraulics',
  },
  {
    term: 'Forging',
    definition:
      'A metalworking process where material is shaped by compressive forces (hammering or pressing). Forged flanges have better metallurgical quality, toughness, and fatigue resistance than cast flanges.',
    category: 'Manufacturing',
  },
  {
    term: 'Fusion Bonded Epoxy (FBE)',
    definition:
      'A protective coating applied to steel by fusing epoxy powder to hot steel. Provides excellent corrosion resistance for water systems. Per AWWA C550. Suitable for potable water (NSF-61 certified).',
    category: 'Coatings',
  },
  {
    term: 'Galvanic Corrosion',
    definition:
      'Accelerated corrosion that occurs when dissimilar metals are in electrical contact in a conductive medium (like water). The less noble metal (anode) corrodes preferentially to protect the more noble metal (cathode).',
    category: 'Corrosion',
  },
  {
    term: 'Galvanizing',
    definition:
      'Hot-dip galvanizing (ASTM A153) is a process of coating steel with molten zinc. Creates a durable protective coating that is self-healing. Standard protection for outdoor and water service. Effective to ~140°F.',
    category: 'Coatings',
  },
  {
    term: 'Gasket',
    definition:
      'A sealing material placed between two mating flange faces to prevent leakage. Materials include rubber, PTFE, metal, and spiral wound. Must be compatible with fluid, temperature, and pressure conditions.',
    category: 'Components',
  },
  {
    term: 'Hub',
    definition:
      'The raised central portion of a flange. In weld neck flanges, the hub tapers down to the pipe. In slip-on flanges, the hub is shorter. The hub thickness and bore determine the flange strength.',
    category: 'Flange Dimensions',
  },
  {
    term: 'Hydrostatic Pressure',
    definition:
      'Pressure exerted by a fluid at rest. In flange systems, the system pressure acts as hydrostatic pressure on the flange faces, requiring proper bolting and gasket compression to maintain seals.',
    category: 'Hydraulics',
  },
  {
    term: 'Lap Joint Flange',
    definition:
      'A two-piece system consisting of a flange and a separate stub end. The stub end is welded to the pipe; the flange slides over the stub end without being welded, allowing easy flange removal.',
    category: 'Flange Types',
  },
  {
    term: 'Long Weld Neck (LWN)',
    definition:
      'A weld neck flange with an extended tapered hub (typically 1.5x to 2x longer than standard). Provides superior stress distribution and fatigue resistance. Preferred for critical high-temperature and high-pressure applications.',
    category: 'Flange Types',
  },
  {
    term: 'Nominal Pipe Size (NPS)',
    definition:
      'The standard size designation for pipes in the North American system. Examples: 1", 2", 4", 6". Nominally refers to the pipe bore but does not exactly match actual bore (which varies by schedule/wall thickness).',
    category: 'Dimensions',
  },
  {
    term: 'Orifice Flange',
    definition:
      'A specialized flange pair designed to mount an orifice plate for fluid flow measurement. Includes pre-drilled pressure tap holes (vena contracta, D-tap, 1D/2D) for differential pressure measurement per ASME MFC-3M and ISO 5167.',
    category: 'Flange Types',
  },
  {
    term: 'Orifice Plate',
    definition:
      'A thin metal disc with a precisely sized hole that is installed between orifice flanges. Creates a pressure drop proportional to flow rate. Used for accurate flow measurement and control.',
    category: 'Components',
  },
  {
    term: 'Oxidation',
    definition:
      'A chemical reaction where metal loses electrons to oxygen, forming metal oxide (rust). The primary corrosion mechanism for unprotected carbon steel in wet environments.',
    category: 'Corrosion',
  },
  {
    term: 'Passivation',
    definition:
      'A chemical treatment (typically citric or nitric acid) applied to stainless steel flanges to remove iron contaminants and enhance the natural corrosion-resistant oxide film. Improves long-term corrosion resistance.',
    category: 'Surface Treatment',
  },
  {
    term: 'Pitting Corrosion',
    definition:
      'Localized corrosion that creates deep holes or pits in metal surface. Most dangerous type because small surface defect can rapidly perforate the flange. Common in stainless steel in chloride environments.',
    category: 'Corrosion',
  },
  {
    term: 'Pressure Rating',
    definition:
      'The maximum allowable working pressure for a flange at a specified temperature. Defined by ASME B16.5 pressure-temperature (P-T) tables. Varies by class, material, and temperature.',
    category: 'Design',
  },
  {
    term: 'Pressure-Temperature (P-T) Rating',
    definition:
      'A combination value defining maximum allowable pressure at a specific temperature. ASME B16.5 Table 2 provides P-T ratings for standard flange classes and materials. Ratings decrease with temperature as material strength decreases.',
    category: 'Design',
  },
  {
    term: 'Raised Face (RF)',
    definition:
      'A flange face design with a raised surface above the main flange body. Reduces the gasket contact area and allows use of smaller (less expensive) gaskets. Most common face finish for low and medium pressure flanges.',
    category: 'Face Finishes',
  },
  {
    term: 'Reducing Flange',
    definition:
      'A flange designed to connect pipes of different sizes. The bore is sized to the smaller pipe; the flange matches the larger pipe. Eliminates the need for separate reducer fitting.',
    category: 'Flange Types',
  },
  {
    term: 'Ring Joint Gasket (RTJ)',
    definition:
      'A metal gasket (usually stainless octagonal or lens-shaped) that seals in a machined groove on the flange face. Provides maximum sealing for high-pressure and high-temperature applications. Per ASME B16.20.',
    category: 'Gaskets',
  },
  {
    term: 'Schedule',
    definition:
      'A system of standard wall thicknesses for steel pipes. Examples: Schedule 40 (standard), Schedule 80 (extra strong), Schedule 160 (double extra strong). Thicker schedules provide greater pressure rating and strength.',
    category: 'Pipe Specifications',
  },
  {
    term: 'Slip-On Flange',
    definition:
      'A flange that slides over the pipe and is secured by fillet welds on both the inner and outer diameters. Simpler and less expensive than weld neck but provides lower strength and fatigue resistance.',
    category: 'Flange Types',
  },
  {
    term: 'Socket Weld Flange',
    definition:
      'A flange with a recessed socket in the bore that accepts the pipe end. The pipe is inserted to a stop depth and then fillet welded around the outside. More compact than weld neck, suitable for small bore and high-temperature service.',
    category: 'Flange Types',
  },
  {
    term: 'Spectacle Blind',
    definition:
      'An isolation plate assembly consisting of two circular discs (one solid, one with a bore) connected by a bridge, resembling eyeglasses. Rotates 180 degrees to switch between isolation (blocking flow) and bypass (allowing flow) without breaking the connection.',
    category: 'Flange Types',
  },
  {
    term: 'Stress Concentration',
    definition:
      'A localized increase in stress around discontinuities like sharp corners, notches, or welds. Can cause premature failure under cyclic loading. Weld neck flanges reduce stress concentration through gradual transitions.',
    category: 'Design',
  },
  {
    term: 'Stress Corrosion Cracking (SCC)',
    definition:
      'A failure mode caused by the combined effect of tensile stress and corrosive environment. Can cause sudden brittle fracture without much warning. Austenitic stainless is vulnerable in chloride environments under high stress.',
    category: 'Failure Modes',
  },
  {
    term: 'Stub End',
    definition:
      'The welded portion of a lap joint flange system. A short barrel-shaped component that is welded to the pipe. The flange slides over the stub end, creating a two-piece assembly.',
    category: 'Components',
  },
  {
    term: 'Surface Texture',
    definition:
      'The finish of a flange face. Specified in microinches or micrometers of roughness. Affects gasket sealing effectiveness. Typical specifications: 125-250 microinches for RF, 64-125 for RTJ faces.',
    category: 'Surface Finish',
  },
  {
    term: 'Tensile Strength',
    definition:
      'The maximum amount of tensile stress a material can withstand before breaking. Expressed in psi or MPa. Used to calculate pressure ratings using 4:1 safety factor. Decreases with temperature.',
    category: 'Material Properties',
  },
  {
    term: 'Threaded Flange',
    definition:
      'A flange with internal threads (NPT or metric) that screw onto threaded pipe ends. Requires no welding. Limited to small sizes and low pressure classes. Mechanical connection only.',
    category: 'Flange Types',
  },
  {
    term: 'Tongue & Groove (T&G)',
    definition:
      'A flange face finish with a raised tongue on one flange and a matching groove on the mating flange. Provides additional guiding and locating during assembly. Used primarily in large-diameter low-pressure applications.',
    category: 'Face Finishes',
  },
  {
    term: 'Torque Specification',
    definition:
      'The amount of rotational force (measured in pound-feet or newton-meters) to be applied to bolts when tightening a flange. Ensures proper gasket compression and prevents leakage. Varies by bolt size, material, and lubricant used.',
    category: 'Installation',
  },
  {
    term: 'Ultimate Tensile Strength',
    definition:
      'The maximum stress a material can withstand during a tensile test before breaking. Different from yield strength (stress at which permanent deformation begins). ASME uses tensile strength with 4:1 safety factor for pressure rating calculations.',
    category: 'Material Properties',
  },
  {
    term: 'Vibration',
    definition:
      'Cyclic motion of piping due to fluid pulsation, pump operation, or mechanical equipment. Causes fatigue stress in flanges. Weld neck flanges with gradual stress transitions are better for high-vibration service than slip-on flanges.',
    category: 'Service Conditions',
  },
  {
    term: 'Weld Neck Flange',
    definition:
      'A flange with a tapered hub that is butt-welded to the pipe with a full penetration weld. Provides superior stress distribution and fatigue resistance. The most common type for critical and high-pressure applications.',
    category: 'Flange Types',
  },
  {
    term: 'Welding Procedure',
    definition:
      'Written instructions for a specific welding job including electrode type, current, voltage, travel speed, pre-heating, and post-weld heat treatment. Ensures consistent, high-quality welds. Per AWS D1.1 or other welding standards.',
    category: 'Welding',
  },
  {
    term: 'Yield Strength',
    definition:
      'The stress level at which a material begins to deform permanently (stops being purely elastic). Lower than ultimate tensile strength. Important for determining how much stress a flange can handle without permanent damage.',
    category: 'Material Properties',
  },
  {
    term: 'Zinc Plating',
    definition:
      'Electroplated zinc coating applied to steel bolts and small components. Provides moderate corrosion protection for indoor and moderate outdoor service. Less durable than hot-dip galvanizing. Per ASTM B633.',
    category: 'Coatings',
  },
];

export default function GlossaryPage() {
  return (
    <>
      <PageHero
        title="Piping & Flange Glossary"
        subtitle="Complete reference of technical terminology used in flange engineering with 50+ definitions."
        variant="navy"
      />

      <GlossaryClient glossaryTerms={glossaryTerms} />
    </>
  );
}
