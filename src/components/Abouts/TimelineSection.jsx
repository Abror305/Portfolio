import { FaSeedling, FaBolt, FaRocket, FaBullseye } from "react-icons/fa";

export default function TimelineSection() {
  const timelineData = [
    { year: "2022", title: "Started Coding Journey", description: "Began learning HTML & CSS", icon: <FaSeedling /> },
    { year: "2023", title: "JavaScript Mastery", description: "Deepened JS knowledge & built first projects", icon: <FaBolt /> },
    { year: "2024", title: "React & Backend", description: "Learned React, Node.js & database management", icon: <FaRocket /> },
    { year: "2025", title: "Full Stack Projects", description: "Building complete web applications", icon: <FaBullseye /> }
  ];

  return (
    <div className="space-y-10 ">
      <h3 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">My Journey</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {timelineData.map((item, index) => (
          <div key={index} className="flex gap-6 group">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              {index !== timelineData.length - 1 && <div className="w-px h-full bg-primary/30 mt-4" />}
            </div>
            <div className="flex-1 card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="card-title text-lg md:text-xl text-secondary font-semibold">{item.title}</h4>
                  <p className="text-base-content/80 text-sm md:text-base mt-2">{item.description}</p>
                </div>
                <div className="badge badge-outline badge-primary text-sm md:text-base">{item.year}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
