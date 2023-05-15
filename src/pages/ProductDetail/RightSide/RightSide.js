import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../../store/Feature/cartReducer';
import './RightSide.scss';

const RightSide = ({ productData, match }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const uid = useSelector(state => state.user.userId);

  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    const cartItem = { ...productData, quantity, userId: uid }; // 장바구니에 추가할 상품 데이터에 userId 추가
    dispatch(addItemToCart(cartItem)); // addToCart action dispatch
  };

  return (
    <div className="product-detail-right-wrap">
      <div className="product-info-wrap">
        <h1 className="product-name">{productData.title} </h1>
        <h1 className="product-price">{productData.price} </h1>
        <div className="selected-wrap">
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
            <button className="purchase-button" onClick={handleAddToCart}>
              장바구니
            </button>
          </Link>
          <Link to="/cart">
            <button className="purchase-button" onClick={handleAddToCart}>
              구매하기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
