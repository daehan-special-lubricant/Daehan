import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import C from '../colors';

const menuItems = [
  { title: 'Company', items: [
    { label: '회사 소개 / 인사말', path: '/about' },
    { label: '오시는 길',         path: '/location' },
  ]},
  { title: 'Product', items: [
    { label: '전체 제품', path: '/shop' },
    { label: '윤활유',    path: '/shop?cat=윤활유' },
    { label: '가소제',    path: '/shop?cat=가소제' },
    { label: '실리콘',    path: '/shop?cat=실리콘' },
    { label: '부동액',    path: '/shop?cat=부동액' },
    { label: '기타',      path: '/shop?cat=기타' },
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

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, background: C.white, borderBottom: `1px solid ${C.border}` }}>
      <nav style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '82px' }}>

        {/* 로고 */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={`${BASE}images/logo.png`} alt="대한특수유 로고" style={{ height: '112px', width: 'auto' }} />
        </Link>

        {/* 메뉴 */}
        <div style={{ display: 'flex', gap: '46px', alignItems: 'center' }}>
          {menuItems.map((menu, idx) => (
            <div key={idx} style={{ position: 'relative' }}
              onMouseEnter={() => setActiveMenu(idx)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button style={{
                background: 'none', border: 'none', fontSize: '16px', fontWeight: '600',
                color: activeMenu === idx ? C.navy : C.textMain,
                cursor: 'pointer', padding: '29px 0', letterSpacing: '-0.2px', fontFamily: 'inherit',
              }}>
                {menu.title}
              </button>

              {activeMenu === idx && (
                <div style={{
                  position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                  background: C.white, boxShadow: '0 10px 28px rgba(15,26,69,0.1)',
                  padding: '10px 0', minWidth: '190px',
                  borderTop: `3px solid ${C.navy}`, borderRadius: '0 0 10px 10px',
                }}>
                  {menu.items.map((item, i) => (
                    <Link key={i} to={item.path} className="dropdown-link"
                      style={{ padding: '11px 22px', fontSize: '14px', color: C.textSub, fontWeight: '500', display: 'block', textDecoration: 'none' }}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
