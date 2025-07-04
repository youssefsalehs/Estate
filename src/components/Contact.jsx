import { useState } from "react";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";
import { motion } from "motion/react";
const bg = assets.contact;

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e4752885-7452-4fee-89ca-3911b4b52fdc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center container mx-auto p-15 md:px-20 lg:px-32 w-full overflow-hidden bg-fixed bg-cover bg-no-repeat text-gray-100"
      style={{ backgroundImage: `url('${bg}')` }}
      id="testimonials"
    >
      <div className="absolute inset-0 bg-black/40 bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <h2 className="text-2xl sm:text-4xl font-bold mb-2  text-center">
          Contact{" "}
          <span className="underline underline-offset-4 decoration-1 font-light">
            With Us
          </span>
        </h2>
        <p className="max-w-80 text-center mb-8 mx-auto">
          Ready to Make a Move? Let’s Build Your Future Together
        </p>
        <motion.form
          initial={{ opacity: 0 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          onSubmit={onSubmit}
          className="capitalize  pt-8   max-w-2xl mx-auto justify-center flex flex-col"
        >
          <div className="flex flex-wrap sm:flex-nowrap gap-2  ">
            <div className="w-full md:w-1/2 text-left flex flex-col  ">
              <label>your name</label>
              <input
                type="text"
                name="name"
                placeholder="your name"
                className="placeholder:capitalize  rounded w-full border border-gray-300 py-3 px-4 mt-2"
              />
            </div>
            <div className="w-full md:w-1/2 text-left flex flex-col ">
              <label>your email</label>
              <input
                type="email"
                name="email"
                placeholder="your email"
                className="placeholder:capitalize  rounded w-full border border-gray-300 py-3 px-4 mt-2"
              />
            </div>
          </div>
          <div className="w-full text-left flex flex-col ">
            <label>message</label>
            <textarea
              name="message"
              maxLength={350}
              placeholder="message"
              className="placeholder:capitalize  rounded  border h-[100px] resize-none border-gray-300 py-3 px-4 mt-2"
            />
          </div>
          <button className="capitalize rounded bg-blue-600  px-12 py-2 max-w-lg mx-auto mb-10 mt-10 text-center">
            {result ? result : "send message"}
          </button>
        </motion.form>
      </div>
    </div>
  );
}

export default Contact;
