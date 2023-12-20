import React from 'react';
import airforce from './images/Guide/airforce.png';
import jordandunk from './images/Guide/jordandunk.png';
import ugg from './images/Guide/ugg.png';
import yeezyboost from './images/Guide/yeezyboost.png';
import yeezyslider from './images/Guide/slider.png';
import './Guide.css';

const guideData = [
  {
    "Guide": "에어포스 구매자들을 위한 가이드",
    "imageUrl": airforce,
    "link": "https://stockx.com/news/ko-kr/the-buyers-guide-nike-air-force-1/"
  },
  {
    "Guide": "조던 구매자들을 위한 가이드",
    "imageUrl": jordandunk,
    "link": "https://stockx.com/news/ko-kr/the-buyers-guide-nike-sb-dunk-low/"
  },
  {
    "Guide": "UGG 구매자들을 위한 가이드",
    "imageUrl": ugg,
    "link": "https://stockx.com/news/ko-kr/ugg-the-buyers-guide/"
  },
  {
    "Guide": "이지부스트 구매자들을 위한 가이드",
    "imageUrl": yeezyboost,
    "link": "https://stockx.com/ko-kr/crochttps://stockx.com/news/ko-kr/the-buyers-guide-yeezy-boost-350-v2/"
  },
  {
    "Guide": "이지슬라이드 구매자들을 위한 가이드",
    "imageUrl": yeezyslider,
    "link": "https://stockx.com/news/ko-kr/the-buyers-guide-yeezy-slides/"
  }
];

const Guide = () => {
  return (
    <div>
      <h2 className="Guide-title-box"><strong> 구매 Guide & Tips </strong></h2>
      <ul className="Guide-container">
        {guideData.map((model, index) => (
          <li key={index} className="Guide-item-box">
            <div className="Guide-card-container">
              <a href={model.link}>
                <div className="Guide-image-container">
                  <img
                    src={model.imageUrl}
                    alt={model.Guide}
                    className="Guide-image-box"
                  />
                </div>
                <div className="Guide-details-box">
                  <p className="Guide-name-box"><strong>{model.Guide}</strong></p>
                </div>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Guide;
