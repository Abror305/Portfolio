import {
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

export default function SkillsRadar({
  skillsData,
  selectedSkill,
  setSelectedSkill,
  isDark,
}) {
  const textColor = isDark ? "white" : "black";
  const strokeColor = isDark ? "white" : "black";

  return (
    <div className="card bg-base-200/80 backdrop-blur-md shadow-2xl">
      <div className="card-body">
        <h2
          className={`card-title text-3xl font-bold mb-6 justify-center ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Skills Radar
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Radar Chart */}
          <div className="lg:col-span-2 h-72 sm:h-80 md:h-96">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="80%"
                data={skillsData}
              >
                <defs>
                  <linearGradient
                    id="radarGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="var(--primary)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="100%"
                      stopColor="var(--secondary)"
                      stopOpacity={0.2}
                    />
                  </linearGradient>
                </defs>
                <PolarGrid stroke={strokeColor + "33"} />
                <PolarAngleAxis dataKey="skill" tick={{ fill: textColor }} />
                <PolarRadiusAxis
                  angle={30}
                  domain={[0, 100]}
                  tick={{ fill: textColor }}
                />
                <Radar
                  name="Skill Level"
                  dataKey="level"
                  stroke="var(--primary)"
                  fill="url(#radarGradient)"
                  strokeWidth={2}
                />
                <Tooltip content={<CustomTooltip isDark={isDark} />} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Skill Details / Bars */}
          <div className="flex flex-col gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.skill}
                className="hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex justify-between mb-1">
                  <span style={{ color: textColor }}>{skill.skill}</span>
                  <span style={{ color: textColor }}>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded">
                  <div
                    className="h-2 rounded bg-gradient-to-r from-primary to-secondary"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
