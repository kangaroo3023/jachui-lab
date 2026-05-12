import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { AdSlot } from "@/components/AdSlot";
import { PostContent } from "@/components/PostContent";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "찾을 수 없는 글" };
  const url = `${siteConfig.url}/posts/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      images: [{ url: post.thumbnail, width: 1200, height: 630, alt: post.title }],
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.thumbnail],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: [post.thumbnail],
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/posts/${post.slug}` },
    keywords: post.keywords.join(", "),
  };

  return (
    <div className="mx-auto max-w-3xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Link href="/posts" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-brand-600">
        <ArrowLeft className="h-3.5 w-3.5" /> 블로그 목록
      </Link>

      <header className="mt-4 border-b border-gray-100 pb-6">
        <span className="inline-block rounded-md bg-brand-50 px-2 py-0.5 text-xs font-semibold text-brand-700">
          {post.category}
        </span>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">{post.title}</h1>
        <p className="mt-3 text-base text-gray-500">{post.description}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray-400">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3 w-3" /> {formatDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" /> {post.readingMinutes}분 읽기
          </span>
          <span>· {post.author}</span>
        </div>
      </header>

      <AdSlot position="top" />

      <div className="mt-6">
        <PostContent html={post.contentHtml} />
      </div>

      {post.keywords.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-2 border-t border-gray-100 pt-6">
          {post.keywords.map((k) => (
            <span key={k} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
              #{k}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
