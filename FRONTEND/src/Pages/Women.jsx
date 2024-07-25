import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Card, CardMedia, Grid } from "@mui/material";
import SneakerCard from "../Components/Card";
import video from "../Components/Videos/womenvid.mp4"


  export default function WomensSneakers() {
    const [womenShoeList, setWomenShoeList] = useState(null);
    useEffect(() => {
      axios.get(

        `http://localhost:8080/api/sneakers`
  
      ).then((response) => {
  
        console.log(response.data);
        let filteredShoes = response.data.filter((shoe) => shoe.gender === 'Women')
        setWomenShoeList(filteredShoes);
  
      })
    }, []) 
    return (
      <>

            <Card >

<CardMedia
  sx={{ height: 400 }}
  component="iframe"
  allow="autoPlay"
  src={video}
/></Card>
  <Box
      sx={{
          bgcolor: 'background.paper',
          my: 10,
          mx: 0,
          ml: 5
      }}
      >  
      <Grid container spacing={4}>
            {womenShoeList?.map((product, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <SneakerCard name={product.name} price={product.price_nzd} image={product.images}/>
              </Grid>               
            ))}
       </Grid>
       </Box>
       </>
    )
  }
  