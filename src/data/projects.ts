import { Project } from '@/types/project'

export const projects: Project[] = [
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
  {
    id:'chat-w-pdf',
    title: "Chat with PDF",
    description: "A simple RAG based chatapp that allows you to chat with your PDF files.",
    longDescription: "Built a simple RAG based chatapp that allows you to chat with your PDF files.\n\nUsed the google gemini embedding model to embed the pdf files and then used the pinecone vector database to store the embeddings.\n\nUsed the google gemini api to chat with the pdf files.",
    liveLink: "https://chatwithpdf.aniketgoyal.tech/",
    githubLink: "https://github.com/aniket607/chat-pdf",
    // video: '',
    image: '/images/chat-pdf.png',
    // tweetUrl: "https://x.com/",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Gemini",
      "Pinecone",
      "TypeScript",
      "shadcn/ui",
      "AI SDK",
      "LlamaParse",
      "Vercel Blob"
    ],
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}
