import React from 'react';
import PageBanner from '../components/PageBanner';
import C from '../colors';

const About = () => (
  <>
    <PageBanner title="회사 소개 / 인사말" subtitle="COMPANY" breadcrumb="Company > 회사 소개 / 인사말" />

    <section style={{ padding: '100px 40px', background: C.white }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* 숫자 강조 카드 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '80px' }}>
          {[
            { num: '26', unit: '년', label: '업력' },
            { num: '1999', unit: '', label: '설립연도' },
            { num: 'B2B', unit: '', label: '기업 고객' },
            { num: 'B2C', unit: '', label: '개인 고객' },
          ].map((stat, idx) => (
            <div key={idx} style={{
              background: idx % 2 === 0 ? `linear-gradient(140deg, ${C.navyDark}, ${C.navy})` : C.sectionBg,
              borderRadius: '12px', padding: '36px 20px', textAlign: 'center',
              border: idx % 2 !== 0 ? `1px solid #d4daf0` : 'none',
            }}>
              <div style={{ fontSize: '36px', fontWeight: '800', color: idx % 2 === 0 ? C.gold : C.navy, lineHeight: 1, marginBottom: '6px' }}>
                {stat.num}<span style={{ fontSize: '18px' }}>{stat.unit}</span>
              </div>
              <div style={{ fontSize: '13px', fontWeight: '600', color: idx % 2 === 0 ? 'rgba(255,255,255,0.7)' : C.textSub, letterSpacing: '1px' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 인사말 본문 */}
        <div style={{ background: C.sectionBg, borderRadius: '16px', padding: '60px 64px', position: 'relative', overflow: 'hidden' }}>
          {/* 장식 */}
          <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '160px', height: '160px', borderRadius: '50%', background: `radial-gradient(circle, rgba(33,56,142,0.06) 0%, transparent 70%)` }} />
          <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '120px', height: '120px', borderRadius: '50%', background: `radial-gradient(circle, rgba(255,171,32,0.08) 0%, transparent 70%)` }} />

          {/* 인용 부호 */}
          <div style={{ fontSize: '100px', lineHeight: '0.5', color: '#dce3f0', fontWeight: '900', marginBottom: '32px', fontFamily: 'Georgia, serif', position: 'relative', zIndex: 1 }}>"</div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '16px', lineHeight: '2.1', color: C.textSub, marginBottom: '24px' }}>
              안녕하십니까, 대한특수유 대표이사 <strong style={{ color: C.textMain }}>김은정</strong>입니다.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '2.1', color: C.textSub, marginBottom: '24px' }}>
              대한특수유는 <strong style={{ color: C.navy }}>1999년 창립 이후 26년간</strong> 윤활유 및 특수화학제품 전문 기업으로서
              산업 현장의 안정적인 운영을 지원해 왔습니다.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '2.1', color: C.textSub, marginBottom: '24px' }}>
              저희는 단순히 제품을 공급하는 기업이 아니라, 고객의 설비가 최상의 효율을 유지하도록 돕는
              <strong style={{ color: C.navy }}> 파트너</strong>가 되고자 합니다.
              기업 고객의 대량 공급부터 개인 고객의 소량 구매까지, 규모와 관계없이
              <strong style={{ color: C.navy }}> 정직한 품질과 합리적인 가격, 신속한 대응</strong>을 원칙으로 합니다.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '2.1', color: C.textSub, marginBottom: '48px' }}>
              오랜 현장 경험과 축적된 기술력을 바탕으로 앞으로도 고객의 생산성과 안전을 최우선으로 생각하며
              한결같은 서비스를 제공하겠습니다.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '2.1', color: C.textSub, marginBottom: '48px' }}>
              대한특수유를 믿고 찾아주시는 모든 분들께 깊이 감사드립니다.
            </p>

            {/* 서명 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', paddingTop: '32px', borderTop: `2px solid #d4daf0` }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: `linear-gradient(135deg, ${C.navy}, ${C.navyMid})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.white, fontSize: '20px', fontWeight: '700' }}>김</div>
              <div>
                <div style={{ fontSize: '18px', fontWeight: '700', color: C.textMain, marginBottom: '4px' }}>김은정</div>
                <div style={{ fontSize: '14px', color: C.textLight }}>대표이사 · 대한특수유</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;