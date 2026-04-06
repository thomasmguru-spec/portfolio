"use client";

import { ArrowRight } from "lucide-react";
import { useResume } from "./ResumeModal";

export default function HeroResumeButton() {
  const { setOpen } = useResume();
  return (
    <button
      onClick={() => setOpen(true)}
      className="px-8 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black font-semibold rounded-full hover:scale-105 transition-transform flex items-center cursor-pointer"
    >
      Explore Resume <ArrowRight className="ml-2" size={20} />
    </button>
  );
}
