import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

export default function ProjectsPortfolio({
  projectsData,
  hoveredProject,
  setHoveredProject,
  isDark,
}) {
  const textColor = isDark ? "white" : "black";

  return (
    <div className="card bg-base-200/80 backdrop-blur-md shadow-2xl">
      <div className="card-body">
        <h2
          className={`card-title text-3xl md:text-4xl font-bold mb-8 justify-center ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Project Portfolio
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bar Chart */}
          <div className="h-72 sm:h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={projectsData}>
                <XAxis
                  dataKey="project"
                  tick={{ fill: textColor, fontSize: 10 }}
                  angle={-30}
                  textAnchor="end"
                  height={60}
                />
                <YAxis tick={{ fill: textColor, fontSize: 12 }} />
                <Tooltip content={<CustomTooltip isDark={isDark} />} />
                <Bar
                  dataKey="complexity"
                  fill="var(--p)"
                  radius={[4, 4, 0, 0]}
                  onMouseEnter={(data) => setHoveredProject(data.project)}
                  onMouseLeave={() => setHoveredProject(null)}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            {projectsData.map((project) => (
              <div
                key={project.project}
                className={`card transition-all duration-300 shadow-md hover:shadow-lg ${
                  hoveredProject === project.project
                    ? "bg-success/20 border-success border-2 scale-105"
                    : "bg-base-300 border border-base-300"
                }`}
              >
                <div className="card-body p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3
                      className={`card-title text-lg md:text-xl ${
                        isDark ? "text-white" : "text-black"
                      }`}
                    >
                      {project.project}
                    </h3>
                    <div
                      className={`badge ${
                        project.status === "Live"
                          ? "badge-success"
                          : project.status === "Development"
                          ? "badge-warning"
                          : project.status === "Planning"
                          ? "badge-info"
                          : "badge-neutral"
                      }`}
                    >
                      {project.status}
                    </div>
                  </div>
                  <p className="text-sm md:text-base">
                    Complexity: {project.complexity}/100
                  </p>
                  <p className="text-sm md:text-base">Users: {project.users}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.tech.map((tech, idx) => (
                      <div
                        key={idx}
                        className="badge badge-primary badge-sm md:badge-md"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
