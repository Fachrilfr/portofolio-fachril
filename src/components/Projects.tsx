/**
 * @copyright 2025 fachrilfrmnsyh
 * @license Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';

import { staggerContainer } from '@/lib/animations';

import { SectionHeader } from '@/components/SectionHeader';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectDetailModal } from '@/components/ProjectDetailModal';

import { projectsData } from '@/constant';
import type { ProjectType } from '@/types';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='projects'
    >
      <SectionHeader 
        subtitle='Projects' 
        title='My featured projects'
      />

      <motion.div
        className='grid md:grid-cols-2 gap-10 mt-10'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.6)}
      >
        {projectsData.map((project, i) => (
          <ProjectCard 
            key={i}
            imgSrc={project.imgSrc}
            projectLink={project.projectLink}
            tags={project.tags}
            title={project.title}
            description={project.description}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </motion.div>

      {/* PROJECT DETAIL MODAL */}
      <ProjectDetailModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </motion.section>
  );
};