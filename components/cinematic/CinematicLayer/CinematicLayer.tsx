"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./CinematicLayer.module.css";

const ORANGE = new THREE.Color(0xff8a3d);
const WARM_WHITE = new THREE.Color(0xfff4e8);
const SOFT_BLUE = new THREE.Color(0x6eb8ff);

const BOKEH_VERTEX = /* glsl */ `
  attribute float aSize;
  attribute vec3 color;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vColor = color;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    float depthScale = clamp(280.0 / -mvPosition.z, 0.4, 2.4);
    gl_PointSize = aSize * depthScale;
    gl_Position = projectionMatrix * mvPosition;
    vAlpha = smoothstep(12.0, 4.0, -mvPosition.z);
  }
`;

const BOKEH_FRAGMENT = /* glsl */ `
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float dist = length(uv);
    float core = smoothstep(0.48, 0.0, dist);
    float halo = smoothstep(0.5, 0.12, dist) * 0.45;
    float alpha = (core * 0.92 + halo) * vAlpha;
    vec3 glow = vColor * (1.0 + core * 0.35);
    gl_FragColor = vec4(glow, alpha);
  }
`;

function getParticleCount(): number {
  if (typeof window === "undefined") return 100;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return 0;
  if (coarse) return 70;
  return window.innerWidth < 768 ? 95 : 185;
}

export default function CinematicLayer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particleCount = getParticleCount();
    if (particleCount === 0) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    renderer.domElement.className = styles.canvas;

    const positions = new Float32Array(particleCount * 3);
    const basePositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const phases = new Float32Array(particleCount);
    const speeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = 3.2 + Math.random() * 6.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = basePositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] =
        basePositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.58;
      positions[i3 + 2] = basePositions[i3 + 2] = radius * Math.cos(phi);

      const paletteRoll = Math.random();
      const tint =
        paletteRoll > 0.78
          ? SOFT_BLUE.clone().lerp(WARM_WHITE, 0.4)
          : paletteRoll > 0.32
            ? ORANGE.clone().lerp(WARM_WHITE, Math.random() * 0.5)
            : WARM_WHITE.clone();

      colors[i3] = tint.r;
      colors[i3 + 1] = tint.g;
      colors[i3 + 2] = tint.b;

      sizes[i] = 18 + Math.random() * 52;
      phases[i] = Math.random() * Math.PI * 2;
      speeds[i] = 0.22 + Math.random() * 0.55;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {},
      vertexShader: BOKEH_VERTEX,
      fragmentShader: BOKEH_FRAGMENT,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);
    scene.fog = new THREE.FogExp2(0x050508, 0.075);

    const mouse = { x: 0.5, y: 0.5 };
    const targetMouse = { x: 0.5, y: 0.5 };
    let isVisible = true;
    let isPageVisible = true;

    const onPointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      targetMouse.x = (event.clientX - rect.left) / rect.width;
      targetMouse.y = (event.clientY - rect.top) / rect.height;
    };

    const onPointerLeave = () => {
      targetMouse.x = 0.5;
      targetMouse.y = 0.5;
    };

    const onVisibilityChange = () => {
      isPageVisible = document.visibilityState === "visible";
    };

    const resize = () => {
      const { clientWidth, clientHeight } = container;
      if (clientWidth === 0 || clientHeight === 0) return;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight, false);
    };

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry?.isIntersecting ?? true;
      },
      { threshold: 0.05 },
    );

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    visibilityObserver.observe(container);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibilityChange);
    resize();

    let frameId = 0;
    const clock = new THREE.Clock();
    const positionAttr = geometry.getAttribute("position") as THREE.BufferAttribute;

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      if (!isVisible || !isPageVisible) return;

      const elapsed = clock.getElapsedTime();

      mouse.x += (targetMouse.x - mouse.x) * 0.04;
      mouse.y += (targetMouse.y - mouse.y) * 0.04;

      camera.position.x = (mouse.x - 0.5) * 0.42;
      camera.position.y = -(mouse.y - 0.5) * 0.24;
      camera.lookAt(0, 0, 0);

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const drift = speeds[i];
        positionAttr.array[i3] =
          basePositions[i3] +
          Math.sin(elapsed * 0.14 * drift + phases[i]) * 0.11;
        positionAttr.array[i3 + 1] =
          basePositions[i3 + 1] +
          Math.cos(elapsed * 0.11 * drift + phases[i] * 1.2) * 0.14;
        positionAttr.array[i3 + 2] =
          basePositions[i3 + 2] +
          Math.sin(elapsed * 0.1 * drift + phases[i] * 0.65) * 0.08;
      }
      positionAttr.needsUpdate = true;

      points.rotation.y = elapsed * 0.012;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className={styles.layer} aria-hidden />;
}
