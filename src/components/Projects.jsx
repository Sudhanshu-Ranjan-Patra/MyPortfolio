import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, FolderGit2, AppWindow } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transformStyle: "preserve-3d",
      }}
      className="relative flex w-full h-full group perspective-1000"
    >
      <div 
        className="glass-card flex flex-col h-full w-full overflow-hidden relative border border-zinc-800/50"
        style={{ 
          transform: "translateZ(0px)", 
          transformStyle: "preserve-3d", 
          transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
          boxShadow: isHovered ? "0 30px 60px -10px rgba(0, 0, 0, 0.9), 0 0 40px rgba(6, 182, 212, 0.35)" : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Dark Background Plate pushed slightly backwards for parallax separation */}
        <div 
          className="absolute inset-0 bg-zinc-900/40 rounded-2xl pointer-events-none"
          style={{ transform: "translateZ(-20px)" }}
        />
        
        {/* Top ambient glow on hover */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-600/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

        {/* Foreground Action 3D Levitation Overlay */}
        <div 
          className="absolute inset-0 z-50 flex items-center justify-center gap-4 bg-zinc-950/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto rounded-2xl"
          style={{ transform: "translateZ(60px)" }}
        >
          <a href={project.source || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 rounded-lg hover:bg-cyan-500/40 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all font-medium text-sm">
            <FolderGit2 size={18} /> Source
          </a>
          <a href={project.live || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 rounded-lg hover:bg-emerald-500/40 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(16,185,129,0.6)] transition-all font-medium text-sm">
            <ExternalLink size={18} /> Live Demo
          </a>
        </div>

        {/* Explicit Z-Indexed Content Layer */}
        <div 
          className="p-8 flex-grow flex flex-col relative z-10 pointer-events-none"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="flex justify-between items-start mb-6">
            <div className="w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-lg group-hover:border-cyan-500/50 transition-colors pointer-events-auto">
              <img 
                className="w-8 h-8 object-contain" 
                src={project.logo} 
                alt={project.title} 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>';
                }}
              />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-3 font-outfit group-hover:text-cyan-400 transition-colors pointer-events-auto">
            {project.title}
          </h3>
          
          <p className="text-zinc-400 font-light text-sm leading-relaxed mb-8 flex-grow pointer-events-auto">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto pointer-events-auto">
            {project.tech.map((t, i) => (
              <span 
                key={i} 
                className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/50 group-hover:border-cyan-500/30 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = forwardRef((props, ref) => {
  const projectData = [
    {
      title: "Medifit",
      desc: "Frontend design of a medical shop with product view, search option, and interactive cart section.",
      tech: ["React", "Tailwind CSS"],
      logo: "../images/medifit-logo.png",
      source: "https://github.com/demo/medifit",
      live: "https://medifit-demo.example.com",
    },
    {
      title: "AI-Powered Disaster Alert System",
      desc: "Full-stack disaster alert platform with real-time weather data, location-based alerts, and future prediction features. Includes safety tips and dynamic dashboards.",
      tech: ["React", "Node.js", "Express", "API Integration", "Chart.js"],
      logo: "../images/disaster-app-logo.png",
      source: "https://github.com/demo/foodyzone",
      live: "https://foodyzone-demo.example.com",
    },
    {
      title: "TODO Application",
      desc: "Managing tasks efficiently with a clean UI, deadline tracking, and completion marking.",
      tech: ["Node.js", "React JS"],
      logo: "../images/todoapp-logo.png",
      source: "https://github.com/demo/todo",
      live: "https://todo-demo.example.com",
    },
    {
      title: "Economic Data Visualization Dashboard",
      desc: "Interactive dashboard for visualizing GDP, CPI, and inflation trends with date filtering, comparison tools, and statistical insights.",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "Chart.js"],
      logo: "../images/economic-dashboard-logo.png",
      source: "https://github.com/demo/weather",
      live: "https://weather-demo.example.com",
    },
    {
      title: "QR Generator",
      desc: "A QR Code Generator that converts text or URLs into QR codes using a QR code API.",
      tech: ["HTML", "CSS", "Vanilla JS"],
      logo: "../images/qr-generator-logo.png",
      source: "https://github.com/demo/qr-generator",
      live: "https://qr-demo.example.com",
    },
    {
      title: "Web-Bocket Clone",
      desc: "Static IT services website presenting its offerings with keyframe animations.",
      tech: ["HTML", "CSS", "Vanilla JS"],
      logo: "../images/website-clone-logo.png",
      source: "https://github.com/demo/web-bocket",
      live: "https://web-bocket-demo.example.com",
    },
  ];

  return (
    <section ref={ref} className="bg-zinc-950 py-24 sm:py-32 relative min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full glass-panel border-cyan-500/20 text-cyan-400">
            <FolderGit2 size={16} />
            <span className="text-zinc-300 text-sm font-medium tracking-wider">PORTFOLIO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-outfit text-center">
            What I Build
          </h2>
        </motion.div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full cursor-pointer relative" style={{ perspective: "1500px" }}>
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
