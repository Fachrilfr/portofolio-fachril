/**
 * @copyright 2025 fachrilfrmnsyh
 * @license Apache-2.0
 */

import { motion } from "motion/react";

import { fadeUp } from "@/lib/animations";

import type { ToolsType } from "@/types";
import { div } from "motion/react-client";

export const ToolsCard = ({ tool }: { tool: ToolsType }) => {
    return (
        <motion.div
            variants={fadeUp}
            className='border border-neutral-700 rounded-md flex justify-center items-center flex-col py-4'
        >
            <img
                src={tool.imgSrc}
                alt={tool.label}
                className="w-12 h-12 object-contain"
            />

            <p className='font-bold mt-2'>{tool.label}</p>
        </motion.div>
    )
};