import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import ProductThumb from '../components/ProductThumb';
import products, { categories } from '../data/products';
import C from '../colors';

const Shop = () => {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  const cat = params.get('cat') || '전체';
  const setCat = (c) => setParams(c === '전체' ? {} : { cat: c });

  const list = cat === '전체' ? products : products.filter(p => p.category === cat);

  return (
    <>
      <PageBanner title="제품 소개" breadcrumb="제품 소개" />

      <section style={{ padding: '70px 40px 110px', background: C.sectionBg }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

          {/* 카테고리 필터 */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '40px', justifyContent: 'center' }}>
            {categories.map(c => (
              <button key={c} onClick={() => setCat(c)} style={{
                padding: '10px 24px', fontSize: '14px', fontWeight: '600', borderRadius: '30px', cursor: 'pointer',
                border: `1px solid ${cat === c ? C.navy : C.border}`,
                background: cat === c ? C.navy : C.white,
                color: cat === c ? C.white : C.textSub,
                transition: 'all 0.2s', fontFamily: 'inherit',
              }}>{c}</button>
            ))}
          </div>

          {/* 상품 그리드 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '26px' }}>
            {list.map(p => (
              <div key={p.id} onClick={() => navigate(`/shop/${p.id}`)} className="soft-card" style={{
                background: C.white, borderRadius: '14px', overflow: 'hidden', cursor: 'pointer',
                border: `1px solid ${C.border}`,
              }}>
                <ProductThumb product={p} radius={0} />
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: C.textMain, marginBottom: '10px', lineHeight: '1.4', minHeight: '45px' }}>{p.name}</h3>
                  <p style={{ fontSize: '13px', color: C.textSub, lineHeight: '1.6', marginBottom: '16px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{p.desc}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: '700', color: C.navy }}>
                    자세히 보기 <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
