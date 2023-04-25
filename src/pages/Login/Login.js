import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import iconKakao from 'assets/Login/icon_kakao.png';
import './Login.scss';

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

  const handleLogin = e => {
    e.preventDefault();

    fetch('', {
      method: 'POST',
      body: JSON.stringify({
        id: 'Test1234@naver.com',
        pw: 'Test1234!',
      }),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        if (data.accessToken) {
          localStorage.setItem('token', data.accessToken);
          window.location.replace('/');
        } else {
          alert('아이디와 비밀번호를 확인해주세요!');
        }
      })
      .catch(error => {
        console.error(error);
        alert('서버와의 통신에 실패했습니다.');
      });
  };

  const { userId, userPassword } = userInfo;

  const isInputValid = userId.includes('@') && PW_REG_EXP.test(userPassword);

  return (
    <div className="login">
      <h4 className="title-login">로그인</h4>
      <div className="login-form-container">
        <form
          className="login-form"
          onSubmit={handleLogin}
          action="/login"
          method="POST"
        >
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

          <button className="login-button" disabled={!isInputValid}>
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
