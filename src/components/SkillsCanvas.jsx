import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';
import SkillNode from './SkillNode';

const SkillsCanvas = ({ skills = [], viewState }) => {
  const sharedNodes = React.useRef([]);

  // Memoize positions to prevent random jumping on re-renders, 
  // ensuring each skill has a stable random initial position in FREE mode.
  const canvasSkills = React.useMemo(() => {
    return skills.map((skill) => {
      const x = (Math.random() - 0.5) * 6; // -3 to 3
      const y = (Math.random() - 0.5) * 4; // -2 to 2
      const z = (Math.random() - 0.5) * 2; // -1 to 1
      return {
        ...skill,
        position: [x, y, z],
      };
    });
  }, [skills]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="w-full h-[500px] lg:h-[600px] relative rounded-none sm:rounded-2xl overflow-hidden bg-black border-y sm:border border-zinc-800/50"
    >
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 50 }} 
        dpr={[1, 1.5]}
        style={{ touchAction: (viewState === 'FREE' || viewState === 'TO_FREE') ? 'none' : 'auto' }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22d3ee" />
        
        <Suspense fallback={null}>
          {canvasSkills.map((skill, index) => (
            <SkillNode 
              key={index} 
              index={index} 
              sharedNodes={sharedNodes} 
              viewState={viewState} 
              name={skill.name}
              color={skill.hexColor}
              position={skill.position}
              icon={skill.icon}
            />
          ))}
          
          <Environment preset="city" />
          <ContactShadows position={[0, -4.5, 0]} opacity={0.6} scale={20} blur={2.5} far={4} />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none">
        <span className="bg-zinc-900/60 backdrop-blur-md px-4 py-1.5 rounded-full text-zinc-400 text-xs font-mono border border-zinc-800">
          Try dragging the objects!
        </span>
      </div>
    </motion.div>
  );
};

export default SkillsCanvas;
