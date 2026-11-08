import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { philosophyData } from "@/data/philosophy";
import Link from "next/link";
import { ArrowUpRight, Compass, SunMedium, Wind } from "lucide-react";

export const metadata: Metadata = {
  title: "Studio & Philosophy",
  description:
    "Discover Linehaus Architects: A multidisciplinary practice rooted in Bhadravati, Karnataka, championing Functional Architecture, climate response, and honest materiality.",
};

export default function StudioPage() {
  return (
    <div className="py-12 md:py-20 bg-[#F8F7F4]">
      {/* Studio Banner */}
      <section className="pb-16 md:pb-24 border-b border-[#DFDBD2]">
        <Container size="wide">
          <div className="flex items-center gap-3 mb-4 text-xs font-mono tracking-[0.25em] text-[#384D58] uppercase">
            <span>[PRACTICE PROFILE]</span>
            <span>·</span>
            <span>BHADRAVATI, KARNATAKA</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#14171A] leading-[1.08] max-w-5xl">
            We build for daily life, <br />
            <span className="italic text-[#384D58]">climate reality, and permanence.</span>
          </h1>

          <p className="mt-8 font-sans text-base sm:text-xl text-[#545F68] font-light max-w-3xl leading-relaxed">
            Linehaus Architects is a multidisciplinary architecture and interior atelier based in
            Bhadravati, Karnataka. We believe that architectural value is created when spaces are
            conceived with purpose, detailed with structural honesty, and built to withstand the
            rigours of time and tropical weather.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-12 border-t border-[#DFDBD2] text-xs font-mono">
            <div>
              <span className="text-[#88939C] uppercase block mb-1">Geographic Base</span>
              <span className="text-[#14171A] font-medium text-sm">Bhadravati, Karnataka</span>
            </div>
            <div>
              <span className="text-[#88939C] uppercase block mb-1">Regional Datum</span>
              <span className="text-[#14171A] font-medium text-sm">13.8485° N, 75.7042° E</span>
            </div>
            <div>
              <span className="text-[#88939C] uppercase block mb-1">Architectural Ethos</span>
              <span className="text-[#384D58] font-medium text-sm">Functional Architecture</span>
            </div>
            <div>
              <span className="text-[#88939C] uppercase block mb-1">Regulatory Standards</span>
              <span className="text-[#14171A] font-medium text-sm">Council of Architecture Norms</span>
            </div>
          </div>
        </Container>
      </section>

      {/* The Manifesto & Philosophy */}
      <section className="py-20 md:py-28 border-b border-[#DFDBD2]">
        <Container size="wide">
          <SectionHeader
            number="01"
            eyebrow="Architectural Foundation"
            title="The Philosophy of Functional Architecture"
            subtitle="Architecture should never be an arbitrary sculpture imposed onto an unsuspecting occupant."
            align="split"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-12">
            <div className="lg:col-span-5 p-8 bg-[#F1EFEA] border border-[#DFDBD2] flex flex-col justify-between">
              <span className="font-mono text-xs tracking-widest text-[#384D58] uppercase block mb-4">
                Core Conviction
              </span>
              <blockquote className="font-serif text-2xl text-[#14171A] leading-snug font-light italic">
                &ldquo;Form follows function is not a historical cliché—it is the only moral standard in
                an era of resource scarcity and climate turbulence.&rdquo;
              </blockquote>
              <div className="pt-6 mt-6 border-t border-[#DFDBD2] text-[11px] font-mono text-[#545F68]">
                LINEHAUS ARCHITECTS · BHADRAVATI
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-[#545F68] font-sans font-light text-base sm:text-lg leading-relaxed">
              <p>
                Our practice operates across residential, luxury estates, commercial facilities,
                interiors, and landscape design. While the scale varies, our fundamental methodology
                remains constant: we strip away arbitrary ornament to expose the innate power of proportion,
                natural light, and honest materials.
              </p>
              <p>
                We reject the commodification of residential design into generic, cookie-cutter villas.
                Every client brings unique spatial rituals, family traditions, and aspirations. Our
                responsibility as architects is to translate those daily patterns into intuitive,
                dignified spaces that feel effortless to inhabit.
              </p>
              <p>
                By integrating architecture, interior craftsmanship, and turnkey construction management
                under a single studio discipline, we eliminate the dilution that routinely occurs when
                design is separated from physical execution.
              </p>
            </div>
          </div>

          {/* Environmental Vectors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-[#DFDBD2]">
            <div className="p-6 bg-white border border-[#DFDBD2]">
              <SunMedium className="w-6 h-6 text-[#384D58] mb-4" />
              <h4 className="font-serif text-xl text-[#14171A] mb-2">Solar &amp; Thermal Massing</h4>
              <p className="font-sans text-xs text-[#545F68] leading-relaxed">
                Strategic orientation deflects intense western sun while welcoming diffused northern
                illumination into living zones, maintaining cooler indoor temperatures naturally.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#DFDBD2]">
              <Wind className="w-6 h-6 text-[#384D58] mb-4" />
              <h4 className="font-serif text-xl text-[#14171A] mb-2">Pneumatic Stack Ventilation</h4>
              <p className="font-sans text-xs text-[#545F68] leading-relaxed">
                Central courtyards and roof lanterns generate chimney effects that continuously extract
                hot ambient air, circulating fresh breezes throughout humid monsoon months.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#DFDBD2]">
              <Compass className="w-6 h-6 text-[#384D58] mb-4" />
              <h4 className="font-serif text-xl text-[#14171A] mb-2">Regional Material Logic</h4>
              <p className="font-sans text-xs text-[#545F68] leading-relaxed">
                We prioritize local Karnataka granites, site-quarried laterite, and cast concrete that
                weather gracefully rather than synthetic claddings that deteriorate under UV exposure.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Principles List */}
      <section className="py-20 md:py-28 border-b border-[#DFDBD2] bg-[#F1EFEA]">
        <Container size="wide">
          <SectionHeader
            number="02"
            eyebrow="Architectural Pillars"
            title="The Four Studio Principles"
            subtitle="The non-negotiable standards that govern every drawing and site inspection."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            {philosophyData.principles.map((principle) => (
              <div
                key={principle.number}
                className="p-8 bg-[#F8F7F4] border border-[#DFDBD2] space-y-4"
              >
                <span className="font-mono text-sm tracking-widest text-[#384D58] font-semibold">
                  [{principle.number}]
                </span>
                <h3 className="font-serif text-2xl text-[#14171A]">{principle.title}</h3>
                <p className="font-mono text-xs uppercase tracking-wider text-[#384D58]">
                  {principle.tagline}
                </p>
                <p className="font-sans text-sm text-[#545F68] font-light leading-relaxed pt-2">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Box */}
      <section className="py-20 bg-[#14171A] text-[#F8F7F4]">
        <Container size="narrow">
          <div className="text-center space-y-6">
            <span className="font-mono text-xs tracking-[0.25em] text-[#A0B2BD] uppercase block">
              Consultation &amp; Feasibility
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
              Discuss Your Commission
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#A0B2BD] font-light max-w-xl mx-auto leading-relaxed">
              Whether you are planning a private residence, exploring turnkey villa development, or
              evaluating a commercial project in Karnataka, our studio provides preliminary spatial
              and climatic assessments.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-xs font-sans font-medium tracking-[0.2em] uppercase bg-[#384D58] text-[#F8F7F4] hover:bg-[#4F6877] transition-colors"
              >
                <span>Initiate Project Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
