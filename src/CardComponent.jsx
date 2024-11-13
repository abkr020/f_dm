import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CardComponent = () => {
  return (
    <Card sx={{ maxWidth: 345, margin: '20px auto' }}>
      <CardMedia
        component="img"
        alt="Sample Image"
        height="140"
        image="https://via.placeholder.com/300"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sample Card Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a sample description inside a Material UI card. You can replace this text with your own content.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
