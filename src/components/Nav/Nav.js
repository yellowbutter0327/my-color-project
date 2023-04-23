import React, { useEffect, useState } from 'react';
import './Nav.scss';
import { Link, useNavigate } from 'react-router-dom';
import { APIS } from '../../config';

const Nav = () => {
  const navigate = useNavigate();
  const [itemList, setItemList] = useState();
  const [searchInput, setSearchInput] = useState();
  const isLoginCheck = !!localStorage.getItem('TOKEN');

  // useEffect(() => {
  //   fetch(`${APIS.ipAddress}/users/1`, {
  //     headers: { authorization: localStorage.getItem('TOKEN') },
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       // console.log(data.myData.writerId);
  //       setUserId(data.myData.writerId);
  //     });
  //   fetch(`${APIS.ipAddress}/products`)
  //     .then(res => res.json())
  //     .then(result => {
  //       setItemList(result);
  //     });
  // }, []);

  return (
    <div className="nav-header">
      <div className="top-header">
        <div className="left-wrap">
          <div className="logo">
            <Link to="/">
              <img className="main-logo" src="/images/main-logo.jpeg" />
            </Link>
          </div>
          <div className="search-wrap">
            <input
              type="text"
              placeholder="검색 "
              value={searchInput}
              className="search-input"
              onChange={e => setSearchInput(e.target.value)}
            />
            <img
              src="/images/search-icon.png"
              alt="검색 아이콘"
              className="search-icon"
            />
          </div>
        </div>
        <div className="right-wrap">
          <div className="logo-wrap">
            <div className="cart-wrap">
              <Link to="/cart" className="cart-link">
                <img
                  src="/images/cart-icon.png"
                  alt="장바구니 아이콘"
                  className="cart-icon"
                />
              </Link>
            </div>

            <div className="login-wrap">
              <Link to="/login" className="login-link">
                <span className="login-span">로그인/회원가입</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-header">
        <ul className="nav-category-wrap">
          <li className="nav-category-list">
            <Link to="/personalcolor">퍼스널 컬러?</Link>
          </li>
          <li className="nav-category-list">
            <Link to="/productlist">쇼핑하기</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
