// src/App.jsx
import { useTheme } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const { theme } = useTheme();

  return (
    <div className={theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"}>
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-3xl font-bold">Theme Switcher App</h1>
        <ThemeToggle />
        <p>Current theme: <strong>{theme}</strong></p>
      </div>
    </div>
  );
}

export default App;
