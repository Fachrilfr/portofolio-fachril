/**
 * @copyright 2025 fachrilfrmnsyh
 * @license Apache-2.0
 */

import { useState } from "react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/constant";

export const FloatingMenu = () => {
  const [active, setActive] = useState("#hero");

  return (
    <div className="fixed right-10 top-1/2 -translate-y-1/2 bg-zinc-100/80 dark:bg-black/80 backdrop-blur-md border border-zinc-200 dark:border-neutral-800 pt-6 rounded-full z-10 hidden lg:block shadow-md dark:shadow-none">
      {navLinks.map((link) => {
        const Icon = link.icon;
        const isActive = active === link.link;

        return (
          <a
            key={link.label}
            href={link.link}
            onClick={() => setActive(link.link)}
            className={cn(
              "flex items-center gap-2 px-4 mb-6 text-zinc-500 dark:text-neutral-400 transition-colors duration-200 hover:text-primary dark:hover:text-primary",
              isActive && "text-primary"
            )}
          >
            <Icon className="size-5" />
          </a>
        );
      })}
    </div>
  );
};