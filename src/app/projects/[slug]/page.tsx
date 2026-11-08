import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArchitecturalImage } from "@/components/ui/ArchitecturalImage";
import { projectsData } from "@/data/projects";
import { ArrowLeft, ArrowUpRight, Thermometer } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | ${project.location}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Linehaus Architects`,
      description: project.summary,
      images: [{ url: project.heroImage.src }],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Related projects
  const relatedProjects = projectsData
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  return (
    <div className="py-10 md:py-16 bg-[#F8F7F4]">
      <Container size="wide">
        {/* Back Link & Breadcrumb */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#DFDBD2]">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#545F68] hover:text-[#14171A] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio Archive</span>
          </Link>

          <span className="font-mono text-xs text-[#384D58] tracking-widest uppercase">
            {project.typology} · {project.year}
          </span>
        </div>

        {/* Typology Prototype Notice */}
        <div className="mb-8 p-3.5 sm:p-4 bg-[#F1EFEA] border border-[#DFDBD2] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono text-[#545F68]">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-[#384D58]" />
            <span className="text-[#14171A] font-medium">ARCHITECTURAL TYPOLOGY PROTOTYPE</span>
          </div>
          <span className="text-[#384D58]">
            Curated imagery represents spatial proportion &amp; light · Client assets pending final release
          </span>
        </div>

        {/* Project Title Header */}
        <div className="pb-10 mb-8 border-b border-[#DFDBD2]">
          <span className="font-mono text-xs tracking-[0.25em] text-[#384D58] uppercase block mb-3">
            Spatial Investigation · {project.location}
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#14171A] leading-[1.08] max-w-4xl">
            {project.title}
          </h1>
          <p className="mt-4 font-sans text-lg sm:text-xl text-[#545F68] font-light max-w-3xl leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Architectural Hero Frame */}
        <div className="mb-14">
          <ArchitecturalImage
            src={project.heroImage.src}
            alt={project.heroImage.alt}
            aspectRatio="16/10"
            caption={`${project.title} · ${project.heroImage.caption || project.location}`}
            isHero={true}
            priority={true}
            overlayText={`[${project.id.toUpperCase()}] · ${project.typology.toUpperCase()}`}
          />
        </div>

        {/* Key Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 bg-[#F1EFEA] border border-[#DFDBD2] mb-16 text-xs font-mono">
          <div>
            <span className="text-[#88939C] uppercase block mb-1">Target Area</span>
            <span className="text-base text-[#14171A] font-medium">{project.area}</span>
          </div>
          <div>
            <span className="text-[#88939C] uppercase block mb-1">Typology Discipline</span>
            <span className="text-base text-[#14171A] font-medium">{project.typology}</span>
          </div>
          <div>
            <span className="text-[#88939C] uppercase block mb-1">Regional Setting</span>
            <span className="text-base text-[#14171A] font-medium">{project.location}</span>
          </div>
          <div>
            <span className="text-[#88939C] uppercase block mb-1">Delivery Standard</span>
            <span className="text-base text-[#384D58] font-medium">Turnkey Architecture</span>
          </div>
        </div>

        {/* Narrative Grid: Concept & Architectural Brief */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-16 items-start">
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-[#FFFFFF] border border-[#DFDBD2] space-y-4">
              <span className="font-mono text-xs tracking-widest text-[#384D58] uppercase block">
                Study Summary
              </span>
              <p className="font-sans text-xs sm:text-sm text-[#545F68] font-light leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Materiality Palette */}
            <div className="p-6 bg-[#FFFFFF] border border-[#DFDBD2] space-y-3">
              <span className="font-mono text-xs tracking-widest text-[#384D58] uppercase block">
                Materiality &amp; Details
              </span>
              <ul className="space-y-2 text-xs font-sans text-[#545F68]">
                {project.materiality.map((mat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#384D58] rounded-none" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-10">
            {/* Concept */}
            <div>
              <span className="font-mono text-xs tracking-[0.25em] text-[#384D58] uppercase block mb-3">
                01. Architectural Concept
              </span>
              <h2 className="font-serif text-3xl font-normal text-[#14171A] mb-4">
                Spatial Organization &amp; Light
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#545F68] font-light leading-relaxed">
                {project.concept}
              </p>
            </div>

            {/* Challenges & Solutions */}
            <div className="p-8 bg-[#F1EFEA] border border-[#DFDBD2] space-y-6">
              <span className="font-mono text-xs tracking-[0.25em] text-[#384D58] uppercase block">
                02. Design Challenge &amp; Solution
              </span>
              <div>
                <h4 className="font-serif text-xl text-[#14171A] mb-2">The Site Constraint</h4>
                <p className="font-sans text-sm text-[#545F68] font-light leading-relaxed">
                  {project.challengesAndSolutions.challenge}
                </p>
              </div>
              <div className="pt-4 border-t border-[#DFDBD2]">
                <h4 className="font-serif text-xl text-[#14171A] mb-2">The Architectural Solution</h4>
                <p className="font-sans text-sm text-[#545F68] font-light leading-relaxed">
                  {project.challengesAndSolutions.solution}
                </p>
              </div>
            </div>

            {/* Climatic Strategy */}
            <div>
              <span className="font-mono text-xs tracking-[0.25em] text-[#384D58] uppercase block mb-3">
                03. Climate &amp; Passive Cooling
              </span>
              <div className="flex items-start gap-4 p-6 bg-white border border-[#DFDBD2]">
                <Thermometer className="w-6 h-6 text-[#384D58] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-xl text-[#14171A] mb-2">Passive Thermal Control</h4>
                  <p className="font-sans text-sm text-[#545F68] font-light leading-relaxed">
                    {project.climaticStrategy}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Architectural Photography Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="my-20 pt-12 border-t border-[#DFDBD2]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="font-mono text-xs tracking-[0.25em] text-[#384D58] uppercase block mb-2">
                  Spatial Reference Documentation
                </span>
                <h3 className="font-serif text-3xl font-normal text-[#14171A]">
                  Spatial Photographic Gallery
                </h3>
              </div>
              <span className="font-mono text-xs text-[#88939C] uppercase">
                {project.gallery.length} Plates Documented
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((img, i) => (
                <div key={i} className={i % 3 === 0 ? "md:col-span-2" : ""}>
                  <ArchitecturalImage
                    src={img.src}
                    alt={img.alt}
                    aspectRatio={img.aspectRatio}
                    caption={img.caption}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Architectural Vector Linework Section */}
        {project.drawings && project.drawings.length > 0 && (
          <div className="my-20 pt-12 border-t border-[#DFDBD2]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="font-mono text-xs tracking-[0.25em] text-[#384D58] uppercase block mb-2">
                  Schematic Vector Cad Archive
                </span>
                <h3 className="font-serif text-3xl font-normal text-[#14171A]">
                  Plans &amp; Climatic Sections
                </h3>
              </div>
              <span className="font-mono text-xs text-[#384D58] uppercase hidden sm:inline">
                SCALE: 1:100 @ A1 METRIC
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.drawings.map((drawing, i) => (
                <div
                  key={i}
                  className="p-6 sm:p-8 bg-[#ECE8E0] border border-[#DFDBD2] flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono border-b border-[#DFDBD2] pb-3">
                      <span className="text-[#384D58] font-semibold uppercase">
                        [{drawing.type.toUpperCase()}]
                      </span>
                      <span className="text-[#88939C]">DRW_0{i + 1} / REV.02</span>
                    </div>

                    <h4 className="font-serif text-2xl text-[#14171A]">{drawing.title}</h4>
                    <p className="font-sans text-xs text-[#545F68] leading-relaxed">
                      {drawing.caption}
                    </p>

                    {/* Architectural Vector Linework Diagram */}
                    <div className="relative w-full h-48 bg-[#F8F7F4] border border-[#DFDBD2] p-4 flex items-center justify-center overflow-hidden">
                      {/* Architectural Grid Background */}
                      <svg
                        className="w-full h-full text-[#384D58]"
                        viewBox="0 0 400 180"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Hairline Grid */}
                        <defs>
                          <pattern id={`cadGrid-${i}`} width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E2DFD8" strokeWidth="0.5" />
                          </pattern>
                        </defs>
                        <rect width="400" height="180" fill={`url(#cadGrid-${i})`} />

                        {drawing.type === "Plan" ? (
                          // CAD Floor Plan Linework
                          <g stroke="#384D58" strokeWidth="1.2">
                            {/* Outer Perimeter Walls */}
                            <rect x="50" y="30" width="300" height="120" strokeWidth="2" />
                            {/* Courtyard Core (Open to Sky) */}
                            <rect x="150" y="60" width="100" height="60" strokeDasharray="3 3" strokeWidth="1.5" />
                            <text x="175" y="95" fill="#384D58" fontSize="9" fontFamily="monospace">COURT</text>
                            {/* Internal Partitions */}
                            <line x1="150" y1="30" x2="150" y2="60" />
                            <line x1="250" y1="30" x2="250" y2="60" />
                            <line x1="150" y1="120" x2="150" y2="150" />
                            <line x1="250" y1="120" x2="250" y2="150" />
                            {/* Door Swings */}
                            <path d="M 120 30 A 25 25 0 0 1 145 55" strokeWidth="0.8" />
                            <path d="M 280 30 A 25 25 0 0 0 255 55" strokeWidth="0.8" />
                            {/* Dimension Datum Line */}
                            <line x1="50" y1="165" x2="350" y2="165" stroke="#88939C" strokeWidth="0.6" />
                            <circle cx="50" cy="165" r="1.5" fill="#88939C" />
                            <circle cx="350" cy="165" r="1.5" fill="#88939C" />
                            <text x="180" y="162" fill="#88939C" fontSize="8" fontFamily="monospace">24,500 MM</text>
                          </g>
                        ) : (
                          // CAD Section & Climatic Airflow Linework
                          <g stroke="#384D58" strokeWidth="1.2">
                            {/* Ground Plinth */}
                            <line x1="30" y1="140" x2="370" y2="140" strokeWidth="2.5" />
                            {/* Floor Slab Level 01 */}
                            <line x1="70" y1="135" x2="330" y2="135" strokeWidth="2" />
                            {/* Roof Cantilever Plane */}
                            <polygon points="50,45 350,40 345,55 55,58" fill="#384D58" fillOpacity="0.1" strokeWidth="1.5" />
                            {/* Courtyard Lantern Opening */}
                            <rect x="170" y="25" width="60" height="20" strokeWidth="1.5" strokeDasharray="2 2" />
                            {/* Airflow Convection Arrows (Stack Effect) */}
                            <path d="M 100 120 Q 150 100 190 40" stroke="#8F6F4C" strokeWidth="1" strokeDasharray="3 2" />
                            <path d="M 300 120 Q 250 100 210 40" stroke="#8F6F4C" strokeWidth="1" strokeDasharray="3 2" />
                            <text x="180" y="20" fill="#8F6F4C" fontSize="8" fontFamily="monospace">THERMAL PURGE</text>
                            {/* Elevation Marker */}
                            <text x="35" y="135" fill="#88939C" fontSize="8" fontFamily="monospace">+0.00</text>
                            <text x="35" y="45" fill="#88939C" fontSize="8" fontFamily="monospace">+7.20</text>
                          </g>
                        )}
                      </svg>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#DFDBD2] text-[10px] font-mono text-[#88939C] flex items-center justify-between">
                    <span>LINEHAUS ARCHITECTURAL SCHEMATICS</span>
                    <span>CONFIDENTIAL REVIEW</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Projects */}
        <div className="my-20 pt-12 border-t border-[#DFDBD2]">
          <div className="flex items-center justify-between mb-8">
            <span className="font-mono text-xs tracking-[0.25em] text-[#384D58] uppercase">
              Other Typology Studies
            </span>
            <Link
              href="/projects"
              className="text-xs font-mono tracking-widest uppercase text-[#14171A] hover:text-[#384D58]"
            >
              All Portfolio Studies →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((rel) => (
              <Link
                key={rel.id}
                href={`/projects/${rel.slug}`}
                className="group p-6 bg-[#F1EFEA] border border-[#DFDBD2] hover:border-[#384D58] transition-colors"
              >
                <span className="font-mono text-[10px] tracking-widest text-[#384D58] uppercase block mb-2">
                  {rel.typology} · {rel.location}
                </span>
                <h4 className="font-serif text-2xl text-[#14171A] group-hover:text-[#384D58] transition-colors mb-2">
                  {rel.title}
                </h4>
                <p className="font-sans text-xs text-[#545F68] line-clamp-2">
                  {rel.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Commission CTA Box */}
        <div className="p-10 md:p-14 bg-[#14171A] text-[#F8F7F4] text-center space-y-6">
          <span className="font-mono text-xs tracking-[0.25em] text-[#A0B2BD] uppercase block">
            Client Commission Consultation
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal">
            Commission a Custom Architectural Project
          </h3>
          <p className="font-sans text-sm text-[#A0B2BD] max-w-lg mx-auto leading-relaxed">
            Discuss your site location, family spatial aspirations, and construction timeline with our
            studio group in Bhadravati.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-xs font-sans font-medium tracking-[0.2em] uppercase bg-[#384D58] text-[#F8F7F4] hover:bg-[#4F6877] transition-colors"
            >
              <span>Initiate Consultation Brief</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
