import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import clsx from "clsx";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: "light", icon: Sun, label: "Clair" },
    { value: "dark", icon: Moon, label: "Sombre" },
    { value: "system", icon: Monitor, label: "Système" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-center gap-2 mb-8"
    >
      {themes.map(({ value, icon: Icon, label }) => (
        <motion.button
          key={value}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setTheme(value)}
          className={clsx(
            "p-3 rounded-lg transition-all",
            theme === value
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          )}
          title={label}
        >
          <Icon size={20} />
        </motion.button>
      ))}
    </motion.div>
  );
};

export default ThemeSwitcher;
