import React from "react";
import { ThemeProvider } from "./components/context/ThemeContext";
import AnimatedBackground from "./components/ui/AnimatedBackground";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen transition-colors duration-500 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 dark:from-gray-900 dark:via-blue-950 dark:to-gray-900">
        <AnimatedBackground />
        <div className="relative z-10">
          <LoginPage />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
