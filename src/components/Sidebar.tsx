/**
 * @copyright 2025 fachrilfrmnsyh
 * @license Apache-2.0
 */

import {useState} from "react";

import { cn } from "@/lib/utils";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { MenuIcon } from "lucide-react";

import { navLinks, socialLinks } from "@/constant";

export const Sidebar = () => {
    const [active, setActive] = useState('#hero');

    return (
        <>
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant='ghost'
                        size='icon'
                        className='m-4 fixed top-4 right-4 z-50 border-2 border-zinc-200 dark:border-neutral-700 hover:border-primary bg-zinc-100 dark:bg-neutral-800 text-neutral-950 dark:text-white py-5 px-5 rounded-full hover:text-primary cursor-pointer shadow-md size-[50px] md:size-[54px] flex items-center justify-center'
                    >
                        <MenuIcon size={24}/>
                    </Button>
                </SheetTrigger>

                <SheetContent
                    side='right'
                    className='w-84 bg-zinc-50 dark:bg-neutral-900 text-neutral-950 dark:text-white py-6 pl-10 border-l border-zinc-200 dark:border-neutral-800'
                >
                    <SheetTitle className='text-lg font-semibold text-neutral-950 dark:text-white'>
                        Menu
                    </SheetTitle>

                    <nav className='flex flex-col gap-4 mt-6'>
                        {navLinks.map((link) => {
                            const Icon = link.icon;

                            return (
                                <a 
                                    key={link.label}
                                    href={link.link}
                                    onClick={() => setActive(link.link)}
                                    className={cn('text-zinc-600 dark:text-neutral-300 flex items-center gap-2 hover:text-primary transition-colors duration-200 text-base', 
                                        active == link.link && 'text-primary', 

                                    )}
                                >
                                    <Icon className='size-4'/> {link.label}
                                </a>
                            )
                        })}
                    </nav>

                    <div className="mt-30">
                        <p className='pb-2 text-zinc-500 dark:text-neutral-400 text-sm'>Socials</p>

                        <div className="flex gap-3 text-zinc-400 dark:text-neutral-500">
                            {socialLinks.map((social, i) => {
                                const Icon = social.icon;

                                return (
                                    <a 
                                        key={i} 
                                        href={social.link}
                                        className='hover:text-primary border-2 border-zinc-300 dark:border-neutral-500 p-2 rounded-full hover:border-primary transition duration-200'
                                    >
                                        <Icon className='size-4' />
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                </SheetContent>
            </Sheet>
        </>
    );
};