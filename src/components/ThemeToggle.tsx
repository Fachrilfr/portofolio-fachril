/**
 * @copyright 2025 fachrilfrmnsyh
 * @license Apache-2.0
 */

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const activeTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(activeTheme);
    
    if (activeTheme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    if (newTheme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="m-4 fixed top-4 right-24 z-50 border-2 border-zinc-200 dark:border-neutral-700 hover:border-primary bg-zinc-100 dark:bg-neutral-800 text-neutral-950 dark:text-white py-5 px-5 rounded-full hover:text-primary cursor-pointer flex items-center justify-center transition-all duration-300 shadow-md size-[50px] md:size-[54px]"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="size-6 text-yellow-400" />
      ) : (
        <Moon className="size-6 text-slate-700" />
      )}
    </button>
  );
};
