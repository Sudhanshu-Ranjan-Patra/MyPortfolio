import React from "react";

function Contact() {
  return (
    <div className="bg-black [font-family:Oswald,sans-serif] font-bold pb-10">
      <div className="contact flex flex-col md:flex-row justify-between bg-[#191C24] p-8 rounded-xl text-white gap-10">

  {/* Left Section */}
  <div className="left flex flex-col md:flex-row gap-20 w-full md:w-4/5">
    
    {/* Get in Touch Section */}
    <div className="flex-1">
      <h3 className="text-2xl font-bold mb-4">GET IN TOUCH</h3>
      <form className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Your Name"
          className="p-2 rounded bg-[#2A2F3A] text-white placeholder-gray-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 rounded bg-[#2A2F3A] text-white placeholder-gray-400"
        />
        <textarea
          placeholder="Your Message"
          className="p-2 rounded bg-[#2A2F3A] text-white placeholder-gray-400 h-24"
        ></textarea>
        <button className="bg-red-600 hover:bg-[#d21717] transition-colors duration-300 text-white py-2 rounded-lg font-semibold">
          Send Message
        </button>
      </form>
    </div>

    {/* Quick Links Section */}
    <div className="flex-1">
      <h3 className="text-2xl font-bold mb-4">QUICK LINKS</h3>
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

  {/* Right Image Section */}
  <div className="right flex justify-center items-center md:w-1/5">
    <img className="w-1/5 md:w-full flex items-center mr-50" src="../images/contact-img.png" alt="Contact" />
  </div>
</div>

    </div>
  );
}

export default Contact;
