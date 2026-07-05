/*
 * 대한특수유 스토어 상품 카탈로그.
 * 별도 이미지 자산 없이도 일관된 룩을 위해 각 상품에 브랜드 계열 그라디언트(color)를 부여한다.
 * price(원) / points(P) 는 포인트 결제 데모용 수치이다.
 */

const B = import.meta.env.BASE_URL;

const products = [
  {
    id: 'silicone-glitter-300',
    name: '플루브 글리터 실라인 300㎖',
    category: '실리콘',
    price: 5850,
    points: 5850,
    unit: '300㎖',
    color: ['#12235e', '#2d4ba3'],
    retail: true,                 // 스마트스토어에서 실제 판매 중인 소매 상품
    storeUrl: '',                 // 스마트스토어 상품 URL (입력 시 구매 버튼 노출)
    image: `${B}images/glitter/Glitter.png`,   // 대표 상품 사진
    desc: '반짝이는 펄감으로 럭셔리한 공간을 연출하는 실내 인테리어 전용 글리터 실리콘 실란트. 곰팡이 방지제를 함유해 항균에 강하고, 누구나 쉽고 간편하게 시공할 수 있습니다.',
    tags: ['항균·곰팡이 방지', '초간단 시공', '반영구 사용', '글리터 인테리어'],
    // 상품정보 — 상세 맨 앞에 표로 표시
    info: [
      { label: '상품번호', value: '11250279073' },
      { label: '제조사',   value: '이누' },
      { label: '브랜드',   value: '모네스페스' },
      { label: '모델명',   value: '플루브 바이오 글리터 실라인 반짝이 펄실리콘 300ml' },
      { label: '원산지',   value: '국산' },
    ],
    // 상세설명 이미지 (스마트스토어 상세페이지). extraFrom 이후는 '추가상품'.
    detailImages: [
      `${B}images/glitter/s1.jpg`,
      `${B}images/glitter/s2.jpg`,
      `${B}images/glitter/s3.jpg`,
      `${B}images/glitter/s4.jpg`,
      `${B}images/glitter/s5.jpg`,
      `${B}images/glitter/s6.jpg`,
      `${B}images/glitter/s7.jpg`,
      `${B}images/glitter/s8.jpg`,
      `${B}images/glitter/s9.jpg`,
      `${B}images/glitter/s10.jpg`,
      `${B}images/glitter/s11.jpg`,
    ],
    extraFrom: 9,   // s10(인덱스 9)부터는 '추가상품' — s9 다음에 구분선 표시
  },
  {
    id: 'brake-fluid-dot3',
    name: '에이원케미칼 브레이크액 0.8L (DOT-3)',
    category: '기타',
    unit: '0.8L',
    color: ['#12235e', '#2d4ba3'],
    retail: true,
    storeUrl: '',
    image: `${B}images/BreakOil/b1.jpg`,   // 대표 상품 사진
    desc: '높은 끓는점과 낮은 증발 특성으로 사용 중에도 높은 안전성을 유지하는 고품질 브레이크액입니다. KS 표준(KS M 2141)에 적합하며, 특수첨가제 함유로 금속·고무 계통을 보호합니다. (DOT-3 규격 · DOT-4 차량에는 사용 불가)',
    tags: ['DOT-3 규격 인증', '낮은 증발성', 'KS M 2141', '금속·고무 보호'],
    info: [
      { label: '상품번호', value: '11296218325' },
      { label: '제조사',   value: '에이원케미칼' },
      { label: '브랜드',   value: '에이원케미칼' },
      { label: '원산지',   value: '국산' },
      { label: '종류',     value: 'DOT3' },
      { label: '오일구분', value: '합성' },
    ],
    detailImages: [
      `${B}images/BreakOil/b1.jpg`,
      `${B}images/BreakOil/b2.jpg`,
    ],
  },
  {
    id: 'tapping-fluid-st501',
    name: '이레산업 스피드탭 탭핑유 450㎖ (ST-501)',
    category: '기타',
    unit: '450㎖',
    color: ['#12235e', '#2d4ba3'],
    retail: true,
    storeUrl: '',
    image: `${B}images/Tapping/tapping.jpg`,   // 대표 상품 사진
    desc: '금속 가공 전 공정에 사용하는 친환경 대체용제 탭핑유입니다. 드릴·탭핑·밀링·보링·리밍·브로칭 등 다양한 금속 가공 작업에서 우수한 윤활·냉각 성능을 제공합니다.',
    tags: ['친환경 대체용제', '드릴·탭핑·밀링', '보링·리밍·브로칭', 'Speed Tap ST-501'],
    info: [
      { label: '상품번호', value: '13418147381' },
      { label: '제조사',   value: '이레산업' },
      { label: '브랜드',   value: '이레산업' },
      { label: '원산지',   value: '국산' },
    ],
    detailImages: [
      `${B}images/Tapping/tapping.jpg`,
      `${B}images/Tapping/tapping2.jpg`,
    ],
  },
  {
    id: 'lub-engine-5w30',
    name: '프리미엄 엔진오일 5W-30',
    category: '윤활유',
    price: 42000,
    points: 42000,
    unit: '4L',
    color: ['#0f1a45', '#2d4ba3'],
    desc: '고온·고부하 환경에서도 안정적인 유막을 유지하는 합성 엔진오일. 승용·상용 가솔린 엔진에 폭넓게 적용됩니다.',
    tags: ['고온 안정성', '저마찰', '장수명'],
  },
  {
    id: 'lub-gear-85w140',
    name: '기어오일 85W-140',
    category: '윤활유',
    price: 38000,
    points: 38000,
    unit: '4L',
    color: ['#21388e', '#4a6bc4'],
    desc: '높은 극압 성능으로 중장비·상용차 기어박스와 차동장치를 보호하는 고점도 기어오일입니다.',
    tags: ['극압 보호', '내마모', '고점도'],
  },
  {
    id: 'lub-hydraulic-46',
    name: '유압작동유 ISO VG46',
    category: '윤활유',
    price: 55000,
    points: 55000,
    unit: '20L',
    color: ['#0f1a45', '#21388e'],
    desc: '산화 안정성과 방청 성능이 우수한 산업용 유압작동유. 각종 유압 장비의 응답성과 수명을 높여줍니다.',
    tags: ['산화 안정', '방청', '산업용'],
  },
  {
    id: 'lub-grease-ep2',
    name: '다목적 리튬 그리스 EP2',
    category: '윤활유',
    price: 18000,
    points: 18000,
    unit: '2.5kg',
    color: ['#e08f00', '#ffab20'],
    desc: '내수성과 극압성이 뛰어난 리튬 베이스 다목적 그리스. 베어링·조인트 등 광범위한 윤활점에 사용합니다.',
    tags: ['내수성', '극압', '다목적'],
  },
  {
    id: 'plast-dop',
    name: '특수 가소제 DOP',
    category: '가소제',
    price: 64000,
    points: 64000,
    unit: '18kg',
    color: ['#2d4ba3', '#4a6bc4'],
    desc: 'PVC 가공에 널리 쓰이는 고순도 범용 가소제. 우수한 상용성과 안정적인 품질을 제공합니다.',
    tags: ['고순도', '상용성', 'PVC'],
  },
  {
    id: 'plast-eco',
    name: '친환경 가소제 (Non-Phthalate)',
    category: '가소제',
    price: 89000,
    points: 89000,
    unit: '18kg',
    color: ['#21388e', '#2d4ba3'],
    desc: '프탈레이트를 배제한 친환경 가소제로, 유아용품·식품 포장재 등 안전 기준이 높은 용도에 적합합니다.',
    tags: ['친환경', '무프탈레이트', '고안전'],
  },
  {
    id: 'special-cutting',
    name: '수용성 절삭유',
    category: '기타',
    price: 47000,
    points: 47000,
    unit: '18L',
    color: ['#0f1a45', '#2d4ba3'],
    desc: '금속 가공 시 냉각·윤활·방청을 동시에 만족시키는 수용성 절삭유. 공구 수명과 가공 정밀도를 높입니다.',
    tags: ['냉각', '방청', '가공정밀'],
  },
  {
    id: 'special-rust',
    name: '방청유 (Rust Preventive)',
    category: '기타',
    price: 33000,
    points: 33000,
    unit: '18L',
    color: ['#e08f00', '#ffc04d'],
    desc: '금속 표면에 얇은 보호막을 형성해 장기 보관·운송 중 부식을 방지하는 방청유입니다.',
    tags: ['부식 방지', '보호막', '장기보관'],
  },
];

export const categories = ['전체', '윤활유', '가소제', '실리콘', '기타'];

export const getProduct = (id) => products.find(p => p.id === id);

export const formatWon = (n) => n.toLocaleString('ko-KR') + '원';

export default products;
