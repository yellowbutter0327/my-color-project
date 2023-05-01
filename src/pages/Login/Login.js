import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import iconKakao from 'assets/Login/icon_kakao.png';
import './Login.scss';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const PW_REG_EXP =
  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,}$/;

const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    userId: '',
    userPassword: '',
  });

  const getUserInfo = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const { userId, userPassword } = userInfo;
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isInputValid = userId.includes('@') && PW_REG_EXP.test(userPassword);

  const handleSubmit = e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userId, userPassword)
      .then(userCredential => {
        sessionStorage.setItem('userId', userId);
        sessionStorage.setItem('userPassword', userPassword);
        // setIsLoggedIn(true);
        alert('안녕하세요 :)');
        navigate('/');
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="login">
      <h4 className="title-login">로그인</h4>
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit} method="POST">
          <div className="form-wrap">
            <input
              onChange={getUserInfo}
              id="input-email"
              name="userId"
              type="text"
              placeholder="아이디"
            />
          </div>

          <div className="form-wrap">
            <input
              onChange={getUserInfo}
              id="input-password"
              name="userPassword"
              type="password"
              placeholder="비밀번호"
            />
          </div>

          <button
            className="login-button"
            disabled={!isInputValid}
            type="button"
            onClick={handleSubmit}
          >
            로그인
          </button>
        </form>

        <div className="social-button">
          <button className="login-button-kakao" type="submit">
            <img className="social-icon" src={iconKakao} />
            카카오로 1초만에 시작하기
          </button>
        </div>

        <div className="signup-and-find">
          <Link to="/register/terms" className="link">
            회원가입
          </Link>
          <Link to="/login" className="link">
            아이디 찾기
          </Link>
          <Link to="/login" className="link">
            비밀번호 찾기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
