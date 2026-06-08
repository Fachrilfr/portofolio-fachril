/**
 * @copyright 2025 fachrilfrmnsyh
 * @license Apache-2.0
 */

import { motion } from "motion/react";
import { fadeUp } from "@/lib/animations";

import type { ToolsType } from "@/types";

export const ToolsCard = ({ tool }: { tool: ToolsType }) => {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -8,
        scale: 1.05,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="border border-zinc-200 dark:border-neutral-700 bg-zinc-50/50 dark:bg-neutral-900/30 rounded-md flex flex-col items-center justify-center py-4 cursor-pointer hover:border-primary dark:hover:border-primary shadow-sm dark:shadow-none"
    >
      <motion.img
        src={tool.imgSrc}
        alt={tool.label}
        className="w-12 h-12 object-contain"
        whileHover={{ rotate: 5 }}
      />

      <p className="mt-2 font-bold text-zinc-800 dark:text-zinc-200 transition-colors duration-200 group-hover:text-primary dark:group-hover:text-primary">
        {tool.label}
      </p>
    </motion.div>
  );
};