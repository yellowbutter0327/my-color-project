import React, { useState } from 'react';
import './ProductMenu.scss';

const ProductMenu = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const menuItem = MenuData[currentTab];

  return (
    <div className="menu-wrapper">
      <div className="menu-list">
        <div className="menu-item">
          {MenuData.map(menu => (
            <div
              key={menu.id}
              onClick={() => setCurrentTab(menu.id)}
              className="menu-name"
            >
              <div
                className={
                  currentTab === menu.id ? 'turn-on-btn' : 'turn-off-btn'
                }
              >
                {menu.title}
              </div>
              <div
                className={
                  currentTab === menu.id ? 'turn-on-light' : 'turn-off-light'
                }
              />
            </div>
          ))}
        </div>
      </div>

      <div className="header-wrapper">
        <div className="header-box">
          <div className="header-title-box">
            <div className="header-title"> {menuItem.title} </div>
            <div className="header-subtitle"> {menuItem.description} </div>
          </div>
          <div className="icon-wrapper">
            <img className="icon-img" src={menuItem.src} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMenu;

const MenuData = [
  {
    id: 0,
    title: '전체상품',
    description: '담화마켓의 모든 술을 만나보세요!',
    background: 'gray',
    src: '/images/sooldamhwa-logo.png',
    filterLists: [
      { id: 0, title: '주종', options: [{ id: 0, option: '탁주' }] },
      { id: 1, title: '배송', options: [{ id: 0, option: '탁주' }] },
      { id: 2, title: '가격', options: [{ id: 0, option: '탁주' }] },
    ],
  },
  {
    id: 1,
    title: '베이스',
    description: '이번 주 새로 들어온 술들이에요.',
    background: 'rgb(232,242,255)',
    src: '/images/sooldamhwa-logo.png',

    filterLists: [
      { id: 0, title: '주종', options: [{ id: 0, option: '탁주' }] },
      { id: 1, title: '배송', options: [{ id: 0, option: '탁주' }] },
      { id: 2, title: '가격', options: [{ id: 0, option: '탁주' }] },
    ],
  },
  {
    id: 2,
    title: '립',
    description: '이번 주 가장 인기가 많은 술',
    background: 'rgb(255,246,232)',
    src: '/images/sooldamhwa-logo.png',
  },
  {
    id: 3,
    title: '아이',
    description: '배송비, 이제는 한 번만 내요',
    background: 'rgb(255,246,232)',
    src: '/images/sooldamhwa-logo.png',
  },
  {
    id: 4,
    title: '치크/컨투어링',
    description: '배송비, 이제는 한 번만 내요',
    background: 'rgb(255,246,232)',
    src: '/images/sooldamhwa-logo.png',
  },
];
