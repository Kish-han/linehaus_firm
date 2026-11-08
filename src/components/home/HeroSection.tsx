import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArchitecturalImage } from "@/components/ui/ArchitecturalImage";
import { siteConfig } from "@/data/siteConfig";
import { projectsData } from "@/data/projects";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  const featuredProject = projectsData[0]; // The Courtyard Residence

  return (
    <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 border-b border-[#DFDBD2]">
      <Container size="wide">
        {/* Architectural Meta Bar (Top Coordinates & Datum) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#DFDBD2] text-[11px] font-mono tracking-widest uppercase text-[#545F68]">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 bg-[#384D58]" />
            <span className="text-[#14171A] font-medium">LINEHAUS ARCHITECTS</span>
            <span className="text-[#A0B2BD]">/</span>
            <span>{siteConfig.location.city}, {siteConfig.location.state}</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">
              LAT {siteConfig.location.coordinates.latitude} · LON {siteConfig.location.coordinates.longitude}
            </span>
            <span className="text-[#384D58] font-medium">EST. {siteConfig.establishedYear}</span>
          </div>
        </div>

        {/* Primary Statement & Manifesto Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 md:mb-16">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-normal leading-[1.05] tracking-tight text-[#14171A]">
              Architecture of Purpose <br />
              <span className="italic text-[#384D58]">&amp; Spatial Clarity.</span>
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pl-6 pb-2">
            <p className="font-sans text-sm sm:text-base text-[#545F68] font-light leading-relaxed mb-4">
              A multidisciplinary architectural studio practicing Functional Architecture—crafting
              residences, luxury estates, and environments shaped by climate, structural honesty, and
              the rituals of daily living.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-[#384D58] uppercase">
              <span>BHADRAVATI</span>
              <span>·</span>
              <span>KARNATAKA</span>
              <span>·</span>
              <span>INDIA</span>
            </div>
          </div>
        </div>

        {/* Flagship Asymmetric Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Hero Architectural Frame (Left 65%) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="relative group">
              <ArchitecturalImage
                src={featuredProject.heroImage.src}
                alt={featuredProject.heroImage.alt}
                aspectRatio="16/10"
                caption="Flagship Monolithic Residence — Climate-Responsive Courtyard Living (Karnataka)"
                isHero={true}
                priority={true}
                overlayText="FLAGSHIP COMMISSION · THE COURTYARD RESIDENCE"
              />
            </div>
          </div>

          {/* Technical Spec & Context Sidebar (Right 35%) */}
          <div className="lg:col-span-4 flex flex-col justify-between p-6 sm:p-8 bg-[#F1EFEA] border border-[#DFDBD2]">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#DFDBD2]">
                <span className="font-mono text-xs tracking-[0.2em] text-[#384D58] font-medium uppercase">
                  [PRJ_01] FEATURED WORK
                </span>
                <span className="font-mono text-[11px] text-[#545F68] uppercase">
                  {featuredProject.status}
                </span>
              </div>

              <div>
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#545F68] block mb-1">
                  {featuredProject.typology}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#14171A]">
                  {featuredProject.title}
                </h3>
                <p className="mt-2 text-xs font-sans text-[#545F68] leading-relaxed">
                  {featuredProject.subtitle}
                </p>
              </div>

              {/* Architectural Metrics Table */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#DFDBD2] text-xs">
                <div>
                  <span className="font-mono text-[10px] text-[#88939C] uppercase block">Location</span>
                  <span className="font-sans font-medium text-[#14171A]">{featuredProject.location}</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#88939C] uppercase block">Built Area</span>
                  <span className="font-mono font-medium text-[#14171A]">{featuredProject.area}</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#88939C] uppercase block">Climate Strategy</span>
                  <span className="font-sans text-[11px] text-[#14171A]">Stack Ventilation Court</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#88939C] uppercase block">Delivery</span>
                  <span className="font-sans text-[11px] text-[#14171A]">Turnkey Architecture</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[#DFDBD2]">
              <Link
                href={`/projects/${featuredProject.slug}`}
                className="w-full inline-flex items-center justify-between px-5 py-3.5 text-xs font-sans font-medium tracking-[0.2em] uppercase bg-[#14171A] text-[#F8F7F4] hover:bg-[#384D58] transition-colors"
              >
                <span>Examine Case Study</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Lower Datum Indicator */}
        <div className="mt-12 pt-6 border-t border-[#DFDBD2] flex items-center justify-between text-xs font-mono tracking-widest text-[#545F68] uppercase">
          <a
            href="#practice"
            className="inline-flex items-center gap-2 hover:text-[#14171A] transition-colors"
          >
            <ArrowDown className="w-3.5 h-3.5 text-[#384D58] animate-bounce" />
            <span>Scroll to Explore Studio</span>
          </a>

          <div>
            <span>01 / SELECTED WORKS ({projectsData.length.toString().padStart(2, "0")})</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
