import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArchitecturalImage } from "@/components/ui/ArchitecturalImage";
import { projectsData } from "@/data/projects";
import { ArrowLeft, ArrowUpRight, Compass, Layers, ShieldCheck, Thermometer } from "lucide-react";

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

        {/* Project Title Header */}
        <div className="pb-10 mb-8 border-b border-[#DFDBD2]">
          <span className="font-mono text-xs tracking-[0.25em] text-[#384D58] uppercase block mb-3">
            Case Study · {project.location}
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
            overlayText={`[${project.id.toUpperCase()}] · ${project.typology}`}
          />
        </div>

        {/* Key Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 bg-[#F1EFEA] border border-[#DFDBD2] mb-16 text-xs font-mono">
          <div>
            <span className="text-[#88939C] uppercase block mb-1">Built Area</span>
            <span className="text-base text-[#14171A] font-medium">{project.area}</span>
          </div>
          <div>
            <span className="text-[#88939C] uppercase block mb-1">Typology</span>
            <span className="text-base text-[#14171A] font-medium">{project.typology}</span>
          </div>
          <div>
            <span className="text-[#88939C] uppercase block mb-1">Location</span>
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
                Project Summary
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
                  Visual Documentation
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

        {/* Architectural Drawings Preview */}
        {project.drawings && project.drawings.length > 0 && (
          <div className="my-20 pt-12 border-t border-[#DFDBD2]">
            <span className="font-mono text-xs tracking-[0.25em] text-[#384D58] uppercase block mb-2">
              Schematic Documentation
            </span>
            <h3 className="font-serif text-3xl font-normal text-[#14171A] mb-8">
              Plans &amp; Climatic Sections
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.drawings.map((drawing, i) => (
                <div
                  key={i}
                  className="p-8 bg-[#ECE8E0] border border-[#DFDBD2] flex flex-col justify-between min-h-[260px] relative overflow-hidden group"
                >
                  {/* Subtle architectural linework watermark */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
                    <svg width="200" height="200" viewBox="0 0 100 100" fill="none">
                      <rect x="10" y="10" width="80" height="80" stroke="#384D58" strokeWidth="1" />
                      <line x1="10" y1="50" x2="90" y2="50" stroke="#384D58" strokeWidth="0.5" />
                      <line x1="50" y1="10" x2="50" y2="90" stroke="#384D58" strokeWidth="0.5" />
                    </svg>
                  </div>

                  <div>
                    <span className="font-mono text-xs text-[#384D58] tracking-widest uppercase block mb-2">
                      [{drawing.type.toUpperCase()}]
                    </span>
                    <h4 className="font-serif text-2xl text-[#14171A]">{drawing.title}</h4>
                    <p className="font-sans text-xs text-[#545F68] mt-2 leading-relaxed">
                      {drawing.caption}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#DFDBD2]/60 text-[11px] font-mono text-[#88939C]">
                    ARCHITECTURAL WORKING DRAWING ARCHIVE · LINEHAUS
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
              Related Case Studies
            </span>
            <Link
              href="/projects"
              className="text-xs font-mono tracking-widest uppercase text-[#14171A] hover:text-[#384D58]"
            >
              All Projects →
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
            Commission Inquiry
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal">
            Commission a Similar Project
          </h3>
          <p className="font-sans text-sm text-[#A0B2BD] max-w-lg mx-auto leading-relaxed">
            Discuss your site location, spatial aspirations, and timeline with our studio group in
            Bhadravati.
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
