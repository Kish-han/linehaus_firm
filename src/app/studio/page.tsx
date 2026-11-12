import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { philosophyData } from "@/data/philosophy";
import { ArchitecturalImage } from "@/components/ui/ArchitecturalImage";
import Link from "next/link";
import { ArrowUpRight, Compass, Users, HardHat, PenTool, FileText, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Studio | Philosophy, Founder & Approach",
  description:
    "Discover Linehaus Architects: A multidisciplinary architecture, interior, and turnkey construction practice based in Bhadravati, Karnataka.",
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
      role: "Architectural Design Group",
      focus: "Spatial Planning, Structural Clarity & Master Design",
      description:
        "Dedicated to spatial proportion, structural grids, natural daylighting, and statutory building code compliance across residential and commercial scales.",
    },
    {
      role: "Interior & Millwork Atelier",
      focus: "Custom Joinery, Tactile Materiality & Bespoke Lighting",
      description:
        "Specialists in built-in cabinetry, natural stone finishes, acoustic ceiling profiles, and tailored hardware integration designed for refined everyday living.",
    },
    {
      role: "Structural & Engineering Associates",
      focus: "Foundation Engineering, Load Optimization & MEP",
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
            <span>[STUDIO PROFILE]</span>
            <span>·</span>
            <span>BHADRAVATI, KARNATAKA</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#14171A] leading-[1.08] max-w-5xl">
            Designing with purpose. <br />
            <span className="italic text-[#384D58]">Building with precision.</span>
          </h1>

          <p className="mt-8 font-sans text-base sm:text-xl text-[#545F68] font-light max-w-3xl leading-relaxed">
            LINEHAUS ARCHITECTS is a multidisciplinary architectural practice based in Bhadravati,
            Karnataka. We bring together architecture, interiors and construction to create thoughtful
            spaces that balance functionality, aesthetics and lasting quality.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-12 border-t border-[#DFDBD2] text-xs font-mono">
            <div>
              <span className="text-[#88939C] uppercase block mb-1">Geographic Base</span>
              <span className="text-[#14171A] font-medium text-sm">Bhadravati, Karnataka</span>
            </div>
            <div>
              <span className="text-[#88939C] uppercase block mb-1">Disciplines</span>
              <span className="text-[#14171A] font-medium text-sm">Architecture · Interiors · Build</span>
            </div>
            <div>
              <span className="text-[#88939C] uppercase block mb-1">Design Philosophy</span>
              <span className="text-[#384D58] font-medium text-sm">Functional Architecture</span>
            </div>
            <div>
              <span className="text-[#88939C] uppercase block mb-1">Delivery Standard</span>
              <span className="text-[#14171A] font-medium text-sm">Turnkey Quality Control</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Studio Story & Architectural Photography */}
      <section className="py-20 md:py-28 border-b border-[#DFDBD2]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <ArchitecturalImage
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
                alt="Architectural detailing and tactile material harmony"
                aspectRatio="16/10"
                caption="Tactile materiality and enduring proportion in residential form."
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs tracking-widest text-[#384D58] uppercase block">
                The Studio Story
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#14171A] leading-tight">
                Spaces shaped around the way you live.
              </h2>
              <p className="font-sans text-base text-[#545F68] font-light leading-relaxed">
                We believe that good architecture is quiet, purposeful, and honest. Rather than following
                fleeting stylistic trends, our work is grounded in the fundamentals: optimal natural light,
                intuitive circulation, natural ventilation, and materials that grow richer with age.
              </p>
              <p className="font-sans text-base text-[#545F68] font-light leading-relaxed">
                By uniting architecture, interior design, and turnkey site construction under one roof,
                we provide clients with a seamless experience from the first hand-drawn sketch to the day
                the keys are handed over.
              </p>
              <div className="pt-4 flex flex-wrap gap-3">
                <span className="px-3 py-1.5 text-xs font-mono bg-[#F1EFEA] border border-[#DFDBD2] text-[#384D58]">
                  Architecture
                </span>
                <span className="px-3 py-1.5 text-xs font-mono bg-[#F1EFEA] border border-[#DFDBD2] text-[#384D58]">
                  Interior Design
                </span>
                <span className="px-3 py-1.5 text-xs font-mono bg-[#F1EFEA] border border-[#DFDBD2] text-[#384D58]">
                  Turnkey Construction
                </span>
                <span className="px-3 py-1.5 text-xs font-mono bg-[#F1EFEA] border border-[#DFDBD2] text-[#384D58]">
                  Residential &amp; Commercial
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Founder / Principal Architect Profile (Image 5 Requirement) */}
      <section className="py-20 md:py-28 border-b border-[#DFDBD2] bg-[#F1EFEA]">
        <Container size="wide">
          <SectionHeader
            number="01"
            eyebrow="Leadership &amp; Direction"
            title="Principal Architect &amp; Founder"
            subtitle="Guiding each project with personal design attention, rigorous detailing, and on-site oversight."
            align="split"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-12 items-center">
            {/* Founder Portrait Provision */}
            <div className="lg:col-span-5">
              <div className="relative border border-[#DFDBD2] bg-[#F8F7F4] p-3 shadow-sm">
                <div className="aspect-[4/5] relative overflow-hidden bg-[#E8E6E1] flex flex-col items-center justify-center text-center p-8">
                  <div className="w-24 h-24 rounded-full border border-[#384D58]/40 flex items-center justify-center mb-4 bg-[#DFDBD2]/60">
                    <Users className="w-10 h-10 text-[#384D58]" />
                  </div>
                  <span className="font-serif text-2xl text-[#14171A] font-normal mb-1">
                    Principal Architect
                  </span>
                  <span className="font-mono text-xs tracking-wider uppercase text-[#384D58] mb-4">
                    Founder &amp; Lead Designer
                  </span>
                  <span className="font-mono text-[10px] text-[#88939C] max-w-xs">
                    [PORTRAIT PROVISION · LINEHAUS STUDIO LEAD]
                  </span>
                </div>
                <div className="pt-3 pb-1 px-1 flex items-center justify-between text-[11px] font-mono text-[#545F68]">
                  <span>LINEHAUS ARCHITECTS</span>
                  <span>BHADRAVATI, KA</span>
                </div>
              </div>
            </div>

            {/* Founder Narrative & About Me */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs tracking-widest text-[#384D58] uppercase block">
                  About the Founder
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#14171A] font-normal">
                  A commitment to craft, integrity, and spatial clarity.
                </h3>
              </div>

              <p className="font-sans text-base sm:text-lg text-[#545F68] font-light leading-relaxed">
                Founded in Bhadravati, Linehaus Architects was born from a conviction that regional
                architecture should never compromise on contemporary design excellence or construction quality.
              </p>

              <p className="font-sans text-base text-[#545F68] font-light leading-relaxed">
                As founder and principal architect, every commission receives direct hands-on leadership—from
                initial spatial zoning diagrams and volumetric 3D studies to the selection of granite slabs
                and weekly job site inspections.
              </p>

              <blockquote className="font-serif text-xl sm:text-2xl text-[#14171A] leading-snug font-light italic border-l-2 border-[#384D58] pl-6 py-2 my-6">
                &ldquo;We don&apos;t just draw plans; we build permanent homes where everyday living feels effortless,
                generous, and grounded in dignity.&rdquo;
              </blockquote>

              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-[#384D58]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#384D58]" />
                  <span>Direct Principal Architect Involvement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#384D58]" />
                  <span>Single-Source Accountability</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 02: Four Architectural Principles (Image 9) */}
      <section className="py-20 md:py-28 border-b border-[#DFDBD2]">
        <Container size="wide">
          <SectionHeader
            number="02"
            eyebrow="Design Pillars"
            title="Four Architectural Principles"
            subtitle="The fundamental foundations guiding every home, interior, and structure we create."
            align="split"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            {philosophyData.principles.map((principle) => (
              <div
                key={principle.number}
                className="p-8 bg-white border border-[#DFDBD2] hover:border-[#384D58] transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-sm tracking-widest text-[#384D58] font-semibold block mb-3">
                    [{principle.number}]
                  </span>
                  <h3 className="font-serif text-2xl text-[#14171A] mb-1">{principle.title}</h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-[#384D58] mb-4">
                    {principle.tagline}
                  </p>
                  <p className="font-sans text-sm text-[#545F68] font-light leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 03: The Studio Approach & Methodology */}
      <section className="py-20 md:py-28 border-b border-[#DFDBD2] bg-[#F1EFEA]">
        <Container size="wide">
          <SectionHeader
            number="03"
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

      {/* 04: Studio Team & Practice Structure */}
      <section className="py-20 md:py-28 border-b border-[#DFDBD2]">
        <Container size="wide">
          <SectionHeader
            number="04"
            eyebrow="Multidisciplinary Practice"
            title="Studio Practice &amp; Team Structure"
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
              <span>Statutory Code Adherence, Structural Rigour &amp; Building Standards</span>
            </div>
            <span className="text-[#384D58]">
              Central Karnataka Commission Focus
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
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-xs font-sans font-medium tracking-[0.2em] uppercase bg-[#384D58] text-[#F8F7F4] hover:bg-[#4F6877] transition-colors"
              >
                <span>Initiate Project Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919480000000?text=Hello%20Linehaus%20Architects,%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-xs font-sans font-medium tracking-[0.2em] uppercase bg-[#25D366] text-white hover:bg-[#20ba5a] transition-colors"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
