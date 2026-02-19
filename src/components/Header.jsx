import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu } from 'lucide-react';
import C from '../colors';

const menuItems = [
  { title: 'Company', items: [
    { label: '회사 소개 / 인사말', path: '/about' },
    { label: '오시는 길',         path: '/location' },
  ]},
  { title: 'Product', items: [
    { label: '윤활유',   path: '/product/lubricant' },
    { label: '가소제',   path: '/product/plasticizer' },
    { label: '특수제품', path: '/product/special' },
  ]},
  { title: 'Service', items: [
    { label: '도매공급', path: '/service/wholesale' },
    { label: '소매판매', path: '/service/retail' },
    { label: '배송안내', path: '/service/delivery' },
  ]},
  { title: 'Relation', items: [
    { label: '공지사항', path: '/notice' },
    { label: '고객문의', path: '/contact' },
  ]},
];

const BASE = import.meta.env.BASE_URL;

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(255,255,255,0.93)' : C.white,
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'all 0.35s',
      boxShadow: scrolled ? '0 2px 16px rgba(33,56,142,0.08)' : 'none',
    }}>
      <nav style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>

        {/* 로고 */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={`${BASE}images/logo.png`} alt="대한특수유 로고" style={{ height: '120px', width: 'auto' }} />
        </Link>

        {/* 메인 네비 */}
        <div style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
          {menuItems.map((menu, idx) => (
            <div key={idx} style={{ position: 'relative' }}
              onMouseEnter={() => setActiveMenu(idx)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button style={{
                background: 'none', border: 'none', fontSize: '15px', fontWeight: '600',
                color: activeMenu === idx ? C.navy : C.textMain,
                cursor: 'pointer', padding: '28px 0', letterSpacing: '-0.2px',
                transition: 'color 0.25s',
              }}>
                {menu.title}
              </button>

              {activeMenu === idx && (
                <div style={{
                  position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                  background: C.white, boxShadow: '0 8px 28px rgba(33,56,142,0.12)',
                  padding: '12px 0', minWidth: '200px',
                  borderTop: `3px solid ${C.gold}`,
                  borderRadius: '0 0 6px 6px',
                  animation: 'slideDown 0.25s ease',
                }}>
                  {menu.items.map((item, i) => (
                    <Link key={i} to={item.path}
                      style={{ padding: '11px 24px', cursor: 'pointer', fontSize: '14px', color: C.textSub, fontWeight: '500', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = C.goldPale; e.currentTarget.style.color = C.navy; e.currentTarget.style.paddingLeft = '30px'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.textSub; e.currentTarget.style.paddingLeft = '24px'; }}
                    >
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: C.gold, flexShrink: 0 }} />
                      {item.label}
                    </Link>
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
  );
};

export default Header;