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
import './Styles/Navbar.css';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <AppBar
      className="app-bar"
      style={{
        backgroundColor: darkMode ? 'grey.900' : 'primary.main', // Replace 'grey.900' and 'primary.main' with actual colors
      }}
    >
      <Toolbar>
        <IconButton className="icon-button" edge="start" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" className="toolbar">
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
