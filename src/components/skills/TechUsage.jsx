import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import CustomTooltip from "./CustomTooltip";

export default function TechUsage({ techUsageData, isDark }) {
  const colors = ["var(--primary)", "var(--secondary)", "var(--accent)", "var(--info)"];
  const textColor = isDark ? "white" : "black";

  return (
    <div className="card bg-base-200/80 backdrop-blur-md shadow-2xl">
      <div className="card-body">
        <h2
          className="card-title text-3xl font-bold mb-6 justify-center"
          style={{ color: textColor }}
        >
          Tech Focus Areas
        </h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={techUsageData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label={({ name, percent, x, y }) => (
                  <text
                    x={x}
                    y={y}
                    fill={textColor}
                    fontSize={12}
                    textAnchor="middle"
                  >
                    {`${name} ${(percent * 100).toFixed(0)}%`}
                  </text>
                )}
              >
                {techUsageData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip isDark={isDark} />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
