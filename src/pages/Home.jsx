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
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-6 md:gap-12 py-12">
        {/* Text content */}
        <div
          className={`flex-1 ${cardBg} p-5 sm:p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col justify-center space-y-5 md:space-y-8 text-center lg:text-left`}
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight">
            Hello, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-flex items-center gap-2">
              Bakhromov <FaTelegram className="text-primary" />
            </span>
          </h1>

          {/* Type animation */}
          <div className="h-8 sm:h-10 md:h-14 flex items-center justify-center lg:justify-start">
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
                className={`text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold ${
                  isDark ? "text-secondary" : "text-primary"
                }`}
              />
            )}
          </div>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-sm sm:max-w-md md:max-w-lg mx-auto lg:mx-0">
            "Web development is my passion — I love turning ideas into
            responsive, beautiful, and functional applications."
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Link to="/contact" element={<Contact />}>
              <button className="px-5 sm:px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg bg-primary text-primary-content hover:bg-primary-focus w-full sm:w-auto">
                Contact Me
                <FaRocket />
              </button>
            </Link>

            <button
              onClick={handleDownload}
              className="px-5 sm:px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-1 shadow-md border border-secondary text-secondary hover:bg-secondary-focus w-full sm:w-auto"
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

        {/* Image with rocket */}
        <div className="flex-1 flex justify-center lg:justify-end relative mb-8 lg:mb-0 lg:pr-8">
          <div className="relative w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-80 lg:h-80">
            <div
              className={`absolute inset-0 rounded-full blur-2xl scale-110 opacity-40 animate-pulse 
              ${isDark ? "bg-primary/40" : "bg-secondary/40"}`}
            ></div>
            <img
              src={"assets/im.jpg"}
              alt="Abror's image"
              className="relative w-full h-full rounded-full object-cover border-2 sm:border-4 border-transparent shadow-xl"
            />
            <div
              className={`absolute top-0 right-0 translate-x-1/3 -translate-y-1/2
              h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12 rounded-full flex items-center justify-center 
              animate-bounce shadow-md ${isDark ? "bg-primary/30" : "bg-secondary/30"}`}
            >
              <FaRocket className="text-xs sm:text-sm md:text-xl text-primary-content" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
