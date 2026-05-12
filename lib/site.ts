export const siteConfig = {
  name: "자취연구소",
  nameEn: "Single-Lab",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://out-eight-beta.vercel.app",
  description:
    "자취 비용 계산기, 자취방 체크리스트, 자취 꿀템 리뷰까지. 자취생의 모든 고민을 한 번에 해결하는 자취 전문 정보 사이트 자취연구소.",
  keywords: [
    "자취",
    "자취생",
    "원룸",
    "1인가구",
    "자취 비용 계산기",
    "자취방 구하기",
    "자취 꿀팁",
    "자취템",
    "공과금 아끼는 법",
    "다이소 자취템",
    "청소 주기",
    "분리배출",
  ],
  author: "자취연구소",
  ogImage: "/og-image.png",
  locale: "ko_KR",
  nav: [
    { href: "/", label: "홈" },
    { href: "/calculator", label: "비용 계산기" },
    { href: "/checklist", label: "자취방 체크리스트" },
    { href: "/cleaning", label: "청소 주기" },
    { href: "/products", label: "자취 꿀템" },
    { href: "/posts", label: "자취 꿀팁" },
  ],
};

export type SiteConfig = typeof siteConfig;
