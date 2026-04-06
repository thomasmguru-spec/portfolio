"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Tooltip } from "./Tooltip";

const options = [
  { value: "system", label: "System", icon: Monitor },
  { value: "dark",   label: "Dark",   icon: Moon },
  { value: "light",  label: "Light",  icon: Sun },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 p-1 gap-0.5">
      {options.map(({ value, label, icon: Icon }) => {
        const active = theme === value;
        return (
          <Tooltip key={value} label={label} position="bottom">
            <button
              onClick={() => setTheme(value)}
              className={`flex items-center px-2.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                active
                  ? "bg-white dark:bg-zinc-700 shadow text-zinc-900 dark:text-white"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
              }`}
            >
              <Icon size={14} />
            </button>
          </Tooltip>
        );
      })}
    </div>
  );
}


