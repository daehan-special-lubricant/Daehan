/*
 * 대한특수유 대표색(네이비 + 골드) 팔레트.
 * S-OIL 스타일 레이아웃을 유지하되 색만 브랜드 컬러로 매핑한다.
 * 신규 코드가 쓰는 시맨틱 키(green/yellow/sky…)도 네이비/골드 값으로 연결.
 */

// 브랜드 원색
const navyDark  = '#0f1a45';
const navy      = '#21388e';   // 메인
const navyMid   = '#2d4ba3';
const navyLight = '#4a6bc4';

const goldDark  = '#e08f00';
const gold      = '#ffab20';   // 포인트
const goldLight = '#ffc04d';
const goldPale  = '#fff4e0';

const navyPale  = '#eef1f8';

const C = {
  // ── 시맨틱 키 → 브랜드색 매핑 (신규 코드 호환) ──
  green: navy,   greenDark: navyDark, greenMid: navyMid, greenLight: navyLight, greenPale: navyPale,
  yellow: gold,  yellowDark: goldDark, yellowLight: goldLight, yellowPale: goldPale,
  sky: navyLight, skyLight: '#cdd6ee', skyPale: navyPale,

  // ── 레거시 키 ──
  navyDark, navy, navyMid, navyLight,
  goldDark, gold, goldLight, goldPale,
  sectionBg: navyPale,

  // ── 공통 ──
  textMain:  '#121a30',
  textSub:   '#4a5574',
  textLight: '#7a86a0',
  border:    '#d8deef',
  white:     '#FFFFFF',
};

export default C;
