// 쿠팡 파트너스 상품 데이터베이스 (파일 기반 DB)
// 🛒 실제 운영 시: 쿠팡 파트너스 가입 후 본인 링크로 교체하세요.
// 링크 받는 법: https://partners.coupang.com → 링크 생성 → URL 복사

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  tags: string[];
  price: number;
  image: string;
  coupangUrl: string; // 🛒 본인 파트너스 링크로 교체
  pros: string[]; // 사람들이 칭찬하는 포인트 (리뷰 기반)
  badge?: "BEST" | "NEW" | "HOT" | "SALE";
  shortDesc: string;
};

export type ProductCategory =
  | "energy-saving" // 절전 · 절약
  | "cleaning" // 청소 용품
  | "kitchen" // 주방 · 식기
  | "laundry" // 세탁 · 세제
  | "storage" // 수납 · 정리
  | "bedding" // 침구 · 매트
  | "bathroom" // 욕실 용품
  | "appliance" // 소형 가전
  | "safety" // 안전 · 보안
  | "daiso-pick"; // 다이소 대체템

export const categoryLabels: Record<ProductCategory, string> = {
  "energy-saving": "절전·절약",
  cleaning: "청소",
  kitchen: "주방",
  laundry: "세탁",
  storage: "수납·정리",
  bedding: "침구",
  bathroom: "욕실",
  appliance: "소형가전",
  safety: "안전·보안",
  "daiso-pick": "다이소 PICK",
};

export const products: Product[] = [
  {
    id: "power-strip-saver",
    name: "개별 스위치 절전 멀티탭 6구",
    category: "energy-saving",
    tags: ["절전", "전기세", "멀티탭"],
    price: 14900,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/1ba1/b3538d410bb80556a039957aa48cc52be3650dc5bea37eac274a59466d19.jpg",
    coupangUrl: "https://link.coupang.com/a/et3yCC",
    pros: [
      "개별 스위치로 대기전력 완전 차단",
      "한 달 전기세 평균 15~20% 절감",
      "과부하 차단 기능 탑재",
    ],
    badge: "BEST",
    shortDesc: "꺼두기 귀찮을 땐 스위치 하나로. 자취 필수템 1위.",
  },
  {
    id: "water-saving-shower",
    name: "3단계 수압 조절 절수 샤워기",
    category: "bathroom",
    tags: ["절수", "수도세", "샤워기"],
    price: 19900,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/4276663726069288-26a5a8cb-42d9-43a2-994d-955cfb4735d4.jpg",
    coupangUrl: "https://link.coupang.com/a/et3ALz",
    pros: [
      "필터 교체형으로 녹물 제거",
      "수압은 더 세지고 물은 30% 절약",
      "설치 30초, 공구 필요 없음",
    ],
    badge: "HOT",
    shortDesc: "수도세 반값의 비밀. 설치도 30초 끝.",
  },
  {
    id: "led-bulb-pack",
    name: "LED 전구 10W 6500K 4개입",
    category: "energy-saving",
    tags: ["절전", "LED", "전구"],
    price: 9900,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/99449381316403-7f45b0cb-9ec7-49a0-949f-cff33752d9d0.png",
    coupangUrl: "https://link.coupang.com/a/et57T0",
    pros: ["백열전구 대비 전기료 85% 절감", "수명 25,000시간", "눈부심 없는 자연광"],
    shortDesc: "형광등 바꿨더니 전기세가 달라졌어요.",
  },
  {
    id: "microfiber-mop",
    name: "물걸레 + 밀대 청소기 세트",
    category: "cleaning",
    tags: ["청소", "물걸레", "밀대"],
    price: 22900,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2026/01/26/10/6/9d6f2a11-72a3-4098-8c80-5771095d67bd.jpg",
    coupangUrl: "https://link.coupang.com/a/et6azu",
    pros: ["360도 회전, 구석까지 닦임", "세척 가능한 극세사 패드 3장 포함", "소음 거의 없음"],
    shortDesc: "원룸에 청소기보다 이게 낫다.",
  },
  {
    id: "laundry-sheet",
    name: "세탁 세제 시트 60매 (무향)",
    category: "laundry",
    tags: ["세탁", "세제", "미니멀"],
    price: 12900,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/63243553069423-6dc9da71-5455-46bd-a2d7-33c00c3a188f.jpg",
    coupangUrl: "https://link.coupang.com/a/et6b6w",
    pros: ["무게 60g, 가성비 미쳤음", "세탁기에 딱 한 장만 넣으면 끝", "헹굼 한 번이면 충분"],
    shortDesc: "액체세제 무거워서 힘든 자취생 구원템.",
  },
  {
    id: "vacuum-storage-bag",
    name: "압축 수납팩 대형 6P 펌프 포함",
    category: "storage",
    tags: ["수납", "정리", "원룸"],
    price: 15900,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/514a/8e0d4df391b1c2d62e6b191f360e4e254ebe9ab875fb80cd0cdbceb47f44.jpg",
    coupangUrl: "https://link.coupang.com/a/et6gaV",
    pros: ["부피 1/3로 줄임", "침대 밑 수납 가능", "지퍼 튼튼, 재사용 OK"],
    shortDesc: "옷장 좁은 원룸의 생명줄.",
  },
  {
    id: "air-fryer-mini",
    name: "1인용 미니 에어프라이어 2L",
    category: "appliance",
    tags: ["에어프라이어", "소형가전", "1인가구"],
    price: 39900,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/29cf/7e299d32ca3e6749566a8f3a22ab25a4f080df9138fd75c8cbe0b4ed4d5e.jpg",
    coupangUrl: "https://link.coupang.com/a/et3C96",
    pros: ["좁은 주방에 딱 맞는 사이즈", "예열 없이 3분 만에 조리", "논스틱 바스켓으로 설거지 편함"],
    badge: "BEST",
    shortDesc: "자취생 주방의 주인공.",
  },
  {
    id: "door-lock-alarm",
    name: "문 열림 감지 도어 알람",
    category: "safety",
    tags: ["안전", "자취녀", "보안"],
    price: 8900,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2020/05/16/20/9/3fe6bcb4-9e11-42e1-a0bf-dc955945a1f1.jpg",
    coupangUrl: "https://link.coupang.com/a/et6ioR",
    pros: ["문 열리면 즉시 120dB 경보", "건전지식, 설치 1분", "자취 여성 필수템 1위"],
    shortDesc: "혼자 사는 집, 마음의 평화 8,900원.",
  },
  {
    id: "bed-mattress-topper",
    name: "메모리폼 토퍼 싱글 (원룸형)",
    category: "bedding",
    tags: ["침구", "매트리스", "숙면"],
    price: 49900,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/c8d6/8641bf78ccc19a81a59c95284cc42f21ca6376cb77984c548720b5ac0bad.png",
    coupangUrl: "https://link.coupang.com/a/et6niH",
    pros: ["옵션 매트리스 그대로 숙면 보장", "통기성 좋은 3D 매쉬", "커버 분리 세탁 가능"],
    shortDesc: "옵션 침대 딱딱해서 잠 안 오는 분 주목.",
  },
  {
    id: "kitchen-organizer",
    name: "싱크대 선반 3단 수납장",
    category: "storage",
    tags: ["주방", "수납", "정리"],
    price: 18900,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/image_audit/prod/0ff53d83-824a-4bfe-a109-f1c461ee90e3_fixing_v2.png",
    coupangUrl: "https://link.coupang.com/a/et6lvX",
    pros: ["조립 10분, 공구 필요 없음", "녹 방지 스테인리스", "좁은 싱크대 공간 2배 활용"],
    shortDesc: "주방 수납의 신세계.",
  },
  {
    id: "toilet-paper-comet",
    name: "코멧 순백 3겹 라벤더 바닐라 롤화장지",
    category: "bathroom",
    tags: ["화장지", "욕실", "생필품"],
    price: 15900,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/16425520630042-9dcd32f1-a915-4924-935f-91debbc9dc6d.jpg",
    coupangUrl: "https://link.coupang.com/a/et4WVi",
    pros: [
      "3겹이라 부드럽고 잘 안 찢어짐",
      "라벤더 바닐라 은은한 향",
      "로켓배송으로 무거운 거 안 들어도 됨",
    ],
    badge: "HOT",
    shortDesc: "자취생 생필품 1순위. 로켓배송이 답.",
  },
];

// 카테고리별 필터링
export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

// 태그 기반 추천 (계산기 결과 페이지 매핑용)
export function getProductsByTags(tags: string[], limit = 4): Product[] {
  return products
    .filter((p) => p.tags.some((tag) => tags.includes(tag)))
    .slice(0, limit);
}

// ID로 단일 상품 조회 (CoupangLink 컴포넌트용)
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

// BEST 상품 추천
export function getBestProducts(limit = 6): Product[] {
  return products.filter((p) => p.badge === "BEST" || p.badge === "HOT" || p.badge === "NEW").slice(0, limit);
}

// 계산기 결과 → 추천 상품 매핑 로직
// 지출 유형별로 절약 효과가 큰 상품을 자동 추천
export function getRecommendedBySpending(spending: {
  electricity: number;
  water: number;
  gas: number;
}): Product[] {
  const recs: Product[] = [];
  if (spending.electricity >= 40000)
    recs.push(
      ...products.filter((p) => p.category === "energy-saving").slice(0, 2)
    );
  if (spending.water >= 15000)
    recs.push(
      ...products.filter((p) => p.tags.includes("절수")).slice(0, 1)
    );
  if (spending.gas >= 25000)
    recs.push(
      ...products.filter((p) => p.category === "appliance").slice(0, 1)
    );
  // 기본 추천
  if (recs.length < 4) {
    recs.push(...getBestProducts(4 - recs.length));
  }
  // 중복 제거
  return Array.from(new Map(recs.map((p) => [p.id, p])).values()).slice(0, 4);
}
