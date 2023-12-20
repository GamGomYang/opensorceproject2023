import React from 'react';
import magazine1 from './images/Guide/magazine1.png';
import magazine2 from './images/Guide/magazine2.png';
import magazine3 from './images/Guide/magazine3.png';
import magazine4 from './images/Guide/magazine4.png';
import magazine5 from './images/Guide/magazine5.png';
import magazine6 from './images/Guide/magazine6.png';
import './MagazinePage.css';
import Banner_magazine from './Banner_magazine';

const guideData = [
  {
    "Guide": "오징어게임을 품은 베어브릭",
    "date":"12월12일 2023",
    "imageUrl": magazine6,
    "link": "https://stockx.com/news/ko-kr/bearbrick-squid-game-ko-kr/"
  },
  
  {
    "Guide": "A Winter Dream: Luxury For Less",
    "date":"12월3일 2023",
    "imageUrl": magazine3,
    "link": "https://stockx.com/news/ko-kr/a-winter-dream-luxury-for-less/"
  },
  {
    "Guide": "What’s On Our Wish Lists",
    "date":"12월2일 2023",
    "imageUrl": magazine1,
    "link": "https://stockx.com/news/ko-kr/a-winter-dream-luxury-for-less/"
  },
  {
    "Guide": "선물하기 좋은 신발 : 뉴발란스",
    "date":"11월 29일 2023",
    "imageUrl": magazine4,
    "link": "https://stockx.com/news/ko-kr/easy-gifts-new-balance/"
  },
  {
    "Guide": "Gifts for the Luxe Lover",
    "date":"11월11일 2023",
    "imageUrl": magazine5,
    "link": "https://stockx.com/news/ko-kr/gifts-for-the-luxe-lover/"
  },
  
  {
    "Guide": "The Annual Jordan 11 Winter is Here",
    "date":"12월1일 2023",
    "imageUrl": magazine2,
    "link": "https://stockx.com/news/ko-kr/the-annual-jordan-11-winter-is-here/"
  }
];

const Magazine = () => {
  return (
    <div>
      <Banner_magazine/>
 
      <ul className="Guide-list">
        {guideData.map((model, index) => (
          <li key={index} className="Guide-item">
            <div className="Guide-card">
              <a href={model.link}>
                <div className="Guide-image-container">
                  <img
                    src={model.imageUrl}
                    alt={model.Guide}
                    className="Guide-image"
                  />
                </div>
                <div className="Guide-details">
                  <p className="Guide-name"><strong>{model.Guide}</strong></p>
                </div>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Magazine;
