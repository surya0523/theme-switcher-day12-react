import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-black dark:text-white mb-4">
          Theme Switcher 🌓
        </h1>
        <ThemeToggle />
        
      </div>
    </div>
  );
};

export default App;
