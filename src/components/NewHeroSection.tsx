'use client'

import DiagonalPattern from './DiagonalPattern'
import BannerSection from './BannerSection'
import ProfileHeader from './ProfileHeader'
import ContentSection from './ContentSection'
import ContentParagraph from './ContentParagraph'
import SectionBorder from './SectionBorder'
import ExperienceContent from './ExperienceContent'
import Reachout from './Reachout'
import CallToAction from './CallToAction'
import ContributionsDisplay from './ContributionsDisplay'
// import OpenSourceContributionsCard from './OpenSourceContributionsCard'
import TechStackMarquee from './TechStackMarquee'
import { Reveal } from './Reveal'

export default function NewHeroSection() {
  return (
    <div className="min-h-screen transition-colors duration-300 font-['Inter'] relative">
      <div className="relative mx-auto max-w-4xl">
        {/* Diagonal Patterns */}
        <DiagonalPattern side="left" />
        <DiagonalPattern side="right" />
        
        {/* Main Content */}
        <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl">
          {/* Banner Section */}
          <Reveal delay={0.1} duration={0.8} amount={0.2}>
            <BannerSection 
              bannerImage="/mountain.jpg"
              quote="Build • Ship • Learn • Repeat"
            />
          </Reveal>
          
          {/* Profile Header */}
          <Reveal delay={0.2} duration={0.7} amount={0.3}>
            <ProfileHeader 
              name="Aniket Goyal"
              age="24"
              title="engineer • developer • builder"
              profileImage="/Aniketpfp.jpeg"
              socialLinks={{
                // twitter: "https://x.com/",
                github: "https://github.com/aniket607",
                linkedin: "https://www.linkedin.com/in/aniket607/",
                resume: "https://drive.google.com/file/d/1KI6sfuZTvHgRuzqwA3xqTweuOt2Sosxa/view?usp=sharing",
              }}
            />
          </Reveal>
          
          {/* Content Prose */}
          <div className="prose dark:prose-invert max-w-none">
            <div className="text-base">
              {/* Current Role Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.4}>
                <ContentSection
                  subtitle="AI Engineer | Full-stack Developer"
                  title=''
                  className="mt-6"
                >
                  <div></div>
                </ContentSection>
              </Reveal>
              
              <Reveal delay={0.05} duration={0.4} y={20} amount={0.8}>
                <SectionBorder className="mt-2" />
              </Reveal>
              
              {/* About Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.3}>
                <ContentSection background className="pb-4 pt-1">
                  <ContentParagraph className="mt-4">
                    <span className="font-medium dark:text-white text-black">I&apos;m not your average developer.</span> I&apos;d rather be crafting elegant code with a coffee in hand than debugging someone else&apos;s spaghetti code at 3 AM. These days, you&apos;ll find me deep in AI model integrations, building intelligent features that actually make sense.
                  </ContentParagraph>
                  <ContentParagraph>
                    <span className="font-medium dark:text-white text-black">I build from zero.</span> Whether it&apos;s frontend, backend, full-stack applications, or AI-powered experiences, I work across the entire development lifecycle. From UI/UX to deployment to user feedback, I care less about technology debates and more about delivering results that people love using.
                  </ContentParagraph>
                </ContentSection>
              </Reveal>

              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

               {/* Experience Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.3}>
                <div className="sm:px-12 px-6">
                  <h2 className="text-md mb-2 opacity-30 mt-6">Professional Experience</h2>
                  <ExperienceContent />
                </div>
              </Reveal>

                <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                  <SectionBorder className="mt-0 pt-0" />
                </Reveal>
              
                 {/* Technical Contributions */}
              <Reveal delay={0.1} duration={0.6} amount={0.2}>
                <div className="sm:px-12 px-6">
                  <h2 className="text-md mb-2 opacity-20 mt-6">Technical Contributions</h2>
                  <div className="space-y-4 dark:text-white/70 text-black/70 pb-6">
                    <ContentParagraph>
                      <span className="font-medium dark:text-white text-black">at Sage (formerly Fyle) —</span> I focused on shipping user-facing improvements that reduced friction and made the product faster.
                    </ContentParagraph>
                    <ul className="list-disc pl-6 space-y-2 text-sm sm:text-md dark:text-white/70 text-black/70">
                      <li>
                        <span className="font-medium dark:text-white text-black">Modernized frontend:</span> Migrated two major pages and multiple reusable components from AngularJS to modern Angular with full feature parity, preserving UX and accessibility while simplifying the codebase.
                      </li>
                      <li>
                        <span className="font-medium dark:text-white text-black">Reduced platform load:</span> Refactored legacy API integrations to the new Platform APIs across Outlook Add-in, Chrome Extension, Mobile, and Web. Result: ~70% fewer API calls and noticeably faster interactions.
                      </li>
                      <li>
                        <span className="font-medium dark:text-white text-black">Shipped with velocity:</span> Partnered with Product and Design to resolve user-facing bugs quickly and deliver new features without regressions, keeping the experience smooth end-to-end.
                      </li>
                    </ul>
                  </div>
                </div>
              </Reveal>


              
              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>
              
              {/* GitHub Contributions */}
              <Reveal delay={0.1} duration={0.6} amount={0.2}>
                <div className="sm:px-12 px-6 mt-4">
                  <h2 className="text-sm sm:text-md opacity-30 leading-relaxed -tracking-[0.01em] mb-4">
                    GitHub Contributions <span className="opacity-30">●</span> @aniket607
                  </h2>
                  <div className="mb-6">
                    <ContributionsDisplay
                      username="aniket607"
                      variant="compact"
                      className="w-full"
                    />
                  </div>
                </div>
              </Reveal>
              
              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>
              
              {/* Tech Stack Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.3}>
                <div className="sm:px-12 px-6 mt-6 mb-6">
                  <TechStackMarquee className="w-full" />
                </div>
              </Reveal>
              
              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>
              
              {/* Open Source Contributions Section */}
              {/* <Reveal delay={0.1} duration={0.6} amount={0.2}>
                <div className="sm:px-12 px-6 mt-4">
                  <h2 className="text-sm sm:text-md opacity-30 leading-relaxed -tracking-[0.01em] mb-4">
                    Open Source Contributions <span className="opacity-30">●</span> {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </h2>
                  <OpenSourceContributionsCard />
                </div>
              </Reveal> */}
              
              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-4 pt-0" />
              </Reveal>

              {/* call to action*/}
              <Reveal delay={0.1} duration={0.6} amount={0.4}>
                <CallToAction/>
              </Reveal>
              
              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>
              
              {/* Reachout Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.3}>
                <div className="mt-6">
                  <Reachout 
                    title="Let's connect"
                    subtitle="Find me on these platforms"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
