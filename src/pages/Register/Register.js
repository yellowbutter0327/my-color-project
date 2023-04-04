import React, { useState, useEffect } from 'react';
import './Register.scss';
import Toggle from './Component/Toggle.js';

function Register() {
  const [allCheck, setAllCheck] = useState(false);
  const [personalInfo, setpersonalInfo] = useState(false);
  const [infoUse, setinfoUse] = useState(false);
  const [infoAge, setinfoAge] = useState(false);
  const [optionAgree, setOptionAgree] = useState(false);

  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setpersonalInfo(true);
      setinfoUse(true);
      setinfoAge(true);
      setOptionAgree(true);
    } else {
      setAllCheck(false);
      setpersonalInfo(false);
      setinfoUse(false);
      setinfoAge(false);
      setOptionAgree(false);
    }
  };

  const personalInfoEvent = () => {
    if (personalInfo === false) {
      setpersonalInfo(true);
    } else {
      setpersonalInfo(false);
    }
  };

  const InfoUseEvent = () => {
    if (infoUse === false) {
      setinfoUse(true);
    } else {
      setinfoUse(false);
    }
  };

  const InfoAgeEvent = () => {
    if (infoAge === false) {
      setinfoAge(true);
    } else {
      setinfoAge(false);
    }
  };

  const optionAgreeEvent = () => {
    if (optionAgree === false) {
      setOptionAgree(true);
    } else {
      setOptionAgree(false);
    }
  };

  useEffect(() => {
    if (
      personalInfo === true &&
      infoUse === true &&
      infoAge === true &&
      optionAgree === true
    ) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [personalInfo, infoUse, infoAge, optionAgree]);

  return (
    <div className="all-container">
      <div className="register-wrap">
        <div className="all-check-wrap">
          <input
            type="checkbox"
            name="check-all"
            id="check-all"
            className="all-checkbox"
            checked={allCheck}
            onChange={allBtnEvent}
          />
          <span className="all-check-text">
            my-color 이용약관에 모두 동의합니다.
          </span>
        </div>
        <Toggle
          checked={personalInfo}
          onChange={personalInfoEvent}
          title="[필수] 개인정보 취급 위탁"
          content="본 약관은 다양한 MY-COLOR 서비스의 이용과 관련하여 서비스를 제공하는 MY-COLOR 주식회사에서 개인정보를 사용하는 약관에 대해 설명하며 아울러 서비스 이용에 도움이 될 수 있도록 합니다. 홈페이지를 운영하기 위해 사용자의 개인정보를 사용합니다. 사용약관은 필수적으로 읽으셔야 합니다. 서비스 문제에 이용이 없도록 약관을 간결하고 정확하게 적으려고 노력하고 있습니다. 다 읽으신 후에 체크표시를 눌러주세요."
        />
        <Toggle
          checked={infoUse}
          onChange={InfoUseEvent}
          title="[필수] 개인정보 수집 및 이용에 대한 안내"
          content="본 약관은 다양한 MY-COLOR 서비스의 이용과 관련하여 서비스를 제공하는 MY-COLOR 주식회사에서 개인정보를 사용하는 약관에 대해 설명하며 아울러 서비스 이용에 도움이 될 수 있도록 합니다. 홈페이지를 운영하기 위해 사용자의 개인정보를 사용합니다. 사용약관은 필수적으로 읽으셔야 합니다. 서비스 문제에 이용이 없도록 약관을 간결하고 정확하게 적으려고 노력하고 있습니다. 다 읽으신 후에 체크표시를 눌러주세요."
        />
        <Toggle
          checked={infoAge}
          onChange={InfoAgeEvent}
          title="[필수] 본인은 14세 이상입니다."
          content="다양한 MY-COLOR 서비스의 이용과 관련하여 서비스를 이용하기 위해서는 만 14세 이상이어야 합니다. 화장품 구매에 있어 나이 제한을 두고 있습니다. 사용약관은 필수적으로 읽으셔야 합니다. 서비스 문제에 이용이 없도록 약관을 간결하고 정확하게 적으려고 노력하고 있습니다. 다 읽으신 후에 체크표시를 눌러주세요."
        />
        <Toggle
          checked={optionAgree}
          onChange={optionAgreeEvent}
          title="[선택] 제 3자 정보 동의"
          content="선택 사항입니다. MY-Color 서비스를 이용하기 위한 제 3자 정보 동의 약관입니다. 본 약관은 다양한 MY-COLOR 서비스의 이용과 관련하여 서비스를 제공하는 MY-COLOR 주식회사와 이를 이용하는 서비스 회원 또는 비회원과의 관계를 설명하며 아울러 서비스 이용에 도움이 될 수 있도록 합니다. 사용약관은 필수적으로 읽으셔야 합니다. 서비스 문제에 이용이 없도록 약관을 간결하고 정확하게 적으려고 노력하고 있습니다. 다 읽으신 후에 체크표시를 눌러주세요."
        />
      </div>
      <button
        disabled={!personalInfo || !infoUse || !infoAge}
        className="next-button"
      >
        다음
      </button>
    </div>
  );
}

export default Register;
