import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { philosophyData } from "@/data/philosophy";
import Link from "next/link";
import { ArrowUpRight, Compass, Users, CheckCircle2, ShieldCheck, PenTool, HardHat, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Studio & Philosophy | Approach & Team",
  description:
    "Discover Linehaus Architects: A multidisciplinary practice rooted in Bhadravati, Karnataka, championing Functional Architecture, spatial clarity, and honest materiality.",
};

export default function StudioPage() {
  const approachStages = [
    {
      step: "01",
      title: "Spatial Brief & Site Analysis",
      description:
        "We begin with in-depth client dialogue to understand daily routines, family dynamics, and spatial requirements. Concurrently, we evaluate site orientation, approach paths, and soil conditions on your land.",
      icon: FileText,
      deliverable: "Spatial Program & Site Orientation Matrix",
    },
    {
      step: "02",
      title: "Schematic Design & Volumetric Massing",
      description:
        "Translating functional requirements into physical geometry. We explore scale, interior lightwells, courtyard integration, and sectional volumes using 3D spatial models and material studies.",
      icon: PenTool,
      deliverable: "Architectural Concept & 3D Spatial Renders",
    },
    {
      step: "03",
      title: "Technical Documentation & Detailing",
      description:
        "Every joint, shadow gap, material transition, and concealed MEP conduit is drawn with millimetric precision. Comprehensive working drawings ensure contractor compliance without guesswork.",
      icon: Compass,
      deliverable: "Complete GFC (Good For Construction) Package",
    },
    {
      step: "04",
      title: "On-Site Supervision & Quality Delivery",
      description:
        "Our architects remain active on the job site throughout construction. We inspect steel reinforcement, verify formwork alignment, coordinate artisans, and conduct quality sign-offs.",
      icon: HardHat,
      deliverable: "Turnkey Execution & Architectural Handover",
    },
  ];

  const teamDisciplines = [
    {
      role: "Architectural Practice Group",
      focus: "Spatial Planning, Structural Integrity & Master Design",
      description:
        "Led by certified architects operating under Council of Architecture norms, orchestrating spatial proportion, structural grids, and statutory code compliance.",
    },
    {
      role: "Interior & Millwork Atelier",
      focus: "Joinery, Tactile Materiality & Bespoke Lighting",
      description:
        "Specialists in built-in cabinetry, natural stone finishes, acoustic ceiling profiles, and custom hardware integration tailored for refined everyday use.",
    },
    {
      role: "Structural & Engineering Associates",
      focus: "Seismic Design, Foundation Engineering & MEP",
      description:
        "Consulting structural and building services engineers verifying concrete load paths, soil strata bearing capacities, rainwater harvesting, and concealed electrical runs.",
    },
    {
      role: "On-Site Construction Managers & Master Artisans",
      focus: "Execution Rigour, Formwork & Material Craft",
      description:
        "Dedicated site supervisors alongside trusted stone masons, carpenters, and metal fabricators who uphold our zero-tolerance standards on the job site.",
    },
  ];

  return (
    <div className="py-12 md:py-20 bg-[#F8F7F4]">
      {/* Studio Banner */}
      <section className="pb-16 md:pb-24 border-b border-[#DFDBD2]">
        <Container size="wide">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 text-[10px] sm:text-xs font-mono tracking-wider sm:tracking-[0.25em] text-[#384D58] uppercase">
            <span>[PRACTICE PROFILE]</span>
            <span>·</span>
            <span>BHADRAVATI, KARNATAKA</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#14171A] leading-[1.08] max-w-5xl">
            We build for daily life, <br />
            <span className="italic text-[#384D58]">proportion, and permanence.</span>
          </h1>

          <p className="mt-8 font-sans text-base sm:text-xl text-[#545F68] font-light max-w-3xl leading-relaxed">
            Linehaus Architects is a multidisciplinary architecture and interior atelier based in
            Bhadravati, Karnataka. We believe that architectural value is created when spaces are
            conceived with purpose, detailed with structural honesty, and built to withstand the
            rigours of time and everyday living.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-12 border-t border-[#DFDBD2] text-xs font-mono">
            <div>
              <span className="text-[#88939C] uppercase block mb-1">Geographic Base</span>
              <span className="text-[#14171A] font-medium text-sm">Bhadravati, Karnataka</span>
            </div>
            <div>
              <span className="text-[#88939C] uppercase block mb-1">Regional Setting</span>
              <span className="text-[#14171A] font-medium text-sm">Central Karnataka</span>
            </div>
            <div>
              <span className="text-[#88939C] uppercase block mb-1">Architectural Ethos</span>
              <span className="text-[#384D58] font-medium text-sm">Functional Architecture</span>
            </div>
            <div>
              <span className="text-[#88939C] uppercase block mb-1">Delivery Standard</span>
              <span className="text-[#14171A] font-medium text-sm">Turnkey Quality Control</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 01: The Manifesto & Philosophy */}
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
                an era of fleeting architectural trends.&rdquo;
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

          {/* Four Core Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-16 border-t border-[#DFDBD2]">
            {philosophyData.principles.map((principle) => (
              <div
                key={principle.number}
                className="p-8 bg-white border border-[#DFDBD2] space-y-4"
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

      {/* 02: The Studio Approach & Methodology */}
      <section className="py-20 md:py-28 border-b border-[#DFDBD2] bg-[#F1EFEA]">
        <Container size="wide">
          <SectionHeader
            number="02"
            eyebrow="Execution Methodology"
            title="The Four-Stage Approach"
            subtitle="How an initial spatial conversation matures into a permanent, built reality."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
            {approachStages.map((stage) => {
              const IconComponent = stage.icon;
              return (
                <div
                  key={stage.step}
                  className="p-8 bg-[#F8F7F4] border border-[#DFDBD2] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#DFDBD2] text-xs font-mono">
                      <span className="text-[#384D58] font-bold">PHASE [{stage.step}]</span>
                      <IconComponent className="w-4 h-4 text-[#384D58]" />
                    </div>
                    <h3 className="font-serif text-xl text-[#14171A] mb-3">{stage.title}</h3>
                    <p className="font-sans text-xs text-[#545F68] leading-relaxed mb-6 font-light">
                      {stage.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DFDBD2]/60">
                    <span className="font-mono text-[9px] tracking-wider text-[#88939C] uppercase block mb-1">
                      Key Milestone
                    </span>
                    <span className="font-mono text-[11px] text-[#14171A] font-medium block">
                      {stage.deliverable}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 03: The Studio Team & Practice Structure */}
      <section className="py-20 md:py-28 border-b border-[#DFDBD2]">
        <Container size="wide">
          <SectionHeader
            number="03"
            eyebrow="Multidisciplinary Atelier"
            title="Studio Practice & Team Structure"
            subtitle="An integrated practice bridging design conception, engineering calculation, and artisanal site execution."
            align="split"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            {teamDisciplines.map((group, idx) => (
              <div
                key={idx}
                className="p-8 bg-white border border-[#DFDBD2] space-y-3"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#384D58] border-b border-[#DFDBD2] pb-3">
                  <span className="uppercase font-semibold">[PRACTICE GROUP 0{idx + 1}]</span>
                  <Users className="w-3.5 h-3.5 text-[#88939C]" />
                </div>
                <h3 className="font-serif text-2xl text-[#14171A]">{group.role}</h3>
                <span className="font-mono text-xs text-[#384D58] tracking-wider uppercase block">
                  {group.focus}
                </span>
                <p className="font-sans text-xs text-[#545F68] leading-relaxed pt-2">
                  {group.description}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#F1EFEA] border border-[#DFDBD2] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#545F68]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#384D58] flex-shrink-0" />
              <span>Council of Architecture Norms &amp; Statutory Code Adherence</span>
            </div>
            <span className="text-[#384D58]">
              Central Karnataka &amp; Malnad Commission Focus
            </span>
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
              assessments.
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
