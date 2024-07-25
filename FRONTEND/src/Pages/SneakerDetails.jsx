import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";

export default function SneakerDetails() {
    const params=useParams ()
    const shoeID=params.id 
    const [shoe, setShoe] = useState(null);

    function addSneakertoCart() {
      setSneakersInCart(prev => [...prev, id]);
    }    

    function addSneakertoWish() {
      setSneakersInWish(prev => [...prev, id]);
    } 

    useEffect(() => {
      axios.get(

        `http://localhost:3000/sneakers`
  
      ).then((response) => {
        const filteredArray = response.data.filter((shoe) => shoe.id === shoeID)
        console.log(filteredArray);
  
        setShoe(filteredArray[0]);
  
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
            <h6>size:</h6>
            <button
              type="submit"
              onClick={addSneakertoCart}>
              add to cart.
            </button>
            <button
              type="submit"
              onClick={addSneakertoWish}>
              add to wishlist.
            </button>
    </div>
  )
}
