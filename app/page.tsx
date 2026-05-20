import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ClassCard } from "@/components/ClassCard";
import { ContactPanel } from "@/components/ContactPanel";
import { classes, features, site, stats } from "@/lib/site";

function SectionTitle({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-xl font-semibold tracking-tight text-[#1a1a1a] sm:text-2xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-stone-600">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />

        {/* 소개 */}
        <section id="about" className="scroll-mt-20 bg-white py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle
              title="양주독아카데미 소개"
              description="전문 애견훈련사가 이끄는 체계적인 훈련 프로그램"
            />

            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/about/team-group.png"
                  alt="양주독아카데미 · 아우펠트 어질리티 클럽 단체 사진"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#1a1a1a]">
                  신뢰할 수 있는 전문 훈련소
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  양주독아카데미는 다년간의 경험과 전문 자격을 갖춘 훈련사들이
                  운영하는 애견훈련 전문 기관입니다. 반려견의 기본 복종훈련부터
                  전문 어질리티, IGP 훈련까지 체계적인 커리큘럼을 제공합니다.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  각 반려견의 성격과 특성을 파악하여 맞춤형 훈련 프로그램을
                  설계하며, 보호자와의 소통을 통해 가정에서도 지속 가능한 훈련
                  방법을 안내해 드립니다.
                </p>

                <ul className="mt-10 grid grid-cols-3 gap-4 border-t border-stone-100 pt-10">
                  {stats.map((stat) => (
                    <li key={stat.label} className="text-center">
                      <p className="text-xl font-semibold text-[#2d5a3d] sm:text-2xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs text-stone-500">
                        {stat.label}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 운영 클래스 */}
        <section
          id="classes"
          className="scroll-mt-20 border-y border-stone-100 bg-[#f8f8f8] py-16"
        >
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle
              title="운영 클래스"
              description="목적에 맞는 다양한 전문 프로그램을 만나보세요"
            />

            <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {classes.map((cls) => (
                <li key={cls.slug}>
                  <ClassCard cls={cls} compact />
                </li>
              ))}
            </ul>

            <div className="mt-8 text-center">
              <Link
                href="/classes"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#2d5a3d] px-7 py-2.5 text-sm font-medium text-[#2d5a3d] transition-colors hover:bg-[#2d5a3d] hover:text-white"
              >
                클래스 자세히 보기
              </Link>
            </div>
          </div>
        </section>

        {/* 왜 양주독아카데미인가 */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle title="왜 양주독아카데미인가?" description="전문성과 신뢰를 바탕으로 한 차별화된 훈련" />

            <ul className="grid gap-8 md:grid-cols-3">
              {features.map((feature) => (
                <li
                  key={feature.title}
                  className="rounded-xl border border-stone-100 bg-[#fafafa] p-8 text-center"
                >
                  <span className="text-3xl" role="img" aria-hidden>
                    {feature.icon}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-[#1a1a1a]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-[#2d5a3d] px-7 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:w-auto"
              >
                상담 문의하기
              </Link>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-xs items-center justify-center rounded-full border border-stone-300 px-7 py-3 text-sm font-medium text-stone-700 transition-colors hover:border-stone-400 sm:w-auto"
              >
                SNS 바로가기
              </a>
            </div>
          </div>
        </section>

        {/* 상담 문의 */}
        <section id="contact" className="scroll-mt-20 bg-[#f8f8f8] py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle
              title="상담 문의"
              description="궁금한 점이 있으시면 편하게 연락해 주세요"
            />
            <ContactPanel />
            <p className="mt-6 text-center">
              <Link
                href="/contact"
                className="text-sm font-medium text-[#2d5a3d] hover:underline"
              >
                자주 묻는 질문 보기 →
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
