"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArchitecturalImage } from "@/components/ui/ArchitecturalImage";
import { projectsData } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filterTabs = [
    "All",
    "Completed",
    "Ongoing",
    "Residential",
    "Commercial",
    "Interior Architecture",
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "Completed") return p.status === "Completed";
    if (selectedFilter === "Ongoing") return p.status === "Ongoing";
    if (selectedFilter === "Residential")
      return p.typology === "Residential" || p.typology === "Luxury Residential";
    if (selectedFilter === "Commercial") return p.typology === "Commercial";
    if (selectedFilter === "Interior Architecture")
      return p.typology === "Interior Architecture";
    return true;
  });

  return (
    <div className="py-12 md:py-20 bg-[#F8F7F4]">
      <Container size="wide">
        {/* Page Header */}
        <div className="pb-12 mb-10 border-b border-[#DFDBD2]">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 text-[10px] sm:text-xs font-mono tracking-wider sm:tracking-[0.25em] text-[#384D58] uppercase">
            <span>[PORTFOLIO OF WORKS]</span>
            <span>·</span>
            <span>COMPLETED &amp; ONGOING COMMISSIONS</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#14171A] leading-[1.08]">
            Architecture &amp; <br />
            <span className="italic text-[#384D58]">Spatial Works.</span>
          </h1>

          <p className="mt-6 font-sans text-base sm:text-lg text-[#545F68] font-light max-w-3xl leading-relaxed">
            A portfolio of completed residences, luxury estates, commercial workspaces, and ongoing commissions
            developed through rigorous spatial logic, proportion, and honest materiality.
          </p>

          {/* Typology & Status Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 mt-8 pt-8 border-t border-[#DFDBD2]">
            <span className="font-mono text-xs tracking-widest text-[#88939C] uppercase mr-3">
              Filter Works:
            </span>
            {filterTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setSelectedFilter(tab)}
                className={`px-4 py-2 text-xs font-sans tracking-wider uppercase transition-colors border ${
                  selectedFilter === tab
                    ? "bg-[#384D58] text-[#F8F7F4] border-[#384D58] font-medium"
                    : "bg-[#F1EFEA] text-[#545F68] border-[#DFDBD2] hover:text-[#14171A] hover:border-[#14171A]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="bg-[#F8F7F4] border border-[#DFDBD2] flex flex-col justify-between group hover:border-[#384D58] transition-all duration-300"
            >
              <div>
                {/* Visual Media */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="block overflow-hidden focus-visible:outline-none"
                >
                  <ArchitecturalImage
                    src={project.heroImage.src}
                    alt={project.heroImage.alt}
                    aspectRatio="16/10"
                    caption={`${project.title} · ${project.location}`}
                  />
                </Link>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#545F68] uppercase pb-3 mb-3 border-b border-[#DFDBD2]/60">
                    <span className="text-[#384D58] font-medium">
                      {project.typology}
                    </span>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 border ${
                        project.status === "Completed"
                          ? "bg-[#EBF0F3] text-[#384D58] border-[#A0B2BD]"
                          : "bg-[#F1EFEA] text-[#545F68] border-[#DFDBD2]"
                      }`}
                    >
                      {project.status === "Completed" ? "COMPLETED" : "ONGOING"}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-[#14171A] group-hover:text-[#384D58] transition-colors mb-2">
                    <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                  </h3>

                  <p className="font-mono text-xs text-[#384D58] uppercase mb-4">
                    {project.location} · {project.year}
                  </p>

                  <p className="font-sans text-xs text-[#545F68] font-light leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-[#DFDBD2] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#88939C] uppercase">{project.area}</span>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-[#14171A] group-hover:text-[#384D58] font-medium tracking-wider uppercase transition-colors"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 border border-[#DFDBD2] bg-[#F1EFEA]">
            <p className="font-serif text-2xl text-[#14171A] mb-2">No projects found</p>
            <p className="font-sans text-xs text-[#545F68]">
              Try selecting a different filter above.
            </p>
          </div>
        )}
      </Container>
    </div>
  );
}
