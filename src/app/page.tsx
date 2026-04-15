'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  ArrowRight,
  Shield,
  Wrench,
  CircleDot,
  Gauge,
  Factory,
  Cog,
  Ruler,
  Flame,
  Award,
  FileText,
  ChevronRight,
  Phone,
  Clock,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   ANIMATED SECTION WRAPPER
   ───────────────────────────────────────────── */
function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   DECORATIVE GEAR SVG
   ───────────────────────────────────────────── */
function GearIcon({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 15a3 3 0 100-6 3 3 0 000 6z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   BRASS DIVIDER
   ───────────────────────────────────────────── */
function BrassDivider() {
  return (
    <div className="flex items-center gap-4 my-2">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brass/40 to-transparent" />
      <GearIcon size={20} className="text-brass/50" />
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brass/40 to-transparent" />
    </div>
  );
}

/* ─────────────────────────────────────────────
   ANIMATED COUNTER
   ───────────────────────────────────────────── */
function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ═════════════════════════════════════════════
   HOMEPAGE
   ═════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-iron overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-gear-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-iron via-iron/95 to-charcoal" />

        {/* Decorative corner rivets */}
        <div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-silver/40 shadow-inner hidden lg:block" />
        <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-silver/40 shadow-inner hidden lg:block" />
        <div className="absolute bottom-6 left-6 w-3 h-3 rounded-full bg-silver/40 shadow-inner hidden lg:block" />
        <div className="absolute bottom-6 right-6 w-3 h-3 rounded-full bg-silver/40 shadow-inner hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-brass" />
                <span className="text-brass uppercase tracking-[0.2em] text-sm font-medium">
                  Forged for Purpose
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-silver-bright leading-tight mb-6">
                Steel Flanges Forged to
                <br />
                <span className="text-brass">API 6A/6BX</span>
              </h1>

              <p className="text-silver/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
                Every joint in an API wellhead system is a point of integrity.
                We supply flanges, fittings, and custom machined components
                engineered to hold under stress for up to API 20K class connections.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="https://www.texasflange.com/contact-us/?ref=apiflange-new"
                className="inline-flex items-center gap-2 bg-brass text-iron px-8 py-3.5 rounded font-bold text-lg hover:bg-brass-light transition-colors"
              >
                Request a Quote
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/products/flanges"
                className="inline-flex items-center gap-2 border-2 border-silver/40 text-silver-light px-8 py-3.5 rounded font-bold text-lg hover:border-brass hover:text-brass transition-colors"
              >
                Browse Flanges
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom brass trim */}
        <div className="h-1 bg-gradient-to-r from-brass-dark via-brass to-brass-dark" />
      </section>

      {/* ── TRUST INDICATORS ── */}
      <section className="bg-charcoal border-b border-iron-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { label: 'Flange Types in Stock', value: 15, suffix: '+' },
              { label: 'Pressure Classes Covered', value: 6, suffix: '' },
              { label: 'Material Grades Available', value: 30, suffix: '+' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-brass font-display">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-silver-dark text-sm mt-1">{stat.label}</div>
              </div>
            ))}
            <div>
              <div className="text-2xl md:text-3xl font-bold text-brass font-display">
                Same-Day
              </div>
              <div className="text-silver-dark text-sm mt-1">Quote Turnaround</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT ARE API FLANGES? ── */}
      <section className="bg-steam py-20 md:py-28 border-b border-silver/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-brass uppercase tracking-[0.2em] text-sm font-medium">
                  API Specification
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-iron mt-3 mb-4">
                  What Are API Flanges?
                </h2>
                <BrassDivider />
              </div>

              <div className="prose prose-lg max-w-none text-iron-mid leading-relaxed space-y-5">
                <p>
                  API flanges are built for the oil and gas sector, including upstream, midstream,
                  and even downstream. The API 6A specification (developed by the American Petroleum
                  Institute) covers flanges used in high-pressure petrochemical and oilfield
                  applications where some standard ANSI/ASME ratings just don&apos;t cut it.
                </p>
                <p>
                  Dimensionally, API 6A flanges look similar to their ASME counterparts, but the
                  pressure requirements start where most ASME flanges top out. The baseline is the
                  2000# class (similar to the ASME 600# class), and from there the classes climb:
                  3000#, 5000# - up to the 6BX 10,000#, 20,000# and 25,000# for the most
                  demanding applications.
                </p>
                <p>
                  Most jobs fall in the 5000# range and below; the extreme high-pressure classes
                  are less common but available for production when you need them.
                </p>
                <p>
                  One thing that&apos;s non-negotiable with API flanges: ring type joint (RTJ)
                  facings with the proper ring gaskets. That metal-to-metal seal is what gives them
                  the integrity needed for volatile, high-pressure service.
                </p>
                <p>
                  On the upstream side, you&apos;ll find API flanges on wellheads, blowout
                  preventers, and drilling equipment. Downstream in refining and processing, they
                  handle the conditions involved in turning crude oil into finished products.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-silver/30">
                <p className="text-sm text-iron-mid">
                  <span className="font-semibold text-iron">API</span> = American Petroleum Institute.
                  More at{' '}
                  <a
                    href="https://www.api.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brass hover:text-brass-light underline"
                  >
                    api.org
                  </a>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── WHAT WE SUPPLY ── */}
      <section className="bg-steam py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-brass uppercase tracking-[0.2em] text-sm font-medium">
                Product Lines
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-iron mt-3 mb-4">
                What We Supply
              </h2>
              <BrassDivider />
              <p className="text-iron-mid max-w-2xl mx-auto mt-4">
                Three product categories. Thousands of configurations. Every
                piece traceable, tested, and ready to install.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CircleDot,
                title: 'Flanges',
                desc: 'Weld neck, blind, slip-on, threaded, socket weld, lap joint, reducing, orifice, spectacle blind, plate, and long weld neck. Carbon, stainless, alloy. 1/2" to 60"+ NPS. Class 150 through 2500.',
                href: '/products/flanges',
                features: ['ASME B16.5 & B16.47', 'AWWA C207 & C228', 'DIN & EN 1092-1', 'Custom OD/ID machining'],
              },
              {
                icon: Wrench,
                title: 'Pipe Fittings',
                desc: 'Elbows, tees, reducers, caps, couplings, unions, and specialty fittings. Butt-weld, socket-weld, and threaded configurations for every service condition.',
                href: '/products/fittings',
                features: ['ASME B16.9 & B16.11', 'Schedule 10 through XXH', 'Seamless & welded', 'Hot induction bends'],
              },
              {
                icon: Cog,
                title: 'Custom Machining',
                desc: 'Non-standard bores, overbore flanges, special facings, tight-tolerance work. If the catalog does not have it, we machine it. Drawings or specs -- either works.',
                href: '/services/custom-machining',
                features: ['CNC turning & milling', 'Ring-type joint grooves', 'Weld overlay & hard facing', 'MTR documentation'],
              },
            ].map((product, idx) => (
              <FadeIn key={product.title} delay={idx * 0.15}>
                <Link href={product.href} className="group block h-full">
                  <div className="bg-white rounded-lg border border-silver/30 p-8 h-full hover:shadow-brass-glow hover:border-brass/40 transition-all duration-300">
                    <div className="w-14 h-14 rounded bg-iron flex items-center justify-center mb-6 group-hover:bg-brass transition-colors duration-300">
                      <product.icon size={28} className="text-brass group-hover:text-iron transition-colors duration-300" />
                    </div>

                    <h3 className="text-xl font-bold text-iron mb-3 group-hover:text-brass transition-colors">
                      {product.title}
                    </h3>

                    <p className="text-iron-mid text-sm leading-relaxed mb-5">
                      {product.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {product.features.map((f) => (
                        <span
                          key={f}
                          className="text-xs bg-parchment text-iron-mid px-2.5 py-1 rounded border border-silver/20"
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 text-brass font-medium text-sm group-hover:gap-2 transition-all">
                      View Details <ChevronRight size={16} />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── STANDARDS WE WORK TO ── */}
      <section className="bg-iron py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gear-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-brass uppercase tracking-[0.2em] text-sm font-medium">
                Standards & Compliance
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-silver-bright mt-3 mb-4">
                Built to Code. Every Time.
              </h2>
              <BrassDivider />
              <p className="text-silver/70 max-w-2xl mx-auto mt-4">
                No gray areas. Every flange ships with full material
                traceability and dimensional verification against the standard
                it was ordered to.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                code: 'ASME B16.5',
                title: 'Pipe Flanges & Fittings',
                range: 'NPS 1/2" - 24"',
              },
              {
                code: 'ASME B16.47',
                title: 'Large Diameter Flanges',
                range: 'NPS 26" - 60"',
              },
              {
                code: 'AWWA C207',
                title: 'Steel Pipe Flanges',
                range: '4" - 144" Water/Wastewater',
              },
              {
                code: 'ANSI B16.1',
                title: 'Cast Iron Flanges',
                range: 'Class 25, 125, 250',
              },
              {
                code: 'DIN / EN 1092',
                title: 'European Flange Standard',
                range: 'PN 6 - PN 400',
              },
              {
                code: 'ASME B16.9',
                title: 'Butt-Weld Fittings',
                range: 'NPS 1/2" - 48"',
              },
              {
                code: 'ASME B16.11',
                title: 'Socket-Weld & Threaded',
                range: 'NPS 1/8" - 4"',
              },
              {
                code: 'NACE MR0175',
                title: 'Sour Service Materials',
                range: 'H2S environments',
              },
            ].map((std, idx) => (
              <FadeIn key={std.code} delay={idx * 0.08}>
                <div className="bg-iron-light border border-iron-mid rounded-lg p-5 hover:border-brass/50 transition-colors group">
                  <div className="text-brass font-bold text-lg font-display mb-1 group-hover:text-brass-light transition-colors">
                    {std.code}
                  </div>
                  <div className="text-silver-light text-sm font-medium mb-2">
                    {std.title}
                  </div>
                  <div className="text-silver-dark text-xs">{std.range}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY WORK WITH US ── */}
      <section className="bg-parchment py-20 md:py-28 border-y border-silver/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-brass uppercase tracking-[0.2em] text-sm font-medium">
                The Difference
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-iron mt-3 mb-4">
                Why Work With Us
              </h2>
              <BrassDivider />
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Full Traceability',
                desc: 'Every flange ships with mill test reports traceable to the heat number. No paper shuffling, no guesswork. You get the MTR before the truck shows up.',
              },
              {
                icon: Gauge,
                title: 'Pressure-Rated Right',
                desc: 'We cross-reference your service conditions against ASME pressure-temperature tables before quoting. If the spec does not fit the duty, we say so.',
              },
              {
                icon: Ruler,
                title: 'Dimensional Accuracy',
                desc: 'Bolt holes, raised faces, bore tolerances -- measured and documented. Our QC catches problems before they reach the field.',
              },
              {
                icon: Clock,
                title: 'Rapid Turnaround',
                desc: 'Standard flanges ship from stock. Custom work follows a clear production timeline with updates, not silence. Rush options available when the shutdown clock is running.',
              },
              {
                icon: Factory,
                title: 'Domestic & Import Options',
                desc: 'Buy American requirements? Covered. Budget project needing competitive pricing? Also covered. We source from qualified mills on both sides of the equation.',
              },
              {
                icon: Flame,
                title: 'Specialty Materials',
                desc: 'Duplex, super duplex, Inconel, Monel, Hastelloy, chrome-moly. If the application calls for exotic metallurgy, we have the supply chain for it.',
              },
            ].map((item, idx) => (
              <FadeIn key={item.title} delay={idx * 0.1}>
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded bg-iron flex items-center justify-center flex-shrink-0">
                    <item.icon size={22} className="text-brass" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-iron mb-2">
                      {item.title}
                    </h3>
                    <p className="text-iron-mid text-sm leading-relaxed mb-0">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="bg-steam py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-brass uppercase tracking-[0.2em] text-sm font-medium">
                Sectors We Serve
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-iron mt-3 mb-4">
                From Refinery to Reservoir
              </h2>
              <BrassDivider />
              <p className="text-iron-mid max-w-2xl mx-auto mt-4">
                Different industries, different specs, same standard of
                execution. We know which flange goes where because we have been
                supplying them all.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: 'Oil & Gas', href: '/industries/oil-gas' },
              { name: 'Petrochemical', href: '/industries/petrochemical' },
              { name: 'Power Generation', href: '/industries/power-generation' },
              { name: 'Water & Wastewater', href: '/industries/waterworks' },
              { name: 'Chemical Processing', href: '/industries/petrochemical' },
              { name: 'Mining & Minerals', href: '/industries/mining' },
              { name: 'Pulp & Paper', href: '/industries/pulp-paper' },
              { name: 'Food & Beverage', href: '/industries/food-beverage' },
              { name: 'Agriculture', href: '/industries/agriculture' },
              { name: 'HVAC & Mechanical', href: '/industries/hvac' },
              { name: 'Marine & Shipbuilding', href: '/industries/marine' },
              { name: 'Data Centers', href: '/industries/data-centers' },
            ].map((ind, idx) => (
              <FadeIn key={ind.name} delay={idx * 0.05}>
                <Link
                  href={ind.href}
                  className="group flex items-center gap-3 bg-white border border-silver/30 rounded-lg px-5 py-4 hover:border-brass/50 hover:shadow-brass-glow transition-all"
                >
                  <Cog
                    size={18}
                    className="text-silver-dark group-hover:text-brass transition-colors flex-shrink-0"
                  />
                  <span className="text-iron font-medium text-sm group-hover:text-brass transition-colors">
                    {ind.name}
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLANGE TYPES QUICK REFERENCE ── */}
      <section className="bg-charcoal py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gear-pattern opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-brass uppercase tracking-[0.2em] text-sm font-medium">
                Quick Reference
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-silver-bright mt-3 mb-4">
                Common Flange Types
              </h2>
              <BrassDivider />
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                type: 'Weld Neck',
                use: 'High-pressure, high-temp service',
              },
              {
                type: 'Blind',
                use: 'Dead-end piping, test points',
              },
              {
                type: 'Slip-On',
                use: 'Low-pressure, easy alignment',
              },
              {
                type: 'Threaded',
                use: 'Small-bore, no welding needed',
              },
              {
                type: 'Socket Weld',
                use: 'Small-bore, high-pressure',
              },
              {
                type: 'Lap Joint',
                use: 'Rotating alignment, easy disassembly',
              },
              {
                type: 'Orifice',
                use: 'Flow measurement tapping',
              },
              {
                type: 'Long Weld Neck',
                use: 'Nozzle extensions, vessels',
              },
            ].map((flange, idx) => (
              <FadeIn key={flange.type} delay={idx * 0.06}>
                <div className="bg-iron border border-iron-mid rounded-lg p-5 hover:border-brass/40 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <CircleDot size={16} className="text-brass" />
                    <span className="text-silver-light font-bold text-sm">
                      {flange.type}
                    </span>
                  </div>
                  <p className="text-silver-dark text-xs leading-relaxed">
                    {flange.use}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mt-10">
              <Link
                href="/resources/flange-types-guide"
                className="inline-flex items-center gap-2 text-brass font-medium hover:text-brass-light transition-colors"
              >
                Complete Flange Types Guide <ArrowRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-steam py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-brass uppercase tracking-[0.2em] text-sm font-medium">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-iron mt-3 mb-4">
                From Request to Delivery
              </h2>
              <BrassDivider />
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-brass/30 via-brass to-brass/30" />

            {[
              {
                step: '01',
                title: 'Submit Your Specs',
                desc: 'Send us a drawing, a BOM, or just a description of what you need. We will sort out the details.',
              },
              {
                step: '02',
                title: 'Review & Quote',
                desc: 'We verify the spec against the standard, confirm material availability, and return a firm quote with lead time.',
              },
              {
                step: '03',
                title: 'Production & QC',
                desc: 'Your order goes to the right mill or machine shop. Dimensional checks and MTR verification before it ships.',
              },
              {
                step: '04',
                title: 'Delivery',
                desc: 'Packed, tagged, and shipped with full documentation. Freight options from standard to expedited hot-shot.',
              },
            ].map((step, idx) => (
              <FadeIn key={step.step} delay={idx * 0.15}>
                <div className="text-center relative">
                  <div className="w-20 h-20 rounded-full bg-iron border-4 border-brass mx-auto mb-6 flex items-center justify-center relative z-10">
                    <span className="text-brass font-display font-bold text-xl">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-iron mb-2">
                    {step.title}
                  </h3>
                  <p className="text-iron-mid text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESOURCES ── */}
      <section className="bg-parchment py-20 md:py-28 border-y border-silver/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-brass uppercase tracking-[0.2em] text-sm font-medium">
                Technical Resources
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-iron mt-3 mb-4">
                Engineering Reference
              </h2>
              <BrassDivider />
              <p className="text-iron-mid max-w-2xl mx-auto mt-4">
                Spec sheets are fine. Understanding why the spec matters is
                better. These guides help your team make faster, more confident
                decisions.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FileText,
                title: 'Flange Types Guide',
                desc: 'When to use weld neck vs. slip-on vs. blind. Application criteria, pros and cons.',
                href: '/resources/flange-types-guide',
              },
              {
                icon: Gauge,
                title: 'Pressure-Temperature Ratings',
                desc: 'ASME B16.5 P-T tables for common materials. Interactive lookup by class and temp.',
                href: '/resources/pressure-ratings',
              },
              {
                icon: Wrench,
                title: 'Bolt Torque Reference',
                desc: 'Recommended torque values for B7 studs by size and lubrication condition.',
                href: '/tools/bolt-torque-calculator',
              },
              {
                icon: Award,
                title: 'Material Grade Guide',
                desc: 'A105 vs. F304 vs. F316 vs. F11. Which grade for which service.',
                href: '/resources/material-grades',
              },
              {
                icon: Shield,
                title: 'Corrosion Prevention',
                desc: 'Coatings, galvanizing, and material selection for corrosive environments.',
                href: '/resources/corrosion-prevention',
              },
              {
                icon: Ruler,
                title: 'Flange Dimension Tables',
                desc: 'ASME B16.5 dimensional data. OD, bolt circle, bolt holes, thickness by class.',
                href: '/tools/flange-dimension-calculator',
              },
            ].map((resource, idx) => (
              <FadeIn key={resource.title} delay={idx * 0.1}>
                <Link href={resource.href} className="group block">
                  <div className="bg-white border border-silver/30 rounded-lg p-6 hover:border-brass/40 hover:shadow-brass-glow transition-all h-full">
                    <resource.icon
                      size={24}
                      className="text-brass mb-4"
                    />
                    <h3 className="text-base font-bold text-iron mb-2 group-hover:text-brass transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-iron-mid text-sm leading-relaxed mb-0">
                      {resource.desc}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-steam py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-brass uppercase tracking-[0.2em] text-sm font-medium">
                Common Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-iron mt-3 mb-4">
                Frequently Asked
              </h2>
              <BrassDivider />
            </div>
          </FadeIn>

          <div className="space-y-4">
            {[
              {
                q: 'What flange standards do you stock?',
                a: 'We carry inventory to ASME B16.5, ASME B16.47 Series A and B, AWWA C207, and DIN/EN 1092-1. If your project calls for a different standard, we can source it.',
              },
              {
                q: 'Can you supply flanges with domestic melt requirements?',
                a: 'Yes. We stock Buy American / ARRA compliant flanges and can provide full domestic melt and production documentation when required.',
              },
              {
                q: 'What is your typical lead time?',
                a: 'We pride ourselves on industry-leading turnaround times. Lead times vary by material and specification, so call us at (281) 484-8325 for project-specific timelines.',
              },
              {
                q: 'Do you provide mill test reports?',
                a: 'Every order ships with MTRs traceable to the original heat number. EN 10204 3.1 and 3.2 certificates available on request.',
              },
              {
                q: 'What size range can you handle?',
                a: 'Standard inventory covers 1/2" through 24" NPS. Large diameter flanges from 26" through 60"+ are available to ASME B16.47 and AWWA specs. We have supplied flanges up to 120" OD on custom projects.',
              },
            ].map((faq, idx) => (
              <FAQItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-iron relative overflow-hidden">
        <div className="absolute inset-0 bg-gear-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 text-center">
          <FadeIn>
            <GearIcon size={40} className="text-brass/60 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-silver-bright mb-4">
              Need Flanges? Let&apos;s Talk.
            </h2>
            <p className="text-silver/70 text-lg mb-10 max-w-2xl mx-auto">
              Whether you need ten slip-ons for a maintenance job or ten
              thousand weld necks for a new build, the process starts with a
              conversation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://www.texasflange.com/contact-us/?ref=apiflange-new"
                className="inline-flex items-center gap-2 bg-brass text-iron px-8 py-3.5 rounded font-bold text-lg hover:bg-brass-light transition-colors"
              >
                Request a Quote
                <ArrowRight size={20} />
              </Link>
              <a
                href="tel:+1-281-484-8325"
                className="inline-flex items-center gap-2 border-2 border-silver/40 text-silver-light px-8 py-3.5 rounded font-bold text-lg hover:border-brass hover:text-brass transition-colors"
              >
                <Phone size={20} />
                (281) 484-8325
              </a>
            </div>
          </FadeIn>
        </div>
        <div className="h-1 bg-gradient-to-r from-brass-dark via-brass to-brass-dark" />
      </section>
    </>
  );
}

/* ─────────────────────────────────────────────
   FAQ ACCORDION ITEM
   ───────────────────────────────────────────── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-silver/30 rounded-lg bg-white overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-parchment/50 transition-colors"
      >
        <span className="text-iron font-medium pr-4">{question}</span>
        <ChevronRight
          size={20}
          className={`text-brass flex-shrink-0 transition-transform duration-300 ${
            open ? 'rotate-90' : ''
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-iron-mid text-sm leading-relaxed border-t border-silver/20 pt-4">
          {answer}
        </div>
      </motion.div>
    </div>
  );
}
