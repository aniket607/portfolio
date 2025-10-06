'use client'

import Link from 'next/link'
import Image from 'next/image'

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string;
  href?: string;
  logoUrl?: string;
}

export default function ExperienceContent() {
  const experiences: ExperienceItem[] = [
    {
      company: "Sage (formerly Fyle)",
      position: "Engineering Intern",
      duration: "March 2025 – Sep 2025",
      description: "Migrated two major pages and several reusable components from AngularJS to modern Angular with full feature parity. Refactored legacy integrations to new Platform APIs across Outlook Add-in, Chrome Extension, Mobile, and Web, reducing API calls by ~70% and improving performance. Collaborated with Product and Design to fix user-facing bugs quickly and ship features that kept the experience smooth.",
      href: "https://www.fylehq.com/",
      logoUrl: "/fylelogo.png",
    },
    {
      company: "Con10t Labs",
      position: "Quality Assurance Intern",
      duration: "March 2023 – June 2023", 
      description: "Created detailed, comprehensive, and well-structured test plans and test cases, leading to the identification of 15+ critical bugs before product launch, and zero post-launch hotfixes.",
      href: "https://www.con10tlabs.com/",
      logoUrl: "/con10tlabs.png",
    },
  ];

  return (
    <div className="space-y-6 dark:text-white/70 text-black/70 pb-6">
      {experiences.map((exp) => (
        <div key={exp.company} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          {/* Left side - Logo, Company & Position */}
          <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
            {/* Company Logo */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center overflow-hidden flex-shrink-0">
              {exp.logoUrl ? (
                <Image 
                  src={exp.logoUrl} 
                  alt={exp.company}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-sm sm:text-lg font-medium dark:text-white text-black">
                  {exp.company.charAt(0)}
                </span>
              )}
            </div>
            
            {/* Company Info */}
            <div className="flex-1 min-w-0">
              <h3 className="font-medium dark:text-white text-black text-base sm:text-lg">
                {exp.href ? (
                  <Link 
                    href={exp.href} 
                    target="_blank" 
                    className="hover:text-[#006FEE] transition-colors"
                  >
                    {exp.company}
                  </Link>
                ) : (
                  exp.company
                )}
              </h3>
              <p className="text-xs sm:text-sm opacity-70">
                {exp.position}
              </p>
            </div>
          </div>
          
          {/* Right side - Duration */}
          <div className="pl-13 sm:pl-0 sm:text-right flex-shrink-0">
            <p className="text-xs sm:text-sm opacity-50">
              {exp.duration}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
