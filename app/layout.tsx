import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { getSiteUrl, site } from "@/lib/site";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: `${site.name} | 반려견 훈련·호텔링`,
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    locale: "ko_KR",
    siteName: site.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} h-full`}>
      <body className="min-h-full font-sans antialiased">{children}</body>
    </html>
  );
}
