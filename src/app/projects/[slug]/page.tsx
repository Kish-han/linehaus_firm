import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArchitecturalImage } from "@/components/ui/ArchitecturalImage";
import { projectsData } from "@/data/projects";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

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

        {/* Project Overview & Materiality Palette */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-16 items-start">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-mono text-xs tracking-[0.25em] text-[#384D58] uppercase block">
              Project Overview
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#14171A] leading-snug">
              Spatial Intent &amp; Scope
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#545F68] font-light leading-relaxed pt-2">
              {project.summary}
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="p-6 sm:p-8 bg-[#FFFFFF] border border-[#DFDBD2] space-y-4">
              <span className="font-mono text-xs tracking-widest text-[#384D58] uppercase block border-b border-[#DFDBD2] pb-3">
                Materiality &amp; Details
              </span>
              <ul className="space-y-3 text-xs font-sans text-[#545F68]">
                {project.materiality.map((mat, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 bg-[#384D58] flex-shrink-0" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

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
