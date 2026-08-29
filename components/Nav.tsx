"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/website-learning", label: "Website Learning" },
  { href: "/problem-set", label: "Problem Set" },
  { href: "/hackathon", label: "Hackathon" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-[960px] items-center justify-between gap-4 px-6">
        {/* Logo + wordmark */}
        <Link href="/" className="group flex shrink-0 items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-sm transition-transform duration-300 ease-out group-hover:-rotate-6">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="8 6 2 12 8 18" />
              <polyline points="16 6 22 12 16 18" />
            </svg>
          </span>
          <span className="text-xl font-bold tracking-tight">
            <span className="text-foreground">learn</span>
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              basic
            </span>
          </span>
        </Link>

        {/* Mobile toggle */}
        <button
          className="text-2xl text-foreground sm:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          &#9776;
        </button>

        {/* Nav links */}
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 right-0 top-[68px] flex-col items-start gap-4 border-b border-line bg-background px-6 py-4 sm:static sm:ml-auto sm:flex sm:flex-row sm:items-center sm:gap-8 sm:border-none sm:bg-transparent sm:p-0`}
        >
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group relative text-sm font-medium text-gray-1 transition-colors duration-200 hover:text-foreground"
              >
                <span className={active ? "text-foreground" : ""}>
                  {link.label}
                </span>
                <span
                  className={`absolute -bottom-1.5 left-0 h-[2px] rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 transition-all duration-300 ease-out ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

          {/* Start Learning CTA — right end, after Hackathon */}
          <Link
            href="/website-learning"
            onClick={() => setOpen(false)}
            className="group mt-1 flex items-center gap-1.5 rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-all duration-300 hover:gap-2.5 hover:opacity-90 sm:mt-0"
          >
            Start Learning
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}