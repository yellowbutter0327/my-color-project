import React, { useState } from 'react';
import './UnderTap.scss';

const UnderTap = () => {
  const [currTabId, setCurrTabId] = useState(0);

  return (
    <section className="detail-tap-wrap">
      <div className="tap-title-wrap">
        {Tapdata.map(item => (
          <div key={item.id}>
            <button
              key={item.id}
              className={currTabId === item.id ? 'btn-on' : 'btn-off'}
              onClick={() => setCurrTabId(item.id)}
            >
              {item.title}
            </button>
          </div>
        ))}
      </div>
      <div className="tap-content">
        {currTabId === 0 ? (
          <img
            src={Tapdata.find(({ id }) => currTabId === id).src}
            alt="상품 상세 탭별 이미지"
          />
        ) : (
          ''
        )}
      </div>
    </section>
  );
};

export default UnderTap;

const Tapdata = [
  {
    id: 0,
    title: '상품정보',
    src: '/images/product-under-detail.jpg',
  },
];
