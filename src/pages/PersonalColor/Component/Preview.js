import React, { useState } from 'react';
import './Preview.scss';

function Preview() {
  const [image, setImage] = useState('');

  function ImageChangeEvent(event) {
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(selectedFile);

    fileReader.onload = event => {
      setImage(event.target.result);
    };
  }

  return (
    <div className="preview-container">
      <label htmlFor="type-file" className="file-wrap">
        <input
          className="file-image"
          type="file"
          id="type-file"
          accept="image/*"
          onChange={ImageChangeEvent}
        />
        <div className={`file-image-handler ${!image ? '' : 'no-image'}`} />
      </label>
      {!image && <p className="preview-message">사진을 넣어주세요</p>}
      {image && <img src={image} alt="Selected file" className="uploadImg" />}
    </div>
  );
}

export default Preview;
