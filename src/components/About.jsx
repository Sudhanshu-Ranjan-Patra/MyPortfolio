import React from "react";

function About() {
  return (
    <div className="bg-black [font-family:Oswald,sans-serif] font-bold">
      <div className="About grid grid-cols-1 sm:grid-cols-2">
        <div className="left relative m-20 sm:ml-60 sm:mr-5">
          <img className="" src="../images/SRP-image.jpg" alt="" />
        </div>

        <div className="absolute flex flex-col items-center justify-center text-start bg-[#191C24] m-10 sm:m-20 sm:ml-30 mr-5 w-50 h-30 sm:w-65 sm:h-40 mt-90 sm:mt-105  ">
          <p className="text-2xl sm:text-4xl text-red-600">
            {"<"}FRONTEND{"/>"}
          </p>
          <p className="text-2xl sm:text-4xl text-white">DEVELOPER</p>
        </div>

        <div className="right m-20 ml-5 mr-25">
          <button className="button-primary">About Me</button>

          <h2 className="text-4xl font-bold text-white mt-5">
            MORE THAN JUST CODE. BUILDING THINGS THAT MATTER. . .{"</>"}
          </h2>
          <p className="text-[#6C7293]  font-Franklin font-extralight mt-5 leading-relaxed">
            I'm a passionate frontend developer who turns ideas into beautiful
            and responsive web applications. With a strong foundation in
            JavaScript, React, and modern UI libraries, I enjoy crafting clean,
            efficient, and accessible experiences.
          </p>
          <p className="text-[#6C7293]  font-Franklin font-extralight mt-5 leading-relaxed">
            Currently focused on growing as a full-stack developer while
            building real-world projects and contributing to open-source. Always
            learning. Always improving.
          </p>
          <div className="grid grid-cols-2 gap-10 mt-8">
            <div>
              <h3 className="text-white text-3xl font-bold">1+ YEARS</h3>
              <p className="text-[#6C7293] mt-2 font-Franklin font-medium ">
                Hands-on experience in writing clean and maintainable code.
              </p>
            </div>
            <div>
              <h3 className="text-white text-3xl  font-bold">10+ PROJECTS</h3>
              <p className="text-[#6C7293] mt-2 font-Franklin font-medium ">
                Created modern web apps with real-world use coded with
                precision, passion & a addiction to Ctrl+Z
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
