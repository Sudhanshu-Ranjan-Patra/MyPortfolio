import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, FolderGit2, AppWindow } from "lucide-react";

const Projects = forwardRef((props, ref) => {
  const projectData = [
    {
      title: "Medifit",
      desc: "Frontend design of a medical shop with product view, search option, and interactive cart section.",
      tech: ["React", "Tailwind CSS"],
      logo: "../images/medifit-logo.png",
    },
    {
      title: "FoodyZone",
      desc: "Interactive food ordering app with smart search, category filtering, and smooth navigation.",
      tech: ["React JS", "REST API"],
      logo: "../images/foodyzone-logo.png",
    },
    {
      title: "TODO Application",
      desc: "Managing tasks efficiently with a clean UI, deadline tracking, and completion marking.",
      tech: ["Node.js", "React JS"],
      logo: "../images/todoapp-logo.png",
    },
    {
      title: "Weather App",
      desc: "Weather forecast web app with real-time API integration for city-based weather updates.",
      tech: ["HTML", "CSS", "Vanilla JS"],
      logo: "../images/weatherapp-logo.png",
    },
    {
      title: "QR Generator",
      desc: "A QR Code Generator that converts text or URLs into QR codes using a QR code API.",
      tech: ["HTML", "CSS", "Vanilla JS"],
      logo: "../images/qr-generator-logo.png",
    },
    {
      title: "Web-Bocket Clone",
      desc: "Static IT services website presenting its offerings with keyframe animations.",
      tech: ["HTML", "CSS", "Vanilla JS"],
      logo: "../images/website-clone-logo.png",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full cursor-pointer">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card flex flex-col h-full group overflow-hidden relative"
            >
              {/* Top ambient glow on hover */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-600/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="p-8 flex-grow flex flex-col relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-lg group-hover:border-cyan-500/50 transition-colors">
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
                  <div className="flex gap-3 text-zinc-500">
                    <AppWindow className="w-5 h-5 hover:text-cyan-400 transition-colors" />
                    <ExternalLink className="w-5 h-5 hover:text-emerald-400 transition-colors" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 font-outfit group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-zinc-400 font-light text-sm leading-relaxed mb-8 flex-grow">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
