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
  tagline: "전문 애견훈련의 새로운 기준",
  description:
    "양주독아카데미는 다년간의 경험과 전문 자격을 갖춘 훈련사들이 운영하는 애견훈련 전문 기관입니다. 반려견의 기본 복종훈련부터 전문 어질리티, IGP 훈련까지 체계적인 커리큘럼을 제공합니다.",
  instagram: {
    handle: "yangju_dog.academy",
    url: "https://www.instagram.com/yangju_dog.academy/",
  },
  kakao: {
    label: "카카오톡 문의",
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
    /** 광사동 일대 기준 좌표 (네이버 지도 마커) */
    coordinates: { lat: 37.7889, lng: 127.0735 },
  },
  hours: {
    weekday: "평일 09:00 ~ 18:00",
    saturday: "토요일 09:00 ~ 13:00",
    note: "일요일·공휴일 휴무 (변동 시 사전 안내)",
  },
  images: {
    logo: "/images/logo/dog-logo.png",
    favicon: "/images/logo/favicon.jpg",
    directorPhoto: "/images/director/director-photo.jpg",
  },
} as const;

export const navItems = [
  { label: "홈", href: "/" },
  { label: "클래스 안내", href: "/classes" },
  { label: "훈련소 소개", href: "/director" },
  { label: "상담 문의", href: "/contact" },
] as const;

export const academyIntro = {
  overview: {
    title: site.name,
    paragraphs: [
      "양주독아카데미는 전문 애견훈련사가 이끄는 체계적인 훈련 전문 기관입니다. 넓은 야외 훈련장과 전문 장비를 갖추고, 반려견의 성격과 목적에 맞는 맞춤형 프로그램을 운영합니다.",
      "기본 복종훈련부터 어질리티, IGP, 훈련사 자격증반까지 다양한 커리큘럼을 통해 반려견과 보호자가 함께 성장할 수 있는 환경을 제공합니다.",
    ],
  },
  director: {
    sectionTitle: "훈련소장",
    role: "훈련소장",
    headline: "반려견과 보호자 모두를 위한 전문 훈련을 이끕니다",
    intro: [
      "다년간의 현장 경험과 전문 자격을 바탕으로, 반려견의 성격과 목적에 맞는 맞춤형 훈련을 지도하고 있습니다.",
      "기본 복종훈련부터 어질리티, IGP까지 체계적인 커리큘럼으로 반려견과 보호자가 함께 성장할 수 있도록 돕습니다.",
      "훈련이 끝난 뒤에도 가정에서 이어갈 수 있도록 보호자와의 소통을 중요하게 생각합니다.",
    ],
    qualifications: [
      "공인 애견훈련사 자격 보유",
      "어질리티 · IGP 전문 지도 경력",
      "훈련사 자격증반 운영 및 실기 지도",
    ],
    message:
      "모든 반려견은 저마다의 가능성을 가지고 있습니다. 양주독아카데미는 반려견과 보호자가 서로를 이해하고 신뢰하는 관계를 만들어 가는 것을 목표로 합니다.",
  },
} as const;

export const contactFaqs = [
  {
    q: "훈련 가능한 견종에 제한이 있나요?",
    a: "모든 견종이 훈련 가능합니다. 다만 프로그램에 따라 견종별 적합도가 다를 수 있으므로 상담 시 안내해 드립니다.",
  },
  {
    q: "반려견의 나이 제한이 있나요?",
    a: "기본 예방접종이 완료된 생후 4개월 이상부터 참여 가능합니다. 시니어견도 수준에 맞는 프로그램으로 참여하실 수 있습니다.",
  },
  {
    q: "직장인반은 어떤 시간대에 운영되나요?",
    a: "주말반(토·일 오전)과 평일 저녁반으로 운영됩니다. 일정은 변동될 수 있으니 사전에 확인해 주세요.",
  },
  {
    q: "훈련사 자격증반 수료 후 취업이 가능한가요?",
    a: "수료 후 자격증 취득 시 관련 업체 취업 연계를 지원해 드리고 있습니다. 상담 시 자세히 안내해 드립니다.",
  },
] as const;

export const heroSlides = [
  {
    title: "전문 애견훈련의 새로운 기준",
    subtitle: "양주독아카데미에서 반려견과 함께 성장하세요",
    image: "/images/hero/slide-1.png",
    imageAlt: "실내 어질리티 훈련 중인 반려견과 훈련사",
  },
  {
    title: "자격증반부터 어질리티까지",
    subtitle: "체계적인 커리큘럼으로 전문가를 양성합니다",
    image: "/images/hero/slide-2.png",
    imageAlt: "야외 어질리티 장애물을 뛰어넘는 반려견",
  },
  {
    title: "직장인을 위한 주말 특별반 운영",
    subtitle: "바쁜 일상 속에서도 반려견 훈련을 놓치지 마세요",
    image: "/images/hero/slide-3.png",
    imageAlt: "공원에서 훈련사와 함께 훈련하는 독일 셰퍼드",
  },
] as const;

export const stats = [
  { value: "15+", label: "년 훈련 경력" },
  { value: "3,000+", label: "훈련 수료견" },
  { value: "98%", label: "수강생 만족도" },
] as const;

export const classes = [
  {
    slug: "certification",
    title: "훈련사 자격증반",
    description:
      "전문 애견훈련사 자격증 취득을 위한 이론 및 실습 과정을 체계적으로 운영합니다.",
    details:
      "애견훈련사 자격 취득을 목표로 이론 교육과 현장 실습을 병행합니다. 기초 복종부터 문제행동 상담까지 단계별 커리큘럼으로 실전 역량을 키우며, 실기 평가와 자격 연계 프로그램까지 안내해 드립니다.",
    image: "/images/classes/certification.png",
    imageAlt: "훈련사 자격증반 실기 평가 현장",
    highlights: [
      "이론·실습 통합 커리큘럼",
      "실기 평가 대비 훈련",
      "자격 연계 프로그램 안내",
    ],
  },
  {
    slug: "agility",
    title: "어질리티 클럽",
    description:
      "반려견과 함께하는 어질리티 훈련으로 유대감을 높이고 체력을 키워보세요.",
    details:
      "허들, 터널, 위브 폴 등 다양한 장애물을 활용해 반려견의 집중력과 체력을 기릅니다. 초보자도 쉽게 시작할 수 있도록 단계별 지도하며, 보호자와의 협동 훈련으로 유대감을 높입니다.",
    image: "/images/classes/agility.png",
    imageAlt: "어질리티 장애물을 뛰어넘는 보더콜리",
    highlights: [
      "단계별 장애물 훈련",
      "체력·집중력 향상",
      "보호자와의 협동 훈련",
    ],
  },
  {
    slug: "igp",
    title: "IGP 복종훈련 클럽",
    description:
      "IGP 국제 기준에 맞춘 복종, 추적, 방어 훈련을 전문적으로 진행합니다.",
    details:
      "IGP 국제 규격에 맞춘 복종, 추적, 방어 훈련을 체계적으로 진행합니다. 워킹독의 기본기부터 고난도 과제까지 전문 훈련사가 1:1에 가깝게 지도하며, 대회 및 심사 대비 훈련도 지원합니다.",
    image: "/images/classes/igp.png",
    imageAlt: "IGP 방어 훈련 중인 말리노이즈",
    highlights: [
      "IGP 국제 기준 커리큘럼",
      "복종·추적·방어 통합 훈련",
      "대회·심사 대비 지도",
    ],
  },
  {
    slug: "office",
    title: "직장인반",
    description:
      "주말 및 저녁 시간대 운영으로 바쁜 직장인도 참여할 수 있는 맞춤 프로그램입니다.",
    details:
      "주말·저녁 시간대에 운영되는 맞춤 프로그램으로, 바쁜 일상 속에서도 꾸준히 훈련할 수 있습니다. 기본 복종과 매너 교육을 중심으로, 그룹 수업과 이론 병행으로 부담 없이 참여할 수 있습니다.",
    image: "/images/classes/office-worker.png",
    imageAlt: "직장인반 훈련 — 직장인 보호자와 반려견",
    highlights: [
      "주말·저녁 시간 운영",
      "기본 복종·매너 중심",
      "그룹 수업으로 부담 없이 참여",
    ],
  },
] as const;

export const features = [
  {
    icon: "🏆",
    title: "공인 자격 보유",
    description:
      "국내외 공인 애견훈련사 자격증을 보유한 전문 훈련사가 직접 지도합니다.",
  },
  {
    icon: "📋",
    title: "맞춤형 커리큘럼",
    description:
      "반려견의 성격, 나이, 목적에 맞춘 개별 맞춤 훈련 프로그램을 제공합니다.",
  },
  {
    icon: "🤝",
    title: "사후 관리",
    description:
      "훈련 종료 후에도 지속적인 상담과 피드백을 통해 안정적인 관리를 지원합니다.",
  },
] as const;
