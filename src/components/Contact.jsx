import React, { forwardRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, ChevronRight } from "lucide-react";

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("submitting");

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
        setStatus("success");
        setTimeout(() => setStatus("idle"), 3000);
        setFormData({ name: "", email: "", message: ""});
    }).catch((err) => {
      console.log(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    });
  };

  const quickLinks = [
    { name: "Home", handler: props.scrollToHome },
    { name: "About", handler: props.scrollToAbout },
    { name: "Projects", handler: props.scrollToProjects },
    { name: "Skills", handler: props.scrollToSkill },
  ];

  const socialIcons = [
    { name: "GitHub", url: "https://github.com/Sudhanshu-Ranjan-Patra", icon: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg" },
    { name: "Twitter", url: "https://twitter.com/sudhanshu_527", icon: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" },
    { name: "LinkedIn", url: "https://linkedin.com/in/sudhanshu-ranjan-patra", icon: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" },
    { name: "Instagram", url: "https://instagram.com/sudhanshu_ranjan_patra_", icon: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" },
    { name: "Discord", url: "https://discord.gg/sudhanshuranjanpatra_09862", icon: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/discord.svg" },
    { name: "YouTube", url: "https://www.youtube.com/@sudhanshuranjanpatra", icon: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg" },
    { name: "LeetCode", url: "https://www.leetcode.com/sudhanshu_ranjan_patra", icon: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" },
    { name: "GeeksforGeeks", url: "https://auth.geeksforgeeks.org/user/patrasudhanoo28", icon: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/geeks-for-geeks.svg" },
  ];

  return (
    <section ref={ref} className="bg-zinc-950 py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full max-w-7xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full glass-panel border-cyan-500/20 text-cyan-400">
            <Mail size={16} />
            <span className="text-zinc-300 text-sm font-medium tracking-wider">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-outfit text-center">
            Let's build together
          </h2>
        </motion.div>

        <div className="glass-card p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Left Info Section */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 flex flex-col gap-10"
            >
              <div>
                <h3 className="text-2xl font-bold text-white font-outfit mb-4">Contact Info</h3>
                <p className="text-zinc-400 font-light mb-8 max-w-sm">
                  Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
                </p>
                
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:text-cyan-400 text-zinc-500 transition-colors">
                      <Mail size={20} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-zinc-500 text-sm font-medium">Email</span>
                      <a href="mailto:patrasudhanshuranjan" className="text-white hover:text-cyan-400 transition-colors">
                        patrasudhanshuranjan@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:text-emerald-400 text-zinc-500 transition-colors">
                      <MapPin size={20} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-zinc-500 text-sm font-medium">Location</span>
                      <span className="text-white">Bhubaneswar, Odisha, India</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-zinc-500 text-sm font-bold tracking-widest uppercase mb-4">Socials</h3>
                <div className="flex flex-wrap gap-3">
                  {socialIcons.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 group"
                      title={social.name}
                    >
                      <img 
                        src={social.icon} 
                        alt={social.name}
                        className="w-5 filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                        style={{ filter: "invert(0.5) sepia(1) saturate(0) hue-rotate(0deg)" }}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Form Section */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-3 bg-zinc-900/50 rounded-2xl p-6 sm:p-8 border border-zinc-800/80 relative"
            >
              <form onSubmit={sendEmail} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1">
                    <label className="text-zinc-400 text-sm font-medium pl-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-zinc-950/80 border border-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all font-light"
                      placeholder="Harry Potter"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-zinc-400 text-sm font-medium pl-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-zinc-950/80 border border-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all font-light"
                      placeholder="harry@example.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-zinc-400 text-sm font-medium pl-1">Message</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-zinc-950/80 border border-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all font-light min-h-[160px] resize-y"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-2 w-full py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-500 text-white font-bold tracking-wide flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-shadow duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : status === "success" ? (
                    <span>Message Sent!</span>
                  ) : status === "error" ? (
                    <span className="text-red-200">Failed to Send</span>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>

              {/* Sub-logo or decor */}
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-cyan-500/10 rounded-full blur-[40px] pointer-events-none"></div>
            </motion.div>

          </div>
          
          {/* Quick Links Footer */}
          <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4 px-2">
            <h4 className="text-white font-bold font-outfit text-xl">DEAR<span className="text-cyan-400">CODER</span></h4>
            <div className="flex items-center gap-6">
              {quickLinks.map((item) => (
                <span
                  key={item.name}
                  onClick={item.handler}
                  className="text-zinc-500 hover:text-cyan-400 text-sm font-medium cursor-pointer transition-colors"
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;