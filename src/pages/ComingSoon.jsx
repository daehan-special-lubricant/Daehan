import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import C from '../colors';

const ComingSoon = ({ title, subtitle, breadcrumb }) => (
  <>
    <PageBanner title={title} subtitle={subtitle} breadcrumb={breadcrumb} />
    <section style={{ padding: '120px 40px', background: C.white, textAlign: 'center' }}>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div style={{ fontSize: '72px', marginBottom: '24px' }}>🔧</div>
        <h2 style={{ fontSize: '28px', fontWeight: '700', color: C.textMain, marginBottom: '16px' }}>페이지 준비 중입니다</h2>
        <p style={{ fontSize: '16px', color: C.textSub, lineHeight: '1.8', marginBottom: '40px' }}>
          현재 해당 페이지를 준비하고 있습니다.<br />빠른 시일 내에 업데이트하겠습니다.
        </p>
        <Link to="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: C.navy, color: C.white, padding: '14px 32px',
          borderRadius: '6px', textDecoration: 'none', fontSize: '15px', fontWeight: '600',
          transition: 'all 0.3s',
        }}
          onMouseEnter={e => e.currentTarget.style.background = C.navyMid}
          onMouseLeave={e => e.currentTarget.style.background = C.navy}
        >
          홈으로 돌아가기
        </Link>
      </div>
    </section>
  </>
);

export default ComingSoon;