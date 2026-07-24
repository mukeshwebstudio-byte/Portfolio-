import React, { useState } from 'react';
import { ThreeSceneSettings } from '../types';
import { Sliders, Sparkles, Layers, Palette, Eye, RotateCw, X, ChevronRight, Zap } from 'lucide-react';

interface Interactive3DStudioProps {
  settings: ThreeSceneSettings;
  onUpdateSettings: (newSettings: Partial<ThreeSceneSettings>) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const Interactive3DStudio: React.FC<Interactive3DStudioProps> = ({
  settings,
  onUpdateSettings,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-[#070D1C]/95 backdrop-blur-2xl border-l border-amber-500/20 shadow-2xl p-6 overflow-y-auto text-slate-200 transition-all duration-300">
      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Sliders className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-semibold text-white text-base tracking-tight">3D Visual Studio Control</h3>
            <p className="text-xs text-slate-400">Live WebGL & Particle Controls</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-6">
        {/* Color Theme */}
        <div>
          <label className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
            <Palette className="w-3.5 h-3.5" /> Color Palette
          </label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {[
              { id: 'goldOrange', name: 'Gold & Solar', color: 'bg-gradient-to-r from-amber-500 to-orange-500' },
              { id: 'cyberCyan', name: 'Cyber Cyan', color: 'bg-gradient-to-r from-cyan-500 to-blue-500' },
              { id: 'neonPurple', name: 'Neon Purple', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
              { id: 'emeraldGreen', name: 'Emerald Tech', color: 'bg-gradient-to-r from-emerald-500 to-teal-500' },
            ].map((theme) => (
              <button
                key={theme.id}
                onClick={() => onUpdateSettings({ colorTheme: theme.id as any })}
                className={`p-2.5 rounded-xl border text-xs font-medium flex items-center gap-2 transition-all ${
                  settings.colorTheme === theme.id
                    ? 'border-amber-500 bg-amber-500/10 text-white shadow-lg'
                    : 'border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-slate-200'
                }`}
              >
                <div className={`w-3.5 h-3.5 rounded-full ${theme.color}`} />
                {theme.name}
              </button>
            ))}
          </div>
        </div>

        {/* Geometry Shape */}
        <div>
          <label className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" /> Core 3D Geometry
          </label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {[
              { id: 'icosahedron', name: 'Icosahedron' },
              { id: 'torusKnot', name: 'Torus Knot' },
              { id: 'doubleRing', name: 'Orbital Rings' },
              { id: 'hyperCube', name: 'Hyper Cube' },
              { id: 'civilGrid', name: 'Civil Cylinder' },
            ].map((geom) => (
              <button
                key={geom.id}
                onClick={() => onUpdateSettings({ geometryShape: geom.id as any })}
                className={`p-2.5 rounded-xl border text-xs font-medium text-left transition-all ${
                  settings.geometryShape === geom.id
                    ? 'border-amber-500 bg-amber-500/10 text-amber-300'
                    : 'border-white/10 bg-white/5 text-slate-400 hover:border-white/20'
                }`}
              >
                {geom.name}
              </button>
            ))}
          </div>
        </div>

        {/* Particle Morph */}
        <div>
          <label className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Particle Matrix Morph
          </label>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {[
              { id: 'cloud', name: 'Cloud' },
              { id: 'sphere', name: 'Sphere' },
              { id: 'wave', name: 'Wave' },
              { id: 'dna', name: 'DNA Helix' },
              { id: 'cube', name: '3D Box' },
            ].map((morph) => (
              <button
                key={morph.id}
                onClick={() => onUpdateSettings({ particleMorph: morph.id as any })}
                className={`p-2 rounded-lg border text-xs text-center transition-all ${
                  settings.particleMorph === morph.id
                    ? 'border-orange-500 bg-orange-500/20 text-orange-300 font-semibold'
                    : 'border-white/10 bg-white/5 text-slate-400 hover:border-white/20'
                }`}
              >
                {morph.name}
              </button>
            ))}
          </div>
        </div>

        {/* Speed Slider */}
        <div>
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-mono uppercase text-amber-400 flex items-center gap-1.5">
              <RotateCw className="w-3.5 h-3.5" /> Rotation Velocity
            </span>
            <span className="font-mono text-slate-300">{settings.rotationSpeed.toFixed(1)}x</span>
          </div>
          <input
            type="range"
            min="0.2"
            max="3"
            step="0.1"
            value={settings.rotationSpeed}
            onChange={(e) => onUpdateSettings({ rotationSpeed: parseFloat(e.target.value) })}
            className="w-full accent-amber-500 bg-white/10 rounded-lg h-2 cursor-pointer"
          />
        </div>

        {/* Mouse Interaction Mode */}
        <div>
          <label className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5" /> Cursor Interaction Mode
          </label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {[
              { id: 'gravitate', name: 'Standard Tilt' },
              { id: 'repel', name: 'Particle Repel Force' },
              { id: 'rotateCamera', name: 'Camera Parallax' },
            ].map((mode) => (
              <button
                key={mode.id}
                onClick={() => onUpdateSettings({ mouseInteraction: mode.id as any })}
                className={`p-2 rounded-lg border text-xs text-left transition-all ${
                  settings.mouseInteraction === mode.id
                    ? 'border-amber-500 bg-amber-500/10 text-amber-300 font-medium'
                    : 'border-white/10 bg-white/5 text-slate-400'
                }`}
              >
                {mode.name}
              </button>
            ))}
          </div>
        </div>

        {/* Live FPS & Engine Info */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Engine Stats</div>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div>
              <span className="text-slate-500">WebGL API:</span> <span className="text-amber-400">Three.js r128</span>
            </div>
            <div>
              <span className="text-slate-500">Particles:</span> <span className="text-orange-400">{settings.particleCount}</span>
            </div>
            <div>
              <span className="text-slate-500">Target FPS:</span> <span className="text-emerald-400">60 FPS</span>
            </div>
            <div>
              <span className="text-slate-500">Draw Calls:</span> <span className="text-slate-300">4</span>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-sm shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
        >
          Apply 3D Configuration <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
