import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getBlogPosts } from "@/utils/mdx";

export const metadata = { title: "Blog" };

export default function BlogsPage() {
  const blogs = getBlogPosts();
  
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <Link href="/" className="inline-flex items-center text-zinc-500 hover:text-purple-500 mb-8 transition-colors">
        <ArrowLeft className="mr-2" size={16} /> Back to Home
      </Link>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Writings & Thoughts</h1>
      <p className="text-xl text-zinc-500 mb-12">Deep technical dives, architectural thoughts, and engineering philosophies.</p>

      <div className="space-y-12">
        {blogs.length === 0 ? (
          <p className="text-zinc-500 italic">No blogs currently available. MDX parsing works!</p>
        ) : (
          blogs.map((blog) => (
            <div key={blog.slug} className="border-b border-zinc-200 dark:border-zinc-800 pb-12">
              <span className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-2 block">{blog.date}</span>
              <Link href={`/blog/${blog.slug}`} className="block group">
                <h2 className="text-3xl font-bold mb-4 group-hover:text-purple-500 transition-colors">{blog.title}</h2>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-6">{blog.excerpt}</p>
                <span className="text-purple-500 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                  Read Article &rarr;
                </span>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
