// ImageBox.js
import React from 'react';
import './ImageBox.css';

const ImageBox = ({ imageUrl, title }) => (
  <div className="image-box">
    <img src={imageUrl} alt={title} />
    {/* <div className="image-title">{title}</div> */}
  </div>
);

export default ImageBox;
