"use client";

import { Send, Mail, Globe } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { toast } from "sonner";

import { Tooltip } from "@/components/Tooltip";

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
              <Tooltip label="Email Me" position="top">
                <a href="mailto:thomasm.guru@gmail.com" className="text-zinc-500 hover:text-blue-500 transition block">
                  <Mail size={20} />
                </a>
              </Tooltip>
              <Tooltip label="GitHub" position="top">
                <a href="https://github.com/thomasmguru-spec" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-blue-500 transition block">
                  <FaGithub size={20} />
                </a>
              </Tooltip>
              <Tooltip label="LinkedIn" position="top">
                <a href="https://www.linkedin.com/in/thomas-mckinney-837a183b5/" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-blue-500 transition block">
                  <FaLinkedin size={20} />
                </a>
              </Tooltip>
              <Tooltip label="Portfolio" position="top">
                <a href="https://thomas-mckinney-portfolio.vercel.app/" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-blue-500 transition block">
                  <Globe size={20} />
                </a>
              </Tooltip>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Get In Touch</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">Have a question or want to work together?</p>
            <form onSubmit={handleSend} className="flex flex-col space-y-4">
              <div className="flex space-x-3 w-full">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-1/2 bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-1/2 bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center space-x-3 w-full">
                <textarea
                  placeholder="Message"
                  required
                  rows={8}
                  className="flex-1 bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 flex-shrink-0 transition-transform active:scale-95 flex items-center justify-center h-12 w-12"
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </div>
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
