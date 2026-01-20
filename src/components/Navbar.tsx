"use client";

import { useEffect, useState } from "react";
import { FaReact, FaEthereum } from "react-icons/fa";
import { SiSolidity, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dark, setDark] = useState(true);

  const techs = [
    { name: "React", icon: FaReact, color: "text-cyan-500", anim: "animate-spin-slow" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-neutral-600 dark:text-neutral-200" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-500" },
    { name: "Solidity", icon: SiSolidity, color: "text-purple-500" },
    { name: "Ethers", icon: FaEthereum, color: "text-indigo-500" },
  ];

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setProgress((scrollTop / docHeight) * 100);
      setScrolled(scrollTop > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    dark ? root.classList.add("dark") : root.classList.remove("dark");
  }, [dark]);

  return (
    <>
      {/* Scroll Progress */}
      <div className="fixed  top-0 inset-x-0 h-[3px] z-[60]">
        <div
          className="h-[8px]  bg-gradient-to-r from-indigo-1500 via-purple-500 to-pink-400 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Navbar */}
      <nav
        className={`bg-gradient-to-br from-purple-700/20 via-purple-900/95 to-cyan-500/30 fixed top-0 inset-x-0 z-50 transition-all duration-300
        ${scrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-black/10 dark:border-white/10"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg font-bold tracking-wide text-foreground">
              <span className="text-purple-500">Web3</span>Portfolio
            </h1>

            <button
              onClick={() => setDark(!dark)}
              className="w-9 h-9 flex items-center justify-center rounded-full
              border border-purple-500/30 text-purple-500
              bg-purple-500/10 hover:bg-purple-500/20 transition"
            >
              {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>
          </div>

          <div className="relative w-full overflow-hidden py-4 isolate
            border-y border-black/10 dark:border-white/10
            bg-gradient-to-r from-gray-100 via-white to-gray-100
            dark:from-black dark:via-neutral-900 dark:to-black">

            <div className="flex marquee-track gap-12 px-16 items-center whitespace-nowrap">
              {[...techs, ...techs].map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-sm
                    text-neutral-900 dark:text-neutral-200"
                  >
                    <Icon className={`text-2xl ${tech.color} ${tech.anim ?? ""}`} />
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
