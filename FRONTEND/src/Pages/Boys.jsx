import { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import SneakerCard from "../Components/Card";
import React, { Component } from 'react'
import video from '../Components/Videos/boysvid.mp4'

  export default function BoysSneakers() {
    const [boyShoeList, setBoyShoeList] = useState(null);
    useEffect(() => {
      axios.get(

        `http://localhost:3000/sneakers`
  
      ).then((response) => {
  
        console.log(response.data);
        let filteredShoes = response.data.filter((shoe) => shoe.gender === 'Boys')
        setBoyShoeList(filteredShoes);

      })
    }, []) 
    return (
      // class App extends Component {
      //   render() {
      //     return (
      //       <div className="App">
      //       <video width="750" height="500" controls >
      //       <source src={video} type="video/mp4"/>
      //      </video>
      //       </div>
      //     );
      //   }   
      // }
      <Grid container spacing={4}>          
            {boyShoeList?.map((product, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}> 
              <SneakerCard name={product.name} price={product.price_nzd} image={product.images} id={product.id}/>
              </Grid>               
            ))}
       </Grid>
    )
  }
  