import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './MyFavorite.css';

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

export default function MyFavorite() {
  const [containers, setContainers] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch('http://localhost:8080/pageinitial', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      setContainers(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }, []);

  const handleNext = () => {
    if (startIndex + itemsPerPage < containers.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrevious = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const renderItems = () => {
    return containers.slice(startIndex, startIndex + itemsPerPage).map((content, index) => (
      <Grid item xs={12} sm={6} md={2} key={index}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <CardMedia component="div" sx={{ pt: '56.25%' }} image={content.imgsrc} />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              gutterBottom
              variant="body1"
              component="h2"
              sx={{
                alignItems: 'center',
                color: '#333',
                display: 'flex',
                fontSize: '13px',
                fontWeight: '700',
                letterSpacing: '-.07px',
                lineHeight: '16px',
                marginBottom: '2px',
              }}
            >
              {content.name}
            </Typography>
            <Typography gutterBottom variant="body1" component="h2">
              {parseInt(content.price).toLocaleString('en-US')}원
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container sx={{ py: 8, position: 'relative' }}>
      <Typography variant="h5" component="h2" gutterBottom className='myfavorite-main-title'>
  <strong>나의 관심상품</strong> 
</Typography>
     <Grid container spacing={2} className="myfavorite-center-grid">
          {renderItems()}
        </Grid>
        <div className="myfavorite-navigation-buttons">
        <div style={{ position: 'absolute', top: 0, right: 0, display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <button onClick={handlePrevious} style={{ width: '50px', height: '20px', border: 'none', background: 'none', cursor: 'pointer' }}>
           
          </button>
          <button onClick={handleNext} style={{ width: '50px', height: '20px', border: 'none', background: 'none', cursor: 'pointer' }}>
          
          </button>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
}
