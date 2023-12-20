import Banner_PlusPage from "./Banner_Pluspage";
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function PlusPage() {
    const [boxes, setBoxes] = React.useState([]);
    const [inputValue, setInputValue] = React.useState('');

    // 가격 포매팅 함수
    function formatPrice(price) {
        return new Intl.NumberFormat('ko-KR').format(price);
    }

    // 초기 박스 데이터 로드
    React.useEffect(() => {
        fetch('http://localhost:8080/pageinitial', { // 가정: 이 URL에서 초기 박스 데이터를 가져옴
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                setBoxes(data); // 초기 박스 데이터 설정
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []); // 빈 배열은 컴포넌트가 마운트될 때만 useEffect가 실행되도록 함

    // 박스 추가 로직
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

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    return (
        <div>
            <Banner_PlusPage/>
            <TextField fullWidth label="URL" id="URL" value={inputValue} onChange={handleInputChange} />
            <Button variant="contained" onClick={fetchAndAddBox}>추가하기</Button>
        </div>
    );
}

export default PlusPage;
