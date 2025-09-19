import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import CustomTooltip from "./CustomTooltip";

export default function GrowthTimeline({ learningProgressData, isDark }) {
  const textColor = isDark ? "white" : "black";
  const skillsColor = "var(--p)";
  const projectsColor = "var(--s)";

  return (
    <div className="card bg-base-200/80 backdrop-blur-md shadow-2xl">
      <div className="card-body">
        <h2 className={`card-title text-3xl font-bold mb-6 justify-center ${isDark ? "text-white" : "text-black"}`}>
          Growth Timeline
        </h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={learningProgressData}>
              <XAxis dataKey="month" tick={{ fill: textColor }} />
              <YAxis tick={{ fill: textColor }} />
              <Tooltip content={<CustomTooltip isDark={isDark} />} />
              <Area type="monotone" dataKey="skills" stroke={skillsColor} fill={skillsColor} fillOpacity={0.6} />
              <Area type="monotone" dataKey="projects" stroke={projectsColor} fill={projectsColor} fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
