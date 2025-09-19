import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaJs, FaPython } from "react-icons/fa";

export default function SkillCard({ title, description, icon, delay, isActive, onClick }) {
  return (
    <div 
      className={`card bg-base-200 dark:bg-base-300 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 ${
        isActive ? 'ring-2 ring-primary bg-primary/10' : ''
      }`}
      style={{ animationDelay: `${delay}s` }}
      onClick={onClick}
    >
      <div className="card-body text-center p-6 relative">
        {/* Icon */}
        <div className="text-4xl mb-4 animate-bounce" style={{ animationDelay: `${delay + 0.5}s` }}>
          {icon}
        </div>

        {/* Title & Description */}
        <h3 className="card-title justify-center text-xl text-primary mb-2">{title}</h3>
        <p className="text-base-content/80 text-sm">{description}</p>

        {/* Active Section */}
        {isActive && (
          <div className="mt-4 space-y-2 animate-fade-in">
            <div className="badge badge-primary badge-sm">Expert Level</div>
            <div className="progress progress-primary w-full">
              <div className="progress-bar" style={{ width: '85%' }} />
            </div>

            {/* New small card inside main card */}
            <div className="mt-2 p-3 bg-base-100 dark:bg-base-200 rounded-lg shadow-inner text-sm text-base-content/70">
              🔹 Tips: Practice daily to improve this skill.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
