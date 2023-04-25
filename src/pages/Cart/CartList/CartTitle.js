import React from 'react';
import './CartTitle.scss';

const CartTitle = () => {
  <div className="cart-list-title-wrap">
    {CARTMENU.map(menu => (
      <div className="cart-list-title" key={menu.id}>
        {' '}
        {menu.menuTitle}{' '}
      </div>
    ))}
  </div>;
};

export default CartTitle;

const CARTMENU = [
  { id: 1, menuTitle: '상품정보' },
  { id: 2, menuTitle: '가격' },
  { id: 3, menuTitle: '개수' },
  { id: 4, menuTitle: '옵션' },
];
