"use client";

import { Send, Mail, Globe } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { toast } from "sonner";

export default function Footer() {
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
  };

  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Thomas McKinney</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
              Senior AI Engineer | Ex-Google | Full-Stack Architect
            </p>
            <div className="flex space-x-4">
              <a href="mailto:thomasm.guru@gmail.com" className="text-zinc-500 hover:text-blue-500 transition">
                <Mail size={20} />
              </a>
              <a href="https://github.com/thomasmguru-spec" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-blue-500 transition">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/thomas-mckinney-837a183b5/" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-blue-500 transition">
                <FaLinkedin size={20} />
              </a>
              <a href="https://thomas-mckinney-portfolio.vercel.app/" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-blue-500 transition">
                <Globe size={20} />
              </a>
            </div>
          </div>
          <div>
            <form onSubmit={handleSend} className="flex items-end space-x-2">
              <div className="flex-1 space-y-3">
                <input
                  type="text"
                  placeholder="Your Name, Please"
                  required
                  className="w-full bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your mail, Please"
                  required
                  className="w-full bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Message"
                  required
                  rows={2}
                  className="w-full bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 flex-shrink-0 transition-transform active:scale-95 flex items-center justify-center h-12 w-12"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-zinc-500">&copy; Thomas McKinney 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
