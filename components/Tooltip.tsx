"use client";

import { ReactNode } from "react";

type TooltipProps = {
  label: string;
  position?: "top" | "bottom";
  children: ReactNode;
};

export function Tooltip({ label, position = "bottom", children }: TooltipProps) {
  const isBottom = position === "bottom";
  return (
    <div className="group relative inline-flex items-center justify-center">
      {children}
      <span
        className={`absolute ${
          isBottom ? "top-full mt-1" : "bottom-full mb-1"
        } left-1/2 -translate-x-1/2 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-900 text-xs px-2 py-1 rounded shadow-md pointer-events-none whitespace-nowrap z-50`}
      >
        {label}
      </span>
    </div>
  );
}
