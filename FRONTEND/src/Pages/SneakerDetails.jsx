import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Card, CardActionArea, CardMedia, Grid } from '@mui/material';
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import DropDown from '../Components/DropDown';

export default function SneakerDetails() {
    const params=useParams ()
    const shoeID=params.id 
    const [shoe, setShoe] = useState(null);
    const [shoeSize, setShoeSize] = useState(null);
    const [sizeType, setSizeType] = useState(null);
    const womenShoeSizes=[5,6,7,8,9,10,11] 
    const menShoeSizes=[8,9,10,11,12,13] 
    const kidsShoeSizes=[1,2,3,4,5,6]

    function addSneakertoCart() {
      setSneakersInCart(prev => [...prev, id]);
    }    

    function addSneakertoWish() {
      setSneakersInWish(prev => [...prev, id]);
    } 

    useEffect(() => {
      axios.get(

        `http://localhost:8080/api/sneakers`
  
      ).then((response) => {
        const filteredArray = response.data.data.filter((shoe) => shoe._id === shoeID)
        console.log(filteredArray);
        console.log(filteredArray[0].images);
  
        setShoe(filteredArray[0]);
        if (filteredArray[0].gender==='Women'){
          setSizeType(womenShoeSizes)
        }
        else if (filteredArray[0].gender==='Men'){
          setSizeType(menShoeSizes)
        }
        else {
          setSizeType(kidsShoeSizes)
        }
      })
    }, []) 
  return (
    <div id='shoedetail'>
            {/* {shoe?.images[0]} */}
            <Grid container spacing={4}>          
            {shoe?.images.map((image, index) => (
              console.log(image),
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345, color:"transparent" }}>
              <CardActionArea sx={{ maxWidth: 345, minHeight: 400 }} style={{backgroundColor: "transparent"}} >
                <CardMedia
                component="img"
                height="275"
                image={image}
                alt="shoe"
                justifycontent="center"
                 />
                 </CardActionArea>
                 </Card>
                 </Grid>               
                ))}
           </Grid>
            <h3>{shoe?.name}</h3>
            <h3>${shoe?.price_nzd} nzd.</h3>
            <h6>{shoe?.description}</h6>
            <h6>material: {shoe?.material}</h6>
            <h6>cut: {shoe?.cut}</h6>
            <h6>heel: {shoe?.heel_size}</h6>
            <DropDown setShoeSize={setShoeSize} shoeSizes={sizeType}/>
            <button
              type="submit"
              onClick={addSneakertoCart}>
              <FaCartShopping/>
            </button>
            <button
              type="submit"
              onClick={addSneakertoWish}>
              <FaHeart/>
            </button>
    </div>
  )
}
