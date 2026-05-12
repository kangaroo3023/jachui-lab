import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatKRW } from "@/lib/utils";

export function ProductGrid({ items, title, subtitle }: { items: Product[]; title?: string; subtitle?: string }) {
  if (!items || items.length === 0) return null;
  return (
    <section className="my-10">
      {title && (
        <div className="mb-5">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">{title}</h2>
          {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
        </div>
      )}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((p) => (
          <a
            key={p.id}
            href={p.coupangUrl}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-0.5 hover:shadow-soft"
          >
            <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover transition group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {p.badge && (
                <span className="absolute left-2 top-2 rounded-md bg-brand-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                  {p.badge}
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col gap-1 p-3">
              <p className="line-clamp-2 text-sm font-medium text-gray-900">{p.name}</p>
              <p className="mt-auto text-sm font-bold text-brand-600">{formatKRW(p.price)}</p>
              <p className="flex items-center gap-1 text-[11px] text-gray-400">
                쿠팡에서 보기 <ExternalLink className="h-3 w-3" />
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
