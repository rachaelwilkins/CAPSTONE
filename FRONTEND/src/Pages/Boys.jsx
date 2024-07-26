import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid } from "@mui/material";
import SneakerCard from "../Components/Card";
import React, { Component } from 'react'
import video from '../Components/Videos/boysvid.mp4'
import SearchMenu from "../Components/SearchMenu";
import Theme from "../Components/Theme/Theme";

  export default function BoysSneakers() {
    const [boyShoeList, setBoyShoeList] = useState(null);
    const [refresh, setRefresh] = useState(false);
    useEffect(() => { 
      axios.get(

        `http://localhost:8080/api/sneakers`
  
      ).then((response) => {
  
        console.log(response.data.data);
        let filteredShoes = response.data.data.filter((shoe) => shoe.gender === 'Boys')
        setBoyShoeList(filteredShoes);

      })
    }, [refresh]) 
    return (
      <Box
          sx={{
            bgcolor: 'white',
            my: 10,
            mx: 0,
            ml: 10
                }}
                ><iframe
                width='1131px'
                height = '640px'
                  autoplay
                  src={video}
        />                  
      <Theme><SearchMenu shoeList={boyShoeList} setShoeList={setBoyShoeList}/></Theme>
      <button class="button" onClick={() => setRefresh(!refresh)}>refresh.</button>            
      <Grid 
      container spacing={4}>          
            {boyShoeList?.map((product, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <SneakerCard name={product.name} price={product.price_nzd} images={product.images} id={product._id}/>
              </Grid>               
            ))}
       </Grid>
       </Box>
    )
  }
  