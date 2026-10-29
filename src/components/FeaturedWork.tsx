import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "@/data/projects";

const others = projects.filter((p) => p.id !== "mrg-real-estate" && p.image);

export default function FeaturedWork() {
  return (
    <div className="sm:px-12 px-6 py-4">
      <h2 className="text-lg sm:text-xl mb-4 opacity-20 mt-8">Featured Work</h2>
      <div className="pb-8 space-y-4">
        <Link
          href="/projects/mrg-real-estate"
          className="group block rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800"
        >
          <Image
            src="/images/mrg/home.webp"
            alt="MRG Real Estate homepage"
            width={1440}
            height={900}
            sizes="(min-width: 896px) 800px, 100vw"
            className="w-full h-auto group-hover:opacity-90 transition-opacity"
          />
          <div className="p-4 sm:p-5">
            <p className="font-[family-name:var(--font-instrument-serif)] text-2xl">
              MRG Real Estate
            </p>
            <p className="text-sm sm:text-base dark:text-white/70 text-black/70 mt-1">
              A bilingual (English/Arabic) property platform for a Dubai off-plan brokerage, with an admin panel the team runs without a developer.
            </p>
            <p className="text-sm mt-3 underline decoration-dotted underline-offset-4">
              Read the case study →
            </p>
          </div>
        </Link>
        <div className="grid sm:grid-cols-2 gap-4">
          {others.map((p) => (
            <Link
              key={p.id}
              href={`/projects/${p.id}`}
              className="group block rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800"
            >
              <Image
                src={p.image!}
                alt={p.title}
                width={800}
                height={500}
                sizes="(min-width: 896px) 400px, 100vw"
                className="w-full h-44 object-cover object-top group-hover:opacity-90 transition-opacity"
              />
              <div className="p-4">
                <p className="font-[family-name:var(--font-instrument-serif)] text-xl">
                  {p.title}
                </p>
                <p className="text-sm dark:text-white/70 text-black/70 mt-1">
                  {p.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="text-sm underline decoration-dotted underline-offset-4 opacity-60 hover:opacity-100 transition-opacity"
          >
            All projects
          </Link>
          <a
            href="https://www.mrgrealestate.ae"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm opacity-60 hover:opacity-100 transition-opacity"
          >
            Visit mrgrealestate.ae <FiArrowUpRight />
          </a>
        </div>
      </div>
    </div>
  );
}
