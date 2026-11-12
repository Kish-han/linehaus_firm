export type ProjectTypology =
  | 'Residential'
  | 'Luxury Residential'
  | 'Commercial'
  | 'Interior Architecture'
  | 'Turnkey Architecture'
  | 'Landscape';

export type ProjectStatus = 'Completed' | 'Ongoing' | 'Under Construction' | 'In Concept' | 'Design Development';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectDrawing {
  title: string;
  type: 'Plan' | 'Section' | 'Elevation' | 'Axonometric' | 'Site Diagram';
  svgPath?: string;
  caption: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  aspectRatio: '16/10' | '16/9' | '4/5' | '1/1' | '21/9';
  caption?: string;
  isHero?: boolean;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  typology: ProjectTypology;
  location: string;
  year: string;
  area: string;
  status: ProjectStatus;
  leadArchitect?: string;
  summary: string;
  concept: string;
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  };
  materiality: string[];
  metrics: ProjectMetric[];
  heroImage: ProjectImage;
  gallery: ProjectImage[];
  drawings?: ProjectDrawing[];
  featuredOnHome: boolean;
  order: number;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  detailedScope: string[];
  deliverables: string[];
  deliverableIcon?: string;
  isTurnkey?: boolean;
}

export interface StudioPrinciple {
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export interface ProjectEnquiryFormData {
  clientName: string;
  email: string;
  phone: string;
  projectTypology: ProjectTypology;
  siteLocation: string;
  estimatedPlotOrBuiltArea: string;
  timeline: string;
  servicesRequired: string[];
  projectBrief: string;
}
