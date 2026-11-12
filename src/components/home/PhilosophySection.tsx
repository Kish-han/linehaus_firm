import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { philosophyData } from "@/data/philosophy";

export const PhilosophySection: React.FC = () => {
  return (
    <section id="practice" className="py-20 md:py-28 border-b border-[#DFDBD2] bg-[#F8F7F4]">
      <Container size="wide">
        <SectionHeader
          number="01"
          eyebrow="Architectural Philosophy"
          title="Functional Architecture"
          subtitle="Form is never arbitrary. It is the logical resolution of internal life, spatial proportion, and structural honesty."
          align="split"
        />

        {/* Manifesto Extract Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-14 items-start">
          <div className="lg:col-span-5">
            <blockquote className="font-serif text-2xl sm:text-3xl text-[#14171A] leading-snug font-light italic border-l-2 border-[#384D58] pl-6 py-2">
              &ldquo;We reject decorative excess and superficial trends. Architecture must prove its worth
              through purposeful living, natural light, and spatial clarity.&rdquo;
            </blockquote>
          </div>

          <div className="lg:col-span-7 space-y-6 text-[#545F68] font-sans font-light text-base sm:text-lg leading-relaxed">
            {philosophyData.manifesto.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Four Architectural Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-[#DFDBD2]">
          {philosophyData.principles.map((principle) => (
            <div
              key={principle.number}
              className="p-6 sm:p-8 bg-[#F1EFEA] border border-[#DFDBD2] flex flex-col justify-between group hover:border-[#384D58] transition-colors"
            >
              <div>
                <span className="font-mono text-sm tracking-widest text-[#384D58] font-semibold block mb-4">
                  [{principle.number}]
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#14171A] mb-2">
                  {principle.title}
                </h3>
                <p className="font-mono text-[11px] tracking-wider uppercase text-[#384D58] mb-4">
                  {principle.tagline}
                </p>
              </div>

              <p className="font-sans text-xs text-[#545F68] leading-relaxed pt-4 border-t border-[#DFDBD2]/80">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Practice Indicators Bar */}
        {philosophyData.stats.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-8 border-t border-[#DFDBD2]">
            {philosophyData.stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-mono text-2xl sm:text-3xl font-normal text-[#14171A]">
                  {stat.value}
                </span>
                <span className="font-sans text-xs font-medium text-[#384D58] uppercase tracking-wider mt-1">
                  {stat.label}
                </span>
                <span className="font-mono text-[10px] text-[#88939C] mt-0.5">
                  {stat.note}
                </span>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};
