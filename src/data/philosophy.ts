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
      title: "Purposeful Spatial Planning",
      tagline: "Every square metre must justify its existence.",
      description:
        "We reject dead zones and bloated circulation corridors. Floor plans are calibrated around how light moves, how family members congregate, and how privacy transitions from public arrival to intimate sanctuary.",
    },
    {
      number: "02",
      title: "Environmental & Site Harmony",
      tagline: "Architecture designed in harmony with its physical setting.",
      description:
        "Thoughtful orientation, natural daylight infiltration, open courtyards, and strategic spatial massing cultivate a timeless, serene atmosphere throughout every living space.",
    },
    {
      number: "03",
      title: "Material Honesty & Detailing",
      tagline: "Authentic materials age with grace, not obsolescence.",
      description:
        "Exposed cast concrete, hand-dressed granite, regional laterite, precision steel joinery, and sustainably sourced timber are detailed to withstand time, weathering, and rigorous tropical cycles.",
    },
    {
      number: "04",
      title: "Turnkey Cohesion & Rigour",
      tagline: "From master concept to the final door handle.",
      description:
        "The integrity of architecture dissolves when execution is fragmented. We bridge architectural volume, interior craftsmanship, and structural engineering into an unbroken, accountable continuum.",
    },
  ] as StudioPrinciple[],
  stats: [] as { label: string; value: string; note: string }[],
};
