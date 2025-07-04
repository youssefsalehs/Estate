import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
function Navbar() {
  const [showmenu, setShowmenu] = useState(false);
  useEffect(() => {
    if (showmenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showmenu]);
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="fixed top-0 left-0 w-full  capitalize bg-blue-600 z-100 "
    >
      <div className="py-4 px-6 md:px-20 lg:px-32 bg-transparent flex justify-between items-center">
        <a href="#">
          <img src={assets.logo} />
        </a>
        <ul className="hidden md:flex gap-7 text-white">
          <a
            href="#header"
            className="hover:text-gray-400 transition-all duration-300 "
          >
            home
          </a>

          <a
            href="#about"
            className="hover:text-gray-400 transition-all duration-300"
          >
            about
          </a>

          <a
            href="#projects"
            className="hover:text-gray-400 transition-all duration-300"
          >
            projects
          </a>

          <a
            href="#testimonials"
            className="hover:text-gray-400 transition-all duration-300"
          >
            testimonials
          </a>
        </ul>
        <button className="capitalize hidden sm:block bg-white border-none rounded-full py-2 px-8">
          sign up
        </button>
        <img
          src={assets.menu_icon}
          className="sm:hidden w-6 cursor-pointer"
          onClick={() => setShowmenu(true)}
        />
      </div>

      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 bg-white/75 text-black overflow-hidden transition-all duration-300 ${
          showmenu ? "w-full h-screen" : "w-0 h-0"
        }`}
      >
        <div className=" flex justify-end  p-6 cursor-pointer">
          <img
            src={assets.cross_icon}
            className="w-6  "
            onClick={() => setShowmenu(false)}
          />
        </div>
        <ul className=" flex flex-col gap-2 items-center mt-5 px-5 text-xl font-medium ">
          <a
            href="#header"
            className="hover:text-gray-400 transition-all duration-300"
            onClick={() => setShowmenu(false)}
          >
            home
          </a>

          <a
            href="#about"
            className="hover:text-gray-400 transition-all duration-300"
            onClick={() => setShowmenu(false)}
          >
            about
          </a>

          <a
            href="#projects"
            className="hover:text-gray-400 transition-all duration-300"
            onClick={() => setShowmenu(false)}
          >
            projects
          </a>

          <a
            href="#testimonials"
            className="hover:text-gray-400 transition-all duration-300"
            onClick={() => setShowmenu(false)}
          >
            testimonials
          </a>
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
