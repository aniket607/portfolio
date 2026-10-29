'use client'

import Link from 'next/link'
import DiagonalPattern from './DiagonalPattern'
import BannerSection from './BannerSection'
import ProfileHeader from './ProfileHeader'
import ContentSection from './ContentSection'
import ContentParagraph from './ContentParagraph'
import SectionBorder from './SectionBorder'
import ExperienceContent from './ExperienceContent'
import Reachout from './Reachout'
import CallToAction from './CallToAction'
import RealEstateContact from './RealEstateContact'
import FeaturedWork from './FeaturedWork'
import ContributionsDisplay from './ContributionsDisplay'
// import OpenSourceContributionsCard from './OpenSourceContributionsCard'
import TechStackMarquee from './TechStackMarquee'
import { Reveal } from './Reveal'
import { socialLinks, GITHUB_USERNAMES } from '@/data/socialLinks'

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
              socialLinks={socialLinks}
            />
          </Reveal>
          
          {/* Content Prose */}
          <div className="prose dark:prose-invert max-w-none">
            <div className="text-base">
              {/* Current Role Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.4}>
                <ContentSection
                  subtitle="Full-stack Developer | Available for contract projects"
                  title="I build fast, polished websites and web apps for businesses."
                  className="mt-6"
                >
                  <div></div>
                </ContentSection>
              </Reveal>
              
              <Reveal delay={0.05} duration={0.4} y={20} amount={0.8}>
                <SectionBorder className="mt-6" />
              </Reveal>
              
              {/* About Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.3}>
                <ContentSection className="pb-8 pt-6">
                  <ContentParagraph className="mt-6 mb-6">
                    <span className="font-medium dark:text-white text-black">I build products that bring in customers.</span> Marketing sites, web apps, dashboards and AI-powered features, designed and built end to end: fast on mobile, easy to find on Google, and simple for your team to manage.
                  </ContentParagraph>
                  <ContentParagraph className="mb-6">
                    <span className="font-medium dark:text-white text-black">Recent specialty: Dubai real estate.</span> I built a bilingual English/Arabic property platform with search, gated brochures, instant lead alerts and an admin panel the team runs without a developer. <Link href="/projects/mrg-real-estate" className="underline decoration-dotted underline-offset-4">Read the case study</Link>.
                  </ContentParagraph>
                  <ContentParagraph className="mb-2">
                    <span className="font-medium dark:text-white text-black">I build from zero.</span> Whether it&apos;s frontend, backend, full-stack applications, or AI-powered experiences, I work across the entire development lifecycle. From UI/UX to deployment to user feedback, I care less about technology debates and more about delivering results that people love using.
                  </ContentParagraph>
                </ContentSection>
              </Reveal>

              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-6" />
              </Reveal>

               {/* Featured Work */}
              <Reveal delay={0.1} duration={0.6} amount={0.2}>
                <FeaturedWork />
              </Reveal>

              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

               {/* Experience Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.3}>
                  <div className="sm:px-12 px-6">
                  <h2 className="text-lg sm:text-xl mb-4 opacity-20 mt-8">Professional Experience</h2>
                  <ExperienceContent />
                </div>
              </Reveal>

                <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                  <SectionBorder className="mt-6" />
                </Reveal>
              
                 {/* Technical Contributions */}
              <Reveal delay={0.1} duration={0.6} amount={0.2}>
                <div className="sm:px-12 px-6 py-4">
                  <h2 className="text-lg sm:text-xl mb-4 opacity-20 mt-8">Technical Contributions</h2>
                  <div className="space-y-6 dark:text-white/70 text-black/70 pb-8">
                    <ContentParagraph>
                      <span className="font-medium dark:text-white text-black">at Astra Security —</span> I own frontend delivery for an enterprise security dashboard, shipping 262 issues, 83% of them High or Urgent priority.
                    </ContentParagraph>
                    <ul className="list-disc pl-6 space-y-2 text-sm sm:text-md dark:text-white/70 text-black/70">
                      <li>
                        <span className="font-medium dark:text-white text-black">Faster product:</span> Cut dashboard load time by 40%, bundle size by 10% and staging deployment time by 70%.
                      </li>
                      <li>
                        <span className="font-medium dark:text-white text-black">End-to-end features:</span> Delivered enterprise activity logging and label management, from design handoff to production.
                      </li>
                      <li>
                        <span className="font-medium dark:text-white text-black">Quality and breadth:</span> Resolved 64 bugs and shipped 74 improvements across authentication, scans, integrations and scheduling.
                      </li>
                      <li>
                        <span className="font-medium dark:text-white text-black">Smarter workflows:</span> Built 17 AI-assisted workflows for scan setup, verification, credentials and scenario analysis.
                      </li>
                    </ul>
                    <ContentParagraph>
                      <span className="font-medium dark:text-white text-black">at Sage (formerly Fyle) —</span> I shipped user-facing improvements that reduced friction and made the product faster.
                    </ContentParagraph>
                    <ul className="list-disc pl-6 space-y-2 text-sm sm:text-md dark:text-white/70 text-black/70">
                      <li>
                        <span className="font-medium dark:text-white text-black">Modernized frontend:</span> Migrated two major pages and multiple reusable components from AngularJS to modern Angular with full feature parity.
                      </li>
                      <li>
                        <span className="font-medium dark:text-white text-black">Reduced platform load:</span> Moved legacy API integrations to the new Platform APIs across Outlook Add-in, Chrome Extension, Mobile and Web, for ~70% fewer API calls.
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
                  {GITHUB_USERNAMES.map((username) => (
                    <div key={username}>
                      <h2 className="text-lg sm:text-xl opacity-20 leading-relaxed -tracking-[0.01em] mb-4 mt-6 first:mt-0">
                        GitHub Contributions <span className="opacity-20">●</span>{' '}
                        <a
                          href={`https://github.com/${username}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-60 transition-opacity cursor-pointer underline decoration-dotted underline-offset-2"
                        >
                          @{username}
                        </a>
                      </h2>
                      <div className="mb-6">
                        <ContributionsDisplay
                          username={username}
                          variant="compact"
                          className="w-full"
                        />
                      </div>
                    </div>
                  ))}
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
                  <h2 className="text-lg sm:text-xl opacity-20 mt-8 ml-5 leading-relaxed -tracking-[0.01em] mb-4">
                    Open Source Contributions <span className="opacity-20">●</span> {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </h2>
                  <OpenSourceContributionsCard />
                </div>
              </Reveal> */}
              
              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-4 pt-0" />
              </Reveal>

              {/* Dubai real estate contact */}
              <Reveal delay={0.1} duration={0.6} amount={0.4}>
                <RealEstateContact className="sm:px-12 px-6 mt-6 pb-8" />
              </Reveal>

              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-0 pt-0" />
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
