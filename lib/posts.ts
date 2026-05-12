import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";

const postsDirectory = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  category: "꿀팁" | "리뷰" | "공지" | "가이드" | "비용" | "요리" | "인테리어" | "정보";
  keywords: string[];
  thumbnail: string;
  date: string;
  author: string;
  readingMinutes: number;
};

export type Post = PostMeta & {
  contentHtml: string;
};

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
  return files
    .map((file) => {
      const slug = file.replace(/\.(md|mdx)$/, "");
      const raw = fs.readFileSync(path.join(postsDirectory, file), "utf8");
      const { data, content } = matter(raw);
      const words = content.replace(/\s+/g, " ").length;
      const readingMinutes = Math.max(1, Math.ceil(words / 600));
      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        category: data.category || "꿀팁",
        keywords: data.keywords || [],
        thumbnail: data.thumbnail || "/og-image.png",
        date: data.date || new Date().toISOString(),
        author: data.author || "자취연구소 편집부",
        readingMinutes,
      } as PostMeta;
    })
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const mdPath = path.join(postsDirectory, `${slug}.md`);
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
  const fullPath = fs.existsSync(mdPath) ? mdPath : fs.existsSync(mdxPath) ? mdxPath : null;
  if (!fullPath) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  // 애드센스 자동 삽입: 3번째 문단 뒤 + 본문 맨 하단
  // 문단은 빈 줄(\n\n)로 구분
  const paragraphs = content.split(/\n\n+/);
  let processed = content;
  if (paragraphs.length > 3) {
    const before = paragraphs.slice(0, 3).join("\n\n");
    const after = paragraphs.slice(3).join("\n\n");
    processed = `${before}\n\n<!-- ADSLOT:IN_ARTICLE -->\n\n${after}`;
  }
  processed = `${processed}\n\n<!-- ADSLOT:BOTTOM -->\n`;

  const html = await remark().use(remarkGfm, { singleTilde: false }).use(remarkHtml, { sanitize: false }).process(processed);
  const words = content.replace(/\s+/g, " ").length;
  const readingMinutes = Math.max(1, Math.ceil(words / 600));

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    category: data.category || "꿀팁",
    keywords: data.keywords || [],
    thumbnail: data.thumbnail || "/og-image.png",
    date: data.date || new Date().toISOString(),
    author: data.author || "자취연구소 편집부",
    readingMinutes,
    contentHtml: html.toString(),
  };
}
