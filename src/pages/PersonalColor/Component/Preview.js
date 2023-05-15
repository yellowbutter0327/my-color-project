import React, { useState } from 'react';
import './Preview.scss';
function Preview() {
  const [image, setImage] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  function ImageChangeEvent(event) {
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(selectedFile);

    fileReader.onload = event => {
      setImage(event.target.result);
    };
  }

  return (
    <div className="color-check-wrap">
      <div className="color-left-wrap">
        {seasonLeft.map(season => (
          <div className="color-picker">
            <h4>{season.name}</h4>
            <div className="color-box">
              {season.colors.map(color => (
                <button
                  className="color"
                  style={{ background: color }}
                  onClick={() => {
                    setSelectedColor(color);
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="preview-container">
        <label
          htmlFor="type-file"
          className={`file-wrap ${!image ? '' : 'no-image'}`}
        >
          <input
            className="file-image"
            type="file"
            id="type-file"
            accept="image/*"
            onChange={ImageChangeEvent}
          />
          <div className="file-image-handler" />
        </label>
        {!image && (
          <p className="preview-message">
            민낯 얼굴 사진을 넣어주세요.
            <br />
            색상 버튼을 클릭했을 때 화사해지는 것이 <br /> 자신의 퍼스널 컬러에
            가깝습니다.
          </p>
        )}
        {image && (
          <img src={image} alt="Selected file" className="upload-img" />
        )}
        <div className="bg" style={{ background: selectedColor }} />
      </div>

      <div className="color-right-wrap">
        {seasonRight.map(season => (
          <div className="color-picker">
            <h4>{season.name}</h4>
            <div className="color-box">
              {season.colors.map(color => (
                <button
                  className="color"
                  style={{ background: color }}
                  onClick={() => {
                    setSelectedColor(color);
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Preview;

const seasonLeft = [
  {
    name: 'Spring',
    colors: [
      '#f4cda4',
      '#f2b3a8',
      '#4c7f82',
      '#94d3ca',
      '#7b639f',
      '#005072',
      '#61aa51',
      '#9ec6f0',
    ],
  },
  {
    name: 'Summer',
    colors: [
      '#eadbca',
      '#43393a',
      '#624f4c',
      '#43393a',
      '#e2a4b3',
      '#7273ad',
      '#487187',
      '#436659',
    ],
  },
];

const seasonRight = [
  {
    name: 'Autumn',
    colors: [
      '#c97947',
      '#caab55',
      '#6d6e2b',
      '#983636',
      '#e9dbc3',
      '#d7af84',
      '#1f2950',
      '#000000',
    ],
  },
  {
    name: 'Winter',
    colors: [
      '#7a2840',
      '#215f4f',
      '#164669',
      '#443359',
      '#2a2a37',
      '#1a2b50',
      '#c3c1c2',
      '#fefefe',
    ],
  },
];
