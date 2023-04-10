import React, { useState, useEffect } from 'react';
import Carousel from './Carousel/Carousel';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [isTabOpen, setIsTabOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleTabClick = () => {
    setIsTabOpen(!isTabOpen);
  };

  const handleProductSelect = product => {
    setSelectedProduct(product);
    setIsTabOpen(false);
  };

  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="proudct-detail-wrap">
      <div className="product-top-wrap">
        <Carousel />

        <div className="right-wrap">
          <div className="product-info-wrap">
            <h1 className="product-name">상품이름</h1>
            <h1 className="product-price">상품가격원</h1>

            <div className="choose-wrap">
              <div className="choose-container">
                <h2 onClick={handleTabClick}> 상품을 선택해주세요</h2>
                {isTabOpen && (
                  <div className="option-wrap">
                    <ul className="option-list">
                      <li onClick={() => handleProductSelect('제품1')}>
                        제품1
                      </li>
                      <li onClick={() => handleProductSelect('제품2')}>
                        제품2
                      </li>
                      <li onClick={() => handleProductSelect('제품3')}>
                        제품3
                      </li>
                    </ul>
                    <div className="option-add-area" />
                  </div>
                )}
              </div>
            </div>

            <div className="selected-wrap">
              <p className="selected-info">선택된 제품: {selectedProduct}</p>
              <div className="selected-quantity-wrap">
                <button
                  className="quantity-button"
                  onClick={handleQuantityDecrease}
                >
                  -
                </button>

                <span className="selected-info">수량: {quantity}</span>
                <button
                  className="quantity-button"
                  onClick={handleQuantityIncrease}
                >
                  +
                </button>
              </div>
            </div>

            <div className="total-price">
              <h2>상품금액 합계</h2>
            </div>

            <div className="purchase-icon-wrap">
              <a href="#!" className="장바구니 링크">
                <button className="purchase-button">장바구니</button>
              </a>
              <a href="#!" className="구매하기 링크">
                <button className="purchase-button">구매하기</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
