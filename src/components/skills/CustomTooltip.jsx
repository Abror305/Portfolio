export default function CustomTooltip({ active, payload, label, isDark }) {
  if (active && payload && payload.length) {
    return (
      <div className={`card p-4 shadow-xl border ${isDark ? "bg-base-100 text-white border-white/30" : "bg-base-200 text-black border-black/20"} backdrop-blur-sm`}>
        <p className="font-semibold text-lg mb-2 text-primary">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.dataKey}: {entry.value}{entry.dataKey === "level" ? "%" : entry.dataKey === "complexity" ? "/100" : ""}
          </p>
        ))}
      </div>
    );
  }
  return null;
}
