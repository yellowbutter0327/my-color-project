import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../../store/Feature/cartReducer';
import { selectIsLoggedIn } from '../../../store/Feature/userSlice';
import './RightSide.scss';

const RightSide = ({ productData }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const uid = useSelector(state => state.user.userId);
  const navigate = useNavigate();

  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/login');
    } else {
      const cartItem = { ...productData, quantity, userId: uid };
      dispatch(addItemToCart(cartItem));
      navigate('/cart');
    }
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
          <button className="purchase-button" onClick={handleAddToCart}>
            장바구니
          </button>

          <button className="purchase-button" onClick={handleAddToCart}>
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
