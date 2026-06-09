/**
 * @copyright 2025 fachrilfrmnsyh
 * @license Apache-2.0
 */

import { motion } from "motion/react";

import { fadeUp, staggerContainer } from "@/lib/animations";

import { SectionHeader } from "@/components/SectionHeader";
import { ExpCard } from "@/components/ExpCard";
import { ToolsCard } from "@/components/ToolsCard";

import { education, experience, tools } from "@/constant";

export const Resume = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(0)}
            className='mt-30 scroll-mt-10'
            id='resume'
        >
            <SectionHeader
                subtitle='Resume'
                title='Education and practical experience'
            />

            <motion.p
                variants={fadeUp}
                className='mt-4 text-zinc-600 dark:text-neutral-300'
            >
                With a background in Computer Science at Binus University and hands-on experience through various academic projects, I have developed skills in web development and foundational Artificial Intelligence. I am experienced in building applications using React and Node.js, while also exploring Machine Learning and Computer Vision. Each project has strengthened my ability to create functional, efficient, and user-friendly solutions.
            </motion.p>

            <div className='grid gap-x-10 my-16 md:grid-cols-2'>
                <motion.div
                    variants={fadeUp}
                    className='mb-16 md:mb-0'
                >
                    <h2 className='text-3xl font-semibold mb-8'>Education</h2>

                    <div className='space-y-8 border-l border-neutral-700 pl-6'>
                        {education.map((item, i) => (
                            <ExpCard
                                key={i}
                                item={item}
                            />
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                >
                    <h2 className='text-3xl font-semibold mb-8'>Work Experience</h2>

                    <div className='space-y-8 border-l border-neutral pl-6'>
                        {experience.map((item, i) => (
                            <ExpCard
                                key={i}
                                item={item}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className='my-16'>
                <motion.h2
                    variants={fadeUp}
                    className='text-3xl fonst-semibold mb-8 capitalize'
                >
                    My favorite tools
                </motion.h2>

                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer(0.5)}
                    className='grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5'
                >
                    {tools.map((tool, i) => (
                        <ToolsCard
                            key={i}
                            tool={tool}
                        />
                    ))}
                </motion.div>
            </div>

        </motion.section>
    );
};