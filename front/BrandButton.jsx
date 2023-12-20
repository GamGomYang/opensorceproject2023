import React from 'react';
import './BrandButton.css'; 
import nike from './images/brand/nike.png';
import adidas from './images/brand/adidas.png';
import newBalance from './images/brand/newbalance.png';
import crocs from './images/brand/crocs.png';
import jordan from './images/brand/jordon.png';

const BrandModel = () => {
  const popularModelsData = [
    {
      brand: 'NIKE',
      imageUrl: nike,
      link: 'https://stockx.com/ko-kr/nike',
    },
    {
      brand: 'ADIDAS',
      imageUrl: adidas,
      link: 'https://stockx.com/ko-kr/adidas',
    },
    {
      brand: 'NEW BALANCE',
      imageUrl: newBalance,
      link: 'https://stockx.com/ko-kr/new-balance',
    },
    {
      brand: 'CROCS',
      imageUrl: crocs,
      link: 'https://stockx.com/ko-kr/crocs',
    },
    {
      brand: 'JORDAN',
      imageUrl: jordan,
      link: 'https://stockx.com/ko-kr/retro-jordans',
    }, 
  ];

  return (
    <div>
      <h2 className="BrandBanner-title"><strong> 다양한 브랜드의 제품들을 발견해보세요</strong></h2>
      <ul className="BrandBanner-container">
        {popularModelsData.map((model, index) => (
          <li key={index} className="BrandBanner-item">
            <div className="BrandBanner-card">
              <a href={model.link}>
                <div className="BrandBanner-image-container">
                  <img
                    src={model.imageUrl}
                    alt={model.brand}
                    className="BrandBanner-image"
                  />
                </div>
                <div className="BrandBanner-details-container">
                  <p className="BrandBanner-name"><strong>{model.brand}</strong></p>
                </div>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandModel;
