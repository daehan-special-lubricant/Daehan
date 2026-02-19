import React, { useState, useEffect } from 'react';
import { ShoppingBag, Package, Truck, Store, ArrowRight, ChevronDown } from 'lucide-react';
import C from '../colors';

const BASE = import.meta.env.BASE_URL;

const Home = () => {
  const [currentSlide, setCurrentSlide]       = useState(0);
  const [isHoveringSlider, setIsHoveringSlider] = useState(false);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const heroSlides = [
    { title: 'SINCE 1999', subtitle: '26년의 신뢰, 대한특수유', desc: '품질과 전문성으로 산업 현장을 지원합니다', bgImage: `${BASE}images/slide1.jpg` },
    { title: 'PROFESSIONAL DISTRIBUTION', subtitle: '기업부터 개인까지', desc: '도매·소매 모두 가능한 윤활유 전문 유통', bgImage: `${BASE}images/slide2.jpg` },
    { title: 'ONLINE STORE', subtitle: '언제 어디서나 간편하게', desc: '네이버 스마트스토어에서 바로 구매하세요', bgImage: `${BASE}images/slide3.jpg` },
  ];

  const sectionTitle = (eng, kor) => (
    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
      <div style={{ fontSize: '13px', fontWeight: '700', color: C.gold, marginBottom: '14px', letterSpacing: '3px' }}>{eng}</div>
      <h2 style={{ fontSize: '40px', fontWeight: '700', letterSpacing: '-1px', color: C.textMain }}>{kor}</h2>
    </div>
  );

  return (
    <>
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
          }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${slide.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.04' stroke-width='1'%3E%3Cline x1='0' y1='40' x2='80' y2='40'/%3E%3Cline x1='40' y1='0' x2='40' y2='80'/%3E%3Ccircle cx='40' cy='40' r='20'/%3E%3C/g%3E%3C/svg%3E")`, opacity: 0.7 }} />
            <div style={{ position: 'relative', zIndex: 10, color: C.white, textAlign: 'left', maxWidth: '1400px', width: '100%', padding: '0 60px', textShadow: '0 2px 12px rgba(0,0,0,0.45)', top: '50%', transform: 'translateY(-50%)', margin: '0 auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{ width: '40px', height: '2px', background: C.gold }} />
                <span style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '3px', color: C.goldLight, textTransform: 'uppercase' }}>{slide.title}</span>
              </div>
              <h1 style={{ fontSize: '54px', fontWeight: '700', marginBottom: '18px', lineHeight: '1.15', letterSpacing: '-1.5px' }}>{slide.subtitle}</h1>
              <p style={{ fontSize: '19px', fontWeight: '300', opacity: 0.88, marginBottom: '40px', maxWidth: '520px' }}>{slide.desc}</p>
              {idx === 2 && (
                <button style={{ background: C.gold, color: C.navyDark, border: 'none', padding: '15px 34px', fontSize: '15px', fontWeight: '700', borderRadius: '5px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'all 0.3s', boxShadow: '0 4px 14px rgba(255,171,32,0.35)', textShadow: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.goldLight; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = C.gold; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  네이버 스토어 바로가기 <ArrowRight size={17} />
                </button>
              )}
            </div>
          </div>
        ))}

        <div style={{ position: 'absolute', bottom: '44px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px', zIndex: 20 }}>
          {heroSlides.map((_, idx) => (
            <button key={idx} onClick={() => setCurrentSlide(idx)} style={{ width: currentSlide === idx ? '36px' : '10px', height: '3px', background: currentSlide === idx ? C.gold : 'rgba(255,255,255,0.4)', border: 'none', cursor: 'pointer', transition: 'all 0.35s', borderRadius: '2px' }} />
          ))}
        </div>

        {[{ dir: -1, rot: '90deg' }, { dir: 1, rot: '-90deg' }].map((btn, i) => (
          <button key={i}
            onClick={() => setCurrentSlide(prev => btn.dir === -1 ? (prev === 0 ? 2 : prev - 1) : (prev === 2 ? 0 : prev + 1))}
            style={{ position: 'absolute', [i === 0 ? 'left' : 'right']: '24px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(33,56,142,0.35)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)', width: '52px', height: '52px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 20, opacity: isHoveringSlider ? 1 : 0, transition: 'all 0.3s', color: C.white }}
          >
            <ChevronDown size={24} style={{ transform: `rotate(${btn.rot})` }} />
          </button>
        ))}
      </section>

      {/* ═══ 도소매 서비스 ═══ */}
      <section style={{ padding: '110px 40px', background: C.sectionBg }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {sectionTitle('DISTRIBUTION SERVICE', '도소매 유통 서비스')}
          <p style={{ textAlign: 'center', fontSize: '16px', color: C.textSub, marginTop: '-48px', marginBottom: '60px', lineHeight: '1.7' }}>전문적이고 신뢰할 수 있는 윤활유 도소매 유통 네트워크</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '28px' }}>
            {[
              { icon: <Package size={40} />,     title: '도매 공급',          desc: '대량 구매를 위한 전문 도매 서비스',  features: ['경쟁력 있는 가격', '안정적 공급망', '맞춤 계약 가능'] },
              { icon: <ShoppingBag size={40} />, title: '소매 판매',          desc: '개인 및 소규모 사업자 대상',         features: ['소량 구매 가능', '빠른 배송', '전문 상담'] },
              { icon: <Store size={40} />,       title: '네이버 스마트스토어', desc: '온라인으로 간편하게 구매',           features: ['24시간 주문', '안전결제', '포인트 적립'] },
              { icon: <Truck size={40} />,       title: '전국 배송',          desc: '신속하고 안전한 물류 시스템',        features: ['당일 출고', '전국 배송', '안전 포장'] },
            ].map((svc, idx) => (
              <div key={idx} style={{ background: C.white, borderRadius: '10px', padding: '38px 30px', transition: 'all 0.3s', cursor: 'pointer', border: `1px solid #d4daf0`, position: 'relative', overflow: 'hidden' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 14px 36px rgba(33,56,142,0.1)'; e.currentTarget.style.borderColor = C.navy; e.currentTarget.querySelector('.svc-bar').style.height = '100%'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#d4daf0'; e.currentTarget.querySelector('.svc-bar').style.height = '0%'; }}
              >
                <div className="svc-bar" style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '0%', background: `linear-gradient(to bottom, ${C.navyMid})`, transition: 'height 0.4s ease' }} />
                <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: `linear-gradient(135deg, ${C.goldPale}, #ffe8c2)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.navy, marginBottom: '22px' }}>{svc.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px', color: C.textMain }}>{svc.title}</h3>
                <p style={{ fontSize: '14px', color: C.textSub, lineHeight: '1.6', marginBottom: '18px' }}>{svc.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  {svc.features.map((f, fi) => (
                    <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '14px', color: C.textSub }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: C.gold, flexShrink: 0 }} />{f}
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
              { title: '산업용 윤활유', desc: '다양한 산업 환경에 최적화된 고성능 윤활유', tags: ['고온 안정성', '저마찰', '장수명'] },
              { title: '특수 가소제',  desc: '플라스틱 산업을 위한 고품질 가소제',       tags: ['환경 친화적', '고순도', '안정적 품질'] },
              { title: '맞춤형 제품',  desc: '고객 요구사항에 맞춘 특수 화학제품',       tags: ['맞춤 개발', '기술 지원', '품질 보증'] },
            ].map((prod, idx) => (
              <div key={idx} style={{ background: `linear-gradient(140deg, ${C.navyDark} 0%, ${C.navy} 55%, ${C.navyMid} 100%)`, borderRadius: '10px', padding: '48px 36px', color: C.white, minHeight: '290px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer', transition: 'transform 0.3s, box-shadow 0.3s', position: 'relative', overflow: 'hidden' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(33,56,142,0.25)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '120px', height: '120px', borderRadius: '50%', background: `radial-gradient(circle, rgba(255,171,32,0.18) 0%, transparent 70%)` }} />
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ fontSize: '48px', fontWeight: '800', opacity: 0.06, position: 'absolute', top: '-6px', right: '0' }}>{String(idx + 1).padStart(2, '0')}</div>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '14px' }}>{prod.title}</h3>
                  <p style={{ fontSize: '15px', lineHeight: '1.7', opacity: 0.85 }}>{prod.desc}</p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', position: 'relative', zIndex: 2 }}>
                  {prod.tags.map((tag, ti) => (
                    <span key={ti} style={{ padding: '6px 15px', background: 'rgba(255,171,32,0.18)', border: `1px solid ${C.gold}`, color: C.goldLight, borderRadius: '20px', fontSize: '13px', fontWeight: '600' }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 기업 정보 ═══ */}
      <section style={{ padding: '110px 40px', background: C.sectionBg }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {sectionTitle('COMPANY INFO', '기업 정보')}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '22px' }}>
            {[
              { label: '회사명',        value: '대한특수유',        sub: 'COMPANY' },
              { label: '대표이사',      value: '김은정',            sub: 'CEO' },
              { label: '사업자등록번호', value: '341-31-01582',      sub: 'BUSINESS NO.' },
              { label: '업종',          value: '윤활유 도소매·제조', sub: 'BUSINESS TYPE' },
            ].map((info, idx) => (
              <div key={idx} style={{ background: C.white, padding: '36px 24px', borderRadius: '10px', textAlign: 'center', border: '1px solid #d4daf0', transition: 'all 0.3s', position: 'relative', overflow: 'hidden' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.navy; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(33,56,142,0.1)'; e.currentTarget.querySelector('.info-top').style.background = C.navy; e.currentTarget.querySelector('.info-label').style.color = C.navy; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#d4daf0'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.querySelector('.info-top').style.background = C.gold; e.currentTarget.querySelector('.info-label').style.color = C.gold; }}
              >
                <div className="info-top" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: C.gold, transition: 'background 0.3s' }} />
                <div style={{ fontSize: '11px', color: C.textLight, marginBottom: '10px', fontWeight: '600', letterSpacing: '1.5px' }}>{info.sub}</div>
                <div className="info-label" style={{ fontSize: '13px', color: C.gold, marginBottom: '8px', fontWeight: '600', transition: 'color 0.3s' }}>{info.label}</div>
                <div style={{ fontSize: '19px', fontWeight: '700', color: C.textMain }}>{info.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;