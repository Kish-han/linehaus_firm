import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { servicesData } from "@/data/services";
import { Check, ArrowUpRight } from "lucide-react";

export const ServicesMatrixSection: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 border-b border-[#DFDBD2] bg-[#F1EFEA]">
      <Container size="wide">
        <SectionHeader
          number="03"
          eyebrow="Practice Disciplines"
          title="Multidisciplinary Services"
          subtitle="From master conceptual planning to turnkey site delivery, our practice provides seamless accountability across architecture, interiors, and execution."
          align="split"
        />

        {/* Services Architectural Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className="p-8 bg-[#F8F7F4] border border-[#DFDBD2] flex flex-col justify-between hover:border-[#384D58] transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#DFDBD2]">
                  <span className="font-mono text-xs tracking-widest text-[#384D58] font-medium">
                    [0{idx + 1}]
                  </span>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#88939C]">
                    {service.category}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-normal text-[#14171A] mb-3 group-hover:text-[#384D58] transition-colors">
                  {service.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#545F68] font-light leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Key Deliverables List */}
                <div className="pt-4 border-t border-[#DFDBD2]/60 space-y-2">
                  <span className="font-mono text-[10px] tracking-widest text-[#384D58] uppercase block mb-2">
                    Scope Highlights
                  </span>
                  {service.deliverables.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#545F68]">
                      <Check className="w-3.5 h-3.5 text-[#384D58] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#DFDBD2]">
                <Link
                  href={`/services#${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase text-[#14171A] group-hover:text-[#384D58] transition-colors"
                >
                  <span>Explore Discipline</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}

          {/* Turnkey Assurance Feature Panel */}
          <div className="p-8 bg-[#182229] text-[#F8F7F4] border border-[#2B3740] flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs tracking-[0.25em] text-[#A0B2BD] uppercase block mb-4">
                Single-Point Responsibility
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-3">
                Turnkey Execution Model
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#A0B2BD] font-light leading-relaxed mb-6">
                Prevent the costly friction between independent designers and external contractors.
                Our turnkey delivery model pairs architectural design with direct site supervision,
                material procurement, and construction milestones.
              </p>
            </div>

            <div className="pt-6 border-t border-[#2B3740]">
              <Link
                href="/services#turnkey"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-sans font-medium tracking-[0.2em] uppercase bg-[#384D58] text-[#F8F7F4] hover:bg-[#4F6877] transition-colors"
              >
                <span>Discover Turnkey Practice</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
