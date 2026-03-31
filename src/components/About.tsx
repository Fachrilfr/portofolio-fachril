/**
 * @copyright 2025 fachrilfrmnsyh
 * @license Apache-2.0
 */

import { motion } from "motion/react";

import { fadeUp, staggerContainer } from "@/lib/animations";

import { SectionHeader } from "@/components/SectionHeader";

import { Button } from "@/components/ui/button";

export const About = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3}}
            variants={staggerContainer(0)}
            className='mt-30 scroll-mt-10'
            id='about'
        >
            <SectionHeader 
                subtitle='about'
                title='Building impactful solutions through code and intelligence'
            />

            <motion.p
                variants={fadeUp}
                className='mt-4 text-neutral-300'
            >
                I am Muhammad Fachril Firmansyah, a 6th-semester Computer Science student at Binus University with a GPA of 3.85. I have a strong interest in software development and Artificial Intelligence, particularly in Computer Vision and Machine Learning, with experience working on several web-based projects throughout my studies.
            </motion.p>

            <motion.p
                variants={fadeUp}
                className='mt-2 text-neutral-300'
            >
                My stack includes JavaScript, React, and Node.js for modern application development, along with a foundational understanding of Machine Learning and Computer Vision. Through these projects, I have experience building functional and responsive applications while starting to explore AI implementations for solving simple problems.
            </motion.p>

            <motion.p
                variants={fadeUp}
                className='mt-2 text-neutral-300'
            >
                I am preparing to pursue a career as a Software Engineer and AI Engineer, and I am open to internship, freelance, or entry-level opportunities. I am comfortable working both independently and in a team, and I am adaptable to dynamic work environments.
            </motion.p>

            <motion.div
                variants={fadeUp}
                transition={{ delay: 0.2}}
            >
                <Button className='mt-5'>Contact Me</Button>
            </motion.div>
        </motion.section>
    );
};