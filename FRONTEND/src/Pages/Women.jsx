import { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import SneakerCard from "../Components/Card";

  export default function WomensSneakers() {
    const [womenShoeList, setWomenShoeList] = useState(null);
    useEffect(() => {
      axios.get(

        `http://localhost:3000/sneakers/`
  
      ).then((response) => {
  
        console.log(response.data);
        let filteredShoes = response.data.filter((shoe) => shoe.gender === 'Women')
        setWomenShoeList(filteredShoes);
  
      })
    }, []) 
    return (

      <Grid container spacing={4}>
            {womenShoeList?.map((product, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <SneakerCard name={product.name} price={product.price_nzd} image={product.images}/>
              </Grid>               
            ))}
       </Grid>
    )
  }
  