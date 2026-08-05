import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Store, Droplet, FlaskConical, Sparkles, Bell, MessageSquare, MapPin, ArrowRight, Package, ShoppingBag, Truck } from 'lucide-react';
import ProductThumb from '../components/ProductThumb';
import products from '../data/products';
import C from '../colors';

const BASE = import.meta.env.BASE_URL;

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setInterval(() => setCurrentSlide(p => (p + 1) % 2), 5000);
    return () => clearInterval(t);
  }, []);

  const heroSlides = [
    { tag: '1999년 창립', title: '26년의 신뢰,\n대한특수유', desc: '품질과 전문성으로 산업 현장을 지원합니다', bg: `${BASE}images/slide1.jpg`, cta: null },
    { tag: '제품 안내', title: '현장을 위한\n특수유 전문 제품', desc: '윤활유·가소제·실리콘 등 다양한 제품을 한눈에 확인하세요', bg: `${BASE}images/slide2.jpg`, cta: { label: '제품 보러가기', to: '/shop' } },
  ];

  const quickMenu = [
    { icon: <Store size={26} />,        label: '전체 제품',   to: '/shop' },
    { icon: <Droplet size={26} />,      label: '윤활유',      to: '/shop?cat=윤활유' },
    { icon: <FlaskConical size={26} />, label: '가소제',      to: '/shop?cat=가소제' },
    { icon: <Sparkles size={26} />,     label: '실리콘',      to: '/shop?cat=실리콘' },
    { icon: <Bell size={26} />,         label: '공지사항',    to: '/notice' },
    { icon: <MessageSquare size={26} />, label: '고객문의',   to: '/contact' },
    { icon: <MapPin size={26} />,       label: '오시는 길',   to: '/location' },
  ];

  const sectionHead = (kor, sub) => (
    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
      <div style={{ width: '30px', height: '3px', borderRadius: '2px', background: C.navy, margin: '0 auto 16px' }} />
      <h2 style={{ fontSize: '34px', fontWeight: '800', letterSpacing: '-1px', color: C.textMain }}>{kor}</h2>
      {sub && <p style={{ fontSize: '15px', color: C.textSub, marginTop: '14px' }}>{sub}</p>}
    </div>
  );

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section style={{ height: '680px', position: 'relative', overflow: 'hidden', marginTop: '82px' }}>
        {heroSlides.map((s, idx) => (
          <div key={idx} style={{ position: 'absolute', inset: 0, opacity: currentSlide === idx ? 1 : 0, transition: 'opacity 0.9s ease-in-out', pointerEvents: currentSlide === idx ? 'auto' : 'none' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${s.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div style={{ position: 'relative', maxWidth: '1400px', width: '100%', padding: '0 60px', margin: '0 auto', top: '50%', transform: 'translateY(-50%)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: C.gold, padding: '7px 16px', borderRadius: '30px', marginBottom: '22px' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: C.navyDark }} />
                <span style={{ fontSize: '13px', fontWeight: '700', color: C.navyDark, letterSpacing: '1px' }}>{s.tag}</span>
              </div>
              <h1 style={{ fontSize: '50px', fontWeight: '800', color: C.white, lineHeight: '1.18', letterSpacing: '-1.5px', marginBottom: '18px', whiteSpace: 'pre-line', textShadow: '0 2px 12px rgba(0,0,0,0.35)' }}>{s.title}</h1>
              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.92)', marginBottom: '32px', maxWidth: '480px', textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}>{s.desc}</p>
              {s.cta && (
                <button onClick={() => navigate(s.cta.to)} className="hero-cta" style={{ background: C.green, color: C.white, border: 'none', padding: '15px 32px', fontSize: '15px', fontWeight: '700', borderRadius: '30px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '9px', fontFamily: 'inherit' }}>
                  {s.cta.label} <ArrowRight size={17} />
                </button>
              )}
            </div>
          </div>
        ))}
        {/* 인디케이터 */}
        <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '9px', zIndex: 5 }}>
          {heroSlides.map((_, idx) => (
            <button key={idx} onClick={() => setCurrentSlide(idx)} style={{ width: currentSlide === idx ? '30px' : '9px', height: '9px', borderRadius: '5px', background: currentSlide === idx ? C.green : 'rgba(0,0,0,0.18)', border: 'none', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }} />
          ))}
        </div>
      </section>

      {/* ═══ 원형 퀵메뉴 ═══ */}
      <section style={{ background: C.white, padding: '54px 40px', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '18px' }}>
          {quickMenu.map((m, i) => (
            <button key={i} onClick={() => navigate(m.to)} className="quick-item" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', width: '104px', fontFamily: 'inherit' }}>
              <span className="quick-circle" style={{ width: '76px', height: '76px', borderRadius: '50%', background: C.sectionBg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.green, transition: 'background 0.18s, color 0.18s' }}>{m.icon}</span>
              <span style={{ fontSize: '14px', fontWeight: '600', color: C.textMain }}>{m.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ═══ 주요 제품 ═══ */}
      <section style={{ padding: '90px 40px', background: C.sectionBg }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '14px' }}>
            <div>
              <div style={{ width: '30px', height: '3px', borderRadius: '2px', background: C.navy, marginBottom: '14px' }} />
              <h2 style={{ fontSize: '32px', fontWeight: '800', letterSpacing: '-1px', color: C.textMain }}>주요 제품</h2>
            </div>
            <button onClick={() => navigate('/shop')} className="hv-outline" style={{ background: C.white, color: C.navy, border: `1px solid ${C.navy}`, padding: '11px 22px', fontSize: '14px', fontWeight: '700', borderRadius: '30px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '7px', fontFamily: 'inherit' }}>
              전체 제품 보기 <ArrowRight size={15} />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '22px' }}>
            {products.slice(0, 4).map(p => (
              <div key={p.id} onClick={() => navigate(`/shop/${p.id}`)} className="soft-card" style={{ background: C.white, borderRadius: '14px', overflow: 'hidden', cursor: 'pointer', border: `1px solid ${C.border}` }}>
                <ProductThumb product={p} height={180} radius={0} />
                <div style={{ padding: '18px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: '700', color: C.textMain, marginBottom: '12px', lineHeight: '1.4', minHeight: '42px' }}>{p.name}</h3>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: '700', color: C.navy }}>
                    자세히 보기 <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 도소매 서비스 ═══ */}
      <section style={{ padding: '90px 40px', background: C.white }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {sectionHead('도소매 유통 서비스', '전문적이고 신뢰할 수 있는 윤활유 도소매 유통 네트워크')}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '22px' }}>
            {[
              { icon: <Package size={30} />,     title: '도매 공급',          desc: '대량 구매를 위한 전문 도매 서비스' },
              { icon: <ShoppingBag size={30} />, title: '소매 판매',          desc: '개인 및 소규모 사업자 대상 소량 판매' },
              { icon: <Store size={30} />,       title: '온라인 스토어',      desc: '포인트로 간편하게 온라인 구매' },
              { icon: <Truck size={30} />,       title: '전국 배송',          desc: '신속하고 안전한 물류 시스템' },
            ].map((svc, idx) => (
              <div key={idx} className="soft-card" style={{ background: C.white, borderRadius: '14px', padding: '34px 26px', border: `1px solid ${C.border}`, textAlign: 'center' }}>
                <div style={{ width: '68px', height: '68px', borderRadius: '50%', background: C.greenPale, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.green, margin: '0 auto 20px' }}>{svc.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px', color: C.textMain }}>{svc.title}</h3>
                <p style={{ fontSize: '14px', color: C.textSub, lineHeight: '1.6' }}>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 기업 정보 ═══ */}
      <section style={{ padding: '90px 40px', background: C.sectionBg }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {sectionHead('기업 정보')}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '20px' }}>
            {[
              { label: '회사명',        value: '대한특수유' },
              { label: '대표이사',      value: '김은정' },
              { label: '사업자등록번호', value: '341-31-01582' },
              { label: '업종',          value: '윤활유 도소매·제조' },
            ].map((info, idx) => (
              <div key={idx} className="soft-card" style={{ background: C.white, padding: '34px 22px', borderRadius: '14px', textAlign: 'center', border: `1px solid ${C.border}`, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: C.green }} />
                <div style={{ fontSize: '13px', color: C.green, marginBottom: '10px', fontWeight: '700' }}>{info.label}</div>
                <div style={{ fontSize: '18px', fontWeight: '700', color: C.textMain }}>{info.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
