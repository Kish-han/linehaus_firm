import { Project } from "@/types";

export interface ProjectAssetSpec {
  recommendedResolution: string;
  aspectRatio: string;
  notes: string;
}

export interface CuratedProject extends Project {
  isPlaceholderAsset: boolean;
  assetSpec: ProjectAssetSpec;
}

export const projectsData: CuratedProject[] = [
  {
    id: "prj-courtyard-house",
    slug: "courtyard-residence-bhadravati",
    title: "The Courtyard Residence",
    subtitle: "A climate-responsive private dwelling centered on a sheltered monsoon court",
    typology: "Residential",
    location: "Bhadravati, Karnataka",
    year: "2024",
    area: "4,650 SQ.FT",
    status: "Completed",
    leadArchitect: "Linehaus Practice Group",
    summary:
      "A climate-responsive private home organized around an internal central courtyard that draws cool downdrafts, filters harsh midday sun, and buffers the dwelling against humid Karnataka monsoon cycles.",
    concept:
      "The house responds to the climate of the Bhadravati river basin by adopting an introverted perimeter wall paired with a deeply porous core. Rooms flank a double-height central lightwell paved with hand-honed Sadarahalli granite and shaded by deep cantilevered timber brise-soleil.",
    challengesAndSolutions: {
      challenge:
        "Severe tropical sun exposure on the western façade combined with heavy seasonal monsoon downpours requiring active natural drainage and passive cooling without continuous mechanical air conditioning.",
      solution:
        "Crafted a double-skin cavity wall on the west, combined with a central thermal stack courtyard that continuously extracts hot air through louvers in the roof lantern, maintaining indoor ambient temperatures 4°C cooler than the exterior.",
    },
    climaticStrategy:
      "Solar orientation optimized with minimal west-facing openings; central court serves as a pneumatic lung driving stack ventilation across both living levels.",
    materiality: [
      "Board-formed Architectural Concrete",
      "Sadarahalli Grey Granite Plinths",
      "Reclaimed Teak Fenestrations",
      "Powder-Coated Muted Slate Steel",
      "Porous Lime-Wash Wall Plaster",
    ],
    metrics: [
      { label: "Built Area", value: "4,650 SQ.FT" },
      { label: "Site Footprint", value: "6,800 SQ.FT" },
      { label: "Typology", value: "Bespoke Residence" },
      { label: "Completion", value: "2024" },
    ],
    isPlaceholderAsset: true,
    assetSpec: {
      recommendedResolution: "2400 × 1500 px (Hero: 16/10)",
      aspectRatio: "16:10",
      notes: "Photograph of primary exterior elevation during overcast or twilight lighting.",
    },
    heroImage: {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
      alt: "Monolithic contemporary residential pavilion with cantilevered roof plane and natural stone paving",
      aspectRatio: "16/10",
      caption: "Exterior elevation viewed across the entrance water court at dusk.",
      isHero: true,
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
        alt: "Internal double-height courtyard with soft diffused natural daylight and exposed timber detailing",
        aspectRatio: "4/5",
        caption: "The central light court illuminating the internal circulation stair.",
      },
      {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
        alt: "Living pavilion with continuous terrazzo flooring extending towards shaded garden terrace",
        aspectRatio: "16/9",
        caption: "Seamless indoor-outdoor living transition under deep concrete soffits.",
      },
      {
        src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
        alt: "Minimalist master suite with custom timber joinery and slate blue partition",
        aspectRatio: "4/5",
        caption: "Private quarters featuring integrated joinery and climate-calibrated cross vents.",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
        alt: "Detail of board-marked concrete wall meeting precision shadowline steel trim",
        aspectRatio: "1/1",
        caption: "Material intersection: board-formed concrete and slate-toned steel reveal.",
      },
    ],
    drawings: [
      {
        title: "Ground Level Spatial Plan",
        type: "Plan",
        caption: "Circulation core organized around the 350 sq.ft internal open-to-sky courtyard.",
      },
      {
        title: "Longitudinal Climatic Section",
        type: "Section",
        caption: "Thermal stack effect chimney and solar angle deflection diagram.",
      },
    ],
    featuredOnHome: true,
    order: 1,
  },
  {
    id: "prj-verandah-estate",
    slug: "the-verandah-estate-shivamogga",
    title: "The Verandah Estate",
    subtitle: "A luxury multi-generational residence reinterpreting the traditional Malnad jagali",
    typology: "Luxury Residential",
    location: "Shivamogga Outskirts, Karnataka",
    year: "2024",
    area: "8,200 SQ.FT",
    status: "Completed",
    leadArchitect: "Linehaus Practice Group",
    summary:
      "A luxury family estate set within an agrarian grove, reinterpreting the traditional South Indian 'jagali' (verandah) into an expansive, sheltered architectural threshold spanning 32 metres.",
    concept:
      "Rather than an isolated glass box, the residence is conceived as a series of connected pavilions sheltered beneath a singular, hovering folded roof. Deep verandahs shield living spaces from torrential rainfall while providing all-weather communal living zones.",
    challengesAndSolutions: {
      challenge:
        "Accommodating three generations of family members under one roof while providing absolute acoustic privacy and distinct formal vs. informal zones.",
      solution:
        "Separated public entertaining wings and private residential pods into autonomous pavilions bridged by open-air glazed loggias and water reflection courts.",
    },
    climaticStrategy:
      "The 4.2m cantilevered eaves shade glass facades year-round, eliminating direct solar glare and reducing mechanical cooling loads by 38%.",
    materiality: [
      "Monolithic Cast In-situ Concrete",
      "Hand-Chiseled Basalt Plinths",
      "FSC-Certified Teak Wood Ceiling Soffits",
      "Oxidized Steel Screen Panels",
      "Bespoke Brass Architectural Hardware",
    ],
    metrics: [
      { label: "Built Area", value: "8,200 SQ.FT" },
      { label: "Plot Area", value: "2.4 ACRES" },
      { label: "Typology", value: "Turnkey Estate" },
      { label: "Completion", value: "2024" },
    ],
    isPlaceholderAsset: true,
    assetSpec: {
      recommendedResolution: "2400 × 1500 px (Hero: 16/10)",
      aspectRatio: "16/10",
      notes: "Wide horizontal perspective emphasizing the 32-metre horizontal roofline.",
    },
    heroImage: {
      src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=80",
      alt: "Long low-profile luxury villa with expansive cantilevered roof floating above illuminated stone plinth",
      aspectRatio: "16/10",
      caption: "Panoramic evening perspective of the south verandah facing the landscaped grove.",
      isHero: true,
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
        alt: "Expansive formal dining hall overlooking koi reflection pool through floor-to-ceiling glass",
        aspectRatio: "16/9",
        caption: "Formal dining hall opening completely to the reflection pond.",
      },
      {
        src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
        alt: "Crafted interior with bespoke timber ceiling slats and minimalist pendant luminaires",
        aspectRatio: "4/5",
        caption: "Bespoke millwork and timber ceiling acoustic baffles.",
      },
      {
        src: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=80",
        alt: "Covered perimeter colonnade flanking landscaped courtyard with native tropical vegetation",
        aspectRatio: "4/5",
        caption: "The 32-metre covered colonnade linking family wings.",
      },
    ],
    drawings: [
      {
        title: "Master Site & Pavilion Layout",
        type: "Site Diagram",
        caption: "Zoning diagram showing separation between public pavilion and private family pods.",
      },
    ],
    featuredOnHome: true,
    order: 2,
  },
  {
    id: "prj-axis-pavilion",
    slug: "axis-corporate-headquarters",
    title: "The Axis Commercial Studio",
    subtitle: "A modern steel-framed administrative and design hub with thermal solar facade",
    typology: "Commercial",
    location: "Central Karnataka",
    year: "2023",
    area: "12,500 SQ.FT",
    status: "Completed",
    leadArchitect: "Linehaus Practice Group",
    summary:
      "A multi-level commercial office building and client presentation hub designed to showcase structural steel expression, flexible open-plan workspaces, and an energy-efficient ceramic louver envelope.",
    concept:
      "Rejecting standard curtain-wall glass boxes that overheat in the Indian climate, Axis employs an articulated double skin: internal high-performance acoustic glazing protected by an exterior grid of terracotta and slate-blue aerofoil louvers.",
    challengesAndSolutions: {
      challenge:
        "High internal heat gain from computer equipment and commercial occupancy on an urban corner site with intense eastern morning and western afternoon exposure.",
      solution:
        "Engineered motorized responsive solar shading louvers synced with solar angles, achieving daylight autonomy for 85% of working hours while reducing HVAC energy consumption by 42%.",
    },
    climaticStrategy:
      "External terracotta louvers reflect 72% of solar thermal gain before reaching the building envelope; central atrium creates an internal suction column for night cooling purge cycles.",
    materiality: [
      "Exposed Structural Steel Frame",
      "Extruded Terracotta Shading Louvers",
      "Polished Industrial Concrete Flooring",
      "Low-Iron Insulated Double Glazing",
      "Sound-Absorbing Wood Wool Ceiling Panels",
    ],
    metrics: [
      { label: "Built Area", value: "12,500 SQ.FT" },
      { label: "Floors", value: "G + 3 Levels" },
      { label: "Typology", value: "Commercial Office" },
      { label: "Completion", value: "2023" },
    ],
    isPlaceholderAsset: true,
    assetSpec: {
      recommendedResolution: "2400 × 1500 px (Hero: 16/10)",
      aspectRatio: "16/10",
      notes: "Architectural elevation capturing the rhythmic louver facade and corner entrance volume.",
    },
    heroImage: {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80",
      alt: "Geometric modern architectural facade with rhythmic vertical fins and glass under neutral daylight",
      aspectRatio: "16/10",
      caption: "Street elevation illustrating the rhythmic solar shading envelope.",
      isHero: true,
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
        alt: "Light-filled commercial atrium with floating steel staircase and polished concrete floors",
        aspectRatio: "16/9",
        caption: "Double-height central collaborative atrium and circulation spine.",
      },
      {
        src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80",
        alt: "Open-plan creative workspace with industrial exposed soffits and bespoke oak workstations",
        aspectRatio: "4/5",
        caption: "Workspace layout optimized for natural cross ventilation and diffused daylight.",
      },
    ],
    featuredOnHome: true,
    order: 3,
  },
  {
    id: "prj-slate-penthouse",
    slug: "slate-penthouse-interiors",
    title: "The Slate Interior Sanctuary",
    subtitle: "A turnkey residential interior featuring muted slate tones and architectural joinery",
    typology: "Interior Architecture",
    location: "Bangalore / Karnataka",
    year: "2024",
    area: "3,400 SQ.FT",
    status: "Completed",
    leadArchitect: "Linehaus Practice Group",
    summary:
      "A complete interior architectural overhaul transforming an open-plan apartment floor into an articulate sanctuary of tactile plaster, dark slate accents, and integrated concealed storage.",
    concept:
      "Every partition wall was re-engineered as a spatial piece of furniture. Instead of standard drywall, rooms are delineated by full-height cabinetry finished in tactile lime wash, smoked oak, and muted slate-blue lacquers.",
    challengesAndSolutions: {
      challenge:
        "Low existing ceiling heights (2.75m) and awkwardly placed structural columns that fragmented the main living zones.",
      solution:
        "Enclosed structural columns within functional service pilasters holding concealed AC ducts and linear downlighting, creating continuous ceiling planes with zero bulkheads.",
    },
    climaticStrategy:
      "Continuous airflow channels above sliding pocket partitions maintain uninterrupted natural cooling from balcony fenestrations.",
    materiality: [
      "Custom Slate-Blue Matte Millwork",
      "Hand-Applied Lime Plaster (Warm Off-White)",
      "Smoked European Oak Veneers",
      "Honed Grey Flurried Marble",
      "Recessed Architectural Architectural Trimless Lighting",
    ],
    metrics: [
      { label: "Interior Area", value: "3,400 SQ.FT" },
      { label: "Typology", value: "Turnkey Interior" },
      { label: "Execution", value: "Turnkey Architecture" },
      { label: "Completion", value: "2024" },
    ],
    isPlaceholderAsset: true,
    assetSpec: {
      recommendedResolution: "2400 × 1500 px (Hero: 16/10)",
      aspectRatio: "16/10",
      notes: "Editorial shot of the open living pavilion showing seamless slate joinery.",
    },
    heroImage: {
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80",
      alt: "Minimalist contemporary luxury interior with tactile lime-wash walls, bespoke timber joinery, and slate accents",
      aspectRatio: "16/10",
      caption: "Living room vignette highlighting bespoke slate millwork and recessed illumination.",
      isHero: true,
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80",
        alt: "Serene bedroom with floor-to-ceiling textured linen drapery and minimalist platform bed",
        aspectRatio: "4/5",
        caption: "Private bedroom suite with acoustic fabric panels and concealed wardrobe entries.",
      },
      {
        src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80",
        alt: "Minimalist monolithic kitchen island in honed stone with integrated brass fixtures",
        aspectRatio: "16/9",
        caption: "Monolithic stone kitchen island and integrated joinery wall.",
      },
    ],
    featuredOnHome: true,
    order: 4,
  },
  {
    id: "prj-laterite-villa",
    slug: "laterite-ridge-residence",
    title: "The Laterite Ridge Villa",
    subtitle: "A site-responsive hillside dwelling anchored into red bedrock with tiered gardens",
    typology: "Luxury Residential",
    location: "Western Ghats Slopes, Karnataka",
    year: "2025",
    area: "6,100 SQ.FT",
    status: "Under Construction",
    leadArchitect: "Linehaus Practice Group",
    summary:
      "A rugged hillside villa carved directly into natural laterite stone strata, stepping down the natural slope across three terraced levels that overlook coffee plantations.",
    concept:
      "Rather than leveling the natural topography, the building foundation is stepped, retaining natural boulders within courtyards and utilizing stone excavated on-site for structural load-bearing retaining walls.",
    challengesAndSolutions: {
      challenge:
        "Extremely steep 22-degree terrain slope with high groundwater runoff during peak monsoon seasons.",
      solution:
        "Integrated terraced gabion retaining walls with bioswales that channel storm runoff into sub-surface rainwater filtration cisterns, recharging local aquifer levels.",
    },
    climaticStrategy:
      "Earth-sheltered lower levels benefit from geothermal thermal stability; upper levels capture prevailing valley wind currents through louvers.",
    materiality: [
      "Quarried Site-Specific Laterite Blocks",
      "Off-Shutter Exposed Concrete Slabs",
      "Rough-Hewn Kota Stone Slabs",
      "Deep Weathering Corten Steel Balustrades",
    ],
    metrics: [
      { label: "Built Area", value: "6,100 SQ.FT" },
      { label: "Site Area", value: "1.8 ACRES" },
      { label: "Typology", value: "Hillside Villa" },
      { label: "Status", value: "Under Construction" },
    ],
    isPlaceholderAsset: true,
    assetSpec: {
      recommendedResolution: "2400 × 1500 px (Hero: 16/10)",
      aspectRatio: "16/10",
      notes: "Dramatic angled perspective showing the stepped architecture embedded into the slope.",
    },
    heroImage: {
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80",
      alt: "Modern luxury hillside villa embedded in lush landscape with dramatic cantilever terraces",
      aspectRatio: "16/10",
      caption: "Stepped elevation anchored into the hillside terrain.",
      isHero: false,
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
        alt: "Outdoor covered lounge terrace overlooking forested valley",
        aspectRatio: "16/9",
        caption: "Covered lounge deck framing continuous views of the Western Ghats canopy.",
      },
    ],
    featuredOnHome: false,
    order: 5,
  },
  {
    id: "prj-monsoon-pavilion",
    slug: "the-monsoon-garden-pavilion",
    title: "The Monsoon Garden Pavilion",
    subtitle: "A landscape architecture intervention featuring retention water courts and stone paths",
    typology: "Landscape",
    location: "Bhadravati, Karnataka",
    year: "2023",
    area: "18,000 SQ.FT",
    status: "Completed",
    leadArchitect: "Linehaus Practice Group",
    summary:
      "A 18,000 sq.ft ecological landscape intervention transforming an unshaded suburban plot into a shaded microclimate oasis with seasonal retention pools and native Western Ghats flora.",
    concept:
      "Water is celebrated rather than drained away. Monsoon runoff fills stepped reflection pools lined with Sadarahalli granite before cascading through gravel bio-filters to recharge surrounding groundwells.",
    challengesAndSolutions: {
      challenge:
        "Severe waterlogging during July–September monsoons followed by extreme soil dehydration during peak dry season.",
      solution:
        "Crafted a tiered rain garden system with native drought-tolerant grasses and deep-rooted moisture retention shade trees that require zero municipal water irrigation once established.",
    },
    climaticStrategy:
      "Evaporative cooling from retention water courts lowers air temperature around the adjacent residential pavilions by up to 3°C.",
    materiality: [
      "Flamed Grey Granite Walkways",
      "Native Laterite Dry-Stack Walls",
      "Porous Gravel Infiltration Beds",
      "Minimalist Architectural Water Weirs",
    ],
    metrics: [
      { label: "Site Footprint", value: "18,000 SQ.FT" },
      { label: "Typology", value: "Landscape & Ecology" },
      { label: "Rainwater Recharge", value: "120,000 L / Season" },
      { label: "Completion", value: "2023" },
    ],
    isPlaceholderAsset: true,
    assetSpec: {
      recommendedResolution: "2400 × 1500 px (Hero: 16/10)",
      aspectRatio: "16/10",
      notes: "Landscape architectural frame with water feature and stone pathways.",
    },
    heroImage: {
      src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=2000&q=80",
      alt: "Lush architectural garden courtyard with stone paving and quiet reflection water elements",
      aspectRatio: "16/10",
      caption: "Stepped granite water courts retaining monsoon rainwater.",
      isHero: false,
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
        alt: "Pathways flanked by lush native tropical greenery and subtle path illumination",
        aspectRatio: "4/5",
        caption: "Granite pathways winding through native endemic understory plantings.",
      },
    ],
    featuredOnHome: false,
    order: 6,
  },
];
