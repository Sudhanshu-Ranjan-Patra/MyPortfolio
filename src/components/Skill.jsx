import React, { forwardRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillsGrid from "./SkillsGrid";
import SkillsCanvas from "./SkillsCanvas";
import { LayoutGrid, Cuboid } from "lucide-react";

const skills = [
  { name: "HTML5", level: 90, color: "text-orange-500", bg: "bg-orange-500", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", level: 85, color: "text-blue-500", bg: "bg-blue-500", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "JavaScript", level: 75, color: "text-yellow-400", bg: "bg-yellow-400", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "React", level: 70, color: "text-cyan-400", bg: "bg-cyan-400", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Node.js", level: 65, color: "text-emerald-500", bg: "bg-emerald-500", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Tailwind CSS", level: 80, color: "text-teal-400", bg: "bg-teal-400", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "DSA", level: 35, color: "text-purple-500", bg: "bg-purple-500", icon: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" },
];

const Skill = forwardRef((props, ref) => {
  const [isGridMode, setIsGridMode] = useState(false);

  return (
    <section ref={ref} className="bg-zinc-950 py-24 sm:py-32 relative min-h-screen">
      <div className="container mx-auto relative z-10">
        
        {/* Header & Toggle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12 px-6 lg:px-12"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full glass-panel border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-zinc-300 text-sm font-medium tracking-wider">TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-outfit text-center mb-8">
            Things I’ve Picked Up
          </h2>

          <div className="flex bg-zinc-900 border border-zinc-800 rounded-lg p-1 overflow-x-auto w-full sm:w-auto overflow-y-hidden scrollbar-hide">
            <button
              onClick={() => setIsGridMode(false)}
              className={`flex-1 sm:flex-none flex justify-center items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 text-sm font-medium whitespace-nowrap ${!isGridMode ? 'bg-cyan-500/20 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.2)]' : 'text-zinc-400 hover:text-white hover:bg-zinc-800'}`}
            >
              <Cuboid size={16} /> Free Mode
            </button>
            <button
              onClick={() => setIsGridMode(true)}
              className={`flex-1 sm:flex-none flex justify-center items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 text-sm font-medium whitespace-nowrap ${isGridMode ? 'bg-emerald-500/20 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]' : 'text-zinc-400 hover:text-white hover:bg-zinc-800'}`}
            >
              <LayoutGrid size={16} /> Organize Skills
            </button>
          </div>
        </motion.div>

        {/* Dynamic Mode Content */}
        <div className="w-full px-0 sm:px-6 lg:px-12">
          <AnimatePresence mode="wait">
            {!isGridMode ? (
              <SkillsCanvas key="canvas" />
            ) : (
              <div key="grid" className="px-6 sm:px-0">
                <SkillsGrid skills={skills} />
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
});

Skill.displayName = 'Skill';
export default Skill;
