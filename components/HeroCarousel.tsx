"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { heroSlides } from "@/lib/site";

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((i: number) => {
    setIndex((i + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => goTo(index + 1), 5000);
    return () => clearInterval(timer);
  }, [index, goTo]);

  const slide = heroSlides[index];

  return (
    <section
      id="home"
      className="relative h-[calc(100svh-4rem)] w-full overflow-hidden"
    >
      {heroSlides.map((s, i) => (
        <Image
          key={s.image}
          src={s.image}
          alt={s.imageAlt}
          fill
          sizes="100vw"
          priority={i === 0}
          className={`object-cover transition-opacity duration-[1500ms] ease-in-out ${
            i === index ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/15 to-transparent" />
      <div className="relative z-10 mx-auto h-full max-w-6xl px-10 pt-20 sm:px-14 sm:pt-24 md:px-16 md:pt-28 lg:px-20 lg:pt-32">
        <div
          key={index}
          className="hero-text-fade max-w-sm text-left text-white sm:max-w-md"
        >
          <h1 className="text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
            {slide.title}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">
            {slide.subtitle}
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`슬라이드 ${i + 1}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      <button
        type="button"
        aria-label="이전 슬라이드"
        onClick={() => goTo(index - 1)}
        className="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M15 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        type="button"
        aria-label="다음 슬라이드"
        onClick={() => goTo(index + 1)}
        className="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M9 18l6-6-6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
