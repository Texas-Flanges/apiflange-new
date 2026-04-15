import { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import Container from '@/components/layout/Container';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SectionWrapper from '@/components/layout/SectionWrapper';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/ui/CTABanner';
import Link from 'next/link';
import { Calendar, User, Clock, Share2, ArrowRight } from 'lucide-react';

// Blog posts database
const blogPostsData = {
  'what-is-a-weld-neck-flange': {
    title: 'Complete Guide to Weld Neck Flanges: Design, Manufacturing, and Application',
    date: '2024-03-15',
    author: 'ApiFlange Engineering Team',
    authorBio:
      'The ApiFlange Engineering Team brings decades of combined experience in industrial piping systems, flange design, and ASME standards compliance.',
    category: 'Technical Guides',
    readingTime: 12,
    excerpt:
      'Learn everything about weld neck flanges, the most versatile and widely used flange type in industrial piping systems.',
    content: `Weld neck flanges represent the cornerstone of industrial piping systems worldwide. These essential components serve as the critical interface between pipe sections, equipment nozzles, and valve connections, enabling reliable, leak-free operation under extreme conditions of pressure, temperature, and corrosive environments.

## What Are Weld Neck Flanges?

Weld neck flanges, also known as hub flanges, are forged or cast components designed to be butt-welded directly to pipe ends. Their distinctive design features a tapered hub section that gradually transitions from the pipe bore diameter to the flange face diameter. This unique geometry provides several critical advantages that have made them the industry standard for decades.

The weld neck design offers superior structural integrity compared to other flange types. The gradual transition from the hub to the flange eliminates stress concentration points that could lead to fatigue failure. When subjected to alternating loads, thermal cycling, or vibration—all common in industrial piping—the smooth transition zone distributes stresses evenly, extending component life and enhancing system reliability.

## Key Design Characteristics

Weld neck flanges incorporate several distinctive design elements that contribute to their widespread adoption:

**Hub Design**: The tapered hub section accommodates the transition from the pipe inner diameter to the large flange face. This design minimizes stress concentration and provides superior load distribution compared to slip-on or socket-weld alternatives.

**Pressure Boundary**: Weld neck flanges create a full-enclosure pressure boundary, making them ideal for high-pressure applications where slip-on flanges might compromise system integrity.

**Face Options**: Available in multiple face types including flat face (FF), raised face (RF), and ring-type joint (RTJ) configurations. The choice depends on the gasket type and pressure rating requirements.

**Bolt Hole Pattern**: Standardized bolt hole circles facilitate compatibility with standard fastening systems, ensuring proper load distribution across the pressure boundary.

## Manufacturing Process

The manufacturing of weld neck flanges involves precision forging followed by extensive CNC machining:

**Forging**: Raw steel stock is heated to optimal temperatures and forged to approximate flange dimensions. This process aligns the material grain structure for maximum strength and creates the foundation for the tapered hub geometry.

**Rough Machining**: Preliminary CNC operations remove excess material and establish critical dimensions. Advanced multi-axis machining centers maintain tolerances within 0.01 inches on critical surfaces.

**Heat Treatment**: Strategic heat treatment cycles enhance material hardness and eliminate residual stresses from machining operations. For alloy steel flanges, controlled cooling rates ensure uniform microstructure.

**Finish Machining**: Final CNC operations achieve precision specifications for all critical surfaces. Flange faces are finished to specific roughness values (typically Ra 63 to Ra 125 microinches) to ensure proper gasket seating.

**Quality Testing**: Every flange undergoes rigorous quality assurance including dimensional verification, radiographic inspection for internal defects, and hydrostatic pressure testing on high-pressure grades.

## ASME B16.5 Standards Compliance

The American Society of Mechanical Engineers (ASME) B16.5 standard establishes comprehensive requirements for steel pipe flanges. This standard specifies:

- Dimensional requirements for flange faces, bolt holes, and bore diameters
- Pressure-temperature ratings for various materials and sizes
- Testing procedures and acceptance criteria
- Marking and identification requirements

Compliance with ASME B16.5 ensures interchangeability between manufacturers and guarantees that flanges from different sources can be safely combined in piping systems.

## Material Selection

Weld neck flanges are manufactured from numerous materials selected based on service requirements:

**Carbon Steel**: ASTM A105 remains the most common material, offering excellent strength-to-cost ratio for moderate pressure and temperature applications up to 650°F.

**Stainless Steel**: ASTM A182 Grade F304 and F316L provide exceptional corrosion resistance for chemical processing, pharmaceutical, and food service applications.

**Alloy Steel**: ASTM A182 Grade F22, F91, and others extend operating temperature ranges to 1100°F and beyond, essential for power generation and petrochemical applications.

**Duplex Stainless**: Offers superior corrosion resistance in seawater and chloride-rich environments with increased strength compared to austenitic stainless steel.

## Pressure Ratings and Applications

Weld neck flanges are available in multiple pressure classes: 150, 300, 600, 900, 1500, and 2500 PSIG. Each class incorporates specific dimensional and material requirements to safely contain the rated pressure.

- **Class 150**: General utility applications, moderate pressure systems, typically 285 PSIG at 100°F
- **Class 300**: Refined products, intermediate pressure applications, rated to 740 PSIG at 100°F
- **Class 600**: High-pressure systems, petrochemical plants, rated to 1480 PSIG at 100°F
- **Class 1500**: Specialized high-pressure applications, rated to 3705 PSIG at 100°F

## Installation and Maintenance Best Practices

Proper installation is critical for system integrity:

**Alignment**: Ensure pipe centerlines are coaxial before welding. Misalignment introduces bending stresses that reduce flange life.

**Welding Parameters**: Follow ASME Section VIII welding procedures. Improper welding can introduce defects and stress concentration points.

**Gasket Selection**: Match gasket materials to service conditions. Wrong gasket selection is a leading cause of leaks in industrial piping.

**Bolt Tightening**: Use calibrated torque wrenches and proper bolt tightening procedures. Uneven bolt tension creates surface distortion and gasket leakage.

**Periodic Inspection**: Establish preventive maintenance schedules including visual inspection for corrosion, leakage signs, and bolt integrity.

## Conclusion

Weld neck flanges remain the industry standard for reliable, long-lasting pipe connections. Their superior stress distribution, code compliance, and availability in diverse materials make them essential for demanding industrial applications. Understanding their design, selection criteria, and installation requirements ensures safe, efficient piping system operation for decades.`,
    tableOfContents: [
      'What Are Weld Neck Flanges?',
      'Key Design Characteristics',
      'Manufacturing Process',
      'ASME B16.5 Standards Compliance',
      'Material Selection',
      'Pressure Ratings and Applications',
      'Installation and Maintenance Best Practices',
      'Conclusion',
    ],
  },
  'asme-vs-awwa-flanges': {
    title: 'ASME vs AWWA Standards: Understanding the Key Differences',
    date: '2024-03-12',
    author: 'ApiFlange Engineering Team',
    authorBio:
      'The ApiFlange Engineering Team brings decades of combined experience in industrial piping systems, standards compliance, and water utility engineering.',
    category: 'Standards',
    readingTime: 8,
    excerpt:
      'Comprehensive comparison of ASME B16.5 and AWWA standards. Learn which standard applies to your application.',
    content: `When specifying flanges for industrial and municipal applications, one of the most critical decisions is selecting the appropriate engineering standard. The two most prevalent standards in North America are ASME B16.5 and AWWA C207. While these standards address similar components, they were developed for different applications and incorporate distinct requirements that significantly impact flange selection, cost, and system performance.

## Overview of ASME B16.5

ASME B16.5 (Pipe Flanges and Flanged Fittings) is the flagship standard published by the American Society of Mechanical Engineers. Developed in the 1930s and continuously refined, it governs the vast majority of industrial piping applications including:

- Petrochemical and refining operations
- Power generation plants
- Chemical processing facilities
- Pharmaceutical manufacturing
- General industrial piping systems

The standard establishes comprehensive requirements for carbon steel, stainless steel, and alloy steel flanges, covering dimensions, material specifications, pressure ratings, and testing procedures.

## Overview of AWWA C207

AWWA C207 (Steel Pipe Flanges) is the standard published by the American Water Works Association specifically for water utility applications. It has been developed over decades in close consultation with municipal water departments and covers:

- Water distribution systems
- Wastewater collection networks
- Treatment plant applications
- Water storage and pumping stations
- Public works projects subject to prevailing wage and Buy America Act requirements

The AWWA standard emphasizes provisions necessary for water utility service, including materials specifications, dimensional requirements, and testing procedures tailored to water service conditions.

## Key Dimensional Differences

While both standards establish flange dimensions, the specific requirements differ in several important ways:

**Bolt Hole Patterns**: ASME and AWWA specifications call for different bolt hole circle diameters for the same nominal pipe sizes and pressure classes. A flange designed to ASME specifications may not be interchangeable with an AWWA-compliant flange of the same size and pressure rating.

**Raised Face Heights**: The height of the raised face (RF) differs between standards. ASME typically specifies 1/16 inch raised face on lower pressure classes, while AWWA specifications may vary.

**Bore Diameters**: The internal diameter of the flange bore can differ, affecting pipe fit and welding requirements.

These dimensional differences, though seemingly minor, create incompatibility issues that can halt projects if not recognized during procurement.

## Material Specifications

**ASME B16.5** specifies materials according to ASTM standards:
- Carbon steel: ASTM A105
- Stainless steel: ASTM A182
- Alloy steel: ASTM A182
- Forged or cast components welcome

**AWWA C207** specifies materials according to ASTM standards with some variations:
- Carbon steel: ASTM A181 or ASTM A105
- Stainless steel grades specified
- Often specifies forged construction with stricter traceability requirements

The material specifications are similar, but AWWA frequently imposes more stringent documentation and traceability requirements, particularly for projects subject to Buy America Act (BABA) compliance.

## Pressure-Temperature Ratings

Both standards establish pressure ratings at specific temperatures:

- **Class 150**: Rated for 285 PSIG at 100°F in both standards (though actual curves differ)
- **Class 300**: Rated for 740 PSIG at 100°F in both standards
- **Class 600**: Rated for 1480 PSIG at 100°F in both standards

However, the pressure-temperature derating curves differ significantly. A flange rated under ASME for a specific temperature may not be suitable for identical service conditions under AWWA, requiring careful review of pressure-temperature charts.

## Testing and Certification

**ASME B16.5** requires:
- Pressure testing of representative samples
- Materials verification and chemical analysis
- Dimensional verification to published tables
- Hydrostatic testing for certain classifications

**AWWA C207** requires:
- All the above, plus
- Enhanced traceability documentation
- Heat number identification on every flange
- Source documentation for raw materials (critical for BABA compliance)
- Third-party inspection and certification for many projects
- Mill test reports and material certifications

The enhanced documentation requirements for AWWA, particularly BABA compliance, significantly impact manufacturing processes and costs.

## Which Standard to Specify?

**Choose ASME B16.5 when**:
- The application is industrial or commercial piping
- The system operates outside municipal water utility applications
- Standard design and cost efficiency are priorities
- The system doesn't involve public works or government funding

**Choose AWWA C207 when**:
- The application involves municipal water systems (distribution, treatment, storage)
- The project is funded by public money or grants
- Buy America Act or domestic sourcing requirements apply
- Enhanced documentation and traceability are mandated
- The application is in a water treatment or pumping facility

## Selecting Your Supplier

Regardless of standard selection, work with manufacturers experienced in your chosen specification:

- **ASME Specialists**: Can produce to tighter tolerances and faster delivery times, typically at lower cost
- **AWWA Specialists**: Understand documentation requirements, material sourcing, and third-party inspection procedures essential for municipal projects
- **Dual-Certified Manufacturers**: Can produce to both standards, though at slight cost premiums

Many manufacturers maintain capability in both standards, but the enhanced testing and documentation for AWWA requires dedicated procedures and quality systems.

## Regulatory Considerations

Before selecting a standard, verify all applicable regulations:

- **Local codes**: Some municipalities mandate specific standards
- **Engineer specifications**: Consulting engineers usually specify the applicable standard
- **Funding requirements**: Federal or state funding often mandates AWWA for water projects
- **Buy America Act**: Requires AWWA certification for federally-funded water projects
- **International applications**: Export requirements may mandate ASME B16.5 or other international standards

## Conclusion

While ASME B16.5 and AWWA C207 address similar components, the distinctions are substantial enough to require careful attention during procurement. Specifying the wrong standard can result in incompatible components, project delays, and costly rework. Understanding the key differences—dimensional specifications, material requirements, pressure ratings, and documentation—ensures proper flange selection for your specific application.`,
    tableOfContents: [
      'Overview of ASME B16.5',
      'Overview of AWWA C207',
      'Key Dimensional Differences',
      'Material Specifications',
      'Pressure-Temperature Ratings',
      'Testing and Certification',
      'Which Standard to Specify?',
      'Selecting Your Supplier',
      'Regulatory Considerations',
      'Conclusion',
    ],
  },
  'how-steel-flanges-are-manufactured': {
    title: 'Steel Flange Manufacturing: From Forging to Final Inspection',
    date: '2024-03-08',
    author: 'ApiFlange Engineering Team',
    authorBio:
      'The ApiFlange Engineering Team brings decades of combined experience in precision forging, machining, and quality control for critical industrial applications.',
    category: 'Technical Guides',
    readingTime: 10,
    excerpt:
      'Explore the complete manufacturing process of steel flanges. From raw material selection through rigorous quality testing.',
    content: `The manufacturing of precision steel flanges is a complex, multi-stage process that combines traditional metalworking techniques with cutting-edge CNC technology. Understanding this process is essential for appreciating why quality flanges justify their cost and why supplier selection is critical to system reliability.

## Raw Material Selection and Preparation

The foundation of quality flange manufacturing begins with raw material selection. Every flange starts with steel ingots or billets meeting strict ASTM specifications:

**Carbon Steel (ASTM A105)**: The most commonly used material, selected for balanced strength, machinability, and cost. Raw material is procured from certified mills with complete chemical composition documentation.

**Alloy Steel (ASTM A182)**: High-temperature grades like F22, F91, and F11 require additional quality verification due to higher alloying element content and stricter compositional tolerances.

**Stainless Steel (ASTM A182)**: Requires special handling to prevent contamination, separate machining equipment to avoid iron carryover, and specialized heat treatment procedures.

Before any manufacturing operations commence, raw materials undergo chemical analysis and testing. Samples from each heat are tested for tensile strength, impact resistance, and chemical composition to verify compliance with applicable standards.

## Forging Operations

Forging represents the critical first step in creating the flange shape and establishing the material's grain structure:

**Heating**: Steel ingots are heated to optimal forging temperatures (typically 2100-2300°F for carbon steel) in controlled furnaces. Temperature precision is critical—too hot and the material becomes brittle; too cold and forging forces become excessive.

**Cogging**: Large ingots undergo preliminary cogging operations to reduce size and establish initial flange geometry. Multiple passes orient the material grain structure favorably for subsequent operations.

**Flange Forging**: The shaped material is placed in specially designed dies and forged under high pressure (typically 1000+ tons) to form the basic flange shape including the hub section, flange face diameter, and bolt hole locations.

**Cooling**: Controlled cooling from forging temperature is critical. Rapid cooling creates internal stresses and brittleness, while slow cooling may result in undesirable grain growth. Different materials require specific cooling procedures.

**Scale Removal**: Surface scale (iron oxide) created during heating and forging is removed by mechanical methods, preparing the surface for subsequent machining.

## Rough Machining Operations

After forging, flanges undergo rough machining to remove excess material and establish approximate final dimensions:

**Facing**: The flange bore is bored to approximate internal diameter, and the flange face is faced flat.

**Bolt Hole Location**: Rough drilling or boring establishes bolt hole center locations, though precise sizing occurs in finish operations.

**Hub Contouring**: The tapered hub is roughly contoured to approximate shape, removing forging die marks and excess material.

**Locating Surfaces**: Datum reference surfaces are established for subsequent precision machining operations.

Modern shops use advanced multi-axis CNC machining centers capable of multiple operations in a single setup, improving accuracy and reducing handling.

## Heat Treatment

Strategic heat treatment is essential for controlling material properties:

**Normalizing**: For carbon steel, normalizing cycles refine grain structure, improve toughness, and eliminate residual stresses from forging. Material is heated to approximately 1700°F and air-cooled.

**Tempering**: After normalizing, material is tempered (reheated to 1000-1300°F and cooled) to reduce brittleness and achieve optimal hardness and toughness balance.

**Solution Annealing**: For stainless and alloy steel, solution annealing at high temperatures (typically 1900°F+) dissolves carbides and establishes uniform microstructure, critical for corrosion resistance.

**Stress Relief**: For large flanges or critical applications, stress relief cycles at 1100-1200°F eliminate residual machining stresses.

**Quenching and Tempering**: For high-strength alloy grades, controlled quenching (cooling from elevated temperature) combined with precise tempering develops the specified hardness without excessive brittleness.

## Finish Machining Operations

Finish machining brings flanges to final specifications with extremely tight tolerances:

**Bore Finishing**: The bore is bored to final diameter with tolerances typically held to ±0.010 inches. Surface finish is controlled to prevent sharp edges that could damage gaskets or pipe.

**Face Finishing**: Flange bearing surfaces are finished flat with parallelism controlled to 0.001-0.002 inches over the flange face. Finish roughness is typically specified at Ra 63 to Ra 125 microinches.

**Bolt Hole Finishing**: Bolt holes are drilled or bored to final size. For critical applications, holes may be ream-finished to ensure tight tolerances and consistent surface finish.

**Raised Face Forming**: For RF flanges, a raised face ring is formed on the flange face with precise dimensions and controlled edge chamfers.

**Hub Surface Treatment**: The outer hub surface is finished to specified dimensions and surface smoothness.

**Edge Chamfering**: All sharp edges are chamfered (typically 1/16 to 1/8 inch) to prevent damage during handling and installation.

## Surface Treatment and Finishing

Depending on material and application, flanges may receive protective surface treatment:

**Passivation**: Stainless steel flanges undergo passivation per ASTM A967, removing iron contamination from the surface and developing a protective oxide layer.

**Pickling and Oiling**: Carbon steel may be pickled (acid cleaned) and oiled to prevent surface oxidation during storage.

**Coating Application**: For corrosive service, various coatings may be applied including epoxy, zinc-rich primers, or hot-dip galvanizing (for specific applications).

## Quality Control and Testing

Rigorous quality control is conducted throughout manufacturing:

**Dimensional Verification**: Every flange is measured against specifications using calibrated instruments. Critical dimensions include bore diameter, flange face diameter, bolt hole locations and diameters, and face flatness.

**Material Certification**: Mill test reports certifying chemical composition and mechanical properties are maintained for each heat.

**Radiographic Inspection**: For critical applications, X-ray inspection detects internal defects in the forged section.

**Hydrostatic Testing**: High-pressure flanges are hydrostatically tested to 1.5 times the rated working pressure, held for specified duration, then inspected for leakage or permanent deformation.

**Surface Inspection**: Each flange is visually inspected for surface defects, cracks, corrosion, and damage. Advanced shops use magnetic particle or dye penetrant inspection for sensitive applications.

**Traceability Documentation**: Complete manufacturing records including raw material heat numbers, forging dates, heat treatment parameters, machining data, inspection results, and test reports are maintained for each flange.

## Modern Manufacturing Advantages

Contemporary flange manufacturing incorporates several advantages:

**CNC Machining**: Multi-axis machining centers enable complex geometries, tight tolerances, and rapid changeover between different flange types.

**Quality Systems**: ISO 9001 and other quality certifications ensure consistent processes and documented procedures.

**Dimensional Verification**: CMM (Coordinate Measuring Machines) and other precision instruments verify dimensions to extremely tight tolerances.

**Traceability Systems**: Database systems track each flange from raw material through final inspection, enabling rapid recalls if issues are identified.

## Conclusion

The manufacturing of steel flanges requires careful control of numerous parameters from raw material selection through final inspection. This complexity is why quality flanges from established manufacturers provide superior reliability and longevity compared to lower-cost alternatives. The investment in proper manufacturing procedures pays dividends through reduced leakage, improved system reliability, and extended service life.`,
    tableOfContents: [
      'Raw Material Selection and Preparation',
      'Forging Operations',
      'Rough Machining Operations',
      'Heat Treatment',
      'Finish Machining Operations',
      'Surface Treatment and Finishing',
      'Quality Control and Testing',
      'Modern Manufacturing Advantages',
      'Conclusion',
    ],
  },
};

type BlogPostKey = keyof typeof blogPostsData;

export async function generateStaticParams() {
  return Object.keys(blogPostsData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPostsData[params.slug as BlogPostKey];

  if (!post) {
    return {
      title: 'Article Not Found',
      description: 'The requested blog article could not be found.',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      'flanges',
      'engineering',
      'standards',
      'manufacturing',
      'industrial',
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      url: `https://www.apiflange.com/blog/${params.slug}`,
    },
    alternates: {
      canonical: `https://www.apiflange.com/blog/${params.slug}`,
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPostsData[params.slug as BlogPostKey];

  if (!post) {
    return (
      <Container>
        <div className="py-12 text-center">
          <h1 className="text-3xl font-bold text-iron mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">
            The blog article you're looking for doesn't exist.
          </p>
          <Link href="/blog">
            <Button variant="primary">Back to Blog</Button>
          </Link>
        </div>
      </Container>
    );
  }

  // Related posts (sample - in real implementation would be fetched based on category/tags)
  const relatedPosts = [
    {
      title: 'ASME B16.5 Standards Compliance Guide',
      slug: 'asme-vs-awwa-flanges',
      category: 'Standards',
    },
    {
      title: 'Stainless Steel Flanges: Corrosion Resistance',
      slug: 'stainless-steel-flanges-corrosion-resistance',
      category: 'Materials',
    },
    {
      title: 'High-Pressure Applications in Oil & Gas',
      slug: 'high-pressure-flange-applications-oil-gas',
      category: 'Industry News',
    },
  ];

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title, href: `/blog/${params.slug}` },
  ];

  return (
    <>
      {/* Hero Section with Breadcrumbs */}
      <PageHero
        title={post.title}
        variant="navy"
        breadcrumbs={breadcrumbs}
      />

      <Container>
        <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Article Meta */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    By {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readingTime} min read
                  </div>
                  <div className="inline-block bg-brass/10 text-brass text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="flex items-center gap-2 pt-4">
                  <span className="text-sm font-medium text-gray-600">Share:</span>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                    <Share2 className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Article Content */}
              <article className="prose prose-lg max-w-none mb-12">
                <div className="space-y-6">
                  {post.content.split('\n\n').map((paragraph, idx) => {
                    if (paragraph.startsWith('## ')) {
                      return (
                        <h2
                          key={idx}
                          className="text-2xl font-bold text-iron mt-8 mb-4"
                        >
                          {paragraph.replace('## ', '')}
                        </h2>
                      );
                    }
                    if (paragraph.startsWith('**') && paragraph.includes('**:')) {
                      const parts = paragraph.split('**:');
                      return (
                        <div key={idx} className="mb-4">
                          <strong className="text-iron text-lg">
                            {parts[0].replace(/\*\*/g, '')}:
                          </strong>
                          <p className="text-gray-700 mt-2">
                            {parts[1].trim()}
                          </p>
                        </div>
                      );
                    }
                    if (paragraph.startsWith('- ')) {
                      return (
                        <ul key={idx} className="list-disc list-inside space-y-2 text-gray-700">
                          {paragraph.split('\n').map((item, i) => (
                            <li key={i} className="text-gray-700">
                              {item.replace('- ', '')}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <p key={idx} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </article>

              {/* Author Bio */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-12">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1C1C1E] to-[#2A2A2E] rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-iron mb-2">{post.author}</h3>
                    <p className="text-gray-600 text-sm">{post.authorBio}</p>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-iron mb-6">
                  Related Articles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="group p-4 border border-gray-200 rounded-lg hover:shadow-lg hover:border-brass transition"
                    >
                      <div className="mb-3">
                        <span className="inline-block bg-brass/10 text-brass text-xs font-semibold px-3 py-1 rounded-full">
                          {relatedPost.category}
                        </span>
                      </div>
                      <h4 className="font-semibold text-iron group-hover:text-brass transition line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <div className="mt-3 flex items-center text-brass text-sm font-medium">
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Banner */}
              <div className="bg-gradient-to-r from-[#1C1C1E] to-[#2A2A2E] rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-3">
                  Ready to Request a Quote?
                </h3>
                <p className="mb-6">
                  Apply the insights from this article to your specific requirements. Our experts can help you select the right flanges for your application.
                </p>
                <Link href="https://www.texasflange.com/contact-us">
                  <Button variant="secondary">
                    Start Your RFQ
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Table of Contents */}
              <div className="sticky top-24 space-y-8">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h4 className="font-bold text-iron mb-4">Table of Contents</h4>
                  <nav className="space-y-2">
                    {post.tableOfContents.map((item, idx) => (
                      <a
                        key={idx}
                        href={`#section-${idx}`}
                        className="block text-sm text-gray-600 hover:text-brass transition"
                      >
                        {item}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Quick Contact */}
                <div className="bg-brass rounded-lg p-6 text-white">
                  <h4 className="font-bold mb-3">Have Questions?</h4>
                  <p className="text-sm mb-4">
                    Our technical team is ready to discuss your specific requirements.
                  </p>
                  <Link href="https://www.texasflange.com/contact-us">
                    <Button variant="secondary" className="w-full">
                      Contact Us
                    </Button>
                  </Link>
                </div>

                {/* Download Resources */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-iron mb-3">Resources</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-brass hover:text-iron font-medium"
                      >
                        Download PDF Guide
                      </a>
                    </li>
                    <li>
                      <a
                        href="/resources"
                        className="text-brass hover:text-iron font-medium"
                      >
                        View All Resources
                      </a>
                    </li>
                    <li>
                      <a
                        href="/standards"
                        className="text-brass hover:text-iron font-medium"
                      >
                        Standards Library
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </Container>

      {/* CTA Banner */}
      <CTABanner
        heading="Need Expert Guidance?"
        subtext="Our technical team can help you select the perfect flanges for your application. Request a quote today."
        primaryCTA={{ label: 'Request a Quote', href: 'https://www.texasflange.com/contact-us' }}
        secondaryCTA={{ label: 'Contact Technical Support', href: 'https://www.texasflange.com/contact-us' }}
      />
    </>
  );
}
