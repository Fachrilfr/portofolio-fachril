/**
 * @copyright 2025 fachrilfrmnsyh
 * @license Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Github } from "lucide-react";
import type { ProjectType } from "@/types";
import { Button } from "@/components/ui/button";

interface ProjectDetailModalProps {
  project: ProjectType | null;
  onClose: () => void;
}

export const ProjectDetailModal = ({
  project,
  onClose,
}: ProjectDetailModalProps) => {
  if (!project) return null;

  // Detect project platform link
  const isFigma = project.projectLink.includes("figma.com");

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        {/* BACKDROP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* MODAL CONTAINER */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
          className="relative w-full max-w-3xl lg:max-w-4xl bg-white dark:bg-neutral-900 border border-zinc-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-2xl z-10 my-8 flex flex-col max-h-[90vh] lg:max-h-[85vh]"
          data-lenis-prevent
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-zinc-950/60 hover:bg-zinc-800 border border-zinc-700/50 dark:border-neutral-700/50 text-white p-2 rounded-full transition cursor-pointer"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          {/* SCROLLABLE CONTENT AREA */}
          <div className="overflow-y-auto flex-1 custom-scrollbar">
            {/* IMAGE HEADER */}
            <div className="relative aspect-[16/8] w-full overflow-hidden bg-neutral-950">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-neutral-900 via-white/20 dark:via-neutral-900/20 to-transparent" />
            </div>

            {/* CONTENT */}
            <div className="p-6 md:p-8 -mt-10 relative z-10">
              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-primary/20 text-primary border border-primary/30 py-1 px-3 rounded-full text-xs font-semibold uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* TITLE */}
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-950 dark:text-white mb-6 leading-tight">
                {project.title}
              </h2>

              {/* CASE STUDY TWO COLUMN LAYOUT */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">

                {/* LEFT 2 COLUMNS: Case Study Sections */}
                <div className="md:col-span-2 space-y-8">
                  {/* Overview */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-neutral-500 mb-2">
                      Project Overview
                    </h3>
                    <p className="text-sm md:text-base text-zinc-700 dark:text-neutral-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Purpose */}
                  {project.purpose && (
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-neutral-500 mb-2">
                        Purpose & Goals
                      </h3>
                      <p className="text-sm md:text-base text-zinc-700 dark:text-neutral-300 leading-relaxed">
                        {project.purpose}
                      </p>
                    </div>
                  )}

                  {/* Process */}
                  {project.process && (
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-neutral-500 mb-2">
                        Development Process
                      </h3>
                      <p className="text-sm md:text-base text-zinc-700 dark:text-neutral-300 leading-relaxed">
                        {project.process}
                      </p>
                    </div>
                  )}

                  {/* Outcome */}
                  {project.outcome && (
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-neutral-500 mb-2">
                        Outcome & Results
                      </h3>
                      <p className="text-sm md:text-base text-zinc-700 dark:text-neutral-300 leading-relaxed">
                        {project.outcome}
                      </p>
                    </div>
                  )}
                </div>

                {/* RIGHT 1 COLUMN: Meta Panel */}
                <div className="md:col-span-1 space-y-6 bg-zinc-50 dark:bg-neutral-950/40 p-5 md:p-6 rounded-xl border border-zinc-200 dark:border-neutral-800/60 h-fit">
                  {/* Role */}
                  {project.role && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-neutral-500 mb-1">
                        My Role
                      </h4>
                      <p className="text-sm font-semibold text-zinc-800 dark:text-neutral-200">
                        {project.role}
                      </p>
                    </div>
                  )}

                  {/* Tech Stack */}
                  {project.tech && project.tech.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-neutral-500 mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((techItem) => (
                          <span
                            key={techItem}
                            className="bg-zinc-200/50 dark:bg-neutral-800 text-zinc-850 dark:text-neutral-300 py-1 px-2.5 rounded-md text-xs font-medium border border-zinc-300/60 dark:border-neutral-700/60 transition-colors"
                          >
                            {techItem}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>

          {/* FOOTER ACTION BUTTONS */}
          <div className="p-4 bg-zinc-50 dark:bg-neutral-950/50 border-t border-zinc-200 dark:border-neutral-800 flex justify-end gap-3 items-center">
            <Button
              variant="ghost"
              onClick={onClose}
              className="text-zinc-500 dark:text-neutral-400 hover:text-zinc-950 dark:hover:text-white cursor-pointer"
            >
              Close
            </Button>

            <Button asChild className="cursor-pointer">
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                {isFigma ? (
                  <>
                    <ExternalLink size={16} />
                    <span>Open Figma Design</span>
                  </>
                ) : (
                  <>
                    <Github size={16} />
                    <span>View Repository</span>
                  </>
                )}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
