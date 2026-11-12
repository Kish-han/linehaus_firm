import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { philosophyData } from "@/data/philosophy";

export const PhilosophySection: React.FC = () => {
  return (
    <section id="practice" className="py-20 md:py-28 border-b border-[#DFDBD2] bg-[#F8F7F4]">
      <Container size="wide">
        <SectionHeader
          number="01"
          eyebrow="Architectural Foundations"
          title="Four Architectural Principles"
          subtitle="Form is never arbitrary. It is the logical resolution of internal life, spatial proportion, and structural honesty."
          align="split"
        />

        {/* Short Editorial Manifesto Extract */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-12 items-center">
          <div className="lg:col-span-5">
            <blockquote className="font-serif text-2xl sm:text-3xl text-[#14171A] leading-snug font-light italic border-l-2 border-[#384D58] pl-6 py-2">
              &ldquo;We reject decorative excess and superficial trends. Architecture must prove its worth
              through purposeful living, natural light, and spatial clarity.&rdquo;
            </blockquote>
          </div>

          <div className="lg:col-span-7 space-y-4 text-[#545F68] font-sans font-light text-base leading-relaxed">
            <p>
              Operating from Bhadravati, Karnataka, we craft environments shaped by spatial purpose,
              tactile materiality, and construction precision. Every space we design is calibrated
              around daily routines, natural daylight, and enduring quality.
            </p>
          </div>
        </div>

        {/* Four Architectural Principles 2x2 Image-Led Grid (Image 9 Requirement) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#DFDBD2]">
          {philosophyData.principles.map((principle) => (
            <div
              key={principle.number}
              className="group border border-[#DFDBD2] bg-[#FFFFFF] hover:border-[#384D58] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm"
            >
              {/* Image Preview */}
              {principle.image && (
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E8E6E1]">
                  <Image
                    src={principle.image}
                    alt={principle.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-[#14171A]/80 backdrop-blur-sm text-white px-2.5 py-1 text-[11px] font-mono tracking-widest uppercase">
                    [{principle.number}]
                  </div>
                </div>
              )}

              {/* Text Content */}
              <div className="p-6 sm:p-8 space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-sm tracking-widest text-[#384D58] font-bold">
                    {principle.number} —
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-[#14171A] group-hover:text-[#384D58] transition-colors">
                    {principle.title}
                  </h3>
                </div>

                <p className="font-sans text-sm sm:text-base text-[#545F68] font-light leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
