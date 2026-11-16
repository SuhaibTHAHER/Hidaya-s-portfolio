export const personalInfo = {
  name: 'Hidaya Thaher',
  /** Arabic spellings of her name (both are in use), for structured data and the Arabic pages. */
  nameAr: 'هداية ظاهر',
  nameAlternates: ['هداية ظاهر', 'هدايه ظاهر'],
  title: 'Interior Designer',
  tagline: 'Transforming Spaces into Timeless Experiences',
  location: 'Nablus, Palestine',
  email: 'hidayathaher@gmail.com',
  phone: '+970 598 305 271',
  behance: 'https://behance.net/hidayathaher',
  /** Leave empty until a real CV PDF is added to /public; every CV button hides itself while empty. */
  cvUrl: '',
  portrait: {
    src: '/images/hidaya-thaher-portrait.jpg',
    width: 690,
    height: 1082,
    alt: 'Portrait of Hidaya Thaher, interior designer based in Nablus, Palestine',
    altAbout: 'Hidaya Thaher in a burgundy blazer and beige hijab, photographed outdoors',
  },
  bio: `I'm Hidaya Thaher, an interior designer based in Nablus, Palestine. I hold a Bachelor of Interior Design from An-Najah National University (2022–2025), completed in three years, and work in AutoCAD, 3ds Max, V-Ray, Photoshop and Illustrator — from space planning to photorealistic 3D visualization.

I believe that every space carries the potential to tell a story — one that resonates with the people who inhabit it. My approach to design begins long before the first sketch: it starts with listening, observing, and understanding the lives that will unfold within the walls I shape.

Born and raised in Nablus, Palestine, I developed an early fascination with how architecture and interiors influence the way we feel, move, and connect. This curiosity led me to pursue a Bachelor of Interior Design at An-Najah National University, which I completed in just three years — driven by an intensity of passion that made every studio late-night feel purposeful rather than exhausting.

Working across homes, offices, retail and hospitality spaces, I've come to understand that great design is never about trends. It's about truth — the truth of the client's vision, the truth of the space, and the truth of the materials. I work at the intersection of human-centered thinking and aesthetic precision, creating environments that are as functional as they are beautiful.

When I'm not designing, I'm traveling, photographing spaces that inspire me, or buried in research on sustainable materials and emerging design movements. Everything feeds the work.`,
  languages: [
    { name: 'Arabic', level: 'Native', percentage: 100 },
    { name: 'English', level: 'Professional Working Proficiency', percentage: 85 },
  ],
}

export const stats = [
  { value: 20, suffix: '+', label: 'Projects Completed', short: 'Projects' },
  { value: 20, suffix: '+', label: 'Happy Clients', short: 'Clients' },
  { value: 2, suffix: '', label: 'Years of Experience', short: 'Years Experience' },
]

export const skills = {
  design: [
    { name: 'Interior Design', level: 95 },
    { name: 'Space Planning', level: 92 },
    { name: 'Residential Design', level: 95 },
    { name: 'Commercial Design', level: 88 },
    { name: 'Hospitality Design', level: 82 },
    { name: 'Lighting Design', level: 85 },
    { name: 'Color Theory', level: 93 },
    { name: 'Material Selection', level: 90 },
    { name: 'Concept Development', level: 94 },
    { name: 'Sustainable Design', level: 78 },
    { name: 'Furniture Layout', level: 91 },
  ],
  software: [
    { name: 'AutoCAD', level: 92 },
    { name: '3ds Max', level: 85 },
    { name: 'V-Ray', level: 82 },
    { name: 'Adobe Photoshop', level: 90 },
    { name: 'Adobe Illustrator', level: 85 },
  ],
  business: [
    { name: 'Project Management', level: 88 },
    { name: 'Client Communication', level: 92 },
    { name: 'Team Collaboration', level: 90 },
    { name: 'Technical Documentation', level: 85 },
    { name: 'Presentation Design', level: 91 },
  ],
}

export const experience = [
  {
    id: 1,
    role: 'Junior Interior Designer',
    company: 'Elegant Spaces Studio',
    location: 'Nablus, Palestine',
    period: '2023 — 2024',
    type: 'Full-time',
    description: 'Joined a boutique design studio known for its refined approach to residential and hospitality interiors. Contributed to projects ranging from private villas to boutique guest houses across the West Bank.',
    achievements: [
      'Designed an original furniture piece inspired by a creative concept — demonstrating a rare ability to translate references and ideas into fully realized, buildable furniture',
      'Participated in the An-Najah National University Exhibition in Nablus (2026), where the furniture piece was publicly displayed and sold at the exhibition',
    ],
    skills: ['AutoCAD', 'Furniture Design', 'Concept Development', 'Technical Drawing', '3ds Max'],
  },
  {
    id: 2,
    role: 'Interior Designer',
    company: 'Abwab',
    location: 'Nablus, Palestine',
    period: 'Early 2025 — 2026',
    type: 'Full-time',
    description: 'Worked at Abwab, a doors and joinery company based in Nablus, designing custom doors tailored to each client\'s requirements. Developed a strong understanding of material properties, manufacturing constraints, and client-centered design in a production environment.',
    achievements: [
      'Designed bespoke door solutions for a diverse client base, translating individual preferences and architectural contexts into detailed specifications',
      'Collaborated directly with clients from brief to final design, managing expectations and refining concepts through iterative feedback',
      'Developed technical drawings for manufacturing, ensuring designs were both aesthetically refined and production-ready',
      'Built expertise in wood species, hardware systems, and finishing techniques through hands-on project work',
    ],
    skills: ['Custom Design', 'Client Consultation', 'Technical Drawing', 'AutoCAD', 'Material Specification'],
  },
  {
    id: 3,
    role: 'Freelance Interior Designer',
    company: 'Independent Practice',
    location: 'Palestine & Remote',
    period: '2025 — Present',
    type: 'Freelance',
    description: 'Independent interior design practice offering residential and commercial interior design, space planning and photorealistic 3D visualization, for clients in Palestine and remotely.',
    achievements: [] as string[],
    skills: ['Design Project Management', 'Remote Consultation', 'Renovation Planning', 'Furniture Selection', 'Brand Identity'],
  },
]

export const education = [
  {
    id: 1,
    institution: 'An-Najah National University',
    degree: 'Bachelor of Interior Design',
    period: '2022 — 2025',
    location: 'Nablus, Palestine',
    distinction: 'Completed in 3 Years',
    note: 'Completed the standard four-year program in three years through intensive study.',
    highlights: ['Design Studio Work', 'Space Planning & Ergonomics', 'Materials & Sustainability', 'Digital Visualization'],
    icon: '🎓',
  },
  {
    id: 2,
    institution: 'Yasid Secondary School for Girls',
    degree: 'Secondary Education',
    period: '2009 — 2022',
    location: 'Nablus, Palestine',
    distinction: '',
    note: 'Foundation education with strong focus on science, mathematics, and arts — disciplines that continue to inform spatial thinking and design methodology.',
    highlights: [],
    icon: '🏫',
  },
]

export const services: { id: number; title: string; page?: string; description: string; icon: string; features: string[] }[] = [
  {
    id: 1,
    title: 'Residential Interior Design',
    page: 'residential-interior-design',
    description: 'Complete design solutions for homes, villas, and apartments — from concept through construction drawings to a final styling plan.',
    icon: 'Home',
    features: ['Concept Development', 'Space Planning', 'Furniture Selection', 'Material Palette', 'Lighting Design', 'Styling Plan'],
  },
  {
    id: 2,
    title: 'Commercial Interior Design',
    page: 'commercial-interior-design',
    description: 'Strategic design for offices, retail spaces, and hospitality venues that balances brand identity with functional excellence.',
    icon: 'Building2',
    features: ['Brand-Aligned Design', 'Workflow Optimization', 'Wayfinding', 'Acoustic Planning', 'Fixture Specification'],
  },
  {
    id: 3,
    title: 'Space Planning',
    description: 'Precise spatial analysis and layout optimization to maximize functionality, flow, and quality of experience.',
    icon: 'Grid',
    features: ['Floor Plan Analysis', 'Traffic Flow Study', 'Zoning Strategy', 'Ergonomic Planning', 'AutoCAD Drawings'],
  },
  {
    id: 4,
    title: '3D Visualization',
    page: '3d-visualization',
    description: 'Photorealistic renders and walkthroughs that let you experience your space before a single element is purchased.',
    icon: 'Box',
    features: ['Photorealistic Renders', 'Virtual Walkthroughs', 'Material Simulations', 'Lighting Studies', 'Multiple Viewpoints'],
  },
  {
    id: 5,
    title: 'Material Consultation',
    description: 'Expert guidance on materials, finishes, and textures that harmonize aesthetically and perform beautifully over time.',
    icon: 'Layers',
    features: ['Sourcing Recommendations', 'Finish Selection', 'Texture Curation', 'Durability Assessment', 'Finish Schedules'],
  },
  {
    id: 6,
    title: 'Design Consultation',
    description: 'Focused one-session consultations for clients who need expert direction, fresh perspective, or project troubleshooting.',
    icon: 'MessageCircle',
    features: ['Space Assessment', 'Design Direction', 'Priority Roadmap', 'Vendor Recommendations', 'Follow-up Notes'],
  },
  {
    id: 7,
    title: 'Furniture Selection',
    description: 'Curated furniture selection and specification that balances beauty, durability, and budget precision.',
    icon: 'Armchair',
    features: ['Style Curation', 'Budget Awareness', 'Vendor Recommendations', 'Custom Specification', 'Furniture Schedules'],
  },
  {
    id: 8,
    title: 'Renovation Planning',
    description: 'Comprehensive renovation roadmaps with phased timelines, contractor briefs, and budget planning.',
    icon: 'Hammer',
    features: ['Scope Definition', 'Phased Planning', 'Contractor Briefs', 'Budget Planning'],
  },
  {
    id: 9,
    title: 'Lighting Design',
    description: 'Layered lighting schemes that set the right mood for every space and occasion while achieving energy efficiency.',
    icon: 'Lightbulb',
    features: ['Ambient Lighting', 'Task Lighting', 'Accent Lighting', 'Natural Light Optimization', 'Smart Controls'],
  },
  {
    id: 10,
    title: 'Interior Styling',
    description: 'Finishing touches and accessory curation that complete a space and bring the design vision to its full expression.',
    icon: 'Sparkles',
    features: ['Art Selection', 'Accessory Curation', 'Plant Styling', 'Textile Layering', 'Styling Guidance'],
  },
]

export const expertise = [
  'Residential Design', 'Commercial Design', 'Space Planning',
  'Material Selection', 'Interior Styling', 'Human-Centered Design',
  'Visual Storytelling', 'Lighting Design',
]

export const interests = [
  'Interior Design Trends',
  'Architecture',
  'Furniture Design',
  'Luxury Spaces',
  'Photography',
  'Travel',
  'Art & Creativity',
  'Sustainable Design',
  'Home Styling',
  'Visual Storytelling',
  'Design Research',
  'Modern Living Concepts',
]
