import React, { useEffect, useState } from 'react';
import './Nav.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectIsLoggedIn } from '../../store/Feature/userSlice';
import { auth, onAuthStateChanged } from '../../firebase';

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, userAuth => {
      if (userAuth) {
        console.log('User is logged in:', userAuth.uid);
        dispatch(
          login({
            userId: userAuth.uid,
          })
        );
      } else {
        console.log('User is logged out');
        dispatch(logout());
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    auth.signOut();
    navigate('/');
  };

  // 검색 기능
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    const query = new URLSearchParams({ q: searchInput }).toString();
    navigate(`/search?${query}`);
    setSearchInput('');
  };

  return (
    <div className="nav-header">
      <div className="top-header">
        <div className="left-wrap">
          <div className="logo">
            <Link to="/">
              <img
                className="main-logo"
                src="/images/main-logo.jpeg"
                alt="메인 로고 이미지"
              />
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
              onClick={handleSearch}
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
