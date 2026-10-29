'use client';

import { Project } from '@/types/project'
import { FaGithub} from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import Video from "next-video";
import { useHapticFeedback } from '@/hooks/useHapticFeedback';

interface ProjectCardProps {
  project: Project;
  isDetailed?: boolean;
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

export const ProjectCard = ({ project, isDetailed = false }: ProjectCardProps) => {
  const { triggerHaptic, isMobile } = useHapticFeedback();

  const handleLinkClick = () => {
    if (isMobile()) {
      triggerHaptic('light');
    }
  };

  if (!isDetailed) {
    return (
      <Link href={`/projects/${project.id}`} onClick={handleLinkClick}>
        <div className="hover:underline py-2 text-base sm:text-lg md:text-xl pb-4 sm:pb-5 border-b border-neutral-600 dark:border-neutral-500">
          {project.title}
        </div>
      </Link>
    );
  }

  return (
    <article className="w-full max-w-none px-2 sm:px-0">
      <header className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-medium break-words mb-4 sm:mb-5">{project.title}</h1>
        <div className="flex flex-wrap gap-3 mb-5 sm:mb-6">
          {project.liveLink && (
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium hover:opacity-80 transition-opacity"
              onClick={handleLinkClick}
            >
              Visit the live site <FiArrowUpRight />
            </Link>
          )}
          {project.githubLink && (
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              onClick={handleLinkClick}
            >
              <FaGithub className="size-4" /> View on GitHub
            </Link>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-neutral-100 border-2 border-neutral-500 dark:bg-neutral-800 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Media Section - Fixed Container */}
      <div className="mb-6 sm:mb-8">
        {project.video && getVideoSource(project.video) ? (
          <div className="w-full aspect-video rounded-lg overflow-hidden">
            <Video
              src={getVideoSource(project.video)!}
              poster={project.image}
              className="w-full h-full object-cover"
              controls
              playsInline
              autoPlay
              muted
              loop
            />
          </div>
        ) : project.image && (
          <div className="w-full aspect-video relative rounded-lg overflow-hidden">
            <Image 
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1200px) 70vw, 60vw"
              quality={95}
              priority
            />
          </div>
        )}
      </div>
      {/* Content Section - Fixed Container */}
      <div className="mb-6 sm:mb-8">
        <div className="space-y-3 sm:space-y-4">
          <div className="text-sm sm:text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed">
            {project.longDescription ? (
              project.longDescription.split('\n\n').map((paragraph, index) => (
                paragraph.startsWith('- ') ? (
                  <ul key={index} className="list-disc pl-5 space-y-2 text-neutral-600 dark:text-neutral-400 mb-4 last:mb-0">
                    {paragraph.split('\n').map((line) => (
                      <li key={line}>{line.replace(/^- /, '')}</li>
                    ))}
                  </ul>
                ) : (
                <p key={index} className="text-neutral-600 dark:text-neutral-400 mb-4 last:mb-0">
                  {paragraph}
                  {index === 0 && project.tweetUrl && (
                    <>
                      {' '}
                      <Link 
                        href={project.tweetUrl} 
                        target="_blank" 
                        className="text-cyan-500 dark:text-cyan-600 hover:underline"
                        onClick={handleLinkClick}
                      >
                        you can view the tweet here
                      </Link>
                    </>
                  )}
                </p>
                )
              ))
            ) : (
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                {project.description}
                {project.tweetUrl && (
                  <>
                    {' '}
                    <Link 
                      href={project.tweetUrl} 
                      target="_blank" 
                      className="text-cyan-500 dark:text-cyan-600 hover:underline"
                      onClick={handleLinkClick}
                    >
                      you can view the tweet here
                    </Link>
                  </>
                )}
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
