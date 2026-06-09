/**
 * @copyright 2025 fachrilfrmnsyh
 * @license Apache-2.0
 */

import { Button } from "@/components/ui/button";

import { socialLinks } from "@/constant";

export const Profile = () => {
    return (
        <aside className='max-w-3xl border m-6 border-zinc-200 dark:border-neutral-700 bg-zinc-50 dark:bg-neutral-900 text-zinc-950 dark:text-white p-6 rounded-lg lg:sticky lg:left-0 lg:top-6 lg:w-96 shadow-sm dark:shadow-none'>
            <div className='flex flex-col gap-4'>

                {/* Header */}
                <div className='flex items-center justify-between gap-x-10'>
                    <h1 className='text-3xl font-bold'>Fachril</h1>
                    <p className='text-sm text-zinc-600 dark:text-zinc-400 font-medium'>Software Engineer</p>
                </div>

                {/* Image */}
                <img
                    src='/pf10.png'
                    alt='Fachril'
                    className='lg:w-96 rounded-2xl object-cover'
                />

                {/* Location */}
                <div className='mt-2'>
                    <p className='text-sm text-zinc-500 dark:text-neutral-400'>Based in:</p>
                    <p className='text-lg capitalize'>Tangerang, Banten</p>
                </div>

                {/* Contact */}
                <div className='mt-2'>
                    <p className='text-sm text-zinc-500 dark:text-neutral-400'>Contact:</p>
                    <p className='text-lg'>+62 857-7671-0701</p>
                    <p className='text-lg'>fachrilfr13@gmail.com</p>
                </div>

                {/* Social Media (Center & Only 3) */}
                <div className='flex justify-center gap-4 pt-2 text-zinc-400 dark:text-neutral-500'>
                    {socialLinks.slice(0, 3).map((social, i) => {
                        const Icon = social.icon;

                        return (
                            <a
                                key={i}
                                href={social.link}
                                target='_blank'
                                className='hover:text-primary border-2 border-zinc-300 dark:border-neutral-500 p-2 rounded-full hover:border-primary transition duration-200'
                            >
                                <Icon className='size-6' />
                            </a>
                        )
                    })}
                </div>

                {/* Button */}
                <Button
                    className='mt-2 cursor-pointer'
                    size='lg'
                    asChild
                >
                    <a href='#contact'>Let's Work!</a>
                </Button>

            </div>
        </aside>
    )
};