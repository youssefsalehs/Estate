import { assets } from "../assets/assets";

function Footer() {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden "
      id="footer"
    >
      <div className="flex flex-col md:flex-row justift-between items-start gap-[2px] md:gap-[80px] mb-4 md:mb-6 lg:mb-8">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} />
          <p className="text-gray-400 mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-lg text-white font-bold">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400 capitalize">
            <a
              href="#header"
              className="hover:text-white transition-all duration-300 "
            >
              home
            </a>

            <a
              href="#about"
              className="hover:text-white transition-all duration-300"
            >
              about
            </a>

            <a
              href="#projects"
              className="hover:text-white transition-all duration-300"
            >
              projects
            </a>

            <a
              href="#testimonials"
              className="hover:text-white transition-all duration-300"
            >
              testimonials
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-lg text-white font-bold">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-400 mt-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div class="flex gap-2 mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              class="p-2 rounded bg-gray-800 text-gray-400 broder border-gray-700 focus:outline-none w-full md:w-auto"
            />
            <button class="py-2 px-4 rounded bg-blue-500 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 w-full text-center text-gray-500 py-5">
        Copyright {new Date().getFullYear()} © Estate. All Right Reserved.
      </div>
    </div>
  );
}

export default Footer;
