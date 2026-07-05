import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import C from '../colors';

const Footer = () => (
  <footer style={{ background: C.white, color: C.textSub, padding: '64px 40px 40px', borderTop: `1px solid ${C.border}` }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '44px', marginBottom: '44px' }}>

        {/* 회사 정보 */}
        <div>
          <div style={{ fontSize: '22px', fontWeight: '800', color: C.textMain, marginBottom: '6px', letterSpacing: '-0.3px' }}>대한특수유</div>
          <div style={{ width: '34px', height: '3px', borderRadius: '2px', background: C.green, marginBottom: '18px' }} />
          <p style={{ lineHeight: '2', fontSize: '14px', color: C.textSub }}>
            사업자등록번호: 403-03-44514<br />
            대표이사: 김은정<br />
            업종: 윤활유 도소매·제조
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: C.textMain, marginBottom: '6px', fontSize: '15px', fontWeight: '700' }}>바로가기</h4>
          <div style={{ width: '34px', height: '3px', borderRadius: '2px', background: C.green, marginBottom: '16px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
            {[
              { label: '회사 소개', path: '/about' },
              { label: '제품 소개', path: '/shop' },
              { label: '오시는 길', path: '/location' },
              { label: '고객문의', path: '/contact' },
            ].map((link, i) => (
              <Link key={i} to={link.path} className="hv-green"
                style={{ color: C.textSub, textDecoration: 'none', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: C.green }} />
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* 연락처 */}
        <div>
          <h4 style={{ color: C.textMain, marginBottom: '6px', fontSize: '15px', fontWeight: '700' }}>고객센터</h4>
          <div style={{ width: '34px', height: '3px', borderRadius: '2px', background: C.green, marginBottom: '16px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
            {[
              { icon: <Phone size={15} />, text: '063-831-9976' },
              { icon: <Mail size={15} />,  text: 'gun029@hanmail.net' },
              { icon: <MapPin size={15} />, text: '익산시 춘포면 석암로 327' },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: C.textSub }}>
                <span style={{ color: C.green }}>{c.icon}</span> {c.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: '26px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <span style={{ fontSize: '13px', color: C.textLight }}>© 2026 대한특수유. All rights reserved.</span>
        <span style={{ fontSize: '13px', color: C.green, fontWeight: '700' }}>윤활유 · 가소제 · 실리콘 전문</span>
      </div>
    </div>
  </footer>
);

export default Footer;
