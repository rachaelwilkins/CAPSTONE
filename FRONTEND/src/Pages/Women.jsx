import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid } from "@mui/material";
import SneakerCard from "../Components/Card";
import React, { Component } from 'react'
import video from '../Components/Videos/womenvid.mp4'
import Theme from "../Components/Theme/Theme";
import SearchMenu from "../Components/SearchMenu";

  export default function WomensSneakers() {
    const [womenShoeList, setWomenShoeList] = useState(null);
    useEffect(() => {
      axios.get(

        `http://localhost:8080/api/sneakers`
  
      ).then((response) => {
  
        console.log(response.data.data);
        let filteredShoes = response.data.data.filter((shoe) => shoe.gender === 'Women')
        setWomenShoeList(filteredShoes);

      })
    }, []) 
    return (
      
  <Box
                sx={{
                    bgcolor: 'transparent',
                    my: 10,
                    mx: 0,
                    ml: 5
                }}                
                ><iframe
                width='1131px'
                height = '640px'
                  autoplay
                  src={video}
                /> 
      <Theme><SearchMenu shoeList={womenShoeList} setShoeList={setWomenShoeList}/></Theme>   
      <button class="button" onClick={() => setRefresh(!refresh)}>refresh.</button>        
      <Grid container spacing={4}>          
            {womenShoeList?.map((product, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <SneakerCard name={product.name} price={product.price_nzd} images={product.images} id={product._id}/>
              </Grid>               
            ))}
       </Grid>
       </Box>
    )
  }
