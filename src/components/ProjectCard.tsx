/**
 * @copyright 2025 fachrilfrmnsyh
 * @license Apache-2.0
 */

import { fadeUp } from "@/lib/animations";
import type { ProjectType } from "@/types";
import { motion } from "motion/react";

interface ProjectCardProps extends ProjectType {
  onClick: () => void;
}

export const ProjectCard = ({
  imgSrc,
  tags,
  title,
  description,
  onClick
}: ProjectCardProps) => {
  return (
    <motion.div
      onClick={onClick}
      variants={fadeUp}
      className='block group cursor-pointer border border-zinc-200 dark:border-neutral-700 bg-zinc-50 dark:bg-neutral-900 p-5 rounded-xl shadow-sm dark:shadow-none transition-all duration-300 hover:shadow-md'
    >
      <div className='relative'>
        {/* IMAGE */}
        <figure className='overflow-hidden rounded-lg aspect-[16/10]'>
          <img
            src={imgSrc}
            alt={title}
            className='w-full h-full object-cover rounded-lg transition duration-500 group-hover:scale-105'
          />
        </figure>

        {/* TAG */}
        <div className='absolute bottom-2 left-2 flex gap-2 flex-wrap'>
          {tags.map((tag, i) => (
            <span
              key={i}
              className='bg-zinc-50/90 dark:bg-neutral-900/90 border border-zinc-200/60 dark:border-neutral-800 text-zinc-800 dark:text-zinc-200 group-hover:bg-gradient-to-r group-hover:from-[#f5c542] group-hover:via-[#e8445a] group-hover:to-[#a855f7] group-hover:text-white group-hover:border-transparent py-1 px-2.5 rounded-md text-xs transition-all duration-200 font-semibold'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* TITLE + DESCRIPTION */}
      <div className='mt-4'>
        <h3 className='text-lg font-semibold group-hover:bg-gradient-to-r group-hover:from-[#f5c542] group-hover:via-[#e8445a] group-hover:to-[#a855f7] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 w-fit'>
          {title}
        </h3>
        <p className='text-sm text-muted-foreground line-clamp-3 mt-1'>
          {description}
        </p>
      </div>
    </motion.div>
  );
};