import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { Code2, Monitor, ArrowRight } from "lucide-react";

const About = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="bg-zinc-950 py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center w-full mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-cyan-500/20">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-zinc-300 text-sm font-medium tracking-wider">ABOUT ME</span>
          </div>
          
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Image & Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-square md:w-4/5 mx-auto lg:mx-0 border border-zinc-800 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent mix-blend-overlay z-10"></div>
              <img 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                src="../images/SRP-image.jpg" 
                alt="Sudhanshu Ranjan Patra" 
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=600&auto=format&fit=crop";
                }}
              />
            </div>

            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
              className="absolute -bottom-6 -right-6 sm:bottom-10 sm:-right-10 glass-card p-6 rounded-2xl border border-cyan-500/30 flex flex-col gap-2"
            >
              <div className="flex gap-2 items-center">
                <Code2 className="text-cyan-400" size={24} />
                <span className="text-white font-bold text-xl font-outfit">Frontend</span>
              </div>
              <p className="text-zinc-400 text-sm">Developer</p>
            </motion.div>
          </motion.div>

          {/* Right Column - Text & Stats */}
          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-4xl font-bold text-white font-outfit">
            More than just code.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">Building things that matter.</span>
          </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6 font-light">
                I'm a passionate frontend developer who turns ideas into beautiful
                and responsive web applications. With a strong foundation in
                JavaScript, React, and modern UI libraries, I enjoy crafting clean,
                efficient, and accessible experiences.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                Currently focused on growing as a full-stack developer while
                building real-world projects and contributing to open-source. Always
                learning. Always improving.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-6 pt-6 border-t border-zinc-800"
            >
              <div className="flex flex-col gap-2 group">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-2 group-hover:border-cyan-500/50 transition-colors">
                  <Monitor className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-white text-3xl font-bold font-outfit">1.5+ <span className="text-cyan-500 text-xl">YRS</span></h3>
                <p className="text-zinc-500 text-sm">Hands-on experience in clean, maintainable code.</p>
              </div>
              
              <div className="flex flex-col gap-2 group">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-2 group-hover:border-emerald-500/50 transition-colors">
                  <Code2 className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-white text-3xl font-bold font-outfit">10+ <span className="text-emerald-500 text-xl">PROJ</span></h3>
                <p className="text-zinc-500 text-sm">Real-world applications crafted with precision.</p>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
