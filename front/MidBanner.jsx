import React from 'react';
import image1 from './images/banner/mid_banner1.png';
import image2 from './images/banner/mid_banner2.png';
import './MidBanner.css';

const MidBanner = () => {
  return (
    <div className="mid-banner">
      <img src={image1} alt="Image 1" />
      <img src={image2} alt="Image 2" />
    </div>
  );
};

export default MidBanner;