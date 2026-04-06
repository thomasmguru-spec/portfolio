import Image from "next/image";
import Link from "next/link";
import { Briefcase, GraduationCap, Code, Globe, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { getBlogPosts } from "@/utils/mdx";
import HeroResumeButton from "@/components/HeroResumeButton";

export default function Home() {
  const blogs = getBlogPosts().slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="about" className="flex flex-col items-center justify-center min-h-[90vh] text-center px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/hero_abstract.png" alt="Hero Background" fill className="object-cover opacity-20 dark:opacity-30" priority />
          <div className="absolute inset-0 bg-white/50 dark:bg-black/50 backdrop-blur-sm" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" />
        </div>
        
        <div className="z-10 max-w-4xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Thomas</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-zinc-700 dark:text-zinc-300 font-medium">
            Senior AI Engineer & Full-Stack Architect
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            I specialize in Agentic RAG, high-performance backends, and building for scale. Past impact at Google, Netflix, Slack, and Cloudflare.
          </p>
          <div className="pt-8 flex items-center justify-center space-x-4">
            <HeroResumeButton />
            <Link href="#contact" className="px-8 py-4 border border-zinc-200 dark:border-zinc-800 font-semibold rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="employment" className="py-24 px-4 md:px-8 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-3 mb-12">
            <Briefcase className="text-blue-500" size={32} />
            <h2 className="text-4xl font-bold">Employment History</h2>
          </div>
          <div className="space-y-12">
            {[
              {
                company: "Hippocratic AI",
                role: "Senior AI Engineer",
                period: "Jan 2025 – Present",
                desc: "Architected safety-focused multi-agent systems using LangGraph for stateful reasoning and Crawl4AI. Developed serverless FastAPI backends managed with uv and deployed via Mangum on AWS Lambda."
              },
              {
                company: "Databricks",
                role: "AI Solutions Architect",
                period: "Aug 2024 – Dec 2024",
                desc: "Designed enterprise-grade Data Intelligence workflows, integrating Databricks Unity Catalog with LLM reasoning loops. Managed a Turborepo monorepo using pnpm workspaces."
              },
              {
                company: "Netflix",
                role: "Senior Full-Stack Engineer",
                period: "Jan 2023 – Jul 2024",
                desc: "Optimized high-traffic UI performance using Next.js App Router and React Server Components. Maintained IaC using Terraform for AWS ECS clusters with automated blue-green deployments."
              },
            ].map((exp, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-8 hover:bg-white dark:hover:bg-zinc-900 p-6 rounded-2xl transition shadow-sm border border-transparent dark:border-zinc-800">
                <div className="md:w-1/3 flex-shrink-0">
                  <h3 className="text-xl font-bold">{exp.company}</h3>
                  <p className="text-blue-500 font-medium">{exp.role}</p>
                  <p className="text-sm text-zinc-500">{exp.period}</p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-3 mb-12">
            <GraduationCap className="text-purple-500" size={32} />
            <h2 className="text-4xl font-bold">Education History</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-100 dark:border-zinc-800">
              <h3 className="text-2xl font-bold mb-2">Stanford University</h3>
              <p className="text-zinc-500 mb-4">Sep 2020 – Jun 2023</p>
              <h4 className="text-xl font-medium text-blue-500">M.S. in Computer Science</h4>
              <p className="text-zinc-700 dark:text-zinc-400 mt-4 leading-relaxed">
                Specialization: Distributed Systems & Artificial Intelligence.
              </p>
            </div>
            <div className="p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-100 dark:border-zinc-800">
              <h3 className="text-2xl font-bold mb-2">MIT</h3>
              <p className="text-zinc-500 mb-4">Sep 2013 – May 2017</p>
              <h4 className="text-xl font-medium text-purple-500">B.S. in Software Engineering</h4>
              <p className="text-zinc-700 dark:text-zinc-400 mt-4 leading-relaxed">
                Foundation in algorithms, data structures, and core software engineering principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2-Column Section: Projects & Blogs */}
      <section className="py-24 px-4 md:px-8 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Projects Column */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <Code className="text-blue-500" size={28} />
                  <h2 className="text-3xl font-bold">Featured Projects</h2>
                </div>
                <Link href="/projects" className="text-blue-500 hover:text-blue-600 font-medium">View All &rarr;</Link>
              </div>
              <div className="space-y-6">
                {[1, 2].map((i) => (
                  <Link key={i} href={`/project/mock-project-${i}`} className="block group">
                    <div className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden group-hover:border-blue-500 transition-colors shadow-sm">
                      <div className="relative h-48 w-full border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
                         <Image src="/project_thumbnail.png" alt="Project Thumbnail Mockup" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold group-hover:text-blue-500 transition-colors">Agentic Integration Platform</h3>
                        <p className="text-zinc-500 mt-2 line-clamp-2">A high-performance pipeline using Next.js, LangGraph, and Rust backend for fast data ingestion.</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Blogs Column */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">B</span>
                  </div>
                  <h2 className="text-3xl font-bold">Latest Writing</h2>
                </div>
                <Link href="/blogs" className="text-blue-500 hover:text-blue-600 font-medium">Read All &rarr;</Link>
              </div>
              <div className="space-y-6">
                {blogs.map((blog) => (
                  <Link key={blog.slug} href={`/blog/${blog.slug}`} className="block group">
                    <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6 group-hover:pl-4 transition-all">
                      <p className="text-sm text-zinc-500 mb-2">{blog.date}</p>
                      <h3 className="text-lg font-bold group-hover:text-purple-500 transition-colors">{blog.title}</h3>
                      <p className="text-zinc-700 dark:text-zinc-400 mt-2 line-clamp-2">{blog.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Let's Work Together</h2>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <a href="mailto:thomasm.guru@gmail.com" className="px-6 py-3 bg-zinc-100 dark:bg-zinc-900 rounded-full font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 transition flex items-center">
              <Mail size={18} className="mr-2" /> Email Me
            </a>
            <a href="https://github.com/thomasmguru-spec" target="_blank" rel="noreferrer" className="px-6 py-3 bg-zinc-100 dark:bg-zinc-900 rounded-full font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 transition flex items-center">
              <FaGithub size={18} className="mr-2" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/thomas-mckinney-837a183b5/" target="_blank" rel="noreferrer" className="px-6 py-3 bg-zinc-100 dark:bg-zinc-900 rounded-full font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 transition flex items-center">
              <FaLinkedin size={18} className="mr-2" /> LinkedIn
            </a>
            <a href="https://thomas-mckinney-portfolio.vercel.app/" target="_blank" rel="noreferrer" className="px-6 py-3 bg-zinc-100 dark:bg-zinc-900 rounded-full font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 transition flex items-center">
              <Globe size={18} className="mr-2" /> Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
