import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home     from './pages/Home';
import About    from './pages/About';
import Location from './pages/Location';
import ComingSoon from './pages/ComingSoon';

const App = () => (
  <>
    <Header />
    <main>
      <Routes>
        <Route path="/"                  element={<Home />} />
        <Route path="/about"             element={<About />} />
        <Route path="/location"          element={<Location />} />
        <Route path="/product/lubricant"    element={<ComingSoon title="윤활유"   subtitle="PRODUCT"  breadcrumb="Product > 윤활유" />} />
        <Route path="/product/plasticizer"  element={<ComingSoon title="가소제"   subtitle="PRODUCT"  breadcrumb="Product > 가소제" />} />
        <Route path="/product/special"      element={<ComingSoon title="특수제품" subtitle="PRODUCT"  breadcrumb="Product > 특수제품" />} />
        <Route path="/service/wholesale"    element={<ComingSoon title="도매공급" subtitle="SERVICE"  breadcrumb="Service > 도매공급" />} />
        <Route path="/service/retail"       element={<ComingSoon title="소매판매" subtitle="SERVICE"  breadcrumb="Service > 소매판매" />} />
        <Route path="/service/delivery"     element={<ComingSoon title="배송안내" subtitle="SERVICE"  breadcrumb="Service > 배송안내" />} />
        <Route path="/notice"               element={<ComingSoon title="공지사항" subtitle="RELATION" breadcrumb="Relation > 공지사항" />} />
        <Route path="/contact"              element={<ComingSoon title="고객문의" subtitle="RELATION" breadcrumb="Relation > 고객문의" />} />
      </Routes>
    </main>
    <Footer />

    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap');
      * { margin: 0; padding: 0; box-sizing: border-box; }

      @keyframes slideDown {
        from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
        to   { opacity: 1; transform: translateX(-50%) translateY(0); }
      }

      body { font-family: 'Noto Sans KR', sans-serif; overflow-x: hidden; }

      @media (max-width: 768px) {
        nav > div:nth-child(2) { display: none !important; }
        h1 { font-size: 34px !important; }
        h2 { font-size: 30px !important; }
      }
    `}</style>
  </>
);

export default App;