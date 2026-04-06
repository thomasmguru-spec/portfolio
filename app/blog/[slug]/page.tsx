import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPost } from "@/utils/mdx";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getBlogPost(resolvedParams.slug);
  return { title: post?.title || "Blog Post" };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getBlogPost(resolvedParams.slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <Link href="/blogs" className="text-purple-500 hover:underline">Return to blogs</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <Link href="/blogs" className="inline-flex items-center text-zinc-500 hover:text-purple-500 mb-12 transition-colors">
        <ArrowLeft className="mr-2" size={16} /> Back to Blogs
      </Link>
      
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{post.title}</h1>
        <div className="flex items-center text-zinc-500 space-x-4">
          <span>{post.date}</span>
        </div>
      </header>

      <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none text-zinc-800 dark:text-zinc-300 leading-relaxed space-y-6">
        <MDXRemote source={post.content} />
      </div>
    </div>
  );
}
