import { Project } from "@/types";

export interface ProjectAssetSpec {
  recommendedResolution: string;
  aspectRatio: string;
  notes: string;
}

export interface CuratedProject extends Project {
  isTypologyStudy: boolean;
  provisionalNotice: string;
  assetSpec: ProjectAssetSpec;
}

export const projectsData: CuratedProject[] = [
  {
    id: "typ-courtyard-house",
    slug: "courtyard-residence-bhadravati",
    title: "The Courtyard House",
    subtitle: "A private contemporary residence centered on an internal open-to-sky courtyard",
    typology: "Residential",
    location: "Bhadravati, Karnataka",
    year: "2024",
    area: "4,650 SQ.FT",
    status: "Ongoing",
    leadArchitect: "Linehaus Practice Group",
    summary:
      "A residential architecture project exploring how a modern family dwelling is organized around an internal double-height courtyard that drives natural daylight and open spatial flow.",
    concept:
      "The house adopts an introverted perimeter wall paired with a deeply porous core. Living zones flank an open-to-sky central lightwell paved with hand-honed Sadarahalli granite and shaded by deep cantilevered timber brise-soleil.",
    challengesAndSolutions: {
      challenge:
        "Western solar exposure requiring effective daylight modulation and thermal buffer without continuous mechanical reliance.",
      solution:
        "Engineered a double-skin cavity perimeter wall integrated with high-level clerestory louvers that ventilate upper zones while keeping interior spaces naturally cool.",
    },
    materiality: [
      "Board-formed Monolithic Concrete",
      "Sadarahalli Grey Granite Plinths",
      "Reclaimed Teak Fenestrations",
      "Muted Slate Powder-Coated Steel",
      "Tactile Warm Lime-Plaster Wall Finish",
    ],
    metrics: [
      { label: "Target Area", value: "4,650 SQ.FT" },
      { label: "Study Focus", value: "Passive Ventilation" },
      { label: "Typology", value: "Private Residence" },
      { label: "Classification", value: "Typology Study" },
    ],
    isTypologyStudy: true,
    provisionalNotice:
      "Architectural typology study. Curated reference imagery illustrates intended spatial proportion and daylighting. Actual client commission assets awaiting final release.",
    assetSpec: {
      recommendedResolution: "2400 × 1500 px (Hero: 16/10)",
      aspectRatio: "16:10",
      notes: "Photograph of primary exterior elevation during overcast or twilight lighting.",
    },
    heroImage: {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
      alt: "Architectural study frame: Monolithic residential pavilion with cantilevered roof plane and natural stone paving",
      aspectRatio: "16/10",
      caption: "Conceptual elevation perspective: entrance water court and cantilevered eaves.",
      isHero: true,
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
        alt: "Internal double-height courtyard study with soft diffused natural daylight and exposed timber detailing",
        aspectRatio: "4/5",
        caption: "Reference study: The central light court illuminating internal circulation.",
      },
      {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
        alt: "Living pavilion with continuous terrazzo flooring extending towards shaded terrace",
        aspectRatio: "16/9",
        caption: "Reference study: Seamless indoor-outdoor living transition under deep soffits.",
      },
      {
        src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
        alt: "Minimalist master suite with custom timber joinery and slate blue partition",
        aspectRatio: "4/5",
        caption: "Reference study: Private suite featuring integrated joinery and cross ventilation.",
      },
    ],
    drawings: [
      {
        title: "Schematic Spatial Layout (Level 01)",
        type: "Plan",
        caption: "Ground floor plan organized around the central open-to-sky courtyard lung.",
      },
      {
        title: "Building Section & Spatial Elevation",
        type: "Section",
        caption: "Airflow trajectory illustrating stack effect purge through roof clerestory.",
      },
    ],
    featuredOnHome: true,
    order: 1,
  },
  {
    id: "typ-verandah-estate",
    slug: "the-verandah-estate-shivamogga",
    title: "The Verandah Estate",
    subtitle: "A luxury multi-generational residence reinterpreting the traditional South Indian 'jagali'",
    typology: "Luxury Residential",
    location: "Shivamogga, Karnataka",
    year: "2024",
    area: "8,200 SQ.FT",
    status: "Completed",
    leadArchitect: "Linehaus Practice Group",
    summary:
      "A spatial study exploring the reinterpretation of the traditional regional verandah ('jagali') into an expansive 32-metre horizontal living threshold that shelters multi-generational family living under deep, protective eaves.",
    concept:
      "Conceived as a cluster of autonomous living pods sheltered beneath a singular hovering folded roof plane. Deep perimeter verandahs buffer the inner rooms from tropical rain while cultivating shaded communal gathering areas.",
    challengesAndSolutions: {
      challenge:
        "Providing multi-generational family cohesion while securing absolute acoustic and visual privacy for separate family units.",
      solution:
        "Separated formal entertaining pavilions and intimate sleeping pods into detached volumes linked by covered, open-air loggias and quiet reflection pools.",
    },
    materiality: [
      "In-situ Cast Concrete Roof Plane",
      "Hand-Chiseled Basalt Plinths",
      "FSC-Certified Teak Wood Ceiling Soffits",
      "Perforated Oxidized Steel Privacy Screens",
      "Honed Grey Natural Stone Flooring",
    ],
    metrics: [
      { label: "Target Area", value: "8,200 SQ.FT" },
      { label: "Plot Scale", value: "2+ ACRES" },
      { label: "Typology", value: "Luxury Estate" },
      { label: "Classification", value: "Typology Study" },
    ],
    isTypologyStudy: true,
    provisionalNotice:
      "Architectural typology study. Curated reference imagery illustrates intended spatial proportion and daylighting. Actual client commission assets awaiting final release.",
    assetSpec: {
      recommendedResolution: "2400 × 1500 px (Hero: 16/10)",
      aspectRatio: "16:10",
      notes: "Panoramic perspective emphasizing the 32-metre horizontal roofline.",
    },
    heroImage: {
      src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=80",
      alt: "Architectural study frame: Long low-profile luxury villa with expansive cantilevered roof floating above illuminated stone plinth",
      aspectRatio: "16/10",
      caption: "Reference study: Panoramic perspective of the verandah facing landscaped grounds.",
      isHero: true,
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
        alt: "Formal dining hall opening to reflection pool through floor-to-ceiling glass",
        aspectRatio: "16/9",
        caption: "Reference study: Formal dining pavilion open to water reflection garden.",
      },
      {
        src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
        alt: "Crafted interior with bespoke timber ceiling slats and minimalist luminaires",
        aspectRatio: "4/5",
        caption: "Reference study: Bespoke timber joinery and acoustic ceiling slats.",
      },
    ],
    drawings: [
      {
        title: "Pavilion Layout & Circulation",
        type: "Site Diagram",
        caption: "Zoning diagram showing separation between public pavilion and private pods.",
      },
    ],
    featuredOnHome: true,
    order: 2,
  },
  {
    id: "typ-axis-pavilion",
    slug: "axis-corporate-headquarters",
    title: "The Axis Studio",
    subtitle: "A steel-framed commercial and administrative workspace with ceramic solar louvers",
    typology: "Commercial",
    location: "Karnataka Urban Center",
    year: "2024",
    area: "12,500 SQ.FT",
    status: "Completed",
    leadArchitect: "Linehaus Practice Group",
    summary:
      "A commercial architecture study demonstrating structural steel efficiency, modular interior zoning, and an exterior ceramic louver skin engineered to reduce air-conditioning loads in tropical commercial environments.",
    concept:
      "Replaces all-glass curtain walls with a responsive double envelope: high-performance acoustic glass protected by an exterior grid of terracotta and slate-blue aerofoil louvers that reflect solar radiation.",
    challengesAndSolutions: {
      challenge:
        "High internal heat gain on an urban corner site with severe eastern morning and western afternoon solar angles.",
      solution:
        "Engineered angled solar louvers tuned to local solar paths, providing natural daylight autonomy for 80% of operating hours while cutting solar thermal gain.",
    },
    materiality: [
      "Exposed Structural Steel Frame",
      "Extruded Terracotta Shading Louvers",
      "Polished Industrial Concrete Flooring",
      "Insulated Double Glazing Units",
      "Acoustic Wood Wool Panels",
    ],
    metrics: [
      { label: "Target Area", value: "12,500 SQ.FT" },
      { label: "Envelope", value: "Passive Solar Louvers" },
      { label: "Typology", value: "Commercial Office" },
      { label: "Classification", value: "Typology Study" },
    ],
    isTypologyStudy: true,
    provisionalNotice:
      "Architectural typology study. Curated reference imagery illustrates intended spatial proportion and daylighting. Actual client commission assets awaiting final release.",
    assetSpec: {
      recommendedResolution: "2400 × 1500 px (Hero: 16/10)",
      aspectRatio: "16:10",
      notes: "Architectural elevation capturing the rhythmic louver facade.",
    },
    heroImage: {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80",
      alt: "Architectural study frame: Modern commercial facade with rhythmic vertical fins and glass",
      aspectRatio: "16/10",
      caption: "Reference study: Street elevation illustrating rhythmic solar shading.",
      isHero: true,
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
        alt: "Commercial atrium with floating steel stair and concrete floors",
        aspectRatio: "16/9",
        caption: "Reference study: Double-height central collaborative atrium.",
      },
    ],
    featuredOnHome: true,
    order: 3,
  },
  {
    id: "typ-slate-sanctuary",
    slug: "slate-penthouse-interiors",
    title: "The Slate Penthouse",
    subtitle: "Turnkey interior architecture featuring muted slate cabinetry and warm tactile lime wash",
    typology: "Interior Architecture",
    location: "Karnataka Context",
    year: "2024",
    area: "3,400 SQ.FT",
    status: "Completed",
    leadArchitect: "Linehaus Practice Group",
    summary:
      "An interior architectural study demonstrating how partition walls can be re-engineered as functional spatial joinery, combining warm lime plaster, smoked timber, and muted slate-blue lacquers into a cohesive dwelling.",
    concept:
      "Rather than standard drywall dividers, every partition serves as a storage or service volume, integrating air conditioning plenums, pocket doors, and recessed illumination into clean, continuous architectural planes.",
    challengesAndSolutions: {
      challenge:
        "Awkward structural concrete columns that interrupted the open flow of the main living pavilion.",
      solution:
        "Absorbed structural columns into functional architectural pilasters that house acoustic dampening panels and architectural downlighting.",
    },
    materiality: [
      "Custom Slate-Blue Matte Millwork",
      "Hand-Applied Lime Plaster (Warm Off-White)",
      "Smoked European Oak Veneers",
      "Honed Grey Flurried Marble",
      "Trimless Architectural Lighting",
    ],
    metrics: [
      { label: "Target Area", value: "3,400 SQ.FT" },
      { label: "Execution", value: "Turnkey Interior" },
      { label: "Typology", value: "Interior Architecture" },
      { label: "Classification", value: "Typology Study" },
    ],
    isTypologyStudy: true,
    provisionalNotice:
      "Architectural typology study. Curated reference imagery illustrates intended spatial proportion and daylighting. Actual client commission assets awaiting final release.",
    assetSpec: {
      recommendedResolution: "2400 × 1500 px (Hero: 16/10)",
      aspectRatio: "16:10",
      notes: "Editorial shot of the open living pavilion showing seamless slate joinery.",
    },
    heroImage: {
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80",
      alt: "Architectural study frame: Minimalist interior with lime-wash walls, bespoke timber joinery, and slate accents",
      aspectRatio: "16/10",
      caption: "Reference study: Living room vignette showing bespoke slate joinery and recessed lighting.",
      isHero: true,
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80",
        alt: "Serene bedroom with textured linen drapery and minimalist bed",
        aspectRatio: "4/5",
        caption: "Reference study: Private bedroom suite with acoustic fabric panels.",
      },
    ],
    featuredOnHome: true,
    order: 4,
  },
  {
    id: "typ-laterite-villa",
    slug: "laterite-ridge-residence",
    title: "The Laterite Ridge Villa",
    subtitle: "A hillside dwelling prototype anchored directly into natural laterite bedrock",
    typology: "Luxury Residential",
    location: "Western Ghats, Karnataka",
    year: "2024",
    area: "6,100 SQ.FT",
    status: "Ongoing",
    leadArchitect: "Linehaus Practice Group",
    summary:
      "A site-sensitive architectural concept exploring stepped foundations and excavated site stone on steep 20-degree slopes, avoiding aggressive land excavation while celebrating bedrock strata.",
    concept:
      "Rather than terraforming the site into flat benches, the villa steps gently down the slope across three levels, creating living terraces that overlook the natural forest canopy.",
    challengesAndSolutions: {
      challenge:
        "High slope gradient with intensive seasonal runoff on steep terrain.",
      solution:
        "Designed terraced gabion retaining walls integrated with stepped bioswales that filter runoff into subterranean holding tanks.",
    },
    materiality: [
      "Quarried Regional Laterite Blocks",
      "Off-Shutter Exposed Concrete Slabs",
      "Rough-Hewn Stone Slabs",
      "Weathering Steel Guardrails",
    ],
    metrics: [
      { label: "Target Area", value: "6,100 SQ.FT" },
      { label: "Terrain", value: "20° Slope" },
      { label: "Typology", value: "Hillside Villa" },
      { label: "Classification", value: "Typology Study" },
    ],
    isTypologyStudy: true,
    provisionalNotice:
      "Architectural typology study. Curated reference imagery illustrates intended spatial proportion and daylighting. Actual client commission assets awaiting final release.",
    assetSpec: {
      recommendedResolution: "2400 × 1500 px (Hero: 16/10)",
      aspectRatio: "16:10",
      notes: "Dramatic angled perspective showing the stepped architecture embedded into the slope.",
    },
    heroImage: {
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80",
      alt: "Architectural study frame: Modern luxury hillside villa embedded in lush landscape",
      aspectRatio: "16/10",
      caption: "Reference study: Stepped elevation anchored into the hillside terrain.",
      isHero: false,
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
        alt: "Outdoor covered lounge terrace overlooking forested valley",
        aspectRatio: "16/9",
        caption: "Reference study: Covered lounge deck framing continuous canopy views.",
      },
    ],
    featuredOnHome: false,
    order: 5,
  },
  {
    id: "typ-garden-pavilion",
    slug: "the-garden-pavilion",
    title: "The Garden Pavilion",
    subtitle: "An ecological landscape pavilion with natural water retention pools and native flora",
    typology: "Landscape",
    location: "Bhadravati, Karnataka",
    year: "2024",
    area: "18,000 SQ.FT",
    status: "Ongoing",
    leadArchitect: "Linehaus Practice Group",
    summary:
      "A landscape architecture intervention demonstrating how natural precipitation can be harvested to create peaceful reflection ponds and drought-resistant native habitats.",
    concept:
      "Celebrates water as an architectural medium. Stepped granite retention courts guide water through gravel filtration beds into surrounding aquifers.",
    challengesAndSolutions: {
      challenge:
        "Suburban site prone to seasonal waterlogging followed by dry summer soil dehydration.",
      solution:
        "Engineered a bio-retention rain garden system populated with native Western Ghats grasses and shade trees requiring zero municipal irrigation once established.",
    },
    materiality: [
      "Flamed Grey Granite Walkways",
      "Dry-Stack Natural Laterite Walls",
      "Porous Gravel Infiltration Beds",
      "Minimalist Architectural Water Weirs",
    ],
    metrics: [
      { label: "Footprint", value: "18,000 SQ.FT" },
      { label: "Ecological Focus", value: "Water Retention" },
      { label: "Typology", value: "Landscape Architecture" },
      { label: "Classification", value: "Typology Study" },
    ],
    isTypologyStudy: true,
    provisionalNotice:
      "Architectural typology study. Curated reference imagery illustrates intended spatial proportion and daylighting. Actual client commission assets awaiting final release.",
    assetSpec: {
      recommendedResolution: "2400 × 1500 px (Hero: 16/10)",
      aspectRatio: "16:10",
      notes: "Landscape architectural frame with water feature and stone pathways.",
    },
    heroImage: {
      src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=2000&q=80",
      alt: "Architectural study frame: Lush garden courtyard with stone paving and quiet reflection water elements",
      aspectRatio: "16/10",
      caption: "Reference study: Stepped granite water courts and reflection pools.",
      isHero: false,
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
        alt: "Pathways flanked by lush native tropical greenery",
        aspectRatio: "4/5",
        caption: "Reference study: Granite pathways winding through native endemic understory.",
      },
    ],
    featuredOnHome: false,
    order: 6,
  },
];
