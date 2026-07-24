import { Project, Service, SkillCategory, PortfolioTip } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'civil-calc-pro',
    title: 'Civil Calculator Pro (PWA)',
    category: 'civil-tech',
    shortDesc: '50+ civil engineering calculators in a single-file PWA with AI assistance, bilingual Tamil/English support, and PDF exports.',
    fullDesc: 'A comprehensive mobile-first PWA crafted for contractors, engineers, and site supervisors across Tamil Nadu. Features 50+ specialized formulas including concrete mix design, RCC steel weight, brickwork mortar, excavation earthwork, unit conversions, and automated WhatsApp quote dispatch.',
    tags: ['HTML5/PWA', 'Three.js Visuals', 'Gemini AI API', 'Chart.js', 'Tamil/English'],
    icon: '🧮',
    color: 'from-amber-500/20 to-orange-600/10',
    accentHex: 0xE9A520,
    geometryType: 'building',
    metrics: [
      { label: 'Calculators', value: '50+' },
      { label: 'Active Users', value: '2,400+' },
      { label: 'Languages', value: 'Tamil & EN' }
    ]
  },
  {
    id: 'civil-bill-pro',
    title: 'CivilBill Pro Dashboard',
    category: 'civil-tech',
    shortDesc: 'Construction project billing system with 11-stage progress tracking, Chart.js analytics, GST invoice generation, and Tamil labels.',
    fullDesc: 'Designed to solve payment delay bottlenecks for regional construction firms. Features multi-stage milestone tracking (Foundation, Plinth, Lintel, Slab, Finishing), live expense analytics, GST compliant billing, and amount-in-words conversion in Tamil rupees.',
    tags: ['Chart.js', 'GST Invoicing', 'Tamil i18n', 'PDF Export'],
    icon: '🧾',
    color: 'from-purple-500/20 to-indigo-600/10',
    accentHex: 0x8B7CF6,
    geometryType: 'torusKnot',
    metrics: [
      { label: 'Milestones', value: '11 Stages' },
      { label: 'Invoices Issued', value: '₹1.2Cr+' },
      { label: 'Time Saved', value: '75%' }
    ]
  },
  {
    id: 'ecom-catalog-suite',
    title: 'E-Commerce Catalog & SEO Suite',
    category: 'e-commerce',
    shortDesc: 'End-to-end cataloging & Amazon/Flipkart/Meesho SEO optimization for 500+ SKU product lines with AI photography enhancement.',
    fullDesc: 'Complete digital store launch strategy for brands scaling on Indian marketplaces. Includes keyword harvest, high-converting bullet copy, A+ EBC content design, automated competitor price monitoring, and AI product photography studio workflows.',
    tags: ['Amazon SEO', 'Flipkart Catalog', 'Meesho Growth', 'AI Photo Studio'],
    icon: '📦',
    color: 'from-orange-500/20 to-amber-600/10',
    accentHex: 0xF97316,
    geometryType: 'box',
    metrics: [
      { label: 'Optimized SKUs', value: '500+' },
      { label: 'Sales Growth', value: '3.4x' },
      { label: 'Platforms', value: 'AMZ / FK / MS' }
    ]
  },
  {
    id: 'school-institution-web',
    title: 'Institution & School Web Portals',
    category: 'school',
    shortDesc: 'High-converting, dark navy and gold themed web portals for educational institutions with mobile-first WhatsApp admissions CTA.',
    fullDesc: 'Custom web platforms built for schools and colleges across Madurai and Sivagangai regions. Includes responsive photo galleries, event calendars, fee structure calculators, interactive faculty directories, and instant WhatsApp inquiry widgets.',
    tags: ['Single-File HTML', 'CSS Grid/Flex', 'WhatsApp API', 'SEO Optimized'],
    icon: '🏫',
    color: 'from-blue-500/20 to-cyan-600/10',
    accentHex: 0x3B82F6,
    geometryType: 'sphere',
    metrics: [
      { label: 'Load Speed', value: '< 0.8s' },
      { label: 'Admissions Inquiry Boost', value: '+140%' },
      { label: 'Lighthouse Score', value: '98/100' }
    ]
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 's-ecom',
    icon: '🛒',
    title: 'E-Commerce Marketplace SEO',
    desc: 'Amazon, Flipkart, and Meesho catalog optimization. Rank higher on search results with keyword-dense titles, backend search terms, and A+ content.',
    features: ['Keyword Research & Harvesting', 'Backend Search Term Optimization', 'A+ / EBC Design Wireframes', 'Product Listing Audit'],
    badge: 'Popular'
  },
  {
    id: 's-web',
    icon: '🌐',
    title: 'Web Application Development',
    desc: 'Ultra-fast, responsive web apps and single-page tools built with React, Three.js, Tailwind CSS, and zero bloated frameworks.',
    features: ['Custom Interactive Web Tools', 'Progressive Web Apps (PWA)', 'High-Conversion Landing Pages', 'Sub-second Load Times']
  },
  {
    id: 's-civil',
    icon: '🏗️',
    title: 'Civil-Tech & Site Estimators',
    desc: 'Custom digital tools built specifically for Tamil Nadu civil contractors, architects, and building material suppliers.',
    features: ['Steel & Concrete Calculators', 'Stage-wise Bill Generator', 'Bilingual Tamil / English UI', 'PDF & WhatsApp Direct Export'],
    badge: 'Specialized'
  },
  {
    id: 's-photo',
    icon: '📸',
    title: 'AI Product Photography Studio',
    desc: 'AI-assisted studio product background generation, lighting harmonization, and lifestyle placement for marketplace listings.',
    features: ['Studio Background Replacement', 'Shadow & Reflection Synth', 'High-Res Marketplace Scaling', '3D Product Rendering Prep']
  },
  {
    id: 's-seo',
    icon: '🔍',
    title: 'Search & Competitor Intelligence',
    desc: 'In-depth marketplace and local search keyword analysis, competitor price tracking, and ranking trajectory reports.',
    features: ['Search Volume Analytics', 'Competitor Gap Analysis', 'Click-Through Rate (CTR) Boost', 'Conversion Optimization']
  },
  {
    id: 's-inst',
    icon: '🏫',
    title: 'Institutional Web Systems',
    desc: 'Luxury dark-and-gold themed websites for schools, academies, and local businesses in the Sivagangai & Madurai regions.',
    features: ['Mobile-First Experience', 'WhatsApp Lead Conversion', 'Bilingual Language Toggle', 'Instant Search & Filter']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: '3D & Frontend Engineering',
    skills: [
      { name: 'Three.js / WebGL', level: 88, is3dOrbital: true },
      { name: 'React & TypeScript', level: 92, is3dOrbital: true },
      { name: 'Tailwind CSS v4', level: 95, is3dOrbital: true },
      { name: 'HTML5 / CSS3 / PWA', level: 98, is3dOrbital: true },
      { name: 'GLSL Custom Shaders', level: 82, is3dOrbital: true },
      { name: 'Motion / Framer', level: 90 }
    ]
  },
  {
    title: 'Civil-Tech & Math Logic',
    skills: [
      { name: 'Structural Estimation', level: 95 },
      { name: 'RCC Steel / Concrete Math', level: 94 },
      { name: 'Stage Billing Algorithms', level: 90 },
      { name: 'jsPDF / Invoice Engine', level: 88 },
      { name: 'Tamil i18n & i10n', level: 96 }
    ]
  },
  {
    title: 'E-Commerce Growth & SEO',
    skills: [
      { name: 'Amazon Seller Central SEO', level: 96, is3dOrbital: true },
      { name: 'Flipkart Catalog Manager', level: 92 },
      { name: 'Meesho Product Ranking', level: 90 },
      { name: 'Keyword Harvest & CTR', level: 94 },
      { name: 'AI Product Photo Studio', level: 89 }
    ]
  }
];

export const PORTFOLIO_TIPS: PortfolioTip[] = [
  {
    id: 'tip-1',
    category: '3D Animations',
    title: 'Interactive Morphing Particle Field',
    description: 'Upgrade the static rotating icosahedron wireframe to a dynamic particle field that smoothly morphs between 5 shapes (Sphere, Civil Blueprint Grid, E-Commerce Box, DNA Helix, Wave Matrix) based on section scroll or click.',
    actionItem: 'Implement particle position lerping in GLSL vertex shader or Three.js BufferGeometry position attribute interpolation.',
    impactLevel: 'Game Changer',
    codeSnippet: `// Smooth morphing between target positions
const currentPos = particleGeo.attributes.position;
for(let i=0; i < count; i++) {
  currentPos.array[i*3] += (targetPos[i*3] - currentPos.array[i*3]) * 0.05;
}`,
    status: 'in_demo'
  },
  {
    id: 'tip-2',
    category: '3D Animations',
    title: 'Interactive 3D Skill Orbiters & Mouse Gravity',
    description: 'Create orbiting 3D geometric satellites around hero elements with mouse-gravitational displacement so hovering over skills gently pulls the 3D icons toward the cursor.',
    actionItem: 'Use Raycaster or mouse vector projection in Three.js animation loop to calculate spring physics velocity.',
    impactLevel: 'High',
    codeSnippet: `// Mouse force vector
const dx = mouse3D.x - mesh.position.x;
const dy = mouse3D.y - mesh.position.y;
mesh.position.x += dx * 0.02;`,
    status: 'in_demo'
  },
  {
    id: 'tip-3',
    category: 'Visual Design',
    title: 'Glassmorphic 3D Card Depth & Light Flares',
    description: 'Enhance tilt cards with dynamic specular light reflection maps and physical 3D object popouts (e.g. rotating 3D building model for Civil tools, rotating 3D Amazon box for E-comm).',
    actionItem: 'Combine CSS 3D transforms (preserve-3d) with mini interactive WebGL canvases embedded in card thumbnails.',
    impactLevel: 'High',
    status: 'in_demo'
  },
  {
    id: 'tip-4',
    category: 'Conversion & UX',
    title: 'Live Working Tool Demos in Portfolio',
    description: 'Clients convert 3x faster when they can directly test your work. Embed an interactive Civil Material Estimator and an Amazon SEO Score Analyzer right inside your portfolio.',
    actionItem: 'Add real-time calculation widgets that output downloadable PDF quotes and WhatsApp pre-filled order messages.',
    impactLevel: 'Game Changer',
    status: 'in_demo'
  },
  {
    id: 'tip-5',
    category: '3D Animations',
    title: 'Scroll-Triggered Camera Orbit Pathways',
    description: 'Connect scrolling progress to 3D camera coordinates so scrolling down rotates the 3D scene smoothly around different camera angles.',
    actionItem: 'Bind scroll percentage to Three.js camera radius, theta, and phi angles using smooth damping.',
    impactLevel: 'High',
    codeSnippet: `// Camera orbit on scroll
const targetAngle = scrollPercent * Math.PI * 2;
camera.position.x = Math.sin(targetAngle) * radius;
camera.position.z = Math.cos(targetAngle) * radius;`,
    status: 'in_demo'
  },
  {
    id: 'tip-6',
    category: 'E-Commerce Tech',
    title: 'Interactive 3D Product Inspector Showcase',
    description: 'Show marketplace clients that you can create 3D interactive product previews for Amazon A+ Content / Shopify GLTF viewers.',
    actionItem: 'Incorporate Three.js GLTF/OBJ loaders with lighting controls (Studio, Warm Gold, Cyber Glow).',
    impactLevel: 'Crucial',
    status: 'recommended'
  }
];
