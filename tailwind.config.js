/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#6366f1",   // ko‘k binafsha (indigo-500)
          "secondary": "#f97316", // to‘q sariq (orange-500)
          "accent": "#22d3ee",    // havorang (cyan-400)
          "neutral": "#1e293b",   // qora-kulrang (slate-800)
          "base-100": "#ffffff",  // oq
          "info": "#0ea5e9",      // ko‘k (sky-500)
          "success": "#10b981",   // yashil (emerald-500)
          "warning": "#facc15",   // sariq (yellow-400)
          "error": "#ef4444",     // qizil (red-500)
        },
      },
    ],
  },
}
