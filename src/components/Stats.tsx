/**
 * @copyright 2025 fachrilfrmnsyh
 * @license Apache-2.0
 */

import { motion } from 'motion/react';

import { fadeUp, staggerContainer } from '@/lib/animations';

import { statsData } from '@/constant';

export const Stats = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.8}}
            variants={staggerContainer(0.6)}
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-20'
        >
            {statsData.map((stats, i) => (
                <motion.div
                    key={i}
                    variants={fadeUp}
                    className='border border-zinc-200 dark:border-neutral-700 bg-zinc-50/50 dark:bg-neutral-900/30 rounded-xl flex justify-center items-center flex-col py-6 shadow-sm dark:shadow-none'
                >
                    <p className='text-4xl capitalize font-bold lining-nums text-zinc-900 dark:text-white'>{stats.number}</p>

                    <p className='text-zinc-600 dark:text-neutral-300'>{stats.label}</p>
                </motion.div>
            ))}
        </motion.section>
    );
};