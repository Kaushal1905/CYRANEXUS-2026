import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeCyborgScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. 3D Geometries & Shader Materials
    
    // Outer 3D Wireframe Icosahedron Core
    const outerGeo = new THREE.IcosahedronGeometry(2.5, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const outerCore = new THREE.Mesh(outerGeo, outerMat);
    scene.add(outerCore);

    // Inner 3D Torus Knot Energy Reactor
    const innerGeo = new THREE.TorusKnotGeometry(1.2, 0.35, 128, 32);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0xff0055,
      emissive: 0xaa0033,
      metalness: 0.8,
      roughness: 0.2,
      wireframe: true
    });
    const innerReactor = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerReactor);

    // Orbital 3D Telemetry Ring
    const ringGeo = new THREE.TorusGeometry(3.8, 0.03, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xfcee0a,
      wireframe: true,
      transparent: true,
      opacity: 0.7
    });
    const orbitalRing = new THREE.Mesh(ringGeo, ringMat);
    orbitalRing.rotation.x = Math.PI / 3;
    scene.add(orbitalRing);

    // 3D Particle Star Field
    const particleCount = 600;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 30;
      particlePositions[i + 1] = (Math.random() - 0.5) * 30;
      particlePositions[i + 2] = (Math.random() - 0.5) * 30;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00f3ff,
      size: 0.05,
      transparent: true,
      opacity: 0.8
    });
    const particleField = new THREE.Points(particleGeo, particleMat);
    scene.add(particleField);

    // 3D Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const cyanPointLight = new THREE.PointLight(0x00f3ff, 3, 20);
    cyanPointLight.position.set(5, 5, 5);
    scene.add(cyanPointLight);

    const magentaPointLight = new THREE.PointLight(0xff0055, 3, 20);
    magentaPointLight.position.set(-5, -5, 5);
    scene.add(magentaPointLight);

    // 3. Interactive Mouse Parallax & Drag Controls
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;

    const handleMouseMove = (e) => {
      const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

      if (!isDragging) {
        targetRotationY = mouseX * 0.5;
        targetRotationX = mouseY * 0.5;
      }
    };

    const handleMouseDown = (e) => {
      isDragging = true;
      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleMouseDrag = (e) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMouseX;
        const deltaY = e.clientY - previousMouseY;

        targetRotationY += deltaX * 0.005;
        targetRotationX += deltaY * 0.005;

        previousMouseX = e.clientX;
        previousMouseY = e.clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseDrag);

    // 4. 3D Scroll-Driven Animation & Dynamic Transforms
    let scrollY = window.scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // 5. Render Loop (60 FPS WebGL Animation)
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Continuous 3D object rotation
      outerCore.rotation.y += 0.004;
      outerCore.rotation.x += 0.002;

      innerReactor.rotation.y -= 0.008;
      innerReactor.rotation.z += 0.004;

      orbitalRing.rotation.z += 0.006;
      particleField.rotation.y += 0.0005;

      // Mouse drag / hover spring interpolation
      scene.rotation.y += (targetRotationY - scene.rotation.y) * 0.05;
      scene.rotation.x += (targetRotationX - scene.rotation.x) * 0.05;

      // 3D Scroll Progress Animations
      const maxScroll = document.body.scrollHeight - window.innerHeight || 1;
      const scrollFraction = Math.min(Math.max(scrollY / maxScroll, 0), 1);

      // Dynamic 3D Camera & Object morphing on scroll
      camera.position.z = THREE.MathUtils.lerp(7, 4.5, Math.sin(scrollFraction * Math.PI));
      outerCore.position.y = THREE.MathUtils.lerp(0, -1.2, scrollFraction);
      outerCore.scale.setScalar(THREE.MathUtils.lerp(1, 0.7, Math.sin(scrollFraction * Math.PI)));
      innerReactor.position.y = outerCore.position.y;
      orbitalRing.position.y = outerCore.position.y;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up WebGL resources
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseDrag);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-auto z-0 overflow-hidden"
      style={{ opacity: 0.9 }}
    />
  );
};
