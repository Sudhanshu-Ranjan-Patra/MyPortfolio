import React, { useRef, useState, useMemo } from 'react';
import { useFrame, useThree, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const SkillNode = ({ position, color, icon, name, index, sharedNodes, viewState }) => {
  const meshRef = useRef();
  const groupRef = useRef();
  const planeRef = useRef();
  const targetPos = useRef(new THREE.Vector3());

  // Dragging state
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const { size, camera, viewport, gl } = useThree();
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  // Dynamic bounds based on current screen size (subtract card size offset)
  const boundX = (viewport.width / 2) - 0.8;
  const boundY = (viewport.height / 2) - 0.8;

  // Load the texture natively
  const texture = useLoader(THREE.TextureLoader, icon);

  // Velocity-driven motion state and unique wobble phases
  const motionState = useRef({
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    wobbleSpeedX: 1 + Math.random(),
    wobbleSpeedY: 1 + Math.random(),
    phaseX: Math.random() * Math.PI * 2,
    phaseY: Math.random() * Math.PI * 2,
  });

  // Calculate destination bounds when triggering transition
  React.useEffect(() => {
    if (viewState === "TO_GRID" || viewState === "GRID") {
      const targetDOM = document.getElementById(`skill-target-${index}`);
      if (targetDOM && gl?.domElement) {
        const canvasRect = gl.domElement.getBoundingClientRect();
        const targetRect = targetDOM.getBoundingClientRect();

        // Target specifically the icon area on the left of the card
        const paddingLeft = 24; // p-6 roughly
        const centerX = targetRect.left + paddingLeft + 16; // 16 is half the icon width
        const centerY = targetRect.top + targetRect.height / 2;

        targetPos.current.x = ((centerX - canvasRect.left) / canvasRect.width) * viewport.width - (viewport.width / 2);
        targetPos.current.y = -(((centerY - canvasRect.top) / canvasRect.height) * viewport.height - (viewport.height / 2));
        targetPos.current.z = 0.5; // slight pop out
      }
    } else if (viewState === "TO_FREE") {
      // Explode outwards gently upon returning to free mode
      motionState.current.vx = (Math.random() - 0.5) * 5.5;
      motionState.current.vy = (Math.random() - 0.5) * 5.5;
    }
  }, [viewState, index, gl, viewport]);

  // Register this node to the shared array for collision detection
  React.useEffect(() => {
    if (sharedNodes) {
      sharedNodes.current[index] = { group: groupRef, motion: motionState };
    }
  }, [sharedNodes, index]);

  // Fluid bounded animation with Collision detection
  useFrame((state, delta) => {
    if (!groupRef.current || !meshRef.current) return;

    // Transition Handler
    if (viewState === "TO_GRID" || viewState === "GRID") {
      groupRef.current.position.lerp(targetPos.current, 0.1);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, 0, 0.1);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, 0, 0.1);
      groupRef.current.scale.lerp(new THREE.Vector3(0.3, 0.3, 0.3), 0.1);
      return;
    }

    if (!isDragging) {
      const pos = groupRef.current.position;
      const mem = motionState.current;

      // 1. Velocity Motion
      pos.x += mem.vx * delta;
      pos.y += mem.vy * delta;

      // 2. Dynamic Boundary Bounce (Clamp & Reverse)
      if (pos.x > boundX) { pos.x = boundX; mem.vx *= -1; }
      if (pos.x < -boundX) { pos.x = -boundX; mem.vx *= -1; }

      if (pos.y > boundY) { pos.y = boundY; mem.vy *= -1; }
      if (pos.y < -boundY) { pos.y = -boundY; mem.vy *= -1; }

      // 3. Strict AABB (Axis-Aligned Bounding Box) Collision Detection
      if (sharedNodes && sharedNodes.current.length > 0) {
        // Our glowing card boundary width/height is exactly 1.22
        const boxSize = 1.22;

        for (let i = 0; i < sharedNodes.current.length; i++) {
          if (i === index) continue;

          const other = sharedNodes.current[i];
          if (!other || !other.group.current) continue;

          const dx = pos.x - other.group.current.position.x;
          const dy = pos.y - other.group.current.position.y;

          // Calculate exact rectangular overlap
          const overlapX = boxSize - Math.abs(dx);
          const overlapY = boxSize - Math.abs(dy);

          if (overlapX > 0 && overlapY > 0) {
            // Cards are actively penetrating on both axes (strict collision hit)!
            const dotProduct = dx * (mem.vx - other.motion.current.vx) + dy * (mem.vy - other.motion.current.vy);

            if (dotProduct < 0) {
              // Elastic bounce: Swap velocities accurately
              const tempVx = mem.vx;
              const tempVy = mem.vy;

              mem.vx = other.motion.current.vx;
              mem.vy = other.motion.current.vy;

              other.motion.current.vx = tempVx;
              other.motion.current.vy = tempVy;

              // Absolute rigid resolution: push out along the shallowest axis frame
              if (overlapX < overlapY) {
                // X-axis collision is smaller, so push horizontally
                const pushX = (overlapX * 0.5) * (Math.sign(dx) || 1);
                pos.x += pushX;
                other.group.current.position.x -= pushX;
              } else {
                // Y-axis collision is smaller, so push vertically
                const pushY = (overlapY * 0.5) * (Math.sign(dy) || 1);
                pos.y += pushY;
                other.group.current.position.y -= pushY;
              }
            }
          }
        }
      }

      // 4. 3D Angled Wobble
      // We set a base 20-degree tilt (approx 0.35 radians) on X and Y to strictly enforce a 3D isometric perspective.
      // The sine wave adds a smooth organic floating wobble around that 3D base.
      const time = state.clock.elapsedTime;
      const tiltAngle = 0.35; // ~20 degrees
      groupRef.current.rotation.x = tiltAngle + Math.sin(time * mem.wobbleSpeedX + mem.phaseX) * 0.15;
      groupRef.current.rotation.y = tiltAngle + Math.cos(time * mem.wobbleSpeedY + mem.phaseY) * 0.15;

      // Reset scale smoothly when not interacting
      const targetScale = isHovered ? 1.1 : 1.0;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    } else {
      // Smoothly level out slightly while dragging
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, 0.1, 0.2);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, 0.1, 0.2);

      // Return scale cleanly while dragging
      groupRef.current.scale.lerp(new THREE.Vector3(1.15, 1.15, 1.15), 0.2);
    }
  });

  const getPositionFromPointer = (e) => {
    // Bulletproof intersection mapping relying strictly on the exact canvas element box
    const rect = gl.domElement.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const target = new THREE.Vector3();
    raycaster.ray.intersectPlane(plane, target);
    return target;
  };

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.target.setPointerCapture(e.pointerId);
    setIsDragging(true);
    document.body.style.cursor = "grabbing";

    const handlePointerMove = (moveEvent) => {
      if (groupRef.current) {
        const newPos = getPositionFromPointer(moveEvent);

        // Strictly clamp dragging bounds to match canvas container using dynamic bounds
        const clampedX = Math.max(-boundX, Math.min(boundX, newPos.x));
        const clampedY = Math.max(-boundY, Math.min(boundY, newPos.y));

        groupRef.current.position.x = clampedX;
        groupRef.current.position.y = clampedY;
        groupRef.current.position.z = position[2];
      }
    };

    const handlePointerUp = (upEvent) => {
      setIsDragging(false);
      document.body.style.cursor = "auto";
      upEvent.target.releasePointerCapture(upEvent.pointerId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  };

  return (
    <group ref={groupRef} position={position}>
      {/* 3D Tech Card Geometry */}
      <mesh
        ref={meshRef}
        onPointerDown={handlePointerDown}
        onPointerOver={(e) => { e.stopPropagation(); setIsHovered(true); if (!isDragging) document.body.style.cursor = "grab"; }}
        onPointerOut={(e) => { setIsHovered(false); if (!isDragging) document.body.style.cursor = "auto"; }}
      >
        <boxGeometry args={[1.2, 1.2, 0.15]} />
        <meshPhysicalMaterial
          color="#18181b"
          roughness={0.4}
          metalness={0.8}
          clearcoat={0.5}
          clearcoatRoughness={0.2}
          emissive={isHovered || isDragging ? color : "#000000"}
          emissiveIntensity={0.2}
        />
        {/* Glowing border effect via secondary larger wireframe box */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.22, 1.22, 0.17]} />
          <meshBasicMaterial color={color} wireframe={true} transparent={true} opacity={isHovered ? 0.8 : 0.2} />
        </mesh>
      </mesh>

      {/* Front Face Logo Plane */}
      <mesh position={[0, 0, 0.08]} pointerEvents="none">
        <planeGeometry args={[0.8, 0.8]} />
        <meshBasicMaterial
          map={texture}
          transparent={true}
          alphaTest={0.05}
          side={THREE.DoubleSide}
          toneMapped={false}
        />
      </mesh>

      {/* Back Face Logo Plane (Reversed so it reads correctly from the back) */}
      <mesh position={[0, 0, -0.08]} rotation={[0, Math.PI, 0]} pointerEvents="none">
        <planeGeometry args={[0.8, 0.8]} />
        <meshBasicMaterial
          map={texture}
          transparent={true}
          alphaTest={0.05}
          side={THREE.DoubleSide}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
};

export default React.memo(SkillNode);
