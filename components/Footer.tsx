import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#1a1a1a] py-10 text-white">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-base font-semibold">{site.name}</p>
            <p className="mt-2 max-w-xs text-xs leading-relaxed text-white/55">
              전문 애견훈련사가 이끄는 체계적인 훈련 프로그램
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
            <Link href="/" className="hover:text-white">
              홈
            </Link>
            <Link href="/classes" className="hover:text-white">
              클래스 안내
            </Link>
            <Link href="/contact" className="hover:text-white">
              상담 문의
            </Link>
          </nav>
        </div>

        <p className="mt-6 text-xs text-white/45">{site.address.full}</p>

        <div className="mt-6 flex flex-wrap gap-4 border-t border-white/10 pt-6 text-xs text-white/40">
          <a href="#" className="hover:text-white/70">
            이용약관
          </a>
          <a href="#" className="hover:text-white/70">
            개인정보처리방침
          </a>
        </div>

        <p className="mt-4 text-xs text-white/35">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
