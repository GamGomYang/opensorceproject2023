import React from 'react';
import { Box, Typography, ThemeProvider } from '@mui/material';

const LowBanner = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Edit X
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        한눈에 알아볼 수 있는 가격비교
      </Typography>
    </Box>
  );
};

export default LowBanner;