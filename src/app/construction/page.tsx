import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight, CheckCircle2, Shield, Hammer, Layers, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Construction & Execution | Materials & Quality Control",
  description:
    "Linehaus Architects on-site construction management, material integrity, and quality control protocols. Bridging architectural design with disciplined physical execution.",
};

export default function ConstructionPage() {
  const materialStandards = [
    {
      title: "Monolithic Cast Concrete",
      category: "Structural Materiality",
      description:
        "Precision plywood and board formwork, rigorous aggregate grading, and calibrated hydration cycles create fair-faced concrete with tactile warmth and structural endurance.",
      specs: ["Form-ply alignment tolerances < 2mm", "Monolithic cold-joint management", "Raw exposed architectural finish"],
    },
    {
      title: "Regional Granites & Natural Stone",
      category: "Plinths & Masonry",
      description:
        "Hand-dressed Sadarahalli, Channarayapatna grey, and black granite sourced locally from Karnataka quarries, shaped for lifetime plinths and enduring structure.",
      specs: ["Water-shedding chamfered drip edges", "Dry-pack mortar bed installation", "Flame-textured non-slip external paving"],
    },
    {
      title: "Precision Steel & Fenestration",
      category: "Architectural Envelope",
      description:
        "Slimline structural hollow sections, laser-cut plate brackets, and thermally broken custom steel frames designed to withstand structural wind loads.",
      specs: ["Zinc-rich anti-corrosion primer base", "Polyurethane matte architectural coating", "Heavy-gauge stainless steel hardware"],
    },
    {
      title: "Seasoned Architectural Timber",
      category: "Joinery & Millwork",
      description:
        "Reclaimed and sustainably harvested teak, kiln-dried to equilibrium moisture content to prevent seasonal warping across changing humidity shifts.",
      specs: ["Moisture content verified < 12%", "Concealed fastener joinery systems", "Natural breathable plant-oil sealants"],
    },
  ];

  const qualityGates = [
    {
      step: "01",
      name: "Substructure & Setting-Out",
      focus: "Geometric Accuracy & Foundation Depth",
      description:
        "Total-station optical site alignment verified against municipal datum. Foundation pits inspected for soil strata cohesion and subterranean moisture barriers before concrete pouring.",
    },
    {
      step: "02",
      name: "Structural Framework & MEP Coring",
      focus: "Concealed Services Coordination",
      description:
        "All electrical conduits, plumbing stacks, and HVAC sleeves cast directly within structural slabs. We enforce zero post-pour chasing or structural drilling.",
    },
    {
      step: "03",
      name: "Envelope & Waterproofing",
      focus: "Weatherproofing & Joint Sealing",
      description:
        "Dual-layer elastomeric waterproofing membranes on all roofs, terraces, and sunken slabs. Continuous 72-hour pond testing executed prior to any finish tiling.",
    },
    {
      step: "04",
      name: "Joinery, Finishes & Handover",
      focus: "Millimetric Detailing & Shadow Gaps",
      description:
        "Skirting shadow-reveal alignments, flush door frames, zero-gap stone tile layouts, and acoustic seal verification before client occupancy.",
    },
  ];

  return (
    <div className="py-12 md:py-20 bg-[#F8F7F4]">
      <Container size="wide">
        {/* Page Banner */}
        <div className="pb-16 mb-16 border-b border-[#DFDBD2]">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 text-[10px] sm:text-xs font-mono tracking-wider sm:tracking-[0.25em] text-[#384D58] uppercase">
            <span>[CONSTRUCTION &amp; EXECUTION]</span>
            <span>·</span>
            <span>ON-SITE QUALITY CONTROL</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#14171A] leading-[1.08] max-w-5xl">
            Precision in Execution, <br />
            <span className="italic text-[#384D58]">Honesty in Material.</span>
          </h1>

          <p className="mt-6 font-sans text-base sm:text-xl text-[#545F68] font-light max-w-3xl leading-relaxed">
            The integrity of architecture dissolves when design is disconnected from site reality.
            Linehaus approaches construction not as a commercial trade, but as the physical
            culmination of architectural thinking—governed by structural honesty, material truth, and
            single-source accountability.
          </p>
        </div>

        {/* Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 bg-[#F1EFEA] border border-[#DFDBD2] space-y-3">
            <Hammer className="w-5 h-5 text-[#384D58]" />
            <span className="font-mono text-[10px] tracking-widest text-[#384D58] uppercase block">
              Architect-Led Supervision
            </span>
            <h3 className="font-serif text-2xl text-[#14171A]">Site Presence</h3>
            <p className="font-sans text-xs text-[#545F68] leading-relaxed">
              Our architects do not remain behind studio desks. We conduct regular, milestone-based
              on-site inspections to inspect rebar, verify plumb lines, and guide artisans through
              complex details.
            </p>
          </div>

          <div className="p-8 bg-[#F1EFEA] border border-[#DFDBD2] space-y-3">
            <Layers className="w-5 h-5 text-[#384D58]" />
            <span className="font-mono text-[10px] tracking-widest text-[#384D58] uppercase block">
              Material Rigour
            </span>
            <h3 className="font-serif text-2xl text-[#14171A]">Authentic Materials</h3>
            <p className="font-sans text-xs text-[#545F68] leading-relaxed">
              We reject synthetic imitations and fragile veneers. We build with stone, concrete,
              steel, and solid timber that age with dignity, character, and permanence.
            </p>
          </div>

          <div className="p-8 bg-[#F1EFEA] border border-[#DFDBD2] space-y-3">
            <Shield className="w-5 h-5 text-[#384D58]" />
            <span className="font-mono text-[10px] tracking-widest text-[#384D58] uppercase block">
              Turnkey Accountability
            </span>
            <h3 className="font-serif text-2xl text-[#14171A]">Single Point of Truth</h3>
            <p className="font-sans text-xs text-[#545F68] leading-relaxed">
              By aligning design drawings, material procurement, vendor contracts, and artisan teams
              under our practice, the client enjoys transparent budgets and seamless quality delivery.
            </p>
          </div>
        </div>

        {/* Section 01: Material Truth */}
        <div className="my-20 pt-16 border-t border-[#DFDBD2]">
          <div className="mb-12">
            <span className="font-mono text-xs tracking-[0.25em] text-[#384D58] uppercase block mb-3">
              01 · Material Specification Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#14171A]">
              Materials Selected for Permanence.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#545F68] max-w-2xl mt-4 leading-relaxed font-light">
              Every material specified by Linehaus is evaluated against regional humidity, thermal expansion,
              and tactile quality before arriving on the job site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {materialStandards.map((mat, i) => (
              <div key={i} className="p-8 bg-white border border-[#DFDBD2] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#DFDBD2] text-xs font-mono">
                    <span className="text-[#384D58] uppercase font-medium">[{mat.category}]</span>
                    <span className="text-[#88939C]">SPEC.0{i + 1}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#14171A] mb-3">{mat.title}</h3>
                  <p className="font-sans text-xs text-[#545F68] leading-relaxed mb-6">
                    {mat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DFDBD2]/60 space-y-2">
                  <span className="font-mono text-[10px] tracking-wider text-[#384D58] uppercase block">
                    Execution Benchmarks
                  </span>
                  <ul className="space-y-1.5 text-xs font-sans text-[#14171A]">
                    {mat.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#384D58] flex-shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 02: Execution Quality Gates */}
        <div className="my-20 pt-16 border-t border-[#DFDBD2]">
          <div className="mb-12">
            <span className="font-mono text-xs tracking-[0.25em] text-[#384D58] uppercase block mb-3">
              02 · The Quality Control Protocol
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#14171A]">
              Four Verification Gates.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#545F68] max-w-2xl mt-4 leading-relaxed font-light">
              Construction at Linehaus progresses through non-negotiable inspection milestones. No contractor
              advances to the next phase without an architect-signed verification pass.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityGates.map((gate) => (
              <div key={gate.step} className="p-6 bg-[#F1EFEA] border border-[#DFDBD2] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs tracking-widest text-[#384D58] font-bold block mb-4">
                    GATE [{gate.step}]
                  </span>
                  <h3 className="font-serif text-xl text-[#14171A] mb-2">{gate.name}</h3>
                  <span className="font-mono text-[10px] tracking-wider text-[#88939C] uppercase block mb-3">
                    {gate.focus}
                  </span>
                  <p className="font-sans text-xs text-[#545F68] leading-relaxed">
                    {gate.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#DFDBD2] flex items-center gap-2 text-[10px] font-mono text-[#384D58]">
                  <Eye className="w-3.5 h-3.5" />
                  <span>MANDATORY SIGN-OFF</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commission Callout Box */}
        <div className="my-20 p-10 md:p-14 bg-[#14171A] text-[#F8F7F4] text-center space-y-6">
          <span className="font-mono text-xs tracking-[0.25em] text-[#A0B2BD] uppercase block">
            Turnkey Construction &amp; Build Commissions
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal">
            Build With Single-Source Accountability
          </h3>
          <p className="font-sans text-sm text-[#A0B2BD] max-w-xl mx-auto leading-relaxed">
            Whether you are commissioning a private residence, a luxury estate, or commercial architecture,
            learn how our turnkey design-and-build model safeguards design precision and project timelines.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-xs font-sans font-medium tracking-[0.2em] uppercase bg-[#384D58] text-[#F8F7F4] hover:bg-[#4F6877] transition-colors"
            >
              <span>Initiate Construction Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
