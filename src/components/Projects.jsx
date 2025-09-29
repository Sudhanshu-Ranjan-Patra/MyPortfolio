import React from "react";

function Projects() {
  const projectData = [
    {
      title: "Medifit",
      desc: "Frontend design of a medical shop with product view, search option, and interactive cart section.",
      tech: "React + Tailwindcss",
      logo: "../images/medifit-logo.png",
    },
    {
      title: "FoodyZone",
      desc: "Interactive food ordering app with smart search, category filtering, and smooth navigation.",
      tech: "React JS + Rest Api",
      logo: "../images/foodyzone-logo.png",
    },
    {
      title: "TODO application",
      desc: "Manageing tasks efficiently with a clean UI, deadline tracking, and completion marking.",
      tech: "Node js + React Js",
      logo: "../images/todoapp-logo.png",
    },
    {
      title: "Weather App",
      desc: "Weather forecast web app with real-time API integration for city based weather updates.",
      tech: "HTML + CSS + JS",
      logo: "../images/weatherapp-logo.png",
    },
    {
      title: "QR Generator",
      desc: "A QR Code Generator that converts text or URLs into QR codes using a QR code API",
      tech: "Html + CSS + JS",
      logo: "../images/qr-generator-logo.png",
    },
    {
      title: "Web-Bocket Clone",
      desc: "Static IT services website presenting it's offerings with keyframe animations.",
      tech: "Html + CSS + JS",
      logo: "../images/website-clone-logo.png",
    },
  ];

  return (
    <div className="bg-black [font-family:Oswald,sans-serif] font-bold pb-10">
      <div className="flex flex-col justify-center items-center">
        <button className="button-primary">Projects</button>
        <h2 className="text-4xl font-bold text-white mt-5">WHAT I BUILD</h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-15 w-full px-4 sm:px-10 lg:px-25 cursor-pointer">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col bg-[#191C24] w-full sm:h-[260px] md:h-[2800px] lg:h-[280px] group relative"
            >
              <div className="mt-10 mb-10 ml-10 sm:ml-10 md:ml-20 mr-5 sm:mr-10 md:mr-15">
                <h2 className="text-2xl pl-5 sm:pl-0 sm:text-3xl md:text-3xl uppercase font-bold text-white">
                  {project.title}
                </h2>
                <p className="text-[#6C7293] font-Franklin font-extralight mt-4 leading-relaxed text-sm sm:text-base md:text-base">
                  {project.desc}
                </p>
                <p className="text-red-600 uppercase font-Franklin font-light mt-5 text-sm sm:text-base">
                  {project.tech}
                </p>
              </div>

              <div className="hidden group-hover:flex transition justify-center items-center absolute bottom-0 right-0 w-12 h-12 bg-black">
                <p className="rotate-45 cursor-pointer">❌</p>
              </div>

              <div className="absolute flex justify-center items-center top-7 left-0 w-15 h-15 bg-black">
                <img className="p-3" src={project.logo} alt={project.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
