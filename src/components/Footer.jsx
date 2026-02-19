import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import C from '../colors';

const Footer = () => (
  <footer style={{ background: C.navyDark, color: C.textLight, padding: '70px 40px 36px' }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '48px', marginBottom: '48px' }}>

        {/* 회사 정보 */}
        <div>
          <div style={{ fontSize: '22px', fontWeight: '700', color: C.white, marginBottom: '6px', letterSpacing: '-0.3px' }}>대한특수유</div>
          <div style={{ width: '36px', height: '2px', background: C.gold, marginBottom: '20px' }} />
          <p style={{ lineHeight: '2', fontSize: '14px' }}>
            사업자등록번호: 403-03-44514<br />
            대표이사: 김은정<br />
            업종: 윤활유 도소매·제조
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: C.white, marginBottom: '6px', fontSize: '15px', fontWeight: '600' }}>Quick Links</h4>
          <div style={{ width: '36px', height: '2px', background: C.gold, marginBottom: '18px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { label: '회사 소개', path: '/about' },
              { label: '제품 안내', path: '/product/lubricant' },
              { label: '도소매 문의', path: '/contact' },
              { label: '네이버 스토어', path: 'https://smartstore.naver.com' },
            ].map((link, i) => (
              <Link key={i} to={link.path}
                style={{ color: C.textLight, textDecoration: 'none', fontSize: '14px', transition: 'color 0.25s', display: 'flex', alignItems: 'center', gap: '8px' }}
                onMouseEnter={e => e.currentTarget.style.color = C.gold}
                onMouseLeave={e => e.currentTarget.style.color = C.textLight}
              >
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: C.gold }} />
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* 연락처 */}
        <div>
          <h4 style={{ color: C.white, marginBottom: '6px', fontSize: '15px', fontWeight: '600' }}>Contact</h4>
          <div style={{ width: '36px', height: '2px', background: C.gold, marginBottom: '18px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { icon: <Phone size={15} />, text: '063-831-9976' },
              { icon: <Mail size={15} />,  text: 'gun029@hanmail.net' },
              { icon: <MapPin size={15} />, text: '익산시 춘포면 석암로 327' },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: C.textLight }}>
                <span style={{ color: C.gold }}>{c.icon}</span> {c.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <span style={{ fontSize: '13px' }}>© 2026 대한특수유. All rights reserved.</span>
        <span style={{ fontSize: '13px', color: C.gold }}>DAEHAN SPECIALTY OIL</span>
      </div>
    </div>
  </footer>
);

export default Footer;