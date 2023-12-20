import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './ItemPage.css';
import Banner_item from './Banner_item';
import charticon from './images/icon/chart.png'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ModalData from './modal';


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

const ItemPage = () => {
  const [boxes, setBoxes] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [openModal, setOpenModal] = useState(false);

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
        setBoxes(data.reverse());
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
        if (data !== 'false' && boxes.length < 50) {
          setBoxes(currentBoxes => [...currentBoxes, data]);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleChartIconClick = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Banner_item />
      <div className="brand-model-container">
        <ul className="brand-models-list">
          {
          boxes.map((box, index) => (
            <li key={boxes.length - index} className="brand-item">
              <div className="brand-card">
                <div className="brand-image-container">
                  <img
                  referrerpolicy="no-referrer"
                    src={box.imgsrc}
                    alt={box.name}
                    className="brand-image"
                  />
                </div>
                <div className="brand-details">
                  <p className="brand-name">
                    <strong>{box.name}</strong>
                    <span className="chart-icon-wrapper" onClick={handleChartIconClick}>
                      <img src={charticon} alt="Chart" className="chart-icon" />
                    </span>
                  </p>
                  <p className="brand-price">{parseInt(box.price).toLocaleString('en-US')}원</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="chart-modal-title"
        aria-describedby="chart-modal-description"
        
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400, 
          height:400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}>
          <ModalData/>

        
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default ItemPage;