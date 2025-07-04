import { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "motion/react";
function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  useEffect(() => {
    function updateCardsToShow() {
      if (window.innerWidth >= 1024) {
        setCardsToShow(4);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    }

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  function nextProject() {
    setCurrentIndex((i) => (i + 1) % projectsData.length);
  }
  function previousProject() {
    setCurrentIndex((i) => (i === 0 ? projectsData.length - 1 : i - 1));
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-15 md:px-20 lg:px-32 w-full overflow-hidden   bg-gray-100"
      id="projects"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-2">
        Projects{" "}
        <span className="underline underline-offset-4 under decoration-1 font-light">
          Completed
        </span>
      </h2>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Crafting Spaces, Building Legacies—Explore Our Portfolio
      </p>

      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {projectsData.map((project, i) => (
            <div
              key={i}
              className="relative w-full sm:w-1/4 flex-shrink-0 shadow-lg"
            >
              <img src={project.image} />
              <div className="absolute bottom-0  bg-gray-50 text-center  w-full py-2 shadow-sm">
                <h2 className="text-xl font-bold text-gray-800 ">
                  {project.title}
                </h2>
                <p className="text-gray-500 text-sm">
                  {project.price}
                  <span> | </span>
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10 gap-2 w-full">
        <button
          className="bg-gray-300 p-2 rounded cursor-pointer"
          onClick={previousProject}
        >
          <img src={assets.left_arrow} />
        </button>
        <button
          className="bg-gray-300 p-2 rounded cursor-pointer"
          onClick={nextProject}
        >
          <img src={assets.right_arrow} alt="" />
        </button>
      </div>
    </motion.div>
  );
}

export default Projects;
