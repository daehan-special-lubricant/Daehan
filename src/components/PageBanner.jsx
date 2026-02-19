import React from 'react';
import C from '../colors';

const PageBanner = ({ title, subtitle, breadcrumb }) => (
  <div style={{
    background: `linear-gradient(140deg, ${C.navyDark} 0%, ${C.navy} 60%, ${C.navyMid} 100%)`,
    padding: '80px 40px 60px',
    marginTop: '80px',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* 배경 패턴 */}
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.03' stroke-width='1'%3E%3Cline x1='0' y1='40' x2='80' y2='40'/%3E%3Cline x1='40' y1='0' x2='40' y2='80'/%3E%3C/g%3E%3C/svg%3E")`,
    }} />
    <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
      {/* 브레드크럼 */}
      <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>
        홈 &nbsp;›&nbsp; {breadcrumb}
      </div>
      {/* 영문 소제목 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
        <div style={{ width: '32px', height: '2px', background: C.gold }} />
        <span style={{ fontSize: '13px', fontWeight: '700', color: C.goldLight, letterSpacing: '3px' }}>{subtitle}</span>
      </div>
      <h1 style={{ fontSize: '42px', fontWeight: '700', color: C.white, letterSpacing: '-1px' }}>{title}</h1>
    </div>
  </div>
);

export default PageBanner;