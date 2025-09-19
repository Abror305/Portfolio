import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import { FaTelegram, FaRocket } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

export default function Home({ isDark }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const cardBg = isDark ? "bg-base-100/20 backdrop-blur-md" : "bg-base-100/80 backdrop-blur-sm";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Abror_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [canClick, setCanClick] = useState(true);
  const handleHireMe = () => {
    if (!canClick) return;
    toast.success("Thank you! for hire me");
    setCanClick(false);
    setTimeout(() => setCanClick(true), 6000);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 md:p-8 transition-colors duration-500 ${isDark ? "bg-base-200" : "bg-base-100"}`}>
      <Toaster position="top-right" />

      <div className="container mx-auto flex flex-col items-center justify-center gap-8 md:gap-12 py-12">

        {/* Small screen image */}
        <div className="block lg:hidden mb-6">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto">
            <div className={`absolute inset-0 rounded-full blur-lg opacity-30 animate-pulse ${isDark ? "bg-primary/40" : "bg-secondary/30"}`}></div>
            <img 
              src='/assets/user.png' 
              alt="Abror's profile" 
              className="relative w-full h-full rounded-full object-cover border-4 border-transparent shadow-2xl" 
            />
            <div className={`absolute -top-2 -right-2 h-8 w-8 rounded-full flex items-center justify-center animate-bounce ${isDark ? "bg-primary/20 border-primary/30" : "bg-secondary/20 border-secondary/30"}`}>
              <FaRocket className="text-lg text-primary-content" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 w-full">

          {/* Left / Main content */}
          <div className={`flex-1 ${cardBg} p-6 md:p-10 rounded-3xl shadow-2xl flex flex-col justify-center space-y-6 md:space-y-8 text-center lg:text-left`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hello, I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary flex items-center gap-2 justify-center lg:justify-start">
                Bakhromov <FaTelegram className="text-primary" />
              </span>
            </h1>

            <div className="h-10 md:h-14 flex items-center justify-center lg:justify-start">
              {mounted && (
                <TypeAnimation
                  sequence={["Frontend Developer", 2000, "Backend Developer", 2000, "Cybersecurity Enthusiast", 2000]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className={`text-lg md:text-2xl lg:text-3xl font-semibold ${isDark ? "text-secondary" : "text-primary"}`}
                />
              )}
            </div>

            <p className="text-base sm:text-lg md:text-lg lg:text-xl max-w-md sm:max-w-lg md:max-w-lg mx-auto lg:mx-0">
              "Web development is my passion — I love turning ideas into responsive, beautiful, and functional applications."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleHireMe}
                className="px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl bg-primary text-primary-content hover:bg-primary-focus"
              >
                Hire Me <FaRocket />
              </button>

              <button
                onClick={handleDownload}
                className="px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-1 shadow-lg border border-secondary text-secondary hover:bg-secondary-focus"
              >
                Download CV
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right side - Large screen image */}
          <div className="flex-1 flex justify-center lg:justify-end relative mb-8 md:mb-0 hidden lg:block">
            <div className="relative">
              <div className={`absolute inset-0 rounded-full blur-lg opacity-30 animate-pulse ${isDark ? "bg-primary/40" : "bg-secondary/30"}`}></div>
              <img 
                src='/assets/user.png' 
                alt="Abror's profile" 
                className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full object-cover border-4 border-transparent shadow-2xl" 
              />
              <div className={`absolute -top-4 -right-4 h-12 w-12 md:h-14 md:w-14 rounded-full flex items-center justify-center animate-bounce ${isDark ? "bg-primary/20 border-primary/30" : "bg-secondary/20 border-secondary/30"}`}>
                <FaRocket className="text-xl text-primary-content" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
