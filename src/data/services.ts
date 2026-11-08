import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "residential-architecture",
    slug: "residential-architecture",
    title: "Residential & Luxury Living",
    category: "Architecture",
    shortDescription:
      "Bespoke private homes, multi-generational family residences, and luxury villa estates designed with uncompromising spatial discipline and climatic sensitivity.",
    detailedScope: [
      "Site topography, solar vector, and wind velocity analysis",
      "Conceptual spatial planning and 3D architectural massing",
      "Climatic passive ventilation and courtyard integration",
      "Structural schematic development and municipal sanction liaison",
      "Detailed architectural construction documentation and working drawings",
    ],
    deliverables: [
      "Comprehensive Architectural Drawing Package",
      "3D Spatial Visualisation & Material Renders",
      "Structural & MEP Coordination Drawings",
      "Bill of Quantities (BOQ) & Tender Packages",
    ],
    isTurnkey: true,
  },
  {
    id: "interior-architecture",
    slug: "interior-architecture",
    title: "Interior Architecture & Joinery",
    category: "Interior",
    shortDescription:
      "Seamless spatial interiors conceived as an organic extension of the building's architecture, prioritizing bespoke joinery, tactile surfaces, and curated natural illumination.",
    detailedScope: [
      "Spatial reprogramming and interior partition choreography",
      "Custom millwork, architectural joinery, and cabinetry detailing",
      "Architectural lighting design (circadian, task, and accent fixtures)",
      "Material, textile, and hardware curation with sample mockups",
      "Acoustic calibration and thermal comfort optimization",
    ],
    deliverables: [
      "Interior Working Drawings & Reflected Ceiling Plans (RCP)",
      "Millwork Fabrication Details & Joinery Schedules",
      "Sanitary, Hardware, & Fixture Specifications",
      "On-site Interior Execution Supervision",
    ],
    isTurnkey: true,
  },
  {
    id: "turnkey-execution",
    slug: "turnkey-execution",
    title: "Turnkey Architectural Delivery",
    category: "Execution",
    shortDescription:
      "An end-to-end design-and-build delivery model providing single-source accountability from bare ground to turnkey occupancy.",
    detailedScope: [
      "End-to-end project scheduling and critical path management",
      "Vetted artisan, vendor, and specialist subcontractor management",
      "Procurement of structural materials, high-spec finishes, and fenestrations",
      "Rigorous on-site quality assurance audits and milestone inspections",
      "Comprehensive cost tracking, timeline adherence, and final handover audits",
    ],
    deliverables: [
      "Consolidated Design & Build Master Contract",
      "Bi-Weekly Digital Progress & Milestone Reports",
      "Quality Assurance Sign-Off Documentation",
      "As-Built Drawings & Handover Operations Manual",
    ],
    isTurnkey: true,
  },
  {
    id: "commercial-institutional",
    slug: "commercial-institutional",
    title: "Commercial & Institutional",
    category: "Commercial",
    shortDescription:
      "High-performance commercial offices, educational facilities, healthcare buildings, and retail environments focused on operational efficiency and enduring branding presence.",
    detailedScope: [
      "High-density circulation planning and egress compliance",
      "Sustainable lifecycle envelope design and energy modeling",
      "Acoustic and fire life-safety regulatory alignment",
      "Corporate brand spatial translation and entrance focal design",
    ],
    deliverables: [
      "Master Commercial Masterplan & Phased Staging Documents",
      "Statutory Code & Authority Compliance Sets",
      "High-Traffic Material Specification Schedules",
      "Value Engineering & Operational Lifecycle Analysis",
    ],
    isTurnkey: false,
  },
  {
    id: "landscape-architecture",
    slug: "landscape-architecture",
    title: "Landscape & Microclimate Design",
    category: "Landscape",
    shortDescription:
      "Contextual outdoor environments, monsoon-adapted drainage gardens, internal courtyards, and native flora ecosystems that merge indoor sanctuary with open nature.",
    detailedScope: [
      "Native biodiversity and Western Ghats endemic species selection",
      "Rainwater harvesting, swale design, and percolation recharge pits",
      "Porous hardscape paving, water courts, and shadow canopy planning",
      "Outdoor lighting, seating plinths, and bespoke water features",
    ],
    deliverables: [
      "Landscape Grading & Hardscape Working Plans",
      "Planting Palettes & Seasonal Growth Schedules",
      "Irrigation & Stormwater Drainage Schematics",
      "Bespoke Outdoor Architectural Feature Drawings",
    ],
    isTurnkey: false,
  },
];
