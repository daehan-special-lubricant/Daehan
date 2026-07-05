import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home     from './pages/Home';
import About    from './pages/About';
import Location from './pages/Location';
import ComingSoon from './pages/ComingSoon';
import Shop     from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

const App = () => (
  <>
    <Header />
    <main>
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/about"     element={<About />} />
        <Route path="/location"  element={<Location />} />

        {/* 제품 소개 */}
        <Route path="/shop"      element={<Shop />} />
        <Route path="/shop/:id"  element={<ProductDetail />} />

        <Route path="/service/wholesale"    element={<ComingSoon title="도매공급" breadcrumb="도매공급" />} />
        <Route path="/service/retail"       element={<ComingSoon title="소매판매" breadcrumb="소매판매" />} />
        <Route path="/service/delivery"     element={<ComingSoon title="배송안내" breadcrumb="배송안내" />} />
        <Route path="/notice"               element={<ComingSoon title="공지사항" breadcrumb="공지사항" />} />
        <Route path="/contact"              element={<ComingSoon title="고객문의" breadcrumb="고객문의" />} />
      </Routes>
    </main>
    <Footer />

    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800&display=swap');
      * { margin: 0; padding: 0; box-sizing: border-box; }

      body { font-family: 'Noto Sans KR', sans-serif; overflow-x: hidden; color: #20262E; background: #fff; }

      /* 은은한 공통 호버 (translate/scale 없음) */
      .hv-green { transition: color 0.18s; }
      .hv-green:hover { color: #21388e; }
      .dropdown-link { transition: background 0.18s, color 0.18s; }
      .dropdown-link:hover { background: #eef1f8; color: #21388e; }
      .soft-card { transition: box-shadow 0.2s; }
      .soft-card:hover { box-shadow: 0 8px 24px rgba(15,26,69,0.1); }
      .hero-cta { transition: background 0.18s; }
      .hero-cta:hover { background: #0f1a45; }
      .hv-outline { transition: background 0.18s; }
      .hv-outline:hover { background: #eef1f8; }
      .quick-item .quick-circle { transition: background 0.18s, color 0.18s; }
      .quick-item:hover .quick-circle { background: #21388e; color: #fff; }

      @media (max-width: 768px) {
        nav > div:nth-child(2) { display: none !important; }
        h1 { font-size: 32px !important; }
        h2 { font-size: 28px !important; }
      }
    `}</style>
  </>
);

export default App;
