import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs, programs, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-stone-200/60">
          <div className="absolute inset-0 bg-gradient-to-br from-[#e8f0eb] via-[#faf8f5] to-[#f5efe6]" />
          <div className="relative mx-auto max-w-5xl px-5 py-20 sm:py-28">
            <p className="mb-4 inline-block rounded-full bg-white/80 px-4 py-1.5 text-sm font-medium text-[#5a7d65] shadow-sm">
              양주 반려견 전문학교
            </p>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-[#1e3d2a] sm:text-5xl">
              {site.name}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-600">
              {site.tagline}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-500">
              분리불안, 짖음, 공격성, 배변·산책 문제 등 반려견 맞춤 훈련과
              호텔링·데이케어를 제공합니다. 편하게 문의해 주세요.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90"
              >
                인스타그램 @{site.instagram.handle}
              </a>
              <a
                href={site.kakao.openChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#fee500] px-6 py-3.5 text-sm font-semibold text-[#3c1e1e] shadow-md transition-opacity hover:opacity-90"
              >
                카카오톡 문의
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 py-20">
          <div className="mx-auto max-w-5xl px-5">
            <SectionHeading
              label="소개"
              title="반려견과 보호자 모두를 위한 학교"
              description="각 반려견의 성격에 맞는 맞춤 훈련으로 문제행동을 교정하고, 안전하고 쾌적한 환경에서 돌봄 서비스를 제공합니다."
            />
            <ul className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "맞춤 훈련",
                  text: "1:1 상담 후 입학교육·개인 통학 레슨 커리큘럼",
                },
                {
                  title: "안전한 케어",
                  text: "소형·대형견 분리, 철저한 위생·환기 관리",
                },
                {
                  title: "소통",
                  text: "인스타그램·카카오톡으로 수업·활동 소식 공유",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="font-semibold text-[#1e3d2a]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="programs"
          className="scroll-mt-20 border-y border-stone-200/60 bg-white py-20"
        >
          <div className="mx-auto max-w-5xl px-5">
            <SectionHeading label="프로그램" title="운영 프로그램" />
            <ul className="space-y-6">
              {programs.map((program, i) => (
                <li
                  key={program.title}
                  className="flex gap-5 rounded-2xl border border-stone-100 bg-[#faf8f5] p-6 sm:p-8"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1e3d2a] text-sm font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1e3d2a]">
                      {program.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#5a7d65]">
                      대상: {program.target}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-stone-600">
                      {program.summary}
                    </p>
                    {"pricing" in program && program.pricing && (
                      <p className="mt-2 text-sm font-medium text-[#8b6914]">
                        요금: {program.pricing}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center text-sm text-stone-500">
              모든 프로그램은 예약제로 운영됩니다. 상담 시 문제행동 영상을
              준비해 오시면 더욱 도움이 됩니다.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-5">
            <div className="rounded-3xl bg-[#1e3d2a] px-8 py-12 text-center text-white sm:px-12">
              <h2 className="text-2xl font-bold sm:text-3xl">아이들 소식</h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
                수업 일지와 아이들 사진은 인스타그램에서 가장 빠르게 확인하실
                수 있습니다.
              </p>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#1e3d2a] transition-opacity hover:opacity-90"
              >
                @{site.instagram.handle} 팔로우하기
              </a>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="scroll-mt-20 border-t border-stone-200/60 bg-white py-20"
        >
          <div className="mx-auto max-w-5xl px-5">
            <SectionHeading label="FAQ" title="자주 묻는 질문" />
            <dl className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-stone-100 bg-[#faf8f5] px-6 py-5"
                >
                  <dt className="font-semibold text-[#1e3d2a]">Q. {faq.q}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-stone-600">
                    {faq.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 py-20">
          <div className="mx-auto max-w-5xl px-5">
            <SectionHeading label="문의" title="오시는 길 · 문의" />
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-[#1e3d2a]">주소</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {site.address.road}
                  <br />
                  <span className="text-stone-500">{site.address.jibun}</span>
                </p>
                <a
                  href={site.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-medium text-[#5a7d65] hover:underline"
                >
                  지도 보기 →
                </a>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-[#1e3d2a]">문의하기</h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a
                      href={site.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-stone-700 hover:text-[#1e3d2a]"
                    >
                      인스타그램 DM · @{site.instagram.handle}
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.kakao.openChatUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-stone-700 hover:text-[#1e3d2a]"
                    >
                      {site.kakao.label}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${site.phone.tel}`}
                      className="text-sm font-medium text-stone-700 hover:text-[#1e3d2a]"
                    >
                      전화: {site.phone.display}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
