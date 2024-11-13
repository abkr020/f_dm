// src/Navbar.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTheme } from './ThemeContext';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: darkMode ? 'grey.900' : 'primary.main', // Change background color based on dark mode
      }}
    >
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Vite Material UI App
        </Typography>
        <FormControlLabel
          control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
          label="Dark Mode"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
