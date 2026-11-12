import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArchitecturalImage } from "@/components/ui/ArchitecturalImage";
import { siteConfig } from "@/data/siteConfig";
import { projectsData } from "@/data/projects";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  const featuredProject = projectsData[0]; // The Courtyard House

  return (
    <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 border-b border-[#DFDBD2] bg-[#F8F7F4]">
      {/* Subtle Architectural Corner Registration Marks */}
      <div className="absolute top-3 left-3 pointer-events-none opacity-25 hidden sm:block">
        <span className="font-mono text-[9px] text-[#384D58]">+ REG. 2024</span>
      </div>
      <div className="absolute top-3 right-3 pointer-events-none opacity-25 hidden sm:block">
        <span className="font-mono text-[9px] text-[#384D58]">SCALE: 1:100 @ A1 +</span>
      </div>

      <Container size="wide">
        {/* Top Architectural Datum Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-10 md:mb-14 border-b border-[#DFDBD2] text-[10px] sm:text-[11px] font-mono tracking-wider sm:tracking-widest uppercase text-[#545F68]">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="inline-block w-2 h-2 bg-[#384D58]" />
            <span className="text-[#14171A] font-semibold">{siteConfig.name}</span>
            <span className="text-[#A0B2BD]">/</span>
            <span>{siteConfig.location.city}, {siteConfig.location.state}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            <span className="text-[#384D58] font-medium">STUDIO EST. {siteConfig.establishedYear}</span>
          </div>
        </div>

        {/* Editorial Headline Presentation (Image 3 layout) */}
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14 space-y-6">
          <div className="inline-block">
            <span className="font-mono text-xs sm:text-sm tracking-[0.28em] text-[#384D58] uppercase font-semibold">
              ARCHITECTURE / INTERIORS / CONSTRUCTION
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-normal leading-[1.08] tracking-tight text-[#14171A]">
            Spaces shaped around <br className="hidden sm:inline" />
            <span className="italic text-[#384D58]">the way you live.</span>
          </h1>

          <p className="font-sans text-sm sm:text-base md:text-lg text-[#545F68] font-light max-w-2xl mx-auto leading-relaxed">
            LINEHAUS ARCHITECTS is a multidisciplinary architectural practice based in Bhadravati,
            Karnataka. We bring together architecture, interiors and construction to create
            thoughtful spaces that balance functionality, aesthetics and lasting quality.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-sans font-medium tracking-[0.2em] uppercase bg-[#384D58] text-[#F8F7F4] hover:bg-[#273740] transition-colors shadow-sm"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/studio"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-sans font-medium tracking-[0.2em] uppercase bg-[#F1EFEA] text-[#14171A] border border-[#DFDBD2] hover:border-[#384D58] transition-colors"
            >
              <span>Our Studio</span>
            </Link>
          </div>
        </div>

        {/* Large Architectural Project Photograph (Image 3 Requirement: covers most of screen) */}
        <div className="relative group my-8">
          <div className="relative overflow-hidden border border-[#DFDBD2] bg-[#E8E6E1]">
            <ArchitecturalImage
              src={featuredProject.heroImage.src}
              alt={featuredProject.heroImage.alt}
              aspectRatio="16/9"
              caption={`${featuredProject.title} · ${featuredProject.location} — Residential Architecture & Construction`}
              isHero={true}
              priority={true}
              overlayText="FEATURED WORK · THE COURTYARD HOUSE"
            />
          </div>
        </div>

        {/* Lower Datum Indicator */}
        <div className="mt-8 pt-6 border-t border-[#DFDBD2] flex flex-wrap items-center justify-between gap-3 text-[10px] sm:text-xs font-mono tracking-wider sm:tracking-widest text-[#545F68] uppercase">
          <a
            href="#studio-story"
            className="inline-flex items-center gap-2 hover:text-[#14171A] transition-colors"
          >
            <ArrowDown className="w-3.5 h-3.5 text-[#384D58] animate-bounce" />
            <span>Scroll to Explore Studio</span>
          </a>

          <div className="flex items-center gap-4">
            <span>BHADRAVATI</span>
            <span>·</span>
            <span>KARNATAKA</span>
            <span>·</span>
            <span>INDIA</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
