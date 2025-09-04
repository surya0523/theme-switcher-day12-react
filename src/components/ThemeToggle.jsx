// src/components/ThemeToggle.jsx
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
    >
      {theme === "light" ? "Switch to Dark Mode 🌙" : "Switch to Light Mode ☀️"}
    </button>
  );
};

export default ThemeToggle;
