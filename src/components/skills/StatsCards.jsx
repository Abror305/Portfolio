export default function StatsCards({ isDark }) {
  const stats = [
    { label: "Years Coding", value: "3+", colorClass: "text-primary" },
    { label: "Projects Built", value: "15+", colorClass: "text-secondary" },
    { label: "Technologies", value: "10+", colorClass: "text-accent" },
    { label: "Lines of Code", value: "50K+", colorClass: "text-info" },
  ];

  return (
    <div className="card bg-base-200/80 backdrop-blur-md shadow-2xl">
      <div className="card-body">
        <h2
          className={`card-title text-3xl font-bold mb-6 justify-center ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Stats Overview
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`card h-full bg-base-100/80 backdrop-blur-md shadow-xl 
              hover:scale-105 transition-transform duration-300 
              ${isDark ? "text-white" : "text-black"}`}
            >
              <div className="card-body text-center flex flex-col justify-center">
                <div
                  className={`text-3xl font-black ${stat.colorClass} mb-2`}
                >
                  {stat.value}
                </div>
                <div className="text-base-content/70 text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
