// src/CardComponent.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from './ThemeContext';
import './Styles/CardComponent.css';

const CardComponent = () => {
  const { darkMode } = useTheme();

  return (
    <Card
      className="card"
      style={{
        backgroundColor: darkMode ? '#212121' : '#ffffff', // Replace 'grey.900' and 'white' with actual colors
        color: darkMode ? '#ffffff' : '#000000', // Replace colors as needed
      }}
    >
      <CardMedia
        component="img"
        alt="Sample Image"
        height="140"
        image="https://via.placeholder.com/300"
      />
      <CardContent className="card-content">
        <Typography gutterBottom variant="h5" component="div">
          Sample Card Title
        </Typography>
        <Typography variant="body2">
          This is a sample description inside a Material UI card. You can replace this text with your own content.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
