import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "자취연구소 개인정보처리방침. 수집하는 개인정보 항목, 이용 목적, 보관 기간, 제3자 제공, 쿠키 정책 안내.",
  alternates: { canonical: `${siteConfig.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <div className="prose prose-sm mx-auto max-w-3xl sm:prose-base">
      <h1>개인정보처리방침</h1>
      <p className="text-sm text-gray-500">시행일: 2026년 4월 22일 | 최종 수정일: 2026년 4월 22일</p>

      <p>
        자취연구소(이하 &quot;사이트&quot;)는 이용자의 개인정보를 중요시하며,
        「개인정보 보호법」 및 관련 법령을 준수합니다.
        본 개인정보처리방침은 사이트가 어떤 정보를 수집하고,
        어떻게 이용·보관·파기하는지를 투명하게 안내하기 위해 작성되었습니다.
      </p>

      <h2>1. 수집하는 개인정보 항목</h2>
      <p>
        본 사이트는 <strong>회원가입을 받지 않으며</strong>, 이용자에게 이름·이메일·전화번호 등
        직접적인 개인정보 입력을 요구하지 않습니다.
        다만 아래 항목이 자동으로 수집될 수 있습니다.
      </p>
      <table>
        <thead>
          <tr>
            <th>수집 경로</th>
            <th>수집 항목</th>
            <th>수집 목적</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google Analytics (GA4)</td>
            <td>접속 IP(익명 처리), 브라우저 종류·버전, 운영체제, 화면 해상도, 페이지 이동 경로, 체류 시간, 유입 경로</td>
            <td>방문 통계 분석 및 사이트 개선</td>
          </tr>
          <tr>
            <td>Google AdSense</td>
            <td>쿠키 식별자, 광고 상호작용 데이터</td>
            <td>맞춤 광고 송출</td>
          </tr>
          <tr>
            <td>서버 로그</td>
            <td>접속 IP, 접속 일시, 요청 URL, HTTP 상태 코드</td>
            <td>보안·오류 대응</td>
          </tr>
        </tbody>
      </table>

      <h2>2. 개인정보의 이용 목적</h2>
      <p>수집된 정보는 다음 목적으로만 이용됩니다.</p>
      <ul>
        <li>사이트 이용 통계 분석 및 콘텐츠 개선</li>
        <li>사이트 운영에 필요한 광고 수익 창출 (Google AdSense)</li>
        <li>서비스 안정성 확보 및 부정 이용 방지</li>
      </ul>
      <p>수집된 정보는 마케팅 목적의 제3자 판매에 절대 이용되지 않습니다.</p>

      <h2>3. 개인정보의 보관 및 파기</h2>
      <table>
        <thead>
          <tr>
            <th>항목</th>
            <th>보관 기간</th>
            <th>파기 방법</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google Analytics 데이터</td>
            <td>14개월 (GA4 기본값)</td>
            <td>보관 기간 경과 시 Google 서버에서 자동 삭제</td>
          </tr>
          <tr>
            <td>서버 로그</td>
            <td>최대 90일</td>
            <td>보관 기간 경과 시 자동 삭제</td>
          </tr>
          <tr>
            <td>AdSense 쿠키</td>
            <td>최대 13개월</td>
            <td>이용자가 브라우저에서 직접 삭제 가능</td>
          </tr>
        </tbody>
      </table>
      <p>
        계산기·체크리스트 등 사이트 내 도구에 입력한 데이터는
        브라우저 로컬 스토리지에만 저장되며, 외부 서버로 전송되지 않습니다.
        브라우저 데이터 삭제 시 즉시 파기됩니다.
      </p>

      <h2>4. 쿠키(Cookie) 정책</h2>
      <p>
        본 사이트는 아래 목적으로 쿠키를 사용합니다.
      </p>
      <table>
        <thead>
          <tr>
            <th>쿠키 유형</th>
            <th>제공자</th>
            <th>목적</th>
            <th>거부 방법</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>분석 쿠키</td>
            <td>Google Analytics</td>
            <td>방문자 통계 수집</td>
            <td><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer">GA 옵트아웃 도구</a></td>
          </tr>
          <tr>
            <td>광고 쿠키</td>
            <td>Google AdSense</td>
            <td>맞춤형 광고 표시</td>
            <td><a href="https://adssettings.google.com" target="_blank" rel="noreferrer">Google 광고 설정</a></td>
          </tr>
        </tbody>
      </table>
      <p>
        이용자는 웹 브라우저 설정에서 쿠키 저장을 거부하거나 삭제할 수 있습니다.
        쿠키를 거부할 경우 일부 서비스 이용에 제한이 있을 수 있습니다.
      </p>
      <h3>브라우저별 쿠키 설정 방법</h3>
      <ul>
        <li>Chrome: 설정 → 개인정보 및 보안 → 쿠키 및 기타 사이트 데이터</li>
        <li>Safari: 환경설정 → 개인 정보 보호 → 쿠키 및 웹 사이트 데이터 관리</li>
        <li>Firefox: 설정 → 개인 정보 및 보안 → 쿠키 및 사이트 데이터</li>
        <li>Edge: 설정 → 쿠키 및 사이트 권한 → 쿠키 및 사이트 데이터 관리 및 삭제</li>
      </ul>

      <h2>5. 제3자 제공</h2>
      <p>
        본 사이트는 이용자의 개인정보를 외부에 판매하거나 제공하지 않습니다.
        다만 아래 서비스 이용 과정에서 해당 서비스 제공자의 개인정보처리방침에 따라 데이터가 처리될 수 있습니다.
      </p>
      <table>
        <thead>
          <tr>
            <th>서비스</th>
            <th>제공자</th>
            <th>처리 항목</th>
            <th>개인정보처리방침</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google Analytics</td>
            <td>Google LLC</td>
            <td>익명화된 접속 통계</td>
            <td><a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google 개인정보처리방침</a></td>
          </tr>
          <tr>
            <td>Google AdSense</td>
            <td>Google LLC</td>
            <td>광고 쿠키, 상호작용 데이터</td>
            <td><a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer">Google 광고 정책</a></td>
          </tr>
          <tr>
            <td>Vercel (호스팅)</td>
            <td>Vercel Inc.</td>
            <td>서버 로그 (IP, 접속 일시)</td>
            <td><a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer">Vercel 개인정보처리방침</a></td>
          </tr>
          <tr>
            <td>쿠팡 파트너스</td>
            <td>쿠팡(주)</td>
            <td>구매 추적 쿠키</td>
            <td><a href="https://privacy.coupang.com" target="_blank" rel="noreferrer">쿠팡 개인정보처리방침</a></td>
          </tr>
        </tbody>
      </table>

      <h2>6. 이용자의 권리</h2>
      <p>이용자는 언제든지 아래 권리를 행사할 수 있습니다.</p>
      <ul>
        <li><strong>쿠키 거부 및 삭제</strong>: 브라우저 설정에서 직접 관리</li>
        <li><strong>Google Analytics 추적 차단</strong>: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer">GA 옵트아웃 브라우저 확장 프로그램</a> 설치</li>
        <li><strong>맞춤 광고 비활성화</strong>: <a href="https://adssettings.google.com" target="_blank" rel="noreferrer">Google 광고 설정</a>에서 변경</li>
        <li><strong>로컬 스토리지 삭제</strong>: 브라우저의 사이트 데이터 삭제 기능 이용</li>
        <li><strong>개인정보 관련 문의</strong>: 아래 연락처로 요청</li>
      </ul>

      <h2>7. 아동의 개인정보 보호</h2>
      <p>
        본 사이트는 만 14세 미만 아동의 개인정보를 의도적으로 수집하지 않습니다.
        만 14세 미만 이용자의 개인정보가 수집된 사실을 인지할 경우 해당 정보를 즉시 삭제합니다.
      </p>

      <h2>8. 개인정보처리방침 변경</h2>
      <p>
        본 방침은 관련 법령 변경이나 사이트 운영 정책 변경에 따라 수정될 수 있습니다.
        변경 시 본 페이지에 즉시 공지하며, 시행일을 상단에 표시합니다.
      </p>

      <h2>9. 개인정보 보호책임자 및 문의</h2>
      <table>
        <thead>
          <tr>
            <th>항목</th>
            <th>내용</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>사이트명</td>
            <td>자취연구소</td>
          </tr>
          <tr>
            <td>운영자</td>
            <td>자취연구소 운영팀</td>
          </tr>
          <tr>
            <td>이메일</td>
            <td><a href="mailto:hello@single-lab.com">hello@single-lab.com</a></td>
          </tr>
        </tbody>
      </table>
      <p>
        개인정보 침해에 대한 상담이 필요하신 경우 아래 기관에 문의하실 수 있습니다.
      </p>
      <ul>
        <li>개인정보침해 신고센터: <a href="https://privacy.kisa.or.kr" target="_blank" rel="noreferrer">privacy.kisa.or.kr</a> (국번없이 118)</li>
        <li>개인정보 분쟁조정위원회: <a href="https://www.kopico.go.kr" target="_blank" rel="noreferrer">www.kopico.go.kr</a> (1833-6972)</li>
        <li>대검찰청 사이버수사과: <a href="https://www.spo.go.kr" target="_blank" rel="noreferrer">www.spo.go.kr</a> (국번없이 1301)</li>
        <li>경찰청 사이버수사국: <a href="https://ecrm.police.go.kr" target="_blank" rel="noreferrer">ecrm.police.go.kr</a> (국번없이 182)</li>
      </ul>
    </div>
  );
}
