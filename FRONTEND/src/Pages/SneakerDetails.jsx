import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";

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
            {/* {shoe?.images[0]} */}
            <h3>{shoe?.name}</h3>
            <h3>${shoe?.price_nzd} NZD</h3>
            <h6>{shoe?.description}</h6>
            <h6>material: {shoe?.material}</h6>
            <h6>cut: {shoe?.cut}</h6>
            <h6>heel: {shoe?.heel_size}</h6>
            <h6>rating:</h6>
            <h6>size:</h6>
            <button class="button"><a href="/cart" color='black'>add to cart.</a></button>
    </div>
  )
}
