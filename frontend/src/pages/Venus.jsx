import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Venus = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup - positioned to show only top half of Venus
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 22;
    camera.position.y = 0; // Centered vertically

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Venus size calculation
    const venusRadius = window.innerWidth < 768 ? 12 : 
                       window.innerWidth < 1024 ? 14 : 16;

    // Load textures
    const textureLoader = new THREE.TextureLoader();
    
    // Venus textures
    const venusTexture = textureLoader.load('/venus.jpg');
    const venusBumpMap = textureLoader.load('/venus_atmosphere.jpg');
    const starTexture = textureLoader.load('/stars.jpg');
    
    // Configure star background
    starTexture.wrapS = THREE.RepeatWrapping;
    starTexture.wrapT = THREE.RepeatWrapping;
    starTexture.repeat.set(2, 2);
    scene.background = starTexture;

    // Create Venus sphere (full sphere initially)
    const geometry = new THREE.SphereGeometry(venusRadius, 128, 128);
    
    // Create clipping plane to show only top half
    const clipPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    renderer.clippingPlanes = [clipPlane];

    const material = new THREE.MeshPhysicalMaterial({
      map: venusTexture,
      bumpMap: venusBumpMap,
      bumpScale: 0.15,
      metalness: 0.1,
      roughness: 0.85,
      clearcoat: 0.2,
      side: THREE.DoubleSide,
      clippingPlanes: [clipPlane]
    });

    const venus = new THREE.Mesh(geometry, material);
    
    // Position Venus so its diameter touches bottom of screen
    venus.position.y = -venusRadius;
    scene.add(venus);

    // Atmospheric glow (clipped to match Venus)
    const glowGeometry = new THREE.SphereGeometry(venusRadius * 1.08, 64, 64);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xff9966,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      clippingPlanes: [clipPlane]
    });
    // const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    // glow.position.copy(venus.position);
    // scene.add(glow);

    // Lighting
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(100, 30, 50);
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.9);
    scene.add(ambientLight);

    // Venus' atmospheric light
    const venusLight = new THREE.PointLight(0xff9966, 1.9, 100);
    venusLight.position.set(0, -venusRadius, 0);
    scene.add(venusLight);

    // Animation variables
    let starTextureOffsetX = 0;
    let starTextureOffsetY = 0;

    const animate = () => {
      // Rotate Venus slowly
      venus.rotation.y += 0.0003;

      // Move the star background
      starTextureOffsetX += 0.0002;
      starTextureOffsetY += 0.0001;
      starTexture.offset.set(starTextureOffsetX % 1, starTextureOffsetY % 1);

      // Update clipping plane position if needed
      clipPlane.constant = venusRadius - 0.1;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        zIndex: 0
      }}
    />
  );
};

export default Venus;