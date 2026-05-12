import Image from "next/image";
import { ExternalLink, Tag, Check } from "lucide-react";
import { getProductById } from "@/lib/products";
import { formatKRW } from "@/lib/utils";

type CoupangLinkProps = {
  /** lib/products.ts에 등록된 상품 ID */
  id: string;
  /** 카드 레이아웃: compact(좁음) | card(기본) | wide(본문용 와이드) */
  variant?: "compact" | "card" | "wide";
};

/**
 * 쿠팡 파트너스 자동 링크 카드.
 * - 블로그 본문에서 <CoupangLink id="power-strip-saver" /> 형태로 호출
 * - 상품 정보/이미지/가격/리뷰 포인트를 한 번에 카드로 표시
 * - "최저가 확인하기" CTA 버튼 포함
 *
 * ⚠️ 쿠팡 파트너스 표기 의무:
 * 페이지 어딘가에 "이 포스팅은 쿠팡 파트너스 활동의 일환으로,
 * 이에 따른 일정액의 수수료를 제공받습니다." 문구를 반드시 넣어야 합니다.
 * (Footer에 자동 삽입됨)
 */
export function CoupangLink({ id, variant = "card" }: CoupangLinkProps) {
  const product = getProductById(id);
  if (!product) {
    return (
      <div className="my-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
        ⚠️ 상품 ID <code className="font-mono">{id}</code>를 찾을 수 없습니다. (lib/products.ts 확인)
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <a
        href={product.coupangUrl}
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className="my-3 flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 transition hover:border-brand-400 hover:shadow-soft"
      >
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md bg-gray-100">
          <Image src={product.image} alt={product.name} fill className="object-cover" sizes="56px" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-gray-900">{product.name}</p>
          <p className="text-xs text-brand-600">{formatKRW(product.price)} · 쿠팡에서 보기</p>
        </div>
        <ExternalLink className="h-4 w-4 shrink-0 text-gray-400" />
      </a>
    );
  }

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-soft">
      <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr]">
        <div className="relative aspect-square bg-gray-100 sm:aspect-auto">
          <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 640px) 100vw, 200px" />
          {product.badge && (
            <span className="absolute left-3 top-3 rounded-md bg-brand-500 px-2 py-0.5 text-xs font-bold text-white">
              {product.badge}
            </span>
          )}
        </div>
        <div className="flex flex-col justify-between gap-3 p-5">
          <div>
            <div className="mb-1 flex items-center gap-2 text-xs text-gray-500">
              <Tag className="h-3 w-3" />
              <span>자취 추천템</span>
            </div>
            <h4 className="text-base font-bold text-gray-900">{product.name}</h4>
            <p className="mt-1 text-sm text-gray-600">{product.shortDesc}</p>
            <ul className="mt-3 space-y-1">
              {product.pros.slice(0, 3).map((pro, i) => (
                <li key={i} className="flex items-start gap-1.5 text-xs text-gray-700">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-500" />
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-xl font-bold text-brand-600">{formatKRW(product.price)}</span>
            <a
              href={product.coupangUrl}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-brand-600"
            >
              최저가 확인하기 <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
