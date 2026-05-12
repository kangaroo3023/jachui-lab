"use client";

import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Circle, RotateCcw } from "lucide-react";

type Section = { section: string; items: string[] };

export function ChecklistInteractive({ sections }: { sections: Section[] }) {
  const total = useMemo(() => sections.reduce((a, s) => a + s.items.length, 0), [sections]);
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  // 로컬스토리지 저장 (재방문 시 진행 상태 유지)
  useEffect(() => {
    try {
      const saved = localStorage.getItem("checklist-state");
      if (saved) setChecked(JSON.parse(saved));
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem("checklist-state", JSON.stringify(checked));
    } catch {}
  }, [checked]);

  const completed = Object.values(checked).filter(Boolean).length;
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  const toggle = (key: string) => setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  const reset = () => setChecked({});

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="sticky top-16 z-10 rounded-xl border border-gray-200 bg-white/95 p-4 shadow-soft backdrop-blur">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-800">
            체크 완료: <span className="text-brand-600">{completed}</span> / {total}
          </span>
          <button onClick={reset} className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-brand-600">
            <RotateCcw className="h-3 w-3" /> 초기화
          </button>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Sections */}
      {sections.map((sec) => (
        <section key={sec.section} className="rounded-2xl border border-gray-200 bg-white p-5">
          <h2 className="text-lg font-bold text-gray-900">{sec.section}</h2>
          <ul className="mt-3 divide-y divide-gray-100">
            {sec.items.map((item, i) => {
              const key = `${sec.section}-${i}`;
              const isChecked = !!checked[key];
              return (
                <li key={key}>
                  <button
                    onClick={() => toggle(key)}
                    className={`flex w-full items-start gap-3 py-3 text-left transition ${
                      isChecked ? "opacity-60" : "opacity-100"
                    }`}
                  >
                    {isChecked ? (
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                    ) : (
                      <Circle className="mt-0.5 h-5 w-5 shrink-0 text-gray-300" />
                    )}
                    <span className={`text-sm ${isChecked ? "text-gray-400 line-through" : "text-gray-700"}`}>
                      {item}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
