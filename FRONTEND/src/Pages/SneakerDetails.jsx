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
  
        setShoe(response.data);
  
      })
    }, []) 
  return (
    <div>
        {
            shoe?.rating
        }
    </div>
  )
}
