import React from 'react';
import './PersonalColorInfo.scss';
import spring from 'assets/Main/spring.jpg';
import summer from 'assets/Main/summer.jpg';
import fall from 'assets/Main/fall.jpg';
import winter from 'assets/Main/winter.jpg';

const PersonalColorInfo = () => {
  return (
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
  );
};

export default PersonalColorInfo;

const COLORINFO = [
  { id: 1, src: spring, text: '봄 웜톤 특징' },
  { id: 2, src: summer, text: '여름 쿨톤 특징 ' },
  { id: 3, src: fall, text: '가을 웜톤 특징' },
  { id: 4, src: winter, text: '겨울 쿨톤 특징' },
];
