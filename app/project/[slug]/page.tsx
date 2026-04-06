import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPost } from "@/utils/mdx";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return { title: `Project: ${resolvedParams.slug}` };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getBlogPost(resolvedParams.slug);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <Link href="/projects" className="inline-flex items-center text-zinc-500 hover:text-blue-500 mb-12 transition-colors">
        <ArrowLeft className="mr-2" size={16} /> Back to Projects
      </Link>
      
      <div className="space-y-6 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Project: {resolvedParams.slug}</h1>
        <div className="flex flex-wrap gap-4 items-center">
          <span className="px-4 py-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium rounded-full text-sm">Active</span>
          <span className="text-zinc-500">2026</span>
        </div>
      </div>

      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
          This is a detailed view of the project. It outlines the problem, the architecture, the tools used, and the impact the project had on overall system performance and business metrics. 
        </p>
        
        <div className="flex flex-wrap gap-4 mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-12">
          <a href="#" className="flex items-center px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-xl font-semibold hover:-translate-y-1 transition-transform">
            <ExternalLink className="mr-2" size={20} /> Live Demo
          </a>
          <a href="#" className="flex items-center px-6 py-3 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
            <FaGithub size={20} className="mr-2" /> Source Code
          </a>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">Architecture Overview</h2>
        <p className="mb-6 leading-relaxed">
          The project leverages Next.js for the frontend, combining React Server Components and App Router to achieve blazing-fast load times. The backend is orchestrated via FastAPI on AWS Lambda, achieving a minimal cold start.
        </p>
        <div className="aspect-video bg-zinc-100 dark:bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-200 dark:border-zinc-800 mb-12 shadow-inner">
          <span className="text-zinc-400 font-medium">Architecture Diagram Placeholder</span>
        </div>
      </div>
    </div>
  );
}
