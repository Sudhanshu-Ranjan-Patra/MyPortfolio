import React, { forwardRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = forwardRef((props, ref) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_2vehzc9",
      "template_7gjrvvx",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString(),
      },
      "YlCu6nQUNtDHDWUw-"
    ).then(() => {
        alert("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: ""});
    }).catch((err) => {
      console.log(err);
      alert("Failed to send message!");
    });
  };

  // Quick link map for name => handler
  const quickLinks = [
    { name: "Home", handler: props.scrollToHome },
    { name: "About", handler: props.scrollToAbout },
    { name: "Projects", handler: props.scrollToProjects },
    { name: "Skills", handler: props.scrollToSkill },
  ];

  return (
    <section ref={ref} className="bg-black [font-family:Oswald,sans-serif] font-bold pb-10 px-4 md:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="bg-[#191C24] p-6 md:p-8 rounded-xl text-white">
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-start gap-8">
            {/* Left Section - Quick Links */}
            <div className="w-1/4">
              <h3 className="text-2xl font-bold mb-6">QUICK LINKS</h3>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((item) => (
                  <li
                    key={item.name}
                    className="hover:text-red-600 transition-all duration-200 cursor-pointer text-lg"
                    onClick={item.handler}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>

              {/* Social Icons */}
              <div className="mt-6 flex gap-4 items-center">
                <a href="https://twitter.com/sudhanshu_527" target="_blank">
                  <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" className="w-7 hover:scale-110 transition" />
                </a>

                <a href="https://linkedin.com/in/sudhanshu-ranjan-patra" target="_blank">
                  <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" className="w-7 hover:scale-110 transition" />
                </a>

                <a href="https://instagram.com/sudhanshu_ranjan_patra_" target="_blank">
                  <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" className="w-7 hover:scale-110 transition" />
                </a>

                <a href="https://discord.gg/sudhanshuranjanpatra_09862" target="_blank">
                  <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/discord.svg" className="w-7 hover:scale-110 transition" />
                </a>

                <a href="https://www.youtube.com/c/@sudhanshuranjanpatra" target="_blank">
                  <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg" className="w-7 hover:scale-110 transition" />
                </a>

                <a href="https://www.leetcode.com/sudhanshu_ranjan_patra" target="_blank">
                  <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" className="w-7 hover:scale-110 transition" />
                </a>

                <a href="https://auth.geeksforgeeks.org/user/patrasudhanoo28" target="_blank">
                  <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/geeks-for-geeks.svg" className="w-7 hover:scale-110 transition" />
                </a>
              </div>

            </div>
            {/* Right Section - Contact Form */}
            <div className="w-2/3 relative">
              <h3 className="text-2xl font-bold mb-6">GET IN TOUCH</h3>
              <form className="flex flex-col gap-4 pr-20" onSubmit={sendEmail}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-3 rounded bg-[#2A2F3A] text-white placeholder-gray-400 focus:ring-2 focus:ring-red-600 focus:outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 rounded bg-[#2A2F3A] text-white placeholder-gray-400 focus:ring-2 focus:ring-red-600 focus:outline-none"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="p-3 rounded bg-[#2A2F3A] text-white placeholder-gray-400 h-32 focus:ring-2 focus:ring-red-600 focus:outline-none resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="bg-red-600 hover:bg-[#d21717] transition-colors duration-300 text-white py-3 rounded-lg font-semibold"
                >
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
                <form className="flex flex-col gap-3" onSubmit={sendEmail}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-3 rounded bg-[#2A2F3A] text-white placeholder-gray-400 focus:ring-2 focus:ring-red-600 focus:outline-none"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3 rounded bg-[#2A2F3A] text-white placeholder-gray-400 focus:ring-2 focus:ring-red-600 focus:outline-none"
                  />

                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="p-3 rounded bg-[#2A2F3A] text-white placeholder-gray-400 h-24 focus:ring-2 focus:ring-red-600 focus:outline-none resize-none"
                  ></textarea>

                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-[#d21717] transition-colors duration-300 text-white py-3 rounded-lg font-semibold"
                  >
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
                {quickLinks.map((item) => (
                  <li
                    key={item.name}
                    className="hover:text-red-600 transition-all duration-200 cursor-pointer"
                    onClick={item.handler}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>

              {/* Social Icons */}
              <div className="mt-5 flex gap-4 flex-wrap">
                <a href="https://twitter.com/sudhanshu_527" target="_blank">
                  <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" className="w-7" />
                </a>

                <a href="https://linkedin.com/in/sudhanshu-ranjan-patra" target="_blank">
                  <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" className="w-7" />
                </a>

                <a href="https://instagram.com/sudhanshu_ranjan_patra_" target="_blank">
                  <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" className="w-7" />
                </a>

                <a href="https://discord.gg/sudhanshuranjanpatra_09862" target="_blank">
                  <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/discord.svg" className="w-7" />
                </a>

                <a href="https://www.youtube.com/c/@sudhanshuranjanpatra" target="_blank">
                  <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg" className="w-7" />
                </a>

                <a href="https://www.leetcode.com/sudhanshu_ranjan_patra" target="_blank">
                  <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" className="w-7" />
                </a>

                <a href="https://auth.geeksforgeeks.org/user/patrasudhanoo28" target="_blank">
                  <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/geeks-for-geeks.svg" className="w-7" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
