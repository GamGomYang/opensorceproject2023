import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BrandModel from './BrandButton';
import PopularModels from './MostPopular';
import MidBanner from './MidBanner';
import TopBanner from './TopBanner';
import MyFavorit from './MyFavorit';
import Guide from './Guide';

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

export default function MainPage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TopBanner />
      <CssBaseline />
      <AppBar position="relative" />
      <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
          </Typography>
        </Container>

        <BrandModel />

        <PopularModels />

        <MidBanner />

        

        <Guide/>

        <MyFavorit />
      </Box>
    </ThemeProvider>
  );
}