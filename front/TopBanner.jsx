import React from 'react';
import image1 from './images/banner/topbanner.jpg';
import image2 from './images/banner/topbanner2.png';

import './TopBanner.css';

const TopBanner = () => {
  return (
    <div className="top-banner">
        
      <img src={image2} alt="Image 2" />
      <img src={image1} alt="Image 1" />

    </div>
  );
};

export default TopBanner;