import React from 'react';
import { useState, useEffect } from 'react';
import EmptyCart from './EmptyCart/EmptyCart';
import CartList from './CartList/CartList';
import CartTitle from './CartList/CartTitle';
import './Cart.scss';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector(state => state.cart);

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
