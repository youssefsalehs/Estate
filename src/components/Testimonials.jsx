import { assets, testimonialsData } from "../assets/assets";
import { motion } from "motion/react";
function Testimonials() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-15 md:px-20 lg:px-32 w-full overflow-hidden   bg-white"
      id="testimonials"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-2">
        Customer{" "}
        <span className="underline underline-offset-4 under decoration-1 font-light">
          Testimonials
        </span>
      </h2>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Real Stories from Those Who Found Home with Us
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, i) => (
          <div
            key={i}
            className="rounded shadow-lg max-w-[340px] text-center px-8 py-12 border border-gray-200"
          >
            <img src={testimonial.image} className="mb-4 w-20 h-20 mx-auto" />
            <h2 className="text-gray-700 font-medium text-xl">
              {testimonial.name}
            </h2>
            <p className="text-sm text-gray-500 mb-4">{testimonial.title}</p>
            <div className="flex items-center justify-center gap-1 mb-4">
              {Array.from({ length: testimonial.rating }, (item, i) => (
                <img key={i} src={assets.star_icon} />
              ))}
            </div>
            <p className="text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Testimonials;
