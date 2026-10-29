'use client';

import { Project } from '@/types/project'
import { MasonryProjectCard } from './MasonryProjectCard'

interface MasonryGridProps {
  projects: Project[];
  className?: string;
}

export const MasonryGrid = ({ projects, className = "" }: MasonryGridProps) => {
  return (
    <div className={`w-full bg-neutral-100 dark:bg-[#161616] px-4 sm:px-8 py-10 sm:py-14 ${className}`}>
      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <MasonryProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
