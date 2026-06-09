import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/constant";
import { Sun, Moon } from "lucide-react";

export const FloatingMenu = () => {
  const [active, setActive] = useState("#hero");
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
    <div className="fixed right-10 top-1/2 -translate-y-1/2 bg-zinc-100/80 dark:bg-black/80 backdrop-blur-md border border-zinc-200 dark:border-neutral-800 pt-6 rounded-full z-10 hidden lg:block shadow-md dark:shadow-none">
      {navLinks.map((link, i) => {
        const Icon = link.icon;
        const isActive = active === link.link;
        const isLast = i === navLinks.length - 1;

        return (
          <a
            key={link.label}
            href={link.link}
            onClick={() => setActive(link.link)}
            className={cn(
              "flex items-center gap-2 px-4 text-zinc-500 dark:text-neutral-400 transition-colors duration-200 hover:text-primary dark:hover:text-primary",
              isActive && "text-primary",
              isLast ? "mb-4" : "mb-6"
            )}
          >
            <Icon className="size-5" />
          </a>
        );
      })}

      {/* Separator Line */}
      <div className="h-[1px] w-6 bg-zinc-300 dark:bg-neutral-800 mx-auto mb-4" />

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center size-9 rounded-full border border-zinc-200 dark:border-neutral-800 bg-zinc-100 dark:bg-neutral-900 text-zinc-500 dark:text-neutral-400 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-all duration-300 cursor-pointer mx-auto mb-6 shadow-sm dark:shadow-none"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun className="size-5 text-yellow-500 dark:text-yellow-400" />
        ) : (
          <Moon className="size-5 text-slate-700 dark:text-slate-400" />
        )}
      </button>
    </div>
  );
};