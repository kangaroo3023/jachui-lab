import type { Metadata } from "next";
import { CostCalculator } from "@/components/CostCalculator";
import { AdSlot } from "@/components/AdSlot";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "한 달 자취 비용 계산기 — 월세·공과금·식비까지 한 번에",
  description:
    "월세, 전기세, 수도세, 가스비, 통신비, 식비, 생필품까지. 자취생이 한 달에 얼마 쓰는지 실시간으로 계산하고, 연봉 대비 지출 건강도까지 체크하세요.",
  keywords: ["자취 비용 계산기", "한 달 생활비", "자취생 지출", "월세 계산기", "자취 고정비"],
  alternates: { canonical: `${siteConfig.url}/calculator` },
  openGraph: {
    title: "한 달 자취 비용 계산기 | 자취연구소",
    description: "지출 입력만으로 연봉 대비 적정 소비 여부까지 분석.",
    url: `${siteConfig.url}/calculator`,
  },
};

export default function CalculatorPage() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "한 달 자취 비용 계산하는 법",
    description: "자취 고정비와 변동비를 한 번에 계산하고 지출 건강도를 평가하는 방법",
    step: [
      { "@type": "HowToStep", name: "월세·관리비 입력", text: "관리비를 포함한 월 고정 주거비를 입력합니다." },
      { "@type": "HowToStep", name: "공과금 입력", text: "전기·수도·가스비를 한 달 기준으로 입력합니다." },
      { "@type": "HowToStep", name: "변동비 입력", text: "식비·생필품비를 입력해 총 지출을 확인합니다." },
      { "@type": "HowToStep", name: "연봉 입력", text: "세후 연 소득을 넣으면 지출 건강도까지 평가됩니다." },
    ],
  };

  return (
    <div className="space-y-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <header className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">🧮 한 달 자취 비용 계산기</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500 sm:text-base">
          월세·공과금·식비·생필품비를 입력하면 실시간으로 합계와 연봉 대비 적정 지출 비율을 알려드립니다.
        </p>
      </header>
      <AdSlot position="top" />
      <CostCalculator />
      <AdSlot position="bottom" />
    </div>
  );
}
