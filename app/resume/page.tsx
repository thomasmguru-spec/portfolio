import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center text-zinc-500 hover:text-blue-500 transition-colors">
          <ArrowLeft className="mr-2" size={16} /> Back to Home
        </Link>
        <a href="/resume.pdf" download className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          <Download className="mr-2" size={16} /> Download PDF
        </a>
      </div>
      
      <div className="flex-1 w-full bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
        <iframe 
          src="/resume.pdf" 
          className="w-full h-full min-h-[85vh] bg-white"
          title="Thomas McKinney Resume"
        >
          <div className="flex flex-col items-center justify-center h-full space-y-4 p-8 text-center bg-white dark:bg-zinc-950 w-full">
            <h2 className="text-xl font-bold">PDF Viewer Not Supported</h2>
            <p className="text-zinc-500">Your browser does not support inline PDF viewing.</p>
            <a href="/resume.pdf" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Download Instead
            </a>
          </div>
        </iframe>
      </div>
    </div>
  );
}
