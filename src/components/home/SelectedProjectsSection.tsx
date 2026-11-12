import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArchitecturalImage } from "@/components/ui/ArchitecturalImage";
import { projectsData } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export const SelectedProjectsSection: React.FC = () => {
  // Show first 4 featured works on homepage
  const featuredProjects = projectsData.filter((p) => p.featuredOnHome);

  return (
    <section id="works" className="py-20 md:py-28 border-b border-[#DFDBD2] bg-[#F8F7F4]">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#DFDBD2]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs tracking-[0.25em] text-[#384D58] font-medium">
                [02]
              </span>
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#384D58]">
                Spatial Typology Studies
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#14171A] tracking-tight">
              Selected Investigations
            </h2>
          </div>

          <div className="mt-4 md:mt-0">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase font-medium text-[#384D58] hover:text-[#14171A] transition-colors border-b border-[#384D58] pb-1"
            >
              <span>Explore All Typologies ({projectsData.length})</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Editorial Project Showcase: Alternating Asymmetric Spread */}
        <div className="space-y-20 md:space-y-28">
          {featuredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <article
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group"
              >
                {/* Visual Media Column */}
                <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block overflow-hidden focus-visible:outline-none"
                    aria-label={`View study for ${project.title}`}
                  >
                    <ArchitecturalImage
                      src={project.heroImage.src}
                      alt={project.heroImage.alt}
                      aspectRatio="16/10"
                      caption={`${project.title} · ${project.location}`}
                      overlayText={`[TYP_0${idx + 1}] · ${project.typology.toUpperCase()}`}
                    />
                  </Link>
                </div>

                {/* Metadata & Narrative Column */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center space-y-6 ${
                    isEven ? "lg:order-2 lg:pl-6" : "lg:order-1 lg:pr-6"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#545F68] uppercase">
                      <span className="text-[#384D58] font-semibold">[0{idx + 1}]</span>
                      <span>·</span>
                      <span>{project.typology}</span>
                      <span>·</span>
                      <span>TYPOLOGY STUDY</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#14171A] group-hover:text-[#384D58] transition-colors">
                      <Link href={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    <p className="font-mono text-xs text-[#384D58] tracking-wider uppercase">
                      {project.location}
                    </p>
                  </div>

                  <p className="font-sans text-sm sm:text-base text-[#545F68] font-light leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Architectural Specs List */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#DFDBD2] text-xs">
                    <div>
                      <span className="font-mono text-[10px] text-[#88939C] uppercase block">Target Area</span>
                      <span className="font-mono text-xs text-[#14171A]">{project.area}</span>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-[#88939C] uppercase block">Discipline</span>
                      <span className="font-sans text-xs text-[#14171A]">{project.typology}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase font-medium text-[#14171A] group-hover:text-[#384D58] transition-colors border-b border-[#14171A] group-hover:border-[#384D58] pb-1"
                    >
                      <span>Explore Typology Study</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All Works Callout */}
        <div className="mt-20 pt-10 border-t border-[#DFDBD2] text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 text-xs font-sans font-medium tracking-[0.2em] uppercase bg-[#14171A] text-[#F8F7F4] hover:bg-[#384D58] transition-colors"
          >
            <span>View All Architectural Typologies</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
