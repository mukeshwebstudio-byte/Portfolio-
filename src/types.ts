export interface Project {
  id: string;
  title: string;
  category: 'civil-tech' | 'e-commerce' | 'web-dev' | 'school';
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  icon: string;
  color: string;
  accentHex: number;
  geometryType: 'box' | 'building' | 'sphere' | 'torusKnot';
  metrics: { label: string; value: string }[];
  liveUrl?: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  desc: string;
  features: string[];
  badge?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; icon?: string; is3dOrbital?: boolean }[];
}

export interface ThreeSceneSettings {
  geometryShape: 'icosahedron' | 'torusKnot' | 'doubleRing' | 'hyperCube' | 'civilGrid';
  particleMorph: 'cloud' | 'sphere' | 'wave' | 'dna' | 'cube';
  particleCount: number;
  wireframe: boolean;
  colorTheme: 'goldOrange' | 'cyberCyan' | 'neonPurple' | 'emeraldGreen' | 'solarRed';
  rotationSpeed: number;
  mouseInteraction: 'gravitate' | 'repel' | 'rotateCamera' | 'none';
  bloomGlow: boolean;
}

export interface PortfolioTip {
  id: string;
  category: '3D Animations' | 'Visual Design' | 'E-Commerce Tech' | 'Conversion & UX';
  title: string;
  description: string;
  actionItem: string;
  impactLevel: 'High' | 'Game Changer' | 'Crucial';
  codeSnippet?: string;
  status: 'recommended' | 'in_demo';
}
