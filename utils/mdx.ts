import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content/blogs");

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(contentDirectory)) return [];
  
  const files = fs.readdirSync(contentDirectory);
  
  const posts = files
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      
      const { data, content } = matter(fileContents);
      
      return {
        slug,
        title: data.title || slug,
        date: data.date || "Unknown Date",
        excerpt: data.excerpt || "",
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
  return posts;
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPathMdx = path.join(contentDirectory, `${slug}.mdx`);
    const fullPathMd = path.join(contentDirectory, `${slug}.md`);
    
    const targetPath = fs.existsSync(fullPathMdx) ? fullPathMdx : (fs.existsSync(fullPathMd) ? fullPathMd : null);
    
    if (!targetPath) return null;

    const fileContents = fs.readFileSync(targetPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      date: data.date || "Unknown Date",
      excerpt: data.excerpt || "",
      content,
    };
  } catch (e) {
    return null;
  }
}
