import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import BackgroundParticles from "./BackgroundParticles";
import SkillsRadar from "./SkillsRadar";
import ProjectsPortfolio from "./ProjectsPortfolio";
import TechUsage from "./TechUsage";
import GrowthTimeline from "./GrowthTimeline";
import StatsCards from "./StatsCards";

export default function Skills() {
  const { isDark } = useOutletContext();

  const [selectedSkill, setSelectedSkill] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const skillsData = [
    { skill: "HTML", level: 95, experience: "3+ years", projects: 15 },
    { skill: "CSS / Tailwind", level: 90, experience: "3+ years", projects: 12 },
    { skill: "JavaScript", level: 85, experience: "2+ years", projects: 10 },
    { skill: "React", level: 80, experience: "2+ years", projects: 8 },
    { skill: "Node.js", level: 75, experience: "1.5+ years", projects: 6 },
    { skill: "MongoDB", level: 70, experience: "1+ year", projects: 4 },
  ];

  const projectsData = [
    { project: "Unvibe", complexity: 85, tech: ["React", "Node.js", "MongoDB"], status: "Live", users: "500+" },
    { project: "TezBozor", complexity: 90, tech: ["React", "Express", "PostgreSQL"], status: "Development", users: "Coming Soon" },
    { project: "Portfolio Sites", complexity: 60, tech: ["HTML", "CSS", "JS"], status: "Multiple", users: "Various" },
    { project: "E-commerce", complexity: 95, tech: ["MERN Stack"], status: "Planning", users: "TBD" },
  ];

  const techUsageData = [
    { name: "Frontend", value: 45 },
    { name: "Backend", value: 30 },
    { name: "Database", value: 15 },
    { name: "DevOps", value: 10 },
  ];

  const learningProgressData = [
    { month: "Jan", skills: 4, projects: 1 },
    { month: "Feb", skills: 4, projects: 2 },
    { month: "Mar", skills: 5, projects: 2 },
    { month: "Apr", skills: 5, projects: 3 },
    { month: "May", skills: 6, projects: 4 },
    { month: "Jun", skills: 6, projects: 5 },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? "bg-base-100" : "bg-base-200"}`}>
      <BackgroundParticles isDark={isDark} />
      <div className="relative z-10 max-w-7xl mx-auto p-6 space-y-12">
        <SkillsRadar 
          skillsData={skillsData} 
          selectedSkill={selectedSkill} 
          setSelectedSkill={setSelectedSkill} 
          isDark={isDark} 
        />
        <ProjectsPortfolio 
          projectsData={projectsData} 
          hoveredProject={hoveredProject} 
          setHoveredProject={setHoveredProject} 
          isDark={isDark} 
        />
        <div className="grid lg:grid-cols-2 gap-8">
          <TechUsage techUsageData={techUsageData} isDark={isDark} />
          <GrowthTimeline learningProgressData={learningProgressData} isDark={isDark} />
        </div>
        <StatsCards isDark={isDark} />
      </div>
    </div>
  );
}
