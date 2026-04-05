import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar({ scrollToHome, scrollToAbout, scrollToProjects, scrollToSkill, scrollToContact }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [isMobileMenuOpen]);

  const handleNavClick = (scrollHandler) => {
    scrollHandler();
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "HOME", handler: scrollToHome },
    { name: "ABOUT", handler: scrollToAbout },
    { name: "PROJECTS", handler: scrollToProjects },
    { name: "SKILLS", handler: scrollToSkill },
    { name: "CONTACT", handler: scrollToContact },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50 shadow-lg shadow-black/20" : "bg-transparent py-4"
          }`}
      >
        <div className="container mx-auto px-6 lg:px-12 h-20 flex justify-between items-center">
          {/* Logo */}
          <div
            onClick={scrollToHome}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-[2px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 font-outfit">DC</span>
              </div>
            </div>
            <span className="text-xl md:text-2xl font-bold text-white tracking-wide font-outfit">
              DEAR<span className="text-cyan-400">CODE</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-widest text-zinc-400">
            {navItems.map((item, index) => (
              <span
                key={index}
                onClick={item.handler}
                className="cursor-pointer hover:text-cyan-400 transition-colors duration-300 relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </span>
            ))}

            <a
              href="https://drive.google.com/file/d/1h5hXqEaNaKDP0TQuTVbZS2WwteMlbTjb/view"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-2.5 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700 hover:border-cyan-500/50 transition-all duration-300 text-sm font-medium flex items-center gap-2 group"
            >
              Resume
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-zinc-300 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden flex justify-end"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={toggleMobileMenu} />
            <div className="w-64 h-full bg-zinc-950 border-l border-zinc-800/50 relative z-50 p-8 flex flex-col">
              <div className="flex flex-col gap-6 mt-16">
                {navItems.map((item, index) => (
                  <span
                    key={index}
                    onClick={() => handleNavClick(item.handler)}
                    className="text-zinc-400 hover:text-cyan-400 text-lg font-medium tracking-wider cursor-pointer transition-colors"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
              <div className="mt-auto pb-8">
                <a
                  href="https://drive.google.com/file/d/1h5hXqEaNaKDP0TQuTVbZS2WwteMlbTjb/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-500 text-white font-medium shadow-lg shadow-cyan-500/20"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;