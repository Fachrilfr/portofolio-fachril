/**
 * @copyright 2025 fachrilfrmnsyh
 * @license Apache-2.0
 */

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { navLinks } from "@/constant";

// optional icon (kalau pakai lucide)
import { Moon, Sun } from "lucide-react";

export const FloatingMenu = () => {
    const [active, setActive] = useState('#hero');
    const [dark, setDark] = useState(false);

    // ambil preferensi awal
    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved) {
            setDark(saved === "dark");
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setDark(prefersDark);
        }
    }, []);

    // apply ke html
    useEffect(() => {
        const root = document.documentElement;

        if (dark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);

    return (
        <div className='fixed right-10 top-1/2 -translate-y-1/2 bg-black dark:bg-neutral-900 border border-neutral-600 pt-6 pb-4 rounded-full z-10 hidden lg:flex flex-col items-center'>

            {/* NAV */}
            {navLinks.map((link) => {
                const Icon = link.icon;

                return (
                    <a 
                        key={link.label}
                        href={link.link}
                        onClick={() => setActive(link.link)}
                        className={cn(
                            'text-neutral-400 flex items-center gap-2 hover:text-primary transition-colors duration-200 mb-6 px-4',
                            active == link.link && 'text-primary',
                        )}
                    >
                        <Icon className='size-5' />
                    </a>
                )
            })}

            {/* Divider */}
            <div className="w-6 h-px bg-neutral-600 mb-4"></div>

            {/* TOGGLE THEME */}
            <button
                onClick={() => setDark(!dark)}
                className="mb-2 p-2 rounded-full border border-neutral-500 text-neutral-400 hover:text-primary hover:border-primary transition"
            >
                {dark ? <Sun className="size-5" /> : <Moon className="size-5" />}
            </button>

        </div>
    );
};