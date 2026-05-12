import Script from "next/script";

/**
 * Google AdSense + Google Analytics 4 스크립트 통합 로더.
 * 환경변수가 있을 때만 로드됨. (승인 전/미설정 시 아무것도 출력 안 함)
 */
export function AnalyticsScripts() {
  const adsense = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const ga = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      {adsense && (
        <Script
          async
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsense}`}
          crossOrigin="anonymous"
        />
      )}
      {ga && (
        <>
          <Script
            async
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${ga}`}
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ga}', { page_path: window.location.pathname });
            `}
          </Script>
        </>
      )}
    </>
  );
}
