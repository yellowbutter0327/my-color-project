import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';
import Carousel from './Carousel/Carousel';
import { useNavigate } from 'react-router-dom';
import PersonalColorInfo from './PersonalColorInfo/PersonalColorInfo';

const Main = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/productItemData.json`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new TypeError('JSON expected');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, []);

  console.log(data);

  const getRandomData = () => {
    const randomData = [];
    const dataCopy = [...data];
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * dataCopy.length);
      randomData.push(dataCopy[randomIndex]);
      dataCopy.splice(randomIndex, 1);
    }
    return randomData;
  };

  console.log(getRandomData());

  return (
    <div className="header">
      <Carousel />
      <div className="container1">
        <div className="container1-wrap">
          <span className="container1-tittle">나의 퍼스널 컬러는?</span>
          <PersonalColorInfo />
        </div>
        <Link to="/personalColor" className="check-personal-color">
          {' '}
          퍼스널 컬러 셀프진단하기{' '}
        </Link>
      </div>
      <div className="container2">
        <h4 className="special-price-title">이 상품 어때요?</h4>
        <div className="color-info-container">
          {getRandomData().map(colorInfo => {
            if (!colorInfo) {
              return null;
            }
            return (
              <Link
                to={`/productdetail/${colorInfo.id}`}
                className="color-info-wrap"
                key={colorInfo.id}
              >
                <img className="color-info-img" src={colorInfo.src} />
                <span className="color-info-title">{colorInfo.title} </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
