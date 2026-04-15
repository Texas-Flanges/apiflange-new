'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '@/components/layout/SectionWrapper';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import FAQ from '@/components/ui/FAQ';
import CTABanner from '@/components/ui/CTABanner';
import { ChevronRight, ChevronDown, ArrowLeft } from 'lucide-react';

// Metadata is in the server page component
const metadata = {
  title: 'The Complete Flange Types Guide | 15 Types Explained',
  description:
    'Comprehensive guide to 15 flange types including weld neck, slip-on, blind, threaded, socket weld, lap joint, and more. Learn characteristics, applications, standards, and selection criteria.',
  keywords: [
    'flange types',
    'weld neck flange',
    'slip-on flange',
    'blind flange',
    'threaded flange',
    'socket weld flange',
    'lap joint flange',
    'reducing flange',
    'flange guide',
    'ASME B16.5',
    'flange selection',
    'flange applications',
  ],
  openGraph: {
    title: 'The Complete Flange Types Guide: 15 Types Explained',
    description:
      'Master all 15 flange types with detailed specifications, applications, and selection criteria.',
    type: 'article',
    url: 'https://www.apiflange.com/resources/flange-types-guide',
  },
};

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface FlangeType {
  id: string;
  name: string;
  definition: string;
  characteristics: string[];
  pros: string[];
  cons: string[];
  applications: string[];
  standards: string[];
  faceOptions: string[];
}

const flangeTypes: FlangeType[] = [
  {
    id: 'weld-neck',
    name: 'Weld Neck Flange',
    definition:
      'A weld neck flange features a long tapered hub that is welded to the pipe. The tapered design provides stress relief and distributes loads gradually, reducing stress concentration at the weld. This is the most commonly used flange type in high-pressure and high-temperature applications.',
    characteristics: [
      'Long tapered hub with gradual transition to pipe',
      'Excellent stress distribution properties',
      'Higher cost than slip-on due to machining and material',
      'Requires full penetration weld for structural integrity',
      'Bore matches pipe ID (butt weld compatible)',
      'Available in standard and long weld neck (LWN) configurations',
    ],
    pros: [
      'Superior stress distribution and reduced fatigue loading',
      'Best for high-temperature and high-pressure services',
      'Excellent corrosion resistance at weld area due to gradual transition',
      'Lower vibration and deflection',
      'Most common type - proven track record in critical applications',
      'Better for thick-wall piping systems',
    ],
    cons: [
      'Higher cost compared to slip-on flanges',
      'Requires skilled welders for proper installation',
      'More complex machining increases lead times',
      'Rigid connection reduces flexibility for misalignment',
      'Difficult to repair or remove without cutting pipe',
    ],
    applications: [
      'High-pressure steam and hot water systems',
      'Petrochemical and chemical processing plants',
      'Power generation (steam, combined cycle, geothermal)',
      'Oil and gas pipelines',
      'Cryogenic services (LF2 material)',
      'High-temperature thermal applications',
      'Severe service and critical pressure systems',
    ],
    standards: [
      'ASME B16.5 (Classes 150-2500)',
      'ASME B16.47 Series A & B (large diameter)',
      'API 6A (wellhead equipment)',
      'EN 1092-1 (European standard)',
    ],
    faceOptions: ['Raised Face (RF)', 'Ring Joint (RTJ)', 'Flat Face (FF)', 'Tongue & Groove (T&G)'],
  },
  {
    id: 'slip-on',
    name: 'Slip-On Flange',
    definition:
      'A slip-on flange slides over the pipe and is secured with fillet welds on both the inner and outer diameters. The flange bore is slightly larger than the pipe OD, allowing the pipe to slide through. This type is simpler to manufacture and install than weld neck flanges.',
    characteristics: [
      'Simple cylindrical bore slightly larger than pipe OD',
      'Secured with fillet welds inside and outside',
      'Lower manufacturing complexity than weld neck',
      'Bore ID is larger than pipe ID for slipping over pipe',
      'Easier alignment during installation',
      'Shorter hub compared to weld neck',
    ],
    pros: [
      'Lower cost than weld neck flanges',
      'Easier and faster installation',
      'Better tolerance for pipe misalignment',
      'Simpler welding (fillet welds only)',
      'Smaller footprint in confined spaces',
      'Available in all standard classes and materials',
    ],
    cons: [
      'Lower stress rating and fatigue life compared to weld neck',
      'Inner diameter fillet weld is stress concentration point',
      'Not suitable for very high pressures or temperatures',
      'Higher vibration and deflection under load',
      'Limited use in critical applications',
      'Bore mismatch can cause turbulence in high-flow services',
    ],
    applications: [
      'Moderate pressure systems (Class 150-600)',
      'Non-critical service piping',
      'Industrial compressed air systems',
      'Building HVAC and water systems',
      'Utility water distribution',
      'Low-temperature applications',
      'General industrial piping (Class 150)',
      'Instrumentation and process control lines',
    ],
    standards: [
      'ASME B16.5 (Classes 150-600, limited higher classes)',
      'EN 1092-1',
      'DIN 2633',
      'JIS B2220',
    ],
    faceOptions: ['Raised Face (RF)', 'Flat Face (FF)', 'Ring Joint (RTJ) - less common'],
  },
  {
    id: 'blind',
    name: 'Blind Flange',
    definition:
      'A blind flange is a solid disc with no center bore. It is used to seal the end of a pipe or nozzle. Unlike other flanges that accommodate pipe passage, a blind flange closes the system completely. They are frequently used on pressure vessel nozzles and as line terminators.',
    characteristics: [
      'Completely solid with no center opening',
      'Essentially a disc bolted to a pipe end',
      'Must support full pressure on internal face',
      'Hub thickness matches other flange types',
      'Concentrates stress in center of disc',
      'Available in all pressure classes and materials',
    ],
    pros: [
      'Simple design with no bore considerations',
      'Versatile - used as end caps and vessel closures',
      'Can be removable (blind flange) or permanent (blind plug)',
      'Easy to install and remove',
      'No bore mismatch issues',
      'Available in all pressure ratings and materials',
    ],
    cons: [
      'High stress concentration in solid center',
      'Requires thicker material for higher pressure classes',
      'Heavier than other flange types of same class',
      'Full pressure acts on center area',
      'Difficult to remove from deep nozzles',
      'Must be properly supported to prevent bending',
    ],
    applications: [
      'Pressure vessel end closures',
      'Vessel nozzle blind-offs',
      'Pipeline end caps and temporary closures',
      'Thermal expansion chambers',
      'Testing caps for line validation',
      'Dead legs and drain connections',
      'Orifice flange carriers (backing flanges)',
      'Permanent system terminators',
    ],
    standards: [
      'ASME B16.5 (Classes 150-2500)',
      'ASME Section VIII (pressure vessels)',
      'ASME B16.47 Series A & B',
      'API 6A, API 6D',
    ],
    faceOptions: ['Raised Face (RF)', 'Flat Face (FF)'],
  },
  {
    id: 'threaded',
    name: 'Threaded Flange',
    definition:
      'A threaded flange has internal threads sized to match the pipe thread. The flange is screwed onto the pipe using the threaded connection. This type is common in smaller piping systems where welding is not practical or desired, providing a mechanical (non-welded) connection.',
    characteristics: [
      'Internal NPT (National Pipe Thread) or metric threads',
      'Mechanical connection - no welding required',
      'Available in small and medium sizes (up to 4" typically)',
      'Female threaded bore matches pipe thread',
      'Hub size optimized for threaded connection',
      'Simple installation by hand or with pipe wrench',
    ],
    pros: [
      'No welding required - field-installable',
      'Easy connection and disconnection for maintenance',
      'Excellent for small diameter piping',
      'No special skills needed for installation',
      'Lower equipment cost (no welding equipment needed)',
      'Suitable for test systems and temporary installations',
    ],
    cons: [
      'Limited to lower pressure classes (typically Class 150-300)',
      'Smaller size range available',
      'Thread stress concentration point',
      'Not suitable for high-temperature services',
      'Can develop leaks if threads are damaged',
      'Limited to mechanical fastening loads',
    ],
    applications: [
      'Small bore instrumentation (1/2" to 2")',
      'Laboratory and test piping',
      'Industrial water and air systems',
      'Low-pressure steam condensate systems',
      'Temporary test installations',
      'Process control lines (small diameter)',
      'Building services piping',
      'HVAC system components (small sizes)',
    ],
    standards: [
      'ASME B16.5 (Classes 150-300, limited higher classes)',
      'ISO 6149 (metric thread)',
      'NPT thread per ASME B4.1',
      'BSP thread (British Standard Pipe)',
    ],
    faceOptions: ['Raised Face (RF)', 'Flat Face (FF)'],
  },
  {
    id: 'socket-weld',
    name: 'Socket Weld Flange',
    definition:
      'A socket weld flange has a recessed socket in the bore that accepts the pipe end. The pipe is inserted into the socket and then fillet welded. This design provides a more compact connection than weld neck flanges while still offering good strength through proper socket dimensions.',
    characteristics: [
      'Recessed socket bore for pipe insertion',
      'Pipe inserted to depth stop in socket',
      'Fillet welded around pipe outside the socket',
      'Compact design - shorter hub than weld neck',
      'Available in small to medium sizes',
      'Hub thickness less than weld neck for same class',
    ],
    pros: [
      'More compact than weld neck flanges',
      'Better stress distribution than slip-on',
      'Smaller footprint for confined spaces',
      'Stronger than threaded connections',
      'Suitable for high-temperature services',
      'Good corrosion performance',
    ],
    cons: [
      'Higher cost than slip-on',
      'Requires skilled welders for socket weld',
      'Limited to smaller piping sizes (typically to 4")',
      'Bore mismatch can cause stress concentration',
      'Not ideal for very high pressures',
      'Difficult to align in confined spaces',
    ],
    applications: [
      'High-temperature steam systems (Class 600+)',
      'Thermal power plants',
      'Chemical processing (small bore)',
      'Instrumentation and vent piping',
      'Oil and gas applications (small bore)',
      'Cryogenic transfer lines',
      'Specialty chemical systems',
      'Space-constrained piping',
    ],
    standards: [
      'ASME B16.5 (Classes 150-2500)',
      'ASME B16.11 (forged fittings)',
      'API 6A (small bore)',
      'EN 1092-1',
    ],
    faceOptions: ['Raised Face (RF)', 'Ring Joint (RTJ)'],
  },
  {
    id: 'lap-joint',
    name: 'Lap Joint Flange',
    definition:
      'A lap joint flange consists of two components: the flange itself and a stub end (lap ring). The stub end fits over the pipe and supports the flange, while the flange slides freely over the stub end. The stub end is welded to the pipe, but the flange is not - providing easy flange removal and replacement.',
    characteristics: [
      'Two-piece design: stub end plus flange',
      'Flange slides over stub end without welding',
      'Stub end welded to pipe',
      'Stub end supports the flange load',
      'Flange can be removed without disturbing pipe',
      'Used with loose backing rings or flat lap rings',
    ],
    pros: [
      'Flange is easily removable without cutting pipe',
      'Ideal for frequent maintenance and inspection',
      'Stub end weld is simpler than full flange weld',
      'Cost-effective when frequent flange replacement needed',
      'Same bolt circle as conventional flange',
      'Easy alignment of bolt holes',
    ],
    cons: [
      'Requires stub ends (two-piece system)',
      'Slightly higher cost due to two components',
      'Flange cannot support radial loads as directly',
      'Stub end weld must be done correctly',
      'Flange bore is larger than pipe ID',
      'Limited to lower pressure classes (Class 150-300 typical)',
    ],
    applications: [
      'Tanks and vessels with frequent access requirements',
      'Valve connections requiring periodic maintenance',
      'Temporary test and research systems',
      'Instrumentation lines',
      'Low-pressure steam and condensate systems',
      'Locations requiring regular equipment replacement',
      'Piping where flange is not permanently attached',
      'Educational laboratory setups',
    ],
    standards: [
      'ASME B16.5 (Classes 150-300)',
      'ASME B16.47',
      'EN 1092-1 Type LE',
      'DIN 2500',
    ],
    faceOptions: ['Raised Face (RF)', 'Flat Face (FF)'],
  },
  {
    id: 'reducing',
    name: 'Reducing Flange',
    definition:
      'A reducing flange is used to connect two pipes of different sizes. The flange bore matches the smaller pipe size while the flange face diameter accommodates the larger pipe size. Reducing flanges eliminate the need for a separate reducer fitting between two different size pipes.',
    characteristics: [
      'Bore size smaller than flange ID',
      'Designed for two different pipe sizes',
      'Available as weld neck or slip-on style',
      'Hub offset to accommodate size transition',
      'Reduces material waste compared to separate reducer',
      'Available in all standard pressure classes',
    ],
    pros: [
      'Eliminates separate reducer fitting',
      'Saves space in piping systems',
      'Reduces number of connections',
      'Cost-effective for size transitions',
      'Available in both weld neck and slip-on',
      'Cleaner, more professional appearance',
    ],
    cons: [
      'More expensive than standard flanges',
      'Limited to specific size combinations',
      'More complex manufacturing',
      'Longer lead times for stock availability',
      'Requires careful selection of correct size combination',
      'Flow restrictions at transition in some designs',
    ],
    applications: [
      'Pump discharge piping (reducing pressure drop)',
      'Heat exchanger inlet/outlet sizing',
      'Main header to branch line transitions',
      'Turbine extraction line systems',
      'Process piping with variable flow requirements',
      'Vessel nozzles at different sizes',
      'Large diameter main lines to smaller branch connections',
      'Load balancing in parallel systems',
    ],
    standards: [
      'ASME B16.5 (custom sizes per customer spec)',
      'ASME B16.47 (large diameter)',
      'EN 1092-1 (European sizes)',
      'Custom per engineering requirements',
    ],
    faceOptions: ['Raised Face (RF)', 'Flat Face (FF)'],
  },
  {
    id: 'long-weld-neck',
    name: 'Long Weld Neck Flange (LWN)',
    definition:
      'A long weld neck flange extends the tapered hub significantly longer than standard weld neck flanges. The extended hub provides additional stress relief, better alignment, and enhanced load distribution. LWN flanges are specified for critical applications requiring maximum reliability and longevity.',
    characteristics: [
      'Extended tapered hub (typically 1.5x to 2x standard)',
      'Gradual stress transition over longer distance',
      'Better for thick-wall and high-pressure pipe',
      'Improved alignment characteristics',
      'More material and longer machining required',
      'Maximum stress relief properties',
    ],
    pros: [
      'Superior stress distribution over extended length',
      'Best option for thick-wall piping (schedules 160, XXS)',
      'Excellent for vibration-prone services',
      'Maximum fatigue resistance',
      'Superior corrosion protection at weld',
      'Best choice for critical high-temperature applications',
    ],
    cons: [
      'Highest cost among weld neck variations',
      'Longer lead times for manufacturing',
      'Requires more skilled welding',
      'Extended hub may be problematic in confined spaces',
      'Heavier than standard weld neck',
      'Not always necessary for lower pressure classes',
    ],
    applications: [
      'Supercritical steam systems (ASME Class 1300-2500)',
      'Nuclear reactor cooling systems',
      'Ultra-high-temperature processing',
      'Thick-wall cryogenic systems',
      'Critical pressure vessels',
      'Extreme service petrochemical applications',
      'Subsea deep-water piping',
      'Research reactor and experimental systems',
    ],
    standards: [
      'ASME B16.5 (all classes, specified as LWN option)',
      'ASME B16.47 (large diameter LWN)',
      'MSS SP-44 (weld neck flange dimensions)',
      'API 6A (wellhead equipment)',
    ],
    faceOptions: ['Raised Face (RF)', 'Ring Joint (RTJ)', 'Flat Face (FF)'],
  },
  {
    id: 'orifice',
    name: 'Orifice Flange',
    definition:
      'Orifice flanges are specialized flanges used to mount orifice plates for flow measurement. The flange pair includes pressure tap holes designed to connect differential pressure transmitters. An orifice flange pair is bolted on either side of an orifice plate, with the plate captured between them.',
    characteristics: [
      'Two-piece system (upstream and downstream flanges)',
      'Precision-machined pressure tap holes',
      'Standard tap positions (vena contracta, D, 1D/2D)',
      'Integral or separate orifice plate carrier',
      'Designed for accurate flow calculation',
      'Available in all pressure classes',
    ],
    pros: [
      'Dedicated design for flow measurement accuracy',
      'Standard tap configurations per ASME and ISO',
      'Reduces connection hardware',
      'Precision tapping ensures measurement accuracy',
      'Cost-effective for permanent flow monitoring',
      'Easy pressure transmitter connection',
    ],
    cons: [
      'Pressure drop across orifice plate (energy loss)',
      'Requires careful flange alignment for accuracy',
      'Not suitable for highly viscous or slurry services',
      'Restricted to standard orifice plate sizes',
      'Higher cost than conventional flanges',
      'Tap plugging risk with dirty fluids',
    ],
    applications: [
      'Process fluid flow measurement and control',
      'Natural gas metering stations',
      'Steam flow measurement (power plants)',
      'Hydrocarbon and chemical flow monitoring',
      'HVAC system balancing',
      'Water distribution systems',
      'Oil and gas pipeline measurement',
      'Custody transfer applications',
    ],
    standards: [
      'ASME B16.5 with B16.36 (orifice plates)',
      'ASME MFC-3M (orifice flow measurement)',
      'ISO 5167 (orifice plates)',
      'AGA Report No. 3 (natural gas)',
    ],
    faceOptions: ['Raised Face (RF)', 'Flat Face (FF)'],
  },
  {
    id: 'spectacle-blind',
    name: 'Spectacle Blind (Isolation Plate)',
    definition:
      'A spectacle blind (also called a spectacle flange or isolation plate) consists of two circular discs connected by a bar or bridge, resembling eyeglasses (spectacles). One disc is solid (blind) to isolate/block flow, while the other is open with a bore. Both are bolted to flanges. By rotating 180 degrees, the operator can switch between isolation and flow states without breaking the connection.',
    characteristics: [
      'Two-disc assembly: solid disc and ring with bore',
      'Connected by rigid bar (bridge)',
      'Rotates 180 degrees between isolation and flow',
      'Ring spacer alternative (two separate plates)',
      'Requires proper bolt torque to seat effectively',
      'Available in all pressure classes and materials',
    ],
    pros: [
      'No line breakage required to switch between isolation and flow',
      'Less expensive than isolation ball valve',
      'Visual indication of position (disc orientation)',
      'Versatile - can be inserted or removed with line live',
      'Works for any fluid type (no mechanical seals)',
      'Available for high-pressure and high-temperature service',
    ],
    cons: [
      'Requires depressurization to rotate safely',
      'Requires bolts to be unbolted to rotate (some designs)',
      'Potential for human error in positioning',
      'Does not provide emergency isolation (unlike block valve)',
      'Prone to operator mistakes',
      'Requires clear marking and training',
    ],
    applications: [
      'Isolation during maintenance and turnarounds',
      'Pump bypass loops (pad ring configuration)',
      'Thermal expansion relief systems (paddle blind)',
      'Low-cost isolation instead of block valves',
      'Test piping and temporary systems',
      'Slurry and viscous service (where valves problematic)',
      'Instrumentation isolation',
      'Piping section isolation between plant units',
    ],
    standards: [
      'ASME B16.5 (flange component)',
      'API 6A (wellhead spectacle blinds)',
      'ASME Section VIII (pressure vessel nozzles)',
      'Manufacturer-specific designs per application',
    ],
    faceOptions: ['Raised Face (RF)', 'Flat Face (FF)'],
  },
  {
    id: 'plate',
    name: 'Plate Flange',
    definition:
      'Plate flanges are manufactured from steel plate by flame cutting, rolling, and welding, rather than forging. They are used in larger diameter applications (typically 24" and above) where forged flanges become impractical or prohibitively expensive. Plate flanges are built-up designs welded to form the flange structure.',
    characteristics: [
      'Fabricated from steel plate stock',
      'Welded construction (hub to flat ring)',
      'Used for large diameter piping (24"+)',
      'Lower manufacturing cost than forging for large sizes',
      'Less stringent material control than forgings',
      'Available in weld neck and slip-on configurations',
    ],
    pros: [
      'Cost-effective for large diameter services',
      'Shorter lead times for standard sizes',
      'Can be customized to specific project requirements',
      'Available for both standard and non-standard sizes',
      'Lighter per unit strength compared to forgings',
      'Easier to store and transport large sizes',
    ],
    cons: [
      'Lower quality material control compared to forgings',
      'Welding adds risk of defects and lamellar tearing',
      'Less fatigue resistance in high-vibration services',
      'May require post-weld heat treatment',
      'Potential for segregation in thicker sections',
      'May not be acceptable for critical or ASME Section I applications',
    ],
    applications: [
      'Large diameter water main systems (24" to 60"+)',
      'Power plant circulating water systems',
      'District heating/cooling piping',
      'Industrial waste systems',
      'Process piping for low-pressure services',
      'Industrial utility piping',
      'Municipal water distribution (Class 150-300)',
      'Non-critical industrial applications',
    ],
    standards: [
      'AWWA C207 (steel plate flanges for water)',
      'ASME B16.5 (limited applications)',
      'API 605 (petrochemical)',
      'Custom per ASME Section VIII (if pressure vessel)',
    ],
    faceOptions: ['Raised Face (RF)', 'Flat Face (FF)'],
  },
  {
    id: 'backing-ring',
    name: 'Backing Ring (Backup Ring)',
    definition:
      'A backing ring (also called a backup ring) is a temporary ring placed behind a flange weld to support the weld metal and prevent the weld from falling through the pipe bore. The backing ring is permanently left in place after welding and becomes part of the finished connection. It is primarily used with slip-on flanges.',
    characteristics: [
      'Ring-shaped insert placed behind flange weld',
      'Supports molten weld metal during fillet welding',
      'Becomes permanent part of the connection',
      'Available in carbon steel, stainless, and alloys',
      'Sized to fit pipe ID with small clearance',
      'Used to improve weld quality and repeatability',
    ],
    pros: [
      'Improves weld quality and repeatability',
      'Prevents weld metal from falling into pipe',
      'Ensures full penetration inside diameter',
      'Reduces welder skill level requirement',
      'Provides consistent weld profile',
      'Cost-effective way to improve weld reliability',
    ],
    cons: [
      'Adds material cost to connection',
      'Permanent installation (cannot be easily removed)',
      'Can cause erosion/corrosion if flow sensitive',
      'Foreign object risk if not properly secured',
      'Adds to total connection cost',
      'Requires proper sizing for pipe specifications',
    ],
    applications: [
      'Slip-on flange welds (very common)',
      'Low-pressure carbon steel piping',
      'Repeated connections where consistency critical',
      'Training systems where weld repeatability important',
      'Non-critical piping where cost-savings matter',
      'Backing for socket weld flanges',
      'Industrial process piping (non-critical)',
      'Utility piping systems',
    ],
    standards: [
      'ASME B16.5 (backup ring material and specifications)',
      'AWS D1.1 (welding specifications)',
      'AWWA C207 (for water systems)',
      'Customer-specific welding procedures',
    ],
    faceOptions: ['N/A - Ring only, not a complete flange'],
  },
  {
    id: 'exhaust',
    name: 'Exhaust Flange',
    definition:
      'An exhaust flange is specialized for high-temperature exhaust gas applications such as turbine exhausts, engine exhaust systems, and boiler flue gas outlets. These flanges handle extreme temperatures (often 500-1200°F+) with minimal pressure while accommodating thermal expansion and vibration from gas flow.',
    characteristics: [
      'Designed for high temperatures with low pressure',
      'Often asymmetrical design for exhaust flow patterns',
      'Cast or forged in high-temperature alloys',
      'Larger bore than pressure-rated flanges (same nominal size)',
      'Accommodates thermal expansion of exhaust piping',
      'May have special drilling for thermal movement',
    ],
    pros: [
      'Optimized for thermal cycling and vibration',
      'Better suited to pulsating exhaust flows',
      'Less restrictive to flow (larger bore)',
      'Can use lower pressure class ratings',
      'Cost-effective for low-pressure high-temp service',
      'Good fatigue resistance under cycling conditions',
    ],
    cons: [
      'Limited to low-pressure applications',
      'Not suitable for high-pressure systems',
      'Material selection critical for temperature',
      'Thermal expansion requires proper design',
      'Special gasket selection required',
      'Cannot be substituted with pressure-rated flanges',
    ],
    applications: [
      'Steam turbine exhaust connections',
      'Industrial boiler flue gas piping',
      'Engine exhaust manifold assemblies',
      'Thermal power plant turbine exhausts',
      'Waste heat recovery systems',
      'Furnace exhaust ducting (low pressure)',
      'Incinerator outlet piping',
      'Industrial kiln and dryer exhaust',
    ],
    standards: [
      'ASME B16.36 (exhaust flanges)',
      'API 612 (steam turbines)',
      'Customer-specific designs',
      'Material specifications per design pressure and temperature',
    ],
    faceOptions: ['Custom per application - often flat face'],
  },
  {
    id: 'hub',
    name: 'Hub Flange (Stub End Assembly)',
    definition:
      'A hub flange is essentially the stub end component of a lap joint assembly, designed to support a separate flange. The hub features a welded connection to the pipe and a flat surface for the flange to rest upon. Hub flanges are used in applications requiring frequent disassembly while maintaining structural integrity.',
    characteristics: [
      'One-piece hub and ring assembly',
      'Welded to pipe permanently',
      'Supports a sliding flange on top',
      'Available in weld neck, slip-on, and threaded styles',
      'Designed for lap joint applications',
      'Bore size matches pipe ID',
    ],
    pros: [
      'Simplifies maintenance by allowing flange removal',
      'Strong permanent connection to pipe',
      'Flange can be replaced without pipe modification',
      'Good stress distribution from hub design',
      'Versatile for custom applications',
      'Economical for frequent access points',
    ],
    cons: [
      'Requires two-piece design (hub plus flange)',
      'More complex than single-piece flanges',
      'Hub weld is critical to connection integrity',
      'Flange cannot directly support loads',
      'More components than conventional flanges',
      'Not suitable for all pressure classes',
    ],
    applications: [
      'Pressure vessel nozzles requiring access',
      'Pump and motor connections',
      'Cooler and heat exchanger connections',
      'Tank inlet and outlet connections',
      'Instrumentation isolation valves',
      'Branch connections to main headers',
      'Temporary or test system connections',
      'Equipment removal and replacement',
    ],
    standards: [
      'ASME B16.5 (lap joint flange component)',
      'ASME B16.47 (large diameter)',
      'ASME Section VIII (pressure vessels)',
      'Customer specifications',
    ],
    faceOptions: ['Raised Face (RF)', 'Flat Face (FF)'],
  },
  {
    id: 'swivel-ring',
    name: 'Swivel Ring Flange',
    definition:
      'A swivel ring flange features a rotating ring that can be adjusted 360 degrees without unbolting the connection. The ring rotates freely on the flange hub, allowing alignment adjustment without disturbing the bolt circle. This specialized design is used in applications requiring frequent or precision alignment adjustments.',
    characteristics: [
      'Ring rotates freely on hub bushing',
      'No bolts need to be removed for rotation',
      'Bearing surface allows smooth rotation',
      'Maintains bolt hole alignment while ring rotates',
      'Available in weld neck and slip-on designs',
      'Typically used in smaller size ranges',
    ],
    pros: [
      'Easy 360-degree alignment adjustment',
      'No bolts need to be disturbed',
      'Reduces assembly time and errors',
      'Allows fine-tuning of connection alignment',
      'Useful in confined spaces with alignment challenges',
      'Improves connection repeatability',
    ],
    cons: [
      'More expensive than standard flanges',
      'Limited to smaller sizes',
      'Rotating ring must be secured after adjustment',
      'Bushing can wear under heavy vibration',
      'Not suitable for high-vibration services',
      'More complex manufacturing',
    ],
    applications: [
      'Precision instrumentation connections',
      'Research and laboratory piping',
      'Optical and analytical equipment connections',
      'Aerospace component connections',
      'Space-constrained alignment requirements',
      'Calibration systems',
      'Test fixture piping',
      'Equipment mock-ups during development',
    ],
    standards: [
      'ASME B16.5 (as optional feature)',
      'Customer-specific engineering requirements',
      'Military specifications (MIL-STD) for some applications',
      'Aerospace standards (AS, NAS) for specialized uses',
    ],
    faceOptions: ['Raised Face (RF)', 'Flat Face (FF)'],
  },
];

const tableOfContents: TOCItem[] = [
  { id: 'introduction', title: 'Introduction', level: 1 },
  { id: 'weld-neck', title: 'Weld Neck Flange', level: 2 },
  { id: 'slip-on', title: 'Slip-On Flange', level: 2 },
  { id: 'blind', title: 'Blind Flange', level: 2 },
  { id: 'threaded', title: 'Threaded Flange', level: 2 },
  { id: 'socket-weld', title: 'Socket Weld Flange', level: 2 },
  { id: 'lap-joint', title: 'Lap Joint Flange', level: 2 },
  { id: 'reducing', title: 'Reducing Flange', level: 2 },
  { id: 'long-weld-neck', title: 'Long Weld Neck Flange', level: 2 },
  { id: 'orifice', title: 'Orifice Flange', level: 2 },
  { id: 'spectacle-blind', title: 'Spectacle Blind', level: 2 },
  { id: 'plate', title: 'Plate Flange', level: 2 },
  { id: 'backing-ring', title: 'Backing Ring', level: 2 },
  { id: 'exhaust', title: 'Exhaust Flange', level: 2 },
  { id: 'hub', title: 'Hub Flange', level: 2 },
  { id: 'swivel-ring', title: 'Swivel Ring Flange', level: 2 },
  { id: 'comparison', title: 'Flange Type Comparison Table', level: 1 },
  { id: 'decision-tree', title: 'Flange Selection Decision Tree', level: 1 },
  { id: 'faq', title: 'Frequently Asked Questions', level: 1 },
];

export default function FlangeTypesGuideClient() {
  const [activeSection, setActiveSection] = useState<string>('introduction');
  const [expandedType, setExpandedType] = useState<string | null>('weld-neck');
  const [isTocOpen, setIsTocOpen] = useState(false);

  const faqItems = [
    {
      question: 'What is the most common flange type used in industrial applications?',
      answer:
        'Weld neck flanges are the most common type used in industrial applications, especially in high-pressure and high-temperature systems. They offer superior stress distribution and fatigue resistance. Slip-on flanges are second most common for lower-pressure, less critical applications where cost is a factor.',
    },
    {
      question: 'When should I use a slip-on flange instead of a weld neck flange?',
      answer:
        'Use slip-on flanges when: the application is Class 150-300 pressure rating, you need to save cost, the system is not subjected to high temperatures (above 600°F), vibration levels are moderate, and you have adequate space for welding both inside and outside the flange. For critical or high-pressure applications, always choose weld neck.',
    },
    {
      question: 'Can I use a blind flange as a permanent end cap?',
      answer:
        'Yes, blind flanges are commonly used as permanent end caps on pipe and vessel nozzles. They are bolted to the other component with the same gasket and bolt configuration as standard flanges. Ensure proper gasket selection for the fluid, temperature, and pressure conditions.',
    },
    {
      question: 'What are the advantages of threaded flanges?',
      answer:
        'Threaded flanges require no welding, making them ideal for small-diameter systems, field repairs, and applications where welding equipment is unavailable. They are easily removable for maintenance. However, they are limited to lower pressure classes (typically 150-300) and smaller sizes.',
    },
    {
      question: 'How do spectacle blinds help during system maintenance?',
      answer:
        'Spectacle blinds (also called spectacle flanges) allow you to isolate a section of piping by rotating a two-disc assembly. One disc is solid (blocking flow) and one is open (allowing flow). This enables maintenance without breaking the connection or using a separate isolation valve, saving cost and space.',
    },
    {
      question: 'What is the difference between a lap joint flange and a hub flange?',
      answer:
        'A lap joint flange is a two-piece system with a separate stub end and flange. The stub end is welded to the pipe and supports the flange. A hub flange (or hub assembly) is essentially a simplified stub end designed to work with a matching flange. Hub flanges are more common in pressure vessel applications.',
    },
    {
      question: 'Why are orifice flanges used instead of regular flanges with separate orifice plates?',
      answer:
        'Orifice flanges are precision-designed with pre-drilled tap holes for differential pressure transmitters used in flow measurement. Using dedicated orifice flanges ensures accurate pressure tap placement per ASME and ISO standards, improves measurement accuracy, and reduces the number of connections needed.',
    },
    {
      question: 'Are plate flanges acceptable for high-pressure applications?',
      answer:
        'Plate flanges are generally not recommended for high-pressure applications (above 600 psi). They are cost-effective for large-diameter, low-pressure applications like water systems. Forged flanges (weld neck, slip-on) are always preferred for critical and high-pressure services due to superior material quality and fatigue resistance.',
    },
  ];

  const handleTOCClick = (id: string) => {
    setActiveSection(id);
    setIsTocOpen(false);
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      {/* Breadcrumb Navigation */}
      <SectionWrapper className="py-4 md:py-6 bg-gray-50 border-b border-gray-200">
        <Container>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/resources" className="hover:text-brass transition-colors">
              Resources
            </Link>
            <ChevronRight size={16} />
            <span className="text-gray-900 font-semibold">Flange Types Guide</span>
          </div>
        </Container>
      </SectionWrapper>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 md:px-6 py-12">
        {/* Sticky Table of Contents */}
        <div className="lg:col-span-1">
          <div className="sticky top-20">
            <button
              onClick={() => setIsTocOpen(!isTocOpen)}
              className="lg:hidden w-full mb-4 px-4 py-3 bg-orange-600 text-white font-semibold rounded-lg flex items-center justify-between"
            >
              Table of Contents
              <ChevronDown
                size={20}
                className={`transition-transform ${isTocOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {isTocOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="lg:block"
                >
                  <nav className="bg-white rounded-lg border border-gray-200 p-4 space-y-2">
                    <h3 className="font-bold text-gray-900 mb-4 hidden lg:block">
                      On This Page
                    </h3>
                    {tableOfContents.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleTOCClick(item.id)}
                        className={`block w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${
                          activeSection === item.id
                            ? 'bg-parchment text-brass font-semibold'
                            : 'text-gray-600 hover:text-brass hover:bg-gray-50'
                        } ${item.level === 1 ? 'font-semibold mt-3' : 'ml-4'}`}
                      >
                        {item.title}
                      </button>
                    ))}
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="hidden lg:block bg-white rounded-lg border border-gray-200 p-4 space-y-2">
              <h3 className="font-bold text-gray-900 mb-4">On This Page</h3>
              {tableOfContents.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTOCClick(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${
                    activeSection === item.id
                      ? 'bg-parchment text-brass font-semibold'
                      : 'text-gray-600 hover:text-brass hover:bg-gray-50'
                  } ${item.level === 1 ? 'font-semibold mt-3' : 'ml-4'}`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 prose prose-sm md:prose lg:prose-lg max-w-none">
          {/* Introduction */}
          <section id="introduction" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Introduction to Flange Types
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Flanges are critical components in piping systems, enabling the connection of pipes, valves,
              pumps, and other equipment. Understanding the different flange types and their characteristics
              is essential for proper system design, safety, and reliability. This comprehensive guide covers
              15 major flange types used across industrial, utility, and commercial applications worldwide.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What You'll Learn</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Characteristics and design features of each flange type</li>
                <li>Advantages and disadvantages for different applications</li>
                <li>Applicable standards (ASME B16.5, API, ASTM, etc.)</li>
                <li>Real-world applications and industry usage patterns</li>
                <li>Practical guidance for selecting the right flange type</li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Whether you are designing a new piping system, specifying replacement components, or troubleshooting
              an existing installation, this guide provides the technical depth needed to make informed decisions.
              Each flange type section includes definition, characteristics, pros/cons, typical applications,
              applicable standards, and available face finish options.
            </p>
          </section>

          {/* Flange Types */}
          {flangeTypes.map((flange) => (
            <section key={flange.id} id={flange.id} className="mb-12 scroll-mt-20">
              <button
                onClick={() =>
                  setExpandedType(expandedType === flange.id ? null : flange.id)
                }
                className="w-full text-left"
              >
                <div className="flex items-center justify-between mb-4 hover:text-brass transition-colors">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {flange.name}
                  </h3>
                  <ChevronDown
                    size={28}
                    className={`transition-transform flex-shrink-0 ${
                      expandedType === flange.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              <AnimatePresence>
                {expandedType === flange.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-6"
                  >
                    {/* Definition */}
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                      <h4 className="font-bold text-gray-900 mb-2">Definition</h4>
                      <p className="text-gray-700 leading-relaxed">
                        {flange.definition}
                      </p>
                    </div>

                    {/* Diagram Placeholder */}
                    <div className="bg-gray-100 rounded-lg border-2 border-dashed border-gray-400 h-48 flex items-center justify-center">
                      <div className="text-center text-gray-600">
                        <p className="font-semibold text-lg">Flange Diagram</p>
                        <p className="text-sm">{flange.name} illustration would appear here</p>
                      </div>
                    </div>

                    {/* Characteristics */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        Key Characteristics
                      </h4>
                      <ul className="space-y-2">
                        {flange.characteristics.map((char, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <span className="text-brass font-bold mt-1">•</span>
                            <span>{char}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pros & Cons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="font-bold text-green-900 mb-3">Advantages</h4>
                        <ul className="space-y-2">
                          {flange.pros.map((pro, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-green-900">
                              <span className="text-green-600 font-bold">✓</span>
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <h4 className="font-bold text-red-900 mb-3">Disadvantages</h4>
                        <ul className="space-y-2">
                          {flange.cons.map((con, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-red-900">
                              <span className="text-red-600 font-bold">✗</span>
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Applications */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        Typical Applications
                      </h4>
                      <ul className="space-y-2">
                        {flange.applications.map((app, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <span className="text-brass font-bold">→</span>
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Standards */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        Applicable Standards
                      </h4>
                      <ul className="space-y-2">
                        {flange.standards.map((std, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <span className="text-brass font-bold">◆</span>
                            <span>{std}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Face Options */}
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <h4 className="font-bold text-gray-900 mb-2">Available Face Finishes</h4>
                      <div className="flex flex-wrap gap-2">
                        {flange.faceOptions.map((face, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white border border-orange-300 rounded-full text-sm text-gray-700 font-medium"
                          >
                            {face}
                          </span>
                        ))}
                      </div>
                    </div>

                    <hr className="my-6 border-gray-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </section>
          ))}

          {/* Comparison Table */}
          <section id="comparison" className="mb-12 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Flange Type Comparison Table
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
                    <th className="border border-gray-300 p-3 text-left font-bold">Flange Type</th>
                    <th className="border border-gray-300 p-3 text-center font-bold">Welding Required</th>
                    <th className="border border-gray-300 p-3 text-center font-bold">Max Pressure</th>
                    <th className="border border-gray-300 p-3 text-center font-bold">Cost Relative</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 p-3 font-semibold">Weld Neck</td>
                    <td className="border border-gray-300 p-3 text-center">Full pen weld</td>
                    <td className="border border-gray-300 p-3 text-center">2500+ psi</td>
                    <td className="border border-gray-300 p-3 text-center">★★★</td>
                    <td className="border border-gray-300 p-3">High-pressure, high-temp critical</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 p-3 font-semibold">Slip-On</td>
                    <td className="border border-gray-300 p-3 text-center">Fillet welds</td>
                    <td className="border border-gray-300 p-3 text-center">600 psi</td>
                    <td className="border border-gray-300 p-3 text-center">★</td>
                    <td className="border border-gray-300 p-3">Low-cost, moderate pressure</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 p-3 font-semibold">Blind</td>
                    <td className="border border-gray-300 p-3 text-center">Bolted only</td>
                    <td className="border border-gray-300 p-3 text-center">2500+ psi</td>
                    <td className="border border-gray-300 p-3 text-center">★★</td>
                    <td className="border border-gray-300 p-3">End caps, vessel closure</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 p-3 font-semibold">Threaded</td>
                    <td className="border border-gray-300 p-3 text-center">None</td>
                    <td className="border border-gray-300 p-3 text-center">300 psi</td>
                    <td className="border border-gray-300 p-3 text-center">★</td>
                    <td className="border border-gray-300 p-3">Small bore, low pressure</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 p-3 font-semibold">Socket Weld</td>
                    <td className="border border-gray-300 p-3 text-center">Fillet weld</td>
                    <td className="border border-gray-300 p-3 text-center">2500 psi</td>
                    <td className="border border-gray-300 p-3 text-center">★★</td>
                    <td className="border border-gray-300 p-3">High-temp, small bore</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 p-3 font-semibold">Lap Joint</td>
                    <td className="border border-gray-300 p-3 text-center">Stub end weld</td>
                    <td className="border border-gray-300 p-3 text-center">300 psi</td>
                    <td className="border border-gray-300 p-3 text-center">★★</td>
                    <td className="border border-gray-300 p-3">Frequent maintenance access</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 p-3 font-semibold">Reducing</td>
                    <td className="border border-gray-300 p-3 text-center">Full pen weld</td>
                    <td className="border border-gray-300 p-3 text-center">2500 psi</td>
                    <td className="border border-gray-300 p-3 text-center">★★★</td>
                    <td className="border border-gray-300 p-3">Size transitions</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 p-3 font-semibold">Long Weld Neck</td>
                    <td className="border border-gray-300 p-3 text-center">Full pen weld</td>
                    <td className="border border-gray-300 p-3 text-center">2500+ psi</td>
                    <td className="border border-gray-300 p-3 text-center">★★★★</td>
                    <td className="border border-gray-300 p-3">Critical high-temp/pressure</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 p-3 font-semibold">Orifice</td>
                    <td className="border border-gray-300 p-3 text-center">Full pen weld</td>
                    <td className="border border-gray-300 p-3 text-center">600 psi</td>
                    <td className="border border-gray-300 p-3 text-center">★★</td>
                    <td className="border border-gray-300 p-3">Flow measurement</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-300 p-3 font-semibold">Plate</td>
                    <td className="border border-gray-300 p-3 text-center">Full pen weld</td>
                    <td className="border border-gray-300 p-3 text-center">300 psi</td>
                    <td className="border border-gray-300 p-3 text-center">★</td>
                    <td className="border border-gray-300 p-3">Large diameter, low pressure</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Decision Tree */}
          <section id="decision-tree" className="mb-12 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Flange Selection Decision Tree
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Step 1: Determine Pressure Rating Required
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Low Pressure (under 150 psi):</strong> Consider slip-on, threaded, or plate flanges
                  </p>
                  <p>
                    <strong>Moderate Pressure (150-600 psi):</strong> Slip-on, socket weld, or weld neck options available
                  </p>
                  <p>
                    <strong>High Pressure (600-2500 psi):</strong> Weld neck or socket weld required
                  </p>
                  <p>
                    <strong>Very High Pressure (above 2500 psi):</strong> Weld neck or long weld neck only
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Step 2: Consider Operating Temperature
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Low Temperature (-20°F to 200°F):</strong> Any flange type acceptable; consider cost
                  </p>
                  <p>
                    <strong>Moderate Temperature (200-600°F):</strong> Avoid threaded flanges; use weld neck preferred
                  </p>
                  <p>
                    <strong>High Temperature (600-1100°F):</strong> Weld neck or socket weld with alloy steel
                  </p>
                  <p>
                    <strong>Extreme Temperature (above 1100°F):</strong> Long weld neck with special alloys required
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Step 3: Evaluate System Type and Function
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Isolation/Dead Leg:</strong> Blind flanges or spectacle blinds
                  </p>
                  <p>
                    <strong>Flow Measurement:</strong> Orifice flanges with pressure taps
                  </p>
                  <p>
                    <strong>Frequent Maintenance:</strong> Lap joint or hub flanges
                  </p>
                  <p>
                    <strong>Size Transition:</strong> Reducing flanges (weld neck or slip-on)
                  </p>
                  <p>
                    <strong>Exhaust Application:</strong> Exhaust flanges (low pressure, high temperature)
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Step 4: Verify Piping Constraints
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Limited Space Available:</strong> Socket weld or slip-on flanges more compact
                  </p>
                  <p>
                    <strong>Alignment Issues:</strong> Slip-on or lap joint flanges more forgiving
                  </p>
                  <p>
                    <strong>Vibration Environment:</strong> Weld neck flanges have superior performance
                  </p>
                  <p>
                    <strong>Corrosive Service:</strong> Weld neck preferred (stress relief reduces corrosion)
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-lg border border-yellow-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Step 5: Check Code and Standards Compliance
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>ASME Section I (Boiler Code):</strong> Weld neck preferred, slip-on limited
                  </p>
                  <p>
                    <strong>ASME Section VIII (Pressure Vessels):</strong> All types permitted; weld neck critical
                  </p>
                  <p>
                    <strong>API 6A (Wellhead Equipment):</strong> Weld neck or hub, specific material grades
                  </p>
                  <p>
                    <strong>AWWA (Water Systems):</strong> Plate flanges and galvanized options common
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-12 scroll-mt-20">
            <FAQ items={faqItems} title="Frequently Asked Questions" />
          </section>
        </div>
      </div>

      {/* CTA Banner */}
      <CTABanner
        heading="Ready to Select Your Flange?"
        subtext="Our engineering team can help you choose the perfect flange type for your specific application and requirements."
        primaryCTA={{
          label: 'Request Technical Support',
          href: 'https://www.texasflange.com/contact-us/?ref=apiflange-new',
        }}
        secondaryCTA={{
          label: 'Contact Us',
          href: 'https://www.texasflange.com/contact-us/?ref=apiflange-new',
        }}
      />

      {/* Related Resources */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Related Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/resources/pressure-ratings">
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-orange-400 transition-colors cursor-pointer">
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-brass">
                  Pressure-Temperature Ratings
                </h3>
                <p className="text-gray-600 text-sm">
                  Learn how to read ASME B16.5 P-T ratings and design for safe pressure operation.
                </p>
              </div>
            </Link>
            <Link href="/resources/material-grades">
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-orange-400 transition-colors cursor-pointer">
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-brass">
                  Material Grade Reference
                </h3>
                <p className="text-gray-600 text-sm">
                  Complete specifications for ASTM A105, A182, A350, and other flange materials.
                </p>
              </div>
            </Link>
            <Link href="/resources/corrosion-prevention">
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-orange-400 transition-colors cursor-pointer">
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-brass">
                  Corrosion Prevention Guide
                </h3>
                <p className="text-gray-600 text-sm">
                  Strategies to prevent corrosion and extend flange service life in harsh environments.
                </p>
              </div>
            </Link>
          </div>
        </Container>
      </SectionWrapper>

      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'The Complete Flange Types Guide: 15 Types Explained',
            description:
              'Comprehensive guide to 15 flange types including specifications, applications, and selection criteria.',
            author: {
              '@type': 'Organization',
              name: 'API Flange',
            },
            datePublished: new Date().toISOString(),
            wordCount: 4000,
            articleBody: 'This comprehensive guide covers 15 flange types with detailed specifications, applications, standards, and selection guidance.',
          }),
        }}
      />
    </>
  );
}
