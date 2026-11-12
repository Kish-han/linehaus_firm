import { StudioPrinciple } from "@/types";

export const philosophyData = {
  headline: "Functional Architecture",
  subheadline: "Form emerges from spatial clarity, proportion, and honest materiality.",
  manifesto: [
    "We believe architecture must be purposeful before it is decorative. True luxury is not superficial ornament or transient styling—it is the quiet dignity of balanced natural light, intuitive circulation, composed atmosphere, and spaces crafted specifically for the rituals of daily living.",
    "Rooted in Bhadravati, Karnataka, our work navigates spatial volume, natural light, shaded courtyards, and honest construction, crafting homes that feel intuitive, grounded, and enduring.",
    "From intimate family dwellings to commanding luxury estates and commercial facilities, every Linehaus commission is an exercise in structural discipline, functional efficiency, and enduring architectural integrity.",
  ],
  principles: [
    {
      number: "01",
      title: "Spatial Planning",
      tagline: "Designed around people and everyday living",
      description: "Spaces designed around people, movement and everyday living.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    },
    {
      number: "02",
      title: "Contextual Design",
      tagline: "Natural light, orientation & regional understanding",
      description: "Natural light, orientation and regional understanding.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      number: "03",
      title: "Material & Detailing",
      tagline: "Thoughtful material selection & precise detailing",
      description: "Thoughtful material selection and precise detailing.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      number: "04",
      title: "Design to Execution",
      tagline: "Connecting design intent with quality construction",
      description: "Connecting design intent with quality construction.",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    },
  ] as StudioPrinciple[],
  stats: [] as { label: string; value: string; note: string }[],
};
