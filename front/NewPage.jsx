import React from 'react';
import Nike_KD_3_Retro from './images/item/Nike_KD_3_Retro.png';
import Travis_Scott_Cactus_Jack from './images/item/Travis_Scott_Cactus_Jack.png';
import Nike_Dunk_Low_PRM from './images/item/Nike_Dunk_Low_PRM.png';
import ASICS_Gel_Kayano_14 from './images/item/ASICS_Gel_Kayano_14.png';
import Jordan_1_High_OG from './images/item/Jordan_1_High_OG.png';
import BearbrickxJean_Michel_Basquiat from './images/item/BearbrickxJean_Michel_Basquiat.png';
import FomulaHKE from './images/item/notwoways Formula HKE.png';
import reeboknew from './images/item/reeboknew.png';
import puma_mb_03 from './images/item/puma_mb_03.png';

import './NewPage.css';
import Banner_NewPage from './Banner_Newpage';

const guideData = [
  {
    "Guide": "Nike KD 3 Retro",
    "name": "나이키 KD 3 레트로",
    "date": "12월19일",
    "imageUrl": Nike_KD_3_Retro,
    "link": "https://stockx.com/news/ko-kr/bearbrick-squid-game-ko-kr/"
  },
  {
    "Guide": "Travis Scott Cactus Jack",
    "name": "트래비스 스콧 카커스 잭",
    "date": "12월 20일",
    "imageUrl": Travis_Scott_Cactus_Jack,
    "link": "https://stockx.com/news/ko-kr/a-winter-dream-luxury-for-less/"
  },
  {
    "Guide": "Nike Dunk Low PRM",
    "name": "나이키 덩크 로우 PRM",
    "date": "12월 23일",
    "imageUrl": Nike_Dunk_Low_PRM,
    "link": "https://stockx.com/news/ko-kr/a-winter-dream-luxury-for-less/"
  },
  {
    "Guide": "ASICS Gel Kayano 14",
    "name": "ASICS 젤 카야노 14",
    "date": "12월 27일",
    "imageUrl": ASICS_Gel_Kayano_14,
    "link": "https://stockx.com/news/ko-kr/easy-gifts-new-balance/"
  },
  {
    "Guide": "Jordan 1 High OG",
    "name": "조던 1 하이 OG",
    "date": "12월 27일",
    "imageUrl": Jordan_1_High_OG,
    "link": "https://stockx.com/news/ko-kr/gifts-for-the-luxe-lover/"
  },
  {
    "Guide": "BearbrickxJean Michel Basquiat",
    "name": "베어브릭x장 미셸 바스키아",
    "date": "1월 1일",
    "imageUrl": BearbrickxJean_Michel_Basquiat,
    "link": "https://stockx.com/news/ko-kr/the-annual-jordan-11-winter-is-here/"
  },
  {
    "Guide": "Fnotwoways Formula HKE",
    "name": "포뮬러 HKE",
    "date": "1월 1일",
    "imageUrl": FomulaHKE,
    "link": "https://stockx.com/news/ko-kr/the-annual-jordan-11-winter-is-here/"
  },  
  {
    "Guide": "Reebok Instapump Fury 95",
    "name": "리복 인스타펌 퓨리 95",
    "date": "1월 4일",
    "imageUrl": reeboknew,
    "link": "https://stockx.com/news/ko-kr/the-annual-jordan-11-winter-is-here/"
  },
  {
    "Guide": "Puma LaMelo Ball MB.03",
    "name": "푸마 라멜로 볼 MB.03",
    "date": "1월 5일",
    "imageUrl": puma_mb_03,
    "link": "https://stockx.com/news/ko-kr/the-annual-jordan-11-winter-is-here/"
  }
];

const NewPage = () => {
    return (
        
      <div>
        <Banner_NewPage/>
        
        <ul className="Guide-list">
          {guideData.map((model, index) => (
            <li key={index} className="Guide-item">
              <div className="Guide-card">
                <a href={model.link}>
                  <div className="Guide-image-container">
                    <p className="Guide-date"><strong>{model.date}</strong></p>
                    <img
                      src={model.imageUrl}
                      alt={model.Guide}
                      className="Guide-image"
                    />
                  </div>
                  <div className="Guide-details">
                    <p className="Guide-name"><strong>{model.Guide}</strong></p>
                    <p className="Guide-name"><strong>{model.name}</strong></p>
                  </div>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default NewPage;