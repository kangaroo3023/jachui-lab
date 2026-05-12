import type { Metadata } from "next";
import { AdSlot } from "@/components/AdSlot";
import { siteConfig } from "@/lib/site";
import { ChecklistInteractive } from "./ChecklistInteractive";

export const metadata: Metadata = {
  title: "자취방 구하기 체크리스트 — 계약 전 30가지",
  description:
    "자취방 계약 전 반드시 확인해야 할 30가지 항목. 수압, 곰팡이, 채광, 보안, 관리비, 계약서 독소조항까지 전문가가 정리한 자취방 체크리스트.",
  keywords: ["자취방 체크리스트", "자취방 구하기", "원룸 계약", "자취방 계약", "부동산 계약 주의사항"],
  alternates: { canonical: `${siteConfig.url}/checklist` },
};

const checklist = [
  {
    section: "🏠 건물 · 위치",
    items: [
      "도보 1분 이내 편의점 / 지하철역까지의 실제 도보 시간",
      "주변 소음: 유흥가 · 큰 도로 · 공사장 여부",
      "CCTV 위치와 개수, 건물 입구 도어락 유무",
      "주차장 · 주차비 (없으면 월 몇 만원 추가됨)",
      "여성 1인일 경우, 주변 가로등 밝기",
    ],
  },
  {
    section: "💧 수압 · 배수",
    items: [
      "샤워기 · 세면대 수압 직접 틀어서 확인",
      "변기 물 내림 2~3회 테스트 (막힘 확인)",
      "세탁기 배수구에 물 흘려보내 역류 확인",
      "싱크대 뜨거운 물 10초 이상 유지되는지",
    ],
  },
  {
    section: "🪴 환기 · 채광 · 습도",
    items: [
      "창문 방향 (남향/동향이 가장 좋음)",
      "창문 크기와 여는 방식, 방충망 상태",
      "벽지 모서리/창틀의 곰팡이 흔적",
      "욕실 환풍기 작동 테스트",
      "주방 후드 작동 여부",
    ],
  },
  {
    section: "🔌 전기 · 난방 · 가스",
    items: [
      "에어컨 · 보일러 제조년도 (10년 넘으면 교체 요청)",
      "콘센트 개수와 위치 (침대 머리/책상 옆 필수)",
      "분전함에 차단기 트립 기록 확인",
      "도시가스 / LPG / 전기보일러 구분",
    ],
  },
  {
    section: "🛋️ 옵션 · 상태",
    items: [
      "옵션 목록 사진으로 기록 (계약서에 첨부)",
      "냉장고 · 세탁기 · 에어컨 실작동 확인",
      "벽 · 바닥 스크래치/파손 사진 기록",
      "옷장 · 서랍 내부 냄새 (곰팡이)",
    ],
  },
  {
    section: "📄 계약 · 돈",
    items: [
      "등기부등본 최신본 확인 (근저당 없는지)",
      "관리비 항목 명확히: 수도·인터넷·청소 포함 여부",
      "보증금 반환 특약 (원상복구 범위 명시)",
      "계약 기간 중도 해지 조항",
      "월세 납부일 · 계좌번호 서면 확인",
      "전입신고 · 확정일자 가능 여부 확인",
      "전세보증금 반환보증 가입 가능 여부",
    ],
  },
];

export default function ChecklistPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "자취방 계약 전 반드시 확인해야 할 것은?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "등기부등본 최신본 확인, 근저당 여부, 수압, 창문 채광/곰팡이, 보증금 반환 특약, 전입신고/확정일자 가능 여부 등 총 30가지입니다.",
        },
      },
      {
        "@type": "Question",
        name: "관리비에는 뭐가 포함되어야 하나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "계약서에 명시되어야 합니다. 일반적으로 수도, 청소, 공용전기 정도이며 인터넷/가스/개별전기는 별도인 경우가 많습니다.",
        },
      },
    ],
  };

  return (
    <div className="space-y-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <header className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">✅ 자취방 구하기 체크리스트</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500 sm:text-base">
          부동산 사장님은 절대 안 알려주는, 계약 전 반드시 확인해야 할 30가지. 체크하면서 둘러보세요.
        </p>
      </header>

      <AdSlot position="top" />

      <ChecklistInteractive sections={checklist} />

      <AdSlot position="bottom" />
    </div>
  );
}
