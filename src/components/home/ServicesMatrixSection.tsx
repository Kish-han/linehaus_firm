import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight } from "lucide-react";

export const ServicesMatrixSection: React.FC = () => {
  const visualServices = [
    {
      num: "01",
      category: "Architecture",
      title: "Architecture & Residential Design",
      description:
        "Bespoke private homes, multi-generational family residences, and luxury villa estates designed with uncompromising spatial discipline, natural daylighting, and enduring structural integrity.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      href: "/services#residential-architecture",
      actionText: "Explore Architecture",
    },
    {
      num: "02",
      category: "Interior",
      title: "Interior Architecture & Design",
      description:
        "Seamless spatial interiors conceived as a natural extension of the building's architecture—prioritizing custom millwork, tactile stone, bespoke joinery, and tailored circadian lighting.",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      href: "/services#interior-architecture",
      actionText: "Explore Interiors",
    },
    {
      num: "03",
      category: "Execution",
      title: "Turnkey Construction",
      description:
        "Single-source accountability bridging design conception and on-site building. We manage structural engineering, artisan coordination, material procurement, and quality milestone sign-offs.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=80",
      href: "/construction",
      actionText: "Explore Construction",
    },
    {
      num: "04",
      category: "Commercial",
      title: "Commercial & Institutional Projects",
      description:
        "High-performance commercial offices, educational facilities, healthcare buildings, and retail environments focused on operational efficiency, spatial longevity, and dignified public presence.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      href: "/services#commercial-institutional",
      actionText: "Explore Commercial",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 border-b border-[#DFDBD2] bg-[#F1EFEA]">
      <Container size="wide">
        <SectionHeader
          number="03"
          eyebrow="What We Do"
          title="Disciplines &amp; Services"
          subtitle="From initial concept sketches to complete turnkey site delivery, our practice provides seamless accountability across architecture, interiors, and construction."
          align="split"
        />

        {/* Four Large Visual Service Cards Grid (Image 8 Requirement) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {visualServices.map((service) => (
            <article
              key={service.num}
              className="bg-[#FFFFFF] border border-[#DFDBD2] hover:border-[#384D58] transition-all duration-300 flex flex-col justify-between group overflow-hidden shadow-sm"
            >
              {/* Visual Photograph Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#E8E6E1]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-4 left-4 bg-[#14171A]/85 backdrop-blur-sm text-white px-3 py-1 text-xs font-mono tracking-widest uppercase">
                  [{service.num}] · {service.category}
                </div>
              </div>

              {/* Text Body & Explore Button */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div className="space-y-3 mb-6">
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#14171A] group-hover:text-[#384D58] transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#545F68] font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#DFDBD2]">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase font-semibold text-[#14171A] group-hover:text-[#384D58] transition-colors"
                  >
                    <span>{service.actionText}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Turnkey Assurance Feature Strip */}
        <div className="p-8 sm:p-10 bg-[#182229] text-[#F8F7F4] border border-[#2B3740] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <span className="font-mono text-xs tracking-[0.25em] text-[#A0B2BD] uppercase block">
              Single-Point Responsibility
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
              Planning an architectural project in Karnataka?
            </h3>
            <p className="font-sans text-sm text-[#A0B2BD] font-light leading-relaxed">
              Our integrated design-and-build model eliminates contractor misalignment, protects your
              investment, and delivers spaces built exactly as envisioned.
            </p>
          </div>

          <div className="flex-shrink-0 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-sans font-medium tracking-[0.2em] uppercase bg-[#384D58] text-[#F8F7F4] hover:bg-[#4F6877] transition-colors"
            >
              <span>Initiate Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919480000000?text=Hello%20Linehaus%20Architects,%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-sans font-medium tracking-[0.2em] uppercase bg-[#25D366] text-white hover:bg-[#20ba5a] transition-colors"
            >
              <span>WhatsApp Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
