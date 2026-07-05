import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Phone, MessageSquare, Check, ExternalLink } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import ProductThumb from '../components/ProductThumb';
import { getProduct } from '../data/products';
import C from '../colors';

const ProductDetail = () => {
  const { id }  = useParams();
  const product = getProduct(id);

  if (!product) {
    return (
      <>
        <PageBanner title="제품을 찾을 수 없습니다" breadcrumb="제품 소개" />
        <section style={{ padding: '100px 40px', textAlign: 'center', background: C.white }}>
          <Link to="/shop" style={{ color: C.navy, fontWeight: '700' }}>← 제품 목록으로 돌아가기</Link>
        </section>
      </>
    );
  }

  return (
    <>
      <PageBanner title={product.name} breadcrumb={`제품 소개 › ${product.category}`} />

      <section style={{ padding: '70px 40px 110px', background: C.white }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Link to="/shop" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: C.textSub, textDecoration: 'none', fontSize: '14px', marginBottom: '28px' }}>
            <ChevronLeft size={16} /> 제품 목록
          </Link>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'start' }}>
            {/* 이미지 */}
            <ProductThumb product={product} height={380} iconSize={96} radius={14} />

            {/* 정보 */}
            <div>
              <div style={{ fontSize: '13px', color: C.gold, fontWeight: '700', letterSpacing: '1px', marginBottom: '12px' }}>{product.category.toUpperCase()}</div>
              <h1 style={{ fontSize: '30px', fontWeight: '800', color: C.textMain, marginBottom: '16px', lineHeight: '1.3' }}>{product.name}</h1>
              <p style={{ fontSize: '15px', color: C.textSub, lineHeight: '1.8', marginBottom: '24px' }}>{product.desc}</p>

              {/* 주요 특징 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                {product.tags.map((t, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: C.textMain }}>
                    <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: C.goldPale, color: C.goldDark, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Check size={13} /></span>
                    {t}
                  </div>
                ))}
              </div>

              {/* 규격 */}
              <div style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: '18px 0', marginBottom: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '14px', color: C.textSub }}>규격 / 용량</span>
                  <span style={{ fontSize: '16px', fontWeight: '700', color: C.textMain }}>{product.unit}</span>
                </div>
              </div>

              {product.retail ? (
                /* 소매 상품 — 스마트스토어 구매 */
                <>
                  <div style={{ background: C.sectionBg, borderRadius: '12px', padding: '18px 22px', marginBottom: '20px', fontSize: '14px', color: C.textSub, lineHeight: '1.6' }}>
                    네이버 스마트스토어에서 바로 구매하실 수 있습니다.
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    {product.storeUrl ? (
                      <a href={product.storeUrl} target="_blank" rel="noopener noreferrer" className="hero-cta" style={{ flex: 1, padding: '15px', fontSize: '15px', fontWeight: '700', borderRadius: '10px', background: '#03c75a', color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', textDecoration: 'none' }}>
                        <ExternalLink size={17} /> 스마트스토어에서 구매
                      </a>
                    ) : (
                      <Link to="/contact" className="hero-cta" style={{ flex: 1, padding: '15px', fontSize: '15px', fontWeight: '700', borderRadius: '10px', background: C.navy, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', textDecoration: 'none' }}>
                        <MessageSquare size={17} /> 구매 문의
                      </Link>
                    )}
                    <Link to="/shop" className="hv-outline" style={{ flex: 1, padding: '15px', fontSize: '15px', fontWeight: '700', borderRadius: '10px', border: `1px solid ${C.navy}`, background: C.white, color: C.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', textDecoration: 'none' }}>
                      다른 제품 보기
                    </Link>
                  </div>
                </>
              ) : (
                /* B2B 제품 — 견적 문의 */
                <>
                  <div style={{ background: C.sectionBg, borderRadius: '12px', padding: '22px 24px', marginBottom: '20px' }}>
                    <p style={{ fontSize: '14px', color: C.textSub, lineHeight: '1.6', marginBottom: '4px' }}>제품 구매 및 견적은 고객센터로 문의해 주세요.</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '20px', fontWeight: '800', color: C.navy }}>
                      <Phone size={18} /> 063-831-9976
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <Link to="/contact" className="hero-cta" style={{ flex: 1, padding: '15px', fontSize: '15px', fontWeight: '700', borderRadius: '10px', background: C.navy, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', textDecoration: 'none' }}>
                      <MessageSquare size={17} /> 구매·견적 문의
                    </Link>
                    <Link to="/shop" className="hv-outline" style={{ flex: 1, padding: '15px', fontSize: '15px', fontWeight: '700', borderRadius: '10px', border: `1px solid ${C.navy}`, background: C.white, color: C.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', textDecoration: 'none' }}>
                      다른 제품 보기
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>

          {product.info && <InfoTable info={product.info} />}
          {product.detailImages && <DetailImages images={product.detailImages} extraFrom={product.extraFrom} />}
        </div>
      </section>
    </>
  );
};

/* 상품정보 표 (상세 맨 앞) */
const InfoTable = ({ info }) => (
  <div style={{ maxWidth: '860px', margin: '60px auto 0' }}>
    <h2 style={{ fontSize: '20px', fontWeight: '800', color: C.textMain, marginBottom: '16px' }}>상품정보</h2>
    <div style={{ border: `1px solid ${C.border}`, borderRadius: '12px', overflow: 'hidden' }}>
      {info.map((row, i) => (
        <div key={i} style={{ display: 'flex', borderTop: i === 0 ? 'none' : `1px solid ${C.border}` }}>
          <div style={{ width: '120px', flexShrink: 0, background: C.sectionBg, padding: '14px 18px', fontSize: '14px', fontWeight: '700', color: C.textMain }}>{row.label}</div>
          <div style={{ padding: '14px 18px', fontSize: '14px', color: C.textSub, lineHeight: '1.5' }}>{row.value}</div>
        </div>
      ))}
    </div>
  </div>
);

/* '추가상품' 구분 배너 (상세 이미지 사이에 살며시 표시) */
const ExtraDivider = () => (
  <div style={{ position: 'relative', margin: '46px 0 30px', border: `2px solid ${C.border}`, background: C.white, padding: '30px 20px', textAlign: 'center' }}>
    <span style={{ fontSize: '20px', fontWeight: '800', color: C.textSub, letterSpacing: '2px' }}>추가상품</span>
    {/* 접힌 모서리 */}
    <div style={{ position: 'absolute', right: '-2px', bottom: '-2px', width: 0, height: 0, borderStyle: 'solid', borderWidth: '0 0 26px 26px', borderColor: `transparent transparent ${C.border} transparent` }} />
    <div style={{ position: 'absolute', right: '-2px', bottom: '-2px', width: 0, height: 0, borderStyle: 'solid', borderWidth: '0 0 20px 20px', borderColor: 'transparent transparent #fff transparent' }} />
  </div>
);

/* 상세설명 = 스마트스토어 상세 이미지 세로 나열 */
const DetailImages = ({ images, extraFrom }) => (
  <div style={{ maxWidth: '860px', margin: '70px auto 0' }}>
    {images.map((src, i) => (
      <React.Fragment key={i}>
        {i === extraFrom && <ExtraDivider />}
        <img src={src} alt={`상세 이미지 ${i + 1}`} loading="lazy" style={{ display: 'block', width: '100%' }} />
      </React.Fragment>
    ))}
  </div>
);

export default ProductDetail;
