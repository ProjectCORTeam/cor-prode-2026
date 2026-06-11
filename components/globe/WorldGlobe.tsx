"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Stars } from "@react-three/drei";
import type { Group, Mesh } from "three";

function Globe() {
  const globeRef = useRef<Group>(null);
  const wireRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.12;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y -= delta * 0.04;
    }
  });

  return (
    <group ref={globeRef}>
      {/* Esfera principal — navy COR */}
      <Sphere args={[1.6, 64, 64]}>
        <meshStandardMaterial
          color="#1a2442"
          roughness={0.35}
          metalness={0.55}
          emissive="#2f7ec9"
          emissiveIntensity={0.12}
        />
      </Sphere>
      {/* Malla exterior estilo holograma — aqua COR */}
      <Sphere ref={wireRef} args={[1.68, 32, 32]}>
        <meshBasicMaterial color="#48bcd0" wireframe transparent opacity={0.16} />
      </Sphere>
      {/* Halo amarillo de firma */}
      <Sphere args={[1.78, 32, 32]}>
        <meshBasicMaterial color="#fbde3f" wireframe transparent opacity={0.05} />
      </Sphere>
    </group>
  );
}

export function WorldGlobe() {
  return (
    <div className="h-full w-full" aria-label="Globo terráqueo 3D">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.4} />
        {/* Luz puntual amarilla (acento de firma COR) */}
        <pointLight position={[5, 3, 5]} intensity={110} color="#fbde3f" />
        <pointLight position={[-5, -2, -4]} intensity={45} color="#48bcd0" />
        <Stars radius={60} depth={40} count={4000} factor={4} saturation={0} fade speed={0.6} />
        <Globe />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
