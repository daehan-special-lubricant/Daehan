import React from 'react';
import C from '../colors';

const PageBanner = ({ title, breadcrumb }) => (
  <div style={{
    background: `linear-gradient(120deg, ${C.skyPale} 0%, ${C.greenPale} 100%)`,
    padding: '64px 40px 56px',
    marginTop: '82px',
    borderBottom: `1px solid ${C.border}`,
  }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      {/* 브레드크럼 */}
      <div style={{ fontSize: '13px', color: C.textLight, marginBottom: '14px' }}>
        홈 &nbsp;›&nbsp; {breadcrumb}
      </div>
      <div style={{ width: '28px', height: '3px', borderRadius: '2px', background: C.navy, marginBottom: '14px' }} />
      <h1 style={{ fontSize: '38px', fontWeight: '800', color: C.textMain, letterSpacing: '-1px' }}>{title}</h1>
    </div>
  </div>
);

export default PageBanner;
