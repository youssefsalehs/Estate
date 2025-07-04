import Navbar from "./Navbar";
import headerImg from "../assets/header_img.png";
import { motion } from "motion/react";
function Header() {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: `url(${headerImg})` }}
      id="header"
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" text-white text-center mx-auto py-4 px-6 md:px-20 lg:px-32"
      >
        <h2 className="text-5xl sm:text-6xl md:text-[78px] max-w-3xl pt-20 font-semibold">
          Explore homes that fit your dreams
        </h2>
        <div className="space-x-6 mt-16">
          <a
            href="#projects"
            className="border border-white px-8 py-3 rounded hover:bg-white/10 transition duration-300"
          >
            projects
          </a>
          <a
            href="#contact"
            className="border border-blue-500 bg-blue-500 px-8 py-3 rounded hover:bg-blue-700 hover:border-blue-700 transition duration-300"
          >
            contact us
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Header;
