import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

// An abstract 3D object for the Hero section
const AbstractShape = () => {
  const meshRef = useRef();
  const innerRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
    // Added a very slow counter-rotation for the inner core to make it look alive,
    // but it remains completely unaffected by drag interactions.
    if (innerRef.current) {
      innerRef.current.rotation.x = -state.clock.elapsedTime * 0.01;
      innerRef.current.rotation.y = -state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
      <PresentationControls
        global={false}
        cursor={true}
        snap={true}
        speed={1.5}
        zoom={1}
        polar={[-Infinity, Infinity]}
        azimuth={[-Infinity, Infinity]}
      >
        {/* Invisible Hitbox to ensure drag is caught over the whole object area, 
            since raycasting through a wireframe can be finicky */}
        <mesh>
          <icosahedronGeometry args={[2, 1]} />
          <meshBasicMaterial transparent opacity={0} depthWrite={false} />
        </mesh>

        <mesh ref={meshRef}>
          <icosahedronGeometry args={[2, 1]} />
          <meshPhysicalMaterial
            color="#06b6d4"
            emissive="#0891b2"
            emissiveIntensity={0.2}
            roughness={0.1}
            metalness={0.8}
            clearcoat={1}
            clearcoatRoughness={0.1}
            wireframe={true}
          />
        </mesh>
      </PresentationControls>

      {/* Inner solid core - outside PresentationControls so it ignores the cursor */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshPhysicalMaterial
          color="#18181b"
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
    </Float>
  );
};

const HeroCanvas = () => {
  return (
    <div className="w-full h-[400px] sm:h-[600px] absolute right-0 top-0 sm:relative z-0 opacity-40 sm:opacity-100 pointer-events-none sm:pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22d3ee" />

        <AbstractShape />

        <Environment preset="city" />
        <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={10} blur={2} far={4} />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
