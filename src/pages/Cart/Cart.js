import React from 'react';
import './Cart.scss';

import { useDispatch, useSelector } from 'react-redux';
import { addCount, minusCount, deleteCount } from '../../store/store.js';

const Cart = () => {
  let cart = useSelector(state => state);
  let dispatch = useDispatch();
  return (
    <div className="header">
      <thead>
        <tr>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        {cart.item.map((a, i) => (
          <tr key={i}>
            <td>{cart.item[i].title}</td>
            <td>{cart.item[i].id}</td>
            <button
              onClick={() => {
                dispatch(addCount(cart.item[i].id));
              }}
            >
              {' '}
              +{' '}
            </button>
            <button
              onClick={() => {
                dispatch(minusCount(cart.item[i].id));
              }}
            >
              {' '}
              -{' '}
            </button>
            <button
              onClick={e => {
                dispatch(deleteCount(e.target.parentElement));
              }}
            >
              {' '}
              삭제{' '}
            </button>
          </tr>
        ))}
      </tbody>
    </div>
  );
};

export default Cart;
