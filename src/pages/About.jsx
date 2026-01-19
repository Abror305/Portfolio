import { useState, useEffect } from "react";
import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import AnimatedBackground from "../components/Abouts/AnimatedBackground";
import SkillCard from "../components/Abouts/SkillCard";
import StatsSection from "../components/Abouts/StatsSection";
import TimelineSection from "../components/Abouts/TimelineSection";

export default function About() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  const skills = [
    { title: "Frontend Developer", description: "Creating beautiful, responsive UI", icon: <FaReact className="text-primary" /> },
    { title: "Backend Developer", description: "Building robust APIs", icon: <FaNodeJs className="text-secondary" /> },
    { title: "Database", description: "Managing MongoDB & SQL databases", icon: <FaDatabase className="text-accent" /> },
    { title: "Frontend Styling", description: "CSS & TailwindCSS mastery", icon: <FaCss3Alt className="text-info" /> },
    { title: "JavaScript", description: "Modern JS frameworks & practices", icon: <FaJs className="text-warning" /> },
    { title: "Python", description: "Writing clean Python code & scripts", icon: <SiPython className="text-blue-500" /> }
  ];

  return (
    <div className="min-h-screen bg-base-100 dark:bg-base-200 relative overflow-hidden transition-colors duration-500">
      <AnimatedBackground />
      <div className="relative z-10 container mx-auto py-8 px-4 md:py-12 md:px-6 space-y-12">

        {/* Hero Section */}
        <div className={`hero min-h-[50vh] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="hero-content text-center max-w-4xl">
            <div>
              <div className="avatar mb-6 mx-auto">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 flex items-center justify-center md:text-6xl bg-base-300 dark:bg-base-400 overflow-hidden">
                  <img
                    src="/assets/My.jpg"
                    alt="profile"
                    className="w-full h-full object-cover object-[center_35%]"
                  />
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-primary dark:text-base-content transition-colors duration-500">
                About Me
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-base-content dark:text-base-content/80 leading-relaxed max-w-3xl mx-auto">
                Im <span className="font-bold">17 years old</span>. I am passionate about IT and enjoy developing modern web applications.
                <span className="text-secondary font-bold dark:text-secondary"> Frontend va Backend</span> Im full-stack developer.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {['React', 'Node.js', 'MongoDB', 'TailwindCSS', 'JavaScript', 'HTML/CSS'].map((tech, i) => (
                  <div key={i} className="badge badge-primary badge-md sm:badge-lg animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-base-300 dark:text-base-content mb-6 md:mb-8 transition-colors duration-500">
            What I know
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                title={skill.title}
                description={skill.description}
                icon={skill.icon}
                delay={index * 0.2}
                isActive={activeSkill === index}
                onClick={() => setActiveSkill(activeSkill === index ? null : index)}
              />
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-full sm:max-w-2xl mx-auto px-2">
          <TimelineSection />
        </div>

        {/* Stats Section */}
        <div className="mt-12 md:mt-16 px-2 sm:px-0">
          <StatsSection />
        </div>

      </div>

      <style jsx>{`
    @keyframes float {0%,100%{transform:translateY(0) rotate(0deg);}33%{transform:translateY(-10px) rotate(120deg);}66%{transform:translateY(5px) rotate(240deg);} }
    @keyframes fade-in {from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);} }
    .animate-float{animation:float 6s ease-in-out infinite;}
    .animate-fade-in{animation:fade-in 0.5s ease-out;}
  `}</style>
    </div>

  );
}
