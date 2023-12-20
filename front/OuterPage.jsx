import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './ItemPage.css';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#F6F2EE',
    },
  },
});

const OuterPage = () => {
  const [boxes, setBoxes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function formatPrice(price) {
    return new Intl.NumberFormat('ko-KR').format(price);
  }

  useEffect(() => {
    fetch('http://localhost:8080/pageinitial', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setBoxes(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const fetchAndAddBox = () => {
    fetch(`http://localhost:8080/Is_exsist?url=${inputValue}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data === false) {
          return fetch(`http://localhost:8080/Crawling-adress?url=${inputValue}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then(response => response.json());
        } else {
          throw new Error('URL already exists');
        }
      })
      .then(data => {
        if (data !== 'false' && boxes.length < 6) {
          setBoxes(currentBoxes => [...currentBoxes, data]);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="brand-model-container">
        <h2 className="brand-title"><strong>스타일</strong></h2>
        <ul className="brand-models-list">
          {boxes.map((box, index) => (
            <li key={index} className="brand-item">
              <div className="brand-card">
                <div className="brand-image-container">
                  <img
                    src={box.imgsrc}
                    alt={box.name}
                    className="brand-image"
                  />
                </div>
                <div className="brand-details">
                  <p className="brand-name"><strong>{box.name}</strong></p>
                  <p className="brand-price">{parseInt(box.price).toLocaleString('en-US')}원</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </ThemeProvider>
  );
};

export default OuterPage;
