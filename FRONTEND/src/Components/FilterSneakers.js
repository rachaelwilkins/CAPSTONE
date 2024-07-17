import React from 'react'
import { motion } from 'framer-motion'

//FilterSneakers is the component used to filter the sneakers according to their Gender.
//This component is used in the sneakers.js page. sneakers.js is the page that displays all the sneakers.
//Props are passed from sneakers.js to Filtersneakers.js to set the activeGender and setFiltered states.

const Filtersneakers = ({ setActiveGender, activeGender, setFiltered, allSneakers }) => {


    // useEffect(() => {
    //     const filtered = allsneakers.filter(game => game.Gender_name.includes(activeGender));
    //     setFiltered(filtered);
    // }, [activeGender, allsneakers, setFiltered])

    return (
        <motion.div layout>
        <div className='p-10 flex flex-wrap flex-shrink justify-center'>
            <button onClick={() => setActiveGender('Men')} className='mr-8 m-1 lg:min-w-[5rem] font-bold px-[0.5rem] py-[1rem] border bg-none hover:bg-[#0c2b45] rounded-xl text-white'>Men</button>
            <button onClick={() => setActiveGender('Women')} className='mr-8 m-1 lg:min-w-[5rem] font-bold px-[0.5rem] py-[1rem] border bg-none hover:bg-[#0c2b45] rounded-xl text-white'>Women</button>
            <button onClick={() => setActiveGender('Boys')} className='mr-8 m-1 lg:min-w-[5rem] font-bold px-[0.5rem] py-[1rem] border bg-none hover:bg-[#0c2b45] rounded-xl text-white'>Boys</button>
            <button onClick={() => setActiveGender('Girls')} className='mr-8 m-1 lg:min-w-[5rem] font-bold px-[0.5rem] py-[1rem] border bg-none hover:bg-[#0c2b45] rounded-xl text-white'>Girls</button>
        </div>
        </motion.div>
    )
}

export default FilterSneakers;