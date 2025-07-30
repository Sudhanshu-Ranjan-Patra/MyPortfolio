import React from "react";

function Projects() {
  return (
    <div className="bg-black [font-family:Oswald,sans-serif] font-bold pb-10">
      <div className="flex flex-col justify-center items-center">
        <button className="button-primary">Projects</button>
        <h2 className="text-4xl font-bold text-white mt-5">WHAT I BUILD</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-15">
          <div className="flex flex-col bg-[#191C24] w-100 h-65 group relative">
            <div className="mt-10 ml-20 mr-15">
              <h2 className="text-3xl uppercase font-bold text-white ">
                Medifit
              </h2>
              <p className="text-[#6C7293]  font-Franklin font-extralight mt-4 leading-relaxed">
                Frontend design of a medical shop with product view, search option, and interactive cart section.
              </p>
              <p className="text-red-600 uppercase font-Franklin font-light mt-5">React + Tailwindcss</p>  
            </div>
            <div className=" hidden  group-hover:flex transition justify-center items-center ml-87 w-13 h-13 bg-black">
                <p className="rotate-45 cursor-pointer">❌</p>
            </div>

            <div className="absolute flex justify-center items-center top-9 w-15 h-15 bg-black">
                <img className="p-3" src="../images/medifit-logo.png"></img>
            </div>
          </div>

          <div className="flex flex-col bg-[#191C24] w-100 h-65 group relative">
            <div className="mt-10 ml-20 mr-15">
              <h2 className="text-3xl uppercase font-bold text-white ">
                FoodyZone
              </h2>
              <p className="text-[#6C7293]  font-Franklin font-extralight mt-4 leading-relaxed">
                Interactive food ordering app with smart search, category filtering, and smooth navigation.
              </p>
              <p className="text-red-600 uppercase font-Franklin font-light mt-5">React JS + Rest Api</p>  
            </div>
            <div className=" hidden  group-hover:flex transition justify-center items-center ml-87 w-13 h-13 bg-black">
                <p className="rotate-45 cursor-pointer">❌</p>
            </div>

            <div className="absolute flex justify-center items-center top-9 w-15 h-15 bg-black">
                <img className="p-4" src="../images/foodyzone-logo.png"></img>
            </div>
          </div>

          <div className="flex flex-col bg-[#191C24] w-100 h-65 group relative">
            <div className="mt-10 ml-20 mr-15">
              <h2 className="text-3xl uppercase font-bold text-white ">
                TODO application
              </h2>
              <p className="text-[#6C7293]  font-Franklin font-extralight mt-4 leading-relaxed">
                Manageing tasks efficiently with a clean UI, deadline tracking, and completion marking.
              </p>
              <p className="text-red-600 uppercase font-Franklin font-light mt-5">Node js + React Js </p>  
            </div>
            <div className=" hidden  group-hover:flex transition justify-center items-center ml-87 w-13 h-13 bg-black">
                <p className="rotate-45 cursor-pointer">❌</p>
            </div>

            <div className="absolute flex justify-center items-center top-9 w-15 h-15 bg-black">
                <img className="p-4" src="../images/todoapp-logo.png"></img>
            </div>
          </div>

          <div className="flex flex-col bg-[#191C24] w-100 h-65 group relative">
            <div className="mt-10 ml-20 mr-15">
              <h2 className="text-3xl uppercase font-bold text-white ">
                Medifit
              </h2>
              <p className="text-[#6C7293]  font-Franklin font-extralight mt-4 leading-relaxed">
                Frontend design of a medical shop with product view, search option, and interactive cart section.
              </p>
              <p className="text-red-600 uppercase font-Franklin font-light mt-5">React + Vite</p>  
            </div>
            <div className=" hidden  group-hover:flex transition justify-center items-center ml-87 w-13 h-13 bg-black">
                <p className="rotate-45 cursor-pointer">❌</p>
            </div>

            <div className="absolute flex justify-center items-center top-9 w-15 h-15 bg-black">
                <img className="p-2" src="../images/medifit-logo.png"></img>
            </div>
          </div>

          <div className="flex flex-col bg-[#191C24] w-100 h-65 group relative">
            <div className="mt-10 ml-20 mr-15">
              <h2 className="text-3xl uppercase font-bold text-white ">
                Medifit
              </h2>
              <p className="text-[#6C7293]  font-Franklin font-extralight mt-4 leading-relaxed">
                Frontend design of a medical shop with product view, search option, and interactive cart section.
              </p>
              <p className="text-red-600 uppercase font-Franklin font-light mt-5">React + Vite</p>  
            </div>
            <div className=" hidden  group-hover:flex transition justify-center items-center ml-87 w-13 h-13 bg-black">
                <p className="rotate-45 cursor-pointer">❌</p>
            </div>

            <div className="absolute flex justify-center items-center top-9 w-15 h-15 bg-black">
                <img className="p-2" src="../images/medifit-logo.png"></img>
            </div>
          </div>

          <div className="flex flex-col bg-[#191C24] w-100 h-65 group relative">
            <div className="mt-10 ml-20 mr-15">
              <h2 className="text-3xl uppercase font-bold text-white ">
                Medifit
              </h2>
              <p className="text-[#6C7293]  font-Franklin font-extralight mt-4 leading-relaxed">
                Frontend design of a medical shop with product view, search option, and interactive cart section.
              </p>
              <p className="text-red-600 uppercase font-Franklin font-light mt-5">React + Vite</p>  
            </div>
            <div className=" hidden  group-hover:flex transition justify-center items-center ml-87 w-13 h-13 bg-black">
                <p className="rotate-45 cursor-pointer">❌</p>
            </div>

            <div className="absolute flex justify-center items-center top-9 w-15 h-15 bg-black">
                <img className="p-2" src="../images/medifit-logo.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
