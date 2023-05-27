import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="wrap-link">
          <div className="link-list">
            <div className="category">CATEGORY LIST</div>
            {CATEGORY_LIST.map((obj, index) => {
              return (
                <Link key={index} className="category-link" to={obj.link}>
                  {obj.pageName}
                </Link>
              );
            })}
          </div>
          <div className="link-list">
            <div className="service">SERVICE</div>
            <Link to="/login" className="service-link">
              퍼스널 컬러
            </Link>
          </div>
        </div>
        <div className="wrap-profile">
          <div className="developer">DEVELOPER</div>
          <div className="profile">
            <div className="profile-name">조은혜</div>
            <div className="profile-position">프론트엔드</div>
            <a
              className="profile-github"
              href="https://github.com/yellowbutter0327"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
          </div>
          <div className="office-info">
            <div>상호명 : (주) my-color </div>
            <div>주소 : 서울특별시 강남구 케로로 359 짱구타워 19층</div>
            <div>대표번호 : 0000-0000</div>
          </div>
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
