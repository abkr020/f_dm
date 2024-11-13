// src/App.js
import React, { useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Navbar from './Navbar';
import CardComponent from './CardComponent';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      // mode: 'light'
      // mode: 'dark'
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <CardComponent />
    </ThemeProvider>
  );
}

export default App;
