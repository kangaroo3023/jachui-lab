import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "자취 꿀팁 블로그",
  description: "공과금 아끼는 법, 다이소 필수템, 자취방 청소법까지. 자취 전문 정보를 모아두는 곳.",
  alternates: { canonical: `${siteConfig.url}/posts` },
};

export default function PostsListPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">📚 자취 꿀팁 블로그</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500 sm:text-base">
          자취 5년 차가 직접 써보고 검증한 정보만 모았어요.
        </p>
      </header>

      <AdSlot position="top" />

      {posts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-12 text-center">
          <p className="text-sm text-gray-500">
            아직 등록된 포스트가 없습니다. <br />
            <code className="font-mono text-xs">content/posts/</code> 폴더에 <code>.md</code> 파일을 추가하세요.
          </p>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/posts/${p.slug}`}
              className="group rounded-2xl border border-gray-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <div className="mb-2 flex items-center gap-2 text-xs">
                <span className="rounded-md bg-brand-50 px-2 py-0.5 font-semibold text-brand-700">{p.category}</span>
                <span className="text-gray-400">{formatDate(p.date)} · {p.readingMinutes}분 읽기</span>
              </div>
              <h2 className="line-clamp-2 text-lg font-bold text-gray-900 group-hover:text-brand-600">{p.title}</h2>
              <p className="mt-2 line-clamp-2 text-sm text-gray-500">{p.description}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
