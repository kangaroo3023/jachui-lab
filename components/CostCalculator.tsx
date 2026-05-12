"use client";

import { useMemo, useState } from "react";
import { Home, Zap, Droplet, Flame, Wifi, UtensilsCrossed, ShoppingBasket, Wallet, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";
import { formatKRW } from "@/lib/utils";
import { ProductGrid } from "@/components/ProductGrid";
import { getRecommendedBySpending } from "@/lib/products";

type Expense = {
  key: keyof ExpenseState;
  label: string;
  placeholder: number;
  icon: React.ComponentType<{ className?: string }>;
  hint?: string;
};

type ExpenseState = {
  rent: number;
  electricity: number;
  water: number;
  gas: number;
  internet: number;
  food: number;
  daily: number;
};

const EXPENSES: Expense[] = [
  { key: "rent", label: "월세 / 관리비", placeholder: 500000, icon: Home, hint: "관리비 포함 금액" },
  { key: "electricity", label: "전기세", placeholder: 30000, icon: Zap },
  { key: "water", label: "수도세", placeholder: 12000, icon: Droplet },
  { key: "gas", label: "가스비", placeholder: 20000, icon: Flame },
  { key: "internet", label: "인터넷 / 통신비", placeholder: 35000, icon: Wifi },
  { key: "food", label: "식비", placeholder: 350000, icon: UtensilsCrossed },
  { key: "daily", label: "생필품비", placeholder: 80000, icon: ShoppingBasket },
];

/**
 * 한 달 자취 비용 계산기.
 * - 실시간 합계
 * - 연봉 입력 → 적정 지출 비율 평가 (권장 30%)
 * - 결과 하단에 "이 비용을 아껴줄 추천 아이템" (쿠팡 링크)
 */
export function CostCalculator() {
  const [values, setValues] = useState<ExpenseState>({
    rent: 0,
    electricity: 0,
    water: 0,
    gas: 0,
    internet: 0,
    food: 0,
    daily: 0,
  });
  const [annualSalary, setAnnualSalary] = useState<number>(0);

  const total = useMemo(() => Object.values(values).reduce((a, b) => a + b, 0), [values]);
  const annualSpending = total * 12;
  const ratio = annualSalary > 0 ? (annualSpending / annualSalary) * 100 : 0;

  const verdict = useMemo(() => {
    if (annualSalary === 0) return null;
    if (ratio <= 30) return { level: "good" as const, label: "아주 알뜰하게 살고 있어요", color: "text-emerald-600", bg: "bg-emerald-50", icon: CheckCircle2 };
    if (ratio <= 45) return { level: "ok" as const, label: "평균 수준, 개선 여지는 있어요", color: "text-amber-600", bg: "bg-amber-50", icon: TrendingUp };
    return { level: "warn" as const, label: "지출이 과해요. 다이어트 필요!", color: "text-rose-600", bg: "bg-rose-50", icon: AlertTriangle };
  }, [annualSalary, ratio]);

  const recommended = useMemo(
    () =>
      total > 0
        ? getRecommendedBySpending({
            electricity: values.electricity,
            water: values.water,
            gas: values.gas,
          })
        : [],
    [total, values.electricity, values.water, values.gas]
  );

  const setVal = (key: keyof ExpenseState, v: string) => {
    const n = Math.max(0, Number(v.replace(/\D/g, "")) || 0);
    setValues((prev) => ({ ...prev, [key]: n }));
  };

  return (
    <div className="space-y-8">
      {/* 입력 섹션 */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-soft sm:p-7">
        <h2 className="text-lg font-bold text-gray-900 sm:text-xl">📝 이번 달 지출 입력</h2>
        <p className="mt-1 text-sm text-gray-500">한 달 기준으로 예상 금액을 적어주세요. 빈 칸은 0으로 처리됩니다.</p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {EXPENSES.map((exp) => (
            <div key={exp.key} className="rounded-xl border border-gray-100 bg-gray-50/50 p-3 transition focus-within:border-brand-400 focus-within:bg-white">
              <label className="flex items-center gap-2 text-xs font-medium text-gray-600">
                <exp.icon className="h-3.5 w-3.5 text-brand-500" />
                {exp.label}
                {exp.hint && <span className="text-[10px] text-gray-400">({exp.hint})</span>}
              </label>
              <div className="mt-1 flex items-center gap-1">
                <input
                  inputMode="numeric"
                  type="text"
                  value={values[exp.key] ? values[exp.key].toLocaleString("ko-KR") : ""}
                  onChange={(e) => setVal(exp.key, e.target.value)}
                  placeholder={exp.placeholder.toLocaleString("ko-KR")}
                  className="w-full border-0 bg-transparent p-1 text-base font-semibold text-gray-900 placeholder:font-normal placeholder:text-gray-300 focus:outline-none focus:ring-0"
                />
                <span className="text-sm text-gray-400">원</span>
              </div>
            </div>
          ))}
        </div>

        {/* 연봉 입력 */}
        <div className="mt-5 rounded-xl border border-brand-100 bg-brand-50/60 p-3">
          <label className="flex items-center gap-2 text-xs font-medium text-brand-700">
            <Wallet className="h-3.5 w-3.5" />
            세후 연 소득 (선택) — 입력 시 지출 건강도 평가
          </label>
          <div className="mt-1 flex items-center gap-1">
            <input
              inputMode="numeric"
              type="text"
              value={annualSalary ? annualSalary.toLocaleString("ko-KR") : ""}
              onChange={(e) => setAnnualSalary(Math.max(0, Number(e.target.value.replace(/\D/g, "")) || 0))}
              placeholder="30,000,000"
              className="w-full border-0 bg-transparent p-1 text-base font-semibold text-gray-900 placeholder:font-normal placeholder:text-brand-300 focus:outline-none focus:ring-0"
            />
            <span className="text-sm text-brand-400">원</span>
          </div>
        </div>
      </div>

      {/* 결과 섹션 */}
      <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-brand-50 to-white p-5 shadow-soft sm:p-7">
        <h2 className="text-lg font-bold text-gray-900 sm:text-xl">💰 실시간 결과</h2>

        <div className="mt-4 flex items-baseline justify-between gap-4 border-b border-brand-100 pb-5">
          <span className="text-sm text-gray-500">한 달 총 지출</span>
          <span className="text-3xl font-extrabold text-brand-600 sm:text-4xl">{formatKRW(total)}</span>
        </div>

        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          <ResultStat label="하루 평균" value={formatKRW(Math.round(total / 30))} />
          <ResultStat label="1년 총 지출" value={formatKRW(annualSpending)} />
          <ResultStat label="고정비 비중" value={`${Math.round(fixedRatio(values))}%`} />
        </div>

        {/* 소득 대비 건강도 프로그레스 바 */}
        {verdict && (
          <div className={`mt-6 rounded-xl ${verdict.bg} p-4`}>
            <div className="flex items-center justify-between">
              <div className={`flex items-center gap-2 text-sm font-semibold ${verdict.color}`}>
                <verdict.icon className="h-4 w-4" />
                {verdict.label}
              </div>
              <span className={`text-sm font-bold ${verdict.color}`}>연소득의 {ratio.toFixed(1)}%</span>
            </div>
            <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-white/70">
              <div
                className={`h-full rounded-full transition-all ${
                  verdict.level === "good" ? "bg-emerald-500" : verdict.level === "ok" ? "bg-amber-500" : "bg-rose-500"
                }`}
                style={{ width: `${Math.min(100, ratio)}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-gray-500">
              권장 지출 비율 30% · 실제 사용한 비율 {ratio.toFixed(1)}%
            </p>
          </div>
        )}
      </div>

      {/* 수익화 핵심: 추천 아이템 섹션 */}
      {recommended.length > 0 && (
        <ProductGrid
          items={recommended}
          title="💡 이 비용을 아껴줄 추천 아이템"
          subtitle="입력하신 지출 패턴을 분석해서 자취연구소가 골랐어요."
        />
      )}
    </div>
  );
}

function ResultStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white/70 p-3">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="mt-0.5 text-base font-bold text-gray-900">{value}</p>
    </div>
  );
}

function fixedRatio(v: ExpenseState): number {
  const total = Object.values(v).reduce((a, b) => a + b, 0);
  if (total === 0) return 0;
  const fixed = v.rent + v.internet;
  return (fixed / total) * 100;
}
