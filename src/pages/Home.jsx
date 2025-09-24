import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import { FaTelegram, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";
import Contact from "./Contact";

export default function Home({ isDark }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const cardBg = isDark
    ? "bg-base-100/20 backdrop-blur-md"
    : "bg-base-100/80 backdrop-blur-sm";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Abror_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 md:p-8 transition-colors duration-500 ${
        isDark ? "bg-base-200" : "bg-base-100"
      }`}
    >
      <div className="container mx-auto flex flex-col items-center justify-center gap-8 md:gap-12 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 w-full">
          {/* Image with rocket */}
          <div className="order-1 lg:order-2 flex-1 flex justify-center lg:justify-end relative mb-8 md:mb-0 lg:pr-8">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-80 lg:h-80">
              <div
                className={`absolute inset-0 rounded-full blur-2xl scale-110 opacity-40 animate-pulse 
                ${isDark ? "bg-primary/40" : "bg-secondary/40"}`}
              ></div>
              <img
                src="/assets/user.png"
                alt="Abror's profile"
                className="relative w-full h-full rounded-full object-cover border-4 border-transparent shadow-2xl"
              />
              <div
                className={`absolute top-0 right-0 translate-x-1/3 -translate-y-1/2
                h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center 
                animate-bounce shadow-md ${isDark ? "bg-primary/30" : "bg-secondary/30"}`}
              >
                <FaRocket className="text-base sm:text-lg md:text-xl text-primary-content" />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div
            className={`order-2 lg:order-1 flex-1 ${cardBg} p-6 md:p-10 rounded-3xl shadow-2xl flex flex-col justify-center space-y-6 md:space-y-8 text-center lg:text-left`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hello, I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary flex items-center gap-2 justify-center lg:justify-start">
                Bakhromov <FaTelegram className="text-primary" />
              </span>
            </h1>

            <div className="h-10 md:h-14 flex items-center justify-center lg:justify-start">
              {mounted && (
                <TypeAnimation
                  sequence={[
                    "Frontend Developer",
                    2000,
                    "Backend Developer",
                    2000,
                    "Cybersecurity Enthusiast",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className={`text-lg md:text-2xl lg:text-3xl font-semibold ${
                    isDark ? "text-secondary" : "text-primary"
                  }`}
                />
              )}
            </div>

            <p className="text-base sm:text-lg md:text-lg lg:text-xl max-w-md sm:max-w-lg md:max-w-lg mx-auto lg:mx-0">
              "Web development is my passion — I love turning ideas into
              responsive, beautiful, and functional applications."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact" element={<Contact />}>
                <button className="px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl bg-primary text-primary-content hover:bg-primary-focus">
                  Contact Me
                  <FaRocket />
                </button>
              </Link>

              <button
                onClick={handleDownload}
                className="px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-1 shadow-lg border border-secondary text-secondary hover:bg-secondary-focus"
              >
                Download CV
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
