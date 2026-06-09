/**
 * @copyright 2025 fachrilfrmnsyh
 * @license Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import { staggerContainer, fadeUp } from '@/lib/animations';

import { SectionHeader } from '@/components/SectionHeader';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectDetailModal } from '@/components/ProjectDetailModal';

import { projectsData } from '@/constant';
import type { ProjectType } from '@/types';

const PROJECTS_PER_PAGE = 6;

const gridVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
    },
  },
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projectsData.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = projectsData.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.05 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='projects'
    >
      <SectionHeader
        subtitle='Projects'
        title='My featured projects'
      />

      <AnimatePresence mode='wait'>
        <motion.div
          key={currentPage}
          className='grid md:grid-cols-2 gap-10 mt-10'
          variants={gridVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
        >
          {currentProjects.map((project) => (
            <ProjectCard
              key={`${currentPage}-${project.title}`}
              imgSrc={project.imgSrc}
              projectLink={project.projectLink}
              tags={project.tags}
              title={project.title}
              description={project.description}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <motion.div
          variants={fadeUp}
          className='flex items-center justify-center gap-2 mt-12'
        >
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`
                relative w-10 h-10 rounded-md text-sm font-semibold transition-all duration-200
                ${currentPage === page
                  ? 'gradient-border text-zinc-900 dark:text-white bg-zinc-100 dark:bg-neutral-800'
                  : 'border border-zinc-300 dark:border-neutral-600 text-zinc-500 dark:text-neutral-400 hover:border-zinc-500 dark:hover:border-neutral-400 hover:text-zinc-800 dark:hover:text-white'
                }
              `}
            >
              {page}
            </button>
          ))}
        </motion.div>
      )}

      {/* PROJECT DETAIL MODAL */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </motion.section>
  );
};
