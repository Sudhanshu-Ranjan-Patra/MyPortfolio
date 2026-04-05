import React, { forwardRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillsGrid from "./SkillsGrid";
import SkillsCanvas from "./SkillsCanvas";
import { LayoutGrid, Cuboid } from "lucide-react";

const skills = [
  { name: "HTML5", level: 100, color: "text-orange-500", bg: "bg-orange-500", hexColor: "#f97316", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", level: 95, color: "text-blue-500", bg: "bg-blue-500", hexColor: "#3b82f6", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "JavaScript", level: 80, color: "text-yellow-400", bg: "bg-yellow-400", hexColor: "#facc15", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "React", level: 85, color: "text-cyan-400", bg: "bg-cyan-400", hexColor: "#22d3ee", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Tailwind CSS", level: 90, color: "text-teal-400", bg: "bg-teal-400", hexColor: "#2dd4bf", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", level: 90, color: "text-emerald-500", bg: "bg-emerald-500", hexColor: "#10b981", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", level: 80, color: "text-gray-300", bg: "bg-gray-500", hexColor: "#d1d5db", icon: "https://www.peanutsquare.com/wp-content/uploads/2024/04/Express.png" },
  { name: "MongoDB", level: 75, color: "text-green-500", bg: "bg-green-500", hexColor: "#22c55e", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "REST APIs", level: 70, color: "text-indigo-400", bg: "bg-indigo-400", hexColor: "#818cf8", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  { name: "AI Models", level: 50, color: "text-purple-600", bg: "bg-purple-600", hexColor: "#f472b6", icon: "https://static.vecteezy.com/system/resources/previews/009/326/975/non_2x/artificial-intelligence-icon-on-white-background-flat-style-artificial-intelligence-icon-ai-logo-symbol-vector.jpg" },
  { name: "LLMs", level: 60, color: "text-purple-400", bg: "bg-purple-400", hexColor: "#c084fc", icon: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png" },
  { name: "Three.js", level: 50, color: "text-white", bg: "bg-sky-600", hexColor: "#ffffff", icon: "https://canada1.discourse-cdn.com/flex035/uploads/threejs/original/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png" },
  { name: "GitHub", level: 85, color: "text-gray-400", bg: "bg-gray-600", hexColor: "#a9a1a1ff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "DSA", level: 40, color: "text-purple-500", bg: "bg-purple-500", hexColor: "#a855f7", icon: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" },
];

const Skill = forwardRef((props, ref) => {
  // States: "FREE", "TO_GRID", "GRID", "TO_FREE"
  const [viewState, setViewState] = useState("FREE");

  // Automatically resolve transitions after 600ms
  useEffect(() => {
    if (viewState === "TO_GRID") {
      const timer = setTimeout(() => setViewState("GRID"), 600);
      return () => clearTimeout(timer);
    } else if (viewState === "TO_FREE") {
      const timer = setTimeout(() => setViewState("FREE"), 600);
      return () => clearTimeout(timer);
    }
  }, [viewState]);

  const handleToggle = (targetGrid) => {
    if (targetGrid && (viewState === "FREE" || viewState === "TO_FREE")) {
      setViewState("TO_GRID");
    } else if (!targetGrid && (viewState === "GRID" || viewState === "TO_GRID")) {
      setViewState("TO_FREE");
    }
  };

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
              onClick={() => handleToggle(false)}
              className={`flex-1 sm:flex-none flex justify-center items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 text-sm font-medium whitespace-nowrap ${(viewState === "FREE" || viewState === "TO_FREE") ? 'bg-cyan-500/20 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.2)]' : 'text-zinc-400 hover:text-white hover:bg-zinc-800'}`}
            >
              <Cuboid size={16} /> Free Mode
            </button>
            <button
              onClick={() => handleToggle(true)}
              className={`flex-1 sm:flex-none flex justify-center items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 text-sm font-medium whitespace-nowrap ${(viewState === "GRID" || viewState === "TO_GRID") ? 'bg-emerald-500/20 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]' : 'text-zinc-400 hover:text-white hover:bg-zinc-800'}`}
            >
              <LayoutGrid size={16} /> Organize Skills
            </button>
          </div>
        </motion.div>

        {/* Dynamic Mode Content with Overlap Architecture */}
        <div className="w-full px-0 sm:px-6 lg:px-12 relative min-h-[500px] lg:min-h-[600px]">

          {/* Grid Mode (renders behind Canvas invisibly until needed) */}
          <div
            className={`w-full transition-opacity duration-300 px-6 sm:px-0 ${
              (viewState === "GRID" || viewState === "TO_GRID") ? "relative" : "absolute inset-x-0 top-0 pointer-events-none"
            }`}
            style={{
              opacity: viewState === "GRID" ? 1 : 0,
              pointerEvents: viewState === "GRID" ? "auto" : "none"
            }}
          >
            <SkillsGrid skills={skills} viewState={viewState} />
          </div>

          {/* Canvas Mode (renders layered on top) */}
          <div
            className="absolute inset-x-0 top-0 transition-opacity duration-300"
            style={{
              opacity: viewState === "GRID" ? 0 : 1,
              zIndex: viewState === "GRID" ? -10 : 10,
              pointerEvents: (viewState === "FREE" || viewState === "TO_FREE") ? "auto" : "none"
            }}
          >
            <SkillsCanvas skills={skills} viewState={viewState} />
          </div>

        </div>

      </div>
    </section>
  );
});

Skill.displayName = 'Skill';
export default Skill;
