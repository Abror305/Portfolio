export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        >
          <div className={`w-4 h-4 rounded-full ${
            i % 4 === 0 ? 'bg-primary' :
            i % 4 === 1 ? 'bg-secondary' :
            i % 4 === 2 ? 'bg-accent' : 'bg-info'
          }`} />
        </div>
      ))}
    </div>
  );
}
