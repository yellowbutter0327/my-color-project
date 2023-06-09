import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './CartList.scss';
import { removeItemFromCart } from '../../../store/Feature/cartReducer';

const CartList = ({ cart }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState([]);

  useEffect(() => {
    setQuantity(cart.map(item => item.quantity));
  }, [cart]);

  const handleItemRemove = itemId => {
    dispatch(removeItemFromCart(itemId));
  };

  const handleQuantityIncrease = index => {
    const newQuantity = [...quantity];
    newQuantity[index]++;
    setQuantity(newQuantity);
  };

  const handleQuantityDecrease = index => {
    if (quantity[index] > 1) {
      const newQuantity = [...quantity];
      newQuantity[index]--;
      setQuantity(newQuantity);
    }
  };

  const totalPrice = cart.reduce(
    (acc, item, index) => acc + parseInt(item.price) * quantity[index],
    0
  );

  return (
    <>
      <div className="cart-list-container">
        <div className="cart-list-title-wrap">
          {CARTMENU.map(menu => (
            <div className="cart-list-title" key={menu.id}>
              {' '}
              {menu.menuTitle}{' '}
            </div>
          ))}
        </div>
        {cart.map((item, index) => (
          <div className="cart-list-wrap" key={item.id}>
            <div className="cart-item-productinfo-wrap">
              <img
                className="cart-item-img"
                src={item.src}
                alt="장바구니 사진 이미지"
              />
              <span className="cart-item-text"> {item.title}</span>{' '}
            </div>
            <div className="cart-item-info-wrap">{item.price} </div>{' '}
            <div className="cart-item-info-wrap">
              <button
                className="quantity-button"
                onClick={() => handleQuantityDecrease(index)}
              >
                -
              </button>
              <span className="cart-item-text">{quantity[index]} </span>
              <button
                className="quantity-button"
                onClick={() => handleQuantityIncrease(index)}
              >
                +
              </button>
            </div>
            <div className="cart-item-info-wrap">
              <button
                className="delete-button"
                onClick={() => handleItemRemove(item.id)}
              >
                삭제하기
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="order-wrap">
        <span className="order-price"> 주문 금액 : {totalPrice} </span>
        <button className="checkout-button">결제하기</button>
      </div>
    </>
  );
};

export default CartList;
const CARTMENU = [
  { id: 1, menuTitle: '상품정보' },
  { id: 2, menuTitle: '가격' },
  { id: 3, menuTitle: '개수' },
  { id: 4, menuTitle: '옵션' },
];
