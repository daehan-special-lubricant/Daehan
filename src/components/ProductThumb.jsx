import React from 'react';
import { Droplet } from 'lucide-react';
import C from '../colors';

/*
 * 상품 사진(product.image)이 있으면 실제 사진을 보여주고,
 * 없으면 상품별 그라디언트 + 물방울 아이콘으로 일관된 썸네일을 만든다.
 * 어느 경우든 카테고리 배지와 용량 라벨을 얹는다.
 */
const ProductThumb = ({ product, height = 200, iconSize = 56, radius = 10 }) => {
  const [from, to] = product.color;
  const hasImage = Boolean(product.image);

  return (
    <div style={{
      height, borderRadius: radius, position: 'relative', overflow: 'hidden',
      background: hasImage ? '#fff' : `linear-gradient(140deg, ${from} 0%, ${to} 100%)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {hasImage ? (
        <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '14px' }} />
      ) : (
        <>
          {/* 배경 원형 글로우 */}
          <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '130px', height: '130px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,171,32,0.22) 0%, transparent 70%)' }} />
          <div style={{ position: 'absolute', bottom: '-40px', left: '-20px', width: '120px', height: '120px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)' }} />
          <Droplet size={iconSize} color="rgba(255,255,255,0.92)" strokeWidth={1.4} />
        </>
      )}

      <span style={{
        position: 'absolute', top: '12px', left: '12px',
        fontSize: '11px', fontWeight: '700', letterSpacing: '0.5px',
        color: C.navyDark, background: C.goldLight,
        padding: '4px 10px', borderRadius: '20px',
      }}>{product.category}</span>
      <span style={{
        position: 'absolute', bottom: '12px', right: '14px',
        fontSize: '12px', fontWeight: '600',
        color: hasImage ? C.textSub : 'rgba(255,255,255,0.85)',
        background: hasImage ? 'rgba(255,255,255,0.85)' : 'transparent',
        padding: hasImage ? '2px 8px' : 0, borderRadius: '20px',
      }}>{product.unit}</span>
    </div>
  );
};

export default ProductThumb;
