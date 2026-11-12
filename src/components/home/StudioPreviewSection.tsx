import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUpRight } from "lucide-react";

export const StudioPreviewSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Topographical & Site Analysis",
      desc: "Topography, solar orientation, site access, and soil conditions establish the foundational constraints before any line is drafted.",
    },
    {
      num: "02",
      title: "Spatial & Functional Massing",
      desc: "Circulation corridors, daylight infiltration, privacy gradients, and room volumes are sculpted into coherent, efficient floor plans.",
    },
    {
      num: "03",
      title: "Technical Detailing & BOQ",
      desc: "Structural engineering, MEP coordination, architectural joinery, and transparent quantities prevent budget creep.",
    },
    {
      num: "04",
      title: "Turnkey Site Realisation",
      desc: "Single-source site management, artisan supervision, material procurement, and milestone sign-offs ensure the built reality mirrors the drawings.",
    },
  ];

  return (
    <section id="studio" className="py-20 md:py-28 border-b border-[#DFDBD2] bg-[#F8F7F4]">
      <Container size="wide">
        <SectionHeader
          number="04"
          eyebrow="The Studio &amp; Approach"
          title="Rooted in Context, Guided by Rigour"
          subtitle={`Operating from ${siteConfig.location.city}, Karnataka, Linehaus bridges modern architectural thought with regional contextual intelligence.`}
          align="split"
        />

        {/* Studio Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-12 items-stretch">
          {/* Practice Narrative Box */}
          <div className="lg:col-span-6 p-8 sm:p-10 bg-[#F1EFEA] border border-[#DFDBD2] flex flex-col justify-between">
            <div className="space-y-4">
              <span className="font-mono text-xs tracking-widest text-[#384D58] uppercase block">
                Practice Ethos
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#14171A]">
                Architecture for the Indian Reality
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#545F68] font-light leading-relaxed">
                Architecture should respond to how people genuinely inhabit spaces. We craft homes
                and environments designed for longevity, practical circulation, and enduring material dignity.
              </p>
              <p className="font-sans text-sm sm:text-base text-[#545F68] font-light leading-relaxed">
                Our approach honors the spatial wisdom of traditional regional architecture—deep overhangs,
                shaded internal courtyards, tactile stone, and generous natural daylight—reimagined in sharp,
                contemporary architectural geometries.
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-[#DFDBD2]">
              <Link
                href="/studio"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#384D58] hover:text-[#14171A] transition-colors"
              >
                <span>Read Full Studio Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Regional Context & Materiality Details */}
          <div className="lg:col-span-6 p-8 sm:p-10 bg-[#FFFFFF] border border-[#DFDBD2] flex flex-col justify-between">
            <div className="space-y-4">
              <span className="font-mono text-xs tracking-widest text-[#384D58] uppercase block">
                Material Authenticity
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#14171A]">
                The Palette of Permanence
              </h3>
              <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#545F68]">
                <div className="flex items-start gap-3 pb-3 border-b border-[#DFDBD2]/60">
                  <span className="font-mono text-xs text-[#384D58] font-semibold">[01]</span>
                  <div>
                    <strong className="text-[#14171A] font-medium block">Cast Concrete &amp; Monolithic Slabs</strong>
                    <span className="font-light">Thermal stability, tectonic clarity, and structural longevity.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-3 border-b border-[#DFDBD2]/60">
                  <span className="font-mono text-xs text-[#384D58] font-semibold">[02]</span>
                  <div>
                    <strong className="text-[#14171A] font-medium block">Sadarahalli &amp; Basalt Granite</strong>
                    <span className="font-light">Enduring stone plinths quarried locally in Karnataka, aging with dignity.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs text-[#384D58] font-semibold">[03]</span>
                  <div>
                    <strong className="text-[#14171A] font-medium block">Slate Steel &amp; Sustainable Teak Joinery</strong>
                    <span className="font-light">Muted architectural steel framing paired with tactile, FSC-certified hardwoods.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-[#DFDBD2]">
              <span className="font-mono text-[11px] text-[#88939C] uppercase">
                Council of Architecture (India) Practice Norms · Bhadravati, Karnataka
              </span>
            </div>
          </div>
        </div>

        {/* 4-Step Methodology Timeline */}
        <div className="mt-16 pt-12 border-t border-[#DFDBD2]">
          <span className="font-mono text-xs tracking-[0.25em] text-[#384D58] uppercase block mb-8">
            Execution Methodology
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="p-6 bg-[#F1EFEA] border border-[#DFDBD2]">
                <span className="font-mono text-sm text-[#384D58] font-semibold block mb-3">
                  [{step.num}]
                </span>
                <h4 className="font-serif text-lg text-[#14171A] font-normal mb-2">
                  {step.title}
                </h4>
                <p className="font-sans text-xs text-[#545F68] font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
