import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { ContactPanel } from "@/components/ContactPanel";
import { contactFaqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `상담 문의 | ${site.name}`,
  description:
    "양주독아카데미 상담 문의 — 전화, 인스타그램, 카카오톡 및 오시는 길 안내.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b border-stone-100 bg-[#f8f8f8] py-12 sm:py-14">
          <div className="mx-auto max-w-6xl px-5 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-[#1a1a1a] sm:text-3xl">
              상담 문의
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-stone-600">
              {site.name}에 대해 궁금한 점이 있으시면 편하게 연락해 주세요.
            </p>
          </div>
        </section>

        <section className="bg-white py-10 sm:py-14">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-stone-100 bg-[#fafafa] p-5">
                <p className="text-xs font-medium text-[#2d5a3d]">전화 상담</p>
                <a
                  href={`tel:${site.phone.tel}`}
                  className="mt-2 block text-base font-semibold text-[#1a1a1a] hover:text-[#2d5a3d]"
                >
                  {site.phone.display}
                </a>
                <p className="mt-2 text-xs leading-relaxed text-stone-500">
                  {site.hours.weekday}
                  <br />
                  {site.hours.saturday}
                </p>
              </div>
              <div className="rounded-xl border border-stone-100 bg-[#fafafa] p-5">
                <p className="text-xs font-medium text-[#2d5a3d]">방문 상담</p>
                <p className="mt-2 text-sm font-medium text-[#1a1a1a]">
                  {site.address.road}
                </p>
                <p className="mt-1 text-xs text-stone-500">
                  사전 예약 후 방문 · 주차 가능
                </p>
              </div>
              <div className="rounded-xl border border-stone-100 bg-[#fafafa] p-5">
                <p className="text-xs font-medium text-[#2d5a3d]">SNS 문의</p>
                <p className="mt-2 text-sm text-stone-600">
                  인스타그램 DM · 카카오톡으로도 문의 가능합니다.
                </p>
              </div>
            </div>

            <ContactPanel />
          </div>
        </section>

        <section className="border-t border-stone-100 bg-[#f8f8f8] py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-center text-xl font-semibold text-[#1a1a1a]">
              자주 묻는 질문
            </h2>
            <dl className="mx-auto mt-8 max-w-3xl space-y-3">
              {contactFaqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-xl border border-stone-100 bg-white px-5 py-4 shadow-sm"
                >
                  <dt className="text-sm font-semibold text-[#1a1a1a]">
                    Q. {faq.q}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-stone-600">
                    {faq.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
