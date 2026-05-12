import { AdSlot } from "@/components/AdSlot";
import { CoupangLink } from "@/components/CoupangLink";

/**
 * MDX/Markdown 렌더 후, 커스텀 주석 마커를 실제 React 컴포넌트로 치환.
 * - <!-- ADSLOT:IN_ARTICLE --> → AdSlot (본문 중간)
 * - <!-- ADSLOT:BOTTOM -->      → AdSlot (본문 하단)
 * - <!-- COUPANG:상품ID -->     → CoupangLink 카드
 */
export function PostContent({ html }: { html: string }) {
  const parts = html.split(/(<!--\s*(?:ADSLOT|COUPANG):[A-Z_a-z0-9-]+\s*-->)/g);

  return (
    <article className="prose prose-sm max-w-none sm:prose-base prose-headings:font-bold prose-a:text-brand-600 prose-img:rounded-xl">
      {parts.map((part, i) => {
        const adMatch = part.match(/<!--\s*ADSLOT:(IN_ARTICLE|BOTTOM)\s*-->/);
        if (adMatch) {
          return <AdSlot key={i} position={adMatch[1] === "BOTTOM" ? "bottom" : "in-article"} />;
        }
        const couMatch = part.match(/<!--\s*COUPANG:([a-z0-9-]+)\s*-->/i);
        if (couMatch) {
          return <CoupangLink key={i} id={couMatch[1]} />;
        }
        return <div key={i} dangerouslySetInnerHTML={{ __html: part }} />;
      })}
    </article>
  );
}
