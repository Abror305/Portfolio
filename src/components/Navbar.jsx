import { Link, NavLink } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

export default function Navbar({ isDark, setIsDark }) {
  const toggleTheme = () => setIsDark(!isDark);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className={`navbar shadow-md px-6 transition-colors duration-500 ${isDark ? "bg-base-100" : "bg-base-200"}`}>
      <div className="flex-1">
        <Link to="/" className={`text-2xl font-bold ${isDark ? "text-primary" : "text-secondary"}`}>
          Bakhromov
        </Link>
      </div>

      <div className="hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map(item => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg transition-colors duration-300 ${
                    isActive
                      ? "bg-primary text-white"
                      : isDark
                      ? "hover:bg-base-200"
                      : "hover:bg-base-300"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-none">
        <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
          {isDark ? <Sun /> : <Moon />}
        </button>
      </div>
    </div>
  );
}
