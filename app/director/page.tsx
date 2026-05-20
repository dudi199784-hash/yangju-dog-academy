import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BannerOverlay } from "@/components/BannerOverlay";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { academyIntro, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `훈련소 소개 | ${site.name}`,
  description: `${site.name} 훈련소와 훈련소장을 소개합니다. 전문 시설과 맞춤형 훈련 프로그램을 안내합니다.`,
};

export default function DirectorPage() {
  const { overview, director } = academyIntro;

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[min(42vh,400px)] min-h-[280px] w-full overflow-hidden">
          <Image
            src="/images/classes/banner.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <BannerOverlay />
          <div className="relative z-20 mx-auto flex h-full max-w-6xl items-end px-10 pb-12 sm:px-14">
            <div className="text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.6)]">
              <p className="text-xs font-medium tracking-wide text-white/85 sm:text-sm">
                About
              </p>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                훈련소 소개
              </h1>
              <p className="mt-2 text-sm text-white sm:text-base">
                {site.name}의 시설과 훈련 철학을 소개합니다
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-stone-100 bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-xl font-semibold text-[#1a1a1a]">{overview.title}</h2>
            <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <Image
                  src="/images/about/yda-team-banner.png"
                  alt="양주독아카데미 단체 사진"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="space-y-4">
                {overview.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-relaxed text-stone-600 sm:text-[15px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f8f8] py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-sm font-medium text-[#2d5a3d]">{director.sectionTitle}</p>
            <h2 className="mt-1 text-xl font-semibold text-[#1a1a1a] sm:text-2xl">
              {director.role}
            </h2>

            <div className="mt-10 grid items-start gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-xl lg:mx-0">
                <Image
                  src={site.images.directorPhoto}
                  alt="훈련소장"
                  fill
                  sizes="280px"
                  className="object-cover object-center"
                />
              </div>

              <div>
                <p className="text-base font-medium text-stone-700">{director.headline}</p>

                <div className="mt-6 space-y-4">
                  {director.intro.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-relaxed text-stone-600 sm:text-[15px]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-10">
                  <h3 className="text-sm font-semibold text-[#1a1a1a]">주요 경력 · 자격</h3>
                  <ul className="mt-4 space-y-2">
                    {director.qualifications.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-stone-700"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2d5a3d]"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <blockquote className="mt-10 rounded-xl border border-stone-100 bg-white px-6 py-5">
                  <p className="text-sm leading-relaxed text-stone-600 italic">
                    &ldquo;{director.message}&rdquo;
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#2d5a3d] px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                상담 문의하기
              </Link>
              <Link
                href="/classes"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:border-stone-400"
              >
                클래스 안내 보기
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
