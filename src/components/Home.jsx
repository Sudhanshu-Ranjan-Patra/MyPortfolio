import React from "react";


function Home() {
  return (
    <div className="bg-black [font-family:Oswald,sans-serif] font-bold">
      <div className="bg-[url('../images/bg-img.png')] relative bg-no-repeat bg-center bg-cover h-120 sm:h-screen opacity-12 w-full"></div>
      <div className="absolute top-1/4 sm:top-1/2 left-1/8 sm:left-1/5">
        <p className="text-2xl md:text-4xl flex gap-3 text-white tracking-wide">
          <p className=" text-red-600">
            {"<"}HELLO{"/>"}
          </p>{" "}
          <p>I'm</p>
        </p>
        <h1 className="text-5xl md:text-7xl  text-white mt-2 opacity-100">
          
          SUDHANSHU RANJAN <br />
          PATRA
        </h1>
        <div className="text-sm sm:text-xl flex flex-col gap-2 tracking-wide text-white mt-5">
          <div className="flex gap-2">
            <span className="flex">
              <p>{"< "}</p>
              <p className=" font-extralight text-red-600">LEARNING</p>
              <p>{"/>"},</p>
            </span>
            <span className="flex">
              <p>{"< "}</p>
              <p className=" font-extralight text-red-600">BUILDING</p>
              <p>{"/>"},</p>
            </span>
            <span>
              <p className=" ">
                {""}and{""}
              </p>
            </span>
            <span className="flex">
              <p>{"< "}</p>
              <p className=" font-extralight text-red-600">GROWING</p>
              <p>{"/>"}</p>
            </span>
          </div>
          <div>
            {""}ONE LINE OF CODE AT A TIME . . . {"</> "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
