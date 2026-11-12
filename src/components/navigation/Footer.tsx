import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#182229] text-[#F8F7F4] border-t border-[#2B3740] pt-16 md:pt-20 pb-12">
      <Container size="wide">
        {/* Upper Colophon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#2B3740]">
          {/* Column 1: Brand & Identity */}
          <div className="md:col-span-5 space-y-6">
            <BrandLogo variant="stacked" theme="light" />
            <p className="font-sans text-sm text-[#A0B2BD] font-light leading-relaxed max-w-sm">
              A multidisciplinary architecture and interior atelier committed to functional clarity, 
              climatic intelligence, and thoughtful residential and turnkey architectural delivery.
            </p>
            <div className="pt-2">
              <span className="inline-block px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase bg-[#273740] text-[#A0B2BD] border border-[#384D58]">
                STUDIO BASE: BHADRAVATI, KARNATAKA
              </span>
            </div>
          </div>

          {/* Column 2: Architectural Typologies */}
          <div className="md:col-span-3 space-y-4">
            <span className="font-mono text-[11px] tracking-[0.25em] text-[#A0B2BD] uppercase block">
              Practice Disciplines
            </span>
            <ul className="space-y-2.5 text-xs font-sans tracking-wide text-[#E8EDF0]">
              <li>
                <Link href="/projects?typology=Residential" className="hover:text-white transition-colors">
                  Private Residences &amp; Homes
                </Link>
              </li>
              <li>
                <Link href="/projects?typology=Luxury" className="hover:text-white transition-colors">
                  Luxury Villa Estates
                </Link>
              </li>
              <li>
                <Link href="/services#turnkey" className="hover:text-white transition-colors">
                  Turnkey Architectural Execution
                </Link>
              </li>
              <li>
                <Link href="/services#interior" className="hover:text-white transition-colors">
                  Interior Architecture &amp; Millwork
                </Link>
              </li>
              <li>
                <Link href="/projects?typology=Commercial" className="hover:text-white transition-colors">
                  Commercial &amp; Institutional
                </Link>
              </li>
              <li>
                <Link href="/services#landscape" className="hover:text-white transition-colors">
                  Landscape
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Studio Coordinates & Consultation */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-mono text-[11px] tracking-[0.25em] text-[#A0B2BD] uppercase block">
              Consultation &amp; Studio Desk
            </span>
            <div className="space-y-2 text-xs font-sans text-[#E8EDF0]">
              <p className="leading-relaxed">
                <strong className="text-white font-medium">Bhadravati Studio Base:</strong>
                <br />
                {siteConfig.location.addressDisplay}
              </p>
              <p className="font-mono text-[11px] text-[#A0B2BD]">
                {siteConfig.location.coordinates.latitude}, {siteConfig.location.coordinates.longitude} (Regional Datum)
              </p>
              <p className="text-[11px] text-[#8C9EA9] italic pt-1">
                {siteConfig.location.consultationNote}
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white hover:text-[#A0B2BD] transition-colors border-b border-[#384D58] pb-1"
              >
                <span>Initiate Project Brief</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Lower Legal & Compliance Colophon */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] font-mono tracking-wider text-[#8C9EA9]">
          <div>
            <p>
              © 2026 {siteConfig.name}. All Rights Reserved.
            </p>
            <p className="text-[10px] text-[#697985] mt-0.5">
              {siteConfig.compliance.coaRegistrationNote}
            </p>
          </div>

          <div className="flex items-center gap-6 text-[10px]">
            <span>FUNCTIONAL ARCHITECTURE · SPATIAL CLARITY</span>
            <span className="text-[#384D58]">/</span>
            <span>KARNATAKA · INDIA</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
