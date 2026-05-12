# 🏠 자취연구소 (Single-Lab)

자취생을 위한 수익형 웹사이트. 자취 비용 계산기, 자취방 체크리스트, 청소 주기표, 자취 꿀템 큐레이션, SEO 블로그를 한 번에.

**💰 수익 모델**: Google AdSense (노출/클릭 광고) + 쿠팡 파트너스 (제휴 커미션)

---

## 📦 이 프로젝트에 이미 들어가 있는 것

- ✅ **Next.js 14 (App Router) + TypeScript + Tailwind CSS** — 최신 기술 스택
- ✅ **자취 비용 계산기** — 실시간 계산, 연봉 대비 적정성 평가, 결과 하단에 쿠팡 추천템 자동 노출
- ✅ **자취방 체크리스트 30개** — 인터랙티브, 진행상황 자동 저장(localStorage)
- ✅ **청소 주기표** — 매일/주간/월간/연간
- ✅ **쿠팡 꿀템 큐레이션** — 카테고리별 10개 상품 (lib/products.ts 에서 관리)
- ✅ **SEO 블로그 시스템 (MDX)** — 프론트매터, JSON-LD 구조화 데이터, OG 태그, 읽는 시간
- ✅ **예시 블로그 글 3편** — 애드센스 승인용 장문 콘텐츠
- ✅ **AdSense 자동 삽입** — 글 3번째 문단 뒤 + 본문 하단
- ✅ **CoupangLink 컴포넌트** — `<CoupangLink id="상품ID" />` 한 줄로 예쁜 상품 카드 + 최저가 확인하기 버튼
- ✅ **sitemap.xml / robots.txt / ads.txt / manifest.json** — 자동 생성
- ✅ **Google Analytics 4 연동** — 환경변수만 넣으면 자동 동작
- ✅ **반응형 디자인 + 모바일 최적화**
- ✅ **쿠팡 파트너스 법적 고지 자동 삽입** (Footer)

---

## 🚀 배포까지 5단계 (비개발자용, 각 단계 5~10분)

### 📌 1단계. Node.js 설치 (최초 1회)

이미 설치되어 있으면 건너뛰세요.

1. https://nodejs.org/ko → **LTS 버전** 다운로드 → 설치 (모든 옵션 기본값)
2. 설치 후 "명령 프롬프트(cmd)" 열기 → 아래 입력해서 버전 나오면 성공

```bash
node -v
npm -v
```

### 📌 2단계. 프로젝트 실행해보기

명령 프롬프트에서 이 폴더로 이동한 뒤:

```bash
cd "C:\Users\박대홍\OneDrive\바탕 화면\스터디\웹사이트\자취연구소"
npm install
npm run dev
```

브라우저에서 **http://localhost:3000** 열면 사이트가 보입니다. 🎉

### 📌 3단계. GitHub에 업로드

1. https://github.com 가입 / 로그인
2. "New repository" 클릭 → 이름 `single-lab` → **Private** 선택 → Create
3. GitHub Desktop 설치 (https://desktop.github.com/) — 명령어 몰라도 클릭으로 업로드 가능
4. GitHub Desktop → "Add Existing Repository" → 이 `자취연구소` 폴더 선택
5. 커밋 메시지 "initial" 작성 → Commit → Push

### 📌 4단계. Vercel에 배포 (무료)

1. https://vercel.com/ → GitHub 계정으로 로그인
2. "Add New" → "Project" → 방금 만든 `single-lab` 저장소 선택
3. "Environment Variables" 섹션에 환경변수 입력 (5단계 참고)
4. **Deploy** 버튼 클릭 → 2~3분 뒤 `https://single-lab.vercel.app` 주소 생성 🎉

### 📌 5단계. 환경변수 설정 (수익화 연결)

Vercel 대시보드 → Settings → Environment Variables 에서 추가:

| Key | 언제 받는가? |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | 배포 후 도메인 (예: https://single-lab.vercel.app) |
| `NEXT_PUBLIC_ADSENSE_CLIENT` | AdSense 승인 후 (ca-pub-로 시작) |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 생성 후 (G-로 시작) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console 등록 시 |
| `NEXT_PUBLIC_NAVER_SITE_VERIFICATION` | 네이버 서치어드바이저 등록 시 |
| `NEXT_PUBLIC_COUPANG_PARTNER_TAG` | 쿠팡 파트너스 가입 후 |

환경변수 추가 후 "Redeploy" 클릭해야 반영됩니다.

---

## 💰 수익화 5단계

### ① Google AdSense 승인 받기 (가장 중요)

**승인 조건**: 독창적이고 가치 있는 콘텐츠가 최소 20~30개 있어야 함.

1. **먼저 글 20개 작성**하세요 (이미 예시 3편은 만들어 둠)
2. 1~2주간 사이트 접속 트래픽 일부 있는 상태 만들기 (SNS 홍보)
3. https://adsense.google.com → 신청
4. 승인되면 발급되는 `pub-` 코드를 환경변수 `NEXT_PUBLIC_ADSENSE_CLIENT`에 입력
5. **ads.txt 필수**: `public/ads.txt` 파일을 본인 pub 코드로 수정

> 🚨 주의: "계산기만" 있으면 "콘텐츠 부족"으로 거절됩니다. 블로그 글을 꼭 먼저 채우세요.

### ② 쿠팡 파트너스 가입

1. https://partners.coupang.com → 가입 (웹사이트 등록)
2. 본인 사이트 주소(`https://single-lab.vercel.app`)로 신청 → 대부분 바로 승인
3. 상품 검색 → "링크 생성" → URL 복사
4. **`lib/products.ts` 파일을 열어** `coupangUrl` 값을 본인 링크로 교체

```typescript
// 기존
coupangUrl: "https://link.coupang.com/a/example-power-strip",

// 교체 후 (본인 파트너스 링크)
coupangUrl: "https://link.coupang.com/a/YOUR-ACTUAL-LINK",
```

### ③ Google Search Console (SEO 등록)

1. https://search.google.com/search-console → 속성 추가 → 본인 도메인 입력
2. 소유권 확인 방법 중 "HTML 태그" 선택 → `content="..."` 값 복사
3. Vercel 환경변수 `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` 에 입력 후 재배포
4. 인증 완료 후 → "Sitemaps" 메뉴 → `sitemap.xml` 제출 (자동 생성되어 있음)

### ④ 네이버 서치어드바이저 (한국 유입용)

1. https://searchadvisor.naver.com → 사이트 등록
2. HTML 태그 인증 → content 값을 `NEXT_PUBLIC_NAVER_SITE_VERIFICATION` 에 입력
3. 사이트맵 제출: `https://본인도메인/sitemap.xml`

### ⑤ Google Analytics 4 (트래픽 분석)

1. https://analytics.google.com → 속성 만들기 → 측정 ID (G-로 시작) 복사
2. 환경변수 `NEXT_PUBLIC_GA_ID` 에 입력
3. 이후 방문자 수, 페이지 인기도, 이탈률 확인 가능

---

## ✍️ 블로그 글 추가하는 법 (비개발자도 가능)

`content/posts/` 폴더에 새 `.md` 파일 만들고 아래 형식대로 작성하면 끝.

```markdown
---
title: "글 제목"
description: "검색 결과에 보이는 요약 (120자 내외)"
category: "꿀팁"  # 꿀팁 | 리뷰 | 공지 | 가이드
keywords:
  - 자취
  - 관련키워드
thumbnail: "이미지URL"
date: "2026-04-15"
author: "자취연구소 편집부"
---

## 소제목

본문 내용...

<!-- COUPANG:power-strip-saver -->   ← 쿠팡 상품 카드 자동 삽입

<!-- 애드센스는 자동으로 삽입됩니다 -->
```

### 쿠팡 링크 본문에 넣기

글 중간에 `<!-- COUPANG:상품ID -->` 만 쓰면 예쁜 카드가 자동 생성됨.  
상품ID는 `lib/products.ts` 에 정의된 각 상품의 `id` 값.

---

## 🔥 수익 극대화 꿀팁 (운영 전략)

### 1) 애드센스 승인 빨리 받기

- **단순 일기 ❌** → "방법", "이유", "정보" 위주 정보성 글 ✅
- 글 하나당 **1,500자 이상**
- 예시 주제: "자취생 홈택스 연말정산 완벽 가이드", "원룸 곰팡이 완전 제거법", "자취 식단 1주일 식비 3만원" 등

### 2) 쿠팡 파트너스 클릭률 5배 높이기

단순 배너 ❌ → **"제가 써봤는데 진짜 물건입니다" 리뷰형 콘텐츠 ✅**

이 사이트는 `<CoupangLink />` 컴포넌트를 리뷰 본문 속에 자연스럽게 녹일 수 있게 설계되어 있어요.

### 3) 재방문 유도 (추가 개발 필요)

다음 단계에서 구현할 기능:
- 오늘의 자취 식단 인증 게시판 → 업로드 사진의 재료에 자동으로 쿠팡 링크
- 동네 분리배출 정보 검색 (지역 API 연동)
- 이메일 구독 (뉴스레터 → 주 1회 자동 트래픽 유입)

→ 매출이 나오기 시작하면 Supabase로 DB 확장 시 이 기능들 추가 가능. 지금은 일단 콘텐츠에 집중.

---

## 📁 프로젝트 구조

```
자취연구소/
├── app/                    # 페이지 (URL 경로 = 폴더 구조)
│   ├── page.tsx            # 메인 홈
│   ├── calculator/         # 비용 계산기
│   ├── checklist/          # 자취방 체크리스트
│   ├── cleaning/           # 청소 주기
│   ├── products/           # 꿀템 모음
│   ├── posts/              # 블로그
│   ├── about/              # 사이트 소개
│   ├── sitemap.ts          # SEO 사이트맵 자동 생성
│   ├── robots.ts           # SEO 크롤러 규칙
│   └── layout.tsx          # 전체 레이아웃 + SEO 메타
├── components/             # UI 부품
│   ├── AdSlot.tsx          # 애드센스 슬롯
│   ├── CoupangLink.tsx     # 쿠팡 상품 카드
│   ├── ProductGrid.tsx     # 상품 그리드
│   ├── CostCalculator.tsx  # 계산기 본체
│   ├── PostContent.tsx     # 블로그 본문 렌더러
│   ├── Header.tsx / Footer.tsx
│   └── AnalyticsScripts.tsx
├── content/posts/          # 블로그 글 (.md 파일)
├── lib/                    # 유틸 + 데이터
│   ├── site.ts             # 사이트 기본 설정
│   ├── products.ts         # 쿠팡 상품 DB (여기 수정)
│   ├── posts.ts            # 블로그 로더
│   └── utils.ts
├── public/                 # 정적 파일 (이미지/ads.txt)
└── .env.example            # 환경변수 예시
```

---

## ❓ 자주 막히는 곳

### Q. `npm install` 에러

→ Node.js 18 이상인지 확인. `node -v` 가 `v18.x` 이상이어야 함.

### Q. 로컬에선 되는데 Vercel에선 이미지 안 나옴

→ `next.config.mjs` 의 `remotePatterns` 에 해당 도메인 추가해야 함.

### Q. 애드센스 승인 계속 거절

→ 콘텐츠 부족이 99%. 1,500자 이상 정보성 글 20개 채우기. 개인 블로그 같은 글 ❌.

### Q. 쿠팡 링크가 "example"로 되어 있음

→ 예시입니다. `lib/products.ts` 에서 본인 파트너스 링크로 전부 교체하세요.

---

## 📞 도움이 필요하면

이 프로젝트를 만들어준 Claude에게 "이 부분을 이렇게 바꿔줘"라고 말하면 코드를 수정해줍니다.  
비개발자용 친구이니 복잡한 용어 쓰지 말고 **"파란 버튼을 주황색으로 바꿔줘"**, **"블로그에 댓글 달 수 있게 해줘"** 처럼 자연어로 말하세요.

---

**Made with 🧡 by Claude for 박대홍**
