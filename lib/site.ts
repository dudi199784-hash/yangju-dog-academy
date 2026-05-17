/**
 * 사이트 절대 URL (sitemap, robots, OG 등)
 * 1순위: NEXT_PUBLIC_SITE_URL (커스텀 도메인)
 * 2순위: Vercel 프로덕션 도메인
 * 3순위: Vercel 프리뷰/배포 URL
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv) return fromEnv.replace(/\/$/, "");

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (production) return `https://${production.replace(/\/$/, "")}`;

  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel.replace(/\/$/, "")}`;

  return "http://localhost:3000";
}

export const site = {
  name: "양주독아카데미",
  tagline: "반려견 문제행동 교정 · 사회성 발달 전문학교",
  description:
    "양주독아카데미는 분리불안, 짖음, 공격성, 배변, 산책 문제 등 반려견 맞춤 훈련과 호텔링·데이케어를 제공합니다.",
  instagram: {
    handle: "yangju_dog.academy",
    url: "https://www.instagram.com/yangju_dog.academy/",
  },
  kakao: {
    label: "카카오톡 문의",
    // 오픈채팅 URL — 의뢰인에게 받은 뒤 아래 값만 교체하세요
    openChatUrl: "https://open.kakao.com/o/",
  },
  phone: {
    display: "0507-1477-6250",
    tel: "050714776250",
  },
  address: {
    road: "경기 양주시 부흥로1907번길 135-57",
    jibun: "지번 광사동 268-1",
    full: "경기 양주시 부흥로1907번길 135-57 (지번 광사동 268-1)",
    mapUrl:
      "https://map.naver.com/v5/search/%EC%96%91%EC%A3%BC%EB%8F%85%EC%95%84%EC%B9%B4%EB%8D%B0%EB%AF%B8",
  },
} as const;

export const navItems = [
  { label: "소개", href: "#about" },
  { label: "프로그램", href: "#programs" },
  { label: "자주 묻는 질문", href: "#faq" },
  { label: "문의", href: "#contact" },
] as const;

export const programs = [
  {
    title: "문제행동 교정훈련",
    target: "분리불안, 배변, 공격성, 산책 줄당김, 짖음 등",
    summary:
      "1:1 맞춤 상담 후 입학교육·개인 통학 레슨으로 기본 예절과 사회화를 진행합니다. 주 1회 보호자 수업으로 교육 효과를 높입니다.",
  },
  {
    title: "퍼피훈련",
    target: "1살 미만 강아지",
    summary:
      "문제행동이 습관화되기 전 기본 명령과 사회화 교육으로 건강한 성장을 돕습니다.",
  },
  {
    title: "호텔링 · 데이케어",
    target: "일시 돌봄이 필요한 경우",
    summary:
      "전문 훈련사가 산책·식사·건강·위생을 관리하며, 활동 기록을 보호자에게 전달합니다.",
  },
  {
    title: "어질리티 클럽",
    target: "어질리티·운동 능력 향상을 원하는 반려견",
    summary:
      "그룹 클럽 수업으로 즐겁게 운동 능력을 기릅니다. 수업료는 변동가격(업주 문의)으로 상담 후 안내드립니다.",
    pricing: "변동가격 · 업주 문의",
  },
  {
    title: "복종훈련 클럽",
    target: "기본 복종·매너 훈련이 필요한 반려견",
    summary:
      "복종 훈련 중심의 클럽 수업입니다. 수업료는 변동가격(업주 문의)으로 상담 후 안내드립니다.",
    pricing: "변동가격 · 업주 문의",
  },
] as const;

export const faqs = [
  {
    q: "입학교육과 개인레슨, 유치원의 차이는?",
    a: "입학교육은 학교에서 24시간 생활하며 훈련하는 프로그램입니다. 개인레슨은 통학하며 1:1로 수업하는 방식이고, 유치원·호텔은 교육 없이 돌봄 중심입니다.",
  },
  {
    q: "문제행동 교육은 보통 얼마나 하나요?",
    a: "아이 성향·나이·문제에 따라 다르지만, 평균 3개월 내외입니다. 1개월 단위로 상담 후 연장·졸업을 결정합니다.",
  },
  {
    q: "상담 시 준비할 것이 있나요?",
    a: "문제행동 영상을 준비해 오시면 더 정확한 상담이 가능합니다. 모든 프로그램은 예약제로 운영됩니다.",
  },
] as const;
