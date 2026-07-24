import React, { useRef, useState } from 'react';
import { Project } from '../types';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';

interface ProjectCard3DProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard3D: React.FC<ProjectCard3DProps> = ({ project, onSelect }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [shinePos, setShinePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width - 0.5) * 2;
    const py = (y / rect.height - 0.5) * 2;

    setRotX(-py * 10);
    setRotY(px * 10);
    setShinePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setRotX(0);
    setRotY(0);
    setShinePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(project)}
      style={{
        transform: `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0px)`,
        transition: rotX === 0 ? 'all 0.5s ease' : 'none',
      }}
      className="group relative rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-500/40 p-6 flex flex-col justify-between cursor-pointer overflow-hidden backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300"
    >
      {/* Specular Shine Overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-2xl z-10"
        style={{
          background: `radial-gradient(circle at ${shinePos.x}% ${shinePos.y}%, rgba(233,165,32,0.25), transparent 60%)`,
          opacity: shinePos.opacity,
        }}
      />

      {/* Top Bar / Icon Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/30 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform">
            {project.icon}
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-white/5 border border-white/10 text-amber-300">
              {project.category}
            </span>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-amber-400 group-hover:bg-amber-500/20 transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Title & Short Desc */}
        <h3 className="text-lg font-bold text-white font-space group-hover:text-amber-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-xs mt-2 leading-relaxed line-clamp-3">
          {project.shortDesc}
        </p>
      </div>

      {/* Tags & Metrics */}
      <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-2 rounded-lg bg-slate-950/60 border border-white/5 text-center">
              <div className="text-[10px] text-slate-400 font-mono">{m.label}</div>
              <div className="text-xs font-bold text-amber-300 font-mono mt-0.5">{m.value}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono text-amber-300/90"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
