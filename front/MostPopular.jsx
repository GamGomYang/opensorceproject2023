import React from 'react';
import './PopularModels.css';
import image574 from './images/item/574.png';
import jordanscott from './images/item/jordanscott.png';
import image992 from './images/item/992.png';
import airforce from './images/item/airforce.png';
import jordon1 from './images/item/jordon1.png';
import samba from './images/item/samba.png';
import gazel from './images/item/gazel.png';
import salomon from './images/item/salomon.png';
import zelkayano from './images/item/zelkayano.png';


const PopularModels = () => {
  const popularModelsData = [
    {
      brand: '조던',
      model: '조던 1 레트로 시카고',
      imageUrl: jordon1,
      link: 'https://kream.co.kr/products/83900',
    },
    {
      brand: '아식스',
      model: '젤 카야노 5 OG',
      imageUrl: zelkayano,
      link: 'https://kream.co.kr/products/129482',
    }, {
      brand: '뉴발란스',
      model: '뉴발란스 992',
      imageUrl: image574,
      link: 'https://kream.co.kr/products/23523',
    },

    ,
    {
      brand: '뉴발란스',
      model: '뉴발란스 574',
      imageUrl: image992,
      link: 'https://kream.co.kr/products/65216',
    },

    {
      brand: '아디다스',
      model: '삼바',
      imageUrl: samba,
      link: 'https://kream.co.kr/products/15251',
    }, {
      brand: '아디다스',
      model: '가젤',
      imageUrl: gazel,
      link: 'https://kream.co.kr/products/163261',
    },
    {
      brand: '조던',
      model: '조던 1 트레비스 스콧',
      imageUrl: jordanscott,
      link: 'https://kream.co.kr/products/38367',
    }, {
      brand: '살로몬',
      model: 'XT-6 ADV',
      imageUrl: salomon,
      link: 'https://kream.co.kr/products/25673',
    }
  ];

  return (
    <div>
      <h2 className="title"><strong> 가장 인기 있는 모델</strong></h2>
      <ul className="popular-models-list">
        {popularModelsData.map((model, index) => (
          <li key={index} className="model-item">
            <div className="model-card">
              <a href={model.link}>
                <div className="model-image-container">
                  <img
                    src={model.imageUrl}
                    alt={model.model}
                    className="model-image"
                  />
                </div>
                <div className="model-details">
                  <p className="model-brand">{model.brand}</p>
                  <p className="model-model"><strong>{model.model}</strong></p>
                </div>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularModels;