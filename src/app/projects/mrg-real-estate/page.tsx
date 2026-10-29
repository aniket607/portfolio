import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import OnekoCat from '@/components/OnekoCat'
import ResizablePortfolioNavigation from '@/components/ResizablePortfolioNavigation'
import RealEstateContact from '@/components/RealEstateContact'

const PAGE_URL = 'https://www.aniketgoyal.tech/projects/mrg-real-estate'
const TITLE = 'MRG Real Estate: Dubai Property Website Case Study | Aniket Goyal'
const DESCRIPTION =
  'How I built a bilingual English/Arabic property platform with lead capture and an admin panel for a Dubai off-plan real estate brokerage.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: 'Aniket Goyal Portfolio',
    type: 'article',
    images: [
      {
        url: 'https://www.aniketgoyal.tech/images/mrg/og.jpg',
        width: 1200,
        height: 630,
        alt: 'MRG Real Estate website homepage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['https://www.aniketgoyal.tech/images/mrg/og.jpg'],
  },
}

const buyers = [
  'Search and filter off-plan and ready properties by type, area, developer, bedrooms and price.',
  'Every project gets its own page: photo gallery, starting price, handover date, payment plan, floor plans with zoom, amenities, FAQs, a location map and a downloadable brochure.',
  'Browse by area, by developer, or through curated pages for off-plan, secondary and luxury properties.',
  'Prices switch between 8 currencies, and sizes between sq ft and sq m.',
  'A floating WhatsApp button on every page opens a chat with a pre-written message. The phone number is one tap to call.',
  'A short guide on the homepage (buying, selling or renting, then bedrooms) turns undecided visitors into enquiries.',
  'A journal section for market articles that bring in search traffic.',
]

const sales = [
  'Every enquiry is saved to a lead inbox and emailed to the team straight away, with one-tap Reply and Call buttons.',
  'Brochures are gated: visitors leave their name, email and phone to download, so every download is a lead.',
  'Four capture points live on the site: project enquiry, brochure download, the homepage guide, and a "sell your property" callback request.',
  'Each lead records the page it came from, the campaign source (UTM) and the referrer, so you can see what is working.',
  'Hidden spam trap stops bots from filling the inbox.',
  'Leads move through New, Contacted and Closed, and export to CSV.',
]

const office = [
  'Publish a new project with photos, floor plans, payment plan, amenities, FAQs, brochure and map location, with no developer needed.',
  'Choose the cover photo, and switch projects between published, featured and luxury with one toggle.',
  'Manage developers, areas, agents and journal articles (with a rich-text editor) from the same place.',
  'Arabic text is generated automatically from the English when you save, so there is no second copy to maintain.',
  'Contact phone, email, WhatsApp, social links and the lead-alert email address are editable in Settings.',
  'A dashboard shows published projects and new leads at a glance. Login is secure and there is no public sign-up.',
]

const found = [
  'A sitemap that updates itself whenever a project, area, developer or article is added.',
  'Structured data on the pages (agency, property, FAQ, breadcrumb and article) so Google can show richer results.',
  'An llms.txt summary of the site, so AI assistants and AI search tools can read and cite it accurately.',
  'Unique titles, descriptions and social preview images on every page, and the admin area kept out of search.',
]

const currencies = ['AED', 'USD', 'EUR', 'GBP', 'INR', 'SAR', 'RUB', 'CNY']

const stack = [
  'TanStack Start',
  'React',
  'TailwindCSS',
  'shadcn/ui',
  'Neon PostgreSQL',
  'Drizzle ORM',
  'Better Auth',
  'Resend (email alerts)',
  'UploadThing (files)',
  'Azure AI Translator',
  'Vercel',
]

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="py-8 border-t border-dashed dark:border-white/[0.06] border-black/[0.06]">
      <h2 className="text-lg sm:text-xl mb-4 opacity-30">{title}</h2>
      {children}
    </section>
  )
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base dark:text-white/70 text-black/70 leading-relaxed">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  )
}

function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-lg border border-dashed border-neutral-400 dark:border-neutral-600 px-4 py-3 text-sm opacity-60">
      {children}
    </p>
  )
}

function Shot({
  src,
  alt,
  caption,
  width,
  height,
  className = '',
}: {
  src: string
  alt: string
  caption?: string
  width: number
  height: number
  className?: string
}) {
  return (
    <figure className={className}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(min-width: 896px) 800px, 100vw"
        className="w-full h-auto rounded-lg border border-neutral-200 dark:border-neutral-800"
      />
      {caption && (
        <figcaption className="text-xs sm:text-sm opacity-50 mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export default function MrgCaseStudyPage() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black">
      <ResizablePortfolioNavigation />
      <OnekoCat />

      <main className="pt-16">
        <article className="mx-auto max-w-4xl px-4 sm:px-8 py-10 sm:py-14">
          <Link
            href="/"
            className="text-sm sm:text-base inline-flex items-center hover:underline mb-6"
          >
            <span className="mr-2">←</span>Back home
          </Link>

          {/* 1. Hero */}
          <header className="mb-10">
            <p className="text-sm opacity-40 mb-2">
              Case study · Aug – Sep 2026
            </p>
            <h1 className="font-[family-name:var(--font-instrument-serif)] text-4xl sm:text-5xl mb-3">
              MRG Real Estate
            </h1>
            <p className="text-lg sm:text-xl dark:text-white/70 text-black/70 mb-5">
              A bilingual property platform for a Dubai off-plan brokerage.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="https://www.mrgrealestate.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-lg bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium hover:opacity-80 transition-opacity"
              >
                Visit the live site <FiArrowUpRight />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-lg border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              >
                Talk about your project
              </a>
            </div>
            <Image
              src="/images/mrg/home.webp"
              alt="MRG Real Estate homepage on desktop"
              width={1440}
              height={900}
              priority
              sizes="(min-width: 896px) 800px, 100vw"
              className="w-full h-auto rounded-xl border border-neutral-200 dark:border-neutral-800"
            />
          </header>

          {/* 2. Brief */}
          <Section title="The brief">
            <Placeholder>[CLIENT BRIEF: confirm with Aniket]</Placeholder>
          </Section>

          {/* 3. What I built */}
          <Section title="What I built">
            <div className="space-y-8">
              <div>
                <h3 className="font-[family-name:var(--font-instrument-serif)] text-2xl mb-3">
                  For buyers
                </h3>
                <List items={buyers} />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-instrument-serif)] text-2xl mb-3">
                  For the sales team
                </h3>
                <List items={sales} />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-instrument-serif)] text-2xl mb-3">
                  For the office
                </h3>
                <List items={office} />
                <Shot
                  src="/images/mrg/admin-dashboard.webp"
                  alt="MRG admin dashboard showing projects, new leads, developers and blog posts"
                  caption="The admin dashboard: listings, new enquiries, developers and articles at a glance"
                  width={2000}
                  height={870}
                  className="mt-4"
                />
              </div>
            </div>
          </Section>

          {/* 4. Arabic + currency */}
          <Section title="Arabic and multi-currency">
            <p className="text-sm sm:text-base dark:text-white/70 text-black/70 leading-relaxed mb-4">
              Visitors switch between English and Arabic in one tap. The Arabic
              version flips the whole layout right-to-left, not just the text.
              Prices convert live between {currencies.join(', ')}, using
              exchange rates that refresh daily.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Shot
                src="/images/mrg/project.webp"
                alt="MRG project page in English with prices in AED"
                caption="English, prices in AED"
                width={1440}
                height={900}
              />
              <Shot
                src="/images/mrg/project-ar.webp"
                alt="MRG project page in Arabic, right-to-left, with prices in USD"
                caption="Arabic, right-to-left, prices in USD"
                width={1440}
                height={900}
              />
            </div>
          </Section>

          {/* 5. SEO */}
          <Section title="Built to be found">
            <List items={found} />
          </Section>

          {/* 6. Screenshots */}
          <Section title="Screenshots">
            <div className="space-y-4">
              <Shot
                src="/images/mrg/listing.webp"
                alt="MRG off-plan listing page with search and filters"
                caption="Search and filters on the off-plan listing"
                width={1440}
                height={900}
              />
              <Shot
                src="/images/mrg/project.webp"
                alt="MRG project page with gallery, price and enquiry form"
                caption="A project page with gallery, price, handover and enquiry form"
                width={1440}
                height={900}
              />
              <div className="grid grid-cols-2 gap-4 max-w-md">
                <Shot
                  src="/images/mrg/mobile-home.webp"
                  alt="MRG homepage on a phone"
                  caption="Homepage on mobile"
                  width={390}
                  height={844}
                />
                <Shot
                  src="/images/mrg/mobile-project.webp"
                  alt="MRG project page on a phone"
                  caption="Project page on mobile"
                  width={390}
                  height={844}
                />
              </div>
            </div>
          </Section>

          {/* 8. Tech */}
          <Section title="Tech stack">
            <p className="text-sm opacity-60 mb-3">
              39 routes on a 20-table PostgreSQL database.
            </p>
            <ul className="flex flex-wrap gap-2">
              {stack.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-neutral-300 dark:border-neutral-700 px-3 py-1 text-xs sm:text-sm"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Section>

          {/* 9. CTA */}
          <Section title="Work with me">
            <div id="contact">
              <RealEstateContact heading="Building or refreshing a real estate website? Let's talk." />
            </div>
          </Section>
        </article>
      </main>
    </div>
  )
}
