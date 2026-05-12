import Link from "next/link";
import { Calculator, ClipboardList, Sparkles, Sprout, BookOpen, ArrowRight } from "lucide-react";
import { AdSlot } from "@/components/AdSlot";
import { ProductGrid } from "@/components/ProductGrid";
import { getBestProducts } from "@/lib/products";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export default function HomePage() {
  const best = getBestProducts(4);
  const posts = getAllPosts().slice(0, 4);

  return (
    <div className="space-y-14">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-brand-400 to-amber-300 px-6 py-14 text-white sm:px-10 sm:py-20">
        <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 rounded-full bg-white/10 p-24 blur-3xl" />
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
            <Sparkles className="h-3 w-3" /> 자취 5년차가 만든 진짜 정보 사이트
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl">
            월세 50만원,<br />
            나는 적게 쓰는 걸까?
          </h1>
          <p className="mt-4 max-w-xl text-sm text-white/90 sm:text-base">
            자취생의 진짜 고민은 "얼마 쓰는지"가 아니라 "이게 적당한지"예요.<br />
            3초 계산기로 지금 바로 확인하세요. 보증금·세액공제·꿀템까지 전부 여기서.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/calculator"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-brand-600 transition hover:shadow-soft"
            >
              3초 비용 진단 받기 <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/posts"
              className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/25"
            >
              자취 꿀팁 보기
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/80">
            <span className="inline-flex items-center gap-1">✅ 무료 · 회원가입 없음</span>
            <span className="inline-flex items-center gap-1">✅ 모바일 최적화</span>
            <span className="inline-flex items-center gap-1">✅ 광고성 정보 ❌</span>
          </div>
        </div>
      </section>

      {/* 도구 카드 (Utility) */}
      <section>
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">🛠️ 자취 도구</h2>
            <p className="mt-1 text-sm text-gray-500">클릭 한 번으로 끝나는 계산기와 체크리스트</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ToolCard
            href="/calculator"
            icon={Calculator}
            title="한 달 자취 비용 계산기"
            desc="월세부터 식비까지, 내가 진짜 얼마 쓰는지 한눈에"
            accent="from-orange-500 to-rose-500"
          />
          <ToolCard
            href="/checklist"
            icon={ClipboardList}
            title="자취방 구하기 체크리스트"
            desc="계약 전 반드시 확인해야 할 30가지 항목"
            accent="from-sky-500 to-indigo-500"
          />
          <ToolCard
            href="/cleaning"
            icon={Sprout}
            title="청소 주기 알리미"
            desc="뭐를 얼마만에 청소해야 할지 더 이상 헷갈리지 마세요"
            accent="from-emerald-500 to-teal-500"
          />
        </div>
      </section>

      <AdSlot position="top" />

      {/* 인기 꿀템 (Community/Revenue) */}
      <ProductGrid
        items={best}
        title="🔥 자취생이 직접 고른 꿀템"
        subtitle="실사용 후기 좋은 것만 모았어요"
      />

      {/* 블로그 (SEO Content) */}
      <section>
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">📖 자취 꿀팁 모음</h2>
            <p className="mt-1 text-sm text-gray-500">진짜 아끼는 사람의 비결</p>
          </div>
          <Link href="/posts" className="text-sm font-semibold text-brand-600 hover:underline">
            전체 보기 →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {posts.length === 0 && (
            <p className="col-span-full rounded-xl border border-dashed border-gray-200 p-8 text-center text-sm text-gray-400">
              곧 새 글이 올라옵니다 🎉
            </p>
          )}
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/posts/${p.slug}`}
              className="group rounded-2xl border border-gray-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <div className="mb-3 flex items-center gap-2 text-xs">
                <span className="rounded-md bg-brand-50 px-2 py-0.5 font-semibold text-brand-700">{p.category}</span>
                <span className="text-gray-400">{formatDate(p.date)} · {p.readingMinutes}분 읽기</span>
              </div>
              <h3 className="line-clamp-2 text-base font-bold text-gray-900 group-hover:text-brand-600 sm:text-lg">
                {p.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-gray-500">{p.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA 배너 */}
      <section className="rounded-3xl bg-gray-900 px-6 py-10 text-center text-white sm:px-10 sm:py-14">
        <BookOpen className="mx-auto h-10 w-10 text-brand-400" />
        <h2 className="mt-4 text-xl font-bold sm:text-2xl">자취 비용, 지금 얼마나 쓰고 있나요?</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-gray-300">
          3초 만에 내 자취 비용이 적정한지 확인해보세요. 절약 포인트까지 알려드려요.
        </p>
        <Link
          href="/calculator"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-bold transition hover:bg-brand-400"
        >
          비용 계산하러 가기 <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <AdSlot position="bottom" />
    </div>
  );
}

function ToolCard({
  href,
  icon: Icon,
  title,
  desc,
  accent,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  accent: string;
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-soft"
    >
      <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white`}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-base font-bold text-gray-900 group-hover:text-brand-600">{title}</h3>
      <p className="mt-1 text-sm text-gray-500">{desc}</p>
      <ArrowRight className="absolute bottom-5 right-5 h-4 w-4 text-gray-300 transition group-hover:translate-x-0.5 group-hover:text-brand-500" />
    </Link>
  );
}
