/**
 * @copyright 2025 fachrilfrmnsyh
 * @license Apache-2.0
 */

import { fadeUp } from "@/lib/animations";
import type { ProjectType } from "@/types";
import { motion } from "motion/react";

export const ProjectCard = ({
  imgSrc,
  projectLink,
  tags,
  title,
  description
}: ProjectType) => {
  return (
    <motion.a
      href={projectLink}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeUp}
      className='block group'
    >
      <div className='relative'>
        {/* IMAGE */}
        <figure className='overflow-hidden rounded-md aspect-[16/10]'>
          <img
            src={imgSrc}
            alt={title}
            className='w-full h-full object-cover rounded-md transition duration-500 group-hover:scale-110'
          />
        </figure>

        {/* TAG */}
        <div className='absolute bottom-0 p-2 flex gap-2 flex-wrap'>
          {tags.map((tag, i) => (
            <span
              key={i}
              className='bg-background group-hover:bg-primary group-hover:text-black py-1 px-2 rounded-sm text-sm'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* TITLE + DESCRIPTION */}
      <div className='mt-3'>
        <h3 className='text-lg font-semibold group-hover:text-primary transition'>
          {title}
        </h3>
        <p className='text-sm text-muted-foreground line-clamp-3'>
          {description}
        </p>
      </div>
    </motion.a>
  );
};