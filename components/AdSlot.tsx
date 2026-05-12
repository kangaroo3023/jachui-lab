"use client";

import { useEffect, useRef } from "react";

type AdSlotProps = {
  /** 애드센스 슬롯 ID (광고 단위 생성 시 받는 숫자) */
  slot?: string;
  /** 광고 포맷: display(자동), in-article, in-feed */
  format?: "auto" | "fluid" | "rectangle";
  /** 반응형 여부 */
  responsive?: boolean;
  /** 위치(마케팅 분석용) */
  position?: "top" | "in-article" | "bottom" | "sidebar";
  className?: string;
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * Google AdSense 광고 슬롯 컴포넌트.
 * - NEXT_PUBLIC_ADSENSE_CLIENT 환경변수가 없으면 플레이스홀더만 보여줌 (개발/승인전)
 * - 본인 애드센스 승인 후 .env.local 에 값 넣으면 자동으로 실제 광고 송출
 */
export function AdSlot({
  slot,
  format = "auto",
  responsive = true,
  position = "in-article",
  className,
}: AdSlotProps) {
  const pushed = useRef(false);
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  useEffect(() => {
    if (!client || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch (e) {
      console.warn("[AdSlot] push failed", e);
    }
  }, [client]);

  // 애드센스 미설정: 아무것도 표시하지 않음
  if (!client) {
    return null;
  }

  return (
    <div className={`my-6 ${className || ""}`} data-ad-position={position}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}
