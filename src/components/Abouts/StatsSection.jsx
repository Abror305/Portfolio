import { useState, useEffect } from "react";
import { FaRegClock, FaRocket, FaTools, FaCode } from "react-icons/fa";

export default function StatsSection() {
  const [counters, setCounters] = useState({ years: 0, projects: 0, technologies: 0, lines: 0 });

  useEffect(() => {
    const targets = { years: 3, projects: 15, technologies: 10, lines: 50 };
    const duration = 2000;
    const steps = 50;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setCounters({
        years: Math.floor(targets.years * progress),
        projects: Math.floor(targets.projects * progress),
        technologies: Math.floor(targets.technologies * progress),
        lines: Math.floor(targets.lines * progress)
      });
      if (currentStep >= steps) clearInterval(timer);
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: "Years Experience", value: counters.years, suffix: "+", icon: <FaRegClock />, color: "text-primary" },
    { label: "Projects Built", value: counters.projects, suffix: "+", icon: <FaRocket />, color: "text-secondary" },
    { label: "Technologies", value: counters.technologies, suffix: "+", icon: <FaTools />, color: "text-accent" },
    { label: "K+ Lines of Code", value: counters.lines, suffix: "", icon: <FaCode />, color: "text-info" }
  ];

  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow-xl bg-base-200 w-full">
      {stats.map((stat, index) => (
        <div key={index} className="stat group hover:bg-base-300 transition-colors duration-300">
          <div className="stat-figure text-2xl group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
          <div className="stat-title text-base-content/70">{stat.label}</div>
          <div className={`stat-value ${stat.color} text-3xl font-bold`}>
            {stat.value}{stat.suffix}
          </div>
          <div className="stat-desc text-base-content/60">
            {index === 0 && "Learning & Growing"}
            {index === 1 && "Successfully Delivered"}
            {index === 2 && "Mastered & Learning"}
            {index === 3 && "Clean & Efficient"}
          </div>
        </div>
      ))}
    </div>
  );
}
