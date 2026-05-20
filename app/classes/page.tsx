import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BannerOverlay } from "@/components/BannerOverlay";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { classes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `클래스 안내 | ${site.name}`,
  description:
    "훈련사 자격증반, 어질리티 클럽, IGP 복종훈련 클럽, 직장인반 등 양주독아카데미 운영 클래스를 안내합니다.",
};

export default function ClassesPage() {
  return (
    <>
      <Header />
      <main>
        {/* 페이지 배너 */}
        <section className="relative h-[min(58vh,520px)] min-h-[320px] w-full overflow-hidden sm:min-h-[380px]">
          <Image
            src="/images/classes/banner.png"
            alt="양주독아카데미 야외 훈련장 전경"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <BannerOverlay />
          <div className="relative z-20 mx-auto h-full max-w-6xl px-10 pt-16 sm:px-14 sm:pt-20 md:px-16 md:pt-24">
            <div className="max-w-md text-left text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.6)]">
              <p className="text-xs font-medium tracking-wide text-white/80 sm:text-sm">
                Programs
              </p>
              <h1 className="mt-2 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                클래스 안내
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">
                목적에 맞는 다양한 전문 프로그램을 만나보세요. 반려견의 성격과
                목표에 맞는 클래스를 선택해 보세요.
              </p>
            </div>
          </div>
        </section>

        {/* 빠른 이동 */}
        <section className="border-b border-stone-100 bg-white py-6">
          <div className="mx-auto max-w-6xl px-5">
            <nav
              aria-label="클래스 바로가기"
              className="flex flex-wrap justify-center gap-2 sm:gap-3"
            >
              {classes.map((cls) => (
                <a
                  key={cls.slug}
                  href={`#${cls.slug}`}
                  className="rounded-full border border-stone-200 px-4 py-2 text-xs font-medium text-stone-700 transition-colors hover:border-[#2d5a3d] hover:bg-[#2d5a3d] hover:text-white sm:text-sm"
                >
                  {cls.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* 클래스 상세 */}
        <section className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-5">
            <ul className="space-y-16 sm:space-y-24">
              {classes.map((cls, i) => (
                <li
                  key={cls.slug}
                  id={cls.slug}
                  className="scroll-mt-24"
                >
                  <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                    <div
                      className={`relative aspect-[4/3] overflow-hidden rounded-xl ${i % 2 === 1 ? "lg:order-2" : ""}`}
                    >
                      <Image
                        src={cls.image}
                        alt={cls.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>

                    <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                      <p className="text-sm font-medium text-[#2d5a3d]">
                        Class {String(i + 1).padStart(2, "0")}
                      </p>
                      <h2 className="mt-1 text-xl font-semibold text-[#1a1a1a] sm:text-2xl">
                        {cls.title}
                      </h2>
                      <p className="mt-4 text-sm leading-relaxed text-stone-600">
                        {cls.details}
                      </p>
                      <ul className="mt-6 space-y-2">
                        {cls.highlights.map((item) => (
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
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 하단 CTA */}
        <section className="border-t border-stone-100 bg-[#f8f8f8] py-14">
          <div className="mx-auto max-w-6xl px-5 text-center">
            <h2 className="text-xl font-semibold text-[#1a1a1a]">
              어떤 클래스가 맞을지 고민되시나요?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-stone-600">
              반려견의 나이, 성격, 목표에 맞는 프로그램을 상담해 드립니다.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-[#2d5a3d] px-7 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:w-auto"
              >
                상담 문의하기
              </Link>
              <Link
                href="/"
                className="inline-flex w-full max-w-xs items-center justify-center rounded-full border border-stone-300 px-7 py-3 text-sm font-medium text-stone-700 transition-colors hover:border-stone-400 sm:w-auto"
              >
                홈으로 돌아가기
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
