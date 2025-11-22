import React, { useState, useEffect } from "react";

function Navbar({ scrollToHome, scrollToAbout, scrollToProjects, scrollToSkill, scrollToContact }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // 🔒 Scroll Lock on menu open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"; // disable scrolling
    } else {
      document.body.style.overflow = ""; // enable scrolling
    }
    // Cleanup when component unmounts
    return () => (document.body.style.overflow = "");
  }, [isMobileMenuOpen]);

   // A helper function to close the mobile menu after clicking a link
  const handleNavClick = (scrollHandler) => {
    scrollHandler(); // Call the scrolling function passed from App.js
    setIsMobileMenuOpen(false); // Close the mobile menu
  };

  return (
    <div>
      {/* Top Navbar */}
      <div className="flex flex-row justify-between items-center bg-[#191C24] w-screen h-16 sm:h-20 md:h-25 [font-family:Oswald,sans-serif] font-bold relative z-50">
        {/* Logo */}
        <div className="logo flex gap-1 sm:gap-2 items-center text-2xl sm:text-3xl md:text-4xl text-red-600 ml-3 sm:ml-5 md:ml-20 cursor-pointer">
          <img
            className="w-12 sm:w-16 md:w-18"
            src="../images/DearCode-logo.png"
            alt=""
          />
          <span className=" xs:block">DEARCODE</span>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-ops flex gap-4 sm:gap-6 md:gap-10 items-center text-lg font-black text-[#6C7293] mr-3 sm:mr-5 md:mr-10">
          <div className="hidden lg:flex gap-6 xl:gap-10 items-center text-sm xl:text-lg font-black text-[#6C7293]">
            <span onClick={scrollToHome} className="transition hover:text-red-600 cursor-pointer">HOME</span >
            <span onClick={scrollToAbout} className="transition hover:text-red-600 cursor-pointer">ABOUT</span >
            <span onClick={scrollToProjects} className="transition hover:text-red-600 cursor-pointer">PROJECTS</span >
            <span onClick={scrollToSkill} className="transition hover:text-red-600 cursor-pointer">SKILLS</span >
            <span onClick={scrollToContact} className="transition hover:text-red-600 cursor-pointer">CONTACT</span >
          </div>

          {/* Hire Me Button */}
          <a 
            href="https://drive.google.com/file/d/1_HSX_4nQlJ0Ht-fQhmrPwUSQ6H_Vdfvy/view"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-sm sm:text-lg md:text-xl text-white px-3 py-1 sm:px-4 sm:py-1 md:px-8 md:py-2 font-normal transition hover:bg-red-700 cursor-pointer whitespace-nowrap"
          >
            Hire me ☞
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex flex-col gap-1 p-2 ml-2"
            aria-label="Toggle mobile menu"
          >
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMobileMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-16 sm:top-20 right-0 w-64 h-screen 
        bg-[#191C24]/80 backdrop-blur-40 z-50 transform transition-transform duration-300 ease-in-out [font-family:Oswald,sans-serif] ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
  }`}
      >
        <div className="flex flex-col p-6 gap-6">
          <div className="flex flex-col gap-4 text-lg font-black text-[#6C7293] border-b border-gray-600 pb-6">
            <span onClick={() => handleNavClick(scrollToHome)} className="transition hover:text-red-600 cursor-pointer py-2">HOME</span>
            <span onClick={() => handleNavClick(scrollToAbout)} className="transition hover:text-red-600 cursor-pointer py-2">ABOUT</span>
            <span onClick={() => handleNavClick(scrollToProjects)} className="transition hover:text-red-600 cursor-pointer py-2">PROJECTS</span>
            <span onClick={() => handleNavClick(scrollToSkill)} className="transition hover:text-red-600 cursor-pointer py-2">SKILLS</span>
            <span onClick={() => handleNavClick(scrollToContact)} className="transition hover:text-red-600 cursor-pointer py-2">CONTACT</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;