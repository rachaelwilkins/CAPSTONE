import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function SneakerCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea sx={{ maxWidth: 345, minHeight: 350 }} >
        <CardMedia
          component="img"
          height="140"
          image={props.image[0]}
          alt="shoe"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${props.price} NZD
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
