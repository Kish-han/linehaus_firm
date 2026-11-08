import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { servicesData } from "@/data/services";
import { Check, ArrowUpRight, Shield, Layers, FileCheck, Hammer } from "lucide-react";

export const metadata: Metadata = {
  title: "Multidisciplinary Services & Turnkey Practice",
  description:
    "Comprehensive architectural services by Linehaus Architects: Residential architecture, interior joinery, commercial design, landscape planning, and turnkey construction management.",
};

export default function ServicesPage() {
  return (
    <div className="py-12 md:py-20 bg-[#F8F7F4]">
      <Container size="wide">
        {/* Page Banner */}
        <div className="pb-16 mb-16 border-b border-[#DFDBD2]">
          <div className="flex items-center gap-3 mb-4 text-xs font-mono tracking-[0.25em] text-[#384D58] uppercase">
            <span>[PRACTICE DISCIPLINES]</span>
            <span>·</span>
            <span>END-TO-END ACCOUNTABILITY</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#14171A] leading-[1.08] max-w-4xl">
            Integrated Architecture, <br />
            <span className="italic text-[#384D58]">Interiors &amp; Turnkey Delivery.</span>
          </h1>

          <p className="mt-6 font-sans text-base sm:text-xl text-[#545F68] font-light max-w-3xl leading-relaxed">
            We bridge conceptual spatial design with hands-on technical construction oversight. 
            By eliminating the disconnect between designers and contractors, Linehaus guarantees 
            that the finished building mirrors the original architectural intent.
          </p>
        </div>

        {/* Turnkey Methodology Highlight Box */}
        <div className="mb-20 p-8 sm:p-12 bg-[#182229] text-[#F8F7F4] border border-[#2B3740]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="font-mono text-xs tracking-widest text-[#A0B2BD] uppercase block">
                The Linehaus Turnkey Model
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white">
                Single-Point Responsibility: From Soil to Handover
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#A0B2BD] font-light leading-relaxed">
                Traditional building projects often suffer from blame-shifting between independent
                designers and execution contractors. Our turnkey architectural model unites design,
                structural engineering, material procurement, and master craftsman management under a
                singular contractual umbrella.
              </p>
            </div>

            <div className="lg:col-span-4 lg:pl-6 border-t lg:border-t-0 lg:border-l border-[#2B3740] pt-6 lg:pt-0">
              <ul className="space-y-3 text-xs font-mono text-[#E8EDF0]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#A0B2BD]" />
                  <span>Fixed Bill of Quantities (BOQ)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#A0B2BD]" />
                  <span>Bi-Weekly Milestone Audits</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#A0B2BD]" />
                  <span>Curated Artisan Network</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#A0B2BD]" />
                  <span>Council of Architecture Compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Disciplines Deep-Dive */}
        <div className="space-y-16">
          {servicesData.map((service, index) => (
            <article
              key={service.id}
              id={service.slug}
              className="p-8 sm:p-12 bg-[#F1EFEA] border border-[#DFDBD2] scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left 4 cols */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#384D58] uppercase">
                    <span>[0{index + 1}]</span>
                    <span>·</span>
                    <span>{service.category}</span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#14171A]">
                    {service.title}
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-[#545F68] font-light leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 text-xs font-sans font-medium tracking-[0.18em] uppercase bg-[#384D58] text-[#F8F7F4] hover:bg-[#273740] transition-colors"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Right 7 cols: Scopes & Deliverables */}
                <div className="lg:col-span-7 lg:pl-8 space-y-6">
                  {/* Detailed Scope */}
                  <div>
                    <h4 className="font-mono text-xs tracking-widest text-[#384D58] uppercase block mb-3">
                      Comprehensive Scope of Work
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#545F68]">
                      {service.detailedScope.map((scope, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#384D58] mt-0.5 flex-shrink-0" />
                          <span>{scope}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Standard Deliverables */}
                  <div className="pt-6 border-t border-[#DFDBD2]">
                    <h4 className="font-mono text-xs tracking-widest text-[#384D58] uppercase block mb-3">
                      Client Drawing &amp; Specification Deliverables
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.deliverables.map((del, dIdx) => (
                        <div
                          key={dIdx}
                          className="p-3 bg-[#FFFFFF] border border-[#DFDBD2] text-xs font-mono text-[#14171A]"
                        >
                          {del}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Consultation CTA */}
        <div className="mt-20 pt-16 border-t border-[#DFDBD2] text-center space-y-6">
          <span className="font-mono text-xs tracking-[0.25em] text-[#384D58] uppercase block">
            Direct Studio Desk
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#14171A] font-normal">
            Need Guidance On Your Building Project?
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#545F68] max-w-xl mx-auto leading-relaxed">
            Our architectural group provides structured feasibility consultations for site selection,
            typology planning, and budgetary estimation.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-xs font-sans font-medium tracking-[0.2em] uppercase bg-[#14171A] text-[#F8F7F4] hover:bg-[#384D58] transition-colors"
            >
              <span>Schedule Initial Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
