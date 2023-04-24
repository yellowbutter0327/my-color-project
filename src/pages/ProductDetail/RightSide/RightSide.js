import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RightSide.scss';

const RightSide = ({ productData }) => {
  const [isTabOpen, setIsTabOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const handleTabClick = () => {
    setIsTabOpen(!isTabOpen);
  };

  const handleProductSelect = product => {
    setSelectedProduct([product]);
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

  // console.log(productData);

  return (
    <div className="product-detail-right-wrap">
      <div className="product-info-wrap">
        <h1 className="product-name">{productData.title} </h1>
        <h1 className="product-price">{productData.price} </h1>

        {/* <div className="choose-wrap">
          <div className="choose-container">
            <h2 onClick={handleTabClick}> 상품을 선택해주세요</h2>
            {isTabOpen && (
              <div className="option-wrap">
                <ul className="option-list">
                  {productData.color.map((color, index) => (
                    <li key={index} onClick={() => handleProductSelect(color)}>
                      {color}
                    </li>
                  ))}
                </ul>
                <div className="option-add-area" />
              </div>
            )}
          </div>
        </div> */}

        <div className="selected-wrap">
          {/* <p className="selected-info">
            선택된 제품: {selectedProduct.join(', ')}
          </p> */}
          {/* {selectedProduct.map((product, index) => (
            <div key={index} className="selected-quantity-wrap">
              <span className="selected-info">{product}</span>
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
          ))} */}
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
          <h2>상품금액 합계 : {parseInt(productData.price) * quantity}</h2>
        </div>

        <div className="purchase-icon-wrap">
          <Link to="/cart">
            <button className="purchase-button">장바구니</button>
          </Link>
          <Link to="/cart">
            <button className="purchase-button">구매하기</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
