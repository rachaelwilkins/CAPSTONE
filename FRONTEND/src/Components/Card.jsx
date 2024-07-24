import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function SneakerCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{backgroundColor: "white"}}>
      <CardActionArea sx={{ maxWidth: 345, minHeight: 400 }} style={{backgroundColor: "white"}} >
        <CardMedia
          component="img"
          height="275"
          image={props.image[0]}
          alt="shoe"
        />
        <CardContent style={{backgroundColor: "white"}}>
          <Typography gutterBottom variant="h5" fontFamily="League Spartan" >
            {props.name}
          </Typography>
          <Typography variant="h5" color="text.secondary" fontFamily="League Spartan">
            ${props.price} NZD
          </Typography>
          <button class="button"><a href={"/sneakers/"+props.id} color='white'>try it on.</a></button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
