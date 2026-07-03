"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GridScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a0a, 0.032);

    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      200
    );
    camera.position.set(0, 1.6, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "low-power",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const lineColor = new THREE.Color("#5c5c58");
    const centerColor = new THREE.Color("#c9cbcc");

    const floor = new THREE.GridHelper(60, 60, centerColor, lineColor);
    (floor.material as THREE.Material).transparent = true;
    (floor.material as THREE.Material).opacity = 0.55;
    floor.position.y = -1.4;
    scene.add(floor);

    const ceiling = new THREE.GridHelper(60, 60, centerColor, lineColor);
    (ceiling.material as THREE.Material).transparent = true;
    (ceiling.material as THREE.Material).opacity = 0.22;
    ceiling.position.y = 3.6;
    scene.add(ceiling);

    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = Math.random() * 5 - 1;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xc9cbcc,
      size: 0.045,
      transparent: true,
      opacity: 0.65,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    let targetX = 0;
    let targetY = 0;
    function onPointerMove(e: PointerEvent) {
      const rect = container!.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    }
    window.addEventListener("pointermove", onPointerMove);

    const clock = new THREE.Clock();
    let frameId = 0;

    function animate() {
      const elapsed = clock.getElapsedTime();
      const cell = 1;
      const crawl = (elapsed * 1.6) % cell;
      floor.position.z = crawl;
      ceiling.position.z = crawl;

      const px = particles.geometry.attributes.position;
      const wrap = 40;
      for (let i = 0; i < particleCount; i++) {
        const z = px.getZ(i) + 0.03;
        px.setZ(i, z > wrap ? z - wrap * 2 : z);
      }
      px.needsUpdate = true;

      camera.position.x += (targetX * 1.1 - camera.position.x) * 0.02;
      camera.position.y += (2.2 - targetY * 0.5 - camera.position.y) * 0.02;
      camera.lookAt(0, 0.3, -20);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }
    animate();

    function onResize() {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);

      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      floor.geometry.dispose();
      (floor.material as THREE.Material).dispose();
      ceiling.geometry.dispose();
      (ceiling.material as THREE.Material).dispose();

      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      style={{ position: "absolute", inset: 0 }}
    />
  );
}
