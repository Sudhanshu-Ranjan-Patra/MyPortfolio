import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import HeroCanvas from "./CanvasModels";

const Home = forwardRef((props, ref) => {
  return (
    <section 
      ref={ref} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 pt-20 sm:pt-10"
    >
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[128px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/20 rounded-full mix-blend-screen filter blur-[128px] animate-pulse" style={{ animationDelay: "2s" }}></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
        
        {/* Text Content */}
        <div className="flex flex-col justify-center order-2 lg:order-1 mt-10 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-cyan-400 font-mono text-lg font-medium tracking-wider">
                {"<"}HELLO WORLD{"/>"}
              </span>
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl font-outfit"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            SUDHANSHU <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              RANJAN PATRA
            </span>
          </motion.h1>

          <motion.div 
            className="glass-card p-6 md:p-8 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm sm:text-base text-zinc-300 font-mono mb-4">
              <span className="flex gap-1 items-center">
                <span className="text-zinc-500">{"<"}</span>
                <span className="text-cyan-400">LEARNING</span>
                <span className="text-zinc-500">{"/>"}</span>
              </span>
              <span className="flex gap-1 items-center">
                <span className="text-zinc-500">{"<"}</span>
                <span className="text-cyan-400">BUILDING</span>
                <span className="text-zinc-500">{"/>"}</span>
              </span>
              <span className="flex gap-1 items-center">
                <span className="text-zinc-500">{"<"}</span>
                <span className="text-cyan-400">GROWING</span>
                <span className="text-zinc-500">{"/>"}</span>
              </span>
            </div>
            <p className="text-lg md:text-xl text-zinc-400 border-l-2 border-cyan-500 pl-4">
              Crafting premium digital experiences, {" "}
              <span className="text-zinc-200">one line of code at a time.</span>
            </p>
          </motion.div>
          <div className="flex items-center gap-3 mt-8">
              <span className="text-cyan-400 font-mono text-lg font-medium tracking-wider">
                {"<"}{"/>"}
              </span>
            </div>
        </div>

        {/* 3D Canvas Area */}
        <motion.div 
          className="order-1 lg:order-2 h-[400px] sm:h-[500px] lg:h-[700px] w-full flex items-center justify-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          <HeroCanvas />
        </motion.div>

      </div>
    </section>
  );
});

Home.displayName = "Home";

export default Home;
