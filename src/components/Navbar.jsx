import React from 'react'

function Navbar() {
  return (
    <div>
        <div className='flex flex-row justify-between items-center bg-[#191C24] w-screen h-15 sm:h-25 [font-family:Oswald,sans-serif] font-bold '>
            <div className="logo flex sm:gap-2 items-center text-4xl text-red-600 ml-5 md:ml-20 cursor-pointer">
                <img className='w-18 ' src="../images/DearCode-logo.png" alt="" />
                DEARCODE
            </div>
            <div className="nav-ops flex gap-10 items-center text-lg font-black text-[#6C7293] mr-10">
                <div className='hidden md:flex gap-10 items-center text-lg font-black text-[#6C7293]'>
                  <span className='transition hover:text-red-600 cursor-pointer'>HOME</span>
                  <span className='transition hover:text-red-600 cursor-pointer'>ABOUT</span>
                  <span className='transition hover:text-red-600 cursor-pointer'>PROJECTS</span>
                  <span className='transition hover:text-red-600 cursor-pointer'>SKILLS</span>
                  <span className='transition hover:text-red-600 cursor-pointer'>CONTACT</span>
                </div>
                <button className='bg-red-600 text-xl text-white px-4 py-1 md:px-8 md:py-2 font-normal transition hover:bg-red-700 cursor-pointer'>Hire me ☞</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar