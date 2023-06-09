import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.scss';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Register() {
  const [nickname, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pwSame, setPwSame] = useState('');
  const [nickValid, setNickValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [pwSameValid, setPwSameValid] = useState(false);
  const [allow, setAllow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (nickValid && emailValid && pwValid && pwSameValid) {
      setAllow(true);
    } else {
      setAllow(false);
    }
  }, [nickValid, emailValid, pwValid, pwSameValid]);

  const handleNick = e => {
    setNickName(e.target.value);
    if (nickname.length >= 2) {
      setNickValid(true);
    } else {
      setNickValid(false);
    }
  };
  const handleEmail = e => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePw = e => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const handlePwSame = e => {
    setPwSame(e.target.value);
    if (e.target.value === pw) {
      setPwSameValid(true);
    } else {
      setPwSameValid(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!allow) {
      alert('회원가입에 실패하였습니다.');
      return;
    }

    createUserWithEmailAndPassword(auth, email, pw)
      .then(userCredential => {
        console.log(userCredential);
        alert('회원가입이 완료되었습니다.');
        navigate('/login'); // 회원가입 후 홈 페이지로 이동
      })
      .catch(error => {
        console.error('Error creating user:', error);
        alert('회원가입에 실패하였습니다.');
      });
  };

  return (
    <div className="container">
      <h1 className="register-main-title">회원가입</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="register-input-wrap">
          <div className="register-title"> 닉네임 </div>
          <input
            className="register-input"
            type="text"
            placeholder="닉네임을 입력해주세요"
            onChange={handleNick}
            value={nickname}
          />
          <div className="errorMessageWrap">
            {!nickValid && nickname.length > 0 && (
              <div>3글자 이상 입력해주세요.</div>
            )}
            {nickValid && nickname.length > 0 && (
              <div>사용 가능한 닉네임입니다.</div>
            )}
          </div>
        </div>
        <div className="register-input-wrap">
          <div className="register-title"> 이메일을 입력하세요 </div>
          <input
            className="register-input"
            type="text"
            placeholder="숫자,영문,특수문자 포함된 이메일"
            value={email}
            onChange={handleEmail}
          />
          <div className="errorMessageWrap">
            {!emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )}
            {emailValid && email.length > 0 && (
              <div>사용가능한 이메일입니다.</div>
            )}
          </div>
        </div>

        <div className="register-input-wrap">
          <div className="register-title"> 비밀번호를 입력하세요 </div>
          <input
            className="register-input"
            type="password"
            placeholder="비밀번호"
            value={pw}
            onChange={handlePw}
          />
          <div className="errorMessageWrap">
            {!pwValid && pw.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
            {pwValid && pw.length > 0 && <div>사용가능한 비밀번호입니다.</div>}
          </div>
        </div>
        <div className="register-input-wrap">
          <div className="register-title"> 비밀번호 재확인 </div>
          <input
            className="register-input"
            type="password"
            placeholder="비밀번호 재확인"
            onChange={handlePwSame}
            value={pwSame}
          />
          <div className="errorMessageWrap">
            {!pwSameValid && pw.length > 0 && (
              <div>비밀번호와 일치하지 않습니다.</div>
            )}
            {pwSameValid && pw.length > 0 && <div>비밀번호와 일치합니다.</div>}
          </div>
        </div>
      </form>
      <div className="register-button-wrap">
        <button
          className="register-button"
          type="button"
          onClick={handleSubmit}
        >
          가입하기
        </button>
      </div>
    </div>
  );
}

export default Register;
