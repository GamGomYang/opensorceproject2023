import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import pricedata from './pricedata.json';
import './modal.css'; 

const ModalData = () => {
  const chartContainer = useRef(null);
  const [visibleData, setVisibleData] = useState([]);

  useEffect(() => {
    const formattedData = pricedata.map(item => ({
      date: item.date,
      price: parseFloat(item.price.replace('원', '').replace(',', '')),
    }));
    setVisibleData(formattedData);
  }, []);

  useEffect(() => {
    if (chartContainer.current && visibleData.length > 0) {
      const ctx = chartContainer.current.getContext('2d');
      const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: visibleData.map(data => data.date),
            datasets: [{
                label: 'Price',
                data: visibleData.map(data => data.price),
                borderColor: 'red', 
                borderWidth: 1,
                pointStyle: 'cross', 
                backgroundColor: 'rgba(0, 0, 0, 0)', 
                lineTension: 0.1 
            }],
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            elements: {
                line: {
                    tension: 0 
                }
            }
        }
    
      });

      return () => {
     
        chart.destroy();
      };
    }
  }, [visibleData]);

  return (
    <div className="scroll-container">
      <canvas ref={chartContainer}></canvas>
   <ul className="custom-scrollbar"> 
        {visibleData.length > 0 && (
          <li className="header">
            <p>Date</p>
            <p>Price</p>
          </li>
        )}
        {visibleData.map((data, index) => (
          <li key={index} style={{ display: 'flex', justifyContent: 'space-around' }}>
          <p>{data.date}</p>
          <p>{data.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModalData;