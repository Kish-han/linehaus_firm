import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArchitecturalImage } from "@/components/ui/ArchitecturalImage";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export const StudioPreviewSection: React.FC = () => {
  return (
    <section id="studio-story" className="py-20 md:py-28 border-b border-[#DFDBD2] bg-[#F8F7F4]">
      <Container size="wide">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs tracking-[0.25em] text-[#384D58] font-medium">
            [04]
          </span>
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#384D58]">
            The Studio Story
          </span>
        </div>

        {/* Editorial Studio Story Spread (Image 2 Requirement: Norm Architects style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Architectural Tactile / Process Photograph */}
          <div className="lg:col-span-6">
            <div className="relative border border-[#DFDBD2] bg-[#E8E6E1] overflow-hidden">
              <ArchitecturalImage
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
                alt="Architectural material craft and tactile stone detailing"
                aspectRatio="16/10"
                caption="Tactile materiality: honest stone and timber detailing in practice."
              />
            </div>
          </div>

          {/* Short Editorial Story Narrative (Exact copy from Image 2) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs tracking-widest text-[#384D58] uppercase block">
                Practice Profile · Bhadravati, Karnataka
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#14171A] leading-tight">
                Designing with purpose. <br />
                <span className="italic text-[#384D58]">Building with precision.</span>
              </h2>
            </div>

            <p className="font-sans text-base sm:text-lg text-[#545F68] font-light leading-relaxed">
              LINEHAUS ARCHITECTS is a multidisciplinary architectural practice based in Bhadravati,
              Karnataka. We bring together architecture, interiors and construction to create
              thoughtful spaces that balance functionality, aesthetics and lasting quality.
            </p>

            <p className="font-sans text-sm sm:text-base text-[#545F68] font-light leading-relaxed">
              We eliminate the friction between conceptual design and on-site building by providing
              complete single-point accountability—ensuring every detail drawn is built with millimetric rigour.
            </p>

            {/* Disciplines Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono text-[#384D58]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#384D58] flex-shrink-0" />
                <span>Architecture &amp; Spatial Planning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#384D58] flex-shrink-0" />
                <span>Interior Architecture &amp; Joinery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#384D58] flex-shrink-0" />
                <span>Turnkey Construction &amp; Build</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#384D58] flex-shrink-0" />
                <span>Residential &amp; Commercial</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#DFDBD2] flex flex-wrap items-center gap-4">
              <Link
                href="/studio"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-sans font-medium tracking-[0.2em] uppercase bg-[#384D58] text-[#F8F7F4] hover:bg-[#273740] transition-colors"
              >
                <span>Read Full Studio Story</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#545F68] hover:text-[#14171A] transition-colors"
              >
                <span>Initiate Consultation →</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
