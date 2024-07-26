import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function SneakerCard(props) {
  const navigate=useNavigate()
  console.log(props.name)
  return (
    <Card sx={{ minHeight: 450, maxWidth: 345 }} style={{backgroundColor: "white"}}>
      <CardActionArea sx={{ color: 'transparent' }} >
        <CardMedia
          component="img"
          height="300"
          image={props.images[0]}
          alt="shoe"
          justify Content="center"
        />
        <CardContent style={{backgroundColor: "white"}}>
          <Typography gutterBottom variant="h5" fontFamily="League Spartan" color='black'>
            {props?.name}
          </Typography>
          <Typography variant="h5" color="text.secondary" fontFamily="League Spartan">
            ${props.price} NZD
          </Typography>
          <button class="button" onClick={() => navigate("/sneakers/"+props.id)}>try on.</button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
