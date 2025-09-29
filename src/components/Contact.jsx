import React from "react";

function Contact() {
  return (
    <div className="bg-black [font-family:Oswald,sans-serif] font-bold pb-10 px-4 md:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="bg-[#191C24] p-6 md:p-8 rounded-xl text-white">
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-start gap-8">
            {/* Left Section - Quick Links */}
            <div className="w-1/4">
              <h3 className="text-2xl font-bold mb-6">QUICK LINKS</h3>
              <ul className="flex flex-col gap-3">
                {["Home", "About", "Services", "Blog", "Contact"].map((item) => (
                  <li
                    key={item}
                    className="hover:text-red-600 transition-all duration-200 cursor-pointer text-lg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section - Contact Form */}
            <div className="w-2/3 relative">
              <h3 className="text-2xl font-bold mb-6">GET IN TOUCH</h3>
              <form className="flex flex-col gap-4 pr-20">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-3 rounded bg-[#2A2F3A] text-white placeholder-gray-400 focus:ring-2 focus:ring-red-600 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-3 rounded bg-[#2A2F3A] text-white placeholder-gray-400 focus:ring-2 focus:ring-red-600 focus:outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  className="p-3 rounded bg-[#2A2F3A] text-white placeholder-gray-400 h-32 focus:ring-2 focus:ring-red-600 focus:outline-none resize-none"
                ></textarea>
                <button className="bg-red-600 hover:bg-[#d21717] transition-colors duration-300 text-white py-3 rounded-lg font-semibold">
                  Send Message
                </button>
              </form>

              {/* Overlapping Avatar Image */}
              <div className="absolute -right-4 top-1/2 transform -translate-y-2/5 z-10">
                <img
                  className="w-50 h-80"
                  src="../images/contact-img.png"
                  alt="Contact"
                />
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            {/* Contact Form and Image Section */}
            <div className=" flex flex-col sm:flex-row gap-6 mb-8">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4">GET IN TOUCH</h3>
                <form className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="p-3 rounded bg-[#2A2F3A] text-white placeholder-gray-400 focus:ring-2 focus:ring-red-600 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="p-3 rounded bg-[#2A2F3A] text-white placeholder-gray-400 focus:ring-2 focus:ring-red-600 focus:outline-none"
                  />
                  <textarea
                    placeholder="Your Message"
                    className="p-3 rounded bg-[#2A2F3A] text-white placeholder-gray-400 h-24 focus:ring-2 focus:ring-red-600 focus:outline-none resize-none"
                  ></textarea>
                  <button className="bg-red-600 hover:bg-[#d21717] transition-colors duration-300 text-white py-3 rounded-lg font-semibold">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Image beside form on mobile */}
              <div className=" absolute bottom-2 right-8 flex justify-center items-center sm:w-fit sm:h-fit">
                <img
                  className="w-fit h-60 sm:w-fit sm:h-60 "
                  src="../images/contact-img.png"
                  alt="Contact"
                />
              </div>
            </div>

            {/* Quick Links below on mobile */}
            <div>
              <h3 className="text-xl font-bold mb-4">QUICK LINKS</h3>
              <ul className="flex flex-col gap-2">
                {["Home", "About", "Services", "Blog", "Contact"].map((item) => (
                  <li
                    key={item}
                    className="hover:text-red-600 transition-all duration-200 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
