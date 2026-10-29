'use client'

import OnekoCat from '@/components/OnekoCat'
import ResizablePortfolioNavigation from '@/components/ResizablePortfolioNavigation'
import { MasonryGrid } from '@/components/MasonryGrid'
import { Project } from '@/types/project'
import { motion } from 'framer-motion'

interface ProjectsListClientProps {
  projects: Project[]
}

export default function ProjectsListClient({ projects }: ProjectsListClientProps) {

  return (
      <div className="min-h-screen w-full bg-white dark:bg-black">
        <ResizablePortfolioNavigation />
        <OnekoCat />
          
          {/* Page Header */}
          <div className="w-full relative bg-neutral-50/30 dark:bg-neutral-900/30 border-b border-neutral-200 dark:border-neutral-700 pt-20 sm:pt-24">
            <div className="px-6 sm:px-8 md:px-16 lg:px-20 py-10 sm:py-12 md:py-14">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                   <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-instrument-serif)] font-medium mb-6 sm:mb-8 text-center leading-tight">proof of work</h1>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                >
                  <p className="text-neutral-600 dark:text-neutral-400 text-lg sm:text-xl md:text-2xl text-center max-w-3xl mx-auto leading-relaxed">
                    Selected client work and products I have built.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Masonry Grid */}
          <div className="relative">
            <MasonryGrid projects={projects} />
          </div>
        </div>
  )
}
