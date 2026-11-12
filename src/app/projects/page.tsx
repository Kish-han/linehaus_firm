"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArchitecturalImage } from "@/components/ui/ArchitecturalImage";
import { projectsData } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsPage() {
  const [selectedTypology, setSelectedTypology] = useState<string>("All");

  const filterTabs = [
    "All",
    "Residential",
    // "Luxury Residential",
    "Commercial",
    "Interior Architecture",
    // "Landscape",
  ];

  const filteredProjects =
    selectedTypology === "All"
      ? projectsData
      : projectsData.filter((p) => p.typology === selectedTypology);

  return (
    <div className="py-12 md:py-20 bg-[#F8F7F4]">
      <Container size="wide">
        {/* Page Header */}
        <div className="pb-12 mb-10 border-b border-[#DFDBD2]">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 text-[10px] sm:text-xs font-mono tracking-wider sm:tracking-[0.25em] text-[#384D58] uppercase">
            <span>[PORTFOLIO ARCHIVE]</span>
            <span>·</span>
            <span>{projectsData.length} ARCHITECTURAL TYPOLOGY STUDIES</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#14171A] leading-[1.08]">
            Typology Studies <br />
            <span className="italic text-[#384D58]">&amp; Spatial Investigations.</span>
          </h1>

          <p className="mt-6 font-sans text-base sm:text-lg text-[#545F68] font-light max-w-3xl leading-relaxed">
            An architectural study archive of private residences, luxury estates, and multidisciplinary
            commissions designed with spatial purpose, environmental intelligence, and honest materiality.
          </p>

          {/* Transparent Provisional Notice */}
          {/* <div className="mt-8 p-4 bg-[#F1EFEA] border border-[#DFDBD2] text-xs font-mono text-[#545F68] flex items-center gap-3">
            <span className="w-2 h-2 bg-[#384D58] flex-shrink-0" />
            <span>
              NOTE: Curated reference imagery illustrates intended spatial volumes, daylighting, and material detailing. Official client commission documentation is updated on a rolling basis.
            </span>
          </div> */}

          {/* Typology Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 mt-8 pt-8 border-t border-[#DFDBD2]">
            <span className="font-mono text-xs tracking-widest text-[#88939C] uppercase mr-3">
              Filter By Discipline:
            </span>
            {filterTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setSelectedTypology(tab)}
                className={`px-4 py-2 text-xs font-sans tracking-wider uppercase transition-colors border ${
                  selectedTypology === tab
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
                      [0{idx + 1}] {project.typology}
                    </span>
                    <span className="text-[10px] text-[#88939C]">STUDIO STUDY</span>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-[#14171A] group-hover:text-[#384D58] transition-colors mb-2">
                    <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                  </h3>

                  <p className="font-mono text-xs text-[#384D58] uppercase mb-4">
                    {project.location}
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
                    <span>Examine Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center space-y-4 bg-[#F1EFEA] border border-[#DFDBD2]">
            <p className="font-serif text-2xl text-[#14171A]">
              No commissions in this category yet.
            </p>
            <p className="font-sans text-sm text-[#545F68]">
              New case studies are being documented by the studio group.
            </p>
            <button
              onClick={() => setSelectedTypology("All")}
              className="mt-4 px-6 py-2.5 text-xs font-mono tracking-widest uppercase bg-[#384D58] text-white"
            >
              Reset Filter
            </button>
          </div>
        )}
      </Container>
    </div>
  );
}
