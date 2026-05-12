import type { Metadata } from "next";
import { AdSlot } from "@/components/AdSlot";
import { ProductGrid } from "@/components/ProductGrid";
import { products, categoryLabels, type ProductCategory } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "자취 꿀템 모음 — 실제 자취생이 고른 필수템",
  description:
    "절전 멀티탭부터 도어 알람까지. 자취 5년 차가 써보고 진짜 좋았던 아이템만 모았어요. 카테고리별 추천 리스트.",
  keywords: ["자취 꿀템", "자취 필수템", "원룸 추천템", "자취생 선물", "1인가구 가전"],
  alternates: { canonical: `${siteConfig.url}/products` },
};

export default function ProductsPage() {
  const categories = Object.keys(categoryLabels) as ProductCategory[];

  return (
    <div className="space-y-10">
      <header className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">🛒 자취 꿀템 모음</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500 sm:text-base">
          "자취 5년 차가 진짜 써본" 물건들만 엄선했어요. 카테고리별로 둘러보세요.
        </p>
      </header>

      <AdSlot position="top" />

      {categories.map((cat) => {
        const items = products.filter((p) => p.category === cat);
        if (items.length === 0) return null;
        return (
          <ProductGrid
            key={cat}
            items={items}
            title={`${categoryLabels[cat]} (${items.length})`}
          />
        );
      })}

      <AdSlot position="bottom" />
    </div>
  );
}
