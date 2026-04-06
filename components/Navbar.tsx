"use client";

import Link from 'next/link';
import { ThemeToggle } from "./ThemeToggle";
import { useResume } from "./ResumeModal";

export default function Navbar() {
  const { setOpen } = useResume();
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Thomas McKinney
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link href="/#about" className="hover:text-blue-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">About Me</Link>
              <Link href="/#employment" className="hover:text-blue-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">Experience</Link>
              <Link href="/#education" className="hover:text-blue-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">Education</Link>
              <Link href="/projects" className="hover:text-blue-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
              <Link href="/blogs" className="hover:text-blue-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">Blogs</Link>
              <Link href="/#contact" className="hover:text-blue-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
            <button onClick={() => setOpen(true)} className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition cursor-pointer">
              Resume
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
