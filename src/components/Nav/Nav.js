import React, { useEffect, useState } from 'react';
import './Nav.scss';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const [itemList, setItemList] = useState();
  const [searchInput, setSearchInput] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!sessionStorage.getItem('userId')
  );
  const handleLogout = () => {
    sessionStorage.removeItem('userId');
    setIsLoggedIn(false);
    navigate('/');
  };

  useEffect(() => {
    setIsLoggedIn(!!sessionStorage.getItem('userId'));
  }, [isLoggedIn]);

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
              {isLoggedIn ? (
                <Link to="/cart" className="cart-link">
                  <img
                    src="/images/cart-icon.png"
                    alt="장바구니 아이콘"
                    className="cart-icon"
                  />
                </Link>
              ) : (
                <button
                  onClick={() => alert('로그인이 필요한 서비스입니다.')}
                  className="cart-link"
                >
                  <img
                    src="/images/cart-icon.png"
                    alt="장바구니 아이콘"
                    className="cart-icon"
                  />
                </button>
              )}
            </div>

            <div className="login-wrap">
              {isLoggedIn ? (
                <button onClick={handleLogout}>로그아웃</button>
              ) : (
                <Link to="/login">로그인 / 회원가입</Link>
              )}
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
