import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = { title: "Projects" };

const MOCK_PROJECTS = [
  {
    slug: "mock-project-1",
    title: "Agentic Integration Platform",
    desc: "A high-performance pipeline using Next.js, LangGraph, and Rust backend for fast data ingestion.",
    tags: ["Next.js", "LangGraph", "Rust", "TypeScript"],
  },
  {
    slug: "mock-project-2",
    title: "Enterprise Data Intelligence Tool",
    desc: "Designed enterprise-grade Data Intelligence workflows, integrating Databricks Unity Catalog with LLM reasoning loops.",
    tags: ["Databricks", "LLM", "Python"],
  },
  {
    slug: "mock-project-3",
    title: "Distributed Microservices Monitor",
    desc: "Global microservices metadata delivery monitoring built with Node.js and gRPC over edge network.",
    tags: ["Node.js", "gRPC", "Edge"],
  }
];

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <Link href="/" className="inline-flex items-center text-zinc-500 hover:text-blue-500 mb-8 transition-colors">
        <ArrowLeft className="mr-2" size={16} /> Back to Home
      </Link>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-8">All Projects</h1>
      <p className="text-xl text-zinc-500 mb-12">A collection of open-source and professional work emphasizing scalable architecture.</p>

      <div className="grid gap-8">
        {MOCK_PROJECTS.map((project) => (
          <Link key={project.slug} href={`/project/${project.slug}`} className="block group">
            <div className="p-8 border border-zinc-200 dark:border-zinc-800 rounded-3xl group-hover:border-blue-500 group-hover:shadow-lg transition-all duration-300 bg-white dark:bg-black">
              <h2 className="text-2xl font-bold mb-4 group-hover:text-blue-500 transition-colors">{project.title}</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
