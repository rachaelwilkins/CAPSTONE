import React from 'react'
import { useState, useEffect } from 'react'

const Sneakers = () => {

    const [sneakers, setSneakers] = useState([])
    const [filtered, setFiltered] = useState([])   
    const [activeGender, setActiveGender] = useState("Men");

useEffect(() => {
    const fetchSneakers = () => {
        fetch('http://localhost:8080/sneakers/getSneakersbyGender?=genders=["Men"],["Women"],["Boys"],["Girls"]')
        .then(resp => resp.json())
        .then(({ data }) => {
          setSneakers(data);
          const filtered = data.filter(sneaker => sneaker.gender_name.includes(activeGender));
          setFiltered(filtered);
        });
    }
    fetchSneakers();
  }, [sneakers, filtered, activeGender])

  return (

    <div>
      <FilterSneakers allSneakers={sneakers} setFiltered={setFiltered} activeGender={activeGender} setActiveGender={setActiveGender} />
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-1 lg:grid-cols-4 gap-3 md:gap-1 lg:gap-4 m-20">
        {filtered.map((sneaker, id) => (
          <SneakerCard key={id} sneaker={sneaker} />
        ))}
      </div>
    </div>

  )
}

export default Sneakers;