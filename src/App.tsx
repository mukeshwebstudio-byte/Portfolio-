import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring } from 'motion/react';
import { ThreeSceneSettings, Project } from './types';
import { ThreeHeroCanvas } from './components/ThreeHeroCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { CivilTechToolDemo } from './components/CivilTechToolDemo';
import { EcomSeoScorerDemo } from './components/EcomSeoScorerDemo';
import { ProjectCard3D } from './components/ProjectCard3D';
import { ProjectModal } from './components/ProjectModal';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Interactive3DStudio } from './components/Interactive3DStudio';
import { PortfolioAnalysisModal } from './components/PortfolioAnalysisModal';
import { PROJECTS_DATA } from './data/portfolioData';
import { Sliders, Sparkles, Layers, Cpu } from 'lucide-react';

export default function App() {
  const [threeSettings, setThreeSettings] = useState<ThreeSceneSettings>({
    geometryShape: 'icosahedron',
    particleMorph: 'cloud',
    particleCount: 1200,
    wireframe: true,
    colorTheme: 'goldOrange',
    rotationSpeed: 1.0,
    mouseInteraction: 'gravitate',
    bloomGlow: true,
  });

  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isStudioOpen, setIsStudioOpen] = useState<boolean>(false);
  const [isAnalysisOpen, setIsAnalysisOpen] = useState<boolean>(false);

  // Mouse Glow Trailing Coordinates
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  // Scroll progress spring
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Lenis Smooth Inertial Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Mouse Glow Follower
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Section Observer for 3D Particle Auto-Morph
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'services', 'live-tools', 'projects', 'skills', 'contact'];
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= 0) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleUpdateSettings = (newSettings: Partial<ThreeSceneSettings>) => {
    setThreeSettings((prev) => ({ ...prev, ...newSettings }));
  };

  return (
    <div className="min-h-screen bg-[#04070F] text-slate-100 font-inter relative selection:bg-amber-500 selection:text-slate-950 overflow-x-hidden">
      {/* Scroll Progress Bar at Top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-purple-500 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Trailing Cursor Light Glow */}
      <div
        className="pointer-events-none fixed z-30 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 transition-transform duration-75 ease-out hidden md:block"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          background: 'radial-gradient(circle, rgba(233,165,32,0.18) 0%, rgba(249,115,22,0.06) 45%, transparent 70%)',
        }}
      />

      {/* 3D WebGL Background Canvas */}
      <ThreeHeroCanvas settings={threeSettings} activeSection={activeSection} />

      {/* Navigation */}
      <Navbar
        onOpenStudio={() => setIsStudioOpen(true)}
        onOpenAnalysis={() => setIsAnalysisOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection
          onOpenStudio={() => setIsStudioOpen(true)}
          onOpenAnalysis={() => setIsAnalysisOpen(true)}
        />

        <StatsSection />

        <AboutSection />

        <ServicesSection />

        {/* Live Working Tools Showcase Section */}
        <section id="live-tools" className="py-20 bg-[#070D1C]/80 border-y border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400">// Interactive Demos</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-space mt-1">
                Live Working <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Tool Showcase</span>
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2">
                Test my custom-built civil estimation logic and e-commerce SEO indexing tools directly below.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <CivilTechToolDemo />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <EcomSeoScorerDemo />
            </motion.div>
          </div>
        </section>

        {/* Projects Showcase Section */}
        <section id="projects" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400">// Featured Work</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-space mt-1">
                Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Projects</span>
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2">
                Real tools built for contractors, e-commerce sellers, and educational institutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS_DATA.map((proj, idx) => (
                <motion.div
                  key={proj.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <ProjectCard3D
                    project={proj}
                    onSelect={(p) => setSelectedProject(p)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <SkillsSection />

        <ContactSection />
      </main>

      <Footer />

      {/* Floating 3D Controls Button (Bottom-Right) */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsStudioOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 flex items-center gap-2 group font-mono text-xs font-bold"
        title="Tweak 3D WebGL Canvas"
      >
        <Sliders className="w-5 h-5 group-hover:rotate-45 transition-transform" />
        <span className="hidden sm:inline">3D Controls</span>
      </motion.button>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Live 3D Studio Drawer */}
      <Interactive3DStudio
        settings={threeSettings}
        onUpdateSettings={handleUpdateSettings}
        isOpen={isStudioOpen}
        onClose={() => setIsStudioOpen(false)}
      />

      {/* 3D Audit & Tips Modal */}
      <PortfolioAnalysisModal
        isOpen={isAnalysisOpen}
        onClose={() => setIsAnalysisOpen(false)}
      />
    </div>
  );
}
