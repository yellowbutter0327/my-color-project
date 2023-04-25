import React, { useState } from 'react';
import './ProductMenu.scss';

const ProductMenu = ({ currentTab, setCurrentTab }) => {
  const menuItem = MenuData[currentTab];

  const handleClick = id => {
    setCurrentTab(id);
  };

  return (
    <div className="menu-wrapper">
      <div className="menu-list">
        <div className="menu-item">
          {MenuData.map(menu => (
            <div
              key={menu.id}
              onClick={() => handleClick(menu.id)}
              className="menu-name"
            >
              <div
                className={
                  currentTab === menu.id ? 'turn-on-btn' : 'turn-off-btn'
                }
                style={{ color: menu.color }}
              >
                {menu.title}
              </div>
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
    title: '봄 웜톤',
    color: 'pink',
    description: '상큼하고 화사한 봄 웜톤에게 어울리는 색조 화장품',
    background: 'gray',
    src: '/images/spring.jpg',
    filterLists: [
      { id: 0, title: '립', options: [{ id: 0, option: '탁주' }] },
      { id: 1, title: '아이', options: [{ id: 0, option: '탁주' }] },
      { id: 2, title: '블러셔', options: [{ id: 0, option: '탁주' }] },
    ],
  },
  {
    id: 1,
    title: '여름 쿨톤',
    color: 'lightblue',
    description: '시크하며 세련된 여름 쿨톤에게 어울리는 색조 화장품',
    background: 'rgb(232,242,255)',
    src: '/images/summer.jpg',

    filterLists: [
      { id: 0, title: '립', options: [{ id: 0, option: '탁주' }] },
      { id: 1, title: '아이', options: [{ id: 0, option: '탁주' }] },
      { id: 2, title: '블러셔', options: [{ id: 0, option: '탁주' }] },
    ],
  },
  {
    id: 2,
    title: '가을 웜톤',
    color: '#b98d7c ',
    description: '지적이고 차분한 가을 웜톤에게 어울리는 색조 화장품',
    background: 'rgb(255,246,232)',
    src: '/images/fall.jpg',
    filterLists: [
      { id: 0, title: '립', options: [{ id: 0, option: '탁주' }] },
      { id: 1, title: '아이', options: [{ id: 0, option: '탁주' }] },
      { id: 2, title: '블러셔', options: [{ id: 0, option: '탁주' }] },
    ],
  },
  {
    id: 3,
    title: '겨울 쿨톤',
    color: 'gray',
    description: '도시적이고 세련된 겨울 쿨톤에게 어울리는 색조 화장품',
    background: 'rgb(255,246,232)',
    src: '/images/winter.jpg',
    filterLists: [
      { id: 0, title: '립', options: [{ id: 0, option: '탁주' }] },
      { id: 1, title: '아이', options: [{ id: 0, option: '탁주' }] },
      { id: 2, title: '블러셔', options: [{ id: 0, option: '탁주' }] },
    ],
  },
];
