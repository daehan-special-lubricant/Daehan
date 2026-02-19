import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import C from '../colors';

const Location = () => (
  <>
    <PageBanner title="오시는 길" subtitle="LOCATION" breadcrumb="Company > 오시는 길" />

    <section style={{ padding: '100px 40px', background: C.white }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* 지도 영역 */}
        <div style={{
          width: '100%', height: '400px', borderRadius: '12px',
          background: C.sectionBg, border: `1px solid #d4daf0`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '60px', overflow: 'hidden',
        }}>
          {/* 카카오맵 또는 구글맵 iframe 삽입 위치 */}
          <iframe
            src="https://maps.google.com/maps?q=전북특별자치도+익산시+춘포면+석암로+327&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%" height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>

        {/* 연락처 정보 카드들 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
          {[
            { icon: <MapPin size={28} />, title: '주소', content: '전북특별자치도 익산시\n춘포면 석암로 327' },
            { icon: <Phone size={28} />,  title: '전화', content: '063-831-9976' },
            { icon: <Mail size={28} />,   title: '이메일', content: 'gun029@hanmail.net' },
            { icon: <Clock size={28} />,  title: '운영시간', content: '평일 09:00 – 18:00\n토·일 09:00 – 18:00\n(공휴일 휴무)' },
          ].map((item, idx) => (
            <div key={idx} style={{
              background: C.sectionBg, borderRadius: '12px', padding: '36px 28px',
              textAlign: 'center', border: '1px solid #d4daf0', transition: 'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.navy; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(33,56,142,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#d4daf0'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: C.goldPale, color: C.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: C.textMain, marginBottom: '12px' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', color: C.textSub, lineHeight: '1.9', whiteSpace: 'pre-line' }}>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Location;