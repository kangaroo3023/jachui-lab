import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[40vh] max-w-md flex-col items-center justify-center text-center">
      <span className="text-6xl">🔍</span>
      <h1 className="mt-4 text-2xl font-bold text-gray-900">페이지를 찾을 수 없어요</h1>
      <p className="mt-2 text-sm text-gray-500">주소를 잘못 입력했거나, 삭제된 페이지일 수 있어요.</p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-600"
      >
        <Home className="h-4 w-4" /> 홈으로
      </Link>
    </div>
  );
}
