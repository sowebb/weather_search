import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../theme/ThemeProvider";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className={`navbar ${theme === "dark" ? "bg-dark" : "bg-light"}`}>
      <div className="flex items-center justify-between py-4 px-6">
        <Link to="/" className="font-bold text-lg">
          askweather.ai
        </Link>
        <div className="flex gap-4 items-center">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/terms">Terms</Link>
          <button
            className="ml-4"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
}
