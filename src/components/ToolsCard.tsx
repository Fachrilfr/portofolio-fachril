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
      className="border border-neutral-700 rounded-md flex flex-col items-center justify-center py-4 cursor-pointer hover:border-primary"
    >
      <motion.img
        src={tool.imgSrc}
        alt={tool.label}
        className="w-12 h-12 object-contain"
        whileHover={{ rotate: 5 }}
      />

      <p className="mt-2 font-bold transition-colors duration-200 group-hover:text-primary">
        {tool.label}
      </p>
    </motion.div>
  );
};