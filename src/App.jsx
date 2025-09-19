import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

export default function App() {
  const [isDark, setIsDark] = useState(true); // default dark theme

  return (
    <div data-theme={isDark ? "dark" : "light"} className="min-h-screen transition-colors duration-500">
      {/* Navbar */}
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      {/* Toaster */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#333",
            color: "#fff",
            fontWeight: "500",
            borderRadius: "10px",
          },
        }}
      />

      {/* Main content */}
      <div className="p-6">
        <Outlet context={{ isDark }} />
      </div>
    </div>
  );
}
