import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'mrg-real-estate',
    title: "MRG Real Estate",
    description: "Bilingual English/Arabic property platform for a Dubai off-plan brokerage.",
    liveLink: "https://www.mrgrealestate.ae",
    image: '/images/mrg/home.webp',
    tags: ["TanStack Start", "React", "Tailwind CSS", "shadcn/ui", "Neon PostgreSQL", "Drizzle ORM", "Better Auth"],
  },
  {
    id: 'blogflow',
    title: "BlogFlow",
    description: "AI blog writer that plans topics on a calendar, drafts SEO-optimised articles and publishes them for you.",
    longDescription: "A SaaS product that takes a blog from topic idea to published article with very little manual work.\n\n- Content calendar: drag topic ideas onto a date to schedule them.\n- AI drafting: SEO-focused articles written for your niche with Gemini.\n- Auto-publishing: posts go out to WordPress, Medium or the built-in blog on schedule.\n- Subscription billing through Dodo Payments.",
    liveLink: "https://blogflow.aniketgoyal.tech/",
    image: '/images/blogflow.webp',
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma ORM",
      "NextAuth",
      "Gemini",
      "Resend",
      "Dodo Payments"
    ],
  },
  {
    id: 'nightlife-app',
    title: "Nightlife App",
    description: "Full-stack platform to discover nightlife events and club experiences with real-time registrations.",
    longDescription: "Built a full-stack web app for discovering nightlife events and club experiences.\n\n99.9% uptime with a real-time registration system powered by Prisma ORM + NeonDB.\n\n40% faster image loads via AWS S3 storage, signed URLs, and aggressive caching.\n\n35% lower bounce rate using responsive, accessible UI built with Tailwind CSS and shadcn/ui",
    liveLink: "https://nightlifeapp.aniketgoyal.tech/",
    githubLink: "https://github.com/aniket607/nightlife",
    // video: '',
    image: '/images/nightlife-users.png',
    // tweetUrl: "https://x.com/",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "AWS S3",
      "TypeScript",
      "shadcn/ui",
      "NeonDB",
      "Prisma ORM"
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}
