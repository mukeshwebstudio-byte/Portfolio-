import React from 'react';
import { Project } from '../types';
import { X, CheckCircle2, ArrowRight, MessageSquare, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#070D1C] border border-amber-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-slate-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-3xl">
            {project.icon}
          </div>
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
              {project.category} Showcase
            </span>
            <h2 className="text-2xl font-bold text-white font-space">{project.title}</h2>
          </div>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed my-4">
          {project.fullDesc}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 my-6">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
              <div className="text-xs text-slate-400 font-mono">{m.label}</div>
              <div className="text-base font-extrabold text-amber-400 font-mono mt-1">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="my-6">
          <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-amber-300">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action CTAs */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap gap-3">
          <a
            href={`https://wa.me/91935XXXXXXX?text=Hi%20Mukesh%2C%20I%20saw%20your%20project%20${encodeURIComponent(project.title)}%20and%20would%20like%20to%20build%20a%20similar%20solution.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-xs hover:brightness-110 transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" /> Discuss Similar Project on WhatsApp
          </a>
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
