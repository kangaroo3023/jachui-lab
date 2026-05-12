import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-gray-100 bg-gray-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-base font-bold text-gray-900">{siteConfig.name}</p>
          <p className="mt-2 max-w-sm text-sm text-gray-500">{siteConfig.description}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-700">바로가기</p>
          <ul className="mt-3 space-y-2 text-sm text-gray-500">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brand-600">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-700">정책</p>
          <ul className="mt-3 space-y-2 text-sm text-gray-500">
            <li>
              <Link href="/about" className="hover:text-brand-600">
                사이트 소개
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-brand-600">
                개인정보처리방침
              </Link>
            </li>
            <li>
              <Link href="/about#terms" className="hover:text-brand-600">
                이용약관
              </Link>
            </li>
            <li>
              <a href="mailto:hello@single-lab.com" className="hover:text-brand-600">
                문의하기
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-white px-4 py-4 text-center text-xs text-gray-400">
        <p>© {year} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
