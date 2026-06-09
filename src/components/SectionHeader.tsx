/**
 * @copyright 2025 fachrilfrmnsyh
 * @license Apache-2.0
 */

import { motion } from "motion/react";

import { fadeUp } from "@/lib/animations";

import { SparkleIcon } from "lucide-react";

export const SectionHeader = ({ title, subtitle, }:
    {
        title: string;
        subtitle: string;
    }) => {
    return (
        <>
            <motion.p
                variants={fadeUp}
                className='flex items-center justify-center py-1 gap-2 border border-zinc-300 dark:border-neutral-600 rounded-sm w-32 text-zinc-600 dark:text-neutral-300 text-sm font-medium uppercase'
            >
                <SparkleIcon size={15} /> {subtitle}
            </motion.p>

            <motion.h2
                variants={fadeUp}
                className='text-4xl font-bold capitalize mt-2 md:max-w-3xl'
            >
                {title}
            </motion.h2>

            <motion.div
                variants={fadeUp}
                className="h-[4px] w-36 bg-gradient-to-r from-[#a855f7] via-[#e8445a] to-[#f5c542] mt-3 rounded-full"
            />
        </>
    );
};