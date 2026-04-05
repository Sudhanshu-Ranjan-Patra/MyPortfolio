import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';
import SkillNode from './SkillNode';

const skillData = [
  { name: 'HTML5', color: '#f97316', position: [-3, 1.5, 0], icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3', color: '#3b82f6', position: [3, 1.5, -1], icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'JavaScript', color: '#facc15', position: [0, 2, 1], icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'React', color: '#22d3ee', position: [-1.5, -1, 1], icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Node.js', color: '#10b981', position: [1.5, -1, 0.5], icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Tailwind CSS', color: '#2dd4bf', position: [-2.5, -3, 0], icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'DSA', color: '#a855f7', position: [2.5, -2.5, -0.5], icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg' },
];

const SkillsCanvas = ({ viewState }) => {
  const sharedNodes = React.useRef([]);

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
        style={{ touchAction: 'none' }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22d3ee" />
        
        <Suspense fallback={null}>
          {skillData.map((skill, index) => (
            <SkillNode key={index} index={index} sharedNodes={sharedNodes} viewState={viewState} {...skill} />
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
