import React from "react";

function Skill() {
  return (
    <div className="bg-black [font-family:Oswald,sans-serif] font-bold pb-10">
        <div className="flex flex-col justify-center items-center pt-10">
            <button className="button-primary ">My Skills</button>
        </div>
      <div className="Skills grid grid-cols-1 sm:grid-cols-2 pt-10">
        <div className="skill-bar bg-[#191C24] sm:ml-25 p-8 space-y-6 pt-10">
            <h2 className="text-4xl font-bold uppercase text-white mt-5">Things I’ve Picked Up</h2>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-white">HTML</span>
              <span className="text-white">90%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-red-600 h-3 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>

          {/* Skill 2 */}
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-white">CSS</span>
              <span className="text-white">85%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-red-600 h-3 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>

          {/* Skill 3 */}
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-white">JavaScript</span>
              <span className="text-white">75%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-red-600 h-3 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>

          {/* Skill 4 */}
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-white">React</span>
              <span className="text-white">70%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-red-600 h-3 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>

          {/* Skill 5 */}
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-white">Node.js</span>
              <span className="text-white">65%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-red-600 h-3 rounded-full"
                style={{ width: "65%" }}
              ></div>
            </div>
          </div>

          {/* Skill 6 */}

          <div className="flex justify-between mb-1">
            <span className="text-white">Tailwind CSS</span>
            <span className="text-white">80%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div
              className="bg-red-600 h-3 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>

          {/* Skill 7 */}
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-white">DSA</span>
              <span className="text-white">35%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-red-600 h-3 rounded-full"
                style={{ width: "35%" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="sm:mr-25 flex justify-center items-center">
          <img
            src="../images/Skills-img2.png"
            alt="Skills"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Skill;
