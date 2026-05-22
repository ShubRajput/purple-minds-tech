'use client';

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField({ count = 800 }: { count?: number }) {
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 40;
      pos[i + 1] = (Math.random() - 0.5) * 40;
      pos[i + 2] = (Math.random() - 0.5) * 40;
    }
    return pos;
  }, [count]);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#F29CB7"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function GlowingOrb({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
      <Sphere args={[1 * scale, 32, 32]} position={position}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.15}
        />
      </Sphere>
      <Sphere args={[0.6 * scale, 32, 32]} position={position}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.25}
        />
      </Sphere>
    </Float>
  );
}

function InteractiveOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 2;
      meshRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.3) * 1.5;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial
          color="#522A6F"
          emissive="#522A6F"
          emissiveIntensity={0.3}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function Scene({ mouse, isMobile }: { mouse: { x: number; y: number }; isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += (mouse.x - groupRef.current.rotation.y) * 0.02;
      groupRef.current.rotation.x += (-mouse.y - groupRef.current.rotation.x) * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} color="#522A6F" intensity={1} />
      <pointLight position={[-10, -10, 5]} color="#DDAAFF" intensity={0.5} />
      <Stars radius={50} depth={50} count={isMobile ? 800 : 2000} factor={2} saturation={0.5} fade speed={1} />
      <ParticleField count={isMobile ? 300 : 800} />
      <GlowingOrb position={[4, 2, -5]} color="#522A6F" scale={1.5} />
      <GlowingOrb position={[-5, -2, -3]} color="#DDAAFF" scale={1} />
      <GlowingOrb position={[2, -4, -2]} color="#F29CB7" scale={0.8} />
      <InteractiveOrb />
    </group>
  );
}

export function HeroScene({ mouse, isMobile = false }: { mouse: { x: number; y: number }; isMobile?: boolean }) {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={isMobile ? 1 : [1, 2]}
        gl={{ antialias: !isMobile, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene mouse={mouse} isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
}
