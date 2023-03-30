import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapLink">
        <div className="linkList">
          <div className="category">CATEGORY LIST</div>
          {CATEGORY_LIST.map((obj, index) => {
            return (
              <Link key={index} className="categoryLink" to={obj.link}>
                {obj.pageName}
              </Link>
            );
          })}
        </div>
        <div className="linkList">
          <div className="service">SERVICE</div>
          {localStorage.getItem('TOKEN') ? (
            <>
              <Link className="serviceLink" to="/productregister">
                판매하기
              </Link>
              <Link
                className="serviceLink"
                onClick={() => {
                  localStorage.removeItem('TOKEN');
                }}
                to="/login"
              >
                로그아웃
              </Link>
            </>
          ) : (
            <>
              <button
                className="needPermissionButton"
                onClick={() => {
                  alert('로그인이 필요한 서비스 입니다.');
                }}
              >
                판매하기
              </button>
              <Link to="/login" className="serviceLink">
                로그인
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="wrapProfile">
        <div className="developer">DEVELOPER</div>
        <div className="profile">
          <div className="profileName">조은혜</div>
          <div className="profilePosition">프론트엔드</div>
          <a
            className="profileGithub"
            href="https://github.com/yellowbutter0327"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
        </div>
        <div className="officeInfo">
          <div>상호명 : (주) my-color </div>
          <div>주소 : 서울특별시 강남구 케로로 359 짱구타워 19층</div>
          <div>대표번호 : 0000-0000</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const CATEGORY_LIST = [
  {
    pageName: '봄 웜톤',
    to: '/?category=봄웜톤',
  },
  {
    pageName: '여름 쿨톤',
    to: '/?category=여름쿨톤',
  },
  {
    pageName: '가을 웜톤',
    to: '/?category=가을웜톤',
  },
  {
    pageName: '겨울 쿨톤',
    to: '/?category=겨울쿨톤',
  },
];
