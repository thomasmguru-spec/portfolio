"use client";

import { createContext, useContext, useState } from "react";
import { X, Download } from "lucide-react";

type ResumeContextType = {
  isOpen: boolean;
  setOpen: (v: boolean) => void;
};

const ResumeContext = createContext<ResumeContextType>({ isOpen: false, setOpen: () => {} });

export const ResumeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <ResumeContext.Provider value={{ isOpen, setOpen }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-zinc-950 w-full max-w-5xl h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800">
              <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Thomas McKinney - Resume</h2>
              <div className="flex items-center space-x-2">
                <a href="/resume.pdf" download className="p-2 text-zinc-500 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-zinc-900 rounded-lg transition-colors" aria-label="Download">
                  <Download size={20} />
                </a>
                <button onClick={() => setOpen(false)} className="p-2 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors" aria-label="Close">
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="flex-1 w-full bg-zinc-100 dark:bg-zinc-900">
              <iframe 
                src="/resume.pdf" 
                className="w-full h-full bg-white"
                title="Resume"
              />
            </div>
          </div>
        </div>
      )}
    </ResumeContext.Provider>
  );
};

export const useResume = () => useContext(ResumeContext);
