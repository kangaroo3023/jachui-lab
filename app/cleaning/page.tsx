import type { Metadata } from "next";
import { AdSlot } from "@/components/AdSlot";
import { ProductGrid } from "@/components/ProductGrid";
import { getProductsByCategory } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "자취방 청소 주기표 — 매일·주간·월간 한 장에 정리",
  description:
    "설거지부터 환풍기 필터 청소까지. 자취방에서 꼭 해야 할 청소 항목과 권장 주기를 한눈에 볼 수 있는 청소 주기표.",
  keywords: ["자취방 청소", "청소 주기", "원룸 청소법", "세탁기 청소 주기", "욕실 청소"],
  alternates: { canonical: `${siteConfig.url}/cleaning` },
};

const schedule = [
  {
    cycle: "매일",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    tasks: ["설거지", "음식물 쓰레기 비우기", "침대 정리", "5분 바닥 정리"],
  },
  {
    cycle: "주 1회",
    color: "bg-sky-50 text-sky-700 border-sky-200",
    tasks: [
      "바닥 물걸레질",
      "욕실 변기/세면대 세정",
      "이불 커버/베개 커버 교체",
      "분리배출",
      "냉장고 오래된 음식 확인",
    ],
  },
  {
    cycle: "2주 1회",
    color: "bg-indigo-50 text-indigo-700 border-indigo-200",
    tasks: ["침구 빨래 (베개/이불)", "주방 후드 기름기 닦기", "창틀 먼지 제거"],
  },
  {
    cycle: "월 1회",
    color: "bg-violet-50 text-violet-700 border-violet-200",
    tasks: [
      "세탁기 통세척",
      "에어컨 필터 청소",
      "싱크대 배수구 분해 세척",
      "냉장고 내부 전체 정리",
      "욕실 곰팡이 제거제 시공",
    ],
  },
  {
    cycle: "분기 1회",
    color: "bg-rose-50 text-rose-700 border-rose-200",
    tasks: ["에어컨 전체 청소 (필터 외 + 바람막)", "세탁기 필터 청소", "보일러 주변 먼지 제거"],
  },
  {
    cycle: "연 1회",
    color: "bg-amber-50 text-amber-700 border-amber-200",
    tasks: ["환기 덕트 전문 청소", "매트리스 뒤집기 / 커버 세탁", "정수기/공기청정기 필터 교체"],
  },
];

export default function CleaningPage() {
  const cleaningProducts = getProductsByCategory("cleaning");

  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">🧹 자취방 청소 주기표</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500 sm:text-base">
          언제 뭘 청소해야 하는지 헷갈릴 땐 이 표 하나만 따라하세요.
        </p>
      </header>

      <AdSlot position="top" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {schedule.map((s) => (
          <div key={s.cycle} className={`rounded-2xl border-2 ${s.color} p-5`}>
            <p className="text-sm font-bold">{s.cycle}</p>
            <ul className="mt-3 space-y-2">
              {s.tasks.map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-gray-800">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-60" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <ProductGrid
        items={cleaningProducts}
        title="🧴 청소가 쉬워지는 추천템"
        subtitle="실제 자취생들이 쓴 후기 기반"
      />

      <AdSlot position="bottom" />
    </div>
  );
}
