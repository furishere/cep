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
    <nav className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur-md  ">
      <div className="mx-auto flex h-[68px] max-w-[960px] items-center justify-between px-6">
        <Link href="/" className="text-xl font-semibold">
          learnbasic
        </Link>

        <button
          className="text-2xl text-foreground sm:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          &#9776;
        </button>

        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 right-0 top-[68px] flex-col items-start gap-4 border-b border-line bg-background px-6 py-4 sm:static sm:flex sm:flex-row sm:items-center sm:gap-6 sm:border-none sm:bg-transparent sm:p-0`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-sm transition-colors hover:text-foreground ${
                pathname === link.href ? "text-foreground" : "text-gray-1"
              }`}
            >
              {link.label}
            </Link>
          ))}
          
        </div>
      </div>
    </nav>
  );
}