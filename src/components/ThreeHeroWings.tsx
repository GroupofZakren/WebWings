/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeHeroWingsProps {
  className?: string;
}

export const ThreeHeroWings: React.FC<ThreeHeroWingsProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080808, 0.04);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 11);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x181818, 1.5);
    scene.add(ambientLight);

    // Main Studio Metallic Rim Light (White/Silver)
    const topLight = new THREE.DirectionalLight(0xffffff, 3.5);
    topLight.position.set(2, 6, 4);
    scene.add(topLight);

    // Deep Crimson Red Accent Light from Below/Left
    const redLight1 = new THREE.PointLight(0xd71920, 8, 15);
    redLight1.position.set(-4, -1, 3);
    scene.add(redLight1);

    // Secondary Vivid Red Light from Right
    const redLight2 = new THREE.PointLight(0xff2a35, 6, 15);
    redLight2.position.set(4, 2, 2);
    scene.add(redLight2);

    // Central Core Glow
    const coreLight = new THREE.PointLight(0xd71920, 3, 6);
    coreLight.position.set(0, 0, 1);
    scene.add(coreLight);

    // 3D Sculpture Group
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // Metallic Materials
    const darkTitaniumMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a1c,
      metalness: 0.95,
      roughness: 0.18,
      envMapIntensity: 1.5,
    });

    const crimsonMetallicMat = new THREE.MeshStandardMaterial({
      color: 0xd71920,
      metalness: 0.85,
      roughness: 0.22,
      emissive: 0x4a0004,
      emissiveIntensity: 0.5,
    });

    const brightEdgeMat = new THREE.MeshStandardMaterial({
      color: 0xc4c7cc,
      metalness: 0.98,
      roughness: 0.1,
    });

    // Helper to generate an angular wing blade
    const createWingBlade = (isRight: boolean, scale: number = 1, zOffset: number = 0) => {
      const shape = new THREE.Shape();
      const s = isRight ? 1 : -1;

      shape.moveTo(0 * s, -1.8 * scale);
      shape.lineTo(1.8 * s * scale, -0.6 * scale);
      shape.lineTo(3.8 * s * scale, 1.8 * scale);
      shape.lineTo(4.4 * s * scale, 2.8 * scale);
      shape.lineTo(3.6 * s * scale, 2.5 * scale);
      shape.lineTo(2.0 * s * scale, 1.2 * scale);
      shape.lineTo(0.9 * s * scale, 0.2 * scale);
      shape.lineTo(0 * s, -1.2 * scale);
      shape.closePath();

      const extrudeSettings = {
        steps: 1,
        depth: 0.22 * scale,
        bevelEnabled: true,
        bevelThickness: 0.08,
        bevelSize: 0.06,
        bevelSegments: 3,
      };

      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      geometry.center();
      const mesh = new THREE.Mesh(geometry, darkTitaniumMat);
      mesh.position.z = zOffset;
      return mesh;
    };

    // Helper for inner crimson red wing feathers
    const createInnerRedFeather = (isRight: boolean, angle: number, scale: number = 0.8, yOff = 0) => {
      const shape = new THREE.Shape();
      const s = isRight ? 1 : -1;

      shape.moveTo(0.2 * s, 0);
      shape.lineTo(2.6 * s * scale, 0.8 * scale);
      shape.lineTo(3.2 * s * scale, 1.3 * scale);
      shape.lineTo(2.4 * s * scale, 1.0 * scale);
      shape.lineTo(0.5 * s * scale, 0.2 * scale);
      shape.closePath();

      const extrudeSettings = {
        steps: 1,
        depth: 0.14,
        bevelEnabled: true,
        bevelThickness: 0.04,
        bevelSize: 0.03,
        bevelSegments: 2,
      };

      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      geometry.center();
      const mesh = new THREE.Mesh(geometry, crimsonMetallicMat);
      mesh.rotation.z = angle * (isRight ? 1 : -1);
      mesh.position.set(0.6 * s, yOff, -0.15);
      return mesh;
    };

    // Left & Right Main Titanium Wings
    const leftWing = createWingBlade(false, 1.1, 0.1);
    const rightWing = createWingBlade(true, 1.1, 0.1);
    leftWing.position.x = -1.5;
    rightWing.position.x = 1.5;

    sculptureGroup.add(leftWing);
    sculptureGroup.add(rightWing);

    // Inner Red Feathers (2 tiers each side)
    const leftRed1 = createInnerRedFeather(false, 0.15, 0.9, 0.2);
    const leftRed2 = createInnerRedFeather(false, 0.35, 0.75, -0.4);
    const rightRed1 = createInnerRedFeather(true, 0.15, 0.9, 0.2);
    const rightRed2 = createInnerRedFeather(true, 0.35, 0.75, -0.4);

    leftWing.add(leftRed1);
    leftWing.add(leftRed2);
    rightWing.add(rightRed1);
    rightWing.add(rightRed2);

    // Center Vivid Red Metallic 'W' Core Chevron
    const coreShape = new THREE.Shape();
    coreShape.moveTo(0, 0.8);
    coreShape.lineTo(0.6, -1.2);
    coreShape.lineTo(0.3, -1.3);
    coreShape.lineTo(0, -0.4);
    coreShape.lineTo(-0.3, -1.3);
    coreShape.lineTo(-0.6, -1.2);
    coreShape.closePath();

    const coreGeo = new THREE.ExtrudeGeometry(coreShape, {
      depth: 0.25,
      bevelEnabled: true,
      bevelThickness: 0.06,
      bevelSize: 0.04,
      bevelSegments: 2,
    });
    coreGeo.center();
    const coreMesh = new THREE.Mesh(coreGeo, crimsonMetallicMat);
    coreMesh.position.set(0, -0.2, 0.3);
    sculptureGroup.add(coreMesh);

    // Subtle Halo Ring behind sculpture
    const ringGeo = new THREE.TorusGeometry(3.6, 0.02, 16, 100);
    const ringMesh = new THREE.Mesh(ringGeo, brightEdgeMat);
    ringMesh.rotation.x = Math.PI / 2.3;
    ringMesh.position.z = -1;
    sculptureGroup.add(ringMesh);

    // Floating Crimson & Silver Particle Drift
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 1;

      // Color split: mostly red embers, some cool silver
      const isRed = Math.random() > 0.3;
      if (isRed) {
        colors[i * 3] = 0.84;
        colors[i * 3 + 1] = 0.1;
        colors[i * 3 + 2] = 0.13;
      } else {
        colors[i * 3] = 0.8;
        colors[i * 3 + 1] = 0.85;
        colors[i * 3 + 2] = 0.9;
      }
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.07,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      targetX = (x - 0.5) * 2;
      targetY = (y - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Smooth mouse parallax lerp
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        // Dynamic wing breathing rotation & gentle tilt
        const hoverFloat = Math.sin(elapsedTime * 1.2) * 0.15;
        sculptureGroup.position.y = hoverFloat;
        sculptureGroup.rotation.y = mouseX * 0.45;
        sculptureGroup.rotation.x = -mouseY * 0.35 + Math.cos(elapsedTime * 0.8) * 0.05;

        // Subtle wing flapping flex
        const wingFlap = Math.sin(elapsedTime * 1.5) * 0.06;
        leftWing.rotation.z = -wingFlap;
        rightWing.rotation.z = wingFlap;

        // Rotate ring slowly
        ringMesh.rotation.z = elapsedTime * 0.1;

        // Drift particles upward
        const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;
        for (let i = 0; i < particleCount; i++) {
          let y = posAttr.getY(i) + 0.006;
          if (y > 5) y = -5;
          posAttr.setY(i, y);
        }
        posAttr.needsUpdate = true;

        // Light pulsation
        redLight1.intensity = 7 + Math.sin(elapsedTime * 2.5) * 2;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometryDispose(scene);
      renderer.dispose();
    };
  }, []);

  const geometryDispose = (obj: any) => {
    if (obj.geometry) obj.geometry.dispose();
    if (obj.material) {
      if (Array.isArray(obj.material)) {
        obj.material.forEach((mat: any) => mat.dispose());
      } else {
        obj.material.dispose();
      }
    }
    if (obj.children) {
      obj.children.forEach((child: any) => geometryDispose(child));
    }
  };

  return (
    <div
      ref={mountRef}
      className={`absolute inset-0 pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
};

export default ThreeHeroWings;
