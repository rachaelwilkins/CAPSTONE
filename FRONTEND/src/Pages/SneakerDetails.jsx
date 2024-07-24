import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Typography } from '@mui/material';


export default function SneakerDetails() {
    const params=useParams ()
    const shoeID=params.id 
    const [shoe, setShoe] = useState(null);
    useEffect(() => {
      axios.get(

        `http://localhost:3000/sneakers`
  
      ).then((response) => {
  
        console.log(response.data[shoeID-1]);
  
        setShoe(response.data[shoeID-1]);
  
      })
    }, []) 
  return (
    <div id='shoedetail'>
            <h2>{shoe?.name}</h2>
            <h3>${shoe?.price_nzd} NZD</h3>
            <h6>{shoe?.description}</h6>
    </div>
  )
}
