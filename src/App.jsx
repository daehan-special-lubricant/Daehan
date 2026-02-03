import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone, Mail, MapPin, Search, Globe, ShoppingBag, Package, Truck, Store, ArrowRight } from 'lucide-react';

/* ─── 색상 토큰 ─── */
const C = {
  navyDark:   '#0F2137',   // 푸터, 가장 진한 남색
  navy:       '#1B3A5F',   // 메인 남색
  navyMid:    '#2C5282',   // 그래디언트 중간
  navyLight:  '#3B7DD8',   // 호버 링크
  goldDark:   '#D4A017',   // 골드 – 메인 어센트
  gold:       '#E8C547',   // 버튼, 강조
  goldLight:  '#F0D76B',   // 히어로 소제목, 태그 강조
  goldPale:   '#FFF8E1',   // 섹션 배경 강조
  sectionBg:  '#F0F3F7',   // 약간 남색 기미 회색
  textMain:   '#1a2636',   // 메인 텍스트
  textSub:    '#5a6a7a',   // 부분 텍스트
  textLight:  '#8898a8',   // 연한 텍스트
  white:      '#FFFFFF',
};

const DaehanSpecialtyOil = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHoveringSlider, setIsHoveringSlider] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(slideInterval);
    };
  }, []);

  const menuItems = [
    { title: 'Company',      items: ['비전', 'CEO 인사말', '연혁', '오시는 길', 'CI/BI'] },
    { title: 'Business',     items: ['윤활유', '가소제', '특수제품', '도소매 서비스'] },
    { title: 'Sustainability', items: ['환경경영', '안전보건', '사회공헌', '윤리경영'] },
    { title: 'Relation',     items: ['공지사항', '보도자료', '네이버 스토어', '고객문의'] },
  ];

  const heroSlides = [
    { title: 'New Quantum Leap',          subtitle: '어떤 내용을 작성할까요',  desc: '한 차원 높은 비전을 실현합니다',  bgImage: '/images/slide1.jpg' },
    { title: 'Professional Distribution', subtitle: '전문 윤활유 도소매 유통',   desc: '신뢰할 수 있는 파트너',            bgImage: '/images/slide2.jpg' },
    { title: 'Online Shopping',           subtitle: '네이버 스마트스토어',        desc: '언제 어디서나 편리하게',            bgImage: '/images/slide3.jpg' },
  ];

  /* ─── 공통 스타일 헬퍼 ─── */
  const sectionTitle = (eng, kor) => (
    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
      <div style={{ fontSize: '13px', fontWeight: '700', color: C.gold, marginBottom: '14px', letterSpacing: '3px' }}>{eng}</div>
      <h2 style={{ fontSize: '40px', fontWeight: '700', letterSpacing: '-1px', color: C.textMain }}>{kor}</h2>
    </div>
  );

  return (
    <div style={{ fontFamily: "'Noto Sans KR', sans-serif", margin: 0, padding: 0, color: C.textMain, overflowX: 'hidden' }}>

      {/* ═══ HEADER ═══ */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(255,255,255,0.93)' : C.white,
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
                transition: 'all 0.35s',
        boxShadow: scrolled ? '0 2px 16px rgba(15,33,55,0.08)' : 'none',
      }}>
        <nav style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>

          {/* 로고 */}
          <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/images/logo.png" alt="대한특수유 로고" style={{ height: '120px', width: 'auto' }} />
          </a>

          {/* 메인 네비 */}
          <div style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
            {menuItems.map((menu, idx) => (
              <div key={idx} style={{ position: 'relative' }} onMouseEnter={() => setActiveMenu(idx)} onMouseLeave={() => setActiveMenu(null)}>
                <button style={{
                  background: 'none', border: 'none', fontSize: '15px', fontWeight: '600',
                  color: activeMenu === idx ? C.navy : C.textMain,
                  cursor: 'pointer', padding: '28px 0', letterSpacing: '-0.2px',
                  transition: 'color 0.25s',
                }}>
                  {menu.title}
                </button>

                {/* 서브메뉴 */}
                {activeMenu === idx && (
                  <div style={{
                    position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                    background: C.white, boxShadow: '0 8px 28px rgba(15,33,55,0.12)',
                    padding: '12px 0', minWidth: '200px',
                    borderTop: `3px solid ${C.gold}`,
                    borderRadius: '0 0 6px 6px',
                    animation: 'slideDown 0.25s ease',
                  }}>
                    {menu.items.map((item, i) => (
                      <div key={i} style={{ padding: '11px 24px', cursor: 'pointer', fontSize: '14px', color: C.textSub, fontWeight: '500', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = C.goldPale; e.currentTarget.style.color = C.navy; e.currentTarget.style.paddingLeft = '30px'; }}
                        onMouseLeave={(e)  => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.textSub; e.currentTarget.style.paddingLeft = '24px'; }}
                      >
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: C.gold, flexShrink: 0 }} />
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 우측 아이콘 */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', borderRadius: '6px', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = C.sectionBg}
              onMouseLeave={e => e.currentTarget.style.background = 'none'}>
              <Search size={21} color={C.textSub} />
            </button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', borderRadius: '6px', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = C.sectionBg}
              onMouseLeave={e => e.currentTarget.style.background = 'none'}>
              <Menu size={21} color={C.textSub} />
            </button>
          </div>
        </nav>
      </header>

      {/* ═══ HERO ═══ */}
      <section style={{ height: '600px', position: 'relative', overflow: 'hidden', marginTop: '80px' }}
        onMouseEnter={() => setIsHoveringSlider(true)}
        onMouseLeave={() => setIsHoveringSlider(false)}
      >
        {heroSlides.map((slide, idx) => (
          <div key={idx} style={{
            position: 'absolute', inset: 0,
            opacity: currentSlide === idx ? 1 : 0,
            transition: 'opacity 1.1s ease-in-out',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {/* 배경 이미지 */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
            }} />

            {/* 기하학적 패턴 오버레이 */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.04' stroke-width='1'%3E%3Cline x1='0' y1='40' x2='80' y2='40'/%3E%3Cline x1='40' y1='0' x2='40' y2='80'/%3E%3Ccircle cx='40' cy='40' r='20'/%3E%3C/g%3E%3C/svg%3E")`,
              opacity: 0.7,
            }} />

            {/* 컨텐츠 */}
            <div style={{ position: 'relative', zIndex: 10, color: C.white, textAlign: 'left', maxWidth: '1400px', width: '100%', padding: '0 60px', textShadow: '0 2px 12px rgba(0,0,0,0.45)' }}>
              {/* 소제목 – 골드 라인 + 텍스트 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{ width: '40px', height: '2px', background: C.gold }} />
                <span style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '3px', color: C.goldLight, textTransform: 'uppercase' }}>{slide.title}</span>
              </div>
              <h1 style={{ fontSize: '54px', fontWeight: '700', marginBottom: '18px', lineHeight: '1.15', letterSpacing: '-1.5px' }}>{slide.subtitle}</h1>
              <p style={{ fontSize: '19px', fontWeight: '300', opacity: 0.88, marginBottom: '40px', maxWidth: '520px' }}>{slide.desc}</p>

              {idx === 2 && (
                <button style={{
                  background: C.gold, color: C.navyDark, border: 'none',
                  padding: '15px 34px', fontSize: '15px', fontWeight: '700',
                  borderRadius: '5px', cursor: 'pointer',
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  transition: 'all 0.3s', boxShadow: '0 4px 14px rgba(232,197,71,0.35)',
                  textShadow: 'none',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.goldLight; e.currentTarget.style.boxShadow = '0 6px 20px rgba(232,197,71,0.45)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = C.gold;      e.currentTarget.style.boxShadow = '0 4px 14px rgba(232,197,71,0.35)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  네이버 스토어 바로가기 <ArrowRight size={17} />
                </button>
              )}
            </div>
          </div>
        ))}

        {/* 슬라이드 닷 컨트롤 */}
        <div style={{ position: 'absolute', bottom: '44px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px', zIndex: 20 }}>
          {heroSlides.map((_, idx) => (
            <button key={idx} onClick={() => setCurrentSlide(idx)} style={{
              width: currentSlide === idx ? '36px' : '10px', height: '3px',
              background: currentSlide === idx ? C.gold : 'rgba(255,255,255,0.4)',
              border: 'none', cursor: 'pointer', transition: 'all 0.35s', borderRadius: '2px',
            }} />
          ))}
        </div>

        {/* 이전/다음 버튼 */}
        {[{ dir: -1, side: '24px', rot: '90deg' }, { dir: 1, side: 'auto', rot: '-90deg' }].map((btn, i) => (
          <button key={i}
            onClick={() => setCurrentSlide(prev => btn.dir === -1 ? (prev === 0 ? heroSlides.length - 1 : prev - 1) : (prev === heroSlides.length - 1 ? 0 : prev + 1))}
            onMouseEnter={() => setIsHoveringSlider(true)}
            onMouseLeave={() => setIsHoveringSlider(false)}
            style={{
              position: 'absolute', [i === 0 ? 'left' : 'right']: '24px', top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(15,33,55,0.35)', backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.2)',
              width: '52px', height: '52px', borderRadius: '50%',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 20, opacity: isHoveringSlider ? 1 : 0, transition: 'all 0.3s', color: C.white,
            }}
            onMouseEnterCapture={e => e.currentTarget.style.background = 'rgba(27,58,95,0.6)'}
            onMouseLeaveCapture={e => e.currentTarget.style.background = 'rgba(15,33,55,0.35)'}
          >
            <ChevronDown size={24} style={{ transform: `rotate(${btn.rot})` }} />
          </button>
        ))}
      </section>

      {/* ═══ 도소매 서비스 ═══ */}
      <section style={{ padding: '110px 40px', background: C.sectionBg }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {sectionTitle('DISTRIBUTION SERVICE', '도소매 유통 서비스')}
          <p style={{ textAlign: 'center', fontSize: '16px', color: C.textSub, marginTop: '-48px', marginBottom: '60px', lineHeight: '1.7' }}>
            전문적이고 신뢰할 수 있는 윤활유 도소매 유통 네트워크
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '28px' }}>
            {[
              { icon: <Package size={40} />,      title: '도매 공급',              desc: '대량 구매를 위한 전문 도매 서비스',       features: ['경쟁력 있는 가격', '안정적 공급망', '맞춤 계약 가능'] },
              { icon: <ShoppingBag size={40} />,  title: '소매 판매',              desc: '개인 및 소규모 사업자 대상',             features: ['소량 구매 가능', '빠른 배송', '전문 상담'] },
              { icon: <Store size={40} />,        title: '네이버 스마트스토어',     desc: '온라인으로 간편하게 구매',             features: ['24시간 주문', '안전결제', '포인트 적립'] },
              { icon: <Truck size={40} />,        title: '전국 배송',              desc: '신속하고 안전한 물류 시스템',           features: ['당일 출고', '전국 배송', '안전 포장'] },
            ].map((svc, idx) => (
              <div key={idx} style={{
                background: C.white, borderRadius: '10px', padding: '38px 30px',
                transition: 'all 0.3s', cursor: 'pointer',
                border: `1px solid #dce5ee`,
                position: 'relative', overflow: 'hidden',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 14px 36px rgba(15,33,55,0.1)'; e.currentTarget.style.borderColor = C.navy; e.currentTarget.querySelector('.svc-bar').style.height = '100%'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)';  e.currentTarget.style.boxShadow = 'none';                                e.currentTarget.style.borderColor = '#dce5ee'; e.currentTarget.querySelector('.svc-bar').style.height = '0%'; }}
              >
                {/* 좌측 골드 바 */}
                <div className="svc-bar" style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '0%', background: `linear-gradient(to bottom, ${C.navyMid})`, transition: 'height 0.4s ease' }} />

                {/* 아이콘 원 배경 */}
                <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: `linear-gradient(135deg, ${C.goldPale}, #fff3cc)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.navy, marginBottom: '22px' }}>
                  {svc.icon}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px', color: C.textMain }}>{svc.title}</h3>
                <p style={{ fontSize: '14px', color: C.textSub, lineHeight: '1.6', marginBottom: '18px' }}>{svc.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  {svc.features.map((f, fi) => (
                    <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '14px', color: C.textSub }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: C.gold, flexShrink: 0 }} />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 제품 ═══ */}
      <section style={{ padding: '110px 40px', background: C.white }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {sectionTitle('PRODUCTS', '주요 제품')}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
            {[
              { title: '산업용 윤활유',  desc: '다양한 산업 환경에 최적화된 고성능 윤활유', tags: ['고온 안정성', '저마찰', '장수명'] },
              { title: '특수 가소제',   desc: '플라스틱 산업을 위한 고품질 가소제',       tags: ['환경 친화적', '고순도', '안정적 품질'] },
              { title: '맞춤형 제품',   desc: '고객 요구사항에 맞춘 특수 화학제품',       tags: ['맞춤 개발', '기술 지원', '품질 보증'] },
            ].map((prod, idx) => (
              <div key={idx} style={{
                background: `linear-gradient(140deg, ${C.navyDark} 0%, ${C.navy} 55%, ${C.navyMid} 100%)`,
                borderRadius: '10px', padding: '48px 36px', color: C.white,
                minHeight: '290px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                cursor: 'pointer', transition: 'transform 0.3s, box-shadow 0.3s',
                position: 'relative', overflow: 'hidden',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(15,33,55,0.25)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)';  e.currentTarget.style.boxShadow = 'none'; }}
              >
                {/* 우측 상단 골드 원 장식 */}
                <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '120px', height: '120px', borderRadius: '50%', background: `radial-gradient(circle, rgba(232,197,71,0.18) 0%, transparent 70%)` }} />
                <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '90px', height: '90px', borderRadius: '50%', background: `radial-gradient(circle, rgba(232,197,71,0.1) 0%, transparent 70%)` }} />

                <div style={{ position: 'relative', zIndex: 2 }}>
                  {/* 카드 번호 */}
                  <div style={{ fontSize: '48px', fontWeight: '800', opacity: 0.06, position: 'absolute', top: '-6px', right: '0' }}>{String(idx + 1).padStart(2, '0')}</div>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '14px' }}>{prod.title}</h3>
                  <p style={{ fontSize: '15px', lineHeight: '1.7', opacity: 0.85 }}>{prod.desc}</p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', position: 'relative', zIndex: 2 }}>
                  {prod.tags.map((tag, ti) => (
                    <span key={ti} style={{
                      padding: '6px 15px',
                      background: 'rgba(232,197,71,0.18)',
                      border: `1px solid ${C.gold}`,
                      color: C.goldLight,
                      borderRadius: '20px', fontSize: '13px', fontWeight: '600',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 회사 정보 ═══ */}
      <section style={{ padding: '110px 40px', background: C.sectionBg }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {sectionTitle('COMPANY INFO', '기업 정보')}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '22px' }}>
            {[
              { label: '회사명',          value: '대한특수유',     sub: 'COMPANY' },
              { label: '대표이사',        value: '김은정',         sub: 'CEO' },
              { label: '사업자등록번호',   value: '341-31-01582',  sub: 'BUSINESS NO.' },
              { label: '업종',            value: '윤활유 도소매·제조', sub: 'BUSINESS TYPE' },
            ].map((info, idx) => (
              <div key={idx} style={{
                background: C.white, padding: '36px 24px', borderRadius: '10px',
                textAlign: 'center', border: '1px solid #dce5ee', transition: 'all 0.3s',
                position: 'relative', overflow: 'hidden',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.navy; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(15,33,55,0.1)'; e.currentTarget.querySelector('.info-top').style.background = C.navy; e.currentTarget.querySelector('.info-label').style.color = C.navy; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#dce5ee'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.querySelector('.info-top').style.background = C.gold; e.currentTarget.querySelector('.info-label').style.color = C.gold; }}
              >
                {/* 상단 라인 */}
                <div className="info-top" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: C.gold, transition: 'background 0.3s' }} />

                <div style={{ fontSize: '11px', color: C.textLight, marginBottom: '10px', fontWeight: '600', letterSpacing: '1.5px' }}>{info.sub}</div>
                <div className="info-label" style={{ fontSize: '13px', color: C.gold, marginBottom: '8px', fontWeight: '600', transition: 'color 0.3s' }}>{info.label}</div>
                <div style={{ fontSize: '19px', fontWeight: '700', color: C.textMain }}>{info.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section style={{ padding: '110px 40px', background: C.white }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {sectionTitle('CONTACT US', '문의하기')}
          <p style={{ textAlign: 'center', fontSize: '16px', color: C.textSub, marginTop: '-48px', marginBottom: '60px' }}>언제든지 편하게 연락 주시기 바랍니다</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {[
              { icon: <MapPin size={30} />,  title: '주소',   content: '전북특별자치도 익산시 인북로 334\n108동 701호 (익산 금호어울림)' },
              { icon: <Phone size={30} />,   title: '전화',   content: '문의: 1588-3819\n평일 09:00 – 18:00' },
              { icon: <Mail size={30} />,    title: '이메일', content: 'info@daehanspecialty.co.kr\n24시간 접수 가능' },
            ].map((con, idx) => (
              <div key={idx} style={{
                textAlign: 'center', padding: '40px 28px',
                background: C.sectionBg, borderRadius: '10px',
                border: '1px solid #dce5ee', transition: 'all 0.35s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = C.navy;
                  e.currentTarget.style.borderColor = C.navy;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(15,33,55,0.2)';
                  e.currentTarget.querySelector('.con-icon').style.background = 'rgba(232,197,71,0.2)';
                  e.currentTarget.querySelector('.con-icon').style.color = C.gold;
                  e.currentTarget.querySelector('.con-title').style.color = C.white;
                  e.currentTarget.querySelector('.con-text').style.color = 'rgba(255,255,255,0.8)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = C.sectionBg;
                  e.currentTarget.style.borderColor = '#dce5ee';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.querySelector('.con-icon').style.background = C.goldPale;
                  e.currentTarget.querySelector('.con-icon').style.color = C.navy;
                  e.currentTarget.querySelector('.con-title').style.color = C.textMain;
                  e.currentTarget.querySelector('.con-text').style.color = C.textSub;
                }}
              >
                <div className="con-icon" style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  background: C.goldPale, color: C.navy,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px', transition: 'all 0.35s',
                }}>
                  {con.icon}
                </div>
                <h3 className="con-title" style={{ fontSize: '18px', marginBottom: '12px', fontWeight: '700', color: C.textMain, transition: 'color 0.35s' }}>{con.title}</h3>
                <p className="con-text" style={{ color: C.textSub, lineHeight: '1.9', whiteSpace: 'pre-line', fontSize: '14px', transition: 'color 0.35s' }}>{con.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ background: C.navyDark, color: C.textLight, padding: '70px 40px 36px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '48px', marginBottom: '48px' }}>

            {/* 회사 정보 블록 */}
            <div>
              <div style={{ fontSize: '22px', fontWeight: '700', color: C.white, marginBottom: '6px', letterSpacing: '-0.3px' }}>대한특수유</div>
              <div style={{ width: '36px', height: '2px', background: C.gold, marginBottom: '20px' }} />
              <p style={{ lineHeight: '2', fontSize: '14px' }}>
                사업자등록번호: 341-31-01582<br />
                대표이사: 김은정<br />
                업종: 윤활유 도소매·제조
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ color: C.white, marginBottom: '6px', fontSize: '15px', fontWeight: '600' }}>Quick Links</h4>
              <div style={{ width: '36px', height: '2px', background: C.gold, marginBottom: '18px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['회사 소개', '제품 안내', '도소매 문의', '네이버 스토어'].map((link, i) => (
                  <a key={i} href="#" style={{ color: C.textLight, textDecoration: 'none', fontSize: '14px', transition: 'color 0.25s', display: 'flex', alignItems: 'center', gap: '8px' }}
                    onMouseEnter={e => e.currentTarget.style.color = C.gold}
                    onMouseLeave={e => e.currentTarget.style.color = C.textLight}
                  >
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: C.gold }} />
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* 연락처 */}
            <div>
              <h4 style={{ color: C.white, marginBottom: '6px', fontSize: '15px', fontWeight: '600' }}>Contact</h4>
              <div style={{ width: '36px', height: '2px', background: C.gold, marginBottom: '18px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { icon: <Phone size={15} />, text: '1588-3819' },
                  { icon: <Mail size={15} />,  text: 'info@daehanspecialty.co.kr' },
                  { icon: <MapPin size={15} />, text: '익산시 인북로 334' },
                ].map((c, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: C.textLight }}>
                    <span style={{ color: C.gold }}>{c.icon}</span> {c.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 하단 구분선 + 저작권 */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <span style={{ fontSize: '13px' }}>© 2026 대한특수유. All rights reserved.</span>
            <span style={{ fontSize: '13px', color: C.gold }}>DAEHAN SPECIALTY OIL</span>
          </div>
        </div>
      </footer>

      {/* ═══ GLOBAL STYLES ═══ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }

        @keyframes slideDown {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0);    }
        }

        @media (max-width: 768px) {
          nav > div:nth-child(2) { display: none !important; }
          h1 { font-size: 34px !important; }
          h2 { font-size: 30px !important; }
        }
      `}</style>
    </div>
  );
};

export default DaehanSpecialtyOil;