import React, { useState, useEffect } from 'react';
import './Register.scss';

function Register() {
  return (
    <div className="container">
      <div className="contents">
        <h4 className="signup"> 회원가입</h4>

        <div className="signup-form">
          <div className="form-wrap">
            <label htmlFor="email">이메일</label>
            <input type="text" placeholder="이메일을 입력해주세요" />
            <p className="alert-txt">올바른 이메일을 입력해주세요</p>
          </div>

          <div className="form-wrap">
            <label htmlFor="pw">비밀번호</label>
            <input
              name="userpassword"
              type="password"
              placeholder="영문, 숫자, 특수문자를 포함해서 8자 이상으로 입력해주세요"
            />
            <p className="alert-txt">비밀번호를 입력해주세요</p>
          </div>

          <div className="form-wrap">
            <label htmlFor="pw2">비밀번호 확인</label>
            <input
              name="userpassword2"
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요"
            />
            <p className="alert-txt">비밀번호가 일치하지 않습니다.</p>
          </div>
          <div className="form-wrap">
            <div className="nickname-repeat">
              <label htmlFor="nickname">닉네임</label>
              <input name="usernickname" type="text" placeholder="닉네임" />
              <button className="check-repeat">중복확인</button>
            </div>

            <p className="alert-name">
              닉네임을 설정하지 않을 시,
              <br /> 성함이 가운데 부분이 * 처리된 상태로 노출됩니다. <br />
              <span> 예시 홍*동 </span>
            </p>

            <button className="check-adult">휴대폰으로 성인인증하기</button>
          </div>
          <button className="submit-btn">가입 완료</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
