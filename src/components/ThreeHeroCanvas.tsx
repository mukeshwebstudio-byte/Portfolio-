import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ThreeSceneSettings } from '../types';

interface ThreeHeroCanvasProps {
  settings: ThreeSceneSettings;
  activeSection: string;
}

export const ThreeHeroCanvas: React.FC<ThreeHeroCanvasProps> = ({ settings, activeSection }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const mainMeshRef = useRef<THREE.Mesh | null>(null);
  const wireMeshRef = useRef<THREE.Mesh | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const ringsGroupRef = useRef<THREE.Group | null>(null);
  const targetPositionsRef = useRef<Float32Array | null>(null);
  const currentPositionsRef = useRef<Float32Array | null>(null);

  // Theme colors generator
  const getThemeColors = (theme: ThreeSceneSettings['colorTheme']) => {
    switch (theme) {
      case 'cyberCyan':
        return { primary: 0x06B6D4, secondary: 0x3B82F6, accent: 0x60A5FA };
      case 'neonPurple':
        return { primary: 0x8B5CF6, secondary: 0xEC4899, accent: 0xC084FC };
      case 'emeraldGreen':
        return { primary: 0x10B981, secondary: 0x059669, accent: 0x34D399 };
      case 'solarRed':
        return { primary: 0xEF4444, secondary: 0xF59E0B, accent: 0xFBA518 };
      case 'goldOrange':
      default:
        return { primary: 0xE9A520, secondary: 0xF97316, accent: 0x8B7CF6 };
    }
  };

  // Shape generators for 1200 particles
  const generateShapePositions = (shape: ThreeSceneSettings['particleMorph'], count: number): Float32Array => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      let x = 0, y = 0, z = 0;

      if (shape === 'sphere') {
        const r = 4.2 + Math.random() * 0.8;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        x = r * Math.sin(phi) * Math.cos(theta);
        y = r * Math.sin(phi) * Math.sin(theta);
        z = r * Math.cos(phi);
      } else if (shape === 'cube') {
        const side = 6;
        x = (Math.random() - 0.5) * side;
        y = (Math.random() - 0.5) * side;
        z = (Math.random() - 0.5) * side;
      } else if (shape === 'dna') {
        const strand = i % 2 === 0 ? 1 : -1;
        const t = (i / count) * Math.PI * 12 - Math.PI * 6;
        const r = 2.5;
        x = Math.cos(t) * r * strand;
        y = t * 0.4;
        z = Math.sin(t) * r * strand;
      } else if (shape === 'wave') {
        const cols = Math.floor(Math.sqrt(count));
        const row = Math.floor(i / cols);
        const col = i % cols;
        const spacing = 0.35;
        x = (col - cols / 2) * spacing;
        z = (row - cols / 2) * spacing;
        y = Math.sin(x * 0.8) * Math.cos(z * 0.8) * 1.2;
      } else {
        // 'cloud' / default random orbital
        const r = 3.5 + Math.random() * 4.5;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        x = r * Math.sin(phi) * Math.cos(theta);
        y = r * Math.sin(phi) * Math.sin(theta);
        z = r * Math.cos(phi);
      }

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    }
    return pos;
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100);
    camera.position.z = 8.5;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const colors = getThemeColors(settings.colorTheme);

    // Main Geometry
    let geometry: THREE.BufferGeometry;
    if (settings.geometryShape === 'torusKnot') {
      geometry = new THREE.TorusKnotGeometry(1.8, 0.45, 120, 16);
    } else if (settings.geometryShape === 'doubleRing') {
      geometry = new THREE.TorusGeometry(2.2, 0.3, 16, 100);
    } else if (settings.geometryShape === 'hyperCube') {
      geometry = new THREE.BoxGeometry(2.8, 2.8, 2.8, 4, 4, 4);
    } else if (settings.geometryShape === 'civilGrid') {
      geometry = new THREE.CylinderGeometry(2, 2.4, 3, 12, 6, true);
    } else {
      geometry = new THREE.IcosahedronGeometry(2.3, 1);
    }

    const wireMat = new THREE.MeshBasicMaterial({
      color: colors.primary,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.Mesh(geometry, wireMat);
    scene.add(wireMesh);
    wireMeshRef.current = wireMesh;

    // Outer subtle mesh
    const outerGeo = new THREE.IcosahedronGeometry(3.9, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: colors.secondary,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    });
    const mainMesh = new THREE.Mesh(outerGeo, outerMat);
    scene.add(mainMesh);
    mainMeshRef.current = mainMesh;

    // Rings group
    const ringsGroup = new THREE.Group();
    const ring1Geo = new THREE.TorusGeometry(4.8, 0.02, 12, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: colors.primary, transparent: true, opacity: 0.22 });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ringsGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(5.6, 0.015, 12, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: colors.accent, transparent: true, opacity: 0.15 });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 5;
    ring2.rotation.y = Math.PI / 4;
    ringsGroup.add(ring2);

    scene.add(ringsGroup);
    ringsGroupRef.current = ringsGroup;

    // Particles Setup
    const pCount = settings.particleCount || 1200;
    const initialPos = generateShapePositions(settings.particleMorph, pCount);
    currentPositionsRef.current = new Float32Array(initialPos);
    targetPositionsRef.current = new Float32Array(initialPos);

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(currentPositionsRef.current, 3));

    const pMat = new THREE.PointsMaterial({
      color: colors.primary,
      size: 0.045,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);
    particlesRef.current = particles;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(colors.primary, 2, 20);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current || !renderer || !camera) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      const speed = settings.rotationSpeed || 1;

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Mesh Rotations
      if (wireMeshRef.current) {
        wireMeshRef.current.rotation.x = elapsedTime * 0.25 * speed + mouseY * 0.2;
        wireMeshRef.current.rotation.y = elapsedTime * 0.35 * speed + mouseX * 0.2;
      }

      if (mainMeshRef.current) {
        mainMeshRef.current.rotation.x = -elapsedTime * 0.15 * speed;
        mainMeshRef.current.rotation.y = elapsedTime * 0.2 * speed;
      }

      if (ringsGroupRef.current) {
        ringsGroupRef.current.rotation.z = elapsedTime * 0.1 * speed;
        ringsGroupRef.current.rotation.y = elapsedTime * 0.15 * speed + mouseX * 0.3;
      }

      // Particle Position Morphing Lerp
      if (particlesRef.current && currentPositionsRef.current && targetPositionsRef.current) {
        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
        const target = targetPositionsRef.current;
        let isChanging = false;

        for (let i = 0; i < positions.length; i++) {
          const diff = target[i] - positions[i];
          if (Math.abs(diff) > 0.001) {
            positions[i] += diff * 0.06;
            isChanging = true;
          }
        }

        if (settings.mouseInteraction === 'repel' && (Math.abs(mouseX) > 0.1 || Math.abs(mouseY) > 0.1)) {
          for (let i = 0; i < positions.length; i += 3) {
            const dx = positions[i] - mouseX * 3;
            const dy = positions[i + 1] - (-mouseY * 3);
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 2.2) {
              positions[i] += (dx / dist) * 0.03;
              positions[i + 1] += (dy / dist) * 0.03;
            }
          }
        }

        particlesRef.current.geometry.attributes.position.needsUpdate = true;
        particlesRef.current.rotation.y = elapsedTime * 0.04 * speed;
      }

      // Camera motion on mouse, scroll progress, or section
      if (cameraRef.current) {
        const scrollY = window.scrollY || 0;
        const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
        const scrollRatio = scrollY / maxScroll;
        const scrollAngle = scrollRatio * Math.PI * 1.5;

        const baseRadius = 8.5;
        const camX = Math.sin(scrollAngle) * 1.8 + mouseX * 0.8;
        const camY = -scrollRatio * 3 + mouseY * 0.8;
        const camZ = baseRadius + Math.cos(scrollAngle) * 1.2;

        cameraRef.current.position.x += (camX - cameraRef.current.position.x) * 0.08;
        cameraRef.current.position.y += (camY - cameraRef.current.position.y) * 0.08;
        cameraRef.current.position.z += (camZ - cameraRef.current.position.z) * 0.08;
        cameraRef.current.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (rendererRef.current && rendererRef.current.domElement) {
        rendererRef.current.domElement.remove();
      }
    };
  }, [settings.geometryShape, settings.colorTheme]);

  // Update target particle morph when setting changes or section changes
  useEffect(() => {
    if (!targetPositionsRef.current) return;
    const pCount = settings.particleCount || 1200;

    let morphShape = settings.particleMorph;

    // Sync morph with active section if section changes
    if (activeSection === 'projects') morphShape = 'civilGrid' as any;
    else if (activeSection === 'services') morphShape = 'cube';
    else if (activeSection === 'skills') morphShape = 'dna';
    else if (activeSection === 'contact') morphShape = 'sphere';

    const newTargets = generateShapePositions(morphShape, pCount);
    for (let i = 0; i < targetPositionsRef.current.length; i++) {
      targetPositionsRef.current[i] = newTargets[i];
    }
  }, [settings.particleMorph, settings.particleCount, activeSection]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      <div ref={containerRef} className="w-full h-full" />
      {/* Bottom subtle glow overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#04070F] to-transparent pointer-events-none" />
    </div>
  );
};
