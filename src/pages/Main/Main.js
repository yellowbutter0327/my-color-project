import React from 'react';
import './Main.scss';
import Carousel from './Carousel/Carousel';
import PersonalColorInfo from './PersonalColorInfo/PersonalColorInfo';
import spring from 'assets/Main/spring.jpg';
import summer from 'assets/Main/summer.jpg';
import fall from 'assets/Main/fall.jpg';
import winter from 'assets/Main/winter.jpg';

const Main = () => {
  return (
    <div className="header">
      <Carousel />
      <div className="container1">
        <div className="container1-wrap">
          <span className="container1-tittle">나의 퍼스널 컬러는?</span>
          <PersonalColorInfo />
        </div>
        <a className="check-personal-color" href="#">
          {' '}
          퍼스널 컬러 셀프진단하기{' '}
        </a>
      </div>
      <div className="container2">
        <h4 className="special-price-title">이 상품 어때요?</h4>
        <div className="color-info-container">
          {COLORINFO.map(colorInfo => {
            return (
              <a className="color-info-wrap" key={colorInfo.id} href="#">
                <img className="color-info-img" src={colorInfo.src} />
                <span className="color-info-title"> {colorInfo.text}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;

const COLORINFO = [
  { id: 1, src: spring, text: '봄 웜톤 특징' },
  { id: 2, src: summer, text: '여름 쿨톤 특징 ' },
  { id: 3, src: fall, text: '가을 웜톤 특징' },
  { id: 4, src: winter, text: '겨울 쿨톤 특징' },
];
