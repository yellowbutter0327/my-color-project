import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductItem.scss';

const ProductItem = ({ data }) => {
  const navigate = useNavigate();
  return (
    <>
      {/* 제품 전체 박스 */}
      {data.map(item => (
        <div
          className="product-info-box"
          key={item.id}
          onClick={() => navigate(`/productdetail/${String(item.id)}`)}
        >
          <div className="product-info">
            <div className="image-wrapper">
              <img className="product-img" src={item.src} alt="상품이미지" />
            </div>
            {/* 제품 설명 */}
            <div className="product-content-box">
              <div className="product-wrapper">
                <div className="product-name">{item.title}</div>
              </div>
              {/* 가격 정보 */}
              <div className="product-wrapper">
                <div className="product-price-wrapper">
                  <div className="discount-price-wrapper">
                    <span className="discount-price">
                      {item.price}
                      <span>원</span>
                    </span>
                  </div>
                  <div className="origin-price-wrapper">
                    <span className="origin-price">
                      {item.originPrice}
                      <span>원</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductItem;
