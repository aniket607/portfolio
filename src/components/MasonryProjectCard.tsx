'use client';

import { Project } from '@/types/project'
import Link from "next/link";
import Image from "next/image";
import Video from "next-video";
import { motion } from 'framer-motion';
import { useHapticFeedback } from '@/hooks/useHapticFeedback';
interface MasonryProjectCardProps {
  project: Project;
  className?: string;
}

// Map video IDs to imported video assets
const getVideoSource = (videoId: string) => {
  switch (videoId) {
    case 'xyz':
      return null;
    default:
      return null;
  }
};

export const MasonryProjectCard = ({ project, className = "" }: MasonryProjectCardProps) => {
  const videoSource = project.video ? getVideoSource(project.video) : null;
  const { triggerHaptic, isMobile } = useHapticFeedback();

  const handleCardClick = () => {
    if (isMobile()) {
      triggerHaptic('light');
    }
  };

  return (
    <Link href={`/projects/${project.id}`} className="block h-full">
       <motion.div 
        className={`rounded-xl border border-neutral-300 dark:border-[#2E2E2E] bg-white dark:bg-[#111111] p-2 shadow-sm dark:shadow-none cursor-pointer h-full flex flex-col ${className}`}
        whileHover={{ 
          scale: 1.005,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.995 }}
        onClick={handleCardClick}
      >
        {/* Media */}
        <div className="relative overflow-hidden rounded-lg aspect-[16/10] flex-shrink-0">
          {videoSource ? (
            <Video
              src={videoSource}
              poster={project.image}
              className="w-full h-full rounded-lg object-cover"
              playsInline
              autoPlay
              muted
              loop
              controls={false}
            />
          ) : project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={375}
              className="w-full h-full rounded-lg object-cover object-top"
              style={{ color: 'transparent' }}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
              quality={75}
              loading="lazy"
              priority={false}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-lg" />
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col flex-1 px-2 pt-4 pb-3">
          <h3 className="font-[family-name:var(--font-instrument-serif)] text-2xl text-neutral-900 dark:text-white m-0 break-words">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-1 line-clamp-3">
            {project.description}
          </p>
          <p className="mt-auto pt-4 text-sm text-neutral-700 dark:text-[#a8a8a8]">
            View project →
          </p>
        </div>
      </motion.div>
    </Link>
  );
};
