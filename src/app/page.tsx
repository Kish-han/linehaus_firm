import { HeroSection } from "@/components/home/HeroSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { SelectedProjectsSection } from "@/components/home/SelectedProjectsSection";
import { ServicesMatrixSection } from "@/components/home/ServicesMatrixSection";
import { StudioPreviewSection } from "@/components/home/StudioPreviewSection";
import { ProjectIntakeSection } from "@/components/home/ProjectIntakeSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 01. First Screen Hero Section */}
      <HeroSection />

      {/* 02. Functional Architecture Manifesto & Core Principles */}
      <PhilosophySection />

      {/* 03. Curated Works & Case Studies Archive */}
      <SelectedProjectsSection />

      {/* 04. Multidisciplinary Practice & Turnkey Delivery Matrix */}
      <ServicesMatrixSection />

      {/* 05. The Studio Context & Materiality in Bhadravati, Karnataka */}
      <StudioPreviewSection />

      {/* 06. Client Consultation & Project Intake */}
      <ProjectIntakeSection />
    </div>
  );
}
