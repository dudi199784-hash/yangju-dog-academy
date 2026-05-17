"use client";

import { useState } from "react";
import { navItems, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#faf8f5]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <a href="#" className="text-lg font-bold tracking-tight text-[#1e3d2a]">
          {site.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-[#1e3d2a]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#1e3d2a] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            인스타그램
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-stone-700 md:hidden"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">메뉴</span>
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="border-t border-stone-200 bg-[#faf8f5] px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-100"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block rounded-lg bg-[#1e3d2a] px-3 py-2.5 text-center text-sm font-medium text-white"
                onClick={() => setOpen(false)}
              >
                인스타그램 @{site.instagram.handle}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
