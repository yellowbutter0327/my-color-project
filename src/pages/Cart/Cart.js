import React from 'react';
import { useState, useEffect } from 'react';
import EmptyCart from './EmptyCart/EmptyCart';
import CartList from './CartList/CartList';
import CartTitle from './CartList/CartTitle';
import './Cart.scss';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const userId = sessionStorage.getItem('userId');
  //   const userPassword = sessionStorage.getItem('userPassword');
  //   if (userId && userPassword) {
  //     setIsLoggedIn(true);
  //     const cartData = JSON.parse(sessionStorage.getItem('cart'));
  //     if (cartData) {
  //       dispatch({ type: 'SET_CART', payload: cartData });
  //     }
  //   }
  // }, []);

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     sessionStorage.setItem('cart', JSON.stringify(cart));
  //   }
  // }, [cart, isLoggedIn]);

  return (
    <div className="cart-all-wrap">
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <CartTitle /> <CartList cart={cart} />{' '}
        </>
      )}
    </div>
  );
};

export default Cart;
