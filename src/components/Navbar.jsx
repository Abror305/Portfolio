import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar({ isDark, setIsDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`relative z-50 shadow-md px-6 transition-colors duration-500 ${isDark ? "bg-base-100" : "bg-base-200"}`}>
      <div className="flex items-center justify-between h-16">

        {/* Brand */}
        <div className="flex-1">
          <Link to="/" className={`text-2xl font-bold ${isDark ? "text-primary" : "text-secondary"}`}>
            Bakhromov
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map(item => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg transition-colors duration-300 ${isActive
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

        {/* Right icons */}
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
            {isDark ? <Sun /> : <Moon />}
          </button>

          {/* Mobile burger */}
          <div className="md:hidden relative">
            <button className="btn btn-ghost btn-circle" onClick={toggleMenu}>
              {menuOpen ? <X /> : <Menu />}
            </button>

            {/* Mobile menu */}
            {menuOpen && (
              <div className="absolute top-full mt-2 right-0 w-48 bg-base-100 shadow-lg rounded-lg z-50">
                <ul className="flex flex-col p-2 gap-2">
                  {navItems.map(item => (
                    <li key={item.name}>
                      <NavLink
                        to={item.path}
                        onClick={() => setMenuOpen(false)} // close menu on click
                        className={({ isActive }) =>
                          `block px-4 py-2 rounded-lg transition-colors duration-300 ${isActive
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
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
