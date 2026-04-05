import React from "react";
import { motion } from "framer-motion";

const SkillsGrid = ({ skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="glass-card p-6 flex flex-col justify-between hover:bg-zinc-800/80 transition-all duration-300"
        >
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <img src={skill.icon} alt={skill.name} className="w-8 h-8 object-contain drop-shadow-md" />
              <span className={`font-outfit font-semibold text-lg text-white group-hover:${skill.color} transition-colors`}>
                {skill.name}
              </span>
            </div>
            <span className="text-zinc-500 font-mono text-sm group-hover:text-zinc-300 transition-colors">
              {skill.level}%
            </span>
          </div>
          
          {/* Progress Bar Container */}
          <div className="w-full bg-zinc-800/50 rounded-full h-1.5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
              className={`h-full rounded-full ${skill.bg} shadow-[0_0_10px_currentColor]`}
            ></motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillsGrid;
